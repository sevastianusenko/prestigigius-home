import type { Faq, Photo, Post, Service } from "@/content/types";
import { site } from "@/content/site";

/** JSON-LD node. Kept loose on purpose: schema.org is open-ended. */
export type JsonLd = Record<string, unknown>;

export type Crumb = { label: string; href?: string };

const CONTEXT = "https://schema.org";
export const ORG_ID = `${site.url}/#organization`;
export const WEBSITE_ID = `${site.url}/#website`;

/** "/services/roofing" → "https://www.prestigiousimprovements.com/services/roofing". Full URLs pass through. */
export function absoluteUrl(path: string = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  if (path === "" || path === "/") return `${site.url}/`;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function imageUrl(photo: Photo | string | undefined): string | undefined {
  if (!photo) return undefined;
  return absoluteUrl(typeof photo === "string" ? photo : photo.src);
}

function postalAddress(): JsonLd {
  return {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  };
}

function areaServed(): JsonLd[] {
  return site.serviceAreas.map((name) => ({ "@type": "City", name: `${name}, FL` }));
}

/** Compact reference to the site-wide GeneralContractor node (for provider/publisher fields). */
export function organizationRef(): JsonLd {
  return {
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: site.legalName,
    url: absoluteUrl("/"),
    telephone: site.phone,
    address: postalAddress(),
  };
}

/** GeneralContractor (LocalBusiness) — no self-served ratings (Google ignores them for LocalBusiness). */
export function localBusinessSchema(): JsonLd {
  const google = site.ratings.google;
  return {
    "@context": CONTEXT,
    "@type": "GeneralContractor",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    description: `${site.tagline}. Home remodeling, restoration, impact windows, lanais and storm rebuilds. Licensed & insured, ${site.licenseLabel}.`,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon"),
    image: absoluteUrl("/opengraph-image"),
    telephone: site.phone,
    email: site.email,
    priceRange: "$$-$$$",
    foundingDate: String(site.founded),
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.geo.lat,
      longitude: site.address.geo.lng,
    },
    areaServed: [
      ...areaServed(),
      ...site.counties.map((name) => ({ "@type": "AdministrativeArea", name: `${name}, FL` })),
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: site.licenseLabel,
      recognizedBy: {
        "@type": "GovernmentOrganization",
        name: "Florida Department of Business and Professional Regulation",
      },
    },
    founder: site.owners.map((o) => ({ "@type": "Person", name: o.name, jobTitle: o.role })),
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.nextdoor,
      site.ratings.yelp.href,
      site.ratings.bbb.href,
    ],
  };
}

/** WebSite node (optional, pairs with localBusinessSchema on the home page). */
export function websiteSchema(): JsonLd {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: absoluteUrl("/"),
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

/** BreadcrumbList. Same item shape as the Breadcrumbs component; Home is prepended if missing. */
export function breadcrumbSchema(items: Crumb[]): JsonLd {
  const list: Crumb[] =
    items.length > 0 && items[0].href === "/" ? items : [{ label: "Home", href: "/" }, ...items];
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: list.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };
}

/** FAQPage from Faq[] (only render when the FAQs are visible on the page). */
export function faqSchema(faqs: readonly Faq[]): JsonLd {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service node for /services/[slug], provided by the site-wide GeneralContractor. */
export function serviceSchema(service: Service, image?: Photo | string): JsonLd {
  const url = absoluteUrl(`/services/${service.slug}`);
  const img = imageUrl(image);
  return {
    "@context": CONTEXT,
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    serviceType: service.title,
    description: service.seoDescription,
    url,
    ...(img ? { image: img } : {}),
    provider: organizationRef(),
    areaServed: areaServed(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} options`,
      itemListElement: service.scopes.map((scope) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: scope.title, description: scope.summary },
      })),
    },
  };
}

/** Article (BlogPosting) for /blog/[slug]. */
export function articleSchema(post: Post): JsonLd {
  const url = absoluteUrl(`/resources/${post.slug}`);
  const img = imageUrl(post.cover);
  return {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline: post.title,
    description: post.seoDescription,
    ...(img ? { image: [img] } : {}),
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.keywords.join(", "),
    inLanguage: "en-US",
    author: { "@type": "Organization", "@id": ORG_ID, name: site.name, url: absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: site.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/apple-icon") },
    },
  };
}
