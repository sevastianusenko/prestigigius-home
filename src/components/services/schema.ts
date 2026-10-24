import type { Faq, Service } from "@/content/types";
import { site } from "@/content/site";

export type Crumb = { label: string; href?: string };

/** Absolute URL for a site path ("/services/roofing" → "https://…/services/roofing"). */
export function absUrl(path: string): string {
  if (path === "/") return site.url;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function breadcrumbSchema(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absUrl(c.href) } : {}),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Shared provider node for Service schema (matches the site-wide GeneralContractor). */
export function providerNode() {
  return {
    "@type": "GeneralContractor",
    "@id": `${site.url}/#organization`,
    name: site.legalName,
    url: site.url,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
  };
}

export function areaServedNodes() {
  return site.serviceAreas.map((name) => ({ "@type": "City", name: `${name}, FL` }));
}

export function serviceSchema(s: Service, image?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absUrl(`/services/${s.slug}`)}#service`,
    name: s.title,
    serviceType: s.title,
    description: s.seoDescription,
    url: absUrl(`/services/${s.slug}`),
    ...(image ? { image } : {}),
    provider: providerNode(),
    areaServed: areaServedNodes(),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.title} options`,
      itemListElement: s.scopes.map((sc) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: sc.title, description: sc.summary },
      })),
    },
  };
}

export function serviceListSchema(list: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Home remodeling and restoration services",
    numberOfItems: list.length,
    itemListElement: list.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: absUrl(`/services/${s.slug}`),
    })),
  };
}
