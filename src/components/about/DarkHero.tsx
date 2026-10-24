import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/types";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { site } from "@/content/site";

/**
 * Dark navy page hero used by /about, /about/team, /careers and /referral.
 * Mirrors the reference's company-page hero: eyebrow, multi-line H1 with the
 * last line in the accent color, lead, two pill buttons, optional check bullets.
 * Renders the page's only H1 plus the breadcrumbs (BreadcrumbList JSON-LD).
 */
export default function DarkHero({
  crumbs,
  eyebrow,
  lines,
  accentLast = true,
  lead,
  primary,
  secondary,
  bullets,
  photo,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  lines: string[];
  accentLast?: boolean;
  lead: ReactNode;
  primary: { href: string; label: string };
  /** defaults to the phone number */
  secondary?: { href: string; label: string };
  bullets?: string[];
  photo?: Photo;
}) {
  const second = secondary ?? { href: site.phoneHref, label: `Call ${site.phone}` };
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {photo ? (
        <>
          <Image
            src={photo.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/60" />
        </>
      ) : null}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />
      <Container className="relative pb-16 pt-8 md:pb-24">
        <div className="[&_[aria-current=page]]:!text-white [&_a:hover]:!text-white [&_ol]:!text-navy-100/75 [&_svg]:!text-navy-100/40">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="mt-12 max-w-3xl md:mt-16">
          <p className="eyebrow !text-amber-100">{eyebrow}</p>
          <h1 className="mt-4 font-heading text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[3.55rem]">
            {lines.map((line, i) => (
              <span
                key={line}
                className={`block ${accentLast && i === lines.length - 1 ? "text-amber-500" : ""}`}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100/85">{lead}</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button variant="gold" href={primary.href} size="lg">
              {primary.label}
            </Button>
            <a
              href={second.href}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-7 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {second.label}
            </a>
          </div>
          {bullets && bullets.length > 0 ? (
            <ul className="mt-8 flex flex-col gap-3 text-sm text-navy-100 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckDot />
                  {b}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function CheckDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-500 text-navy-950 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3}>
        <path d="m5 12 5 5 9-10" />
      </svg>
    </span>
  );
}
