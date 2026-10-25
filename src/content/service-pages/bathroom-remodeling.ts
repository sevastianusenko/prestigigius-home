/**
 * Content for the redesigned Bathroom Remodeling service page
 * (src/app/services/bathroom-remodeling/page.tsx). No client bathroom photos yet:
 * every image here is stock and is labelled "Illustrative" on the page.
 * Prices must stay consistent with src/content/services/interior-core.ts and the
 * bathroom articles in src/content/blog-posts (d.ts, i.ts, j.ts).
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  frameless: stock("bathroom-01"),
  spa: stock("bathroom-04"),
  twoSinks: stock("bathroom-03"),
  deepTub: stock("bathroom-05"),
  primary: stock("bathroom-06"),
  soakingTub: stock("bathroom-02"),
  greenVanity: stock("bathroom-07"),
};

export const bathroomPage = {
  seoTitle: "Bathroom Remodeling Port Charlotte FL | Walk-In Showers",
  seoDescription:
    "Walk-in showers, tub-to-shower conversions, primary baths and curbless senior baths in Port Charlotte & Sarasota. Flood-tested waterproofing, fixed price.",
  hero: {
    eyebrow: "Walk-in showers · tub-to-shower · primary baths",
    title: "Bathroom Remodeling in Port Charlotte & Sarasota",
    lead: "Most bathrooms fail behind the tile, years after the contractor has left. We build the part you never see first, photograph it, flood-test it for 24 hours, and only then set the tile you picked.",
    photos: [P.spa, P.soakingTub, P.greenVanity] as Photo[],
    proof: [
      { value: "24 h", label: "flood test before tile" },
      { value: "Fixed", label: "written price before demo" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Walk-in shower rebuild",
      text: "The old shower comes out to the studs or block and goes back larger, with a bench, a recessed niche, a sloped pan and frameless glass.",
      photo: P.frameless,
      price: "$14,000–$28,000",
      links: [
        { label: "Small-bath shower ideas", href: "/resources/walk-in-shower-ideas-small-bathrooms" },
        { label: "Tile edge trim", href: "/resources/shower-tile-edge-trim" },
      ],
    },
    {
      title: "Tub-to-shower conversion",
      text: "The bathroom job homeowners ask about most. The tub goes, the drain is converted, and a tiled walk-in shower with a low curb or no curb takes its place.",
      photo: P.deepTub,
      price: "$12,000–$22,000",
      links: [
        { label: "Conversion guide", href: "/resources/tub-to-shower-conversion" },
        { label: "Kit vs custom tile", href: "/resources/tub-to-shower-conversion-kit-vs-custom" },
      ],
    },
    {
      title: "Primary bath & layout change",
      text: "The unused garden tub comes out, the shower doubles in size, and drains move through the slab. Double vanity, better light, more storage.",
      photo: P.primary,
      price: "$35,000–$75,000",
      links: [
        { label: "Permits in Charlotte County", href: "/resources/permit-for-bathroom-or-kitchen-remodel-charlotte-county" },
      ],
    },
    {
      title: "Curbless & aging-in-place",
      text: "The slab is recessed for a zero-step entry, every wall gets blocking for grab bars, and the seat, toilet and vanity are set to the person using the room.",
      photo: P.twoSinks,
      price: "$20,000–$45,000",
      links: [
        { label: "Curbless showers", href: "/resources/curbless-shower" },
        { label: "Showers for seniors", href: "/resources/walk-in-shower-for-seniors" },
      ],
    },
  ],
  failures: [
    {
      title: "Tile over the wrong wall",
      text: "Backer board or, worse, drywall with no membrane. It looks perfect for a year, then the grout darkens and the closet next door starts to smell.",
    },
    {
      title: "A flat or cracked pan",
      text: "Without at least a quarter inch of slope per foot, water sits under the tile. A curb that is not level makes the glass door leak from day one.",
    },
    {
      title: "Grab bars with nothing behind them",
      text: "A bar screwed into backer board pulls out the first time someone leans on it. Solid blocking costs almost nothing before the wall closes.",
    },
  ],
  layersIntro:
    "A shower with a proper waterproofing system and one without look identical on the day they are finished. Tap a layer to see what it does and what we check before the next one goes on.",
  local: [
    {
      title: "Almost every house is on a slab",
      text: "Moving a drain or recessing a curbless shower means cutting concrete and re-pouring. We find the drain before we quote and price the slab work in writing.",
    },
    {
      title: "1970s–1990s plumbing",
      text: "Much of Charlotte County still has cast-iron drains and galvanized or polybutylene supply lines. We check them at the estimate and replace them while the wall is open.",
    },
    {
      title: "Humidity all year",
      text: "The exhaust fan is ducted outdoors, never into the attic, and sized for the room. It is one of the first things inspectors here look at.",
    },
    {
      title: "Condos and HOAs",
      text: "Association approval, insurance certificates, quiet hours and shared drain stacks. We prepare the application and plan the shower around what the building allows.",
    },
  ],
  costSplit: [
    { label: "Labor: demo, waterproofing, tile", share: "35–45%", width: 40 },
    { label: "Tile, glass and fixtures", share: "20–30%", width: 25 },
    { label: "Plumbing and electrical", share: "15–20%", width: 18 },
    { label: "Vanity, permits, disposal", share: "the rest", width: 17 },
  ],
  compare: {
    columns: ["Custom tile shower", "One-day acrylic system", "Kit installed by a handyman"],
    rows: [
      { label: "Typical installed cost (tub-to-shower)", values: ["$12,000–$22,000", "About $9,000–$15,000", "Lowest; kit from a few hundred to ~$3,000"] },
      { label: "Size and shape", values: ["Any size, bench, niche, curbless", "Set sizes, cut to fit", "Stock sizes only"] },
      { label: "Waterproofing", values: ["Full membrane, 24-hour flood test", "Sealed panels; ask what is behind them", "Depends entirely on the installer"] },
      { label: "Moving the drain or going curbless", values: ["Yes, slab cut and inspected", "Sometimes, at extra cost", "Rarely"] },
      { label: "Look", values: ["Tile and glass you choose", "Smooth or tile-pattern panels", "Smooth panels"] },
    ],
    note: "A well-installed acrylic system is a durable, low-maintenance shower, and we will tell you when it is the better buy. What matters most in any shower is the waterproofing behind it.",
    link: { label: "Kit vs custom tile, compared in detail", href: "/resources/tub-to-shower-conversion-kit-vs-custom" },
  },
  learn: [
    "tub-to-shower-conversion",
    "curbless-shower",
    "walk-in-shower-for-seniors",
    "walk-in-shower-ideas-small-bathrooms",
    "one-day-tub-to-shower-conversion",
    "permit-for-bathroom-or-kitchen-remodel-charlotte-county",
  ],
};
