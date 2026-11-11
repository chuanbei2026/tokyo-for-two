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

## Show avatars only for cast votes — 2026-10-28

Place cards and previews now render only voters who selected that place. Empty vote containers are hidden but retained for existing sync updates. Identity picker and vote persistence are unchanged. Verified all four person-vote combinations with isolated fixtures; no real votes written.

## Exclusive category and person filters — 2026-10-28

Category chips now select exactly one category or All. A separate visible vote filter selects All, Maomao only, Beibei only, or Both; only excludes shared votes. Vote filters combine with category, region, search and chef/source filters. Removed duplicate person choices from the advanced source dropdown. Sync refreshes filtered results after vote changes. No stored votes changed.

## Full PDF dining audit — 2026-10-28

Visually reviewed all 52 source pages and reconciled 91 explicit food/market recommendations. Added pdf-food-catalog.js (84 candidates, including one produce shop categorized as stroll) and linked 7 existing records without changing their IDs/votes. Total catalog 301. All new places have individually resolved map locations and visually checked store photos; estimated JPY/USD budgets, Chinese labels, duration and PDF page badges are present. The PDF filter composes with category/person/region/search filters. Tokyo remains the default region. See docs/pdf-food-audit.md for all 52 page outcomes, record IDs and exceptions. Source PDF is not published. Non-dining retail completeness is not claimed.

## Duplicate photo cleanup and category order — 2026-10-28

Replaced 26 shared area-placeholder images across 13 duplicate groups with individually checked place imagery. Store/address pairs now show distinct interior and entrance views; record IDs and votes are unchanged. Daiyagai uses its official East-zone photo. Kawaramachi explicitly identifies the Garden landmark illustration; Ninenzaka labels the surrounding Yasaka Tower streetscape. Cards, filter chips and legend order is now sights, food, shopping, base. Remote images remain source-linked.

## Video wishlist expansion — 2026-10-28

Added video-catalog.js: 49 new candidates, plus video provenance on 20 existing records (350 total, 69 video-linked). All named destinations in the second author's list and identifiable places from both videos' preview storyboards are represented. Exact-branch uncertainty and region anchors are disclosed. New candidates have Maps coordinates, individual source-linked photos, Chinese labels, duration, subjective recommendation and dining estimates. The video filter switches to all regions so nearby trips remain visible, then composes with category/person/search filters. Added the nearby region. Daily itineraries, existing IDs and voting contracts remain unchanged. See docs/video-wishlist-audit.md for method, coverage and unresolved brief scenes. Checked syntax, data completeness, ID preservation, browser filtering and dining budgets; no real votes written. Prepared for main/Pages publication.

## Phone wishlist layout — 2026-10-28

At widths up to 760px, wishlist cards now occupy one full-width column. The map and its toolbar float independently at the upper left; an explicit expand/shrink button provides a larger view. Search is hidden on phones, while identity remains visible and category/person/source filters live in a collapsible panel. Place details open as a bottom sheet with larger touch targets. Adaptive fit padding fixes invalid/overly tight bounds on the small map. Desktop keeps its search and three-column gallery; daily pages retain their layout. Verified 320px and 390px widths without horizontal overflow, filter persistence, preview bounds, map expansion and desktop restoration at 1280px. No votes or catalog IDs changed.

## Phone map size and visibility — 2026-10-29

Replaced the expand/shrink interaction with hide/show. The phone map is now 54vw wide (174–230px) and 148px tall, with a compact restore button when hidden. Hiding retains map dimensions and viewport; restoring does not fit or reset the user's zoom. Checked the 390px layout and both visibility states. Desktop and daily layouts are unchanged.

## Tabelog wishlist expansion — 2026-10-29

Added 10 Tokyo dining candidates with stable tabelog- IDs: Narikura, Kondo, Hachigo, Yoroniku Minami Aoyama, Konakara Honten, Ogura Ginza, Udon Shin, Hanayama Ginza, Kagari Honten and Tamawarai. Restaurant JSON-LD supplied exact branch coordinates, distinct source-linked photos and score snapshots; Chinese descriptions, planning budgets and visit/booking advice are curated. Added ratings to 8 existing candidates without changing their IDs. Cards and previews distinguish Tabelog scores from editorial fit ratings, with review counts and check date. The source dropdown can filter all 18 verified restaurants. Total catalog 360. No real votes or daily itinerary changed. Validated unique IDs, script syntax, browser filter counts, preview contents and successful loading of all 10 photos. Scores and opening/booking details remain snapshots, not live availability.

