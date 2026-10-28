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
import PriceCards from "@/components/service-pages/PriceCards";
import PaintEstimator from "@/components/service-pages/PaintEstimator";
import { faqSchema, serviceSchema } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { site } from "@/content/site";
import { paintingPage as C } from "@/content/service-pages/painting";

const SLUG = "painting";
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

export default function PaintingPage() {
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
              <p className="mt-3 text-sm text-navy-100/75">In-home visit, written price within a week.</p>
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
                  These show the kind of work we do. Your contract names the exact brand, product, sheen and coat count for every surface.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. WHAT WE PAINT */}
      <section className="section-y bg-sand-50" aria-labelledby="products-heading">
        <Container>
          <BandHead id="products-heading"
            eyebrow="What we paint"
            title="Rooms, Cabinets, Ceilings and Stucco Exteriors"
            intro="Done by our own Port Charlotte crew, on its own or as part of a bigger remodel under one contract."
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

      {/* 3. CLIMATE — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="climate-heading">
        <Container>
          <BandHead id="climate-heading"
            dark
            eyebrow="Why paint fails here"
            title="Paint Works Harder in Southwest Florida"
            intro="Most early failures we see come down to one of these three, and every one of them is a prep problem, not a paint problem."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {C.climate.map((w, i) => (
              <li key={w.title} className="rounded-[16px] glass p-7 ring-1 ring-white/10">
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
          <BandHead id="estimate-heading"
            eyebrow="Ballpark it"
            title="What Would a Repaint Cost?"
            intro="Pick interior or exterior to see the typical 2026 range for a home like yours."
            className="mb-10"
          />
          <PaintEstimator {...C.estimator} />
        </Container>
      </section>

      {/* 5. SIGNS */}
      <section className="section-y bg-white" aria-labelledby="signs-heading">
        <Container>
          <BandHead id="signs-heading"
            eyebrow="Try the chalk test"
            title={service.signsTitle ?? "Signs Your Exterior Paint Is Failing"}
            intro="Walk around the house with these in mind. The south and west walls usually tell you first."
            className="mb-10"
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(service.signs ?? []).map((s, i) => (
              <li key={s.title} className="flex gap-4 rounded-[16px] border border-sand-200 bg-sand-50 p-6">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy-900 font-heading text-sm font-extrabold text-amber-500">{i + 1}</span>
                <span>
                  <span className="block font-heading text-[1.05rem] font-bold leading-snug text-navy-900">{s.title}</span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-ink-500">{s.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 6. COATING SYSTEMS */}
      <section className="section-y bg-sand-50" aria-labelledby="coatings-heading">
        <Container>
          <BandHead id="coatings-heading" eyebrow="Coating systems" title={service.optionsTitle ?? "Acrylic, Elastomeric or Enamel?"} intro={service.optionsIntro} className="mb-10" />
          <ul className="grid gap-5 md:grid-cols-3">
            {(service.options ?? []).map((o) => (
              <li key={o.title} className="flex flex-col rounded-[16px] border border-sand-200 bg-white p-6 shadow-card md:p-7">
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

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From First Visit to Final Touch-Up"}
        intro="Prep is most of the job. Every step is its own line on the estimate, so you can see exactly what you are paying for."
        steps={service.process}
      />

      {/* 7. PRICES */}
      <section className="section-y bg-sand-50" aria-labelledby="scopes-heading">
        <Container>
          <BandHead id="scopes-heading"
            eyebrow="Which job is yours?"
            title="Typical Painting Projects and What They Cost"
            intro="Typical 2026 Charlotte and Sarasota County ranges, with prep and primer included. You get a written, itemized estimate after the free visit."
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
          <BandHead id="rules-heading" eyebrow="Southwest Florida" title="HOA Colors, Rainy Season and Older Homes" className="mb-10" />
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
          <BandHead id="learn-heading" eyebrow="Before you pick colors" title="Straight Answers From Our Guides" className="mb-8" />
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
      <FaqBand eyebrow="FAQ" title="Painting Questions" items={service.faqs} />
      <ServiceAreasBand />
      <CtaBand
        title="Get a Painting Estimate With the Prep Spelled Out"
        text="We test for chalking and moisture, look for cracks, rot and mildew, and leave you a written estimate that names the primer and paint system."
      />
    </>
  );
}
