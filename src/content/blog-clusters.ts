/**
 * Topic clusters: pillar article → supporting articles (docs/BLOG-CLUSTER-BRIEF.md).
 * Used to render "More on this topic" on every article in a cluster, so pillars link
 * down to their supporting pieces and supporting pieces link across.
 */
export const blogClusters: { topic: string; pillar: string; children: string[] }[] = [
  { topic: "Window bucks, jambs and casing", pillar: "what-is-a-window-buck", children: ["what-is-a-door-jamb", "window-casing-guide"] },
  { topic: "Window trim", pillar: "exterior-window-trim-stucco", children: ["window-trim-ideas", "pvc-window-trim-exterior"] },
  { topic: "Window flashing", pillar: "window-flashing-liquid-applied", children: ["window-flashing-tape", "aluminum-window-capping"] },
  { topic: "House wrap and sheathing", pillar: "house-wrap-vs-zip-system", children: ["house-wrap-installation", "house-wrap-under-siding"] },
  { topic: "Casement windows", pillar: "casement-windows-florida", children: ["vinyl-casement-windows", "double-casement-windows"] },
  { topic: "Egress windows and bedrooms", pillar: "egress-window-requirements-florida", children: ["egress-window-for-bedroom", "legal-bedroom-requirements-florida"] },
  { topic: "Tempered and laminated glass", pillar: "laminated-vs-tempered-glass", children: ["tempered-glass-windows", "can-you-cut-tempered-glass"] },
  { topic: "Single and double-hung windows", pillar: "single-hung-vs-double-hung-windows", children: ["single-hung-window-replacement-cost", "mulled-windows"] },
  { topic: "Impact windows", pillar: "pgt-vs-es-vs-cws-impact-windows", children: ["hurricane-impact-windows-cost", "impact-windows-vs-hurricane-windows"] },
  { topic: "Sliding glass doors", pillar: "impact-sliding-glass-doors", children: ["sliding-glass-door-replacement-cost", "sliding-french-doors-vs-sliding-glass-doors"] },
  { topic: "Front entry doors", pillar: "outswing-vs-inswing-front-door", children: ["front-door-replacement-cost", "front-entry-doors-with-glass"] },
  { topic: "Arched windows", pillar: "arched-windows", children: ["arched-window-treatments", "arched-window-replacement"] },
  { topic: "Walk-in and curbless showers", pillar: "curbless-shower", children: ["walk-in-shower-ideas-small-bathrooms", "walk-in-shower-for-seniors"] },
  { topic: "Tile edges and trim", pillar: "schluter-trim-tile-edges", children: ["tile-edging-options", "shower-tile-edge-trim"] },
  { topic: "Tub-to-shower conversions", pillar: "tub-to-shower-conversion", children: ["tub-to-shower-conversion-kit-vs-custom", "one-day-tub-to-shower-conversion"] },
  { topic: "Hardie siding", pillar: "hardie-board-siding-florida", children: ["hardie-siding-cost", "hardie-board-and-batten"] },
  { topic: "Stucco", pillar: "stucco-repair-florida", children: ["florida-stucco-house-colors", "how-to-paint-stucco"] },
  { topic: "Kitchen remodeling", pillar: "kitchen-remodel-cost-florida", children: ["quartz-vs-granite-countertops", "cabinet-refacing-cost", "kitchen-island-with-sink", "how-long-does-a-kitchen-remodel-take"] },
  { topic: "Floors and slab prep", pillar: "lvp-flooring-cost", children: ["lvp-vs-tile-florida", "self-leveling-concrete-before-flooring", "tile-removal-cost", "terrazzo-floor-restoration"] },
];

/** The cluster a post belongs to (as pillar or child), if any. */
export function clusterOf(slug: string) {
  return blogClusters.find((c) => c.pillar === slug || c.children.includes(slug));
}
