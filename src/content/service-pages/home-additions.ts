/**
 * Content for the redesigned Home Additions & Florida Rooms service page
 * (src/app/services/home-additions/page.tsx). Construction images are stock and
 * labelled "Illustrative"; the lanai-to-block before/after is a real job.
 * Prices must stay consistent with src/content/services/interior-core.ts.
 */
import { photos } from "../photos";
import { jobPhoto } from "../project-posts/helpers";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  sheathed: stock("addition-01"),
  framing: stock("addition-02"),
  scaffold: stock("addition-03"),
  roofFraming: stock("addition-04"),
  metalStud: stock("addition-06"),
  site: stock("addition-05"),
  lanaiBefore: jobPhoto("manatee-county-lanai-wall-block-rebuild", 1, "lanai", "Old aluminum-framed lanai wall with glass panels before replacement, Manatee County", "Before: the original aluminum lanai wall."),
  lanaiAfter: jobPhoto("manatee-county-lanai-wall-block-rebuild", 3, "lanai", "New stucco block wall with storm-rated windows and a full-lite door, Manatee County", "After: block wall, storm-rated windows and door."),
};

export const additionsPage = {
  seoTitle: "Home Additions & Florida Rooms Port Charlotte FL",
  seoDescription:
    "Florida rooms, room additions, in-law suites and garage conversions in Port Charlotte, North Port & Venice. Lot checked first, engineered, permitted, CRC1327831. Free site visit.",
  hero: {
    eyebrow: "Florida rooms · garage conversions · suites",
    title: "Home Additions & Florida Rooms in Port Charlotte",
    lead: "You like the street, the schools or the canal out back; you just need more room. We check what your lot allows before anyone draws a plan, then build the addition so it looks like it was always part of the house.",
    photos: [P.scaffold, P.framing, P.site] as Photo[],
    proof: [
      { value: "$250–400", label: "per sq ft, finished room" },
      { value: "3–8 wk", label: "typical permit review" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Florida room",
      text: "A bright, air-conditioned room off the back of the house, often replacing a screened porch or an open lanai, with impact glass on three sides.",
      photo: P.lanaiAfter,
      real: true,
      price: "$45,000–$95,000",
    },
    {
      title: "Garage conversion",
      text: "The most affordable new room: slab, walls and roof already exist. Floor leveled, door infilled, insulated and cooled.",
      photo: P.metalStud,
      real: false,
      price: "$40,000–$90,000",
    },
    {
      title: "Room or bedroom addition",
      text: "Built from the footing up: slab doweled to the old one, block walls with a tie beam, roof tied in and flashed, stucco matched.",
      photo: P.sheathed,
      real: false,
      price: "$90,000–$200,000",
    },
    {
      title: "Primary or in-law suite",
      text: "Bedroom, walk-in closet and a curbless shower, with a private entry and an optional kitchenette where zoning allows.",
      photo: P.roofFraming,
      real: false,
      price: "$150,000–$300,000",
    },
  ],
  seams: [
    {
      title: "The roof tie-in leaks",
      text: "Where the new roof meets the old one is the first place a summer storm finds. It needs a proper flashed and sealed connection, not a bead of caulk.",
    },
    {
      title: "The new slab pulls away",
      text: "Without footings and steel dowels into the existing slab, the addition settles on its own and cracks the tile across the doorway.",
    },
    {
      title: "The new room is always hot",
      text: "Nobody ran a load calculation, so the old air conditioner is stretched over extra square footage it was never sized for.",
    },
  ],
  lotChecks: [
    { title: "Setbacks", text: "How close to the property lines you can build decides the size and shape of the addition." },
    { title: "Flood zone", text: "The new floor may need to sit at or above base flood elevation, which can mean a step up from the house." },
    { title: "Septic & drain field", text: "On many North Port and Port Charlotte lots, the septic system limits where you can build." },
    { title: "Easements", text: "Utility and drainage easements can rule out part of the yard entirely." },
    { title: "HOA rules", text: "Matching roof and stucco, covered parking, and an architectural review before ground breaks." },
  ],
  calculator: {
    min: 150,
    max: 800,
    start: 350,
    low: 250,
    high: 400,
    note:
      "For a finished room addition before a bathroom or kitchen, which add more. Florida rooms ($45k–$95k) and garage conversions ($40k–$90k) are priced as their own scopes because the shell partly exists. Your fixed price comes once plans are drawn.",
  },
  lanaiJob: {
    before: P.lanaiBefore,
    after: P.lanaiAfter,
    projectSlug: "manatee-county-lanai-wall-block-rebuild",
    quoteName: "Ronald S.",
  },
  learn: [
    "cost-to-remodel-a-house-in-florida",
    "legal-bedroom-requirements-florida",
    "egress-window-for-bedroom",
    "design-build-vs-general-contractor-vs-handyman",
    "hurricane-impact-windows-cost",
    "stucco-repair-florida",
  ],
};
