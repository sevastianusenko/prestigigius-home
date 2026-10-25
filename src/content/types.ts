/**
 * Shared content contract. Every content module in src/content implements these
 * types; every page/component reads them. Do not change field names without
 * updating BRIEF.md.
 */

export type Photo = {
  /** stable id, e.g. "kitchen-01" */
  id: string;
  /** local path (/images/stock/<id>.jpg, /images/projects/...) or direct https URL (images.unsplash.com / images.pexels.com) */
  src: string;
  alt: string;
  /** topical category used to pick images without knowing ids */
  category:
    | "kitchen"
    | "bathroom"
    | "whole-home"
    | "addition"
    | "lanai"
    | "windows-doors"
    | "exterior"
    | "siding-stucco"
    | "painting"
    | "flooring"
    | "outdoor-living"
    | "restoration"
    | "storm-damage"
    | "team"
    | "florida"
    | "hero";
  width?: number;
  height?: number;
  credit?: string;
  /** short expert note shown under real job photos */
  caption?: string;
};

export type Faq = { q: string; a: string };

export type Step = {
  n: string; // "01"
  title: string;
  kicker: string; // short line under title, e.g. "Next-day visit"
  text: string;
};

export type ServiceScope = {
  title: string;
  summary: string;
  /** label -> detail pairs shown on the flip side of the card */
  changes: { label: string; detail: string }[];
  /** typical SWFL range, e.g. "$18k–$35k" */
  priceRange?: string;
  /** typical duration, e.g. "3–5 weeks" */
  duration?: string;
};

export type Service = {
  slug: string; // url: /services/[slug]
  title: string; // "Kitchen Remodeling"
  navLabel: string; // short label for menus
  group: "interior" | "exterior" | "restoration";
  /** 1 line for cards */
  blurb: string;
  /** SEO */
  seoTitle: string; // "Kitchen Remodeling Port Charlotte FL | Prestigious Home Improvements"
  seoDescription: string;
  keywords: string[];
  /** hero */
  eyebrow: string; // "Kitchen Remodeling · Port Charlotte & SWFL"
  headline: string; // benefit-led H1
  subhead: string;
  heroPhoto: Photo["category"];
  /** "How we work" – exactly 4 cards */
  howWeWork: { title: string; text: string }[];
  /** long intro paragraphs (2–4) */
  intro: string[];
  /** "Which project is yours?" – 4–6 scopes */
  scopes: ServiceScope[];
  /** bullet list of what is included */
  included: string[];
  /** cost section */
  cost: { title: string; text: string[]; factors: string[] };
  /** Florida/SWFL specific notes: permits, code, hurricane, HOA, insurance */
  localNotes: { title: string; text: string }[];
  faqs: Faq[];
  /** slugs of related services */
  related: string[];

  /* ---- Optional blocks mirroring the reference service pages ---- */
  /** Commitments block – 4–6 concrete commitments for this service */
  promises?: { title: string; text: string }[];
  /** "Signs it's time to …" – 5–8 symptoms */
  signsTitle?: string;
  signs?: { title: string; text: string }[];
  /** "Two ways to …" / "Styles, materials and glass" – option comparison */
  optionsTitle?: string;
  optionsIntro?: string;
  options?: { title: string; text: string; bullets?: string[] }[];
  /** "Cooler, quieter, more efficient" style benefits block */
  benefitsTitle?: string;
  benefits?: { title: string; text: string }[];
  /** service-specific process (visit through walkthrough), 4–6 steps */
  processTitle?: string;
  process?: Step[];
};

export type Project = {
  slug: string; // /projects/[slug]
  title: string;
  city: string; // "Port Charlotte"
  date: string; // "2026-03"
  serviceSlugs: string[];
  summary: string; // 1–2 sentences for cards
  body: string[]; // paragraphs
  scope: string[]; // bullet list of work done
  duration: string; // "6 weeks"
  before: Photo; // before photo
  after: Photo; // after photo
  gallery: Photo[];
  /** true until the client sends real photos/projects */
  sample: boolean;
  /** optional per-project FAQ (3–4) */
  faqs?: Faq[];
  /** optional short story heading, e.g. "A 1985 lanai wall that had to go" */
  storyTitle?: string;
  /** optional homeowner quote tied to this project */
  quote?: { text: string; name: string };
  /** true only when `before` and `after` are genuinely the same spot before/after the job */
  beforeAfter?: boolean;
  /** SEO overrides for real project posts */
  seoTitle?: string;
  seoDescription?: string;
};

export type Post = {
  slug: string; // /blog/[slug]
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  date: string; // "2026-10-20"
  readMinutes: number;
  cover: Photo;
  /** markdown-ish: paragraphs; lines starting with "## " are H2, "- " bullets */
  body: string[];
  keywords: string[];
  relatedServices: string[];
};

export type Testimonial = {
  name: string; // "Brad N."
  city?: string;
  source: "Google" | "Yelp" | "BBB" | "Nextdoor";
  rating: 5;
  text: string;
  service?: string;
  date?: string;
};

export type Area = {
  slug: string; // /service-areas/[slug]
  name: string; // "North Port"
  county: string; // "Sarasota County"
  zip: string[];
  driveTime: string; // "20 min from Port Charlotte"
  seoTitle: string;
  seoDescription: string;
  intro: string[]; // local-specific paragraphs (housing stock, hurricane zones, HOA, permits office)
  popularServices: string[]; // service slugs
  faqs: Faq[];
};
