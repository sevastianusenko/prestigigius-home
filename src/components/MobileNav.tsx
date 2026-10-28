"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { areas } from "@/content/areas";
import { MOBILE_NAV_EVENT } from "./MobileCtaBar";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-5 w-5 text-ink-500 transition-transform ${open ? "rotate-180" : ""}`}
      fill="currentColor"
    >
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Tell the sticky mobile CTA bar to get out of the way while the drawer is open
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(MOBILE_NAV_EVENT, { detail: open }));
  }, [open]);

  // Lock scroll + Escape to close
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggle = (key: string) => setSection((s) => (s === key ? null : key));
  const subLink = "block rounded-lg px-3 py-2 text-[15px] text-ink-900 hover:bg-navy-50";

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full border border-navy-900/10 bg-white text-navy-900 transition-colors hover:bg-navy-50"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {/* The header's backdrop blur makes it the containing block for this fixed drawer,
          so `bottom-0` would collapse it to zero height: size it from the viewport instead. */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-x-0 top-[72px] z-40 h-[calc(100dvh-72px)] overflow-y-auto overscroll-contain bg-white"
      >
        <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-site flex-col px-5 pb-10 pt-2 sm:px-6">
          <ul className="divide-y divide-navy-900/10 border-b border-navy-900/10">
            <li>
              <button
                type="button"
                aria-expanded={section === "Services"}
                aria-controls="mobile-sub-services"
                onClick={() => toggle("Services")}
                className="flex w-full items-center justify-between py-4 font-heading text-lg font-bold text-navy-900"
              >
                Services
                <Chevron open={section === "Services"} />
              </button>
              <div id="mobile-sub-services" hidden={section !== "Services"} className="pb-5">
                {nav.serviceGroups.map((g) => (
                  <div key={g.key} className="mt-2 first:mt-0">
                    <p className="flex items-center gap-2 px-3 pb-1 pt-2 font-heading text-[11px] font-bold uppercase tracking-[.16em] text-ink-500">
                      <span aria-hidden="true" className="h-px w-4 bg-amber-500" />
                      {g.title}
                    </p>
                    <ul className="grid gap-0.5 sm:grid-cols-2">
                      {nav.services
                        .filter((s) => s.group === g.key)
                        .map((s) => (
                          <li key={s.href}>
                            <Link href={s.href} className="block rounded-lg px-3 py-2 hover:bg-navy-50">
                              <span className="block font-heading text-[15px] font-semibold text-navy-900">{s.label}</span>
                              <span className="block text-[13px] text-ink-500">{s.note}</span>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <Link href="/services" className="rounded-[10px] bg-sand-50 px-4 py-3 font-heading text-[15px] font-bold text-navy-900">
                    All services
                  </Link>
                  <Link href={nav.estimateBuilder.href} className="rounded-[10px] bg-sand-50 px-4 py-3 font-heading text-[15px] font-bold text-navy-900">
                    {nav.estimateBuilder.label}
                  </Link>
                </div>
              </div>
            </li>
            {nav.main
              .filter((item) => item.label !== "Services")
              .map((item) => {
                const children =
                  item.label === "Service Areas"
                    ? [{ label: "All service areas", href: "/service-areas" }, ...areas.map((a) => ({ label: a.name, href: `/service-areas/${a.slug}` }))]
                    : item.children;
                if (children?.length) {
                  const key = item.label;
                  const isOpen = section === key;
                  const panelId = `mobile-sub-${key.toLowerCase().replace(/\W+/g, "-")}`;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(key)}
                        className="flex w-full items-center justify-between py-4 font-heading text-lg font-bold text-navy-900"
                      >
                        {item.label}
                        <Chevron open={isOpen} />
                      </button>
                      <ul id={panelId} hidden={!isOpen} className="grid grid-cols-2 gap-0.5 pb-4">
                        {children.map((c) => (
                          <li key={c.href + c.label}>
                            <Link href={c.href} className={subLink}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="block py-4 font-heading text-lg font-bold text-navy-900">
                      {item.label}
                    </Link>
                  </li>
                );
              })}
          </ul>

          <div className="mt-8 grid gap-3">
            <Link
              href="/free-estimate"
              className="inline-flex min-h-12 items-center justify-center rounded-full px-7 font-heading font-semibold btn-black"
            >
              Get a Free Estimate
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-12 items-center justify-center rounded-full border-[1.5px] border-navy-900 px-7 font-heading font-semibold text-navy-900 hover:bg-navy-900 hover:text-white"
            >
              Call {site.phone}
            </a>
          </div>
          <p className="mt-6 text-center text-sm text-ink-500">{site.hours}</p>
          <p className="mt-1 text-center text-xs text-ink-500">{site.licenseLabel}</p>
        </nav>
      </div>
    </div>
  );
}
