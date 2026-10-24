/**
 * Content for the redesigned Lanai Enclosures service page
 * (src/app/services/lanai-enclosures/page.tsx). Real job photos where we
 * have them (pool-lanai sliders, the Manatee lanai wall, a Sarasota pool home);
 * stock only for rescreen / cage cards, labelled "Illustrative" on the page.
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

const POOL = "pool-lanai-sliding-glass-doors";
const LANAI = "manatee-county-lanai-wall-block-rebuild";
const SPOOL = "sarasota-pool-home-window-replacement";

const P = {
  screened: stock("lanai-01"),
  evening: stock("lanai-04"),
  sliders: jobPhoto(POOL, 1, "lanai", "Two new white sliding glass doors side by side on a covered pool lanai", "Two new sliders on a covered pool lanai."),
  slider3: jobPhoto(POOL, 3, "lanai", "New white sliding glass door set in a stucco wall under a lanai ceiling", "A new slider under the lanai roof."),
  slider2: jobPhoto(POOL, 2, "lanai", "New sliding glass door with the pool lanai reflected in the glass", "A new slider opening onto the pool lanai."),
  slider4: jobPhoto(POOL, 4, "lanai", "Close view of a new white sliding glass door frame on a pool lanai", "Clean frame and sill on a new lanai slider."),
  poolWin: jobPhoto(SPOOL, 1, "windows-doors", "New double-hung windows facing the pool deck of a Sarasota home", "Sarasota: new windows facing the pool deck."),
  slider5: jobPhoto(POOL, 5, "lanai", "Sliding glass door on a pool lanai with the pool visible through the glass", "Pool view through the new slider."),
  cageWall: jobPhoto(LANAI, 4, "lanai", "Rebuilt stucco block lanai wall with new windows under a bronze pool cage frame, Manatee County", "Manatee County: the rebuilt lanai wall under the pool cage."),
  lanaiBefore: jobPhoto(LANAI, 1, "lanai", "Old aluminum-framed lanai wall with glass panels before replacement, Manatee County", "Before: the original aluminum lanai wall."),
  lanaiAfter: jobPhoto(LANAI, 3, "lanai", "New stucco block wall with storm-rated windows and a full-lite door, Manatee County", "After: block wall, storm-rated windows and door."),
  poolHome: jobPhoto(SPOOL, 2, "windows-doors", "Pool and back of a light blue Sarasota home with new windows", "Sarasota: new windows on a pool home."),
};

export type LanaiPath = {
  title: string;
  price: string;
  time: string;
  permit: string;
  text: string;
  href?: string;
};

export const lanaiPage = {
  seoTitle: "Lanai Enclosures Port Charlotte FL | Pool Cages",
  seoDescription:
    "Pool cage rescreens and engineered rebuilds, lanai remodels and under-roof lanai conversions with impact glass in Port Charlotte, North Port & SWFL. Permitted. Free estimate.",
  hero: {
    eyebrow: "Rescreens · pool cages · lanai conversions",
    title: "Lanai Enclosures in Port Charlotte",
    lead: "From October to May the lanai is the room you live in. We check the frame before we sell you screen, rebuild cages to current wind engineering, and turn under-roof lanais into real rooms with impact glass set by our own window crew.",
    photos: [P.cageWall, P.slider4, P.poolHome] as Photo[],
    proof: [
      { value: "Frame", label: "checked before screen" },
      { value: "Own", label: "window crew for the glass" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Rescreen & repair",
      text: "New screen, splines and stainless fasteners on a sound frame, with bent members and loose gutters swapped where needed.",
      photo: P.screened,
      real: false,
      price: "$2,500–$8,000",
    },
    {
      title: "Engineered pool cage rebuild",
      text: "The old cage comes down and a new one goes up from sealed drawings for your wind zone, often taller and with heavier beams.",
      photo: P.evening,
      real: false,
      price: "$16,000–$45,000",
    },
    {
      title: "Under-roof lanai conversion",
      text: "Screen out, knee walls or full impact glass in, insulated ceiling, AC and a finished floor: a room you use every month of the year.",
      photo: P.lanaiAfter,
      real: true,
      price: "$25,000–$70,000",
    },
    {
      title: "Lanai remodel",
      text: "Keep it open-air but better: new floor and ceiling, fans and lights, and the old patio door upgraded to an impact slider.",
      photo: P.sliders,
      real: true,
      price: "$12,000–$40,000",
    },
  ],
  lessons: [
    {
      title: "Cages built light came down first",
      text: "Ian, Helene and Milton left bent beams, popped gutters and screen torn out in sheets. Many of those cages were built to lighter 1990s plans.",
    },
    {
      title: "Corrosion hides in the connections",
      text: "Bleeding screws and chalky aluminum mean the fasteners holding the cage together are weakening, long before anything looks bent.",
    },
    {
      title: "New screen on a failing frame is wasted",
      text: "Fresh mesh looks great until the next storm finds the weak beam. That is why we inspect the structure before we talk about screen.",
    },
  ],
  finderIntro:
    "Answer two questions and we will show you which path usually fits, with typical 2026 pricing. At the free visit we price every path that makes sense, in writing, so you can compare.",
  finder: {
    open: {
      sound: {
        title: "Rescreen and repair",
        price: "$2,500–$8,000",
        time: "1–3 days",
        permit: "Usually not required for a straight rescreen",
        text: "The frame can carry new screen. You get new mesh, splines and stainless fasteners, with any damaged members swapped. A like-new enclosure for the least money.",
      },
      damaged: {
        title: "Engineered pool cage rebuild",
        price: "$16,000–$45,000",
        time: "1–3 weeks on site, after 3–6 weeks of approvals",
        permit: "Yes, with sealed drawings for your exposure",
        text: "If beams are bent, gutters separated or the cage moved in a storm, new screen will not hold. A new enclosure is built to today's wind requirements.",
      },
    },
    room: {
      under: {
        title: "Under-roof lanai conversion",
        price: "$25,000–$70,000",
        time: "4–8 weeks",
        permit: "Yes, plus energy calculations and a flood-zone check",
        text: "Your lanai already has a real roof over it, so it can become conditioned space with knee walls or full impact glass, insulation, AC and a finished floor.",
      },
      cage: {
        title: "A Florida room addition",
        price: "$45,000–$95,000",
        time: "8–12 weeks after permit",
        permit: "Yes, with engineered plans",
        text: "A screen cage or a separate panel roof is not built to be a room. Getting AC space here means a new roof structure and walls, which is a Florida room addition.",
        href: "/services/home-additions",
      },
    },
  } satisfies { open: Record<"sound" | "damaged", LanaiPath>; room: Record<"under" | "cage", LanaiPath> },
  job: {
    before: P.lanaiBefore,
    after: P.lanaiAfter,
    projectSlug: LANAI,
    quoteName: "Ronald S.",
    gallery: [
      { photo: P.slider3, href: `/projects/${POOL}` },
      { photo: P.slider5, href: `/projects/${POOL}` },
      { photo: P.slider2, href: `/projects/${POOL}` },
      { photo: P.poolWin, href: `/projects/${SPOOL}` },
    ],
  },
  learn: [
    "impact-sliding-glass-doors",
    "sliding-glass-door-replacement-cost",
    "sliding-french-doors-vs-sliding-glass-doors",
    "impact-windows-vs-hurricane-shutters",
    "rebuilding-after-hurricane-or-water-damage",
    "hurricane-impact-windows-cost",
  ],
};
