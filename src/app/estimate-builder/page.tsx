import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import EstimateBuilder, { type EstimateService } from "@/components/estimate/EstimateBuilder";
import { services } from "@/content/services";
import { site } from "@/content/site";

export const metadata: Metadata = {
  // 53 chars
  title: "Remodeling Cost Estimate Builder | Port Charlotte FL",
  description:
    "Pick your projects, choose the scope and get a ballpark remodeling price for your Southwest Florida home in about a minute. Your written estimate is free.",
  alternates: { canonical: "/estimate-builder" },
  openGraph: {
    title: "Remodeling Cost Estimate Builder | Port Charlotte FL",
    description: "A ballpark price for your SWFL remodel in about a minute.",
    url: "/estimate-builder",
    type: "website",
  },
};

const howItWorks = [
  {
    title: "Pick your projects",
    text: "One room or several. Combine a kitchen with new floors, or a roof with impact windows.",
  },
  {
    title: "Match the scope",
    text: "Choose the option closest to what you have in mind and answer three quick questions about your home.",
  },
  {
    title: "Get a ballpark, then the real number",
    text: "See a typical Southwest Florida range now. Send it to us and we turn it into a free written estimate.",
  },
];

export default function EstimateBuilderPage() {
  // Only what the client component needs: keeps the page payload small.
  const data: EstimateService[] = services.map((s) => ({
    slug: s.slug,
    title: s.title,
    blurb: s.blurb,
    group: s.group,
    scopes: s.scopes.map((sc) => ({
      title: sc.title,
      summary: sc.summary,
      priceRange: sc.priceRange,
      duration: sc.duration,
    })),
  }));

  return (
    <>
      <section className="bg-navy-950 text-white">
        <Container className="pb-14 pt-8 md:pb-[72px]">
          <div className="[&_a]:text-navy-100 [&_a:hover]:text-white [&_span[aria-current]]:text-white">
            <Breadcrumbs items={[{ label: "Estimate builder" }]} />
          </div>
          <div className="mt-10 max-w-3xl">
            <Eyebrow className="!text-amber-100">Estimate builder · Southwest Florida</Eyebrow>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-tight !text-white md:text-[57px]">
              What Will Your Project <span className="text-amber-500">Probably Cost?</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85">
              Pick your projects, choose the scope and see a ballpark built from the ranges we see on Port Charlotte,
              Sarasota and Lee County homes. It takes about a minute. The written estimate after it is free.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-sand-50 py-12 md:py-[72px]">
        <Container>
          <noscript>
            <div className="mb-8 rounded-[14px] border border-amber-500/40 bg-amber-100 p-5 text-navy-900">
              The estimate builder needs JavaScript. You can still{" "}
              <a href="/free-estimate" className="font-semibold underline">
                request a free estimate
              </a>{" "}
              or call us at{" "}
              <a href={site.phoneHref} className="font-semibold underline">
                {site.phone}
              </a>
              .
            </div>
          </noscript>
          <EstimateBuilder services={data} contact={{ phone: site.phone, phoneHref: site.phoneHref }} />
        </Container>
      </section>

      <section className="border-t border-sand-200 bg-sand-100 py-16 md:py-[72px]">
        <Container>
          <Eyebrow className="!text-amber-600">How it works</Eyebrow>
          <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 md:text-[35px]">
            A Ballpark in a Minute. A Real Number in a Visit.
          </h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((s, i) => (
              <li key={s.title} className="rounded-[14px] border border-sand-200 bg-white p-6 shadow-card">
                <span className="font-heading text-3xl font-extrabold text-amber-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-heading text-lg font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">
            Ballpark only — your written estimate is free and exact. Every number here is a typical range, not a quote.
            Permits, engineering, hidden damage, HOA rules and the finishes you choose all move the final price, and
            we only commit to a number after we have seen the house.
          </p>
        </Container>
      </section>

      <TrustStrip />

      <CtaBand
        title="Rather Skip Straight to the Real Number?"
        text="Book a free walkthrough. We measure, listen and send you a written, itemized estimate. No pressure, no obligation."
      />
    </>
  );
}
