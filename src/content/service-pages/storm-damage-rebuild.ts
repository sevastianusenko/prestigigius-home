/**
 * Content for the redesigned Storm & Water Damage Rebuilds service page
 * (src/app/services/storm-damage-rebuild/page.tsx). Damage and rebuild images are
 * stock and labelled "Illustrative"; the storm-hardening before/after is a real job.
 * Prices must stay consistent with src/content/services/restoration.ts.
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
  wrecked: stock("storm-damage-01"),
  debris: stock("storm-damage-05"),
  stripped: stock("restoration-04"),
  patched: stock("restoration-05"),
  peeling: stock("restoration-01"),
  aerial: stock("storm-damage-02"),
  stucco: stock("siding-stucco-03"),
  lanaiBefore: jobPhoto("manatee-county-lanai-wall-block-rebuild", 1, "lanai", "Old aluminum-framed lanai wall with glass panels before replacement, Manatee County", "Before: the original aluminum lanai wall."),
  lanaiAfter: jobPhoto("manatee-county-lanai-wall-block-rebuild", 3, "lanai", "New stucco block wall with storm-rated windows and a full-lite door, Manatee County", "After: block wall, storm-rated windows and door."),
};

export const stormPage = {
  seoTitle: "Storm & Water Damage Repair Port Charlotte FL | Rebuilds",
  seoDescription:
    "Storm and water damage rebuilds in Port Charlotte & SWFL after mitigation: drywall, floors, cabinets, windows and doors. Adjuster-ready estimates.",
  hero: {
    eyebrow: "Hurricane · flood · roof leak · plumbing leak",
    title: "Storm & Water Damage Rebuilds in Port Charlotte",
    lead: "The mitigation company dries the house. We put it back together: drywall, insulation, floors, cabinets, and the window and door damage that let the water in. Permitted, documented for your adjuster, and run by one of the owners.",
    photos: [P.patched, P.wrecked, P.debris] as Photo[],
    proof: [
      { value: "Dry", label: "log checked before drywall" },
      { value: "Permitted", label: "wherever required" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Flood cut rebuild",
      text: "Mitigation cut the drywall 2 to 4 feet up and pulled the floors. We rebuild the lower walls, trim, doors, flooring and swollen base cabinets.",
      photo: P.stripped,
      price: "$30,000–$85,000",
    },
    {
      title: "Wind-damage rebuild",
      text: "Broken windows, sliders or a garage door let the rain in. We replace the openings with impact units and rebuild ceilings and finishes, scheduled around your roofer.",
      photo: P.aerial,
      price: "$35,000–$120,000",
    },
    {
      title: "One-room leak repair",
      text: "A burst supply line, water heater or AC overflow. Walls and ceilings replaced, texture matched and floors blended into the rest of the house.",
      photo: P.peeling,
      price: "$6,000–$25,000",
    },
    {
      title: "Lanai, garage & exterior",
      text: "The parts storms hit first: screen cages, garage doors, stucco cracks, soffit and fascia that let wind-driven rain into the attic.",
      photo: P.stucco,
      price: "$8,000–$45,000",
    },
  ],
  calculator: {
    intro:
      "In a FEMA flood zone, if repairs reach 50% of the structure's market value (land not included), the building department can treat the house as substantially damaged and require it to meet current flood rules, which can mean elevating it. Put in rough numbers to see where you stand.",
    note:
      "A rough self-check, not a determination. The building department decides, using its own valuation (often the property appraiser's structure value) and its own repair-cost figures. We help you gather what it asks for before demolition goes further.",
  },
  hardening: {
    before: P.lanaiBefore,
    after: P.lanaiAfter,
    projectSlug: "manatee-county-lanai-wall-block-rebuild",
    quoteName: "Ronald S.",
    note: "Not storm damage: an upgrade example of the same idea.",
    points: [
      "Moisture-resistant drywall at the bottom course",
      "Tile or water-tolerant vinyl instead of carpet or laminate",
      "Impact windows, doors and wind-rated garage doors",
    ],
  },
  learn: [
    "rebuilding-after-hurricane-or-water-damage",
    "hurricane-impact-windows-cost",
    "impact-windows-vs-hurricane-shutters",
    "stucco-repair-florida",
    "cost-to-remodel-a-house-in-florida",
    "design-build-vs-general-contractor-vs-handyman",
  ],
};
