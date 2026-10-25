"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

/** Pages that already are the lead form: the bar would only cover it. */
const HIDDEN_ON = ["/free-estimate", "/contact"];
const SHOW_AFTER = 500;

/** Event MobileNav fires when its drawer opens or closes (detail: boolean). */
export const MOBILE_NAV_EVENT = "mobilenav:toggle";

/**
 * Sticky "Call / Get a Free Estimate" bar for phones (below md only).
 * Slides in after ~500px of scroll, hides while the mobile menu is open.
 */
export default function MobileCtaBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const excluded = HIDDEN_ON.some((p) => pathname === p || pathname?.startsWith(`${p}/`));

  useEffect(() => {
    if (excluded) return;
    const onScroll = () => {
      const next = window.scrollY > SHOW_AFTER;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [excluded]);

  useEffect(() => {
    const onNav = (e: Event) => setNavOpen(Boolean((e as CustomEvent<boolean>).detail));
    window.addEventListener(MOBILE_NAV_EVENT, onNav);
    return () => window.removeEventListener(MOBILE_NAV_EVENT, onNav);
  }, []);

  if (excluded) return null;
  const visible = scrolled && !navOpen;

  return (
    <>
      {/* Spacer so the bar never covers the end of the footer on phones */}
      <div aria-hidden="true" className="h-[76px] bg-navy-950 md:hidden" />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-white/95 px-3 pt-2.5 shadow-[0_-8px_24px_-12px_rgb(0_0_0/.25)] backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none md:hidden ${
          visible ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
        style={{ paddingBottom: "calc(0.625rem + env(safe-area-inset-bottom))" }}
        aria-hidden={!visible}
      >
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2.5">
          <a
            href={site.phoneHref}
            tabIndex={visible ? undefined : -1}
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full px-3 font-heading text-[13.5px] font-semibold btn-black"
          >
            Call {site.phone}
          </a>
          <Link
            href="/free-estimate"
            tabIndex={visible ? undefined : -1}
            className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full px-3 font-heading text-[13.5px] font-semibold btn-gold"
          >
            Get a Free Estimate
          </Link>
        </div>
      </div>
    </>
  );
}
