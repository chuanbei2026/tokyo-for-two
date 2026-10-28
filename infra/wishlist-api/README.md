# Shared wishlist API

Lets the two of us share the "想去" checks across devices without accounts. The site stays on GitHub Pages; only this small API runs on AWS.

```
browser (tokyo.chuanbei.dev)  ──HTTPS, header X-Trip-Key──▶  Lambda Function URL (auth NONE)
                                                               │ checks SHA-256(passcode) == KEY_SHA256
                                                               ▼
                                                       DynamoDB (on demand), one item per (trip, place)
```

- Account `253490784328` (personal, profile `claude-agent`), region `us-west-2`.
- Lambda `tokyo-for-two-wishlist` (Node.js 22, 256 MB, 10 s, reserved concurrency 2), with a public Function URL.
- DynamoDB table `tokyo-for-two-wishlist` (on demand): key `trip` + `place`, attributes `checked` and `updatedAt` (server time).
- IAM role `tokyo-for-two-wishlist-role`: `dynamodb:Query` and `dynamodb:PutItem` on this table only, plus writing its own logs. It is created with the account's `ClaudeWorkloadBoundary` permissions boundary.
- Log group `/aws/lambda/tokyo-for-two-wishlist`, kept for 14 days. Logs contain outcomes only, never the passcode, headers or bodies.
- CORS allows only `https://tokyo.chuanbei.dev`. CORS is not access control: every request is still checked against the passcode.

## API

| Request | Body | Result |
|---|---|---|
| `GET /checks` | | `{ items: { placeId: { checked, updatedAt } }, serverTime }` |
| `PUT /checks/{placeId}` | `{ "checked": true \| false }` | the stored item |
| `POST /checks/merge` | `{ "ids": [placeId, ...] }` | checks each id; used once to merge older local checks |
| `GET /votes` | | `{ votes: { placeId: { person: { checked, updatedAt } } }, serverTime }` |
| `PUT /votes/{placeId}/{person}` | `{ "checked": true \| false }` | the stored vote; `person` is `maomao` or `beibei` |
| `POST /votes/merge` | `{ "person": "maomao", "ids": [placeId, ...] }` | votes yes for that person on each id |

Votes (毛毛 / 贝贝) are stored per (place, person), as items whose sort key is `vote#<placeId>#<person>`, so one person's vote never overwrites the other's. A missing or wrong `X-Trip-Key` returns 401. Unchecking is stored as `checked: false`, so it syncs like a check. Different places are separate items and never overwrite each other. For the same place, the write the server accepts last wins.

## The share link

The link has the form `https://tokyo.chuanbei.dev/#share=<passcode>`. The passcode sits in the URL fragment, so browsers never send it to GitHub Pages. The page moves it into localStorage and removes it from the address bar. Only its SHA-256 is stored in AWS (the Lambda environment variable `KEY_SHA256`).

The current link is kept outside the repo, in `~/.secrets/tokyo-for-two/share-link.txt` (mode 600). Never commit it.

## Maintenance

All scripts check that the profile really is account 253490784328 before doing anything.

| Task | Command |
|---|---|
| Deploy or update the code (keeps the passcode) | `./deploy.sh` |
| New share link (the old one stops working; the list is kept) | `./rotate-key.sh`, then open the new link from `~/.secrets/tokyo-for-two/share-link.txt` on both phones |
| Export the list as JSON | `./export.sh > wishlist.json` |
| Pause the service (the list is kept) | `aws lambda put-function-concurrency --function-name tokyo-for-two-wishlist --reserved-concurrent-executions 0 --region us-west-2 --profile claude-agent` |
| Resume | `./deploy.sh` |
| Remove everything | export first, then delete the function URL, the function, the table, the role (inline policy `access` first) and the log group |

## Cost

For two people this stays inside the AWS free tier, or a few cents a month without it:

- Lambda: about 3 requests a minute while the page is open (20-second polling, only while the page is visible), each about 10 ms.
- DynamoDB on demand: one tiny item per place, read with one query per refresh.
- CloudWatch Logs: a few short lines per request, kept for 14 days.

There is no fixed monthly charge: no API Gateway, NAT gateway or provisioned capacity.
