# BLOG BRIEF — 17 evergreen "explainer" articles (the format that ranks for GVD)

Why: on the 7 California competitors, the only blog content that earns traffic is the **explainer about a specific product/material/detail** ("What is X and why does it fail", "X pros and cons", "X vs Y", "X requirements", brand reviews). Trends, news and "ideas" posts get ~0. See `docs/competitor-top-posts.md`.

## Output
Each agent writes ONE file `src/content/blog-posts/<letter>.ts` exporting `posts<Letter>: Post[]` (type in `src/content/types.ts`). Don't edit other files.

```ts
import type { Photo, Post } from "../types";
const img = (id: string, src: string, alt: string, category: Photo["category"]): Photo => ({ id, src, alt, category, width: 1600, height: 1067 });
export const postsA: Post[] = [{ slug, title, seoTitle, seoDescription, excerpt, date: "2026-10-22", readMinutes, cover: img(...), body: [...], keywords: [...], relatedServices: [...] }];
```

## Body format (rendered by `src/components/blog/PostBody.tsx`)
- `"## Heading"` → H2 (goes into the table of contents), `"### Sub"` → H3, `"- item"` → bullet, any other line → paragraph, `**bold**` inline.
- Inline photo on its own line: `![alt text](https://images.unsplash.com/photo-<id>?auto=format&fit=crop&w=1600&q=80 "Caption sentence.")`.
- 2–4 inline photos per article + the cover. STOCK PHOTOS ONLY (Unsplash/Pexels). Reuse URLs from `src/content/photos.ts` (all verified) or find new ones; every URL you add must return HTTP 200 (`curl -s -o /dev/null -w "%{http_code}" "<url>"`). Pexels format: `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?auto=compress&cs=tinysrgb&w=1600`. Alt text describes what is in the photo; never claim a stock photo shows our job.

## Article spec (match the GVD explainer format, but better)
- 1,400–2,000 words. American English, plain and confident, written by a licensed Southwest Florida contractor (Prestigious Home Improvements, CRC1327831, Port Charlotte; impact windows & doors, bathrooms, kitchens, storm rebuilds).
- `title` = the primary keyword up front + benefit/specific ("What Is a Window Buck? Why It Rots and How It's Replaced"). `seoTitle` ≤ 60 chars, `seoDescription` 140–155 chars.
- Opening: answer the query in the first 2–3 sentences (definition / direct answer — featured-snippet style).
- Sections typically: What it is → How it works / types → Pros and cons (bullets) → Cost (realistic 2026 ranges, labelled "typical"; for impact windows use $1,200–$3,800 per opening and impact sliders $4,500–$14,000 to stay consistent with the site) → What goes wrong / failure signs → Florida-specific angle (humidity, salt air, hurricane code, wind-borne debris region, Florida Building Code 8th Ed. 2023, Florida Product Approval/NOA, HOA, flood zones) → How to choose / questions to ask a contractor → FAQ section as `## Frequently Asked Questions` with 4–6 `### Question?` + answer paragraphs → short "Bottom line" → one-line CTA: free in-home estimate, (941) 223-4875.
- Include one comparison table-like bullet list or numbered steps where natural. Use the secondary keywords naturally (no stuffing).
- Facts must be accurate and general; don't invent statistics or quote studies; no fake company anecdotes. Brand comparisons (PGT/CWS/ES) must be fair and factual (no unverifiable claims); say "verify the current Florida Product Approval for the exact model".
- `keywords`: primary + 4–7 secondary from the table. `relatedServices` 2–3 service slugs.
- `readMinutes` = words/230 rounded.

## Topics & keywords (DataForSEO, Oct 2026: US / Florida monthly volume, KD 0–24)

| # | Agent | slug | primary (US/FL) | secondary |
|---|---|---|---|---|
| 1 | A | what-is-a-window-buck | window buck (720/140) | what is a window buck, window buck rot, wood vs concrete buck, block homes |
| 2 | A | exterior-window-trim-stucco | exterior window trim (9,900/480) | window trim ideas exterior (2,400), stucco window trim (590), foam trim |
| 3 | A | window-flashing-liquid-applied | window flashing (8,100/320) | liquid flashing (2,400), liquid applied flashing, Prosoco R-Guard (880), sill pan |
| 4 | A | house-wrap-vs-zip-system | tyvek house wrap (14,800/720) | house wrap (12,100), zip system sheathing (6,600), zip system vs house wrap |
| 5 | B | casement-windows-florida | casement windows (40,500/1,900) | impact casement windows, casement vs single hung, awning windows |
| 6 | B | egress-window-requirements-florida | egress window requirements (3,600/140) | egress window size (2,900), florida egress window requirements, impact egress |
| 7 | B | laminated-vs-tempered-glass | tempered glass (27,100/1,600) | laminated glass (3,600), laminated vs tempered (1,600), tempered glass requirements |
| 8 | B | single-hung-vs-double-hung-windows | single hung windows (14,800/1,000) | single hung vs double hung (2,400), types of windows (14,800), horizontal roller windows |
| 9 | C | pgt-vs-es-vs-cws-impact-windows | pgt windows (6,600/5,400) | es windows (4,400/3,600), cws windows (1,900/1,600), pgt winguard, pgt windows reviews |
| 10 | C | impact-sliding-glass-doors | sliding glass doors (49,500/5,400) | impact sliding glass doors (720/590), sliding glass door sizes (1,600), multi panel sliding glass doors |
| 11 | C | outswing-vs-inswing-front-door | outswing front door (3,600/260) | outswing doors, outswing vs inswing door, florida code / wind |
| 12 | C | arched-windows | arched windows (8,100/390) | half moon window (1,300), eyebrow window (1,000), impact arched windows |
| 13 | D | curbless-shower | curbless shower (9,900/590) | shower curb (4,400), shower threshold (2,900), zero entry shower (2,900) |
| 14 | D | schluter-trim-tile-edges | schluter trim (22,200/1,600) | tile edge trim (9,900), tile trim, schluter jolly (3,600) |
| 15 | D | tub-to-shower-conversion | tub to shower conversion (9,900/720) | bathtub to shower conversion, tub to shower conversion cost (2,900) |
| 16 | D | hardie-board-siding-florida | hardie board siding (40,500/3,600) | fiber cement siding (60,500), t1-11 siding (12,100), hardboard siding |
| 17 | D | stucco-repair-florida | stucco repair (27,100/4,400) | stucco house (14,800), stucco vs siding, stucco cracks |
