import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import Container from "./ui/Container";
import MobileNav from "./MobileNav";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
      <Image
        src="/images/logo.png"
        alt={site.name}
        width={547}
        height={213}
        priority
        sizes="140px"
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 text-ink-500 transition-transform group-hover:rotate-180" fill="currentColor">
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

const topLink =
  "inline-flex items-center gap-1 rounded-full px-3 py-2 font-heading text-[14px] font-semibold text-navy-900 transition-colors hover:bg-navy-50 hover:text-navy-950";
const subLink =
  "block rounded-lg px-3 py-2 text-[14.5px] text-ink-900 transition-colors hover:bg-navy-50 hover:text-navy-900";

export default function Header() {
  const half = Math.ceil(nav.services.length / 2);
  const cols = [nav.services.slice(0, half), nav.services.slice(half)];

  return (
    <header className="sticky top-0 z-50 bg-white/96 shadow-header backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[65px] items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.main.map((item) => {
              if (item.label === "Services") {
                return (
                  <li key={item.href} className="mega-trigger group relative">
                    <Link href={item.href} aria-haspopup="true" className={topLink}>
                      {item.label}
                      <Chevron />
                    </Link>
                    <div className="mega-panel invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200">
                      <div className="rounded-[14px] border border-navy-900/5 bg-white p-5 shadow-card-hover">
                        <p className="eyebrow mb-3 px-3">Residential remodeling</p>
                        <div className="grid grid-cols-2 gap-x-4">
                          {cols.map((col, ci) => (
                            <ul key={ci} className="space-y-0.5">
                              {col.map((s) => (
                                <li key={s.href}>
                                  <Link href={s.href} className={subLink}>
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between rounded-[10px] bg-navy-50 px-4 py-3">
                          <span className="text-sm text-ink-500">Not sure where to start? We&rsquo;ll walk the house with you.</span>
                          <Link href="/services" className="font-heading text-sm font-bold text-navy-900 hover:text-amber-600">
                            All services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }
              if (item.children?.length) {
                return (
                  <li key={item.href} className="mega-trigger group relative">
                    <Link href={item.href} aria-haspopup="true" className={topLink}>
                      {item.label}
                      <Chevron />
                    </Link>
                    <div className="mega-panel invisible absolute left-1/2 top-full w-[230px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-200">
                      <ul className="rounded-[14px] border border-navy-900/5 bg-white p-2 shadow-card-hover">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={subLink}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }
              return (
                <li key={item.href}>
                  <Link href={item.href} className={topLink}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href={nav.estimateBuilder.href} className={`${topLink} !text-amber-600`}>
                {nav.estimateBuilder.label}
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-navy-50 2xl:hidden"
          >
            <PhoneIcon />
          </a>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 px-2 font-heading text-[14px] font-bold text-navy-900 hover:text-amber-600 2xl:inline-flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <Link
            href="/free-estimate"
            className="hidden min-h-10 items-center rounded-full px-5 font-heading text-[14px] font-semibold btn-black sm:inline-flex"
          >
            Free Estimate
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
