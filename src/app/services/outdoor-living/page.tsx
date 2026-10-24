import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import { IllustrativeBadge, RealJobBadge } from "@/components/ProjectMedia";
import BandHead from "@/components/bands/BandHead";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PriceCards from "@/components/service-pages/PriceCards";
import BackyardBuilder from "@/components/service-pages/BackyardBuilder";
import { faqSchema, serviceSchema } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { site } from "@/content/site";
import { outdoorPage as C } from "@/content/service-pages/outdoor-living";

const SLUG = "outdoor-living";
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

export default function OutdoorLivingPage() {
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
                  Book a Free Backyard Consultation
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-white/70 px-7 font-heading text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  Call {site.phone}
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {C.hero.proof.map((p) => (
                  <div key={p.label}>
                    <dt className="sr-only">{p.label}</dt>
                    <dd>
                      <span className="block font-heading text-3xl font-extrabold text-amber-500">{p.value}</span>
                      <span className="mt-1 block text-sm text-navy-100/80">{p.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="grid grid-cols-6 grid-rows-[repeat(6,minmax(0,1fr))] gap-3 sm:gap-4" style={{ aspectRatio: "1 / 1" }}>
              {[
                { p: C.hero.photos[0], cls: "col-span-4 row-span-4" },
                { p: C.hero.photos[1], cls: "col-span-2 row-span-3" },
                { p: C.hero.photos[2], cls: "col-span-2 row-span-3" },
              ].map(({ p, cls }, i) => (
                <figure key={p.id} className={`relative overflow-hidden rounded-[16px] bg-navy-900 ${cls}`}>
                  <Image src={p.src} alt={p.alt} fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                </figure>
              ))}
              <div className="col-span-4 row-span-2 flex flex-col justify-center rounded-[16px] bg-white/[.06] p-4 ring-1 ring-white/10 sm:p-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">Illustrative photos</p>
                <p className="mt-2 text-sm leading-snug text-navy-100 sm:text-[15px]">
                  These show the kind of outdoor spaces we build. Two of our own indoor-outdoor jobs are further down the page.
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
          <BandHead
            eyebrow="What we build"
            title="Kitchens, Pavers, Pergolas and Patio Covers"
            intro="Built as one project or in phases, with the first phase designed so the next one fits without rework."
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
                  <p className="mt-auto inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 font-heading text-[13px] font-bold text-navy-900">
                    Typical: {p.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 3. GULF COAST — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="gulf-heading">
        <Container>
          <BandHead
            dark
            eyebrow="Built for the conditions"
            title="Gulf Coast Wind, Rain and Sun Are Hard on a Backyard"
            intro="We plan for all three up front, because a licensed contractor builds the whole project, not a paver crew or a pergola kit."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {C.gulf.map((w, i) => (
              <li key={w.title} className="rounded-[16px] bg-white/[.06] p-7 ring-1 ring-white/10">
                <span className="font-heading text-4xl font-extrabold text-amber-500/90">0{i + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold !text-white">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{w.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. ESTIMATOR */}
      <section className="section-y bg-sand-100" aria-labelledby="estimate-heading">
        <Container>
          <BandHead
            eyebrow="Ballpark it"
            title="Build Your Backyard, See the Range"
            intro="Combine pavers, a cover and a kitchen to see a typical 2026 range for the whole project."
            className="mb-10"
          />
          <BackyardBuilder {...C.builder} />
        </Container>
      </section>

      {/* 6. HOW MUCH COVER */}
      <section className="section-y bg-white" aria-labelledby="options-heading">
        <Container>
          <BandHead eyebrow="How much cover?" title={service.optionsTitle ?? "Open Shade, a Solid Roof, or Open Sky?"} intro={service.optionsIntro} className="mb-10" />
          <ul className="grid gap-5 md:grid-cols-3">
            {(service.options ?? []).map((o) => (
              <li key={o.title} className="flex flex-col rounded-[16px] border border-sand-200 bg-sand-50 p-6 md:p-7">
                <h3 className="font-heading text-xl font-extrabold text-navy-900">{o.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{o.text}</p>
                {o.bullets?.length ? (
                  <ul className="mt-4 space-y-2 border-t border-sand-200 pt-4">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-[14px] leading-snug text-ink-900">
                        <Check className="h-4 w-4" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7. INDOOR-OUTDOOR — real jobs */}
      <section className="section-y bg-sand-50" aria-labelledby="connect-heading">
        <Container>
          <BandHead eyebrow="Our window & door crew" title="The Opening Between the House and the Yard" intro={C.connection.intro} className="mb-10" />
          <ul className="grid gap-6 md:grid-cols-2">
            {C.connection.jobs.map((j) => (
              <li key={j.href}>
                <Link href={j.href} className="group block overflow-hidden rounded-[16px] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                    <Image src={j.photo.src} alt={j.photo.alt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <RealJobBadge />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="font-heading text-xl font-extrabold text-navy-900 group-hover:text-amber-600">{j.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{j.text}</p>
                    <span className="mt-3 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy-900">
                      See the project <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From Backyard Sketch to Final Walkthrough"}
        intro="Your written schedule counts county permit review, not just build days. When a date moves, you hear it from us first."
        steps={service.process}
      />

      {/* 7. PRICES */}
      <section className="section-y bg-sand-50" aria-labelledby="scopes-heading">
        <Container>
          <BandHead
            eyebrow="Which project is yours?"
            title="Typical Outdoor Projects and What They Cost"
            intro="Typical 2026 Charlotte, Sarasota and Lee County ranges. Gas, water and electrical runs are measured and priced in your estimate."
            className="mb-10"
          />
          <PriceCards scopes={service.scopes} featured={-1} />
          <ul className="mt-8 grid gap-3 text-[15px] text-ink-900 sm:grid-cols-2 lg:grid-cols-3">
            {service.cost.factors.map((f) => (
              <li key={f} className="flex gap-2.5">
                <Check />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 8. LOCAL NOTES */}
      <section className="section-y bg-white" aria-labelledby="rules-heading">
        <Container>
          <BandHead eyebrow="Southwest Florida" title="Permits, HOA Setbacks and Hurricane Season" className="mb-10" />
          <ul className="grid gap-5 lg:grid-cols-3">
            {service.localNotes.map((n, i) => (
              <li key={n.title} className="rounded-[16px] border border-sand-200 bg-sand-50 p-6 md:p-7">
                <span className="font-heading text-3xl font-extrabold text-amber-500">0{i + 1}</span>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-navy-900">{n.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{n.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <PromisesBand eyebrow="Why homeowners hire us" title="What You Can Hold Us To" items={service.promises} />

      <ReviewsBand title="What Homeowners Say About Our Crew" service={SLUG} limit={3} />

      {/* 9. LEARN MORE */}
      <section className="section-y bg-sand-50" aria-labelledby="learn-heading">
        <Container>
          <BandHead eyebrow="Opening up to the yard" title="More From Our Guides" className="mb-8" />
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
      <FaqBand eyebrow="FAQ" title="Outdoor Living Questions" items={service.faqs} />
      <ServiceAreasBand />
      <CtaBand
        title="Plan the Backyard You Will Actually Use"
        text="We look at afternoon sun, drainage, setbacks and how you use the yard, then give you a written, itemized estimate. Free, no pressure."
      />
    </>
  );
}
