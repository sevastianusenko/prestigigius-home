import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import Container from "@/components/ui/Container";
import BandHead from "./BandHead";

/**
 * Impact window & door manufacturers we install (`site.brands`).
 * `full`: logo cards with a one-line note (impact windows page, city + impact pages).
 * `strip`: one quiet row of logos (home page).
 */
export default function BrandsBand({ variant = "full", className = "bg-white" }: { variant?: "full" | "strip"; className?: string }) {
  if (variant === "strip") {
    return (
      <section className={`py-10 md:py-12 ${className}`} aria-labelledby="brands-strip-heading">
        <Container className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <h2 id="brands-strip-heading" className="shrink-0 text-center font-heading text-[12px] font-bold uppercase tracking-[.16em] text-ink-500 md:text-left">
            Impact windows &amp; doors we install
          </h2>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 md:justify-end lg:gap-x-14">
            {site.brands.map((b) => (
              <li key={b.name}>
                <Image
                  src={b.logo.src}
                  alt={b.name}
                  width={b.logo.width}
                  height={b.logo.height}
                  unoptimized
                  className="h-14 w-[150px] object-contain opacity-75 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-16 md:w-[170px]"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    );
  }

  return (
    <section className={`section-y ${className}`} aria-labelledby="brands-heading">
      <Container>
        <BandHead
          id="brands-heading"
          eyebrow="Brands we install"
          title="Florida-Approved Impact Products From Three Manufacturers"
          intro="We are not tied to one factory. We pick the line that fits your openings, budget and lead time, and every unit carries a Florida Product Approval for your wind zone."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {site.brands.map((b) => (
            <li key={b.name} className="flex flex-col rounded-[16px] border border-sand-200 bg-white p-6 shadow-card">
              <div className="grid h-28 place-items-center rounded-[12px] bg-white">
                <Image src={b.logo.src} alt={b.name} width={b.logo.width} height={b.logo.height} unoptimized className="max-h-24 w-auto max-w-[85%]" />
              </div>
              <h3 className="mt-5 border-t border-sand-200 pt-5 font-heading text-lg font-bold text-navy-900">{b.name}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-ink-500">{b.note}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-500">
          Comparing them?{" "}
          <Link href="/resources/pgt-vs-es-vs-cws-impact-windows" className="font-semibold text-navy-900 underline decoration-amber-500/60 underline-offset-2 hover:text-amber-600">
            Read our side-by-side guide to impact window brands
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
