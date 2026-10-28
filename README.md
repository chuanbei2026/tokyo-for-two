# Tokyo for Two

A buildless Chinese-language, map-led itinerary for November 24–27, 2026. Five pages are available: overview and Day 1 through Day 4. Publish this directory from `main` with GitHub Pages, retaining `CNAME` and `.nojekyll`.

Live site: https://tokyo.chuanbei.dev/

## Itinerary

The user chose days 1–3 of their private reference PDF and replaced Kawagoe with the PDF’s original day 5. The PDF and private traveler information are not published. Its December dates, flights, train times, and platform assignments are not reused.

- Day 1: arrival, Dormy Inn PREMIUM Ginza, oden, hotel.
- Day 2: Tsukiji, Asakusa, Nakameguro, Daikanyama, Ebisu, Ginza dinner.
- Day 3: Wellk, Jiyugaoka, Nezu, Yanaka, Ginza.
- Day 4: titoten breakfast, Sangenjaya Gorilla Building, Carrot Tower, Setagaya tram to Yamashita, Gotokuji Temple, SAMURAI. curry, Shimokitazawa Ichibangai, reload, BONUS TRACK, Kichijoji Sunroad, Harmonica Yokocho dinner, return to Ginza via Yotsuya.

Arrival at 15:00 is a planning placeholder. Day 4 retains sightseeing through the return to Ginza around 20:00; onward flights or another hotel night remain unresolved. Reservations and Wellk's proposed breakfast slot require confirmation. Dining and transport prices are estimates, with USD shown at a planning rate of 157 JPY/USD.

## Interface

The wider left column is a chronological list of separate visit/dining and commute cards. Current details expand inside the corresponding card; there is no separate current-event panel. The right column contains the map, independent sourced-photo stream, and full-day clock below the map. No backup restaurants appear in the active interface.

The full 00:00–23:59 timeline remains seekable. Playback starts at the first actionable block and skips sleep and unconfirmed travel. Estimated leg durations determine departure times. Route markers interpolate continuously through walking and railway geometry.

Camera framing follows stable three-hour windows anchored to the first actionable time. Each window fits its visits and all overlapping travel legs, so a journey crossing a boundary remains visible. The camera changes once at the next window, rather than at every event. The full-route button and manual dragging disable following; the time-window button resumes it.

## Maps and photographs

Leaflet 1.9.4 is served locally with its license. The street view uses a CARTO Voyager vector basemap rendered by MapLibre GL JS 5.6.2 and its Leaflet binding 0.1.4, with visible CARTO/OpenStreetMap attribution. The provider style is fetched at runtime so its source, glyph and sprite endpoints stay current. Unrelated POIs, building footprints, house numbers and minor-road labels are hidden; available Chinese labels are preferred, followed by English. No Google tiles are used. CARTO currently permits keyless vector styles; its service policy and availability remain external dependencies. Walking geometry comes from FOSSGIS Valhalla; railway geometry comes from OpenStreetMap track relations 3302734, 443272, 443282, 443284, 5375678, 1947536, 443281, 8026159, 9341815, 7215409, 12458961, 11602038, and 10363875. There are 27 connecting legs, with separate access, railway, transfer, and exit phases. Indoor connections are indicative: follow station signs. Express train station lists describe the corridor, not guaranteed stopping patterns.

The second map retains the original illustrative artwork. Its geography is schematic, including the western Tokyo stops, and must not be used as street navigation.

Photographs remain hosted by official venues, reservation providers and tourism publishers, with visible source links. Regional substitutes are explicitly labeled. These are reference images, not current seasonal views or continuous Street View footage. Google imagery is not scraped. Image failures retain links to their sources.

## Files and validation

`index.html` loads the active `journey-*.js` modules, `journey.js`, `journey.css`, and shared detail data from `data.js` and `locations.js`. Older application files are retained but are not active entry points.

Validate all five pages, every visit and route reference, chronological schedules, two map styles, transport phases, timeline seeking and playback, three-hour camera changes, manual full-route framing, photo sources and responsive layout. Cache-bust changed local assets in `index.html` before publication.

## Keyboard and image controls

Left/right arrows jump between actionable timeline segments, and Space toggles playback. Shortcuts ignore modifiers, repeated keys, editable fields, native range/select controls and open dialogs. The photo stream provides previous/next frame buttons, seekable thumbnails and a click-to-enlarge sourced image dialog. Sleep and unconfirmed blocks do not create photo frames.

## Day 4 planning notes

The full sightseeing day is provisional until departure flights are known. The PDF’s old train times/platforms are not bookings or current timetables. Allow approximately 15 minutes between Gotokuji Temple and the Odakyu/Setagaya stations, following the temple’s current access guidance. At Omotesando, take a Hanzomon service continuing onto Den-en-toshi; Shibuya is a through-service boundary with no walking phase. Odakyu uses a local train. Keio and JR station strips show the route corridor, not a promise that express trains stop at every station. Photograph credits identify official venue or tourism publisher images; the Setagaya tram uses Tokyu’s official 300-series reference photo.

## Overview orientation map

Overview shows itinerary points and five orientation landmarks: Narita Airport, Shibuya Crossing, Sensoji, Shinjuku, and Akihabara. Only the Yamanote railway corridor (OSM relation 5376382) is drawn; daily connecting legs appear on day pages only. A separate Narita inset preserves city-scale legibility. The airport button focuses the main map on Narita; the Tokyo city button restores city framing. Landmark pins do not add visits to the itinerary.

## Overview destination catalog

The overview uses `overview-catalog.js` for the key destinations in the current four-day plan, the earlier Tokyo plan, and the user's nine-day reference PDF. Tokyo, Kawagoe, and Kyoto/Uji are separate region filters. PDF shop suggestions without verified branch coordinates remain explicitly named in their parent neighborhood's description; they are not falsely plotted as precise storefronts. Coordinates represent landmark centers, not guaranteed accessible entrances.

`journey-overview.js` displays individual destinations without count clusters. Collision handling prioritizes sights, then neighborhoods, then restaurants as the map zooms in. A single-category filter, search, or wishlist filter bypasses category zoom thresholds. A static preview appears only after selecting a destination. The comic switch and automatic photo-stream script are removed from the active page.

`trip-checks.js` handles the wishlist checkboxes (想去). Without a share link, checks stay in this browser's localStorage, and the interface says so. With the private share link (`#share=…`, never committed), checks sync between devices through a small AWS API (Lambda Function URL + DynamoDB; see `infra/wishlist-api/README.md`). In that mode the list loads when the page opens, refreshes when the page regains focus and every 20 seconds while it is visible, and shows saving, synced, or failed-with-retry states. Unchecking syncs too. Checks made earlier on a device without the link are never merged silently; a one-time 「合并本机勾选」 button offers it.

Airport access is a separate optional overlay: Keisei Narita SKY ACCESS Access Express through service onto the Toei Asakusa Line, alighting at Higashi-Ginza. The dashed line connects major station coordinates as a schematic, not exact rail geometry. Official sources, terminal caveats, through-service conditions, indicative fares, and hotel exits are linked in the route card. No historical PDF departure time is treated as a current timetable. Checked against Keisei and the hotel's official access page on 2026-10-27.
