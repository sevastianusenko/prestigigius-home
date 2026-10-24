import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import FaqBand from "@/components/bands/FaqBand";
import ProjectMedia from "@/components/ProjectMedia";
import ProjectHeroGallery from "@/components/projects/ProjectHeroGallery";
import { absUrl, clamp, formatMonthYear, relatedProjects } from "@/components/projects/utils";
import { projects } from "@/content/projects";
import { areas } from "@/content/areas";
import { getService } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { faqSchema } from "@/lib/seo";

type Params = { slug: string };

function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Lower-case trade noun for "Looking for a ___ contractor in ___?" */
const tradeNoun: Record<string, string> = {
  "impact-windows-doors": "impact window and door",
  "lanai-screen-enclosures": "lanai and screen enclosure",
  "exterior-remodeling": "stucco and exterior remodeling",
  roofing: "roofing",
  siding: "siding",
  "whole-home-remodeling": "whole-home remodeling",
  "kitchen-remodeling": "kitchen remodeling",
  "bathroom-remodeling": "bathroom remodeling",
  "home-additions": "home addition",
  painting: "painting",
  flooring: "flooring",
  "outdoor-living": "outdoor living",
  "home-restoration": "home restoration",
  "storm-damage-rebuild": "storm damage repair",
};

const article = (word: string) => (/^[aeiou]/i.test(word) ? "an" : "a");

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const title = clamp(project.seoTitle ?? project.title, 60);
  const description = clamp(project.seoDescription ?? project.summary, 160);
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title,
      description,
      url: `/projects/${project.slug}`,
      type: "article",
      images: [{ url: project.after.src, alt: project.after.alt }],
    },
  };
}

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-amber-500" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const dtCls = "text-xs font-bold uppercase tracking-[.14em] text-ink-500";

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectServices = project.serviceSlugs
    .map((s) => getService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const primary = projectServices[0];
  const more = relatedProjects(project, projects, 3);
  const area = areas.find((a) => a.name === project.city);
  const county = area?.county ?? "Southwest Florida";
  const noun = primary ? (tradeNoun[primary.slug] ?? primary.navLabel.toLowerCase()) : "remodeling";
  const quoteSource = project.quote
    ? testimonials.find((t) => t.name === project.quote?.name)?.source
    : undefined;

  const crumbs = [{ label: "Projects", href: "/projects" }, { label: project.title }];

  const workSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absUrl(`/projects/${project.slug}`, site.url),
    ...(project.sample ? {} : { image: Array.from(new Set([project.after.src, project.before.src, ...project.gallery.map((g) => g.src)])).map((src) => absUrl(src, site.url)) }),
    dateCreated: project.date,
    locationCreated: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressLocality: project.city, addressRegion: "FL", addressCountry: "US" },
    },
    creator: { "@type": "GeneralContractor", name: site.legalName, url: site.url },
  };

  return (
    <>
      <Schema data={workSchema} />
      {project.faqs?.length ? <Schema data={faqSchema(project.faqs)} /> : null}

      {/* 1. Hero: H1 + gallery (after photo, thumbnails, before/after slider) */}
      <section className="bg-sand-100">
        <Container className="pb-14 pt-8 md:pb-[72px]">
          <Breadcrumbs items={crumbs} />
          <div className="mt-10 max-w-[1010px]">
            <Eyebrow>Featured project</Eyebrow>
            <h1 className="mt-4 font-heading text-3xl font-extrabold leading-[1.1] tracking-tight text-navy-900 md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[.12em] text-ink-500">
              {formatMonthYear(project.date)} · {project.city}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-500">{project.summary}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
              {primary ? (
                <Link
                  href={`/services/${primary.slug}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-sea-600 hover:text-navy-900"
                >
                  See our {primary.navLabel.toLowerCase()} service <span aria-hidden="true">→</span>
                </Link>
              ) : null}
              {project.sample ? (
                <span className="text-sm text-ink-500">
                  <span className="font-medium text-navy-900">Customer story.</span> Details come from the homeowner&apos;s
                  published review; photos are illustrative.
                </span>
              ) : null}
            </div>
          </div>

          <div className="mt-10">
            {project.sample ? (
              <div className="mx-auto max-w-5xl">
                <ProjectMedia project={project} sizes="(min-width: 1024px) 1024px, 100vw" />
              </div>
            ) : (
              <ProjectHeroGallery
                before={project.before}
                after={project.after}
                gallery={project.gallery}
                beforeAfter={project.beforeAfter}
                title={project.title}
              />
            )}
          </div>
        </Container>
      </section>

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Details panel */}
      <section className="bg-sand-50 py-16 md:py-[72px]" aria-labelledby="details-heading">
        <Container>
          <div className="mx-auto max-w-[1010px] rounded-[14px] bg-white p-7 shadow-card md:p-10">
            <h2 id="details-heading" className="font-heading text-2xl font-extrabold text-navy-900 md:text-3xl">
              Project details
            </h2>
            <dl className="mt-7 grid gap-x-8 gap-y-5 border-b border-sand-200 pb-7 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <dt className={dtCls}>Location</dt>
                <dd className="mt-1.5 font-semibold text-navy-900">
                  {area ? (
                    <Link href={`/service-areas/${area.slug}`} className="hover:text-sea-600">
                      {project.city}, FL
                    </Link>
                  ) : /County|Florida/.test(project.city) ? (
                    project.city
                  ) : (
                    `${project.city}, FL`
                  )}
                  {area ? <span className="block text-sm font-normal text-ink-500">{area.county}</span> : null}
                </dd>
              </div>
              {project.date ? (
                <div>
                  <dt className={dtCls}>{project.sample ? "Reviewed" : "Photographed"}</dt>
                  <dd className="mt-1.5 font-semibold text-navy-900">{formatMonthYear(project.date)}</dd>
                </div>
              ) : null}
              {project.duration ? (
                <div>
                  <dt className={dtCls}>Timeline</dt>
                  <dd className="mt-1.5 font-semibold text-navy-900">{project.duration}</dd>
                </div>
              ) : null}
              <div>
                <dt className={dtCls}>Services</dt>
                <dd className="mt-1.5">
                  <ul className="flex flex-wrap gap-1.5">
                    {projectServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="inline-block rounded-full border border-sand-200 bg-sand-50 px-3 py-1 text-sm font-medium text-navy-900 transition-colors hover:border-navy-700 hover:bg-white"
                        >
                          {s.navLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <h3 className="mt-7 font-heading text-lg font-bold text-navy-900">Scope of work</h3>
            <ul className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {project.scope.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-snug text-ink-900">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. Story */}
      <section className="bg-sand-100 py-16 md:py-[72px]" aria-labelledby="story-heading">
        <Container>
          <div className="mx-auto max-w-[760px]">
            <Eyebrow>About this project</Eyebrow>
            <h2
              id="story-heading"
              className="mt-3 font-heading text-3xl font-extrabold leading-tight text-navy-900 md:text-[2.2rem]"
            >
              {project.storyTitle ?? "What we did and why"}
            </h2>
            <div className="mt-7 space-y-5 text-[17px] leading-[1.7] text-ink-900">
              {project.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Tie-in band */}
      <section className="bg-navy-950 py-16 md:py-[72px]" aria-labelledby="tiein-heading">
        <Container>
          <div className="mx-auto grid max-w-[1010px] gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2
                id="tiein-heading"
                className="font-heading text-3xl font-extrabold leading-tight !text-white md:text-[2.2rem]"
              >
                Looking for {article(noun)} {noun} contractor in {county}?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-100/85">
                This job is one example of what our own crew builds for homeowners around {site.address.city} and the
                rest of Southwest Florida. If your house has a similar problem, a free visit is the quickest way to learn
                what fixing it would involve.
              </p>
              <ul className="mt-6 space-y-2 text-navy-100">
                <li className="flex gap-3">
                  <Check />
                  <span>{site.licenseLabel}, fully insured</span>
                </li>
                <li className="flex gap-3">
                  <Check />
                  <span>Written workmanship warranty</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/free-estimate"
                className="inline-flex h-13 items-center justify-center rounded-full px-7 font-semibold btn-gold"
              >
                Request a Free Estimate
              </Link>
              {primary ? (
                <Link
                  href={`/services/${primary.slug}`}
                  className="inline-flex h-13 items-center justify-center rounded-full border border-white/30 px-7 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Explore {primary.navLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Homeowner quote (only on projects tied to a real review) */}
      {project.quote ? (
        <section className="bg-sand-50 py-16 md:py-[72px]" aria-labelledby="quote-heading">
          <Container>
            <div className="mx-auto max-w-[860px] text-center">
              <Eyebrow>In their words</Eyebrow>
              <h2 id="quote-heading" className="mt-3 font-heading text-3xl font-extrabold text-navy-900 md:text-[2.2rem]">
                What the Homeowner Had to Say
              </h2>
              <figure className="mt-8 rounded-[14px] bg-white p-8 text-left shadow-card md:p-10">
                <svg aria-hidden="true" viewBox="0 0 32 32" className="h-9 w-9 text-amber-500" fill="currentColor">
                  <path d="M12 6C6.5 8 4 12 4 17v9h10V16H8.5c.3-3.5 2-6 5.5-7.5L12 6Zm16 0c-5.5 2-8 6-8 11v9h10V16h-5.5c.3-3.5 2-6 5.5-7.5L28 6Z" />
                </svg>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink-900 md:text-xl">
                  <p>{project.quote.text}</p>
                </blockquote>
                <figcaption className="mt-6 font-heading font-bold text-navy-900">
                  {project.quote.name}
                  {quoteSource ? (
                    <span className="ml-2 text-sm font-normal text-ink-500">· {quoteSource} review</span>
                  ) : null}
                </figcaption>
              </figure>
            </div>
          </Container>
        </section>
      ) : null}

      {/* 7. Related projects */}
      {more.length > 0 ? (
        <section className="border-t border-sand-200 bg-sand-100 py-16 md:py-[72px]" aria-labelledby="related-heading">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="related-heading" className="font-heading text-3xl font-extrabold text-navy-900 md:text-[2.2rem]">
                More Work Like This
              </h2>
              <Link href="/projects" className="text-sm font-semibold text-sea-600 hover:underline">
                View all projects →
              </Link>
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {more.map((p) => (
                <li key={p.slug} className="min-w-0">
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* 8. Project FAQ */}
      {project.faqs && project.faqs.length > 0 ? (
        <FaqBand eyebrow="Frequently asked questions" title="Planning Something Similar?" items={project.faqs} />
      ) : null}

      {/* 9. CTA */}
      <CtaBand />
    </>
  );
}
