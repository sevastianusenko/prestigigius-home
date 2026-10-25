/**
 * Content for the redesigned Outdoor Living service page
 * (src/app/services/outdoor-living/page.tsx). Kitchens, pavers and covers are stock
 * and labelled "Illustrative"; the indoor-outdoor section uses real window and door
 * jobs (we did the openings there, not the patio structures).
 * Prices must stay consistent with src/content/services/interior-finish.ts.
 */
import { photos } from "../photos";
import { jobPhoto } from "../project-posts/helpers";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const KITCHEN = "sarasota-kitchen-pass-through-window";
const FRENCH = "sarasota-french-doors-four-panel-slider";

const P = {
  summerKitchen: stock("outdoor-living-01"),
  poolKitchen: stock("outdoor-living-02"),
  grill: stock("outdoor-living-04"),
  pavers: stock("outdoor-living-06"),
  courtyard: stock("outdoor-living-07"),
  coveredDining: stock("lanai-02"),
  coveredGrill: stock("lanai-03"),
  passThrough: jobPhoto(KITCHEN, 2, "windows-doors", "Pass-through window with a wide ledge seen from the lanai side, Sarasota", "Sarasota: a pass-through window from the kitchen to the lanai, with a serving ledge."),
  slider: jobPhoto(FRENCH, 2, "windows-doors", "Four-panel sliding glass door opening onto a covered brick-paver patio, Sarasota County", "Sarasota County: a four-panel slider opening the house to the patio."),
};

export type BuilderOption = { label: string; low: number; high: number };

export const outdoorPage = {
  seoTitle: "Outdoor Kitchens, Pavers & Patio Covers Port Charlotte FL",
  seoDescription:
    "Summer kitchens, paver patios and pool decks, pergolas and insulated patio covers in Port Charlotte & SWFL. Engineered for wind, permitted, one contract.",
  hero: {
    eyebrow: "Summer kitchens · pavers · pergolas · patio covers",
    title: "Outdoor Living in Port Charlotte & Cape Coral",
    lead: "From October to May the backyard is part of the house. We build the shade, the dry spot for the 4 p.m. storm and the place to cook, with the pavers, structure, gas and electrical under one contract.",
    photos: [P.summerKitchen, P.grill, P.courtyard] as Photo[],
    proof: [
      { value: "Permits", label: "and wind engineering by us" },
      { value: "1", label: "contract for every trade" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Outdoor & summer kitchens",
      text: "Block or steel-frame island, UV-stable stone or porcelain top, 304 stainless appliances, and gas and power run to code.",
      photo: P.poolKitchen,
      price: "$15,000–$60,000",
    },
    {
      title: "Paver patios & pool decks",
      text: "Compacted rock or shell base, edge restraint and polymeric sand, in travertine, concrete or porcelain that stays cooler underfoot.",
      photo: P.pavers,
      price: "$15–$32 / sq ft",
    },
    {
      title: "Pergolas",
      text: "Powder-coated aluminum or treated wood on engineered footings, with fixed or adjustable louvers, lights and fans.",
      photo: P.coveredDining,
      price: "$8,000–$30,000",
    },
    {
      title: "Insulated patio covers",
      text: "A solid, rain-proof roof with a finished ceiling, recessed lights and fan pre-wire, flashed and engineered to the house.",
      photo: P.coveredGrill,
      price: "$12,000–$40,000",
    },
  ],
  gulf: [
    {
      title: "Wind loads near the coast",
      text: "Design wind speeds here often exceed 150 mph. The covers we see fail after storms are almost always unpermitted kits with weak attachments to the house.",
    },
    {
      title: "Sandy soil and summer rain",
      text: "Pavers without a compacted base and edge restraint shift within a year. The base is most of the work, and it is what you never see.",
    },
    {
      title: "Salt air and full sun",
      text: "304 or marine-grade 316 stainless, block or aluminum frames instead of wood, and no quartz in direct sun; it can discolor.",
    },
  ],
  builder: {
    pavers: { low: 15, high: 32, min: 0, max: 1200, start: 400 },
    covers: [
      { label: "No cover", low: 0, high: 0 },
      { label: "Aluminum pergola", low: 8000, high: 30000 },
      { label: "Insulated patio cover", low: 12000, high: 40000 },
    ] satisfies BuilderOption[],
    kitchens: [
      { label: "No kitchen", low: 0, high: 0 },
      { label: "Grill island", low: 15000, high: 40000 },
      { label: "Full summer kitchen", low: 40000, high: 60000 },
    ] satisfies BuilderOption[],
    note: "Typical 2026 Charlotte, Sarasota and Lee County ranges. Long gas, water and electrical runs from the house are the usual hidden cost, so we measure and price them in your estimate. Permit review adds about 2 to 6 weeks before work starts.",
  },
  connection: {
    intro:
      "Our crew started out installing windows and doors, so the openings between the house and the outdoor space are our home turf. These are two of our own jobs.",
    jobs: [
      { photo: P.passThrough, href: `/projects/${KITCHEN}`, title: "A pass-through window to the lanai", text: "A PGT pass-through over the kitchen sink turns the lanai counter into a serving bar." },
      { photo: P.slider, href: `/projects/${FRENCH}`, title: "A four-panel slider to the patio", text: "Wide glass that opens the living room to a covered paver patio." },
    ],
  },
  learn: [
    "impact-sliding-glass-doors",
    "sliding-french-doors-vs-sliding-glass-doors",
    "sliding-glass-door-replacement-cost",
    "impact-windows-vs-hurricane-shutters",
    "cost-to-remodel-a-house-in-florida",
    "whole-house-renovation-checklist-florida",
  ],
};
