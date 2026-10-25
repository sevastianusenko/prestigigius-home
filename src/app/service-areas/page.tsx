import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Schema from "@/components/Schema";
import ReviewsBand from "@/components/bands/ReviewsBand";
import FinancingBand from "@/components/bands/FinancingBand";
import FaqBand from "@/components/bands/FaqBand";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import AreaMap from "@/components/areas/AreaMap";
import MapEmbed from "@/components/company/MapEmbed";
import { ArrowIcon, CarIcon, PinIcon } from "@/components/company/icons";
import { AREA_MAP_EMBED_URL } from "@/components/company/utils";
import { areas } from "@/content/areas";
import { generalFaqs } from "@/content/faqs";
import { getService } from "@/content/services";
import { site } from "@/content/site";
import { absoluteUrl, faqSchema } from "@/lib/seo";

import { OG_DEFAULT } from "@/components/og";
const title = "Service Areas: 4 Counties, 11 Cities | Prestigious";
const description =
  "Remodeling, impact windows, lanais and restoration in 11 cities from Sarasota to Bonita Springs, across Charlotte, Sarasota, Lee and Manatee counties.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/service-areas" },
  openGraph: {
    images: [OG_DEFAULT], title, description, url: "/service-areas", type: "website" },
};

const crumbs = [{ label: "Service Areas" }];

/** Cities whose address can fall on either side of a county line. */
const COUNTY_NOTES: Record<string, string> = {
  "Sarasota County": "Englewood straddles the Sarasota and Charlotte county line; we confirm your parcel first.",
  "Manatee County": "Northern Lakewood Ranch villages and Parrish. Southern Lakewood Ranch is permitted by Sarasota County.",
};

/** service area, permits, HOA, hurricane season */
const AREA_FAQ_QUESTIONS = [
  "What areas do you serve?",
  "Do you pull the permits?",
  "Do you handle HOA and condo approvals?",
  "Can you work during hurricane season?",
];

export default function ServiceAreasPage() {
  const byCounty = site.counties.map((county) => ({
    county,
    cities: areas.filter((a) => a.county === county),
  }));
  const otherAreas = areas.filter((a) => !(site.counties as readonly string[]).includes(a.county));
  const faqs = generalFaqs.filter((f) => AREA_FAQ_QUESTIONS.includes(f.q));

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Prestigious Home Improvements service areas",
    itemListElement: areas.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${a.name}, FL`,
      url: absoluteUrl(`/service-areas/${a.slug}`),
    })),
  };

  return (
    <>
      <Schema data={faqs.length ? [listSchema, faqSchema(faqs)] : listSchema} />

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-3xl" />
        <Container className="relative py-10 md:py-16 lg:py-20">
          <div className="text-sm [&_a]:text-white/80 [&_a:hover]:text-amber-500 [&_li]:text-navy-100 [&_span]:!text-navy-100 [&_svg]:text-navy-100/60">
            <Breadcrumbs items={crumbs} />
          </div>
          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="eyebrow eyebrow-dark">Service areas · Southwest Florida</p>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.06] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[56px]">
                Serving Charlotte, Sarasota, Lee and Manatee Counties
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-navy-100 md:text-xl">
                Based in {site.address.city}, we remodel and restore homes from Englewood&apos;s beach cottages to Cape Coral&apos;s canal
                homes, with finished jobs from Parrish down to Bonita Springs. Same crew, same written warranty, whichever side of the
                county line you live on.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/free-estimate"
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
              <p className="mt-6 text-sm text-navy-100/70">Tap a city on the map to see local permit notes, services and nearby jobs.</p>
            </div>
            <div className="mx-auto w-full max-w-[420px] rounded-[18px] bg-navy-900 p-4 ring-1 ring-white/10 sm:p-5">
              <AreaMap />
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <Section
        tone="light"
        eyebrow={`${areas.length} cities`}
        title="Is Your City on Our List?"
        intro="Pick your city to see the services homeowners there ask for most, local permit notes and nearby projects."
      >
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => {
            const popular = a.popularServices
              .map((s) => getService(s))
              .filter((s): s is NonNullable<typeof s> => Boolean(s))
              .slice(0, 4);
            return (
              <li key={a.slug}>
                <Link
                  href={`/service-areas/${a.slug}`}
                  className="group flex h-full flex-col rounded-[14px] border border-sand-200 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{a.name}, FL</h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-500">
                        <PinIcon className="h-4 w-4 text-amber-600" />
                        {a.county}
                      </p>
                    </div>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand-100 text-navy-900 transition-colors group-hover:bg-amber-500">
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-sea-600">
                    <CarIcon className="h-4 w-4" />
                    {a.driveTime}
                  </p>
                  {popular.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-2 border-t border-sand-200 pt-5">
                      {popular.map((s) => (
                        <li key={s.slug} className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-ink-900">
                          {s.navLabel}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-auto pt-5 text-sm font-semibold text-navy-900 group-hover:text-sea-600">
                    Remodeling in {a.name} <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      <Section tone="paper" eyebrow="Counties" title="Four Counties, a Dozen Permit Offices">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-ink-500">
              Every county and city runs its own permit office, wind-speed rules and inspection calendar. We pull permits
              in all of them and know what each inspector checks.
            </p>
            <ul className="space-y-4">
              {byCounty.map(({ county, cities }) => (
                <li key={county} className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-bold">{county}</h3>
                  {COUNTY_NOTES[county] ? <p className="mt-1 text-sm text-ink-500">{COUNTY_NOTES[county]}</p> : null}
                  {cities.length > 0 ? (
                    <p className="mt-2 text-[15px] text-ink-500">
                      {cities.map((c, i) => (
                        <span key={c.slug}>
                          <Link href={`/service-areas/${c.slug}`} className="font-medium text-sea-600 hover:underline">
                            {c.name}
                          </Link>
                          {i < cities.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  ) : null}
                </li>
              ))}
              {otherAreas.length > 0 && (
                <li className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
                  <h3 className="text-lg font-bold">Nearby</h3>
                  <p className="mt-2 text-[15px] text-ink-500">{otherAreas.map((a) => a.name).join(", ")}</p>
                </li>
              )}
            </ul>
            <p className="text-[15px] leading-relaxed text-ink-500">
              Don&apos;t see your town? We probably still cover it. Residential work only.{" "}
              <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
                Call {site.phone}
              </a>{" "}
              and we&apos;ll tell you in under a minute.
            </p>
          </div>
          <MapEmbed
            src={AREA_MAP_EMBED_URL}
            title="Map of the Prestigious Home Improvements service area around Port Charlotte, FL"
            className="h-96 lg:h-[560px]"
          />
        </div>
      </Section>

      <ReviewsBand />

      <FinancingBand />

      {faqs.length > 0 && <FaqBand eyebrow="Local questions" title="Questions Homeowners Ask Us" items={faqs} />}

      <CtaBand
        title="Not sure if we cover your street?"
        text="If you are anywhere from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs, we probably do. Call or book a free estimate and we will confirm."
      />
    </>
  );
}
