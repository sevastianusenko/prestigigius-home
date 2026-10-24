import type { Photo, Project } from "./types";
import { testimonials } from "./testimonials";
import { postsA } from "./project-posts/a";
import { postsB } from "./project-posts/b";
import { postsC } from "./project-posts/c";
import { postsD } from "./project-posts/d";

/**
 * CUSTOMER STORIES — every fact below comes from a real, published customer review
 * (Google, Yelp, BBB; see testimonials.ts and prestigious-home-improvements-research.md).
 * Nothing is added beyond what the homeowner wrote, except general statements about
 * how we handle this kind of job (clearly worded as such).
 *
 * `sample: true` here means the PHOTOS are illustrative stock images, not photos of the
 * actual job. The UI then shows a single photo labelled "Illustrative photo" and never a
 * before/after slider. Replace photos (and set sample: false) when the client sends real
 * job photos. Previous fictional case studies are archived outside the repo.
 */

const px = (id: string, pexelsId: number, category: Photo["category"], alt: string): Photo => ({
  id,
  src: `https://images.pexels.com/photos/${pexelsId}/pexels-photo-${pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=1600`,
  alt,
  category,
  credit: "Pexels",
});

const P = {
  windows: px("story-windows", 7031616, "windows-doors", "Illustrative photo: bright living room with large new windows"),
  sliders: px("story-sliders", 8134753, "windows-doors", "Illustrative photo: wide glass sliding doors opening to a pool deck"),
  entryDoor: px("story-entryDoor", 7446065, "windows-doors", "Illustrative photo: double entry doors with decorative glass"),
  windowInstall: px("story-windowInstall", 5691557, "windows-doors", "Illustrative photo: installer measuring a sill while setting a window"),
  lanaiRoom: px("story-lanaiRoom", 8583601, "lanai", "Illustrative photo: enclosed room with glass doors leading into the house"),
  blockWork: px("story-blockWork", 6474123, "lanai", "Illustrative photo: crew finishing the interior of an enclosed room"),
  siding: px("story-siding", 20296321, "siding-stucco", "Illustrative photo: home with new lap siding and white trim"),
  shutters: px("story-shutters", 5101388, "siding-stucco", "Illustrative photo: window framed by shutters on a light facade"),
} satisfies Record<string, Photo>;

function review(name: string): Project["quote"] {
  const t = testimonials.find((r) => r.name === name);
  if (!t) throw new Error(`projects.ts: testimonial "${name}" not found`);
  return { text: t.text, name: t.name };
}

