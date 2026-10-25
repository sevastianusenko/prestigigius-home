"use client";

import { useId, useRef, type KeyboardEvent } from "react";

/**
 * ARIA tabs wiring shared by the interactive service-page blocks: one tablist,
 * one tabpanel, roving tabindex and arrow / Home / End keys between tabs.
 */
export function useTabs(count: number, active: number, setActive: (i: number) => void) {
  const base = `tabs-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const listRef = useRef<HTMLDivElement>(null);
  const tabId = (i: number) => `${base}-tab-${i}`;
  const panelId = `${base}-panel`;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next: number;
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (active + 1) % count;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        next = (active - 1 + count) % count;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = count - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    setActive(next);
    listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]')[next]?.focus();
  };

  return {
    listProps: { ref: listRef, role: "tablist" as const, onKeyDown },
    tabProps: (i: number) => ({
      id: tabId(i),
      role: "tab" as const,
      "aria-selected": i === active,
      "aria-controls": panelId,
      tabIndex: i === active ? 0 : -1,
      onClick: () => setActive(i),
    }),
    panelProps: { id: panelId, role: "tabpanel" as const, "aria-labelledby": tabId(active) },
  };
}
