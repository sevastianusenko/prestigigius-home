# REFERENCE MAP — rebuild "like hybridrenovations.com"

The client wants the site to look and read like **hybridrenovations.com**, adapted to Prestigious Home Improvements (Port Charlotte, SWFL). Extracted reference texts: `docs/reference/*.txt` (headings marked `[H1]`, `[H2]`…), reference CSS: `docs/reference/ref_styles.css`. These are for study only — `docs/reference/` is git-ignored and never published.

## Copy rule (non-negotiable)

Mirror the reference **section by section**: same section purpose, same order, same type of promise, same level of specificity, similar headline *pattern* and length. **Write every sentence fresh** for Prestigious: no sentence copied verbatim, no run of more than ~5 identical words except generic phrases ("free estimate", "before and after"). Swap their facts for ours: LA/OC → Port Charlotte / Charlotte, Sarasota & Lee Counties; CSLB #1085596 → Florida CRC1327831; 1,000+ projects / 4.9 / 150+ reviews → our real numbers from `src/content/site.ts` (5.0 Google, A+ BBB, family-owned since 2022). Never invent numbers, awards, team members, video testimonials or prices we cannot back up — when the reference relies on something we don't have, write the honest SWFL equivalent (e.g. "Hear it from homeowners" uses our real text reviews).

Example of the adaptation level wanted:
- Reference: "Built well. / Finished right. / Backed locally."  → Ours: "Built to code. / Finished right. / Backed by a local crew."
- Reference: "Four Steps. Zero Surprises." → Ours: "Four Steps. No Surprises." (same pattern, our own step text)
- Reference: "Kitchen Remodel You Can Actually Plan Around." → Ours: "A Kitchen Remodel You Can Plan Around — in Port Charlotte"

## Visual system (measured from the reference)

| | Reference | Ours |
|---|---|---|
| Heading font | Montserrat 800, h1 ~57px, h2 ~35px, tracking -0.01em | **Montserrat** 700/800 same sizes |
| Body font | Open Sans 16px / 1.55 | **Open Sans** 16px / 1.55 |
| Page bg | #F7F9F6 off-white | sand-50 `#FBFAF7` |
| Primary text | navy #0F2537 | navy-900 `#102A43` |
| Dark bands | navy #0F2537 (hero, financing, CTA, footer) | navy-950 `#0A1A2B` / navy-900 |
| Primary button | blue #1C75BC pill (999px), 600 | **amber-500 `#E8962E`** pill, navy-950 text, hover amber-600 |
| Accent word in hero / highlights | green #8CC63F | **amber-500** |
| Eyebrow | Montserrat 13px 700 uppercase, letter-spacing .14em | same, amber (on light) / amber-100 (on dark) |
| Cards | white, radius 14px, shadow 0 8px 18px rgb(15 37 55 / .08) | same |
| Section padding | ~70px vertical (py-16 md:py-[72px]) | same |
| Content width | ~1010–1200px | max-w-site 1200px, text blocks ~1010px |
| Header | 65px, white 96% + blur, logo left, phone icon + "Free Estimate" pill + burger/menu | same |
| FAQ band bg | light blue #EAF4FC | navy-100 `#DCE6F0` tint (or `#EEF3F8`) |
| Alt section bg | #F7F9F6 / #F2F5F2 | sand-100 `#F3F0E9` |

## Home — section order (reference → ours)

1. `hr-hero-wall` dark full-bleed hero (730px) with a **mosaic photo wall** (dozens of small tiles, dark overlay), eyebrow, 3-line H1 with last line in accent color, lead, 2 pill buttons (primary + outline white), 3 check bullets → **HeroWall**
2. `hr-trust-strip` white strip: license · A+ BBB rating · Google rating · projects count → **TrustStrip**
3. `hr-services-grid` "What we do / Residential Remodeling Across …" card grid (photo, title, 1-line, Learn more) → **ServicesGridBand**
4. `hr-about-teaser` (alt bg) "Built by Tradespeople. Run on Trust." story + founder quote with name/title + "Read our story" → **AboutTeaser**
5. `hr-process` "Four Steps. Zero Surprises." 4 numbered steps with kicker → **ProcessBand**
6. `hr-recent-projects` (alt bg) "Real homes. Real before-and-afters." drag compare + featured project text + thumbnails → **RecentProjectsBand**
7. `hr-testimonials` "{rating} stars across {n} Google reviews from … homeowners." review cards → **ReviewsBand**
8. `hr-fin` dark "Start the Project Now, Pay Over Time" financing steps → **FinancingBand**
9. `hr-faq` light-blue "Questions Homeowners Ask Us" accordion → **FaqBand**
10. `hr-sa` "Serving {region}" cities list/map → **ServiceAreasBand**
11. `hr-cta-v2` dark "Get Your Free Estimate" → **CtaBand**