/** Review-only customer stories (illustrative photos). */
const reviewStories: Project[] = [
  {
    slug: "manatee-county-lanai-wall-block-rebuild",
    title: "Replacing a 1985 Aluminum Lanai Wall With Block and Storm-Rated Glass",
    city: "Manatee County",
    date: "2026-02",
    serviceSlugs: ["lanai-screen-enclosures", "impact-windows-doors", "exterior-remodeling"],
    summary:
      "An original aluminum lanai wall and storm door from about 1985 replaced with a reinforced block wall, storm-rated windows and a storm-rated door, finished inside to match the house.",
    storyTitle: "A lanai wall that had to go",
    body: [
      "The homeowners met us at the Sarasota home show. Their house was built around 1985, and the back of the lanai was closed in with the original aluminum wall and a storm door. They wanted a real, storm-ready wall in its place.",
      "In the homeowner's words, the job required a new footing reinforced with rebar and tied into the original footer, concrete block walls with grout-filled cores and rebar running from the footing into precast concrete headers, and stainless steel connections to the roof trusses. The new windows and door are storm rated, and the interior was finished to match the room's walls, paint color and texture.",
      "Because this was a structural change, the Manatee County Building Department review took about three months before work could start in February 2026. The homeowner noted that permits and inspection scheduling stretched the timeline, and that the finished work used quality materials at a reasonable price.",
    ],
    scope: [
      "Removal of the original aluminum lanai wall and storm door",
      "New footing with rebar tied into the original footer",
      "Concrete block wall with grout-filled, rebar-reinforced cores",
      "Precast concrete headers and stainless steel roof truss connections",
      "Storm-rated windows and door",
      "Interior finished to match existing walls, paint and texture",
      "Manatee County permit and inspections",
    ],
    duration: "",
    before: P.blockWork,
    after: P.lanaiRoom,
    gallery: [P.blockWork],
    sample: true,
    quote: review("Ronald S."),
    faqs: [
      {
        q: "Can an old aluminum lanai wall be replaced with block?",
        a: "Usually yes, but it is a structural change. Expect engineering, a building permit and a new footing, because a patio slab edge is rarely built to carry a masonry wall. We check what is under the slab before we price the job.",
      },
      {
        q: "Why can the permit take longer than the build?",
        a: "Structural work gets a full plan review, and review times vary by county and season. We use that time to order windows and doors so the build moves quickly once the permit is issued.",
      },
    ],
  },
  {
    slug: "impact-windows-sliders-entry-doors",
    title: "8 Impact Windows, 2 Large Sliding Glass Doors and 2 Entry Doors",
    city: "Sarasota",
    date: "2026-05",
    serviceSlugs: ["impact-windows-doors"],
    summary:
      "A whole-house opening upgrade: eight impact windows, two large impact sliding glass doors and two impact entry doors.",
    storyTitle: "Every opening, impact rated",
    body: [
      "This homeowner had us replace eight windows, two large sliding glass doors and two entry doors, all with impact-rated units.",
      "The homeowner called the crew very professional and the quality of the work outstanding, and added that installation is the key to getting good results from good windows and doors.",
      "On a package like this we measure every opening, order units that carry Florida product approval for the home's wind zone, pull the permit and replace one opening at a time so the house is closed up each night.",
    ],
    scope: ["8 impact windows", "2 large impact sliding glass doors", "2 impact entry doors"],
    duration: "",
    before: P.windows,
    after: P.windows,
    gallery: [P.sliders, P.entryDoor],
    sample: true,
    quote: review("Dennis B."),
    faqs: [
      {
        q: "Will my house be left open overnight during the swap?",
        a: "No. We remove and replace one opening at a time, and anything that cannot be finished the same day is secured before the crew leaves.",
      },
      {
        q: "Do impact windows help with my insurance premium?",
        a: "They can. With every opening protected, a wind-mitigation inspection can credit opening protection, and many insurers price that in. Ask your agent what it would mean for your policy.",
      },
    ],
  },
  {
    slug: "windows-doors-siding-shutters",
    title: "Windows, Doors, Siding and Shutters for One Home",
    city: "Southwest Florida",
    date: "2026-04",
    serviceSlugs: ["impact-windows-doors", "siding", "exterior-remodeling"],
    summary:
      "New windows and doors, new siding and new shutters, handled as one exterior project.",
    storyTitle: "One exterior, one crew",
    body: [
      "Nick and Ashley had Tim and the crew replace their windows and doors and then take on the siding and shutters as well.",
      "Their review says they could not be happier with everything done to make the house a new home.",
      "When windows and siding are done together, we set and flash the new windows into the wall wrap first and clad over them second, which avoids cutting into new siding later.",
    ],
    scope: ["Window replacement", "Door replacement", "New siding", "Shutters"],
    duration: "",
    before: P.siding,
    after: P.siding,
    gallery: [P.shutters],
    sample: true,
    quote: review("Nick & Ashley O."),
  },
  {
    slug: "exterior-doors-sliders-window-sarasota",
    title: "Exterior Doors, Two Sets of Sliders and a Window in Sarasota",
    city: "Sarasota",
    date: "2025-08",
    serviceSlugs: ["impact-windows-doors"],
    summary:
      "Exterior door replacement, including two sets of sliding glass doors, plus one window, chosen out of four quotes.",
    storyTitle: "Chosen out of four quotes",
    body: [
      "These Sarasota homeowners collected quotes from four companies before hiring us to replace their exterior doors, including two sets of sliding glass doors, and one window.",
      "They wrote that Tim and Vlad installed everything to county building code, worked from a clear plan for the order of the installation, and that Tim kept them updated on supply timelines and scheduled around their calendar.",
    ],
    scope: ["Exterior door replacement", "2 sets of sliding glass doors", "1 window", "Installation to county building code"],
    duration: "",
    before: P.sliders,
    after: P.sliders,
    gallery: [P.entryDoor],
    sample: true,
    quote: review("Jwb M."),
  },
  {
    slug: "window-reframing-slider-leak-sarasota",
    title: "Window Replacement, Reframing and a Slider Leak Fix in Sarasota",
    city: "Sarasota",
    date: "2025-09",
    serviceSlugs: ["impact-windows-doors", "exterior-remodeling"],
    summary: "Replaced and reframed windows, and tracked down and fixed a leak near a sliding glass door.",
    storyTitle: "Fixing the cause, not the symptom",
    body: [
      "This Sarasota homeowner used us for several jobs: replacing windows, reframing windows, and fixing a leak near a slider.",
      "The review describes our approach as analytical: thinking through the options on each job and choosing the one that actually solves the problem, at fair pricing.",
    ],
    scope: ["Window replacement", "Window reframing", "Leak repair near a sliding glass door"],
    duration: "",
    before: P.windowInstall,
    after: P.windowInstall,
    gallery: [],
    sample: true,
    quote: review("Fred B."),
  },
  {
    slug: "sliding-glass-door-installation",
    title: "Sliding Glass Door Installation, Start to Finish",
    city: "Southwest Florida",
    date: "2026-05",
    serviceSlugs: ["impact-windows-doors"],
    summary: "New sliding glass doors installed by Tim Fomin and the crew.",
    storyTitle: "Smooth from start to finish",
    body: [
      "This homeowner hired us to install new sliding glass doors.",
      "The homeowner described the installation by Tim Fomin and the team as professional, smooth and stress-free, and recommended us to anyone looking for an experienced slider installer.",
    ],
    scope: ["Sliding glass door installation"],
    duration: "",
    before: P.sliders,
    after: P.sliders,
    gallery: [],
    sample: true,
    quote: review("Brad N."),
  },
];

/** Real job posts (client photos), newest first; posts with unknown dates last. */
const realPosts: Project[] = [...postsA, ...postsB, ...postsC, ...postsD].sort((a, b) =>
  a.date && b.date ? b.date.localeCompare(a.date) : a.date ? -1 : b.date ? 1 : 0,
);

const realSlugs = new Set(realPosts.map((p) => p.slug));

/** Everything shown on the site: real jobs first, then review-only stories not already covered by a real post. */
export const projects: Project[] = [...realPosts, ...reviewStories.filter((p) => !realSlugs.has(p.slug))];
