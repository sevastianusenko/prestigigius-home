import Link from "next/link";
import type { ReactNode } from "react";
import { areas } from "@/content/areas";
import { site } from "@/content/site";
import { areasHeadline } from "@/content/company";
import Container from "@/components/ui/Container";
import BandHead from "./BandHead";

export type ServiceAreasBandProps = { title?: ReactNode };

const countyNotes: Record<string, string> = {
  "Charlotte County": "Our home base, from Port Charlotte to Punta Gorda",
  "Sarasota County": "North Port, Venice, Englewood, Sarasota and Siesta Key",
  "Lee County": "Cape Coral, Fort Myers and Bonita Springs",
  "Manatee County": "Lakewood Ranch and the Parrish area",
};

export default function ServiceAreasBand({ title = areasHeadline }: ServiceAreasBandProps) {
  const groups = site.counties.map((county) => {
    const key = county.split(" ")[0].toLowerCase();
    return { county, cities: areas.filter((a) => a.county.toLowerCase().includes(key)) };
  });
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    `${site.address.city}, ${site.address.state}`,
  )}&z=9&output=embed`;

  return (
    <section className="section-y bg-sand-50">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-14">
          <div>
            <BandHead
              eyebrow="Service areas"
              title={title}
              intro="Based in Port Charlotte, we work on homes along the Gulf Coast from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs. These are the towns we're in most often."
            />

            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Cities we serve">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/service-areas/${a.slug}`}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-navy-900/10 bg-white px-4 font-heading text-[14px] font-semibold text-navy-900 shadow-card transition-colors hover:border-amber-500 hover:text-amber-600"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
                      <circle cx="12" cy="9.5" r="2.5" />
                    </svg>
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {groups.map((g) => (
                <div key={g.county} className="rounded-[14px] border border-navy-900/[.06] bg-white p-4 shadow-card">
                  <h3 className="text-[15px] font-extrabold">{g.county}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-ink-500">{countyNotes[g.county] ?? `${g.cities.length} cities`}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[15px] text-ink-500">
              Don&rsquo;t see your town?{" "}
              <a href={site.phoneHref} className="font-semibold text-navy-900 underline decoration-amber-500 underline-offset-4 hover:text-amber-600">
                Call {site.phone}
              </a>{" "}
              and we&rsquo;ll tell you straight whether we can take it on.{" "}
              <Link href="/service-areas" className="font-semibold text-navy-900 hover:text-amber-600">
                All service areas →
              </Link>
            </p>
          </div>

          <div className="overflow-hidden rounded-[14px] border border-navy-900/[.06] bg-navy-50 shadow-card">
            <iframe
              title={`Map of ${site.address.city}, Florida and surrounding service area`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[4/3] h-auto w-full border-0 lg:aspect-[5/6]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
