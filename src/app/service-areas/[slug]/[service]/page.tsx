import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import BandHead from "@/components/bands/BandHead";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import PriceCards from "@/components/service-pages/PriceCards";
import WallLayers from "@/components/service-pages/WallLayers";
import KitchenTimeline from "@/components/service-pages/KitchenTimeline";
import InstallSteps from "@/components/service-pages/InstallSteps";
import { areas } from "@/content/areas";
import { cityServices, getCityService } from "@/content/city-services";
import { projects } from "@/content/projects";
import { getService } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";
import { bathroomPage } from "@/content/service-pages/bathroom-remodeling";
import { kitchenPage } from "@/content/service-pages/kitchen-remodeling";
import { impactPage } from "@/content/service-pages/impact-windows-doors";
import type { Photo, Project } from "@/content/types";
import { absoluteUrl, faqSchema, organizationRef } from "@/lib/seo";

type Params = { slug: string; service: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cityServices.map((c) => ({ slug: c.area, service: c.service }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug, service } = await params;
  const page = getCityService(slug, service);
  if (!page) return {};
  const url = `/service-areas/${slug}/${service}`;
  return {
    title: { absolute: page.seoTitle },
    description: page.seoDescription,
    alternates: { canonical: url },
    openGraph: { title: page.seoTitle, description: page.seoDescription, url, type: "website" },
  };
}

/** Hero photos per service; impact photos are real jobs, the others are stock. */
const HERO: Record<string, { photos: Photo[]; real: boolean }> = {
  "bathroom-remodeling": { photos: bathroomPage.hero.photos, real: false },
  "kitchen-remodeling": { photos: kitchenPage.hero.photos, real: false },
  "impact-windows-doors": { photos: impactPage.hero.photos, real: true },
};

export default async function CityServicePage({ params }: { params: Promise<Params> }) {
  const { slug, service: serviceSlug } = await params;
  const page = getCityService(slug, serviceSlug);
  const area = areas.find((a) => a.slug === slug);
  const service = getService(serviceSlug);
  if (!page || !area || !service) notFound();

  const hero = HERO[serviceSlug];
  const url = absoluteUrl(`/service-areas/${slug}/${serviceSlug}`);

  const realJobs = projects.filter((p: Project) => !p.sample);
  const rank = (p: Project) => {
    const i = page.jobCities.indexOf(p.city);
    return i === -1 ? 99 : i;
  };
  const nearby = realJobs.filter((p) => rank(p) < 99).sort((a, b) => rank(a) - rank(b));
  const jobs = (nearby.length >= 3 ? nearby : [...nearby, ...realJobs.filter((p) => rank(p) === 99)]).slice(0, 3);

  const quote = page.reviewNames.map((n) => testimonials.find((t) => t.name === n)).find(Boolean);
  const siblings = cityServices.filter((c) => c.area === slug && c.service !== serviceSlug);
  const otherCities = cityServices.filter((c) => c.service === serviceSlug && c.area !== slug);

  const featured =
    serviceSlug === "bathroom-remodeling"
      ? service.scopes.findIndex((s) => s.title.startsWith("Tub-to-Shower"))
      : serviceSlug === "kitchen-remodeling"
        ? service.scopes.findIndex((s) => s.title.startsWith("Full Replacement"))
        : -1;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.h1,
    serviceType: service.title,
    url,
    description: page.seoDescription,
    provider: organizationRef(),
    image: hero.photos[0].src.startsWith("http") ? hero.photos[0].src : absoluteUrl(hero.photos[0].src),
    areaServed: {
      "@type": "City",
      name: `${area.name}, FL`,
      containedInPlace: { "@type": "AdministrativeArea", name: `${area.county}, FL` },
    },
  };

  return (
    <>
      <Schema data={[schema, faqSchema(page.faqs)]} />

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
        <Container className="relative py-10 md:py-16 lg:py-20">
          <div className="text-sm [&_a]:text-white/80 [&_a:hover]:text-amber-500 [&_li]:text-navy-100 [&_span]:!text-navy-100 [&_svg]:text-navy-100/60">
            <Breadcrumbs
              items={[
                { label: "Service Areas", href: "/service-areas" },
                { label: area.name, href: `/service-areas/${area.slug}` },
                { label: service.title },
              ]}
            />
          </div>
          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-dark">{page.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[56px]">{page.h1}</h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 md:text-xl">{page.lead}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={`/free-estimate?service=${service.slug}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full btn-gold px-7 font-heading text-[15px] font-bold"
                >
                  Free Estimate in {area.name}
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-white/70 px-7 font-heading text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  Call {site.phone}
                </a>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-white/15 pt-6">
                {[
                  { value: area.driveTime.match(/\d+\s*min/)?.[0] ?? "Local", label: "from our Port Charlotte base" },
                  { value: "Fixed", label: "written price before work" },
                  { value: "5.0", label: "Google rating" },
                ].map((p) => (
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
                { p: hero.photos[0], cls: "col-span-4 row-span-4" },
                { p: hero.photos[1], cls: "col-span-2 row-span-3" },
                { p: hero.photos[2], cls: "col-span-2 row-span-3" },
              ].map(({ p, cls }, i) => (
                <figure key={p.id} className={`relative overflow-hidden rounded-[16px] bg-navy-900 ${cls}`}>
                  <Image src={p.src} alt={p.alt} fill priority={i === 0} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                </figure>
              ))}
              <div className="col-span-4 row-span-2 flex flex-col justify-center rounded-[16px] bg-white/[.06] p-4 ring-1 ring-white/10 sm:p-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">
                  {hero.real ? "Real jobs, real photos" : "Illustrative photos"}
                </p>
                <p className="mt-2 text-sm leading-snug text-navy-100 sm:text-[15px]">
                  {hero.real
                    ? "Taken by our crew on Southwest Florida window and door jobs."
                    : `These show the finishes we build. Our own ${area.name}-area jobs are further down the page.`}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. LOCAL */}
      <section className="section-y bg-sand-50" aria-labelledby="local-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-14">
            <div>
              <BandHead eyebrow={`${service.title} · ${area.name}`} title={page.localTitle} />
              <div className="mt-6 space-y-5 text-[17px] leading-[1.65] text-ink-900">
                {page.local.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <aside className="space-y-4 lg:sticky lg:top-24">
              {page.notes.map((n, i) => (
                <div key={n.title} className="rounded-[16px] border border-sand-200 bg-white p-6 shadow-card">
                  <span className="font-heading text-2xl font-extrabold text-amber-500">0{i + 1}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy-900">{n.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{n.text}</p>
                </div>
              ))}
            </aside>
          </div>
        </Container>
      </section>

      {/* 3. SERVICE-SPECIFIC INTERACTIVE */}
      <section className="section-y bg-sand-100" aria-labelledby="how-heading">
        <Container>
          {serviceSlug === "bathroom-remodeling" ? (
            <>
              <BandHead eyebrow="How we build a shower" title={service.optionsTitle ?? "What Goes Behind the Tile"} intro={bathroomPage.layersIntro} className="mb-10" />
              <WallLayers layers={service.options ?? []} />
            </>
          ) : serviceSlug === "kitchen-remodeling" ? (
            <>
              <BandHead eyebrow="Your schedule" title="How Long You Will Be Without a Kitchen" intro={kitchenPage.timelineIntro} className="mb-10" />
              <KitchenTimeline scopes={kitchenPage.timeline} />
            </>
          ) : (
            <>
              <BandHead
                eyebrow="How we install"
                title="What Happens Behind the Glass"
                intro="A window is only as good as the opening it sits in. These are the steps that keep water out and keep the unit in the wall, shown on our own jobs."
                className="mb-10"
              />
              <InstallSteps steps={impactPage.install} />
            </>
          )}
        </Container>
      </section>

      {/* 4. PRICES */}
      <section className="section-y bg-white" aria-labelledby="scopes-heading">
        <Container>
          <BandHead
            eyebrow={`${service.title} prices`}
            title={`Typical ${service.title} Prices in ${area.name}`}
            intro={`Typical 2026 Southwest Florida ranges, which is what ${area.name} projects follow too. Your written estimate lists every line before work starts.`}
            className="mb-10"
          />
          <PriceCards scopes={service.scopes} featured={featured} />
          <p className="mt-8 text-sm text-ink-500">
            Want the full breakdown?{" "}
            <Link href={`/services/${service.slug}`} className="font-semibold text-sea-600 underline underline-offset-2">
              See our {service.title.toLowerCase()} page
            </Link>{" "}
            for options, process and every question we get asked.
          </p>
        </Container>
      </section>

      {/* 5. REAL JOBS + QUOTE */}
      <section className="section-y bg-sand-50" aria-labelledby="jobs-heading">
        <Container>
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <BandHead
              eyebrow="Our own jobs"
              title={`Recent Work In and Near ${area.name}`}
              intro="Photos from our crew. Each card shows the city where the job actually is."
            />
            <Link href="/projects" className="shrink-0 font-heading text-sm font-bold text-navy-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-600">
              All projects
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((p) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}`} className="group block overflow-hidden rounded-[16px] bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative aspect-[4/3] overflow-hidden bg-navy-50">
                    <Image src={p.after.src} alt={p.after.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-navy-950/85 px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-white">
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
          {quote ? (
            <figure className="mt-10 rounded-[18px] bg-navy-950 p-7 text-white md:p-10">
              <p className="font-heading text-xs font-bold uppercase tracking-[.16em] text-amber-500">From a {quote.city ?? area.name} homeowner</p>
              <blockquote className="mt-3 font-heading text-lg font-bold leading-snug !text-white md:text-xl">
                &ldquo;{quote.text.length > 320 ? `${quote.text.slice(0, quote.text.lastIndexOf(" ", 320))}…` : quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm text-navy-100/80">
                {quote.name} · 5-star review on {quote.source}
                {quote.service ? ` · ${quote.service}` : ""}
              </figcaption>
            </figure>
          ) : null}
        </Container>
      </section>

      <ReviewsBand service={service.slug} limit={3} />

      <FinancingBand />

      <FaqBand eyebrow="Local FAQ" title={`${service.title} Questions From ${area.name} Homeowners`} items={page.faqs} />

      {/* 6. MORE */}
      <section className="section-y bg-sand-50" aria-labelledby="more-heading">
        <Container>
          <BandHead eyebrow="Keep exploring" title={`More From Us in ${area.name}`} className="mb-8" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link href={`/service-areas/${area.slug}`} className="group flex h-full items-center justify-between gap-3 rounded-[14px] border border-sand-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-card">
                <span>
                  <span className="block font-heading text-[15px] font-bold text-navy-900 group-hover:text-amber-600">All services in {area.name}</span>
                  <span className="mt-0.5 block text-[13px] text-ink-500">Permits, neighborhoods and local jobs</span>
                </span>
                <span aria-hidden="true" className="text-amber-600">→</span>
              </Link>
            </li>
            {siblings.map((c) => {
              const s = getService(c.service);
              return s ? (
                <li key={c.service}>
                  <Link href={`/service-areas/${c.area}/${c.service}`} className="group flex h-full items-center justify-between gap-3 rounded-[14px] border border-sand-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-card">
                    <span>
                      <span className="block font-heading text-[15px] font-bold text-navy-900 group-hover:text-amber-600">
                        {s.title} in {area.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-ink-500">Local notes, prices and FAQs</span>
                    </span>
                    <span aria-hidden="true" className="text-amber-600">→</span>
                  </Link>
                </li>
              ) : null;
            })}
            {otherCities.map((c) => {
              const a = areas.find((x) => x.slug === c.area);
              return a ? (
                <li key={c.area}>
                  <Link href={`/service-areas/${c.area}/${c.service}`} className="group flex h-full items-center justify-between gap-3 rounded-[14px] border border-sand-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-card">
                    <span>
                      <span className="block font-heading text-[15px] font-bold text-navy-900 group-hover:text-amber-600">
                        {service.title} in {a.name}
                      </span>
                      <span className="mt-0.5 block text-[13px] text-ink-500">{a.driveTime}</span>
                    </span>
                    <span aria-hidden="true" className="text-amber-600">→</span>
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </Container>
      </section>

      <CtaBand
        title={`Ready to Price Your ${area.name} ${service.navLabel} Project?`}
        text="Free in-home estimate, written and itemized, with the permit filed with the right office for your address. No pressure."
      />
    </>
  );
}
