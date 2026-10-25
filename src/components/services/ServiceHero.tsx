import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { Photo } from "@/content/types";
import { site } from "@/content/site";
import { PhoneIcon } from "./icons";

type Props = {
  /** crumbs after "Home" (Breadcrumbs adds Home and emits the BreadcrumbList schema) */
  crumbs: { label: string; href?: string }[];
  eyebrow: string;
  /** keyword H1, e.g. "Kitchen Remodeling in Port Charlotte, FL" */
  title: string;
  /** benefit slogan shown under the H1 (not a heading) */
  tagline?: string;
  subhead: string;
  photo: Photo;
  /** service slug used to prefill the estimate form */
  serviceSlug?: string;
  ctaLabel?: string;
};

/** Full-width photo hero with navy gradient. Renders the page's only H1. */
export default function ServiceHero({
  crumbs,
  eyebrow,
  title,
  tagline,
  subhead,
  photo,
  serviceSlug,
  ctaLabel = "Get a Free Estimate",
}: Props) {
  const estimateHref = serviceSlug ? `/free-estimate?service=${serviceSlug}` : "/free-estimate";
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      <Image src={photo.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-navy-950/70 to-transparent"
      />
      <Container className="py-12 md:py-20 lg:py-24">
        <div className="text-sm [&_a]:text-white/85 [&_a:hover]:text-amber-500 [&_li]:text-navy-100 [&_span]:!text-navy-100 [&_svg]:text-navy-100/60">
          <Breadcrumbs items={crumbs} />
        </div>
        <div className="mt-8 max-w-3xl md:mt-12">
          <p className="eyebrow !text-[13px] !font-bold !tracking-[.14em] !text-amber-100">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-[-0.01em] !text-white sm:text-5xl lg:text-[57px]">
            {title}
          </h1>
          {tagline ? (
            <p className="mt-5 font-heading text-xl font-bold leading-snug text-amber-500 md:text-2xl">{tagline}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-lg leading-[1.55] text-navy-100 md:text-xl">{subhead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={estimateHref}
              className="inline-flex h-13 items-center justify-center rounded-full px-7 text-base font-semibold btn-gold"
            >
              {ctaLabel}
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex h-13 items-center justify-center gap-2 rounded-full border border-white/40 px-7 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <PhoneIcon className="h-5 w-5" />
              {site.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
