# PROJECT POSTS BRIEF — real client job photos

Goal: one expert-grade project post per photo series, built to rank and convert ("залетел"). These are the company's REAL jobs, photographed by the crew. Web copies (EXIF/GPS stripped) are in `public/images/projects/<slug>/NN.jpg`. Contact sheets for viewing: `C:\Users\admin\AppData\Local\Temp\claude\C--Users-admin-Projects-prestigius-home\01477a4f-0baa-46bc-becb-21fb1193d7ba\scratchpad\photos\` — but LOOK AT EVERY individual photo in your projects with the Read tool before writing (they are 1600px JPGs).

## Honesty rules (non-negotiable)
- Write only what is visible in the photos or listed under "Facts" below. Do not invent homeowner names, quotes, budgets, durations, counts you cannot see, permit numbers, problems the house "had", or brands without a visible label.
- Countable items you can actually count in the photos may be stated ("three black-framed windows on the front elevation").
- Brands: name a brand only where a label/marking is visible (e.g. PGT stickers, R-Max Thermasheath board, DensGlass sheathing). Otherwise "impact-rated", "aluminum-framed", etc.
- Expert content = explain WHAT the reader is seeing and WHY it matters (rough-opening prep, block bucks, liquid-applied flashing, anchoring into CMU, sill pans/slope, design pressure & Florida Product Approval, laminated impact glass, mulling, transoms, stucco returns, obscure glass for privacy, wind-borne debris region, why new construction sets windows before stucco, etc.). Frame method statements as how we do this kind of work ("On jobs like this we…", "The red band you see is…"), not as invented events.
- No "before/after" claims unless the brief says the series has real before photos (only the Manatee County lanai has them).
- Never publish addresses, street names or GPS. Use the city label given below.

## SEO/marketing rules
- `title` ≤ 70 chars, specific and keyword-led (service + feature + city), e.g. "Black-Frame Impact Windows on a New Two-Story Block Home in Parrish".
- `seoTitle` ≤ 60 chars ("Impact Windows for New Construction in Parrish, FL"), `seoDescription` 140–155 chars with city + service + a concrete detail + soft CTA.
- `summary` 1–2 sentences (cards).
- `storyTitle` short hook.
- `body` 5–7 paragraphs, ~450–750 words total, plain American English, short sentences, expert but readable. Structure: what the job was → what the photos show (walk through them) → the technical details that matter in SWFL (code, wind, water) → what a homeowner/builder should ask any installer → closing line with soft CTA mentioning free in-home estimate. Mention the city and the primary service phrase naturally 2–3 times (no stuffing). Link-worthy specifics beat adjectives.
- `scope` 4–8 bullets of what is visible/known.
- `faqs` 3–4 real search-style questions with 2–4 sentence answers (these render with FAQPage schema).
- Every photo gets `alt` (literal description, include city/service where natural) and `caption` (1 sentence expert note, ≤ 160 chars).
- `serviceSlugs` from: impact-windows-doors, bathroom-remodeling, kitchen-remodeling, storm-damage-rebuild, whole-home-remodeling, home-additions, lanai-screen-enclosures, exterior-remodeling, roofing, siding, painting, flooring, outdoor-living, home-restoration (primary first).
- `duration: ""` unless stated in Facts. `sample: false`. `beforeAfter: true` ONLY where Facts say so.

## File format
Each agent writes ONE file `src/content/project-posts/<letter>.ts`:
```ts
import type { Project } from "../types";
import { jobPhoto } from "./helpers";
const S = "<slug>";
export const postsX: Project[] = [
  {
    slug: S, title: "...", seoTitle: "...", seoDescription: "...",
    city: "Parrish", date: "2025-12", serviceSlugs: ["impact-windows-doors"],
    summary: "...", storyTitle: "...", body: ["...", "..."], scope: ["..."], duration: "",
    before: jobPhoto(S, 1, "windows-doors", "alt", "caption"),   // for non-before/after posts: same as `after`
    after: jobPhoto(S, 3, "windows-doors", "alt", "caption"),    // the strongest hero photo
    gallery: [/* ALL remaining photos of the series, in a good viewing order, each with alt+caption */],
    sample: false,
    faqs: [{ q: "...", a: "..." }],
  },
];
```
`jobPhoto(slug, n, category, alt, caption)`; n = file number (01.jpg = 1). Every photo of the series must appear exactly once across after + gallery (before may repeat after). Check with `npx tsc --noEmit -p . 2>&1 | grep project-posts`.

## Series facts (from the photos + capture dates; city = approximate area only)

