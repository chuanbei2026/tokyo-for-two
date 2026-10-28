// Shared "想去" wishlist for two people, behind a Lambda Function URL (auth NONE).
// Every request must carry the trip passcode in the X-Trip-Key header; only its SHA-256
// is configured (KEY_SHA256). The passcode, the header and request bodies are never logged.
//
//   GET  /checks             -> { items: { placeId: { checked, updatedAt } }, serverTime }
//   PUT  /checks/{placeId}   body { checked: boolean }       -> { id, checked, updatedAt }
//   POST /checks/merge       body { ids: [placeId, ...] }    -> { items: {...} }  (checks each id)
//
// Per-person votes (毛毛 / 贝贝), stored independently per (place, person):
//   GET  /votes                     -> { votes: { placeId: { person: { checked, updatedAt } } }, serverTime }
//   PUT  /votes/{placeId}/{person}  body { checked: boolean }  -> { id, person, checked, updatedAt }
//   POST /votes/merge               body { person, ids: [...] } -> { votes: {...} }  (votes yes on each id)
//
// One DynamoDB item per (trip, place), so two people editing different places never
// overwrite each other; for the same place the write the server accepts last wins.

import { createHash, timingSafeEqual } from "node:crypto";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, QueryCommand } from "@aws-sdk/lib-dynamodb";

const TABLE = process.env.TABLE_NAME;
const TRIP = process.env.TRIP_ID || "tokyo-2026-11";
const KEY_SHA256 = Buffer.from(process.env.KEY_SHA256 || "", "hex");
const PLACE_ID = /^[a-z0-9][a-z0-9-]{0,63}$/;
const MAX_ITEMS = 500;
const PEOPLE = new Set((process.env.PEOPLE || "maomao,beibei").split(","));
const VOTE = "vote#"; // sort-key prefix: vote#<placeId>#<person>

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));

const json = (statusCode, body) => ({
  statusCode,
  headers: { "content-type": "application/json", "cache-control": "no-store" },
  body: JSON.stringify(body),
});

function authorized(headers) {
  const key = headers["x-trip-key"];
  if (typeof key !== "string" || key.length < 20 || key.length > 200 || KEY_SHA256.length !== 32) return false;
  return timingSafeEqual(createHash("sha256").update(key).digest(), KEY_SHA256);
}

function parseBody(event) {
  if (!event.body || event.body.length > 20000) return null;
  try {
    return JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body);
  } catch {
    return null;
  }
}

async function readAll() {
  const items = {};
  let ExclusiveStartKey;
  do {
    const page = await db.send(new QueryCommand({
      TableName: TABLE,
      KeyConditionExpression: "trip = :t",
      ExpressionAttributeValues: { ":t": TRIP },
      ExclusiveStartKey,
    }));
    for (const it of page.Items || []) items[it.place] = { checked: it.checked === true, updatedAt: it.updatedAt };
    ExclusiveStartKey = page.LastEvaluatedKey;
  } while (ExclusiveStartKey);
  return items;
}

async function readVotes() {
  const votes = {};
  for (const [key, v] of Object.entries(await readAll())) {
    if (!key.startsWith(VOTE)) continue;
    const [id, person] = key.slice(VOTE.length).split("#");
    (votes[id] ||= {})[person] = v;
  }
  return votes;
}

async function write(place, checked) {
  const updatedAt = new Date().toISOString();
  await db.send(new PutCommand({ TableName: TABLE, Item: { trip: TRIP, place, checked, updatedAt } }));
  return { checked, updatedAt };
}

export async function handler(event) {
  const method = event.requestContext?.http?.method || "GET";
  const path = (event.rawPath || "/").replace(/\/+$/, "") || "/";
  const headers = Object.fromEntries(Object.entries(event.headers || {}).map(([k, v]) => [k.toLowerCase(), v]));

  if (method === "OPTIONS") return { statusCode: 204 };
  if (!authorized(headers)) {
    console.log(JSON.stringify({ outcome: "unauthorized", method, route: path.split("/").slice(0, 2).join("/") }));
    return json(401, { error: "unauthorized" });
  }

  try {
    if (method === "GET" && path === "/checks") {
      const items = Object.fromEntries(Object.entries(await readAll()).filter(([k]) => !k.startsWith(VOTE)));
      return json(200, { items, serverTime: new Date().toISOString() });
    }
    if (method === "GET" && path === "/votes") {
      return json(200, { votes: await readVotes(), serverTime: new Date().toISOString() });
    }
    if (method === "POST" && path === "/votes/merge") {
      const body = parseBody(event);
      const ids = Array.isArray(body?.ids) ? [...new Set(body.ids)] : null;
      if (!PEOPLE.has(body?.person) || !ids || ids.length > MAX_ITEMS || !ids.every((id) => typeof id === "string" && PLACE_ID.test(id))) {
        return json(400, { error: "bad_request" });
      }
      const votes = {};
      for (const id of ids) votes[id] = { [body.person]: await write(`${VOTE}${id}#${body.person}`, true) };
      console.log(JSON.stringify({ outcome: "votes_merged", count: ids.length }));
      return json(200, { votes });
    }
    const v = path.match(/^\/votes\/([^/]+)\/([^/]+)$/);
    if (method === "PUT" && v) {
      const id = decodeURIComponent(v[1]), person = decodeURIComponent(v[2]);
      const body = parseBody(event);
      if (!PLACE_ID.test(id) || !PEOPLE.has(person) || typeof body?.checked !== "boolean") return json(400, { error: "bad_request" });
      return json(200, { id, person, ...(await write(`${VOTE}${id}#${person}`, body.checked)) });
    }
    if (method === "POST" && path === "/checks/merge") {
      const body = parseBody(event);
      const ids = Array.isArray(body?.ids) ? [...new Set(body.ids)] : null;
      if (!ids || ids.length > MAX_ITEMS || !ids.every((id) => typeof id === "string" && PLACE_ID.test(id))) {
        return json(400, { error: "bad_request" });
      }
      const items = {};
      for (const id of ids) items[id] = await write(id, true);
      console.log(JSON.stringify({ outcome: "merged", count: ids.length }));
      return json(200, { items });
    }
    const m = path.match(/^\/checks\/([^/]+)$/);
    if (method === "PUT" && m) {
      const id = decodeURIComponent(m[1]);
      const body = parseBody(event);
      if (!PLACE_ID.test(id) || typeof body?.checked !== "boolean") return json(400, { error: "bad_request" });
      return json(200, { id, ...(await write(id, body.checked)) });
    }
    return json(404, { error: "not_found" });
  } catch (err) {
    console.error(JSON.stringify({ outcome: "error", name: err?.name, method }));
    return json(500, { error: "server_error" });
  }
}