## Confirmed trip revision — 2026-11-11

- Owner confirmed November 23–27, 2026 (not October): HND arrival Nov 23 at 19:15; NRT departure Nov 27 at 15:00; PVG estimated arrival 17:35 local based on the supplied flight duration. Airline, flight number, and terminals remain unknown.
- Nov 23–24 nights: FUFU Tokyo Ginza, 1-7-10 Ginza. Nov 25–26 nights: Courtyard Tokyo Ginza, 6-14-10 Ginza. Morning luggage drop and afternoon check-in on Nov 25 are distinct.
- Pages now cover arrival night, three full touring days, and departure day. `#day1` is Nov 23, through `#day5` on Nov 27. Tuesday: Sangenjaya / Harajuku / Shibuya; Wednesday: hotel transfer / Imperial Palace / Marunouchi; Thursday: Asakusa / Ginza oden. Friday Tsukiji breakfast is fixed and removed from the main sightseeing days.
- Current owner preferences informed the itinerary; no votes were changed or copied into public source. Wishlist IDs and API integration are preserved. Two hotel entries were added; existing video airport entries are reused for wishlist membership.
- Friend can potentially join Tuesday/Wednesday and is unavailable Thursday. Restaurant recommendations and SKY time slots are not reservations. Hotel meal inclusions are unknown.
- Imperial Palace official calendar confirms Nov 24 and 27 closed, Nov 25 open. FUFU address and Courtyard property identity were checked against official sources. Narita recommends at least two hours before international departures.
- Airport main routes use taxis: estimated HND departure 20:45; Friday hotel departure 11:00, target airport 12:30. Road routes are Valhalla/OSM; terminals are provisional T3 HND / T2 NRT reference coordinates. N'EX is described as an alternative, not a booked train. Taxi prices are planning budgets, not quotes.
- Rebuilt 24 transport legs, reusing verified rail geometry for Ginza/Hanzomon/Den-en-toshi and Asakusa lines; new walking/driving legs follow road geometry. Timeline now supports all five days and does not continue sightseeing past the departure flight.
- Validation: all JS parsed; 362 unique catalog IDs; all requested destinations represented; Friday-only Tsukiji; all five timelines continuously cover 00:00–24:00; route and media references resolved. Browser smoke checks cover day switching, subway instructions, departure timeline, and wishlist.

## Nearby-first itinerary and transport page — 2026-11-11

- Reordered the full touring days at owner request: Nov 24 stays around Ginza, Imperial Palace Outer Gardens/Nijubashi, and Marunouchi; Nov 25 transfers luggage to Courtyard before Sangenjaya/Harajuku/Shibuya and meeting the friend; Nov 26 remains an independent Asakusa/oden day.
- East Gardens is closed Nov 24, so it was not blindly moved into Tuesday. It remains a wishlist candidate and can replace Thursday morning if desired. SKY suggested slot is now Nov 25 at 15:30, not Nov 24. No tickets or restaurants were booked.
- Added `#transport` between wishlist and arrival day, using the existing light basemap. `transport-data.js` stores reusable city-track geometry and clearly identified airport corridor diagrams. `transport.js` owns independent layer selection, route guides, hub details, collision-aware labels, and city/hotel/airport framing.
- Primary layers: trip connections, Haneda via Keikyu/Asakusa to Takaracho and FUFU, N'EX from Tokyo to Narita, and optional Higashi-Ginza Access Express. Secondary layers cover useful G/H/C/M sections and the full Yamanote loop; explicitly not a complete subway network map.
- Airport dashed lines show geographic corridors via reference stations, not exact track geometry or a train's stopping pattern. Dotted hotel links are connection diagrams, not turn-by-turn footpaths. Existing arrival/departure taxi itinerary remains; the new map explains rail alternatives and links to live journey planning and official operators.
- Official sources: Toei airport access, Keisei Higashi-Ginza directions, JR East N'EX ticket instructions, Tokyo Metro network map. Direct train availability and terminals remain subject to flight details and live timetable verification.
- Validation: all JS parses, revised day/route/media alignment, five continuous full-day timelines, no closed East Gardens visit Tuesday, hotel transfer preserved Wednesday. Browser checks verified layered H/Yamanote display, N'EX instructions, navigation between transport/day/wishlist pages, and updated day contents without console errors.
