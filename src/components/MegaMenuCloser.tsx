"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The header panels open on CSS :hover / :focus-within. After a click the pointer
 * is still over the panel and the link keeps focus, so the panel would stay open
 * on the new page. On every route change: blur the link and suppress the panels
 * until the pointer leaves the menu.
 */
export default function MegaMenuCloser({ targetId }: { targetId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById(targetId);
    if (!nav) return;
    if (nav.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
    // Only matters when the pointer is still over the menu (a click, not a first load).
    if (!nav.matches(":hover")) return;
    nav.classList.add("mega-suppress");
    const release = () => nav.classList.remove("mega-suppress");
    nav.addEventListener("pointerleave", release, { once: true });
    return () => nav.removeEventListener("pointerleave", release);
  }, [pathname, targetId]);

  return null;
}
