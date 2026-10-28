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
import { IllustrativeBadge } from "@/components/ProjectMedia";
import BandHead from "@/components/bands/BandHead";
import ProcessBand from "@/components/bands/ProcessBand";
import PromisesBand from "@/components/bands/PromisesBand";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import ServiceAreasBand from "@/components/bands/ServiceAreasBand";
import PriceCards from "@/components/service-pages/PriceCards";
import SubstantialDamageCheck from "@/components/service-pages/SubstantialDamageCheck";
import { faqSchema, serviceSchema } from "@/components/services/schema";
import { getService } from "@/content/services";
import { posts } from "@/content/blog";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { stormPage as C } from "@/content/service-pages/storm-damage-rebuild";

const SLUG = "storm-damage-rebuild";
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

export default function StormDamageRebuildPage() {
  const ronald = testimonials.find((t) => t.name === C.hardening.quoteName);
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
              <p className="mt-4 max-w-xl text-sm text-navy-100/80">
                Water still standing or drywall still wet? Call a water mitigation company first. Wet materials need attention within 24 to 48 hours.
              </p>
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
                  These show the stages of a rebuild. The before-and-after further down is one of our own jobs.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. WHAT WE REBUILD */}
      <section className="section-y bg-sand-50" aria-labelledby="products-heading">
        <Container>
          <BandHead id="products-heading"
            eyebrow="What we rebuild"
            title="From One Wet Room to a Whole-House Hurricane Rebuild"
            intro="Charlotte County went through Ian in 2022 and Milton in 2024, plus the everyday leaks in between. These are the rebuilds we are called for most."
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

      {/* 3. MITIGATION FIRST — dark band */}
      <section className="section-y bg-navy-900 text-white" aria-labelledby="order-heading">
        <Container>
          <BandHead id="order-heading" dark eyebrow="What to do first" title={service.optionsTitle ?? "Mitigation First, Rebuild Second"} intro={service.optionsIntro} />
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {(service.options ?? []).map((o, i) => (
              <li key={o.title} className="flex flex-col rounded-[16px] glass p-7 ring-1 ring-white/10">
                <span className="font-heading text-4xl font-extrabold text-amber-500/90">0{i + 1}</span>
                <h3 className="mt-4 font-heading text-xl font-bold !text-white">{o.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-100/85">{o.text}</p>
                {o.bullets?.length ? (
                  <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-[14px] leading-snug text-navy-100">
                        <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 4. HIDDEN DAMAGE SIGNS */}
      <section className="section-y bg-white" aria-labelledby="signs-heading">
        <Container>
          <BandHead id="signs-heading"
            eyebrow="Know the signs"
            title={service.signsTitle ?? "Signs of Hidden Water Damage"}
            intro="Water travels inside walls and under floors long after the storm. If you see any of these, the drywall or framing behind them has probably taken on water."
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

      {/* 5. 50% RULE CHECK */}
      <section className="section-y bg-sand-100" aria-labelledby="fifty-heading">
        <Container>
          <BandHead id="fifty-heading" eyebrow="Flood zones" title="Check the 50% Substantial-Damage Rule" intro={C.calculator.intro} className="mb-10" />
          <SubstantialDamageCheck note={C.calculator.note} />
        </Container>
      </section>

      {/* 6. REBUILD STRONGER — real job */}
      <section className="section-y bg-white" aria-labelledby="harden-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <BeforeAfter before={C.hardening.before} after={C.hardening.after} label="Aluminum lanai wall replaced with block and storm-rated glass" />
              <p className="mt-3 text-sm text-ink-500">Our job in Manatee County, same wall before and after. Drag the handle to compare.</p>
              <p className="mt-1 text-sm font-semibold text-navy-900">
                {(C.hardening as { note?: string }).note ?? "Not storm damage: an upgrade example of the same idea."}
              </p>
            </div>
            <div>
              <BandHead id="harden-heading" eyebrow="Rebuild it stronger" title="While the Walls Are Open, Make the Next Storm Do Less" />
              <ul className="mt-6 space-y-3 text-[15px] text-ink-900">
                {C.hardening.points.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              {ronald ? (
                <figure className="mt-6 rounded-[16px] border border-sand-200 bg-sand-50 p-6">
                  <blockquote className="text-[15px] leading-relaxed text-ink-900">
                    &ldquo;{ronald.text.length > 260 ? `${ronald.text.slice(0, ronald.text.lastIndexOf(" ", 260))}…` : ronald.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-navy-900">
                    {ronald.name} · 5-star review on {ronald.source}
                  </figcaption>
                </figure>
              ) : null}
              <Link href={`/projects/${C.hardening.projectSlug}`} className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold text-navy-900 hover:text-amber-600">
                See the full project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ProcessBand
        eyebrow="How it works"
        title={service.processTitle ?? "From Damage Assessment to Finaled Permits"}
        intro="One of the owners walks the damage with you, meets your adjuster if you want us there, and runs the rebuild to the final inspection."
        steps={service.process}
      />

      {/* 7. PRICES */}
      <section className="section-y bg-sand-50" aria-labelledby="scopes-heading">
        <Container>
          <BandHead id="scopes-heading"
            eyebrow="Which rebuild is yours?"
            title="Typical Storm and Water Damage Rebuilds and What They Cost"
            intro="Typical 2026 Southwest Florida ranges. You get a written, itemized room-by-room estimate after the free assessment."
            className="mb-10"
          />
          <PriceCards scopes={service.scopes} featured={-1} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="rounded-[16px] border border-sand-200 bg-white p-6 shadow-card md:p-7">
              <h3 className="font-heading text-lg font-extrabold text-navy-900">Your claim and our price are separate documents</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                We price the work to do it right under the Florida Building Code, then itemize it so your adjuster can compare it with
                theirs line by line. Where the two differ, we document why with photos, measurements and code references, so you or your
                public adjuster can request a supplement.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Florida law does not let contractors negotiate your claim or interpret your policy, and we will never ask you to sign over
                your benefits. Financing on approval covers the part insurance does not.
              </p>
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
        </Container>
      </section>

      {/* 8. FLORIDA RULES */}
      <section className="section-y bg-white" aria-labelledby="rules-heading">
        <Container>
          <BandHead id="rules-heading" eyebrow="Florida rules" title="Three Rules That Shape Every Storm Rebuild Here" className="mb-10" />
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
          <BandHead id="learn-heading" eyebrow="Before you rebuild" title="Straight Answers From Our Guides" className="mb-8" />
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
      <FaqBand eyebrow="FAQ" title="Storm and Water Damage Questions" items={service.faqs} />
      <ServiceAreasBand />
      <CtaBand
        title="Need a Rebuild Estimate Your Adjuster Can Follow?"
        text="We document the damage room by room, find where the water came in, and give you an itemized written estimate you can share with your insurer."
      />
    </>
  );
}
