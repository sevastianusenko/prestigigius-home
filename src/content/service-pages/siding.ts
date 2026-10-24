/**
 * Content for the redesigned Siding service page (src/app/services/siding/page.tsx).
 * No client siding photos yet: every image is stock and labelled "Illustrative".
 * Prices must stay consistent with src/content/services/exterior-core.ts.
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  whiteLap: stock("siding-stucco-05"),
  twoTone: stock("siding-stucco-06"),
  grayHome: stock("exterior-01"),
  weathered: stock("exterior-09"),
  palms: stock("exterior-03"),
  oldHouse: stock("exterior-07"),
  lawn: stock("exterior-04"),
};

export const sidingPage = {
  seoTitle: "Siding Contractor Port Charlotte FL | James Hardie & Vinyl",
  seoDescription:
    "James Hardie fiber cement, vinyl and board-and-batten siding for frame and manufactured homes in Port Charlotte & SWFL. Every opening flashed by window installers. Free estimate.",
  hero: {
    eyebrow: "James Hardie · vinyl · board-and-batten",
    title: "Siding Replacement in Port Charlotte & Englewood",
    lead: "Not every Southwest Florida home is block and stucco. For frame houses, manufactured homes and additions we install fiber cement and vinyl over new house wrap, with every window and door flashed by a crew that started out installing them.",
    photos: [P.grayHome, P.lawn, P.oldHouse] as Photo[],
    proof: [
      { value: "Test", label: "removals before the price" },
      { value: "Per sheet", label: "hidden rot priced in the contract" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "James Hardie fiber cement",
      text: "Noncombustible, termite-proof lap siding that holds paint in strong sun, pre-finished in ColorPlus or primed for paint.",
      photo: P.twoTone,
      price: "$22,000–$60,000",
      links: [
        { label: "Hardie siding in Florida", href: "/resources/hardie-board-siding-florida" },
        { label: "What Hardie costs", href: "/resources/hardie-siding-cost" },
      ],
    },
    {
      title: "Vinyl siding",
      text: "Lightweight and low-maintenance, in high-wind rated profiles and heat-resistant colors. It never needs paint.",
      photo: P.whiteLap,
      price: "$12,000–$32,000",
      links: [{ label: "House wrap under siding", href: "/resources/house-wrap-under-siding" }],
    },
    {
      title: "Board-and-batten",
      text: "Vertical panels with battens on gables, entries or the whole house, often above stucco for a coastal farmhouse look.",
      photo: P.palms,
      price: "$5,000–$25,000",
      links: [{ label: "Hardie board-and-batten", href: "/resources/hardie-board-and-batten" }],
    },
    {
      title: "Manufactured home re-side",
      text: "Lightweight siding, new vented skirting and rewrapped window trim, with park or HOA approval and the permit handled.",
      photo: P.weathered,
      price: "$9,000–$24,000",
      links: [],
    },
  ],
  failures: [
    {
      title: "It starts at the windows",
      text: "Most siding leaks we open up trace back to missing or reversed flashing at a window or door, not to the siding itself.",
    },
    {
      title: "Rot nobody priced",
      text: "Old siding hides soft sheathing and termite damage. Without test removals, that turns into a change order halfway through the job.",
    },
    {
      title: "Fastened the easy way",
      text: "Siding in the wind-borne debris region has to be nailed exactly as its product approval was tested. Short cuts fail inspection or the next storm.",
    },
  ],
  layersIntro:
    "Siding is the last layer of a wall that has to shed Gulf rain and hold on in a hurricane. Tap a layer to see what it does and what we check before the next one goes on.",
  layers: [
    {
      title: "Studs and framing",
      text: "Test removals show us the framing before we price. Rotted or termite-damaged members near the ground and around openings get repaired first.",
      bullets: ["Checked at the free visit, not after tear-off"],
    },
    {
      title: "Sheathing",
      text: "The plywood or OSB the siding fastens through. Soft sections are cut out and replaced at the per-sheet price written into your contract.",
      bullets: ["Per-sheet price agreed before work starts"],
    },
    {
      title: "House wrap",
      text: "A new weather-resistive barrier over the whole wall, lapped so water runs down and out, never behind the layer below.",
      bullets: ["Upper layers lap over lower ones, like shingles"],
    },
    {
      title: "Flashing at every opening",
      text: "Sill pans, flashing tape and head flashing at each window, door and penetration, the details most siding leaks trace back to.",
      bullets: ["Done by installers who set windows for a living"],
    },
    {
      title: "Siding and trim",
      text: "Fiber cement or vinyl with its Florida Product Approval, fastened to the tested pattern for your wind zone, with trim, caulk and paint where needed.",
      bullets: ["Kept the required clearance above grade and roofs"],
    },
  ],
  reviewName: "Nick & Ashley O.",
  learn: [
    "hardie-board-siding-florida",
    "hardie-siding-cost",
    "hardie-board-and-batten",
    "house-wrap-under-siding",
    "house-wrap-vs-zip-system",
    "window-flashing-tape",
  ],
};
