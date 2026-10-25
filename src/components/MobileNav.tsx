"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
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

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-[65px] z-40 overflow-y-auto bg-white"
      >
        <nav aria-label="Mobile" className="mx-auto flex min-h-full max-w-site flex-col px-5 pb-10 pt-2 sm:px-6">
          <ul className="divide-y divide-navy-900/10 border-b border-navy-900/10">
            {nav.main.map((item) => {
              const children =
                item.label === "Services" ? [{ label: "All services", href: "/services" }, ...nav.services] : item.children;
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
                    <ul id={panelId} hidden={!isOpen} className="grid gap-0.5 pb-4 sm:grid-cols-2">
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
            <li>
              <Link href={nav.estimateBuilder.href} className="block py-4 font-heading text-lg font-bold text-navy-900">
                {nav.estimateBuilder.label}
              </Link>
            </li>
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
