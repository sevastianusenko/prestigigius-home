/**
 * Content for the redesigned Kitchen Remodeling service page
 * (src/app/services/kitchen-remodeling/page.tsx). No client kitchen photos yet:
 * every image here is stock and is labelled "Illustrative" on the page.
 * Prices and durations must stay consistent with src/content/services/interior-core.ts.
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  marbleIsland: stock("kitchen-01"),
  shaker: stock("kitchen-02"),
  openIsland: stock("kitchen-03"),
  white: stock("kitchen-06"),
  gray: stock("kitchen-05"),
  window: stock("kitchen-08"),
  patio: stock("kitchen-09"),
};

export type TimelinePhase = { label: string; weeks: number; text: string };
export type TimelineScope = { title: string; range: string; phases: TimelinePhase[] };

export const kitchenPage = {
  seoTitle: "Kitchen Remodeling Port Charlotte FL | Cabinets & Quartz",
  seoDescription:
    "Kitchen remodeling in Port Charlotte, Sarasota & Fort Myers: cabinets, quartz, islands and open layouts. Fixed price, cabinets inspected before demo, dates in writing. Free estimate.",
  hero: {
    eyebrow: "Cabinets · countertops · islands · open layouts",
    title: "Kitchen Remodeling in Port Charlotte & Sarasota",
    lead: "Kitchen remodels rarely go wrong on the tile. They go wrong on timing and on money nobody wrote down. We order and inspect your cabinets before the old kitchen comes out, and your finish date goes into the contract.",
    photos: [P.patio, P.marbleIsland, P.gray] as Photo[],
    proof: [
      { value: "1", label: "point of contact, start to finish" },
      { value: "Fixed", label: "written price before demo" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Kitchen refresh & refacing",
      text: "The cabinet boxes and layout stay. New doors and fronts, quartz or granite, a tile backsplash, soft-close hardware and under-cabinet light.",
      photo: P.white,
      price: "$12,000–$25,000",
      links: [{ label: "Renovation vs remodel", href: "/resources/renovation-vs-remodel-vs-restoration" }],
    },
    {
      title: "Cabinets & countertops",
      text: "What most people mean by a new kitchen. Same layout, new cabinets set dead level, stone templated after install, new sink and faucet.",
      photo: P.shaker,
      price: "$22,000–$40,000",
      links: [{ label: "Do I need a permit?", href: "/resources/permit-for-bathroom-or-kitchen-remodel-charlotte-county" }],
    },
    {
      title: "Full kitchen, same layout",
      text: "Everything new while the sink, range and fridge stay put: soffits out, cabinets to the ceiling, recessed lights, new floor and a hood vented outdoors.",
      photo: P.window,
      price: "$45,000–$85,000",
      links: [{ label: "What remodeling costs in Florida", href: "/resources/cost-to-remodel-a-house-in-florida" }],
    },
    {
      title: "New layout & open concept",
      text: "The sink moves to an island, a wall comes out, ductwork is rerouted. On a slab that means cutting concrete, which we price before you sign.",
      photo: P.openIsland,
      price: "$55,000–$150,000",
      links: [{ label: "Remodeling a 1980s ranch", href: "/resources/remodeling-a-1980s-florida-ranch-house" }],
    },
  ],
  failures: [
    {
      title: "Cabinets arrive after demo",
      text: "The old kitchen is gone, then a box shows up damaged or a panel is missing. Reorders take weeks, and the family eats takeout the whole time.",
    },
    {
      title: "Stone templated too early",
      text: "Counters measured before the cabinets are level come back with gaps at the wall and seams that do not line up. Stone cannot be stretched.",
    },
    {
      title: "Power and venting as an afterthought",
      text: "An island with no outlets, a microwave on a shared circuit, a hood that blows into the attic. All of these fail inspection or get covered up.",
    },
  ],
  timelineIntro:
    "Layout, selections, permits and cabinet delivery all happen while your old kitchen still works. The clock below starts on demo day. Pick your project to see a typical schedule.",
  timeline: [
    {
      title: "Refresh",
      range: "1–2 weeks",
      phases: [
        { label: "Prep & refacing", weeks: 0.5, text: "Counters and backsplash off, new doors and fronts fitted to the existing boxes." },
        { label: "Countertops", weeks: 1, text: "Stone templated on the level boxes, cut and installed with the sink." },
        { label: "Backsplash & lighting", weeks: 0.5, text: "Tile up to the uppers, under-cabinet LED, hardware and punch list." },
      ],
    },
    {
      title: "Cabinets & counters",
      range: "3–4 weeks",
      phases: [
        { label: "Demo", weeks: 0.5, text: "Old cabinets and counters out, dust walls up, floors covered." },
        { label: "Cabinets", weeks: 1, text: "Inspected-on-arrival cabinets set dead level and fastened." },
        { label: "Countertops", weeks: 1.5, text: "Stone templated in place, then cut and installed. A temporary sink can bridge the gap." },
        { label: "Finish", weeks: 1, text: "Sink, faucet and disposal connected, backsplash, lighting, punch list." },
      ],
    },
    {
      title: "Full, same layout",
      range: "5–7 weeks",
      phases: [
        { label: "Demo", weeks: 0.5, text: "Cabinets, counters, soffits and the old floor out." },
        { label: "Rough-in & inspection", weeks: 1.5, text: "New circuits, recessed lights, plumbing updates, then the county rough inspection." },
        { label: "Cabinets", weeks: 1, text: "Uppers to the ceiling, pantry pull-outs, everything set level." },
        { label: "Countertops", weeks: 1.5, text: "Templated after cabinets are installed, then cut and set." },
        { label: "Floor, tile & appliances", weeks: 2, text: "Flooring, backsplash, appliances set and connected, hood vented outdoors, final inspection." },
      ],
    },
    {
      title: "New layout",
      range: "6–9 weeks",
      phases: [
        { label: "Demo", weeks: 0.5, text: "The old kitchen out and the new layout marked on the slab." },
        { label: "Slab & plumbing", weeks: 2, text: "Trench cut for the island drain and vent, plumbing inspected, slab patched." },
        { label: "Electrical rough", weeks: 1, text: "Circuits moved and added, island outlets, inspection." },
        { label: "Cabinets", weeks: 1, text: "Island and perimeter cabinets set level." },
        { label: "Countertops", weeks: 1.5, text: "Templated in place, then cut and installed." },
        { label: "Finish", weeks: 3, text: "Flooring across the room, backsplash, lighting, appliances, final inspection and punch list." },
      ],
    },
  ] satisfies TimelineScope[],
  local: [
    {
      title: "Slab under the island",
      text: "Moving the sink to an island means trenching the concrete for drain and vent. It adds cost and a few days, and we price it in writing up front.",
    },
    {
      title: "Block exterior walls",
      text: "New outlets or a ducted hood on an outside wall mean cutting into block, not drywall. We plan those runs before the layout is final.",
    },
    {
      title: "Humidity and particleboard",
      text: "Cheap particleboard boxes swell near the sink and dishwasher here. We steer you to plywood boxes with solid wood or quality MDF doors.",
    },
    {
      title: "Soffits and small panels",
      text: "Many 1980s and 1990s homes hide ductwork in soffits and run on panels that cannot carry today's kitchen circuits. We check both at the first visit.",
    },
  ],
  budget: [
    { label: "Share of the budget that goes to cabinets", value: "30–40%", note: "So the cabinet line you pick drives everything else. Plywood boxes hold up best in our humidity." },
    { label: "Saved by keeping the sink and range in place", value: "$8k–$20k", note: "On a slab, moving plumbing means trenching concrete, inspection and patching." },
  ],
  compare: {
    columns: ["Refacing", "New cabinets, same layout", "New layout"],
    rows: [
      { label: "Typical cost", values: ["$12,000–$25,000", "$22,000–$85,000", "$55,000–$150,000"] },
      { label: "Without a kitchen", values: ["About 1–2 weeks", "About 3–7 weeks", "About 6–10 weeks"] },
      { label: "Works when", values: ["Boxes are sound and you like the layout", "The layout works but the cabinets are worn", "The sink, range or a wall is in the wrong place"] },
      { label: "Watch out for", values: ["Swollen boxes near the sink", "Cabinet lead times", "Slab trenching and engineering"] },
      { label: "Permit", values: ["Usually not", "Often, for new circuits", "Yes"] },
    ],
    note: "Cabinets are usually 30 to 40 percent of a kitchen budget, and keeping the sink and range where they are can save $8,000 to $20,000. We will tell you honestly which column you are in.",
    link: { label: "When a kitchen needs a permit in Charlotte County", href: "/resources/permit-for-bathroom-or-kitchen-remodel-charlotte-county" },
  },
  learn: [
    "kitchen-remodel-cost-florida",
    "how-long-does-a-kitchen-remodel-take",
    "quartz-vs-granite-countertops",
    "cabinet-refacing-cost",
    "kitchen-island-with-sink",
    "permit-for-bathroom-or-kitchen-remodel-charlotte-county",
  ],
};
