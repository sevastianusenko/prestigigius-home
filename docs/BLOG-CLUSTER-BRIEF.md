# BLOG CLUSTER BRIEF — 2 supporting articles per topic (34 articles)

Follow everything in `docs/BLOG-BRIEF.md` (format, honesty, photos, Florida angle, FAQ, CTA, TypeScript tips) with these changes:

- Each article targets ONE distinct sub-keyword (below) so it does not compete with the topic's existing **pillar** article. Do not re-explain the pillar topic at length — summarize in 1–2 sentences and link to it.
- **Internal links (required):** use `[anchor text](/resources/<slug>)` inline (rendered by PostBody). Each article must link to (1) its topic pillar, (2) its sibling article in the same topic, and (3) 1–2 relevant service pages, e.g. `[impact window installation](/services/impact-windows-doors)`. Natural anchors, no "click here".
- Length 1,200–1,700 words. Answer-first intro. FAQ `## Frequently Asked Questions` with 4–5 `### …?`.
- 2–3 inline stock photos + cover (Unsplash/Pexels, verified HTTP 200 with curl; reuse from `src/content/photos.ts` when fitting). Caption ends with "Stock photo." Alt text literal.
- `date: "2026-10-22"`. `seoTitle` ≤ 60, `seoDescription` 140–155. `keywords` = primary + 3–6 secondary.
- Costs: impact windows $1,200–$3,800/opening, impact sliders $4,500–$14,000, tub-to-shower $12k–$22k, Hardie siding $22k–$60k per house, stucco crack repair $1.5k–$7k, re-texture & paint $12k–$32k (all "typical 2026 SWFL"). Any other figure must be labelled "typical" and conservative.
- Not relevant to Florida (basements, window wells, snow): say so briefly and pivot to what Florida homeowners actually need.

Each agent writes ONE file `src/content/blog-posts/<letter>.ts` exporting `posts<Letter>: Post[]`. No other file edits.

## Articles

