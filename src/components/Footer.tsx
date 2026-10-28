import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { areas } from "@/content/areas";
import Container from "./ui/Container";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about/team" },
  { label: "Our Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/resources" },
  { label: "Financing", href: "/financing" },
  { label: "Warranty", href: "/warranty" },
  { label: "Careers", href: "/careers" },
  { label: "Refer Someone", href: "/referral" },
  { label: "Estimate Builder", href: "/estimate-builder" },
  { label: "Contact", href: "/contact" },
]

const heading = "mb-5 font-heading text-[13px] font-bold uppercase tracking-[.14em] !text-amber-100";
const link = "text-[15px] text-navy-100/75 transition-colors hover:text-white";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-navy-100">
      <Container className="py-14 md:py-[72px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_.8fr_.8fr]">
          {/* Company */}
          <div>
            <Link href="/" className="inline-block" aria-label={`${site.name} home`}>
              <Image src="/images/logo-light.png" alt={site.name} width={547} height={213} sizes="200px" className="h-16 w-auto" />
            </Link>
            <p className="mt-1 font-heading text-xs font-semibold uppercase tracking-[.14em] text-amber-500">{site.tagline}</p>
            <Link
              href="/free-estimate"
              className="mt-6 inline-flex min-h-11 items-center rounded-full px-5 font-heading text-sm font-semibold btn-gold"
            >
              Get a Free Estimate
            </Link>
            <address className="mt-6 space-y-2 not-italic text-[15px]">
              <p>
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p>
                <a href={site.phoneHref} className="font-semibold text-white hover:text-amber-500">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${site.email}`} className="break-all text-navy-100/75 hover:text-white">
                  {site.email}
                </a>
              </p>
            </address>
            <p className="mt-5 text-sm text-navy-100/75">{site.hours}</p>
            <p className="mt-3 inline-block rounded-full border border-white/15 px-4 py-2 text-xs text-navy-100/85">
              {site.licenseLabel}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3Z" />
                </svg>
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r=".8" fill="currentColor" />
                </svg>
              </a>
              <a
                href={site.ratings.google.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google reviews"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M21.4 10.2H12v3.9h5.4c-.5 2.4-2.6 3.9-5.4 3.9a6 6 0 1 1 3.9-10.6l2.9-2.8A10 10 0 1 0 12 22c5.8 0 9.6-4 9.6-9.8 0-.7 0-1.3-.2-2Z" />
                </svg>
              </a>
              <a
                href={site.ratings.yelp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yelp reviews"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                {/* Yelp burst mark */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M10.9 2.2c.8-.2 1.4.4 1.4 1.2l.2 8.3c0 1-1.2 1.4-1.8.6L6.1 5.4c-.5-.6-.3-1.5.4-1.8a17 17 0 0 1 4.4-1.4Z" />
                  <path d="M13.6 14.4c-.9-.3-1.7.6-1.2 1.4l2.8 4.6c.4.7 1.3.8 1.9.3a8.5 8.5 0 0 0 2.3-2.9c.4-.7 0-1.5-.7-1.7l-5.1-1.7Z" />
                  <path d="M14.3 12.1c-.9.3-1.6-.6-1.1-1.4l2.9-4.4c.4-.7 1.4-.7 1.9-.1a8.5 8.5 0 0 1 1.8 3.2c.2.8-.2 1.5-1 1.7l-4.5 1Z" />
                  <path d="M10.8 14.7c0-.9-1-1.4-1.7-.9l-4.3 3c-.6.5-.6 1.4 0 1.9a8.5 8.5 0 0 0 3.3 1.7c.8.2 1.5-.3 1.6-1.1l1.1-4.6Z" />
                  <path d="M9.8 12.4c.9-.2 1-1.4.2-1.8L5.5 8.3c-.7-.4-1.6 0-1.7.8a8.5 8.5 0 0 0 .2 3.6c.2.8 1 1.2 1.7 1l4.1-1.3Z" />
                </svg>
              </a>
              <a
                href={site.social.nextdoor}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nextdoor"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-navy-950"
              >
                {/* Nextdoor mark: a lowercase "n" with a roof-line stem */}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M12.6 6.2c-2 0-3.6.8-4.6 2.1V5.1c0-1.6-1.1-2.6-2.9-2.6H3v2.6h.9c.5 0 .8.3.8.8v6.5L2 14.6l1.3 2.2 1.4-1v6.7H8v-8.6c0-2.2 1.9-3.9 4.4-3.9 2.4 0 4.3 1.7 4.3 3.9v8.6H20v-8.9c0-4.1-3.1-7.4-7.4-7.4Z" />
                </svg>
              </a>
            </div>
            <a
              href={site.ratings.bbb.seal.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="mt-6 inline-block rounded-md opacity-90 transition-opacity hover:opacity-100"
            >
              {/* BBB serves this seal and updates the rating on it, so it stays a plain <img> from bbb.org */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={site.ratings.bbb.seal.src}
                alt={`${site.name} BBB Business Review, BBB Rating ${site.ratings.bbb.grade}`}
                width={site.ratings.bbb.seal.width}
                height={site.ratings.bbb.seal.height}
                loading="lazy"
                decoding="async"
                className="h-[52px] w-[250px]"
              />
            </a>
          </div>

          {/* Services */}
          <div>
            <p className={heading}>Services</p>
            <ul className="space-y-2.5">
              {nav.services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={link}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <p className={heading}>Company</p>
            <ul className="space-y-2.5">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className={heading}>Service Areas</p>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className={link}>
                    {a.name}, FL
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-navy-100/60">{site.counties.join(" · ")}</p>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-navy-100/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/sitemap.xml" className="hover:text-white">
                Sitemap
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
