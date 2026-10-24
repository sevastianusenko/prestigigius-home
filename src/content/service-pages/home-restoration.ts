/**
 * Content for the redesigned Home Restoration service page
 * (src/app/services/home-restoration/page.tsx). No client restoration photos yet:
 * every image is stock and labelled "Illustrative" on the page.
 * Prices must stay consistent with src/content/services/restoration.ts.
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  agingBlock: stock("exterior-02"),
  neglected: stock("whole-home-07"),
  patched: stock("restoration-05"),
  gutted: stock("whole-home-06"),
  datedHouse: stock("exterior-03"),
  condo: stock("whole-home-04"),
  stripped: stock("restoration-04"),
};

export type SystemRow = {
  label: string;
  options: { label: string; status: "ok" | "watch" | "flag"; note: string }[];
};

export const restorationPage = {
  seoTitle: "Home Restoration Port Charlotte FL | Older Florida Homes",
  seoDescription:
    "Restoring 1960s–1990s Florida homes in Port Charlotte & SWFL: gut renovations, polybutylene and cast-iron replacement, rewiring, terrazzo, impact upgrades. Licensed CRC1327831.",
  hero: {
    eyebrow: "1960s–1990s ranch, canal and condo homes",
    title: "Home Restoration for Older Florida Homes",
    lead: "Most of Port Charlotte was built between 1960 and 1995: good block bones, big lots, a canal out back, and 40 to 60 years of patches. We check the drains, panel and attic before we price, then bring the house back to sound, insurable condition.",
    photos: [P.agingBlock, P.neglected, P.patched] as Photo[],
    proof: [
      { value: "Camera", label: "drain check before the price" },
      { value: "Owner", label: "on every restoration" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Full gut renovation",
      text: "Down to block walls and trusses, then new layout, plumbing, wiring, insulation, kitchen, baths and finishes throughout.",
      photo: P.gutted,
      price: "$120,000–$260,000",
    },
    {
      title: "Old Florida ranch or canal home",
      text: "Open the kitchen, update the baths, fix the systems and keep the mid-century character, with impact sliders facing the water.",
      photo: P.datedHouse,
      price: "$75,000–$160,000",
    },
    {
      title: "Plumbing & wiring replacement",
      text: "Cast iron, galvanized or polybutylene replaced, panel upgraded and circuits grounded, then slab cuts, walls and floors restored.",
      photo: P.stripped,
      price: "$18,000–$55,000",
    },
    {
      title: "Condo renovation",
      text: "Everything from the drywall in, coordinated with your association: approvals, risers, sound underlayment and work hours.",
      photo: P.condo,
      price: "$45,000–$110,000",
    },
  ],
  bones: [
    {
      title: "Keep the bones",
      text: "Concrete block walls, simple roof lines and terrazzo under the carpet are worth keeping. Restoration usually costs well under building new.",
    },
    {
      title: "Replace what is worn out",
      text: "Cast-iron drains, polybutylene supply lines, two-prong outlets and popcorn ceilings: the parts that fail inspections and leak under slabs.",
    },
    {
      title: "Add what was never there",
      text: "Impact openings, grounded circuits and roof tie-downs where reachable, so the house insures at a fair price and rides out the next storm.",
    },
  ],
  checkIntro:
    "Insurers usually want a four-point inspection (roof, electrical, plumbing, HVAC) on homes over about 30 years old. Tell us what your house has and see what an inspector is likely to call out.",
  checkNote:
    "A rough guide, not an inspection. Carriers set their own rules, and only a licensed inspector's report counts. We check these items at the free walkthrough and price the fixes before you sign.",
  systems: [
    {
      label: "Water supply lines",
      options: [
        { label: "Copper or PEX", status: "ok", note: "Usually fine if there are no active leaks." },
        { label: "Gray plastic (polybutylene)", status: "flag", note: "Many insurers will not write a policy until it is replaced." },
        { label: "Galvanized steel", status: "flag", note: "Corrodes from the inside; commonly flagged and replaced with PEX." },
      ],
    },
    {
      label: "Drain lines under the slab",
      options: [
        { label: "PVC", status: "ok", note: "The modern standard." },
        { label: "Original cast iron", status: "watch", note: "Scales and cracks with age. A camera inspection shows how far along it is." },
        { label: "Not sure", status: "watch", note: "We camera-inspect the drains before we price." },
      ],
    },
    {
      label: "Electrical",
      options: [
        { label: "Newer panel, grounded outlets", status: "ok", note: "Usually fine." },
        { label: "Two-prong outlets or an older panel", status: "flag", note: "Ungrounded circuits and some older panels can block coverage or raise premiums." },
        { label: "Aluminum branch wiring", status: "flag", note: "Needs a specific repair method at every connection." },
      ],
    },
    {
      label: "Roof",
      options: [
        { label: "Under about 15 years", status: "ok", note: "Usually fine with documentation." },
        { label: "Shingle roof 15+ years", status: "flag", note: "Many carriers want an inspection and may decline renewal." },
        { label: "Not sure", status: "watch", note: "We look it up in the permit history." },
      ],
    },
  ] satisfies SystemRow[],
  learn: [
    "remodeling-a-1980s-florida-ranch-house",
    "renovation-vs-remodel-vs-restoration",
    "whole-house-renovation-checklist-florida",
    "cost-to-remodel-a-house-in-florida",
    "rebuilding-after-hurricane-or-water-damage",
    "impact-windows-vs-hurricane-shutters",
  ],
};
