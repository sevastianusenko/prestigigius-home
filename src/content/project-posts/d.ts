import type { Project } from "../types";
import { jobPhoto } from "./helpers";

const VENICE = "venice-double-entry-doors-decorative-glass";
const SIX = "sarasota-six-panel-entry-doors";
const GLASS = "sarasota-glass-entry-door";
const METAL = "sarasota-metal-building-folding-windows";

const veniceHero = jobPhoto(
  VENICE,
  1,
  "windows-doors",
  "White double entry doors with decorative beveled glass and a matte black handleset on a covered tile entry in Venice, FL",
  "The vertical strip on the left leaf is the astragal: it closes the gap between the two doors and holds the weatherstrip the active leaf seals against.",
);

const sixHero = jobPhoto(
  SIX,
  2,
  "windows-doors",
  "White six-panel exterior side door with new white casing in a light-blue stucco wall, black wall lantern beside it, Sarasota FL",
  "No hinge knuckles show from outside, so this door swings in. On inswing doors the threshold and sill seal do most of the work against wind-driven rain.",
);

const glassHero = jobPhoto(
  GLASS,
  1,
  "windows-doors",
  "White three-lite glass entry door with Therma-Tru labels on the glass, set in white trim on a covered porch with lap siding in Sarasota",
  "Hinge knuckles on the porch side mean this door swings out. In Florida, outswing doors press into their stops under wind load instead of away from them.",
);

const metalHero = jobPhoto(
  METAL,
  3,
  "windows-doors",
  "Large aluminum window assembly with four folding upper sashes over four fixed lites, installed in a plywood-sheathed wall inside a steel building in Sarasota County",
  "Two assemblies stacked: a numbered four-sash folding unit on top and a four-lite fixed unit below, each with its own frame and labels still on the glass.",
);

