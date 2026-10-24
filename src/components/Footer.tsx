import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import Container from "./ui/Container";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Our team", href: "/about/team" },
  { label: "Our process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Reviews", href: "/reviews" },
  { label: "Resources", href: "/resources" },
  { label: "Financing", href: "/financing" },
  { label: "Warranty", href: "/warranty" },
  { label: "Careers", href: "/careers" },
  { label: "Refer someone", href: "/referral" },
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
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className={heading}>Services</h2>
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
            <h2 className={heading}>Company</h2>
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
            <h2 className={heading}>Service areas</h2>
            <ul className="space-y-2.5">
              {site.serviceAreas.map((a) => (
                <li key={a}>
                  <Link href={`/service-areas/${slugify(a)}`} className={link}>
                    {a}, FL
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
