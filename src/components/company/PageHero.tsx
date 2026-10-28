import Image from "next/image";
import type { ReactNode } from "react";
import type { Photo } from "@/content/types";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckIcon } from "./icons";

type Cta = { href: string; label: string };

/**
 * Reference-style inner-page hero: breadcrumbs (they also emit the
 * BreadcrumbList JSON-LD), eyebrow, Montserrat H1 (optional amber accent
 * line), lead, pill CTAs and check bullets.
 *
 * tone="dark"  → navy hero (photo, if given, sits behind a navy overlay)
 * tone="light" → sand hero (photo, if given, sits in the right column)
 */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  accent,
  intro,
  primary,
  secondary,
  bullets,
  photo,
  photoPlacement = "background",
  photoBadge,
  aside,
  tone = "light",
  children,
}: {
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  title: ReactNode;
  /** last headline line, rendered in amber on its own line */
  accent?: ReactNode;
  /** lead paragraph(s) */
  intro?: ReactNode;
  primary?: Cta;
  secondary?: Cta;
  bullets?: readonly string[];
  photo?: Photo;
  /** dark tone only: "background" (behind a navy overlay) or "side" (right column, fully visible) */
  photoPlacement?: "background" | "side";
  /** small label over the column photo, e.g. "Our job photo" */
  photoBadge?: string;
  /** right column content (form, card) */
  aside?: ReactNode;
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const dark = tone === "dark";
  const photoBg = dark && photo && photoPlacement === "background";
  const photoCol = photo && !aside && (!dark || photoPlacement === "side");
  const twoCol = Boolean(aside || photoCol);

  return (
    <section
      className={`relative overflow-hidden ${
        dark ? "bg-navy-950 text-white" : "border-b border-sand-200 bg-sand-100 text-navy-900"
      }`}
    >
      {photoBg ? (
        <>
          <Image src={photo.src} alt="" fill priority fetchPriority="high" sizes="100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-navy-950/85" />
        </>
      ) : dark ? (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-sea-600/20 blur-3xl" />
        </>
      ) : null}

      <Container className="relative pb-16 pt-8 md:pb-[72px]">
        <div
          className={
            dark
              ? "[&_a]:!text-navy-100/75 [&_a:hover]:!text-white [&_span]:!text-navy-100/90 [&_svg]:!text-navy-100/40"
              : ""
          }
        >
          <Breadcrumbs items={crumbs} />
        </div>

        <div className={`mt-10 grid gap-10 ${twoCol ? "lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14" : ""}`}>
          <div className="max-w-3xl">
            <p className={`eyebrow !font-heading !text-[13px] !font-bold !tracking-[.14em] ${dark ? "!text-amber-100" : ""}`}>
              {eyebrow}
            </p>
            <h1
              className={`mt-4 font-heading text-4xl font-extrabold leading-[1.08] tracking-[-0.01em] md:text-5xl lg:text-[57px] ${
                dark ? "!text-white" : "text-navy-900"
              }`}
            >
              {title}
              {accent ? <span className="block text-amber-500">{accent}</span> : null}
            </h1>
            {intro ? (
              <div className={`mt-6 max-w-2xl text-lg leading-[1.55] ${dark ? "text-navy-100/85" : "text-ink-500"}`}>
                {intro}
              </div>
            ) : null}

            {primary || secondary ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {primary ? (
                  <Button href={primary.href} size="lg" variant={dark ? "gold" : "primary"}>
                    {primary.label}
                  </Button>
                ) : null}
                {secondary ? (
                  dark ? (
                    <a
                      href={secondary.href}
                      className="inline-flex h-13 items-center justify-center rounded-full border border-white/40 px-7 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                    >
                      {secondary.label}
                    </a>
                  ) : (
                    <Button href={secondary.href} variant="ghost" size="lg">
                      {secondary.label}
                    </Button>
                  )
                ) : null}
              </div>
            ) : null}

            {bullets && bullets.length > 0 ? (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {bullets.map((b) => (
                  <li key={b} className={`flex items-center gap-2 text-[15px] font-semibold ${dark ? "text-white" : "text-navy-900"}`}>
                    <CheckIcon className="h-4 w-4 shrink-0 text-amber-500" strokeWidth={2.6} />
                    {b}
                  </li>
                ))}
              </ul>
            ) : null}

            {children ? <div className="mt-8">{children}</div> : null}
          </div>

          {aside ? (
            <div>{aside}</div>
          ) : photoCol && photo ? (
            <figure
              className={`relative aspect-[4/3] overflow-hidden rounded-[14px] shadow-card ${
                dark ? "bg-navy-900 ring-1 ring-white/10" : "bg-sand-200"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1280px) 540px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              {photoBadge ? (
                <figcaption className="absolute bottom-3 left-3 rounded-full glass-chip px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-[.08em] text-white">
                  {photoBadge}
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
