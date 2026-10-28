# Codex context

Updated: 2026-10-27
Last deployed application commit: `3764045e4f5e43524cffe6861656f8b913d02342`

## Completed and deployed

- The overview is now a shared wishlist, with separate Maomao and Beibei identity selection and vote badges. An identity must be selected before voting.
- `trip-checks.js` integrates the deployed per-person `/votes` API and preserves legacy unassigned checks. Local-only usage remains possible; cloud sync requires the private share link.
- Imported all 136 entries from the owner's shared Google Maps Japan Shopping list into `chef-catalog.js`, bringing the catalog to 215 entries. Tokyo 62, Kyoto 50, Osaka/Hyogo 21, Fuji 1, Canada 2.
- Added a chef source filter, source badges, creator notes, place URLs, regional filtering, and closure/address-only annotations. Original photos are available for 135 imported entries; one has an explicit missing-photo fallback.
- Imported IDs use a stable `chef-` prefix and fit the backend's place ID validation. Do not regenerate these IDs.
- The chef source designation does not cast a vote for either person.

## Frontend structure

- `overview-catalog.js`: original 79 candidate destinations.
- `chef-catalog.js`: 136 imported entries, appended to the original catalog before overview rendering.
- `journey-overview.js`: source/category/region/search filters, collision-aware map markers, place preview, voting controls.
- `trip-checks.js`: identity, local persistence, cloud integration, legacy checks.
- `journey.css`, `index.html`: presentation and ordered script loading. Local asset query hashes must be refreshed after edits.
- Daily trip modules retain the four-day schedule and player. Do not reintroduce the removed comic map or autoplay photo stream.

## Persistence contract in use

- `GET /votes`: nested `votes[placeId][person]` with `checked` and `updatedAt`.
- `PUT /votes/{placeId}/{person}`: `{ checked: boolean }`.
- Header: `X-Trip-Key`, obtained from the private share link, never committed.
- Internal local/cache keys use `vote-maomao--<placeId>` or `vote-beibei--<placeId>`.
- Legacy `/checks` are retained as unassigned choices, with explicit user action to copy into a person's votes.
- Polling happens every 20 seconds while visible and on focus. Failed writes remain pending for retry.

## Validation

- All 215 IDs are unique and valid for the backend; JavaScript syntax and diff checks passed.
- Browser checks confirmed 62 Tokyo chef entries, 136 across all regions, original-note search, exact-place navigation, loaded photos, and the identity gate enabling new-item voting.
- GitHub Pages reported `built` for the commit above; the live site showed 215 entries.
- No real user votes were changed during this import.

## Active work

No application edits in progress. Establishing this shared handoff directory at the owner's request.

## Known gaps

- Small shops mentioned in the reference PDF are not all independently cataloged yet; the UI explicitly says this.
- Four chef entries are address-only points and may overlap nearby stores. They are labeled rather than merged speculatively.
- Store photos and closure statuses are external snapshots and may change.
- Return flight details remain unknown. Do not assume the current final-day schedule fits an unspecified departure.

## Requests for the other agent

Please read `docs/handoff/README.md` and replace the placeholder in `claude-code.md` with your current backend/deployment context. Confirm the current API contract and any work you have in progress. Do not put secrets or the private share URL in these public files.
