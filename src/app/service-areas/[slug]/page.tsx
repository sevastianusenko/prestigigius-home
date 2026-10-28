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
import AreaMap from "@/components/areas/AreaMap";
import { clamp } from "@/components/company/utils";
import { areas } from "@/content/areas";
import { areaExtras } from "@/content/area-pages";
import { getCityService } from "@/content/city-services";
import { projects } from "@/content/projects";
import { getService } from "@/content/services";
import { site } from "@/content/site";
import type { Project, Service } from "@/content/types";
import { absoluteUrl, faqSchema, organizationRef } from "@/lib/seo";
import { photo } from "@/lib/photos";

type Params = { slug: string };

function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}

export function generateStaticParams(): Params[] {
  return areas.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return { title: "Service area not found" };
  const t = clamp(area.seoTitle || `Home Remodeling in ${area.name}, FL`, 60);
  const description = clamp(area.seoDescription, 155);
  const url = `/service-areas/${area.slug}`;
  return {
    title: { absolute: t },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: t,
      description,
      url,
      type: "website",
      images: [{ url: `${url}/opengraph-image`, width: 1200, height: 630, alt: `Home remodeling in ${area.name}, FL` }],
    },
  };
}

/** "About 20 min from Port Charlotte" → { value: "20 min", label: "from our Port Charlotte base" } */
function driveProof(driveTime: string) {
  const m = driveTime.match(/(\d+\s*min)/);
  return m ? { value: m[1], label: "from our Port Charlotte base" } : { value: "Home", label: "our office and crew are here" };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();
  const extra = areaExtras[area.slug];

  const popular = area.popularServices.map((s) => getService(s)).filter((s): s is Service => Boolean(s));

  // Real jobs only, ordered by how close the job's city is to this area.
  const realJobs = projects.filter((p: Project) => !p.sample);
  const rank = (p: Project) => {
    const i = extra?.jobCities.indexOf(p.city) ?? -1;
    return i === -1 ? 99 : i;
  };
  const nearby = realJobs.filter((p) => rank(p) < 99).sort((a, b) => rank(a) - rank(b));
  // Top up thin areas with other real SWFL jobs; each card still shows its true city.
  const localJobs = (nearby.length >= 3 ? nearby : [...nearby, ...realJobs.filter((p) => rank(p) === 99)]).slice(0, nearby.length >= 3 ? 6 : 3);
  const exactJobs = localJobs.filter((p) => p.city.toLowerCase() === area.name.toLowerCase());

  const otherAreas = areas.filter((a) => a.slug !== area.slug);
  const url = absoluteUrl(`/service-areas/${area.slug}`);
  const drive = driveProof(area.driveTime);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Home Remodeling in ${area.name}, FL`,
    serviceType: "Home remodeling and renovation",
    url,
    description: area.seoDescription,
    provider: organizationRef(),
    areaServed: {
      "@type": "City",
      name: `${area.name}, FL`,
      containedInPlace: { "@type": "AdministrativeArea", name: `${area.county}, FL` },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Remodeling services in ${area.name}`,
      itemListElement: popular.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
      })),
    },
  };

  const facts = [
    { label: "County", value: area.county },
    { label: "Permits", value: extra?.permits ?? "Filed by us with the right office" },
    { label: "Homes here", value: extra?.built ?? "" },
    { label: "Drive time", value: area.driveTime },
  ].filter((f) => f.value);

  return (
    <>
      <Schema data={area.faqs.length ? [serviceSchema, faqSchema(area.faqs)] : serviceSchema} />

      {/* 1. HERO — map */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
        <Container className="relative py-10 md:py-16 lg:py-20">
          <div className="text-sm [&_a]:text-white/80 [&_a:hover]:text-amber-500 [&_li]:text-navy-100 [&_span]:!text-navy-100 [&_svg]:text-navy-100/60">
            <Breadcrumbs items={[{ label: "Service Areas", href: "/service-areas" }, { label: area.name }]} />
          </div>
          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-dark">
                {area.county} · {area.driveTime}
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[56px]">
                Home Remodeling in {area.name}, FL
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 md:text-xl">{extra?.lead ?? area.intro[0]}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/free-estimate"
                  className="inline-flex min-h-12 items-center justify-center rounded-full btn-gold px-7 font-heading text-[15px] font-bold"
                >
                  Get a Free Estimate in {area.name}
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
                  drive,
                  { value: String(area.zip.length), label: `ZIP code${area.zip.length === 1 ? "" : "s"} served in ${area.name}` },
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
            <div className="mx-auto w-full max-w-[420px] rounded-[18px] bg-navy-900 p-4 ring-1 ring-white/10 sm:p-5">
              <AreaMap current={area.slug} />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      {/* 2. LOCAL KNOWLEDGE */}
      <section className="section-y bg-sand-50" aria-labelledby="local-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-14">
            <div>
              <BandHead id="local-heading" eyebrow={`Remodeling in ${area.name}`} title={`What to Know Before You Remodel in ${area.name}`} />
              <div className="mt-6 space-y-5 text-[17px] leading-[1.65] text-ink-900">
                {area.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <aside className="rounded-[18px] border border-sand-200 bg-white p-6 shadow-card md:p-7 lg:sticky lg:top-24">
              <h2 className="font-heading text-lg font-extrabold text-navy-900">{area.name} at a glance</h2>
              <dl className="mt-5 space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="border-b border-sand-200 pb-4 last:border-0 last:pb-0">
                    <dt className="text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">{f.label}</dt>
                    <dd className="mt-1 text-[15px] font-semibold leading-snug text-navy-900">{f.value}</dd>
                  </div>
                ))}
              </dl>
              {extra?.neighborhoods.length ? (
                <>
                  <p className="mt-6 text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">Neighborhoods we work in</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {extra.neighborhoods.map((n) => (
                      <li key={n} className="rounded-full bg-sand-100 px-3 py-1 text-[13px] font-medium text-navy-900">
                        {n}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[.14em] text-ink-500">ZIP codes</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {area.zip.map((z) => (
                  <li key={z} className="rounded-full border border-sand-200 px-3 py-1 text-[13px] font-medium text-ink-900">
                    {z}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </Container>
      </section>

      {/* 3. POPULAR SERVICES */}
      <section className="section-y bg-white" aria-labelledby="services-heading">
        <Container>
          <BandHead id="services-heading"
            eyebrow="Popular services"
            title={`What ${area.name} Homeowners Hire Us For`}
            intro={`Every service we offer is available in ${area.name}. These are the ones we get asked about most here.`}
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((s) => {
              const ph = photo(s.heroPhoto);
              return (
                <li key={s.slug}>
                  <Link href={getCityService(area.slug, s.slug) ? `/service-areas/${area.slug}/${s.slug}` : `/services/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[16px] border border-sand-200 bg-white shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden bg-navy-50">
                      <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-heading text-lg font-extrabold leading-snug text-navy-900 group-hover:text-amber-600">
                        {s.title} in {area.name}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.blurb}</p>
                      <span className="mt-auto pt-4 font-heading text-sm font-bold text-navy-900">
                        See {s.navLabel.toLowerCase()} <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 4. REAL JOBS */}
      {localJobs.length ? (
        <section className="section-y bg-sand-50" aria-labelledby="jobs-heading">
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <BandHead id="jobs-heading"
                eyebrow={exactJobs.length ? `Our jobs in ${area.name}` : "Our jobs nearby"}
                title={exactJobs.length ? `Real Projects in and Around ${area.name}` : `Real Projects Near ${area.name}`}
                intro="Photos from our own crew. Each card shows the city where the job actually is."
              />
              <Link href="/projects" className="shrink-0 font-heading text-sm font-bold text-navy-900 underline decoration-amber-500 decoration-2 underline-offset-4 hover:text-amber-600">
                All projects
              </Link>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {localJobs.map((p) => (
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
      ) : null}

      <ReviewsBand />

      <FinancingBand />

      {area.faqs.length > 0 && <FaqBand eyebrow="Local FAQ" title={`Questions ${area.name} Homeowners Ask Us`} items={area.faqs} />}

      {/* 5. NEARBY */}
      <section className="section-y bg-sand-50" aria-labelledby="nearby-heading">
        <Container>
          <BandHead id="nearby-heading" eyebrow="Nearby" title={`Also Serving the Area Around ${area.name}`} className="mb-8" />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otherAreas.map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="group flex h-full items-center justify-between gap-3 rounded-[14px] border border-sand-200 bg-white p-4 transition hover:border-amber-500 hover:shadow-card">
                  <span>
                    <span className="block font-heading text-[15px] font-bold text-navy-900 group-hover:text-amber-600">{a.name}</span>
                    <span className="mt-0.5 block text-[13px] text-ink-500">{a.driveTime}</span>
                  </span>
                  <span aria-hidden="true" className="text-amber-600">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] text-ink-500">
            Not sure we reach your street?{" "}
            <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
              Call {site.phone}
            </a>{" "}
            and we will tell you in under a minute.
          </p>
        </Container>
      </section>

      <CtaBand
        title={`Planning a Project in ${area.name}?`}
        text="Free in-home estimate, written and itemized. Licensed, insured, and the permit filed with the right office for your address."
      />
    </>
  );
}
