# BRIEF — Prestigious Home Improvements website

Marketing site for **Prestigious Home Improvements, Inc.** — licensed residential general contractor in Port Charlotte, Southwest Florida (full renovation and restoration: whole-home, kitchens, baths, additions, impact windows & doors, lanai enclosures, exterior, siding, painting, flooring, outdoor living, restoration, storm rebuilds). Facts: `src/content/site.ts`. Company dossier: `prestigious-home-improvements-research.md`. Keyword core: `keywords-core.csv`, competitor analysis: `ca-competitors-semantic-core.md`.

Reference for structure and polish: **hybridrenovations.com** (HubSpot site of a LA general contractor). We copy the *structure, section rhythm and level of detail*, never their text or photos.

## Stack

Next.js 16 (App Router, `src/app`), React 19, TypeScript, Tailwind CSS v4 (`@import "tailwindcss"` + `@theme` tokens in `src/app/globals.css`), `next/image` with remote patterns for images.unsplash.com and images.pexels.com (see `next.config.ts`). Fonts via `next/font/google`. No UI libraries. Path alias `@/` → `src/`.

Commands: `npm run dev`, `npm run build`. Build must pass with zero TypeScript errors.

## Design system (foundation agent implements; everyone uses)

Palette — black, white and true neutral grays (no warm/beige/brown tones), with jewelry gold as a sparing accent that pairs with the gold-and-silver logo (`public/images/logo.png`, `logo-light.png` for dark backgrounds). Changed 2026-10-23 at the client's request ("no brown, premium black-white-gray"). Token NAMES are historical (navy/amber/sand/sea) — values below.

| Token | Value | Use |
|---|---|---|
| `--color-navy-950` | `#0A0A0A` | footer, heroes, dark bands |
| `--color-navy-900` | `#141414` | headings, primary text |
| `--color-navy-700` | `#3D3D3D` | secondary dark, hover |
| `--color-navy-100` / `-50` | `#E6E6E6` / `#F4F4F4` | light gray tints |
| `--color-amber-500` | `#C9A44C` | THE accent (gold): eyebrows on dark, numerals, check marks, markers, featured frames |
| `--color-amber-600` | `#6B6B6B` | mid gray: eyebrows and hover on light (no gold text on white) |
| `--color-amber-100` | `#F1F1F1` | light gray chips and selection |
| `--color-sea-600` | `#111111` | links (black, gold underline) |
| `--color-sand-50/100/200` | `#F7F7F7` / `#EFEFEF` / `#E3E3E3` | page bg, alt sections, borders |
| `--color-ink-500` / `-900` | `#666666` / `#141414` | secondary / body text |

Sheen utilities (globals.css): `btn-gold` — metallic gold gradient CTA, main button on dark sections; `btn-black` — black CTA with top highlight and gold hairline, main button on light sections (also `Button` variant `primary`; `variant="gold"` on dark); `frame-gold` — thin gold gradient frame for a featured card; `text-gold` — gold sheen on large numerals. Gold stays an accent: never as a flat fill for whole sections.

Fonts (same as hybridrenovations.com): headings **Montserrat** 600/700/800, body **Open Sans** 400/600/700, via next/font as `--font-heading` / `--font-body`.

Shape: radius 12px cards / 999px pills; shadows soft (`0 10px 30px -12px rgb(16 42 67 / .25)`); container 1200px, section padding `py-20 md:py-28`; eyebrow = uppercase 13px tracking-[.14em], gray on light, gold on dark.

Tone: premium but plain-spoken contractor. Short sentences. Real numbers. No "we are passionate". American English. Headlines benefit-led ("A kitchen you can actually plan around").

## Component contract (`src/components/**`) — foundation agent builds these exactly

```
ui/Container.tsx     export default function Container({children, className?})
ui/Section.tsx       export default function Section({id?, eyebrow?, title?, intro?, tone?:'light'|'paper'|'dark', align?:'left'|'center', className?, children})
ui/Button.tsx        export default function Button({href, children, variant?:'primary'|'secondary'|'ghost'|'white', size?:'md'|'lg', className?})
ui/Eyebrow.tsx       export default function Eyebrow({children, className?})
TrustStrip.tsx       export default function TrustStrip({tone?:'light'|'dark'})   // license, BBB A+, Google 5.0, warranty, financing from site.ts
CtaBand.tsx          export default function CtaBand({title?, text?})           // dark navy band with phone + "Free Estimate" button
BeforeAfter.tsx      'use client' export default function BeforeAfter({before:Photo, after:Photo, label?})  // drag slider, keyboard accessible
ServiceCard.tsx      export default function ServiceCard({service:Service, photo?:Photo})
ProjectCard.tsx      export default function ProjectCard({project:Project})
FaqAccordion.tsx     'use client' export default function FaqAccordion({items:Faq[]})
Testimonials.tsx     export default function Testimonials({items:Testimonial[], limit?})
ProcessSteps.tsx     export default function ProcessSteps({steps?:Step[]})      // default processSteps from site.ts
Breadcrumbs.tsx      export default function Breadcrumbs({items:{label:string, href?:string}[]})
LeadForm.tsx         'use client' export default function LeadForm({compact?, service?})  // name, phone, email, address, service select, message → POST /api/contact
Schema.tsx           export default function Schema({data: object | object[]})  // JSON-LD script
Header.tsx / Footer.tsx  used in src/app/layout.tsx
Photo helper: src/lib/photos.ts  export function photo(category, i=0): Photo  → picks from src/content/photos.ts, falls back to a neutral hero photo
```

## Content contract (`src/content/**`) — content agents write data only, no JSX

Types in `src/content/types.ts`. Modules and their exports:

