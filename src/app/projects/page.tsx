import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import ProjectFilter, { type ProjectFilterOption } from "@/components/projects/ProjectFilter";
import FeaturedCarousel, { type FeaturedSlide } from "@/components/projects/FeaturedCarousel";
import { absUrl, formatMonthYear, sortByDateDesc } from "@/components/projects/utils";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { site } from "@/content/site";

import { OG_DEFAULT } from "@/components/og";
export const metadata: Metadata = {
  title: { absolute: "Window, Door & Lanai Projects, SWFL | Prestigious" },
  description:
    "Impact windows, sliding glass doors, entry doors and a lanai wall rebuild, photographed by our crew across Southwest Florida.",
  alternates: { canonical: "/projects" },
  openGraph: {
    images: [OG_DEFAULT],
    title: { absolute: "Window, Door & Lanai Projects, SWFL | Prestigious" },
    description: "Impact windows, sliding glass doors, entry doors and a lanai wall rebuild, photographed by our crew across Southwest Florida.",
    url: "/projects",
    type: "website",
  },
};

const crumbs = [{ label: "Projects" }];

/** Projects tied to real reviews first, topped up with the newest, max 4. */
function pickFeatured() {
  const sorted = sortByDateDesc(projects);
  const withQuote = sorted.filter((p) => p.quote);
  const rest = sorted.filter((p) => !p.quote);
  return [...withQuote, ...rest].slice(0, 4);
}

export default function ProjectsPage() {
  const sorted = sortByDateDesc(projects);
  const hasSample = projects.some((p) => p.sample);

  const slides: FeaturedSlide[] = pickFeatured().map((p) => ({
    slug: p.slug,
    title: p.title,
    meta: `${formatMonthYear(p.date)} · ${p.city}`,
    summary: p.summary,
    photo: p.after,
  }));

  const options: ProjectFilterOption[] = services
    .map((s) => ({
      slug: s.slug,
      title: s.navLabel || s.title,
      count: projects.filter((p) => p.serviceSlugs.includes(s.slug)).length,
    }))
    .filter((o) => o.count > 0);

  const items = sorted.map((p) => ({
    slug: p.slug,
    serviceSlugs: p.serviceSlugs,
    card: <ProjectCard project={p} />,
  }));

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Remodeling Projects",
    url: absUrl("/projects", site.url),
    hasPart: sorted.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      url: absUrl(`/projects/${p.slug}`, site.url),
    })),
  };

  return (
    <>
      <Schema data={collection} />

      <section className="bg-sand-100">
        <Container className="pb-14 pt-8 md:pb-[72px]">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 max-w-[1010px]">
            <Eyebrow>Our work</Eyebrow>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-navy-900 md:text-[3.5rem]">
              Impact Window, Door and Lanai Projects in Southwest Florida
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
              Real jobs photographed by our crew: impact windows and sliders on new block homes, entry doors, replacement
              windows and a full lanai wall rebuild, from Bonita Springs to Parrish. Customer stories from our reviews are
              listed too.
            </p>
            {hasSample ? (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-100 px-4 py-1.5 text-sm font-medium text-navy-900">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Job photos are ours; review-only stories use illustrative images
              </p>
            ) : null}
          </div>

          <div className="mt-12">
            <FeaturedCarousel slides={slides} />
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-16 md:py-[72px]" aria-labelledby="all-projects-heading">
        <Container>
          <div className="mb-8 max-w-[1010px]">
            <Eyebrow>Browse by service</Eyebrow>
            <h2 id="all-projects-heading" className="mt-3 font-heading text-3xl font-extrabold text-navy-900 md:text-[2.2rem]">
              Every Project, Sorted Your Way
            </h2>
          </div>
          <ProjectFilter options={options} items={items} />
        </Container>
      </section>

      <TrustStrip />

      <ServiceAreasBand />

      <CtaBand
        title="Want your home on this page next?"
        text="Tell us what you have in mind. We come out, measure, and send a written, itemized estimate at no cost."
      />
    </>
  );
}
