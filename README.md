# Tokyo for Two

A buildless Chinese-language, map-led itinerary for November 24–27, 2026. Five pages are available: overview and Day 1 through Day 4. Publish this directory from `main` with GitHub Pages, retaining `CNAME` and `.nojekyll`.

Live site: https://tokyo.chuanbei.dev/

## Itinerary

The user explicitly chose the first four days of their private reference PDF, including the complete Kawagoe day. The PDF and private traveler information are not published. Its December dates, flights, train times, and platform assignments are not reused.

- Day 1: arrival, Dormy Inn PREMIUM Ginza, oden, hotel.
- Day 2: Tsukiji, Asakusa, Nakameguro, Daikanyama, Ebisu, Ginza dinner.
- Day 3: Wellk, Jiyugaoka, Nezu, Yanaka, Ginza.
- Day 4: Kawagoe station, Hachimangu, Kumano Shrine, Taisho Roman street, Ichibangai, Time Bell Tower, Hikawa Shrine, Kitain, return to Ginza.

Arrival at 15:00 is a planning placeholder. Day 4 retains sightseeing through the return to Ginza around 18:00; onward flights or another hotel night remain unresolved. Reservations and Wellk's proposed breakfast slot require confirmation. Dining and transport prices are estimates, with USD shown at a planning rate of 157 JPY/USD.

## Interface

The wider left column combines the current event, address, visit details, transport instructions and the day's itinerary. The right column contains the map, independent sourced-photo stream, and full-day clock below the map. No backup restaurants appear in the active interface.

The full 00:00–23:59 timeline remains seekable. Playback starts at the first actionable block and skips sleep and unconfirmed travel. Estimated leg durations determine departure times. Route markers interpolate continuously through walking and railway geometry.

Camera framing follows stable three-hour windows anchored to the first actionable time. Each window fits its visits and all overlapping travel legs, so a journey crossing a boundary remains visible. The camera changes once at the next window, rather than at every event. The full-route button and manual dragging disable following; the time-window button resumes it.

## Maps and photographs

Leaflet 1.9.4 is served locally with its license. The street view uses GSI pale tiles, with attribution. Walking geometry comes from FOSSGIS Valhalla; railway geometry comes from OpenStreetMap track relations 3302734, 443272, 443282, 443284, 5375678, 1947536, and 1926310. There are 26 connecting legs, with separate access, railway, transfer, and exit phases. Indoor connections are indicative: follow station signs. Express train station lists describe the corridor, not guaranteed stopping patterns.

The second map retains the original illustrative artwork. Its geography is schematic, including the Kawagoe inset, and must not be used as street navigation.

Photographs remain hosted by official venues, reservation providers and tourism publishers, with visible source links. Regional substitutes are explicitly labeled. These are reference images, not current seasonal views or continuous Street View footage. Google imagery is not scraped. Image failures retain links to their sources.

## Files and validation

`index.html` loads the active `journey-*.js` modules, `journey.js`, `journey.css`, and shared detail data from `data.js` and `locations.js`. Older application files are retained but are not active entry points.

Validate all five pages, every visit and route reference, chronological schedules, two map styles, transport phases, timeline seeking and playback, three-hour camera changes, manual full-route framing, photo sources and responsive layout. Cache-bust changed local assets in `index.html` before publication.