| T | Pillar slug | New slug | Primary keyword (US vol) | Secondary | Sibling |
|---|---|---|---|---|---|
| 1 | what-is-a-window-buck | what-is-a-door-jamb | what is a door jamb (5,400) | rotted door jamb repair, door frame parts, exterior door jamb replacement | window-casing-guide |
| 1 | what-is-a-window-buck | window-casing-guide | window casing (8,100) | window casing vs trim, window jamb vs casing, interior window casing styles | what-is-a-door-jamb |
| 2 | exterior-window-trim-stucco | window-trim-ideas | window trim ideas (4,400) | exterior window trim ideas (2,400), interior window trim ideas (2,400), coastal/Florida styles | pvc-window-trim-exterior |
| 2 | exterior-window-trim-stucco | pvc-window-trim-exterior | pvc window trim exterior (2,400) | window trim replacement cost (1,000), exterior window trim replacement (590), wood vs PVC vs foam | window-trim-ideas |
| 3 | window-flashing-liquid-applied | window-flashing-tape | window flashing tape (6,600) | best window flashing tape (260), window flashing tape installation (260), butyl vs acrylic | aluminum-window-capping |
| 3 | window-flashing-liquid-applied | aluminum-window-capping | aluminum window capping (880) | window flashing metal (1,000), aluminum window flashing (480), capping on Florida homes | window-flashing-tape |
| 4 | house-wrap-vs-zip-system | house-wrap-installation | house wrap installation (590) | house wrap tape (1,600), tyvek house wrap installation (480), lap direction, window integration | house-wrap-under-siding |
| 4 | house-wrap-vs-zip-system | house-wrap-under-siding | siding house wrap (1,300) | vinyl siding house wrap (720), best house wrap (480), do you need house wrap under siding | house-wrap-installation |
| 5 | casement-windows-florida | vinyl-casement-windows | vinyl casement windows (5,400) | vinyl vs aluminum casement in Florida, impact vinyl casement, cost | double-casement-windows |
| 5 | casement-windows-florida | double-casement-windows | double casement windows (2,400) | french casement windows (1,600), push out casement windows (320), crank out windows | vinyl-casement-windows |
| 6 | egress-window-requirements-florida | egress-window-for-bedroom | egress window for bedroom (1,600) | egress window cost (1,300), egress window requirements for bedroom (390), impact egress | legal-bedroom-requirements-florida |
| 6 | egress-window-requirements-florida | legal-bedroom-requirements-florida | what makes a room a bedroom (check), legal bedroom requirements | garage conversion bedroom, closet myth, window/egress, smoke alarms — tell readers to confirm with building dept | egress-window-for-bedroom |
| 7 | laminated-vs-tempered-glass | tempered-glass-windows | tempered glass windows (4,400) | tempered glass windows code (260), tempered glass window replacement (210), tempered glass window for bathroom (880) | can-you-cut-tempered-glass |
| 7 | laminated-vs-tempered-glass | can-you-cut-tempered-glass | can you cut tempered glass (1,600) | tempered glass cutting (880), custom tempered glass (880), how to tell if glass is tempered | tempered-glass-windows |
| 8 | single-hung-vs-double-hung-windows | single-hung-window-replacement-cost | single hung window replacement cost (2,400) | single hung window replacement (880), vinyl single hung windows (1,300), single hung windows prices (260) | mulled-windows |
| 8 | single-hung-vs-double-hung-windows | mulled-windows | mulled windows (1,000) | window mulling kit (880), mulled impact windows, structural mullions & design pressure | single-hung-window-replacement-cost |
| 9 | pgt-vs-es-vs-cws-impact-windows | hurricane-impact-windows-cost | hurricane impact windows cost (320) + impact windows cost (880) | hurricane impact windows prices (320), impact windows cost calculator (480) | impact-windows-vs-hurricane-windows |
| 9 | pgt-vs-es-vs-cws-impact-windows | impact-windows-vs-hurricane-windows | impact windows vs hurricane windows (210) | hurricane windows vs impact windows (170), hurricane impact windows (1,900), storm windows vs impact | hurricane-impact-windows-cost |
| 10 | impact-sliding-glass-doors | sliding-glass-door-replacement-cost | sliding glass door replacement cost (5,400) | sliding glass door replacement (9,900), labor cost to replace sliding glass door (390), 8-foot sliding glass door cost (170) | sliding-french-doors-vs-sliding-glass-doors |
| 10 | impact-sliding-glass-doors | sliding-french-doors-vs-sliding-glass-doors | sliding french doors exterior (1,900) | 4 panel sliding glass door (1,600), french doors vs sliding doors, double sliding door exterior (720) | sliding-glass-door-replacement-cost |
| 11 | outswing-vs-inswing-front-door | front-door-replacement-cost | front door replacement cost (4,400) | labor cost to replace exterior door (590), labor cost to remove and install exterior door and frame (1,300) | front-entry-doors-with-glass |
| 11 | outswing-vs-inswing-front-door | front-entry-doors-with-glass | front entry doors with glass (22,200) | exterior front door with glass (22,200), decorative front doors with glass (1,600), privacy glass, impact glass inserts | front-door-replacement-cost |
| 12 | arched-windows | arched-window-treatments | arched window blinds (4,400) | arched window curtains (2,900), plantation shutters for arched windows, eyebrow arch window blinds (210) | arched-window-replacement |
| 12 | arched-windows | arched-window-replacement | arched window replacement (390) | arch window replacement (390), arched windows exterior (480), impact arched window cost | arched-window-treatments |
| 13 | curbless-shower | walk-in-shower-ideas-small-bathrooms | walk in shower ideas for small bathrooms (8,100) | walk-in shower ideas no door (2,400), doorless walk-in showers (1,600), 5x7 bathroom layout (480) | walk-in-shower-for-seniors |
| 13 | curbless-shower | walk-in-shower-for-seniors | walk in shower for seniors (1,300) | walk-in shower with seat (3,600), walk-in shower ideas for elderly (390), grab bars, aging in place | walk-in-shower-ideas-small-bathrooms |
| 14 | schluter-trim-tile-edges | tile-edging-options | tile edging options (1,000) | pencil tile trim (1,900), ceramic tile edging trim (1,600), bullnose vs metal trim | shower-tile-edge-trim |
| 14 | schluter-trim-tile-edges | shower-tile-edge-trim | tile edge trim for shower (880) | tile trim for shower (880), shower tile edge trim ideas (210), niche trim | tile-edging-options |
| 15 | tub-to-shower-conversion | tub-to-shower-conversion-kit-vs-custom | tub to shower conversion kit (3,600) | walk in shower conversion kit (260), kit vs custom tile, what kits miss | one-day-tub-to-shower-conversion |
| 15 | tub-to-shower-conversion | one-day-tub-to-shower-conversion | one day tub to shower conversion cost (1,000) | best tub to shower conversion companies (480), tub to shower conversion companies (720), what one-day means | tub-to-shower-conversion-kit-vs-custom |
| 16 | hardie-board-siding-florida | hardie-siding-cost | hardie plank siding cost (1,300) | james hardie siding cost (880), hardie siding cost per square foot (390), cost calculator (590) | hardie-board-and-batten |
| 16 | hardie-board-siding-florida | hardie-board-and-batten | hardie siding board and batten (2,400) | hardie panel vertical siding (480), board and batten in Florida, colors | hardie-siding-cost |
| 17 | stucco-repair-florida | florida-stucco-house-colors | stucco colors (2,900) | stucco house colors (880), modern stucco house colors (720), exterior stucco colors (480), HOA approval | how-to-paint-stucco |
| 17 | stucco-repair-florida | how-to-paint-stucco | stucco paint (2,900) | stucco exterior paint (1,600), elastomeric paint on stucco, stucco house paint (590) | florida-stucco-house-colors |

## Assignment
- E (`e.ts`, `postsE`): topics 1, 2, 3 (6 articles)
- F (`f.ts`, `postsF`): topics 4, 5, 6 (6)
- G (`g.ts`, `postsG`): topics 7, 8, 9 (6)
- H (`h.ts`, `postsH`): topics 10, 11 (4)
- I (`i.ts`, `postsI`): topics 12, 13 (4)
- J (`j.ts`, `postsJ`): topics 14, 15 (4)
- K (`k.ts`, `postsK`): topics 16, 17 (4)
