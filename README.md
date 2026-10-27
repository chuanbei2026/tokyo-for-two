# Tokyo: A Table for Two

A buildless, Chinese-language map-led travel guide for two first-time visitors to Tokyo on November 24-27, 2026.

## Pages

The active app has exactly five hash-addressable pages: `#overview` and `#day1` through `#day4`. Each shows only the recommended itinerary. Backup restaurants remain in the historical source files but are not displayed or loaded by the active backup module.

- `index.html`, `journey.css`, `journey.js`: active interface.
- `journey-data.js`: recommended stops and every connecting transport leg.
- `data.js`, `locations.js`: detailed landmark, restaurant, address and source information reused by dialogs.
- `assets/vendor/`: pinned Leaflet 1.9.4 with its license, served locally.
- Older `app.js`, `tour.js`, `map-views.js`, `backups.js`, and `style.css` are retained for history but are not entry points.

## Map semantics

The default map uses GSI Japan pale street tiles with visible attribution and subdued styling. Landmark centers use approximate latitude/longitude. Connections show recommended travel modes and visit order, not road routing or precise railway geometry. Every leg links to live directions. A second illustrated map uses the original schematic artwork. Labels avoid one another where space permits; zoom or open a numbered stop for details.

Transport is encoded redundantly by text and line style: dotted walking, solid rail, dashed taxi. All daily routes include the hotel and return legs. Airports are not plotted until the actual airport and flight are confirmed; the departure dialog explains the assumptions and both airport options.

## Itinerary choices

A privately supplied nine-day reference PDF informed the Tsukiji/Asakusa and Nezu/Yanaka portions. Day two replaces Ueno/Ameyoko with Nezu and Yanaka, rather than adding more stops. The source PDF and traveler details are not published. Its December dates and exact departure times are not reused.

Day one assumes arrival near midday and hotel arrival around 15:00. Day four sightseeing assumes an evening flight. Hotel and restaurant entries are suggestions, not reservations. Operational details were reviewed on 2026-10-27. Travel times and taxi prices are planning estimates, not live quotes. Dining and transport budgets use JPY with indicative USD at 157 JPY/USD. Subway fares specifically labeled IC use the Tokyo Metro April 2026 reference; other prices are marked estimates.

## Preview and publication

Serve this directory with any static HTTP server. No build step is needed. Publish from the root of `main` on GitHub Pages; retain `CNAME` and `.nojekyll`. Cache-bust changed local assets in `index.html`.

Live website: https://tokyo.chuanbei.dev/

## Artwork

`assets/tokyo-atlas.png` is the original AI-generated Tokyo illustration. It is an artistic overview and is not navigation imagery. The upper-left storyboard embeds reference photos from official venues and tourism publishers with source links. These are not current seasonal photographs. Kyubey uses an explicitly labeled Ginza-area photo because its image host serves an access-denied image; hotel imagery is a sample room, not a booked room. Transportation uses original inline SVG illustrations, explicitly labeled as diagrams, not photos of actual platforms.

## Validation

Check all five routes, page history, transport details, stop dialogs, map view switching, playback, attribution, small-screen layout, and the absence of backup entries in the active UI. Every day must have exactly one fewer transport leg than visits; every visit must resolve to a known point.

## Visual route playback

`journey-story.js` alternates every visit with every connecting transport leg, including hotel returns. Each step has a persistent upper-left card, previous/next controls, resumable playback, progress and map focus. Transport cards show the line or mode, direction, boarding/alighting instructions, time, cost and live navigation link. Reduced-motion preferences avoid animated camera moves. `journey-media.js` maps every recommended stop to a sourced visual reference. Remote images fall back to a source link if unavailable; tile errors are displayed explicitly.
