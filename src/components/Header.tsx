import Image from "next/image";
import Link from "next/link";
import { nav, site, type NavService } from "@/content/site";
import { areas } from "@/content/areas";
import Container from "./ui/Container";
import MobileNav from "./MobileNav";
import MegaMenuCloser from "./MegaMenuCloser";

/** Own job photo for the featured card in the Services mega menu (not stock). */
const FEATURED = {
  src: "/images/projects/siesta-key-waterfront-new-build-windows-sliders/01.jpg",
  width: 1600,
  height: 1200,
  alt: "Impact windows and sliders on a waterfront new build on Siesta Key",
  caption: "Our job photo · Siesta Key",
};

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
      <Image
        src="/images/logo.png"
        alt={site.name}
        width={547}
        height={213}
        priority
        sizes="150px"
        className="h-11 w-auto sm:h-[50px]"
      />
    </Link>
  );
}

function Chevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4 text-ink-500 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
      fill="currentColor"
    >
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

function PhoneIcon({ className = "h-5 w-5 text-amber-600" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

const topLink =
  "nav-top inline-flex items-center gap-1 whitespace-nowrap px-3 py-2.5 font-heading text-[14.5px] font-semibold text-navy-900 transition-colors hover:text-navy-950";
const panelBase = "mega-panel invisible absolute top-full pt-2 opacity-0 transition duration-200";
const dropLink =
  "block whitespace-nowrap rounded-lg px-3 py-2 text-[14.5px] text-ink-900 transition-colors hover:bg-sand-50 hover:text-navy-950";

function ServiceLink({ s }: { s: NavService }) {
  return (
    <li>
      <Link href={s.href} className="group/s flex items-start justify-between gap-3 rounded-[10px] px-3 py-2.5 transition-colors hover:bg-sand-50">
        <span>
          <span className="block font-heading text-[15px] font-semibold leading-snug text-navy-900">{s.label}</span>
          <span className="mt-0.5 block text-[13px] leading-snug text-ink-500">{s.note}</span>
        </span>
        <Arrow className="mt-1 shrink-0 -translate-x-1 text-amber-500 opacity-0 transition duration-200 group-hover/s:translate-x-0 group-hover/s:opacity-100" />
      </Link>
    </li>
  );
}

function GroupTitle({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="mb-2 flex items-center gap-2 px-3 font-heading text-[11.5px] font-bold uppercase tracking-[.16em] text-ink-500 hover:text-navy-900">
      <span aria-hidden="true" className="h-px w-5 bg-amber-500" />
      {title}
    </Link>
  );
}

function ServicesMega() {
  const byGroup = (key: NavService["group"]) => nav.services.filter((s) => s.group === key);
  const [interior, exterior, restoration] = nav.serviceGroups;

  return (
    <div className={`${panelBase} mega-full inset-x-0 translate-y-2`}>
      <div className="glass-panel border-t border-navy-900/5 shadow-card-hover">
        <Container className="grid grid-cols-[1fr_1fr_330px] gap-8 py-8">
          <div>
            <GroupTitle title={interior.title} href={interior.href} />
            <ul className="grid gap-0.5">
              {byGroup(interior.key).map((s) => (
                <ServiceLink key={s.href} s={s} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <GroupTitle title={exterior.title} href={exterior.href} />
              <ul className="grid gap-0.5">
                {byGroup(exterior.key).map((s) => (
                  <ServiceLink key={s.href} s={s} />
                ))}
              </ul>
            </div>
            <div>
              <GroupTitle title={restoration.title} href={restoration.href} />
              <ul className="grid gap-0.5">
                {byGroup(restoration.key).map((s) => (
                  <ServiceLink key={s.href} s={s} />
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/services/impact-windows-doors"
              className="group/f frame-gold relative block overflow-hidden rounded-[16px] text-white [--frame-bg:#0a0a0a]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={FEATURED.src}
                  alt={FEATURED.alt}
                  width={FEATURED.width}
                  height={FEATURED.height}
                  sizes="330px"
                  quality={60}
                  className="h-full w-full object-cover transition duration-500 group-hover/f:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 glass-chip rounded-full px-2.5 py-1 text-[11px] font-semibold">
                  {FEATURED.caption}
                </span>
              </div>
              <div className="p-5">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[.16em] text-amber-500">Where we started</p>
                <p className="mt-1.5 font-heading text-[17px] font-bold leading-snug">Impact windows &amp; doors, installed by career installers</p>
                <span className="mt-3 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-amber-500">
                  See the service <Arrow className="transition-transform group-hover/f:translate-x-1" />
                </span>
              </div>
            </Link>

            <Link
              href={nav.estimateBuilder.href}
              className="group/e flex items-center justify-between gap-3 rounded-[14px] border border-sand-200 bg-sand-50 px-4 py-3.5 transition-colors hover:border-amber-500"
            >
              <span>
                <span className="block font-heading text-[15px] font-semibold text-navy-900">{nav.estimateBuilder.label}</span>
                <span className="block text-[13px] text-ink-500">Typical SWFL price ranges for your project</span>
              </span>
              <Arrow className="shrink-0 text-amber-500 transition-transform group-hover/e:translate-x-1" />
            </Link>
          </div>
        </Container>

        <div className="border-t border-navy-900/5 bg-white/40">
          <Container className="flex items-center justify-between gap-6 py-3.5 text-sm">
            <p className="text-ink-500">
              Not sure where to start? <span className="text-navy-900">The in-home walkthrough is free.</span>
            </p>
            <div className="flex items-center gap-6">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 font-heading font-semibold text-navy-900 hover:text-amber-600">
                <PhoneIcon className="h-4 w-4 text-amber-600" />
                {site.phone}
              </a>
              <Link href="/services" className="inline-flex items-center gap-1.5 font-heading font-bold text-navy-900 hover:text-amber-600">
                All 13 services <Arrow />
              </Link>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

function AreasPanel() {
  return (
    <div className={`${panelBase} left-1/2 w-[440px] -translate-x-1/2 translate-y-2`}>
      <div className="glass-panel rounded-[16px] border border-navy-900/5 p-4 shadow-card-hover">
        <p className="px-3 pb-2 pt-1 font-heading text-[11.5px] font-bold uppercase tracking-[.16em] text-ink-500">
          {site.serviceSpan}
        </p>
        <ul className="grid grid-cols-2 gap-x-2">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link href={`/service-areas/${a.slug}`} className={dropLink}>
                {a.name}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/service-areas"
          className="mt-3 flex items-center justify-between rounded-[10px] bg-sand-50 px-4 py-3 font-heading text-sm font-bold text-navy-900 hover:text-amber-600"
        >
          Map of all service areas <Arrow />
        </Link>
      </div>
    </div>
  );
}

function DropPanel({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className={`${panelBase} left-1/2 w-[240px] -translate-x-1/2 translate-y-2`}>
      <ul className="glass-panel rounded-[16px] border border-navy-900/5 p-2 shadow-card-hover">
        {items.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className={dropLink}>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Header() {
  return (
    <header className="glass-light sticky top-0 z-50 shadow-header">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <nav id="main-nav" aria-label="Main" className="hidden h-full xl:block">
          <ul className="flex h-full items-center gap-1">
            {nav.main.map((item) => {
              const panel =
                item.label === "Services" ? (
                  <ServicesMega />
                ) : item.label === "Service Areas" ? (
                  <AreasPanel />
                ) : item.children?.length ? (
                  <DropPanel items={item.children} />
                ) : null;

              if (!panel) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className={topLink}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              // The Services panel spans the header, so its <li> must not be the positioning box.
              const positioned = item.label === "Services" ? "" : "relative";
              return (
                <li key={item.href} className={`mega-trigger group flex h-full items-center ${positioned}`}>
                  <Link href={item.href} aria-haspopup="true" className={topLink}>
                    {item.label}
                    <Chevron />
                  </Link>
                  {panel}
                </li>
              );
            })}
          </ul>
          <MegaMenuCloser targetId="main-nav" />
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.phoneHref}
            aria-label={`Call ${site.phone}`}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-navy-50 xl:hidden"
          >
            <PhoneIcon />
          </a>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 whitespace-nowrap px-2 font-heading text-[14.5px] font-bold text-navy-900 hover:text-amber-600 xl:inline-flex"
          >
            <PhoneIcon />
            {site.phone}
          </a>
          <Link
            href="/free-estimate"
            className="hidden min-h-11 items-center whitespace-nowrap rounded-full px-6 font-heading text-[14.5px] font-semibold btn-black sm:inline-flex"
          >
            Free Estimate
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
