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

## Avatar correction — 2026-10-27

Replaced both mismatched voter images with a visually verified paired Maltese/Golden Retriever set. Maomao is white, Beibei is yellow. Increased avatar sizes and removed grayscale on uncast votes. Voting identities and persistence are unchanged. Source is documented in the root README.

## Card-led wishlist layout — 2026-10-27

Overview now uses a small sticky map and selection controls on the left, with a three-column photo card gallery on the right (two or one columns on smaller screens). Overview controls are moved into the map section after each sidebar render and removed when switching to a daily page. Place previews attach to the document body so they do not obscure the small map. Card clicks center the map without the previous large-map offset. Daily itinerary layout and vote persistence remain unchanged. Browser validation covered three-column rendering, place preview, and Day 1/overview round-trip.

## Imperial Palace wishlist addition — 2026-10-27

Added imperial-palace-gaien and imperial-palace-east-gardens after the owner expressed interest. Both include official tourism photos, coordinates, access guidance, and separate visit descriptions. Official November 2026 calendar confirms East Gardens closed Nov 24/27 and open Nov 25/26; seasonal hours are recorded. Entries are candidates, not assigned to a day, and no person-specific votes were written. Total catalog: 217.

## Wishlist recommendation guidance — 2026-10-28

Added wishlist-guidance.js before overview rendering: every candidate has an editorial trip-fit recommendation, a planning duration, and expanded advice. Key Tokyo destinations have individually curated entries; remaining entries use explicit category/type-based planning heuristics from existing catalog data. These are subjective fit scores, not external review ratings. Closures/address-only points remain unrated; out-of-Tokyo entries are low priority for this trip with an explanation. Durations exclude transit and queues. All 217 records validated for complete guidance. Cards and detail previews use the same helper; voting is unchanged.

## Wishlist photo quality — 2026-10-28

Audited all 131 Google photo URLs from the chef list at 1200x900 maximum resolution: all returned valid images, although five originals remain small. Updated the catalog to those larger sources with measured dimensions and portrait-aware containment (58 images including the official Hakuhodo replacement). Replaced Astier's window photo with the official Tokyo store interior, added a sourced Baise tableware photo, and replaced the broken Hakuhodo Street View link with its official store photo. Three remaining address-only entries had broken Street View URLs; they now explicitly show no verified photo rather than a broken image. Total chef entries remain 136; 133 have photos. This was a URL/dimension audit of all images plus visual inspection of selected replacements, not a manual aesthetic review of every photo. Sources stay remote and lazy-loaded; their availability is external. Full-photo links are available from place previews. Browser verified Baise loading at 1200x800 and card/preview interaction; votes and IDs unchanged.

## Chinese labels and contextual photo review — 2026-10-28

All 136 chef entries now use Chinese-readable name labels with originalName retained. Brand labels are often descriptive category translations, not claimed official names; previews explain this. Search covers both names. SHIBUYA SKY also has a Chinese label. Guidance includes originalName to preserve category recognition. Reviewed all chef images via contact sheets and selected full-size replacements; replaced 18 misleading, poorly framed or blank photos using verified source pages. See docs/photo-review.md for sources and unresolved cases. Two address entries now explain the cotogoto/MEALS building association, but retain separate IDs and unspecified original intent. No votes, coordinates or navigation queries changed.

## Per-person dining budgets — 2026-10-28

Added wishlist-budgets.js for all 33 food-category entries. Cards and previews share the same budget renderer. 32 Japanese entries have explicit per-person planning ranges (JPY using 円 and USD at the existing non-live 157 JPY/USD rate); the Canadian chocolate shop explicitly remains unpriced. Souvenir purchases and market tastings are identified separately from meals. Eight entries use linked official menu/booking anchors; remaining ranges are clearly provisional planning estimates, not verified average checks. Expandable notes explain inclusions, meal periods, premium upgrades and fee uncertainty. No votes, IDs or daily playback changed.

## Stable wishlist map on selection — 2026-10-28

Selecting a wishlist card opens its detail preview and highlights its marker without changing the map center or zoom. Removed the card-click setView call. Marker selection already preserves the viewport; manual zoom and explicit region/airport fit controls remain available.
