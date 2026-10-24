/**
 * Content for the redesigned Roofing service page (src/app/services/roofing/page.tsx).
 * No client roof photos yet: every image is stock and labelled "Illustrative".
 * Roof coverings are installed and permitted by a state-licensed roofing partner;
 * keep that wording wherever installation is mentioned.
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
  fastening: stock("roofing-01"),
  shingles: stock("roofing-02"),
  tearOff: stock("roofing-03"),
  tile: stock("roofing-04"),
  metal: stock("roofing-05"),
  onRoof: stock("roofing-06"),
  tileHouse: stock("siding-stucco-02"),
  whiteHome: stock("exterior-05"),
};

export const roofingPage = {
  seoTitle: "Roof Replacement & Repair Port Charlotte FL | Roofing",
  seoDescription:
    "Shingle, metal and tile re-roofs and repairs in Port Charlotte & SWFL, installed by a state-licensed roofer. 25% rule checked, wind mitigation documented, insurance letters. Free estimate.",
  hero: {
    eyebrow: "Shingle · metal · tile · repairs",
    title: "Roof Replacement & Repair in Port Charlotte",
    lead: "In Florida the roof is the line your insurer cares about most. We tell you honestly whether it needs a repair or a re-roof, tear off to the deck when it does, and hand you the paperwork your carrier asks for.",
    photos: [P.onRoof, P.tileHouse, P.whiteHome] as Photo[],
    proof: [
      { value: "Same day", label: "dry-in when the deck is open" },
      { value: "Per sheet", label: "decking price in the contract" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Shingle re-roof",
      text: "Tear-off to the deck, rotted sheathing replaced, deck re-nailed, full secondary water barrier and high-wind architectural shingles.",
      photo: P.shingles,
      price: "$14,000–$30,000",
    },
    {
      title: "Metal re-roof",
      text: "Standing seam or 5V crimp over high-temperature underlayment, fastened per the tested approval with coastal-grade fasteners.",
      photo: P.metal,
      price: "$28,000–$60,000",
    },
    {
      title: "Tile re-roof",
      text: "Concrete or clay tile over a full new underlayment system, the part that actually keeps water out, matched to HOA standards.",
      photo: P.tile,
      price: "$35,000–$75,000",
    },
    {
      title: "Roof repair",
      text: "Leaks traced from the attic and the roof, then flashing, boots and damaged covering repaired instead of sealant over the symptom.",
      photo: P.fastening,
      price: "$500–$4,000",
    },
  ],
  insurer: [
    {
      title: "Roof age",
      text: "Many carriers want an inspection on shingle roofs older than about 15 years and may decline renewal on older roofs. We give you a written condition summary either way.",
    },
    {
      title: "Wind mitigation credits",
      text: "Covering, deck attachment, roof-to-wall connection, roof shape and secondary water barrier all appear on the form. A re-roof is the cheapest moment to improve several at once.",
    },
    {
      title: "Paper that holds up",
      text: "Permit record, final inspection, product approvals and photos, organized for your wind mitigation and four-point inspections.",
    },
  ],
  ruleIntro:
    "Repairing a big part of a roof section can force the whole section up to current code. Since 2022 that depends on which code the roof was built to. Answer two questions to see which side of the rule you are likely on.",
  rule: {
    note: "A rough guide, not a code determination. We check your roof's permit history and the building department applies the rule; storm damage and insurance claims can add their own requirements.",
  },
  systemPhoto: P.tearOff,
  learn: [
    "roof-replacement-cost-florida",
    "metal-roof-vs-shingle-florida",
    "tile-roof-vs-shingle",
    "wind-mitigation-inspection-florida",
    "roof-inspection-for-insurance-florida",
    "rebuilding-after-hurricane-or-water-damage",
  ],
};
