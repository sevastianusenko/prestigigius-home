import Link from "next/link";
import type { ReactNode } from "react";
import { services } from "@/content/services";
import { site } from "@/content/site";
import ServiceCard from "@/components/ServiceCard";
import Container from "@/components/ui/Container";
import BandHead from "./BandHead";

const lgSpan: Record<number, string> = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3", 4: "lg:col-span-4" };

export type ServicesGridBandProps = {
  eyebrow?: string;
  /** string may contain "\n" for a line break */
  title?: ReactNode;
  intro?: ReactNode;
  /** limit/order the grid; defaults to all services in menu order */
  slugs?: string[];
};

export default function ServicesGridBand({
  eyebrow = "What we do",
  title = "Residential Remodeling\nAcross Southwest Florida",
  intro = "Kitchens and baths, impact windows, lanais, roofs and full storm rebuilds. One licensed contractor runs the whole job, from the permit to the final walkthrough, in Charlotte, Sarasota and Lee Counties.",
  slugs,
}: ServicesGridBandProps) {
  const list = slugs?.length
    ? slugs.map((s) => services.find((x) => x.slug === s)).filter((s): s is (typeof services)[number] => Boolean(s))
    : services;
  const rest = list.length % 4;
  const ctaSpan = rest === 0 ? 4 : 4 - rest;

  return (
    <section className="section-y bg-sand-50">
      <Container>
        <BandHead eyebrow={eyebrow} title={title} intro={intro} className="mb-10 md:mb-12" />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((s) => (
            <li key={s.slug}>
              <ServiceCard service={s} />
            </li>
          ))}
          <li className={`sm:col-span-2 ${lgSpan[ctaSpan]}`}>
            <div className="flex h-full flex-col justify-center gap-4 rounded-[14px] bg-navy-900 p-6 md:p-8">
              <p className="eyebrow eyebrow-dark">Not sure where to start?</p>
              <p className="font-heading text-[1.35rem] font-extrabold leading-snug text-white">
                Tell us what bugs you about the house. We&rsquo;ll scope it on site and price it in writing.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/free-estimate"
                  className="inline-flex min-h-11 items-center rounded-full px-5 font-heading text-sm font-semibold btn-gold"
                >
                  Request a Free Estimate
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-white/80 px-5 font-heading text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call {site.phone}
                </a>
              </div>
            </div>
          </li>
        </ul>
      </Container>
    </section>
  );
}