## Service page — section order (kitchen / windows / roofing templates)

hero (photo bg, eyebrow "Service · Region", H1 promise, lead, CTA) → TrustStrip → intro "Design, Permits, and Construction Under One Contract" + 4 promise cards (`howWeWork`) → [optional `signs`] → before/after "The Same Room, Before and After" → scope cards "Which ___ Project Is Yours?" (flip) → [optional `options` e.g. "Two Ways to Install…", "Styles, Materials, and Glass"] → [optional `benefits`] → process "From First Visit to Final Walkthrough" (`process` or global steps) → "The Parts You Can Hold Us To" (`promises`) → cost "What Affects the Cost of Your ___ Project" (`cost`) → local notes (ours, SWFL) → ReviewsBand → "Pairs Well With ___" (related) → FinancingBand → FaqBand (service faqs) → ServiceAreasBand → CtaBand.

## About — order
hero "Built on Trust, Backed by Craft" → TrustStrip → "We See Renovation Differently" (who we are) → "Built From the Jobsite Up" (origin story: installers → own company) → "A Track Record You Can Count On" (real numbers only) → "Meet the Owner" (Tim Fomin; quote must be flagged as needing client approval) → "Hear It From the Homeowners" → "The Promises We Make Before We Start" (PromisesBand) → ServicesGridBand → ReviewsBand → ServiceAreasBand → CtaBand. Plus `/about/team` (team grid + careers CTA).

## Other pages
- `/contact`: hero "Get in touch with …" → TrustStrip → "Reaching Out Is Easy. Here Is What Happens Next." (3 steps) → "A Real Person Gets Back to You, Fast" → "Where We Work From" (Port Charlotte area map — no street address published) → FaqBand → ServiceAreasBand → CtaBand (form on page).
- `/projects`: featured carousel → filterable grid → TrustStrip → ServiceAreasBand → CtaBand.
- `/projects/[slug]`: hero gallery → TrustStrip → details (city, date, duration, services, scope) → story (`storyTitle` + body) → tie-in "Looking for a ___ contractor in Charlotte County?" → homeowner quote → "Projects you might also like" → "Thinking about a project like this?" (project faqs) → CtaBand.
- `/reviews` (reference `/testimonials`): hero "Don't Take Our Word for It. Take Theirs." → TrustStrip → ReviewsBand (all) → ServiceAreasBand → CtaBand.
- `/referral`: hero "Send Us a Friend. We Say Thank You." (reward from `site.referral`) → TrustStrip → how it pays out → 3 steps → who you probably know → FAQ → referral form.
- `/careers`: hero → TrustStrip → "Start here, we teach the rest" → what you get → what matters more than experience → what happens after you apply → FAQ → application form.
- `/estimate-builder`: interactive ballpark builder (pick service → size/scope → ballpark range from service.scopes priceRange → send to us).
- `/review`: "Thanks for having us out" — links to leave a Google / Yelp / BBB review.
- `/resources` (reference name for blog): index + `/resources/[slug]` articles; `/blog/*` redirects there.

## Shared band components (contract) — `src/components/bands/*`

```
HeroWall({ eyebrow, lines: string[], accentLast?: boolean, lead, primary:{href,label}, secondary?:{href,label}, bullets?: string[], photos?: Photo[] })
ServicesGridBand({ eyebrow?, title?, intro?, slugs?: string[] })
ProcessBand({ eyebrow?, title?, intro?, steps?: Step[] })
RecentProjectsBand({ eyebrow?, title?, intro?, projects?: Project[] })
ReviewsBand({ title?, limit?, service?: string })
FinancingBand({ title?, text? })
FaqBand({ title?, eyebrow?, items: Faq[] })
ServiceAreasBand({ title? })
PromisesBand({ eyebrow?, title?, items?: {title,text}[] })   // default = company.promises
WhyUsBand({ title?, items?: {title,text}[] })                 // default = company.whyUs (8 reasons)
```
Global copy for these bands lives in `src/content/company.ts`: `promises` (5–6), `whyUs` (8), `financingSteps` (3), `contactNext` (3), `reviewsHeadline`, `areasHeadline`.