| slug | city label | date | photos | facts |
|---|---|---|---|---|
| siesta-key-waterfront-new-build-windows-sliders | Siesta Key | 2026-09 | 7 | Large two-story CMU new-construction home on a canal (boats/dock visible through the slider in #7). Block walls not yet stuccoed; many black-framed windows set in white-bucked openings; second-floor balcony with temporary railing; tall stair tower. #3–#6 show the Prestigious van on site. #7: interior, open-joist ceiling, big multi-panel black-frame sliding door wall + adjacent door facing the canal, foam-board on framed walls. |
| parrish-two-story-block-home-impact-windows | Parrish | 2025-12 | 7 | Two-story CMU new build with wood truss roof, Manatee County. Every rough opening wrapped in red liquid-applied flashing; black-frame windows installed (fixed, single-hung, transom over entry), front entry opening, tall double-height opening (#4), ladders/site debris. Dec 4–5, 2025. |
| north-port-new-construction-pgt-sliding-doors | North Port | 2025-11 | 5 | New-construction CMU home, wood trusses. #1: wide opening prepped, level on the sill. #2–#5: black-frame sliding glass doors with PGT stickers; R-Max Thermasheath foam board visible on a framed wall (#3); multi-panel slider set in block opening (#4, #5). |
| manatee-county-lanai-wall-block-rebuild | Manatee County | 2026-04 | 4 | REAL BEFORE/AFTER — `beforeAfter: true`, before = #1, after = #3. #1–#2 (Dec 2025, before): original aluminum-framed lanai wall with glass panels and a hinged aluminum door under a screen enclosure, paver deck. #3–#4 (Apr 2026, after): new stucco wall, three dark-tinted windows and a full-lite door, screen enclosure kept, construction debris/tarp still on the pavers. This is Ronald S.'s job — attach `quote: { text: <his testimonial text from src/content/testimonials.ts>, name: "Ronald S." }` (import testimonials and look it up by name). Facts from his review: house built circa 1985; found us at the Sarasota home show; Manatee County building dept took ~3 months before the green light in Feb 2026; new footing with rebar tied to the original footer; block walls with grout-filled, rebar cores tied into precast headers and stainless roof-truss connections; storm-rated windows and door; interior finished to match; reasonable price. |
| sarasota-french-doors-four-panel-slider | Sarasota County | 2025-12 | 4 | Rural east Sarasota County (pasture view). White full-lite French doors (pair) and a white four-panel sliding glass door opening onto a brick-paver lanai under a pergola. Interior views (#3, #4): wood-look tile floor, the same door units from inside. |
| port-charlotte-pgt-windows-pool-bath-door | Port Charlotte | 2025-11 | 6 | Replacement white single-hung windows with colonial grids in stucco walls (#1–#4), a narrow tall unit (#2); PGT label on a unit (#4). #5 (exterior, lanai) and #6 (interior, bathroom): white door with full-height obscure (frosted) glass lite — a pool-bath door, product labels still on. Oct–Nov 2025. |
| bonita-springs-window-replacement | Bonita Springs | 2025-11 | 4 | White single-hung replacement windows in textured stucco; fresh stucco patch bands above headers/at sills not yet painted (#1–#3); interior bathroom window with obscure glass and label (#4). |
| sarasota-metal-building-folding-windows | Sarasota County | 2025-10 | 3 | Steel-framed building (metal roof purlins), plywood-sheathed gable wall, scaffolding. Large aluminum window assemblies: upper operable panels that fold/swing open (#2) over a row of fixed lites; #1 interior after finish (dark wall) with four tall operable units over four fixed. Commercial-style storefront/folding window systems. |
| venice-double-entry-doors-decorative-glass | Venice | 2025-10 | 2 | White double entry doors with decorative beveled/leaded glass (diamond pattern), matte black handleset, covered entry, stucco, adjacent white window. |
| sarasota-pool-home-window-replacement | Sarasota | 2025-12 | 2 | Light-blue board-and-batten siding home with pool; mulled pair of white single-hung windows (dark-tinted glass) facing the pool deck; a small square window; tools still on site. |
| sarasota-six-panel-entry-doors | Sarasota | 2025-12 | 2 | Two white six-panel doors: #1 interior side with label still on, #2 exterior side door with new white casing on light-blue stucco, wall lantern. |
| sarasota-kitchen-pass-through-window | Sarasota | 2026-07 | 2 | New white window over the kitchen sink between kitchen and lanai (#1 interior: wood cabinets, stone counter; #2 exterior: window set in stucco wall above a concrete ledge/sill — pass-through style). |
| lakewood-ranch-arched-transom-windows | Lakewood Ranch | 2026-07 | 2 | Two arched (eyebrow) transom windows over two rectangular windows; interior plantation shutters (#1); exterior stucco with barrel-tile roof (#2). |
| arched-impact-windows-stucco-home | Southwest Florida | "" | 4 | Bright turquoise stucco home: arched (eyebrow) windows (#1, #3 exterior/interior with label, #4), large colonial-grid window with dark-blue trim band (#2). Date unknown → `date: ""`. |
| pool-lanai-sliding-glass-doors | Southwest Florida | "" | 5 | Covered pool lanai, screen enclosure: several white two-panel sliding glass doors (labels on glass), two side-by-side openings (#1), pool visible (#5). Date unknown. |
| new-construction-clerestory-picture-windows | Southwest Florida | "" | 2 | Wood-frame new construction, vaulted wall: three angled clerestory windows high up (#1, scaffold) and a row of tall white fixed/door units with labels (#2). Date unknown. |
| modern-double-entry-door-new-construction | Southwest Florida | "" | 2 | Modern black double entry door with vertical glass slot lites in a CMU opening with metal corner bead (#1, lit from inside); #2 same door with stucco scratch coat around and DensGlass sheathing on the ceiling above. Date unknown. |
| sarasota-glass-entry-door | Sarasota | 2025-10 | 1 | White three-lite glass entry door on a covered porch with lap siding, labels still on. Single photo: before = after = #1, gallery []. Shorter post OK (~350 words). |

## Assignment
- Agent A → `src/content/project-posts/a.ts` `postsA`: siesta-key…, parrish…, north-port…, new-construction-clerestory…, modern-double-entry-door…
- Agent B → `b.ts` `postsB`: manatee-county-lanai…, sarasota-french-doors…, pool-lanai-sliding…, sarasota-kitchen-pass-through…
- Agent C → `c.ts` `postsC`: port-charlotte-pgt…, bonita-springs…, sarasota-pool-home…, lakewood-ranch…, arched-impact-windows…
- Agent D → `d.ts` `postsD`: venice-double-entry…, sarasota-six-panel…, sarasota-glass-entry-door, sarasota-metal-building…
