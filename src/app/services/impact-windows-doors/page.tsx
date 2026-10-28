import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import HeroRatings from "@/components/service-pages/HeroRatings";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import BeforeAfter from "@/components/BeforeAfter";
import BandHead from "@/components/bands/BandHead";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import BrandsBand from "@/components/bands/BrandsBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import LocalPagesLinks from "@/components/service-pages/LocalPagesLinks";
import PriceCards from "@/components/service-pages/PriceCards";
import InstallSteps from "@/components/service-pages/InstallSteps";
import { faqSchema, serviceSchema, absUrl } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { projects } from "@/content/projects";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { impactPage as C } from "@/content/service-pages/impact-windows-doors";

const SLUG = "impact-windows-doors";
const service = getService(SLUG)!;

export const metadata: Metadata = {
  title: { absolute: C.seoTitle },
  description: C.seoDescription,
  alternates: { canonical: `/services/${SLUG}` },
  openGraph: {
    title: C.seoTitle,
    description: C.seoDescription,
    url: `/services/${SLUG}`,
    images: [{ url: C.hero.photos[0].src, alt: C.hero.photos[0].alt }],
  },
};

function Check({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`${className} shrink-0 text-amber-500`} fill="currentColor">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.58l7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
    </svg>
  );
}

export default function ImpactWindowsDoorsPage() {
  const ronald = testimonials.find((t) => t.name === C.beforeAfter.quoteName);
  const jobProjects = projects
    .filter((p) => !p.sample && p.serviceSlugs.includes(SLUG))
    .slice(0, 6);
  const learn = C.learn.map((s) => posts.find((p) => p.slug === s)).filter((p): p is (typeof posts)[number] => Boolean(p));
  const brandsFaq = service.faqs;

  return (
    <>
      <Schema
        data={[
          serviceSchema(service, absUrl(C.hero.photos[0].src)),
          faqSchema(brandsFaq),
        ]}
      />

      {/* 1. HERO — real job collage */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
        <Container className="relative py-10 md:py-16 lg:py-20">
          <div className="text-sm [&_a]:text-white/80 [&_a:hover]:text-amber-500 [&_li]:text-navy-100 [&_span]:!text-navy-100 [&_svg]:text-navy-100/60">
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.title }]} />
          </div>
          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-dark">{C.hero.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[56px]">
                {C.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 md:text-xl">{C.hero.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/free-estimate?service=${SLUG}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full btn-gold px-7 font-heading text-[15px] font-bold"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-white/70 px-7 font-heading text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  Call {site.phone}
                </a>
              </div>
              <p className="mt-3 text-sm text-navy-100/75">Prestigious Home Improvements · in-home visit, written price within a week.</p>
              <HeroRatings className="mt-8" />
            </div>

            <div className="grid grid-cols-6 grid-rows-[repeat(6,minmax(0,1fr))] gap-3 sm:gap-4" style={{ aspectRatio: "1 / 1" }}>
              {[
                { p: C.hero.photos[0], cls: "col-span-4 row-span-4" },
                { p: C.hero.photos[1], cls: "col-span-2 row-span-3" },
                { p: C.hero.photos[2], cls: "col-span-2 row-span-3" },
              ].map(({ p, cls }, i) => (
                <figure key={p.id} className={`relative overflow-hidden rounded-[16px] bg-navy-900 ${cls}`}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : undefined}
                    sizes={i === 0 ? "(min-width: 1280px) 370px, (min-width: 1024px) 29vw, 62vw" : "(min-width: 1280px) 180px, (min-width: 1024px) 14vw, 31vw"}
                    className="object-cover"
                  />
                </figure>
              ))}
              <div className="col-span-4 row-span-2 flex flex-col justify-center rounded-[16px] glass p-4 ring-1 ring-white/10 sm:p-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Real jobs, real photos</p>
                <p className="mt-2 text-sm leading-snug text-navy-100 sm:text-[15px]">
                  Every photo on this page was taken by our crew on a Southwest Florida job, from Siesta Key to Bonita Springs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. WHAT WE INSTALL */}
      <section className="section-y bg-sand-50" aria-labelledby="products-heading">
        <Container>
          <BandHead id="products-heading"
            eyebrow="What we install"
            title="Windows, Sliders and Doors That Meet Florida's Hurricane Code"
            intro="Every unit we install carries a Florida Product Approval for the wind pressure at your address. Pick a starting point; we price every opening on its own line."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {C.products.map((p) => (
              <li key={p.title} className="group flex flex-col overflow-hidden rounded-[16px] border border-sand-200 bg-white shadow-card sm:flex-row">
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-navy-50 sm:aspect-auto sm:w-[44%]">
                  <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-heading text-xl font-extrabold text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{p.text}</p>
                  <p className="mt-4 inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 font-heading text-[13px] font-bold text-navy-900">
                    Typical: {p.price}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4">
                    {p.links.map((l) => (
                      <Link key={l.href} href={l.href} className="text-sm font-semibold text-sea-600 underline decoration-amber-500/50 underline-offset-2 hover:text-navy-900">
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <BrandsBand className="bg-white" />

      {/* 3. WHY IMPACT — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="why-heading">
        <Container>
          <div>
            <BandHead id="why-heading"
              dark
              eyebrow="Why impact glass"
              title="Protection That Is Always On"
              intro="Southwest Florida sits in the wind-borne debris region. Every opening has to be protected one way or another; impact units do it without anyone climbing a ladder."
            />
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {C.why.map((w, i) => (
                <li key={w.title} className="rounded-[16px] glass p-7 ring-1 ring-white/10">
                  <span className="font-heading text-4xl font-extrabold text-amber-500/90">0{i + 1}</span>
                  <h3 className="mt-4 font-heading text-xl font-bold !text-white">{w.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* 4. INSTALL — real photos stepper */}
      <section className="section-y bg-sand-100" aria-labelledby="install-heading">
        <Container>
          <BandHead id="install-heading"
            eyebrow="How we install"
            title="What Happens Behind the Glass"
            intro="A window is only as good as the opening it sits in. These are the steps that keep water out and keep the unit in the wall, shown on our own jobs."
            className="mb-10"
          />
          <InstallSteps steps={C.install} />
        </Container>
      </section>

      {/* 5. BEFORE / AFTER + real review */}
      <section className="section-y bg-white" aria-labelledby="ba-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <BeforeAfter before={C.beforeAfter.before} after={C.beforeAfter.after} label="Aluminum lanai wall replaced with block and storm-rated glass" />
              <p className="mt-3 text-sm text-ink-500">Same wall, before and after. Drag the handle to compare.</p>
            </div>
            <div>
              <BandHead id="ba-heading" eyebrow="Before & after · Manatee County" title="An Aluminum Lanai Wall, Rebuilt in Block With Storm-Rated Glass" />
              {ronald ? (
                <figure className="mt-6 rounded-[16px] border border-sand-200 bg-sand-50 p-6">
                  <blockquote className="text-[16px] leading-relaxed text-ink-900">
                    &ldquo;{ronald.text.length > 330 ? `${ronald.text.slice(0, ronald.text.lastIndexOf(" ", 330))}…` : ronald.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-navy-900">
                    {ronald.name} · 5-star review on {ronald.source}
                  </figcaption>
                </figure>
              ) : null}
              <Link href={`/projects/${C.beforeAfter.projectSlug}`} className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy-900 hover:text-amber-600">
                See the full project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. RECENT JOBS */}
      <section className="section-y bg-sand-50" aria-labelledby="jobs-heading">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <BandHead id="jobs-heading" eyebrow="Recent window & door jobs" title="From a Single Slider to a Whole New Build" />
            <Link href="/projects" className="shrink-0 font-heading text-sm font-bold text-navy-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-600">
              All projects
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jobProjects.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block overflow-hidden rounded-[16px] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                    <Image src={p.after.src} alt={p.after.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full glass-chip px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-white">
                      {p.city}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-[1.05rem] font-bold leading-snug text-navy-900 group-hover:text-amber-600">{p.title}</h3>
                    <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-ink-500">{p.summary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. PROJECT TYPES + PRICES */}
      <section className="section-y bg-white" aria-labelledby="scopes-heading">
        <Container>
          <BandHead id="scopes-heading"
            eyebrow="Which project is yours?"
            title="Typical Window & Door Projects and What They Cost"
            intro="Typical 2026 Southwest Florida ranges, installed and permitted. Your written estimate prices every opening on its own line."
            className="mb-10"
          />
          <PriceCards scopes={service.scopes} />
          <ul className="mt-8 grid gap-3 text-[15px] text-ink-900 sm:grid-cols-2 lg:grid-cols-3">
            {service.cost.factors.slice(0, 6).map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-500">
            Want the long version? Read{" "}
            <Link href="/resources/hurricane-impact-windows-cost" className="font-semibold text-sea-600 underline underline-offset-2">
              what hurricane impact windows cost in 2026
            </Link>
            .
          </p>
        </Container>
      </section>

      {/* 8. COMPARE */}
      <section className="section-y bg-sand-100" aria-labelledby="compare-heading">
        <Container>
          <BandHead id="compare-heading" eyebrow="Impact vs shutters" title="Impact Glass, Shutters or Storm Windows?" className="mb-8" />
          <div className="overflow-x-auto rounded-[16px] border border-sand-200 bg-white shadow-card">
            <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th scope="col" className="p-4 font-heading text-sm font-bold"> </th>
                  {C.compare.columns.map((c, i) => (
                    <th key={c} scope="col" className={`p-4 font-heading text-sm font-bold ${i === 0 ? "text-amber-500" : ""}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {C.compare.rows.map((r, ri) => (
                  <tr key={r.label} className={ri % 2 ? "bg-sand-50" : "bg-white"}>
                    <th scope="row" className="p-4 font-semibold text-navy-900">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className={`p-4 ${i === 0 ? "font-semibold text-navy-900" : "text-ink-500"}`}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-500">
            {C.compare.note}{" "}
            <Link href={C.compare.link.href} className="font-semibold text-sea-600 underline underline-offset-2">
              {C.compare.link.label}
            </Link>
          </p>
        </Container>
      </section>

      <ReviewsBand service={SLUG} limit={3} />

      {/* 9. LEARN MORE */}
      <section className="section-y bg-sand-50" aria-labelledby="learn-heading">
        <Container>
          <BandHead id="learn-heading" eyebrow="Before you buy" title="Straight Answers From Our Window & Door Guides" className="mb-8" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learn.map((p) => (
              <li key={p.slug}>
                <Link href={`/resources/${p.slug}`} className="group flex h-full flex-col rounded-[16px] border border-sand-200 bg-white p-5 transition hover:border-amber-500 hover:shadow-card">
                  <span className="font-heading text-xs font-bold uppercase tracking-[.14em] text-amber-600">{p.readMinutes} min read</span>
                  <span className="mt-2 font-heading text-[1.05rem] font-bold leading-snug text-navy-900 group-hover:text-amber-600">{p.title}</span>
                  <span className="mt-2 line-clamp-2 text-[14px] text-ink-500">{p.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinancingBand />
      <FaqBand eyebrow="FAQ" title="Impact Window & Door Questions" items={service.faqs} />
      <LocalPagesLinks service={SLUG} />
      <ServiceAreasBand />
      <CtaBand
        title="Ready for a Written, Per-Opening Price?"
        text="An installer measures every opening at your home and you get a written estimate itemized opening by opening."
      />
    </>
  );
}
