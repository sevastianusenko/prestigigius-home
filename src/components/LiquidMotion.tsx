"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Below the hero: band heads and the items of card grids/lists fade up as they scroll in. */
const REVEAL = [
  "main > section:not(:first-of-type) h2",
  "main > section:not(:first-of-type) h2 + p",
  "main > section:not(:first-of-type) ul > li",
  "main > section:not(:first-of-type) ol > li",
].join(",");

/** Surfaces whose highlight follows the pointer. */
const GLASS = ".glass, .glass-light, .glass-panel, .btn-glass";

/**
 * Site-wide motion, mounted once in the root layout:
 * - scroll reveal (adds `.reveal` + `.is-in`; CSS hides nothing until `.js-reveal` is on <html>),
 * - a soft light spot that follows the pointer across liquid-glass surfaces (--mx / --my).
 * Both are skipped for prefers-reduced-motion.
 */
export default function LiquidMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
    const vh = window.innerHeight;
    for (const el of els) {
      if (el.closest("header, footer, nav, [role=dialog]")) continue;
      // Already on screen when the page opens: leave it alone (no flash).
      if (el.getBoundingClientRect().top < vh * 0.9) continue;
      const li = el.tagName === "LI" ? el : null;
      el.style.setProperty("--i", li ? String(Math.min(Array.from(li.parentElement!.children).indexOf(li), 6)) : "0");
      el.classList.add("reveal");
      io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    let frame = 0;
    let last: PointerEvent | null = null;
    const paint = () => {
      frame = 0;
      const ev = last;
      if (!ev) return;
      const el = (ev.target as Element | null)?.closest?.<HTMLElement>(GLASS);
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      el.style.setProperty("--my", `${ev.clientY - r.top}px`);
    };
    const onMove = (ev: PointerEvent) => {
      last = ev;
      if (!frame) frame = requestAnimationFrame(paint);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
