import Link from "next/link";
import Container from "@/components/ui/Container";
import { areas } from "@/content/areas";
import { cityServices } from "@/content/city-services";
import { getService } from "@/content/services";

/** "In your city" links from a main service page to its city + service pages. */
export default function LocalPagesLinks({ service }: { service: string }) {
  const pages = cityServices.filter((c) => c.service === service);
  const s = getService(service);
  if (!pages.length || !s) return null;
  return (
    <section className="bg-sand-50 py-10" aria-label={`${s.title} by city`}>
      <Container>
        <div className="flex flex-col gap-4 rounded-[16px] border border-sand-200 bg-white p-6 shadow-card md:flex-row md:items-center md:justify-between">
          <p className="font-heading text-[15px] font-bold text-navy-900">{s.title} near you:</p>
          <ul className="flex flex-wrap gap-2">
            {pages.map((c) => {
              const a = areas.find((x) => x.slug === c.area);
              return a ? (
                <li key={c.area}>
                  <Link
                    href={`/service-areas/${c.area}/${c.service}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:border-amber-500 hover:text-amber-600"
                  >
                    {s.title} in {a.name} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
