/**
 * Content for the redesigned Exterior Remodeling & Stucco service page
 * (src/app/services/exterior-remodeling/page.tsx). Real job photos for stucco
 * around openings and entries; stock only for re-texture and roofline cards,
 * labelled "Illustrative" on the page.
 * Prices must stay consistent with src/content/services/exterior-core.ts.
 */
import { photos } from "../photos";
import { jobPhoto } from "../project-posts/helpers";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const BONITA = "bonita-springs-window-replacement";
const ARCHED = "arched-impact-windows-stucco-home";
const PARRISH = "parrish-two-story-block-home-impact-windows";
const VENICE = "venice-double-entry-doors-decorative-glass";
const GLASS = "sarasota-glass-entry-door";

const P = {
  turquoise: jobPhoto(ARCHED, 2, "windows-doors", "Turquoise stucco home with a new grid window and fresh paint around the opening", "A new window set in a freshly painted stucco wall."),
  bonitaPatch: jobPhoto(BONITA, 2, "windows-doors", "Replacement window with a fresh stucco patch band above the header, Bonita Springs", "Bonita Springs: stucco patched around the new frame, ready for paint."),
  bonitaPatch2: jobPhoto(BONITA, 3, "windows-doors", "New horizontal window with fresh stucco repair at the sill and header, Bonita Springs", "Bonita Springs: fresh stucco at the header and sill."),
  venice: jobPhoto(VENICE, 1, "windows-doors", "White double entry doors with decorative glass in Venice, FL", "Venice: double entry doors with decorative glass."),
  glassEntry: jobPhoto(GLASS, 1, "windows-doors", "White entry door with a full glass panel on a covered porch, Sarasota", "Sarasota: a new glass entry door on the front porch."),
  parrishFlash: jobPhoto(PARRISH, 2, "windows-doors", "Rough openings wrapped in red liquid-applied flashing with black impact windows installed, Parrish FL", "Parrish: every opening flashed before windows go in and stucco goes on."),
  retexture: stock("siding-stucco-02"),
  roofline: stock("exterior-02"),
};

export type Sequence = { label: string; result: string; tone: "good" | "bad"; steps: { title: string; text: string; redo?: boolean }[] };

export const exteriorPage = {
  seoTitle: "Stucco Repair & Exterior Remodeling Port Charlotte FL",
  seoDescription:
    "Stucco crack repair, re-texture, soffit and fascia, entry makeovers and curb appeal remodels in Port Charlotte & SWFL. We find the water first. Licensed, free estimate.",
  hero: {
    eyebrow: "Stucco · soffit & fascia · entries · curb appeal",
    title: "Stucco Repair & Exterior Remodeling in Port Charlotte",
    lead: "Most homes here are block with a thin stucco skin, and the Gulf climate is hard on it. We find where the water is getting in before anything gets patched or painted, then give the outside of the house the look you want.",
    photos: [P.turquoise, P.bonitaPatch, P.venice] as Photo[],
    proof: [
      { value: "Water", label: "found before we patch" },
      { value: "Own", label: "window & door crew" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Stucco crack & opening repair",
      text: "Cracks routed and bonded, loose stucco cut out, window and door perimeters resealed, and the patch hand-matched to your texture.",
      photo: P.bonitaPatch2,
      real: true,
      price: "$1,500–$7,000",
    },
    {
      title: "Whole-house re-texture",
      text: "One uniform finish over every elevation, ending the patchwork of old repairs, with new trim bands and full exterior paint.",
      photo: P.retexture,
      real: false,
      price: "$12,000–$32,000",
    },
    {
      title: "Soffit, fascia & gutters",
      text: "Rotted wood fascia replaced and wrapped, vented aluminum or vinyl soffit, gutters reset, and the gaps pests were using closed.",
      photo: P.roofline,
      real: false,
      price: "$4,000–$15,000",
    },
    {
      title: "Front entry makeover",
      text: "Impact entry door with sidelites, columns and arch reshaped, new lighting and a paver walk, tied into the rest of the house.",
      photo: P.glassEntry,
      real: true,
      price: "$8,000–$30,000",
    },
  ],
  sequenceIntro:
    "Window replacement disturbs the stucco around every opening. Do the openings after the paint and you pay for the patch and the paint twice. Flip between the two to see why we plan the whole exterior as one sequence.",
  sequences: [
    {
      label: "Our order",
      tone: "good",
      result: "Every surface is finished once.",
      steps: [
        { title: "Find the water", text: "Moisture readings and sounding around cracks and openings, before any price is final." },
        { title: "Windows, doors and garage door", text: "New openings go in first, flashed and anchored to their product approvals." },
        { title: "Stucco repair or re-texture", text: "Patches around new frames and failing areas, blended or re-textured as one finish." },
        { title: "Roofline", text: "Fascia, soffit and gutters, so roof water and pests stay off the top of the wall." },
        { title: "Paint, last", text: "Primer and finish coats over cured stucco, in your HOA-approved colors." },
      ],
    },
    {
      label: "The costly order",
      tone: "bad",
      result: "Stucco and paint paid for twice.",
      steps: [
        { title: "Patch the cracks", text: "Cracks sealed without finding out why they opened." },
        { title: "Paint the house", text: "Fresh color over the patches. Looks great for now." },
        { title: "New impact windows next year", text: "Every opening is cut out, and the stucco around it breaks.", redo: true },
        { title: "Patch again", text: "New stucco bands around every window, matched to an older texture.", redo: true },
        { title: "Repaint again", text: "The new patches will not match the faded paint, so whole elevations get repainted.", redo: true },
      ],
    },
  ] satisfies Sequence[],
  layersPhoto: P.parrishFlash,
  learn: [
    "stucco-repair-florida",
    "florida-stucco-house-colors",
    "how-to-paint-stucco",
    "exterior-window-trim-stucco",
    "what-is-a-window-buck",
    "front-door-replacement-cost",
  ],
};
