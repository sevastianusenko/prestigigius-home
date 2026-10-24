# Prestigious Home Improvements — website

Marketing site for **Prestigious Home Improvements, Inc.**, a Florida-certified residential general contractor (CRC1327831) in Port Charlotte, Southwest Florida.

Stack: Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS v4, `next/image`, `next/font`. No UI libraries. Project brief and design system: `BRIEF.md`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build; must pass with zero TypeScript errors
npm run start    # serve the production build
npm run lint
```

Node 20 or newer.

## Where things live

```
src/app/            routes (App Router) + sitemap.ts, robots.ts, manifest.ts,
                    icon.tsx, apple-icon.tsx, opengraph-image.tsx
src/components/     UI components (Header, Footer, Section, Button, BeforeAfter, LeadForm, ...)
src/content/        ALL copy and data — edit here, not in pages
src/lib/            helpers (seo.ts for JSON-LD + absolute URLs, photos.ts for image picking)
public/             static assets
```

### Content (`src/content`)

Every page reads its text and data from these modules. Types are in `src/content/types.ts`.

| File | What it holds |
|---|---|
| `site.ts` | Company facts: name, phone, email, address, license, hours, ratings, social links, service-area cities, process steps, navigation. Change a phone number or rating here and it updates everywhere. |
| `services/interior.ts`, `services/exterior.ts` | One `Service` object per service page (hero copy, scopes, what's included, cost notes, FAQs). Aggregated by `services/index.ts`. |
| `projects.ts` | Portfolio projects with before/after photos (`sample: true` until real client projects arrive). |
| `blog.ts` | Blog posts (`body` is a simple markdown-ish array: `## ` headings, `- ` bullets, plain paragraphs). |
| `areas.ts` | Service-area city pages. |
| `testimonials.ts` | Reviews (first name + initial only). |
| `faqs.ts` | General FAQs. |
| `about.ts` | Company story, values, team, milestones. |
| `photos.ts` | The photo library (see below). |

Service and area slugs are fixed by `nav.services` in `site.ts`; adding a service means adding a `Service` object with a matching slug.

### Replacing the sample photos

Until client photos arrive the site uses free stock images from Unsplash / Pexels. To swap in real photos:

1. Put the files in `public/images/` (or host them on a CDN and add the hostname to `images.remotePatterns` in `next.config.ts`).
2. In `src/content/photos.ts`, replace entries in the `photos` array. Keep the shape: `{ id, src, alt, category, width, height }`. The `category` field is what pages use to pick an image (`kitchen`, `bathroom`, `lanai`, `roofing`, `hero`, ...), so keep at least a few photos per category.
3. In `src/content/projects.ts`, point each project's `before`, `after` and `gallery` at the new photos and set `sample: false`. The "Sample projects" note on `/projects` disappears automatically once no project is marked `sample`.

Local files are referenced as `src: "/images/kitchen-01.jpg"`; remote files as a full `https://` URL.

## Environment variables

| Variable | Used by | Notes |
|---|---|---|
| `RESEND_API_KEY` | `src/app/api/contact/route.ts` | Sends lead-form submissions via [Resend](https://resend.com). Without it the form still validates but no email is sent. |

Create `.env.local` for local development (it is git-ignored):

```
RESEND_API_KEY=re_xxxxxxxxx
```

## SEO

- `src/app/sitemap.ts` — generated from content: every static route plus `/services/[slug]`, `/projects/[slug]`, `/blog/[slug]`, `/service-areas/[slug]`.
- `src/app/robots.ts` — allows everything except `/api/`, points to the sitemap.
- `src/app/opengraph-image.tsx` — default 1200×630 share image; `icon.tsx` / `apple-icon.tsx` render the favicon and touch icon at build time.
- `src/lib/seo.ts` — `absoluteUrl()`, plus JSON-LD builders: `localBusinessSchema()` (GeneralContractor, on every page), `breadcrumbSchema()`, `faqSchema()`, `serviceSchema()`, `articleSchema()`. Render them with the `Schema` component.

The production URL is `site.url` in `src/content/site.ts`; canonical URLs, the sitemap and structured data all derive from it.

## Deploying on Vercel

1. Push the repository to GitHub and import it at [vercel.com/new](https://vercel.com/new). The Next.js preset is detected automatically; no build settings need changing.
2. In the project's **Settings → Environment Variables**, add `RESEND_API_KEY` for Production (and Preview if you want test submissions to send).
3. Add the custom domain (`prestigiousimprovements.com` and `www`) under **Settings → Domains** and point DNS as Vercel instructs. Keep `site.url` in `src/content/site.ts` in sync with the live domain.
4. Every push to the main branch deploys to production; pull requests get preview URLs.

After the first deploy, submit `https://www.prestigiousimprovements.com/sitemap.xml` in Google Search Console.
