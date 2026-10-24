import type { Project } from "../types";
import { testimonials } from "../testimonials";
import { jobPhoto } from "./helpers";

const LANAI = "manatee-county-lanai-wall-block-rebuild";
const FRENCH = "sarasota-french-doors-four-panel-slider";
const POOL = "pool-lanai-sliding-glass-doors";
const KITCHEN = "sarasota-kitchen-pass-through-window";

const ronald = testimonials.find((t) => t.name === "Ronald S.");

const lanaiAfter = jobPhoto(
  LANAI,
  3,
  "lanai",
  "After: new white stucco block wall on a Manatee County lanai with three two-lite storm-rated windows, a full-lite door and a tall narrow window under the screen enclosure",
  "After: block and stucco where the aluminum wall stood. Each opening gets a stucco band and a sill; the screen enclosure was kept in place.",
);

const frenchAfter = jobPhoto(
  FRENCH,
  2,
  "windows-doors",
  "White four-panel sliding glass door set in a stucco wall under a white pergola, opening onto a brick-paver lanai in rural Sarasota County",
  "Four panels, two operable in the middle. The center pair meets with handles, so the opening splits down the middle and stays balanced.",
);

const poolAfter = jobPhoto(
  POOL,
  1,
  "windows-doors",
  "Two new white sliding glass doors side by side on a covered pool lanai in Southwest Florida, factory labels still on the glass",
  "Two openings, one wall. The head and sill track run past the glass across a stucco section on each door, where the panels slide out of the way.",
);

const kitchenAfter = jobPhoto(
  KITCHEN,
  1,
  "windows-doors",
  "New white PGT single-hung window over an undermount stainless sink in a Sarasota kitchen with wood cabinets, white stone counter and marble mosaic backsplash",
  "The PGT label is still on the glass. The sill sits just above the faucet, so the lower sash can lift without hitting it.",
);

