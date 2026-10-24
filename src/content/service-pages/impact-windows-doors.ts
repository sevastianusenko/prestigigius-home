/**
 * Content for the redesigned Impact Windows & Doors service page
 * (src/app/services/impact-windows-doors/page.tsx). Real job photos only
 * (public/images/projects, EXIF stripped); stock is not used on this page.
 * Prices must stay consistent with src/content/services/exterior-core.ts.
 */
import { jobPhoto } from "../project-posts/helpers";
import type { Photo } from "../types";

const P = {
  sliderCanal: jobPhoto("siesta-key-waterfront-new-build-windows-sliders", 7, "windows-doors", "Black-frame multi-panel impact sliding door wall facing a canal in a new Siesta Key home", "Siesta Key: a black-frame multi-panel slider set before drywall, facing the canal."),
  siestaExterior: jobPhoto("siesta-key-waterfront-new-build-windows-sliders", 1, "windows-doors", "Two-story block home with black-frame impact windows on Siesta Key", "Siesta Key: windows set in white-bucked openings before stucco."),
  veniceDoors: jobPhoto("venice-double-entry-doors-decorative-glass", 1, "windows-doors", "White double entry doors with decorative glass in Venice, FL", "Venice: double entry doors with decorative glass and a matte black handleset."),
  parrishFlash: jobPhoto("parrish-two-story-block-home-impact-windows", 2, "windows-doors", "Rough openings wrapped in red liquid-applied flashing with black impact windows installed, Parrish FL", "Parrish: every opening wrapped in liquid-applied flashing before the window goes in."),
  parrishFront: jobPhoto("parrish-two-story-block-home-impact-windows", 7, "windows-doors", "Front of a new two-story block home with impact windows in Parrish, FL", "Parrish: a full new build, every opening flashed and set by our crew."),
  northPortOpening: jobPhoto("north-port-new-construction-pgt-sliding-doors", 1, "windows-doors", "Wide block opening prepared for a sliding glass door with a level on the sill, North Port", "North Port: the opening is checked for level and square before anything is set."),
  northPortSlider: jobPhoto("north-port-new-construction-pgt-sliding-doors", 4, "windows-doors", "Black-frame PGT impact sliding glass door with labels installed in a block opening, North Port", "North Port: PGT sliding glass door anchored into the block opening."),
  pcLabel: jobPhoto("port-charlotte-pgt-windows-pool-bath-door", 4, "windows-doors", "New single-hung window with PGT product label still on the glass, Port Charlotte", "Port Charlotte: the product label stays on until the inspector has seen it."),
  pcWindow: jobPhoto("port-charlotte-pgt-windows-pool-bath-door", 3, "windows-doors", "White single-hung window with colonial grids in a stucco wall, Port Charlotte", "Port Charlotte: replacement single-hung with colonial grids."),
  pcPoolDoor: jobPhoto("port-charlotte-pgt-windows-pool-bath-door", 5, "windows-doors", "White door with full-height frosted glass from the lanai into a pool bath, Port Charlotte", "Port Charlotte: a frosted-glass pool-bath door from the lanai."),
  bonitaPatch: jobPhoto("bonita-springs-window-replacement", 2, "windows-doors", "Replacement window with a fresh stucco patch band above the header, Bonita Springs", "Bonita Springs: stucco patched around the new frame, ready for paint."),
  poolSliders: jobPhoto("pool-lanai-sliding-glass-doors", 1, "windows-doors", "Two white sliding glass doors side by side on a covered pool lanai", "Two new sliding glass doors on a covered pool lanai."),
  arched: jobPhoto("arched-impact-windows-stucco-home", 1, "windows-doors", "Arched eyebrow window in a turquoise stucco wall", "An arched (eyebrow) window set in a stucco wall."),
  lakewoodArch: jobPhoto("lakewood-ranch-arched-transom-windows", 2, "windows-doors", "Two arched transom windows above rectangular windows on a stucco home with tile roof, Lakewood Ranch", "Lakewood Ranch: arched transoms over twin windows."),
  modernDoor: jobPhoto("modern-double-entry-door-new-construction", 2, "windows-doors", "Modern black double entry door with vertical glass slots in a new block home", "A modern black double entry door with vertical glass lites."),
  lanaiBefore: jobPhoto("manatee-county-lanai-wall-block-rebuild", 1, "lanai", "Old aluminum-framed lanai wall with glass panels before replacement, Manatee County", "Before: the original aluminum lanai wall."),
  lanaiAfter: jobPhoto("manatee-county-lanai-wall-block-rebuild", 3, "lanai", "New stucco block wall with storm-rated windows and a full-lite door, Manatee County", "After: block wall, storm-rated windows and door."),
} satisfies Record<string, Photo>;

