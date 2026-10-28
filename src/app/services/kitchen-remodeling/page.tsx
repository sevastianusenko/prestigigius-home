import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import HeroRatings from "@/components/service-pages/HeroRatings";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import { IllustrativeBadge } from "@/components/ProjectMedia";
import BandHead from "@/components/bands/BandHead";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import LocalPagesLinks from "@/components/service-pages/LocalPagesLinks";
import PriceCards from "@/components/service-pages/PriceCards";
import KitchenTimeline from "@/components/service-pages/KitchenTimeline";
import { faqSchema, serviceSchema } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { site } from "@/content/site";
import { kitchenPage as C } from "@/content/service-pages/kitchen-remodeling";

const SLUG = "kitchen-remodeling";
const service = getService(SLUG)!;

export const metadata: Metadata = {
  title: { absolute: C.seoTitle },
  description: C.seoDescription,
  keywords: service.keywords,
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

export default function KitchenRemodelingPage() {
  const learn = C.learn.map((s) => posts.find((p) => p.slug === s)).filter((p): p is (typeof posts)[number] => Boolean(p));

  return (
    <>
      <Schema data={[serviceSchema(service, C.hero.photos[0].src), faqSchema(service.faqs)]} />

      {/* 1. HERO */}
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
                <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-navy-100/60">Illustrative photos</p>
                <p className="mt-2 text-sm leading-snug text-navy-100/80 sm:text-[15px]">
                  These show the finishes we build. At your estimate, ask how we sequence cabinets, stone and inspections on a job like yours.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. WHAT WE BUILD */}
      <section className="section-y bg-sand-50" aria-labelledby="products-heading">
        <Container>
          <BandHead id="products-heading"
            eyebrow="What we build"
            title="Four Kitchen Projects We Build Most in Southwest Florida"
            intro="Our own crew handles demo, cabinets, tile and finish carpentry. Licensed plumbers and electricians work under the same contract, and we pull the permit."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {C.products.map((p) => (
              <li key={p.title} className="group flex flex-col overflow-hidden rounded-[16px] border border-sand-200 bg-white shadow-card sm:flex-row">
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-navy-50 sm:aspect-auto sm:w-[44%]">
                  <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <IllustrativeBadge className="absolute bottom-3 left-3" />
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

      {/* 3. WHERE KITCHEN REMODELS GO WRONG — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="fail-heading">
        <Container>
          <BandHead id="fail-heading"
            dark
            eyebrow="Why kitchen remodels go sideways"
            title="It Is Almost Never the Tile"
            intro="When a kitchen remodel drags on for months or blows the budget, the cause is usually one of these three. Each one is a sequencing decision, and each one is avoidable."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {C.failures.map((w, i) => (
              <li key={w.title} className="rounded-[16px] glass p-7 ring-1 ring-white/10">
                <span className="font-heading text-4xl font-extrabold text-amber-500/90">0{i + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold !text-white">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{w.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. DOWNTIME TIMELINE */}
      <section className="section-y bg-sand-100" aria-labelledby="timeline-heading">
        <Container>
          <BandHead id="timeline-heading" eyebrow="Your schedule" title="How Long You Will Be Without a Kitchen" intro={C.timelineIntro} className="mb-10" />
          <KitchenTimeline scopes={C.timeline} />
        </Container>
      </section>

      {/* 5. SWFL HOUSES */}
      <section className="section-y bg-sand-50" aria-labelledby="local-heading">
        <Container>
          <BandHead id="local-heading"
            eyebrow="Southwest Florida houses"
            title="What We Plan For Before We Quote"
            intro="The same kitchen costs differently in a 1980s Port Charlotte block home than in a new build. These are the four things we check at the free estimate so they never show up as a surprise."
            className="mb-10"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {C.local.map((l) => (
              <li key={l.title} className="flex flex-col rounded-[16px] border border-sand-200 bg-white p-6 shadow-card">
                <Check className="h-6 w-6" />
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy-900">{l.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{l.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From First Measurement to Final Walkthrough"}
        intro="Layout, selections, permits and cabinet delivery all happen while your old kitchen still works. Demo is scheduled only after the cabinets are here and inspected."
        steps={service.process}
      />

      {/* 6. PROJECT TYPES + PRICES */}
      <section className="section-y bg-sand-50" aria-labelledby="scopes-heading">
        <Container>
          <BandHead id="scopes-heading"
            eyebrow="Which project is yours?"
            title="Typical Kitchen Projects and What They Cost"
            intro="Typical 2026 Southwest Florida ranges, permitted and installed. Your written estimate lists every line, with allowances for cabinets, stone and fixtures spelled out."
            className="mb-10"
          />
          <PriceCards scopes={service.scopes} featured={Math.max(0, service.scopes.findIndex((s) => s.title.startsWith("Full Replacement")))} />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="rounded-[16px] border border-sand-200 bg-white p-6 shadow-card md:p-7">
              <h3 className="font-heading text-lg font-extrabold text-navy-900">Two numbers that shape the budget</h3>
              <dl className="mt-5 grid gap-5 sm:grid-cols-2">
                {C.budget.map((b) => (
                  <div key={b.label} className="rounded-[12px] bg-sand-50 p-5">
                    <dt className="text-[14px] leading-snug text-ink-500">{b.label}</dt>
                    <dd className="mt-2 font-heading text-3xl font-extrabold text-navy-900">{b.value}</dd>
                    <dd className="mt-2 text-[14px] leading-relaxed text-ink-500">{b.note}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-sm text-ink-500">Most full kitchens that keep the same footprint land between $45,000 and $85,000.</p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-extrabold text-navy-900">What moves the price</h3>
              <ul className="mt-4 space-y-3 text-[15px] text-ink-900">
                {service.cost.factors.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <Check />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-ink-500">
            Planning more than the kitchen? Read{" "}
            <Link href="/resources/cost-to-remodel-a-house-in-florida" className="font-semibold text-sea-600 underline underline-offset-2">
              what it costs to remodel a house in Florida
            </Link>{" "}
            for whole-home numbers and the order to do things in.
          </p>
        </Container>
      </section>

      {/* 7. COMPARE */}
      <section className="section-y bg-white" aria-labelledby="compare-heading">
        <Container>
          <BandHead id="compare-heading" eyebrow="Reface, replace or rebuild" title="Refacing, New Cabinets or a New Layout?" className="mb-8" />
          <div className="overflow-x-auto rounded-[16px] border border-sand-200 bg-white shadow-card">
            <table className="w-full min-w-[680px] border-collapse text-left text-[15px]">
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

      <PromisesBand eyebrow="Why homeowners hire us" title="What You Can Hold Us To" items={service.promises} />

      <ReviewsBand title="What Homeowners Say About Our Crew" service={SLUG} limit={3} />

      {/* 8. LEARN MORE */}
      <section className="section-y bg-sand-50" aria-labelledby="learn-heading">
        <Container>
          <BandHead id="learn-heading" eyebrow="Before you remodel" title="Straight Answers From Our Kitchen Guides" className="mb-8" />
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
      <FaqBand eyebrow="FAQ" title="Kitchen Remodeling Questions" items={service.faqs} />
      <LocalPagesLinks service={SLUG} />
      <ServiceAreasBand />
      <CtaBand
        title="Ready for a Written, Fixed Price on Your Kitchen?"
        text="We measure every wall, look at the panel, plumbing and venting, and talk through how you cook. You get an itemized estimate with allowances spelled out."
      />
    </>
  );
}