export const postsB: Project[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Manatee County lanai wall: aluminum to block (flagship, real B/A) */
  /* ------------------------------------------------------------------ */
  {
    slug: LANAI,
    title: "Aluminum Lanai Wall Rebuilt in Block in Manatee County, FL",
    seoTitle: "Lanai Wall Aluminum-to-Block Rebuild, Manatee County",
    seoDescription:
      "A 1985 aluminum lanai wall in Manatee County rebuilt in block: new footing, grouted rebar cores, precast headers, storm-rated windows. Get a free estimate.",
    city: "Manatee County",
    date: "2026-04",
    serviceSlugs: [
      "lanai-enclosures",
      "impact-windows-doors",
      "home-additions",
      "exterior-remodeling",
    ],
    summary:
      "We replaced a circa-1985 aluminum-and-glass lanai wall with a reinforced block wall, storm-rated windows and a storm-rated door, and kept the screen enclosure. Real before and after photos.",
    storyTitle: "A 1985 aluminum lanai wall becomes a real block wall",
    body: [
      "This Manatee County home was built around 1985, and its lanai room still had the exterior wall from that era: an aluminum frame filled with glass panels and a hinged aluminum storm door, set under a screen enclosure on a paver deck. The homeowner, Ronald S., met our team at the Sarasota home show and asked us to bid on replacing that wall. The goal was a real wall: concrete block, stucco, storm-rated windows and a storm-rated door, finished inside to match the rest of the room.",
      "Photo 1 is the before. Count the parts of the old wall: a run of aluminum-framed glass panels split by horizontal rails, a hinged aluminum door standing open, and a tall glass panel beside it. Walls like this were common on 1980s Florida rooms. They let in plenty of light, but the thin frames and glass were never built to today's wind-borne debris standards, and they rely on gaskets and caulk that break down in our sun. Photo 2 shows the tear-out stage. The glass panels are gone, the room is open to the lanai, the furniture is under drop cloths, and temporary wood posts hold up the screen-enclosure beam while the wall below it is rebuilt.",
      "Before any block went up, the project had to clear the Manatee County building department. Turning an aluminum wall into a block wall is structural work, so it needs drawings, a permit and inspections. Here, review took about three months, and the green light came in February 2026. Ronald's review is honest that the job ran longer than he expected because of permit issues and inspection scheduling. That is worth knowing if you are planning something similar. In Manatee and Sarasota County, the paperwork is often the longest part of a lanai wall conversion, not the construction.",
      "The structure is where this kind of job is won or lost. We poured a new footing with rebar tied into the original footer, so the new wall and the old slab work as one. A lanai slab alone is rarely thick enough to carry a block wall and the wind loads it will see. The block walls were laid with rebar in the cells, and those cores were filled solid with grout, then tied into precast concrete headers over the openings. The headers span the window and door openings without sagging and give the vertical steel something solid to tie into. At the top, the wall is connected to the roof trusses with stainless steel connectors. That continuous load path, from footing to reinforced cores to header to truss, is what lets a wall resist hurricane uplift and wind pressure instead of just closing in a room. Stainless matters on a lanai. Humidity, rain and pool splash can quietly rust ordinary steel hardware where nobody sees it.",
      "Photos 3 and 4 show the result in April 2026. The aluminum is gone. In its place is a white stucco wall with three two-lite windows with dark-tinted glass, a full-lite door with blinds built in between the glass, and a tall, narrow window beside the door. Each window has a stucco band around it and a sill below, and the factory labels are still on the glass. The windows and door are storm-rated, so the openings carry their own protection. The screen enclosure was kept, and you can see the job wrapping up: a blue tarp and stacked pavers on the deck, a temporary post under the enclosure beam, a paint can and a roller tray. Inside, the new wall was finished to match the room's existing walls, paint color and texture, so the lanai room now reads as part of the original house.",
      "If you are weighing a similar project, ask any contractor these questions. Will the new wall get its own footing, and how will it tie into the existing one? Are the block cores reinforced and grouted, and what header spans the openings? How does the wall connect to the roof framing, and with what hardware? Do the windows and door have Florida Product Approval, with design pressures that fit your home's exposure? Who pulls the permit and schedules county inspections, and how long do they expect plan review to take? Will the interior be finished to match, or left for you to hire out? Ronald called our price reasonable. A fair price is much easier to judge when every one of those items is written into the bid.",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte and working across Manatee, Sarasota and Charlotte County. If you have an aging aluminum lanai wall or Florida room, we will come out for a free in-home estimate, check the slab and roof framing, and tell you plainly what a block wall conversion takes, permits included.",
    ],
    scope: [
      "Removed the circa-1985 aluminum-framed glass wall and hinged aluminum storm door",
      "Manatee County permit, plan review and inspections",
      "New footing with rebar tied to the original footer",
      "Concrete block walls with rebar and grout-filled cores tied into precast headers",
      "Stainless steel connections to the roof trusses",
      "Storm-rated windows and a storm-rated full-lite door with built-in blinds",
      "Exterior stucco; interior finished to match existing walls, paint color and texture",
      "Existing screen enclosure and paver deck kept in place",
    ],
    duration: "",
    before: jobPhoto(
      LANAI,
      1,
      "lanai",
      "Before: original 1985 aluminum-framed lanai wall with glass panels and an open hinged aluminum storm door, under a screen enclosure on a paver deck in Manatee County",
      "Before: aluminum frames, single glass panels and a hinged storm door. Typical of 1980s Florida rooms, and not built for today's wind-borne debris rules.",
    ),
    after: lanaiAfter,
    gallery: [
      jobPhoto(
        LANAI,
        1,
        "lanai",
        "Original circa-1985 aluminum lanai wall in Manatee County: multi-pane glass panels, an open hinged aluminum storm door and a tall glass side panel on a paver deck",
        "Before: thin aluminum frames, rails and glass panels, plus a hinged storm door. This is the wall the new block wall replaced.",
      ),
      jobPhoto(
        LANAI,
        2,
        "lanai",
        "Lanai room opened up during tear-out: old glass panels removed, furniture under drop cloths, temporary wood posts shoring the screen enclosure beam",
        "Tear-out: the glass panels are out and temporary wood posts carry the screen-enclosure beam while the new wall goes in below it.",
      ),
      jobPhoto(
        LANAI,
        4,
        "lanai",
        "Side view of the finished stucco lanai wall in Manatee County with storm-rated windows, a full-lite door with built-in blinds and a tall narrow window, cleanup on the pavers",
        "Side view: windows, door and a tall side lite in one reinforced wall. Final paint and cleanup were still underway when this was taken.",
      ),
    ],
    sample: false,
    beforeAfter: true,
    ...(ronald ? { quote: { text: ronald.text, name: "Ronald S." } } : {}),
    faqs: [
      {
        q: "Can an aluminum lanai wall be replaced with concrete block?",
        a: "Yes. The old aluminum frame and glass come out, a footing is poured for the new wall, and block is laid with rebar and grout-filled cores tied into headers and the roof framing. Then you get stucco outside, finished drywall or plaster inside, and new windows and doors. It is structural work, so it needs a permit and engineering-grade details.",
      },
      {
        q: "Do I need a permit to replace a lanai wall with block in Manatee County?",
        a: "Yes. A new block wall with a footing, headers and roof connections is structural, so Manatee County requires a building permit and inspections. Plan review can take a while. On this project it took about three months before construction could start in February 2026.",
      },
      {
        q: "Why does a new block lanai wall need its own footing?",
        a: "A lanai slab is usually not thick enough to carry a block wall and the wind loads it will see. A proper footing, with rebar tied into the existing footer, gives the wall a solid base and keeps it moving with the house. That is what makes the wall part of the structure rather than an add-on.",
      },
      {
        q: "Can I keep my screen enclosure when the lanai wall is rebuilt?",
        a: "Usually, yes. On this job the screen enclosure stayed, and temporary wood posts carried its beam while the old wall came out and the new one went up. Ask your contractor how they will support the enclosure during the work.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. Sarasota County: French doors + four-panel slider                */
  /* ------------------------------------------------------------------ */
  {
    slug: FRENCH,
    title: "French Doors and a Four-Panel Slider on a Sarasota County Lanai",
    seoTitle: "French Doors & 4-Panel Slider in Sarasota County, FL",
    seoDescription:
      "Outswing French doors and a four-panel sliding glass door opening onto a brick-paver lanai in rural Sarasota County. See the install, get a free estimate.",
    city: "Sarasota County",
    date: "2025-12",
    serviceSlugs: ["impact-windows-doors", "outdoor-living"],
    summary:
      "A pair of white full-lite French doors and a white four-panel sliding glass door, both opening onto a covered brick-paver lanai with a pasture view in east Sarasota County.",
    storyTitle: "Two doors, two jobs, one lanai",
    body: [
      "This home in rural east Sarasota County looks out over pasture and wood rail fencing, and the family lives on its back lanai. We installed two new openings onto that lanai: a pair of white full-lite French doors and a white four-panel sliding glass door. Both open onto a brick-paver deck. The French doors lead to a covered area with an outdoor kitchen, and the slider opens under a white pergola with screen panels overhead.",
      "Photo 1 shows the French doors from the lanai. They have full-height glass lites, dark lever handles and a deadbolt, and the factory labels are still on the glass. Look at the hinges: they show on the outside face, which means these doors swing out. Around the frame is a band of fresh stucco where the opening was finished. Photo 3 is the same pair from inside, over wood-look tile, with the stainless grill of the outdoor kitchen visible through the left door. Photo 2 is the four-panel slider under the pergola. The two center panels carry the handles and meet in the middle. Photo 4 shows it from the living room, where four tall panels turn most of the wall into glass.",
      "Why both door types on one lanai? They solve different problems. A French door gives you a classic look and a wide clear opening when both leaves are open, but it needs room to swing. An outswing door is the preferred choice in Florida. Wind pressure pushes the door into its stops instead of trying to force it open, and it does not swing into the room. A slider needs no swing space, so furniture can sit right up to it, and a four-panel unit gives you a lot of glass in one opening. The tradeoff is that only part of the opening is open at once.",
      "The details that matter in Southwest Florida are the same for both. The frame has to be anchored into the wall opening with the fastener type and spacing listed in its Florida Product Approval. The sill needs a continuous bed of sealant or a sill pan so wind-driven rain cannot get under the threshold. On a four-panel slider, the sill also has to be dead level across its full width. If it is not, the heavy panels roll hard, the locks stop lining up, and weatherstripping wears unevenly. A roof or pergola over the doors helps, but it does not replace the door's own design pressure and water rating.",
      "Before you hire anyone for door replacement, ask a few things. Is the door rated for your home's design pressure, and does it carry Florida Product Approval? Does your address fall in the wind-borne debris region? If it does, new exterior doors need impact-rated glass or approved shutters. How will the installer anchor into block, and how will they seal the sill? Who pulls the permit? And how will they finish the stucco and interior trim around the new frame?",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) installing French doors, sliding glass doors and windows across Sarasota County and Southwest Florida. If you are deciding between French doors and a slider for your lanai, book a free in-home estimate and we will measure the openings and show you both options side by side.",
    ],
    scope: [
      "Pair of white full-lite outswing French doors with dark lever handles and deadbolt",
      "White four-panel sliding glass door with center-meeting operable panels",
      "Frames anchored and sealed in the wall openings",
      "Stucco finished around the new door frames",
      "Interior trim at both openings",
      "Both doors open onto a covered brick-paver lanai",
    ],
    duration: "",
    before: frenchAfter,
    after: frenchAfter,
    gallery: [
      jobPhoto(
        FRENCH,
        1,
        "windows-doors",
        "White full-lite outswing French doors with dark lever handles in a stucco wall, opening onto a brick-paver lanai in Sarasota County, labels still on the glass",
        "Hinges on the outside face mean an outswing door. In Florida, wind pressure pushes outswing doors into their stops instead of forcing them open.",
      ),
      jobPhoto(
        FRENCH,
        3,
        "windows-doors",
        "Interior view of the new white French doors over wood-look tile, with an outdoor kitchen grill and the lanai visible through the glass",
        "From inside: full-lite glass keeps the view to the outdoor kitchen. French doors need clear floor space to swing, so plan furniture around them.",
      ),
      jobPhoto(
        FRENCH,
        4,
        "windows-doors",
        "Interior view of the four-panel sliding glass door from a living room with wood-look tile, looking out to a brick-paver lanai, pergola and pasture",
        "A four-panel slider turns most of the wall into glass. The long sill has to be dead level, or the heavy panels roll hard and the locks stop lining up.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Are French doors or sliding glass doors better for a Florida lanai?",
        a: "It depends on space and how you use the opening. French doors give a classic look and a wide opening with both leaves open, but they need room to swing. Sliders need no swing space and give you more glass, though only part of the opening is open at a time. Many homes use both, as this one does.",
      },
      {
        q: "Should French doors swing in or out in Florida?",
        a: "Outswing is generally preferred. Wind pressure pushes an outswing door into its stops instead of trying to force it open, and it does not take up floor space inside. Make sure the specific door is rated for your design pressure and has Florida Product Approval.",
      },
      {
        q: "What is a four-panel sliding glass door?",
        a: "It is a slider with four glass panels in one frame. In the common layout, the two center panels slide and meet in the middle with handles, while the outer panels stay fixed. It gives a wide, balanced opening and a lot of glass.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Pool lanai sliding glass doors                                   */
  /* ------------------------------------------------------------------ */
  {
    slug: POOL,
    title: "New Sliding Glass Doors on a Covered Pool Lanai in Southwest Florida",
    seoTitle: "Pool Lanai Sliding Glass Doors in Southwest Florida",
    seoDescription:
      "White sliding glass doors on a covered, screened pool lanai in Southwest Florida, sill tracks set on the deck. See the job and get a free estimate.",
    city: "Southwest Florida",
    date: "",
    serviceSlugs: ["impact-windows-doors", "lanai-enclosures"],
    summary:
      "Several new white two-panel sliding glass doors on a covered pool lanai under a screen enclosure, including two openings side by side on one wall.",
    storyTitle: "Three sliders, one pool lanai",
    body: [
      "On this Southwest Florida pool home, the whole back of the house opens onto a covered lanai inside a screen enclosure. We replaced the sliding glass doors that connect the living spaces to that lanai with new white two-panel sliders. The photos show three openings: two side by side on one wall, and a third further along. The factory labels are still on the glass in every shot.",
      "Photo 1 shows the two side-by-side openings. Look closely and you will see that on each one the head and sill track keep going past the glass, across a stucco section of wall. That is the layout of a door whose panels slide off to the side, clearing more of the opening than a standard slider. Photos 3 and 5 are close-ups of those two doors. Through the glass in photo 5 you can see the pool, a mesh pool safety fence and the screen enclosure. Photos 2 and 4 show the third door from two angles, a two-panel slider with a clean white frame in a textured stucco wall.",
      "On a pool lanai, sliders take a beating: chlorine and salt in the air, wet feet, kids and constant use. Three details decide how long they last. First, the sill. It has to sit level on the deck and be sealed underneath, and the deck in front of it should slope away so water drains instead of pooling at the track. Second, anchoring. The frame should be fastened into the wall opening with the anchors and spacing listed in its Florida Product Approval, not just shimmed and foamed. Third, rollers and hardware. Large glass panels are heavy, and good rollers on a clean, straight track are what keep a slider gliding with one hand years later.",
      "A pool lanai also brings a code question many homeowners miss. Florida's pool safety law requires at least one approved safety feature for a residential pool. That can be a pool barrier, an approved safety cover, exit alarms on doors with direct access to the pool, or self-closing, self-latching doors. This home has a removable mesh safety fence around the pool, which you can see through the glass. If you are replacing doors that open to a pool, ask your installer how the new doors fit your pool safety plan.",
      "The screen enclosure and roof help, but they do not change what the doors themselves must meet. Ask any installer about the door's design pressure, whether your address is in the wind-borne debris region (where impact glass or shutters are required), who pulls the permit, and how the stucco and trim will be finished around the new frames.",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) replacing sliding glass doors on lanais and pool decks across Southwest Florida. If your sliders stick, leak or have fogged glass, book a free in-home estimate and we will measure the openings and walk you through your options.",
    ],
    scope: [
      "Several new white two-panel sliding glass doors on a covered pool lanai",
      "Two openings side by side on one wall, with track running past the glass across a stucco section",
      "Frames set in textured stucco walls with white trim",
      "Sill tracks set on the lanai deck",
      "Work done inside an existing screen enclosure with a pool safety fence",
    ],
    duration: "",
    before: poolAfter,
    after: poolAfter,
    gallery: [
      jobPhoto(
        POOL,
        5,
        "windows-doors",
        "New white sliding glass door on a covered pool lanai with the pool, a mesh pool safety fence and screen enclosure reflected and visible through the glass",
        "Through the glass: the pool and a mesh safety fence. Florida law requires at least one approved pool safety feature, and door alarms are one option.",
      ),
      jobPhoto(
        POOL,
        3,
        "windows-doors",
        "Close-up of a new white two-panel sliding glass door with labels on the glass and the frame and track continuing across a stucco wall section",
        "The head and sill track continue past the glass across the stucco. The sill must sit level and sealed, with the deck sloping away from it.",
      ),
      jobPhoto(
        POOL,
        2,
        "windows-doors",
        "White two-panel sliding glass door in a textured stucco wall on a covered lanai, with a wicker chair and a door mat in front",
        "A clean white frame in a stucco opening. On a pool lanai, sliders face chlorine, salt air and constant use, so rollers and track matter.",
      ),
      jobPhoto(
        POOL,
        4,
        "windows-doors",
        "Angled view of the new two-panel sliding glass door on the lanai, with factory labels still on the glass",
        "The labels stay on until final inspection. They list the product approval and performance ratings the inspector checks.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "How long does it take to replace a sliding glass door?",
        a: "The installation of a standard slider is usually a one-day job per opening once the door is on site. Ordering custom sizes, permits and inspections add time before and after. Your installer should give you a realistic schedule up front.",
      },
      {
        q: "Do sliding glass doors that open to a pool need alarms in Florida?",
        a: "Florida's residential pool safety law requires at least one approved safety feature. Exit alarms on doors with direct pool access are one option. A pool barrier, an approved safety cover or self-closing, self-latching doors are others. Check which feature your home relies on before replacing the doors.",
      },
      {
        q: "Why is my sliding glass door hard to open?",
        a: "Most often it is worn rollers, a dirty or damaged track, or a sill that has settled out of level. Older doors with heavy glass are especially prone to it. Sometimes new rollers fix it, but if the frame is bent or the sill is failing, replacement is the better investment.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. Sarasota kitchen pass-through window                             */
  /* ------------------------------------------------------------------ */
  {
    slug: KITCHEN,
    title: "PGT Pass-Through Window Over the Kitchen Sink to a Sarasota Lanai",
    seoTitle: "Kitchen Pass-Through Window to Lanai in Sarasota, FL",
    seoDescription:
      "A new PGT single-hung window over the kitchen sink opens to a lanai serving ledge in Sarasota. See how a pass-through window is done. Free estimate.",
    city: "Sarasota",
    date: "2026-07",
    serviceSlugs: ["impact-windows-doors", "outdoor-living"],
    summary:
      "A new white PGT single-hung window between a Sarasota kitchen and the lanai, set over the sink and above a concrete serving ledge outside.",
    storyTitle: "A window that doubles as a serving counter",
    body: [
      "In this Sarasota home, the kitchen sink sits on the wall shared with a covered, screened lanai. Outside, under the window, there is a wide concrete ledge with a rounded edge, the kind of serving counter that turns a kitchen window into a pass-through. We installed a new white PGT single-hung window in that opening, so food and drinks can go straight from the counter to the lanai.",
      "Photo 1 is the kitchen side. The new window sits between wood cabinets, above a white stone counter with gray veining, an undermount stainless sink and a pull-down faucet. A leaf-pattern marble mosaic backsplash runs up to the frame. The PGT label is still on the glass. Look at the bottom rail of the lower sash and you can see the two finger lifts: the lower sash slides up while the top sash stays fixed. Photo 2 is the lanai side. The window is set in the stucco wall with a smooth band of fresh stucco around it, and the concrete ledge sits just below the sill.",
      "A pass-through window has a few details that a normal kitchen window does not. The first is faucet clearance. A tall pull-down faucet has to clear the sash, or the window cannot open fully. Here the sill sits just above the faucet. The second is sill height. The window should line up with the counter inside and the ledge outside, so you can slide a plate through without lifting it over a lip. The third is water. Even under a lanai roof, the outside ledge must slope away from the window, and the frame needs a sealed sill so rain and hose spray do not find a way into the cabinet below.",
      "Why a single-hung window? It is simple, durable and familiar, and the fixed top sash keeps the frame strong. A horizontal slider or an awning window can also work for a pass-through. The right choice depends on how wide the opening is and how you want to reach through it. Whatever the style, the window should carry Florida Product Approval and be rated for your home's design pressure, and it needs to be anchored into the wall opening, not just foamed in place.",
      "If you are planning a kitchen window like this, ask your installer a few questions. Will the sash clear my faucet? Will the sill line up with my countertop? How will the outside ledge and stucco be finished and sealed? Is the window rated for my address, including the wind-borne debris region if it applies? Who pulls the permit?",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) installing windows, doors and kitchen upgrades across Sarasota and Southwest Florida. If you want a pass-through window to your lanai, book a free in-home estimate and we will measure the opening and check the sink, counter and ledge before anything is ordered.",
    ],
    scope: [
      "New white PGT single-hung window between kitchen and lanai",
      "Window set over an undermount sink and pull-down faucet",
      "Opening finished in stucco on the lanai side",
      "Sill aligned above an exterior concrete serving ledge",
      "Interior trim finished against the marble mosaic backsplash",
    ],
    duration: "",
    before: kitchenAfter,
    after: kitchenAfter,
    gallery: [
      jobPhoto(
        KITCHEN,
        2,
        "windows-doors",
        "Lanai side of the new white kitchen pass-through window in a Sarasota stucco wall, above a wide concrete serving ledge with a rounded edge",
        "From the lanai: fresh stucco around the frame and a concrete ledge below. The ledge should slope away so water never sits against the sill.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "What is a kitchen pass-through window?",
        a: "It is a window between the kitchen and an outdoor space, usually over the counter or sink, that opens so you can pass food and drinks through. It is often paired with an outside ledge or bar counter on the lanai.",
      },
      {
        q: "What type of window works best as a pass-through?",
        a: "Single-hung, horizontal sliding and awning windows are all common. Single-hung windows are simple and durable, and their lower sash opens at counter height. Sliders work well for wide openings. The best choice depends on the size of the opening and how you want to use it.",
      },
      {
        q: "Will a window over the sink hit my faucet?",
        a: "It can if the sill is too low or the faucet is tall. We check faucet height against the sill and sash before ordering, so the window can open fully.",
      },
    ],
  },
];