export const impactPage = {
  seoTitle: "Impact Windows & Doors Port Charlotte & Sarasota FL",
  seoDescription:
    "Impact windows, sliding glass doors and entry doors installed by career installers. Real SWFL jobs, written per-opening pricing, permits included. Free estimate.",
  hero: {
    eyebrow: "Impact windows · sliding glass doors · entry doors",
    title: "Impact Windows & Doors in Port Charlotte & Sarasota",
    lead: "Before we had our own company, we spent years installing windows and doors for other contractors. Today our own crew measures, permits and installs every opening, from a single slider to a whole new build.",
    photos: [P.sliderCanal, P.veniceDoors, P.parrishFlash] as Photo[],
    proof: [
      { value: "5.0", label: "Google rating" },
      { value: "A+", label: "BBB rating" },
      { value: "Own", label: "crew on every install" },
    ],
  },
  products: [
    {
      title: "Impact windows",
      text: "Single-hung, horizontal roller, casement, picture and arched units in vinyl or aluminum, with laminated impact glass rated for your address.",
      photo: P.pcWindow,
      price: "$1,200–$3,800 per opening",
      links: [
        { label: "Single vs double hung", href: "/resources/single-hung-vs-double-hung-windows" },
        { label: "Casement windows", href: "/resources/casement-windows-florida" },
      ],
    },
    {
      title: "Impact sliding glass doors",
      text: "Two-panel to multi-panel sliders, from a lanai swap to a full glass wall on the water. Wide units are engineered for the opening.",
      photo: P.northPortSlider,
      price: "$4,500–$14,000 per door",
      links: [
        { label: "Slider sizes & panels", href: "/resources/impact-sliding-glass-doors" },
        { label: "Replacement cost", href: "/resources/sliding-glass-door-replacement-cost" },
      ],
    },
    {
      title: "Entry & French doors",
      text: "Impact front doors, doubles with decorative glass, French doors to the lanai and modern pivot-look entries, set with a sloped, sealed sill.",
      photo: P.veniceDoors,
      price: "$2,800–$15,000 per door",
      links: [
        { label: "Outswing vs inswing", href: "/resources/outswing-vs-inswing-front-door" },
        { label: "Entry doors with glass", href: "/resources/front-entry-doors-with-glass" },
      ],
    },
    {
      title: "Specialty openings",
      text: "Arched and eyebrow windows, transoms, pool-bath doors with privacy glass and kitchen pass-through windows to the lanai.",
      photo: P.lakewoodArch,
      price: "Priced per opening",
      links: [
        { label: "Arched windows", href: "/resources/arched-windows" },
        { label: "Tempered vs laminated", href: "/resources/laminated-vs-tempered-glass" },
      ],
    },
  ],
  why: [
    {
      title: "No more shutter season",
      text: "Impact glass is protection that is always in place. No panels in the garage, no ladder the day before a storm, nothing to forget when you travel.",
    },
    {
      title: "Insurance credit, documented",
      text: "With every opening protected, a wind-mitigation inspector can credit opening protection. We hand you the product approvals and permit paperwork the inspector asks for.",
    },
    {
      title: "Cooler, quieter rooms",
      text: "Laminated glass with Low-E coatings cuts heat gain, UV fading and street noise. Most homeowners notice the quiet on the first night.",
    },
  ],
  install: [
    { n: "01", title: "Measure the opening, not the old window", text: "An installer, not a salesperson, measures each opening and checks it for level, square and soft wood.", photo: P.northPortOpening },
    { n: "02", title: "Seal the opening first", text: "Rough openings get liquid-applied flashing or tape and a sill that drains out, so water has a path out before the frame goes in.", photo: P.parrishFlash },
    { n: "03", title: "Anchor to the approval", text: "Each unit is fastened into the block or buck with the anchor type and spacing its Florida Product Approval requires for your wind zone.", photo: P.northPortSlider },
    { n: "04", title: "Labels stay on for the inspector", text: "Product labels stay on the glass until the county inspector has checked them against the permit.", photo: P.pcLabel },
    { n: "05", title: "Finish the wall, inside and out", text: "Stucco is patched around the frame and interior returns are trimmed, so the new opening looks like it was always there.", photo: P.bonitaPatch },
  ],
  beforeAfter: {
    before: P.lanaiBefore,
    after: P.lanaiAfter,
    projectSlug: "manatee-county-lanai-wall-block-rebuild",
    quoteName: "Ronald S.",
  },
  gallery: [P.siestaExterior, P.poolSliders, P.arched, P.modernDoor, P.pcPoolDoor, P.parrishFront] as Photo[],
  compare: {
    columns: ["Impact windows & doors", "Hurricane shutters / panels", "Storm windows"],
    rows: [
      { label: "Protection when you are away", values: ["Always on", "Only if someone closes them", "None for hurricanes"] },
      { label: "Effort before a storm", values: ["None", "Hours of hanging panels", "None"] },
      { label: "Wind-mitigation credit", values: ["Yes, every opening", "Yes, if all openings are covered", "No"] },
      { label: "Noise, heat and UV", values: ["Big improvement", "No change", "Some improvement"] },
      { label: "Typical cost", values: ["$1,200–$3,800 per opening", "Lower up front", "Lowest"] },
    ],
    note: "Hurricane shutters are a legitimate option on a tight budget. Storm windows are a weather layer, not hurricane protection.",
    link: { label: "Impact windows vs hurricane shutters", href: "/resources/impact-windows-vs-hurricane-shutters" },
  },
  learn: [
    "pgt-vs-es-vs-cws-impact-windows",
    "hurricane-impact-windows-cost",
    "impact-windows-vs-hurricane-windows",
    "impact-sliding-glass-doors",
    "front-entry-doors-with-glass",
    "what-is-a-window-buck",
  ],
};
