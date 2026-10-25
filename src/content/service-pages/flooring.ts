/**
 * Content for the redesigned Flooring & Tile service page
 * (src/app/services/flooring/page.tsx). No client flooring photos yet: every image
 * is stock and labelled "Illustrative" on the page.
 * Prices must stay consistent with src/content/services/interior-finish.ts.
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  hardwood: stock("flooring-01"),
  parquet: stock("flooring-02"),
  widePlank: stock("whole-home-03"),
  bigRoom: stock("flooring-04"),
  whiteTile: stock("flooring-05"),
  living: stock("whole-home-05"),
  stripped: stock("restoration-04"),
};

export type FloorMaterial = { label: string; low: number; high: number; note: string };

export const flooringPage = {
  seoTitle: "Flooring & Tile Installation Port Charlotte FL | LVP, Tile",
  seoDescription:
    "Luxury vinyl plank, porcelain tile and engineered wood in Port Charlotte & SWFL. Tile and terrazzo removal, slab leveling priced up front. Free measure.",
  hero: {
    eyebrow: "LVP · porcelain tile · engineered wood",
    title: "Flooring & Tile Installation in Port Charlotte",
    lead: "Nearly every home here sits on a concrete slab, and the slab decides how a new floor performs. We check it for flatness and moisture before we quote, so leveling is a line on the estimate, not a mid-job phone call.",
    photos: [P.bigRoom, P.living, P.parquet] as Photo[],
    proof: [
      { value: "Laser", label: "flatness check before the price" },
      { value: "Same day", label: "debris haul-off" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Luxury vinyl plank",
      text: "Waterproof rigid-core plank through living areas and bedrooms, run in one direction so it flows room to room.",
      photo: P.widePlank,
      price: "$6–$11 / sq ft installed",
    },
    {
      title: "Porcelain tile",
      text: "Large-format or wood-look porcelain over an uncoupling membrane, with leveling clips so edges sit flush.",
      photo: P.whiteTile,
      price: "$11–$20 / sq ft installed",
    },
    {
      title: "Engineered wood",
      text: "A real wood wear layer on a stable core, over a barrier rated for slab-on-grade, once the slab tests dry enough.",
      photo: P.hardwood,
      price: "$12–$22 / sq ft installed",
    },
    {
      title: "Old tile & terrazzo removal",
      text: "Dust-controlled removal with shrouded tools and HEPA vacuums, thinset ground off, cracks treated, debris out the same day.",
      photo: P.stripped,
      price: "$3–$6 / sq ft",
    },
  ],
  slab: [
    {
      title: "A dip makes plank click",
      text: "Floating floors laid over a low spot flex with every step until the joints separate. The fix is leveling, not new boards.",
    },
    {
      title: "A hump cracks big tile",
      text: "Large-format porcelain needs the flattest slab of all. On an uneven one, edges lip and tiles crack along the high spot.",
    },
    {
      title: "Moisture ruins wood",
      text: "Slabs can hold a lot of water, especially after a house sat closed up after a storm. We test before any wood or glue-down product.",
    },
  ],
  calculator: {
    materials: [
      { label: "Luxury vinyl plank", low: 6, high: 11, note: "Includes carpet removal, basic leveling, baseboard and transitions." },
      { label: "Porcelain tile", low: 11, high: 20, note: "Depends on tile size and pattern; large formats need more prep." },
      { label: "Engineered wood", low: 12, high: 22, note: "Only after the slab passes a moisture test." },
      { label: "Condo floor + sound mat", low: 9, high: 18, note: "Includes a rated acoustic underlayment and the board submittal." },
    ] satisfies FloorMaterial[],
    tileRemoval: { low: 3, high: 6 },
    leveling: { low: 1, high: 3 },
    min: 200,
    max: 3000,
    start: 1500,
    note: "Typical 2026 Charlotte, Sarasota and Lee County ranges. Stairs, patterns like herringbone and built-ins are priced separately. Your estimate separates materials, removal, prep and install.",
  },
  learn: [
    "lvp-flooring-cost",
    "lvp-vs-tile-florida",
    "self-leveling-concrete-before-flooring",
    "tile-removal-cost",
    "terrazzo-floor-restoration",
    "tile-edging-options",
  ],
};
