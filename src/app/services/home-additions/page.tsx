import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import BeforeAfter from "@/components/BeforeAfter";
import { IllustrativeBadge, RealJobBadge } from "@/components/ProjectMedia";
import BandHead from "@/components/bands/BandHead";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PriceCards from "@/components/service-pages/PriceCards";
import AdditionSizeCost from "@/components/service-pages/AdditionSizeCost";
import { faqSchema, serviceSchema } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { additionsPage as C } from "@/content/service-pages/home-additions";

const SLUG = "home-additions";
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

export default function HomeAdditionsPage() {
  const ronald = testimonials.find((t) => t.name === C.lanaiJob.quoteName);
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
                  Book a Free Site Visit
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
                      <span className="block font-heading text-2xl font-extrabold text-amber-500 sm:text-3xl">{p.value}</span>
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
                  These show the stages of an addition. The lanai-to-block before-and-after further down is one of our own jobs.
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
            title="Four Ways to Add Room Without Moving"
            intro="Plans, engineering, permits, foundation, shell, systems and finishes, all under one contract and one Florida license, CRC1327831."
          />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {C.products.map((p) => (
              <li key={p.title} className="group flex flex-col overflow-hidden rounded-[16px] border border-sand-200 bg-white shadow-card sm:flex-row">
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden bg-navy-50 sm:aspect-auto sm:w-[44%]">
                  <Image src={p.photo.src} alt={p.photo.alt} fill sizes="(min-width: 768px) 260px, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  {p.real ? <RealJobBadge className="absolute bottom-3 left-3" /> : <IllustrativeBadge className="absolute bottom-3 left-3" />}
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

      {/* 3. WHERE ADDITIONS FAIL — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="seams-heading">
        <Container>
          <BandHead
            dark
            eyebrow="Why additions fail"
            title="Additions Go Wrong at the Seams"
            intro="The new room itself is rarely the problem. Where it meets the old house is. These three are written into our scope before we break ground."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {C.seams.map((w, i) => (
              <li key={w.title} className="rounded-[16px] bg-white/[.06] p-7 ring-1 ring-white/10">
                <span className="font-heading text-4xl font-extrabold text-amber-500/90">0{i + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold !text-white">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{w.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 4. LOT CHECKS */}
      <section className="section-y bg-white" aria-labelledby="lot-heading">
        <Container>
          <BandHead
            eyebrow="Before any design fees"
            title="Your Lot Decides What You Can Build"
            intro="We check these five at the free site visit, so you never pay for plans on a room the lot cannot hold."
            className="mb-10"
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {C.lotChecks.map((c, i) => (
              <li key={c.title} className="flex flex-col rounded-[16px] border border-sand-200 bg-sand-50 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-navy-900 font-heading text-sm font-extrabold text-amber-500">{i + 1}</span>
                <h3 className="mt-4 font-heading text-lg font-bold leading-snug text-navy-900">{c.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">{c.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5. SIZE x COST */}
      <section className="section-y bg-sand-100" aria-labelledby="size-heading">
        <Container>
          <BandHead
            eyebrow="Ballpark it"
            title="What Would a Room That Size Cost?"
            intro="Move the slider to see the typical 2026 range for a finished room addition in Charlotte, Sarasota and Lee counties."
            className="mb-10"
          />
          <AdditionSizeCost {...C.calculator} />
        </Container>
      </section>

      {/* 6. REAL JOB */}
      <section className="section-y bg-white" aria-labelledby="job-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <BeforeAfter before={C.lanaiJob.before} after={C.lanaiJob.after} label="Aluminum lanai wall replaced with block and storm-rated glass" />
              <p className="mt-3 text-sm text-ink-500">Our job in Manatee County, same wall before and after. Drag the handle to compare.</p>
            </div>
            <div>
              <BandHead eyebrow="Our job · Manatee County" title="An Aluminum Lanai Wall, Rebuilt in Block" />
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Turning an aluminum lanai wall into block is structural work: drawings, a permit and inspections. Here, county review took
                about three months. The paperwork is often the longest part of a lanai conversion or Florida room, and we put that time in
                your schedule up front.
              </p>
              {ronald ? (
                <figure className="mt-6 rounded-[16px] border border-sand-200 bg-sand-50 p-6">
                  <blockquote className="text-[15px] leading-relaxed text-ink-900">
                    &ldquo;{ronald.text.length > 330 ? `${ronald.text.slice(0, ronald.text.lastIndexOf(" ", 330))}…` : ronald.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-navy-900">
                    {ronald.name} · 5-star review on {ronald.source}
                  </figcaption>
                </figure>
              ) : null}
              <Link href={`/projects/${C.lanaiJob.projectSlug}`} className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy-900 hover:text-amber-600">
                See the full project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From Site Visit to Final Inspection"}
        intro="Plans and permits usually take 6 to 12 weeks before construction starts. We give you that schedule in writing at the start, not halfway through."
        steps={service.process}
      />

      {/* 7. PRICES */}
      <section className="section-y bg-sand-50" aria-labelledby="scopes-heading">
        <Container>
          <BandHead
            eyebrow="Which addition is yours?"
            title="Typical Additions and What They Cost"
            intro="Typical 2026 Southwest Florida ranges. Plans, engineering, permits and impact openings are included in our estimates, not added later."
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

      {/* 8. FLORIDA RULES */}
      <section className="section-y bg-white" aria-labelledby="rules-heading">
        <Container>
          <BandHead eyebrow="Florida rules" title="Permits, Wind Code, Flood Zones and HOAs" className="mb-10" />
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
          <BandHead eyebrow="Before you build" title="Straight Answers From Our Guides" className="mb-8" />
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
      <FaqBand eyebrow="FAQ" title="Home Addition Questions" items={service.faqs} />
      <ServiceAreasBand />
      <CtaBand
        title="Find Out What Your Lot Will Allow"
        text="We walk the property, check setbacks, flood zone, septic and HOA rules, and tell you honestly what you can build. Free, no pressure."
      />
    </>
  );
}