export const postsD: Project[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: VENICE,
    title: "Double Entry Doors with Decorative Glass on a Venice Stucco Home",
    seoTitle: "Double Entry Doors with Decorative Glass in Venice, FL",
    seoDescription:
      "White double entry doors with beveled decorative glass, an astragal and a black handleset in Venice, FL. What to check on any Florida door. Free estimate.",
    city: "Venice",
    date: "2025-10",
    serviceSlugs: ["impact-windows-doors", "exterior-remodeling"],
    summary:
      "A pair of white entry doors with full-length decorative beveled glass, set under a covered stucco entry in Venice with a matte black handleset and a transom window above.",
    storyTitle: "A front entry that lets the light in, but not the weather",
    body: [
      "This Venice entry is a classic Southwest Florida layout: a covered porch, a tall opening with a window above the door head, and a pair of doors instead of a single slab. The homeowners went with white double entry doors, each with a full-length decorative glass insert, finished with a matte black handleset. The ODL sticker is still on the glass in both photos, which tells you these shots were taken right after install.",
      "Look closely at the first photo. The left leaf is the inactive door. It carries the astragal, the narrow vertical strip running the full height of the meeting edge. The right leaf is the active door with the deadbolt and thumb-latch handle. When the active door closes, it seals against the astragal's weatherstrip. On a double door, that strip is the weak point or the strong point, depending on how it is built and adjusted. The inactive leaf is held by flush bolts at the top and bottom. Those bolts are what actually keep the pair together when wind pushes on it.",
      "The glass itself is a textured, obscure-style background with beveled pieces and metal caming in a diamond-and-oval pattern. It gives the foyer daylight without putting the living room on display to the street. Next to the doors you can see a white single-hung window with grids, and a white stucco return framing the whole opening. The tile entry, the aluminum threshold and the doorbell button in the second photo show how tight the door frame sits to the finished stucco.",
      "Now the Florida part. No hinge knuckles show from the porch in either photo, so these doors swing in. Inswing doors are what most people expect on a front entry, but in a hurricane they push away from their stops, not into them. That puts more load on the latch, the flush bolts and the astragal, and it makes the threshold do serious work against wind-driven rain. On jobs like this we check the threshold height and seal, set the sill in sealant over a pan or sloped sill prep, and make sure the flush bolts actually throw into the head and sill. In most of coastal Sarasota County, which includes Venice, an exterior door has to carry a Florida Product Approval or Miami-Dade NOA for its design pressure, and in the wind-borne debris region it must either be impact-rated or be covered by approved shutters.",
      "Decorative glass adds one more question. If the door is rated for impact, the glass insert is part of that rating, usually as a laminated or insulated laminated unit tested with the slab. Swapping in a pretty insert from a different source can quietly void the approval. The label on the glass and the approval number on the door edge are what an inspector, and later an insurance inspector, will look for.",
      "If you are pricing double entry doors in Venice, ask any installer: Is the unit approved as a pair, astragal and bolts included? What design pressure does it carry, and is that enough for my address? Inswing or outswing, and why? How will you flash and pan the sill on a stucco wall? Who handles the permit and final inspection?",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte, and we install entry doors, double doors and impact windows across Venice and Sarasota County. If your front entry is ready for an upgrade, call us for a free in-home estimate.",
    ],
    scope: [
      "Pair of white entry doors with full-length decorative beveled glass inserts",
      "Active leaf with matte black deadbolt and thumb-latch handleset",
      "Inactive leaf with full-height astragal at the meeting stiles",
      "Inswing configuration with aluminum threshold on a tiled covered entry",
      "Door frame finished tight to the white stucco return",
      "Transom window above and single-hung window beside the entry, Venice, FL",
    ],
    duration: "",
    before: veniceHero,
    after: veniceHero,
    gallery: [
      jobPhoto(
        VENICE,
        2,
        "windows-doors",
        "Active leaf of a white double entry door with diamond-pattern decorative glass and black handleset beside a tan stucco wall in Venice",
        "The ODL sticker is still on the glass. On a rated door, the glass insert is tested with the slab, so it should never be swapped for an unrated one.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Should a front door in Florida swing in or out?",
        a: "Outswing doors press into their stops under hurricane wind, which helps them resist both pressure and water. Inswing doors are more common and work fine when the unit is rated for the location and the threshold, sill pan and weatherstripping are installed correctly. The right choice depends on the porch, the code requirements and how the door will be used.",
      },
      {
        q: "What is an astragal on a double door?",
        a: "The astragal is the vertical strip on the edge of the inactive door where the two leaves meet. It covers the gap, carries the weatherstrip the active door seals against, and houses or works with the flush bolts that lock the inactive leaf at the top and bottom. On a storm-rated double door, those bolts must be engaged for the door to perform as tested.",
      },
      {
        q: "Can decorative glass entry doors be impact-rated?",
        a: "Yes. Many manufacturers offer decorative glass inserts built as laminated units and tested with the door slab. The approval covers that exact combination, so the insert, frame and hardware should match what is listed on the product approval.",
      },
      {
        q: "Do I need a permit to replace double entry doors in Venice, FL?",
        a: "In Sarasota County, replacing an exterior door is generally permitted work, and the new unit needs a Florida Product Approval or Miami-Dade NOA for the required design pressure. A licensed contractor pulls the permit and schedules the inspection as part of the job.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: SIX,
    title: "Six-Panel Exterior Side Door Replacement on a Sarasota Stucco Home",
    seoTitle: "Six-Panel Exterior Door Replacement in Sarasota, FL",
    seoDescription:
      "New white six-panel exterior door with fresh casing on a light-blue stucco home in Sarasota, FL. What matters on Florida side doors. Free estimate.",
    city: "Sarasota",
    date: "2025-12",
    serviceSlugs: ["impact-windows-doors", "exterior-remodeling"],
    summary:
      "White six-panel exterior door work on a light-blue stucco home in Sarasota: the inside face with the product label still on, and a side door finished with new white casing and a wall lantern.",
    storyTitle: "The door nobody photographs, done right",
    body: [
      "Side doors and back doors rarely make it into anyone's portfolio, but in Florida they matter just as much as the front entry. A hurricane does not care which door guests use. This Sarasota job covers six-panel exterior door work on a stucco home: one photo shows the inside face right after install, and the other shows a side door from the yard with new white casing.",
      "The first photo is the room side. The white six-panel slab still has its product label taped to it, which is normal right after install. The label is how the homeowner and the inspector confirm what went into the opening. You can see three black hinges on the left jamb, a satin-finish knob and a separate deadbolt, new white casing around the opening, and a sloped ceiling above. With the hinges on the inside, this door swings into the room.",
      "The second photo is the outside of a six-panel side door. The opening is wrapped in a wide white surround and new casing against light-blue textured stucco, with a black lantern on the wall and an aluminum threshold over the step. Again, no hinges show from outside, so this is an inswing door. That is common for side and garage-entry doors, and it makes the threshold, the door sweep and the sill seal the parts that keep water out.",
      "Six-panel exterior doors usually come in steel or fiberglass. Steel is strong and budget-friendly, but scratches and dents need touch-up, and in salt air any bare spot has to be sealed fast. Fiberglass costs more, does not dent, and handles humidity without swelling. Either way, the slab is only part of the system. The frame, hinges, lock, threshold and anchoring all have to match the product approval for the door to carry its rated design pressure.",
      "On jobs like this we pay attention to a few things a homeowner never sees once the trim is on. The rough opening has to be square and solid, because a racked frame never seals. The sill gets sealant and sloped prep so water that gets past the sweep drains out instead of into the subfloor. Anchors go into the framing or block at the spacing the approval calls for, not wherever is convenient. Then the stucco joint is sealed and the casing is caulked and painted so the opening sheds rain.",
      "If you are replacing a side or back door in Sarasota, ask any installer: Does the door have a Florida Product Approval or Miami-Dade NOA for my location? Is it impact-rated, or will it need shutters? Steel or fiberglass, and why for my house? How will the sill be sealed? Who pulls the permit and calls for the inspection?",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) from Port Charlotte, installing exterior doors, impact doors and windows throughout Sarasota and Southwest Florida. Call us for a free in-home estimate on your doors.",
    ],
    scope: [
      "White six-panel exterior door slab with product label shown after install",
      "Three-hinge inswing setup with satin knob and separate deadbolt",
      "New white interior casing around the opening",
      "Six-panel side door with new white exterior casing in light-blue stucco",
      "Aluminum threshold over the exterior step",
      "Light-blue stucco home in Sarasota, FL",
    ],
    duration: "",
    before: sixHero,
    after: sixHero,
    gallery: [
      jobPhoto(
        SIX,
        1,
        "windows-doors",
        "Inside face of a new white six-panel exterior door with the product label still attached, black hinges and new white casing under a sloped ceiling in Sarasota",
        "Leave the label on until final inspection. It lists the product approval and design pressure the inspector checks against the permit.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Is a steel or fiberglass exterior door better in Florida?",
        a: "Both can be rated for Florida wind loads. Steel is usually less expensive and very strong but can dent and needs touch-up where the coating is damaged, especially near salt air. Fiberglass costs more, resists dents and humidity, and holds paint or stain well. The rating of the whole unit matters more than the slab material.",
      },
      {
        q: "Do side and back doors need to be impact-rated?",
        a: "In the wind-borne debris region, every exterior opening, including side and back doors, must be impact-rated or protected by approved shutters. Even outside that region, the door needs a Florida Product Approval or NOA for the design pressure at the house.",
      },
      {
        q: "Why do most exterior doors in Florida swing in?",
        a: "Inswing doors are traditional, keep hinges inside for security and are easy to fit with storm shutters. Outswing doors resist wind and water better because pressure pushes them into the frame. Many Florida side doors are inswing, which makes a good threshold and sill seal essential.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: GLASS,
    title: "Therma-Tru Three-Lite Glass Door on a Sarasota Lap-Siding Home",
    seoTitle: "Glass Entry Door Installation in Sarasota, FL",
    seoDescription:
      "Therma-Tru three-lite outswing glass door with black lever hardware on a Sarasota lap-siding home. How we seal doors on frame walls. Free estimate.",
    city: "Sarasota",
    date: "2025-10",
    serviceSlugs: ["impact-windows-doors", "exterior-remodeling"],
    summary:
      "A white Therma-Tru three-lite glass door with matte black lever hardware, installed outswing on a covered porch of a Sarasota home with lap siding.",
    storyTitle: "More daylight, same weather line",
    body: [
      "This Sarasota porch got a white three-lite glass door. The Therma-Tru labels are still on the glass, and a fan still sits on the porch floor. It is a single photo, but it shows most of what matters on a door in a frame home with lap siding.",
      "Start with the hinges. Three hinge knuckles show on the right side, from the porch. That means the door swings out. In Florida that is a real advantage: under hurricane wind, an outswing door presses into its stops and weatherstripping instead of being pushed away from them, and wind-driven rain has a harder time getting past the bottom. The trade-off is that the door has to clear the porch, and the hinge pins need to be non-removable or secured, which is standard on good outswing units.",
      "The hardware is a matte black lever with a separate deadbolt. The glass is clear, divided into three lites by solid rails, so the room behind gets light from the porch and the yard. Around the door, wide white flat trim sits over lap siding with a wood-grain texture, and the head trim runs straight into the porch ceiling boards. The threshold sits on a concrete step.",
      "On a frame wall with lap siding, the door is only as good as the flashing behind the trim. On jobs like this we tie the door flange or frame into the house wrap shingle-style, put a sill pan under the threshold, and add head flashing so water running down the siding is kicked out over the trim, not behind it. Trim-to-siding joints get sealant, but sealant is the last line of defense, not the first. And because the door carries a product approval, the anchors go into solid framing at the spacing it lists.",
      "Before you hire anyone for a glass door in Sarasota, ask: Is this unit rated for my design pressure, and is the glass impact-rated? Inswing or outswing, and why? How will you flash it on lap siding? Is a sill pan included?",
      "Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) in Port Charlotte, installing entry doors and impact doors across Sarasota and Southwest Florida. Call for a free in-home estimate.",
    ],
    scope: [
      "White three-lite glass entry door with Therma-Tru labels on the glass",
      "Outswing configuration with three exposed hinges",
      "Matte black lever handle with separate deadbolt",
      "Wide white flat trim against lap siding on a covered porch",
      "Threshold set on the existing concrete step",
    ],
    duration: "",
    before: glassHero,
    after: glassHero,
    gallery: [],
    sample: false,
    faqs: [
      {
        q: "Are outswing doors better in Florida?",
        a: "For wind and water, usually yes. Wind pressure pushes an outswing door into its frame and weatherstripping, which helps it seal. It needs room to open outward and secure hinge pins, so it is not the right fit for every porch.",
      },
      {
        q: "How should a door be flashed on a house with lap siding?",
        a: "The door should be integrated with the house wrap shingle-style, with a sill pan under the threshold and head flashing above the trim so water drains out and away. Caulk at the trim is a backup, not the main water barrier.",
      },
      {
        q: "Can a full-glass door be hurricane-rated?",
        a: "Yes. Impact-rated glass doors use laminated glass tested with the frame and slab. Check the Florida Product Approval or Miami-Dade NOA for the design pressure and impact rating before you buy.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  {
    slug: METAL,
    title: "Aluminum Folding Window Wall in a Steel Building in Sarasota County",
    seoTitle: "Aluminum Folding Windows in a Steel Building, Sarasota",
    seoDescription:
      "Large aluminum folding windows over fixed lites in a steel-framed building in Sarasota County. What to check on openings and flashing. Free estimate.",
    city: "Sarasota County",
    date: "2025-10",
    serviceSlugs: ["impact-windows-doors", "whole-home-remodeling"],
    summary:
      "A large two-tier aluminum window assembly, four folding sashes over four fixed lites, installed in a plywood-sheathed wall inside a steel-framed building in Sarasota County.",
    storyTitle: "A window wall that folds open",
    body: [
      "Not every window job is a house. This Sarasota County project is a steel-framed building with a finished room built inside it. The wall between the room and the open shop bay is framed and sheathed in plywood, and it got a large aluminum window assembly that folds open. In the photos you can see the metal roof panels and purlins above, scaffolding on the shop floor, and the finished room on the other side with dark walls and recessed lights.",
      "The assembly is two units stacked. On top, four tall sashes fold open in pairs toward each jamb, like a bifold door turned into a window. Below, four fixed lites form a solid band. In the third photo the frames still carry their factory labels and numbered stickers, and the measurements are written on the aluminum in marker. That is how big assemblies are matched to their openings: each piece is numbered and checked against the shop drawing before it goes in. A gray flashing strip runs under the bottom frame.",
      "The second photo shows the upper unit fully open. The folded sashes stack against both jambs and leave a wide, clear opening. The first photo is the view from inside the finished room: four operable sashes with black handles over four fixed panes, and you can look straight out into the shop. The drywall is painted, and the jambs are waiting for final trim.",
      "Large operable units like these put real demands on the opening. The structural opening has to be square, level and stiff. A folding unit with a long head span will bind or drag if the header deflects, so we look at what the head is fastened to, whether that is a steel girt, a wood header or blocking. The sill has to be dead level across the whole width, or the sashes won't line up when they close.",
      "Then there is design pressure. If a window like this faces outdoors anywhere in Sarasota County, it needs a Florida Product Approval or Miami-Dade NOA for the design pressure at that wall, and in the wind-borne debris region it must be impact-rated or shuttered. Folding and multi-sash units are tested as complete assemblies, so the mull between the upper and lower units, the anchor spacing and the hardware all have to follow the approval. Inside a building, loads are lower, but big doors on the shop can still put pressure on interior walls in a storm, which is worth discussing with the designer.",
      "On a plywood-sheathed wall, flashing follows the same rules as on a house. A sill pan or sloped sill goes in first, side and head flashing are lapped shingle-style over the weather barrier, and the head is never sealed in a way that traps water. Steel buildings sweat, and condensation from the roof can run down walls, so the sill details still matter even under a roof.",
      "If you are planning a barndominium, shop apartment or steel building conversion in Sarasota County, ask any installer: Is the opening built for this unit's weight and span? What design pressure does this wall need? How will the sill be flashed on sheathing? Prestigious Home Improvements, a family-owned licensed contractor (CRC1327831) from Port Charlotte, handles large window and door openings across Southwest Florida. Call for a free in-home estimate.",
    ],
    scope: [
      "Two-tier aluminum window assembly in a steel-framed building",
      "Upper unit: four operable sashes that fold open in pairs to each jamb",
      "Lower unit: four fixed lites mulled below the folding unit",
      "Installed in a plywood-sheathed wall facing the open shop bay",
      "Gray flashing strip under the bottom frame",
      "Interior side finished with painted drywall, jamb trim pending",
      "Install done from scaffolding under the steel roof, Sarasota County",
    ],
    duration: "",
    before: metalHero,
    after: metalHero,
    gallery: [
      jobPhoto(
        METAL,
        2,
        "windows-doors",
        "Upper aluminum folding window sashes stacked open at both jambs over fixed lites, plywood wall and steel roof purlins above, scaffolding below, Sarasota County",
        "Folded open, the sashes stack at the jambs and clear the whole opening. A level sill and a stiff head keep them aligned when they close.",
      ),
      jobPhoto(
        METAL,
        1,
        "windows-doors",
        "Interior view of four tall operable aluminum sashes with black handles over four fixed lites in a dark-painted room, shop bay visible through the glass, Sarasota County",
        "Room side after paint: jamb gaps are still open for trim, so you can see how the frame sits in the rough opening.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Can folding windows be hurricane-rated in Florida?",
        a: "Yes. Some manufacturers offer folding and multi-sash aluminum windows with Florida Product Approval and impact ratings. The rating applies to the tested assembly, so the size, glass, anchors and mulling must match the approval.",
      },
      {
        q: "What should I check before installing large windows in a steel building?",
        a: "Confirm the structural opening: header or girt stiffness, a level sill and square jambs. Then check the design pressure for that wall and how the window will be flashed into the sheathing and weather barrier.",
      },
      {
        q: "Do interior windows in a barndominium need impact glass?",
        a: "A window between two rooms under one roof usually does not face the same code requirements as an exterior window. If the wall can see wind loads, for example near large overhead doors, talk to the designer about the right rating.",
      },
    ],
  },
];
