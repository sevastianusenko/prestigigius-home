import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ResourceGrid, { type ResourceItem } from "@/components/blog/ResourceGrid";
import { postCategories, postCategory } from "@/components/blog/categories";
import { absUrl } from "@/components/projects/utils";
import { posts } from "@/content/blog";
import { site } from "@/content/site";

import { OG_DEFAULT } from "@/components/og";
export const metadata: Metadata = {
  title: { absolute: "Home Renovation Guides for Southwest Florida | Prestigious" },
  description:
    "Straight answers on remodeling costs, permits, hurricane code and insurance for Port Charlotte, Charlotte, Sarasota and Lee County homeowners.",
  alternates: { canonical: "/resources" },
  openGraph: {
    images: [OG_DEFAULT],
    title: { absolute: "Home Renovation Guides for Southwest Florida | Prestigious" },
    description: "Plain-spoken remodeling guides from a licensed Port Charlotte contractor.",
    url: "/resources",
    type: "website",
  },
};

const reasons = [
  site.licenseLabel,
  "Free written, itemized estimates",
  "Owners on every job, start to finish",
  "Written workmanship warranty",
  "Financing available",
  "Straight advice, no pressure",
];

export default function ResourcesPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  const items: ResourceItem[] = sorted.map((p) => ({
    post: { slug: p.slug, title: p.title, excerpt: p.excerpt, date: p.date, readMinutes: p.readMinutes, cover: p.cover },
    category: postCategory(p)?.label,
    tags: p.relatedServices,
    haystack: [p.title, p.excerpt, ...p.keywords].join(" ").toLowerCase(),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Home Renovation Guides for Southwest Florida",
    url: absUrl("/resources", site.url),
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sorted.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absUrl(`/resources/${p.slug}`, site.url),
        name: p.title,
      })),
    },
  };

  return (
    <>
      <Schema data={schema} />

      <section className="border-b border-sand-200 bg-sand-100">
        <Container className="pb-14 pt-8 md:pb-[72px]">
          <Breadcrumbs items={[{ label: "Resources" }]} />
          <div className="mt-10 max-w-3xl">
            <Eyebrow>Resources</Eyebrow>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 md:text-[57px]">
              Home Renovation Guides for Port Charlotte &amp; Southwest Florida
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
              Plain answers, real Florida numbers and honest advice for homeowners in Charlotte, Sarasota and Lee
              Counties, written by the team that prices and runs our jobs.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-16 md:py-[72px]">
        <Container>
          <ResourceGrid items={items} categories={postCategories(sorted)} />

          <div className="mt-16 rounded-[14px] border border-sand-200 bg-white p-6 shadow-card md:mt-20 md:p-10">
            <h2 className="font-heading text-xl font-bold text-navy-900 md:text-2xl">
              Why Southwest Florida homeowners choose Prestigious
            </h2>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-[15px] text-ink-900">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2.2}>
                    <path d="m5 12 5 5 9-10" />
                  </svg>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <CtaBand
        title="Get Your Free Estimate"
        text="One of the owners comes to the house, sizes up the work and gives you a written, itemized estimate. No charge and no obligation, anywhere from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs."
      />
    </>
  );
}
