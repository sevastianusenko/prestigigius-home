/**
 * Content for the redesigned Interior & Exterior Painting service page
 * (src/app/services/painting/page.tsx). No client painting photos yet: every image
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
  roller: stock("painting-01"),
  yellow: stock("painting-02"),
  finishing: stock("painting-03"),
  exterior: stock("painting-05"),
  tray: stock("painting-06"),
  cabinets: stock("kitchen-07"),
  stuccoHome: stock("siding-stucco-01"),
};

export const paintingPage = {
  seoTitle: "House Painters Port Charlotte FL | Interior & Exterior",
  seoDescription:
    "Interior repaints, cabinet painting and elastomeric stucco exteriors in Port Charlotte & SWFL. Prep listed line by line, paint named in writing, fixed price. Free estimate.",
  hero: {
    eyebrow: "Interior · cabinets · stucco exteriors",
    title: "Interior & Exterior Painting in Port Charlotte",
    lead: "A repaint that looks fine on day one can be peeling, chalking or growing mildew in two Florida seasons. We put our time into the prep, name the paint in writing, and paint with our own crew.",
    photos: [P.exterior, P.yellow, P.tray] as Photo[],
    proof: [
      { value: "Named", label: "paint system in the contract" },
      { value: "Labeled", label: "leftover paint for touch-ups" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Interior repaint",
      text: "Walls, ceilings, trim and doors, from a few rooms to the whole house, with stain-blocking primer where water marks used to be.",
      photo: P.roller,
      price: "$3,500–$14,000",
    },
    {
      title: "Kitchen cabinet painting",
      text: "Doors sprayed off-site in a controlled space, boxes degreased and primed, two coats of urethane-modified enamel.",
      photo: P.cabinets,
      price: "$4,500–$9,500",
    },
    {
      title: "Exterior stucco repaint",
      text: "Low-pressure wash and mildewcide, cracks routed and filled, then elastomeric or high-build masonry coating at the specified thickness.",
      photo: P.stuccoHome,
      price: "$6,000–$15,000",
    },
    {
      title: "Popcorn ceiling removal",
      text: "Older texture tested for asbestos first, then contained, scraped, skim-coated and painted for flat, bright ceilings.",
      photo: P.finishing,
      price: "$2,500–$8,000",
    },
  ],
  climate: [
    {
      title: "Humidity near 90 percent",
      text: "Paint over damp or chalky stucco does not bond. It blisters and peels, usually within two seasons. We check moisture before we open a can.",
    },
    {
      title: "A storm almost every afternoon",
      text: "From June to September, hairline cracks let rain behind the paint daily. They get routed and filled before any coating goes on.",
    },
    {
      title: "UV all year",
      text: "South and west walls chalk and fade first. The right coating system and enough film thickness are what buy you extra years.",
    },
  ],
  estimator: {
    interior: { low: 3, high: 6, min: 600, max: 2400, start: 1800 },
    exterior: [
      { label: "One-story block home", range: "$6,000–$10,000" },
      { label: "Two-story or heavy crack repair", range: "$10,000–$15,000" },
    ],
    note: "Typical 2026 Charlotte and Sarasota County ranges. Dark-to-light color changes, heavy patching and vaulted ceilings cost more; walls-only with no color change costs less. Your fixed price comes after the free inspection.",
  },
  learn: [
    "how-to-paint-stucco",
    "florida-stucco-house-colors",
    "stucco-repair-florida",
    "exterior-window-trim-stucco",
    "pvc-window-trim-exterior",
    "window-trim-ideas",
  ],
};
