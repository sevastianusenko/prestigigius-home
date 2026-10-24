import type { Metadata } from "next";
import Link from "next/link";
import { nav, site } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Page not found | Prestigious Home Improvements",
  description: "That page moved or never existed. Find our remodeling services, projects and free estimate here.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <section className="border-b border-sand-200 bg-sand-100 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow !font-heading !text-[13px] !font-bold !tracking-[.14em]">Error 404</p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.01em] text-navy-900 md:text-5xl lg:text-[57px]">
              This Room Isn&rsquo;t
              <span className="block text-amber-500">on the Plans.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.55] text-ink-500">
              The page you were looking for moved or never existed. Try one of the links below, or call us at{" "}
              <a href={site.phoneHref} className="font-semibold text-sea-600 hover:underline">
                {site.phone}
              </a>
              .
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/free-estimate" size="lg">
                Get a Free Estimate
              </Button>
              <Button href="/" variant="ghost" size="lg">
                Back to Home
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <TrustStrip />

      <section className="bg-sand-50 py-16 md:py-[72px]">
        <Container>
          <div className="mx-auto max-w-[1010px]">
            <p className="eyebrow text-center !font-heading !text-[13px] !font-bold !tracking-[.14em] block">What we do</p>
            <h2 className="mt-3 text-center text-3xl font-bold md:text-[35px]">Maybe You Were Looking for One of These</h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {nav.services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="flex items-center justify-between rounded-[14px] border border-sand-200 bg-white px-5 py-4 text-[15px] font-semibold text-navy-900 shadow-card transition-colors hover:border-amber-500"
                  >
                    {s.label} <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