- `photos.ts` → `export const photos: Photo[]` (≥ 70 verified images across all categories)
- `services/interior-core.ts` → `interiorCore` (whole-home-remodeling, kitchen-remodeling, bathroom-remodeling, home-additions)
- `services/interior-finish.ts` → `interiorFinish` (painting, flooring, outdoor-living)
- `services/exterior-core.ts` → `exteriorCore` (impact-windows-doors, lanai-enclosures, exterior-remodeling, siding)
- `services/restoration.ts` → `restorationServices` (home-restoration, storm-damage-rebuild)
- `services/index.ts` aggregates them in menu order: `services`, `getService(slug)`, `serviceGroups`
- `projects.ts` → `export const projects: Project[]` (12, `sample: true`)
- `blog.ts` → `export const posts: Post[]` (8)
- `testimonials.ts` → `export const testimonials: Testimonial[]` (real reviews from Google/Yelp/BBB, first name + initial only)
- `areas.ts` → `export const areas: Area[]` (8 cities)
- `faqs.ts` → `export const generalFaqs: Faq[]` (12 general: licensing, permits, insurance, financing, timelines, warranty, HOA, hurricane season)
- `about.ts` → `export const about = { story: string[], values: {title,text}[], team: {name, role, bio}[], milestones: {year,text}[] }`

Slugs are fixed by `nav.services` in `site.ts`. 13 services, confirmed by the client 2026-10-24: the company does NOT do roofing (service, page and roofing articles removed; never offer roof work, only mention roofs as a cause of damage or as part of an addition's structure), and the lanai service is named "Lanai Enclosures". Service slugs: whole-home-remodeling, kitchen-remodeling, bathroom-remodeling, home-additions, impact-windows-doors, lanai-enclosures, exterior-remodeling, siding, painting, flooring, outdoor-living, home-restoration, storm-damage-rebuild.

## Routes (`src/app/**`) — page agents

```
/                       home: hero (photo wall + headline + 2 CTAs + trust strip), services grid (14), about teaser w/ owner quote,
                        process (4 steps), recent projects w/ BeforeAfter, financing strip, testimonials, service areas, FAQ, CTA band
/services               hub: grouped cards + why-us + CTA
/services/[slug]        hero → TrustStrip → How we work (4) → BeforeAfter (2 projects) → Scopes cards (flip) → What's included →
                        Cost in SWFL → Local notes (permits/hurricane/HOA) → FAQ (FAQPage schema) → related services → CTA
/projects, /projects/[slug]
/about, /process, /financing, /reviews, /warranty
/service-areas, /service-areas/[slug]
/blog, /blog/[slug]
/contact (form + map embed + hours), /free-estimate (form-first)
/privacy, /terms, not-found
sitemap.ts, robots.ts, opengraph default image, JSON-LD: GeneralContractor (+ aggregateRating) on every page, Service + FAQPage on service pages, BreadcrumbList everywhere, Article on posts
```

Every page exports `metadata` (title ≤ 60 chars, description ≤ 155) from content, uses `Breadcrumbs`, ends with `CtaBand`. Images always via `next/image` with `sizes`. Mobile-first; no horizontal scroll at 375px.

## Photos

Client photos arrive later. Until then use real Unsplash/Pexels images (verified HTTP 200, free license), chosen to look like Florida homes (stucco, tile roofs, lanais, bright light). Projects are marked `sample: true` and the projects index shows a small "Sample projects — client photos coming" note.

## Ownership rules (parallel agents)

Each agent writes only the files listed in its brief. Never edit `types.ts`, `site.ts`, `BRIEF.md`. If you need a shared component that does not exist yet, import it anyway per the contract above; it will exist at build time. Do not run `npm install`. Do not start dev servers. Run `npx tsc --noEmit -p .` on your own files only if `node_modules` exists.

## Site-wide rules added 2026-10-24 (after the audit)
- One primary CTA label everywhere: **"Get a Free Estimate"** (header may use the short "Free Estimate"; city pages "Get a Free Estimate in {City}"; form submit "Get my free estimate"). Service heroes add the line "In-home visit, written price within a week."
- Service heroes show `HeroRatings` (Google / Yelp / BBB from `site.ratings`) instead of word-stats; `hero.proof` in `service-pages/*.ts` is no longer rendered.
- Mobile: `MobileCtaBar` (Call + Get a Free Estimate) is mounted in `layout.tsx` and appears after 500px of scroll, except on /free-estimate and /contact.
- Titles: `layout.tsx` template is `%s | Prestigious Home Improvements`; a page whose own title already carries the brand or is long must use `title: { absolute }`.
- Facts with one source of truth: prices and durations live in `src/content/services/*.ts`; articles and FAQs must match them. Written estimate "usually within a week of the visit"; callback "within one business day"; impact lead time "8–14 weeks"; install "1–4 working days"; service area phrase `site.serviceSpan`; 4 counties incl. Manatee; 11 cities.
- Performance: `HeroWall` marks the first two rows of the two always-visible columns as LCP candidates (`priority`); keep hero photos in `public/images/stock/` or `public/images/client/`, never a remote host. Open Sans loads the `latin` + `symbols` subsets so text arrows and check marks (→ ✓ ★) do not pull a late, un-preloaded font file; do not add other symbol ranges without checking the font request waterfall.
- Honesty: no person is tied to the license or to pulling permits; articles are bylined to the team; chronology = installers for others before 2022 → incorporated Oct 2022 → subcontract installs until early 2025 → own CRC license 2025. Stock photos are self-hosted in `public/images/stock/` and always labelled "Illustrative photo"; people in stock photos are not used next to the owners' names.
