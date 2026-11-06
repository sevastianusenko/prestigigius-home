import type { Project } from "../types";
import { jobPhoto } from "./helpers";

/* Photos received 2026-11-05 (Telegram, 960x1280, no EXIF). City and month are not
 * known yet for any of the four series; see OPEN-QUESTIONS.md. */

export const GRAY_KITCHEN = "gray-shaker-kitchen-remodel-espresso-island";
export const POOL_HOME = "pool-home-kitchen-and-lvp-flooring-remodel";
export const CONDO = "condo-lvp-flooring-white-shaker-kitchen";
export const FRENCH = "arched-french-door-installation-stucco-home";

const grayHero = jobPhoto(
  GRAY_KITCHEN,
  1,
  "kitchen",
  "Remodeled kitchen with light gray shaker cabinets and crown molding, a charcoal-stained island under white quartz, a stainless range and fridge, a black pull-down faucet and wide-plank light oak vinyl flooring",
  "Light uppers, a dark island: the two-tone layout keeps the room bright while the island hides fingerprints where hands actually land.",
);

const poolHero = jobPhoto(
  POOL_HOME,
  1,
  "kitchen",
  "White shaker base cabinets and a farmhouse sink base being set under a black-framed window that looks out at a screened pool, new light oak vinyl plank flooring already down",
  "Cabinets go in after the floor here. The boxes are set and leveled first; the countertop template is taken only once every base is locked in.",
);

const condoHero = jobPhoto(
  CONDO,
  1,
  "flooring",
  "Open condo great room with new brown oak wide-plank vinyl flooring running toward a white shaker kitchen with a stainless French-door fridge, crown molding and recessed lights",
  "One floor in one direction, from the front door through the kitchen. No transitions means no strips to trip on and nothing to collect dirt.",
);

const frenchHero = jobPhoto(
  FRENCH,
  1,
  "windows-doors",
  "Installer in a Prestigious Home Improvements shirt kneeling on brick pavers to seal the sill of dark bronze outswing French doors under an arched glass transom in a yellow stucco wall",
  "The sill is where doors leak. Blue tape masks the tile, and the threshold gets sealed before the trim ever goes back on.",
);

export const postsE: Project[] = [
  /* ------------------------------------------------------------------ */
  /* 1. Gray shaker kitchen with an espresso island                       */
  /* ------------------------------------------------------------------ */
  {
    slug: GRAY_KITCHEN,
    title: "Gray Shaker Kitchen With an Espresso Island and Quartz Counters",
    seoTitle: "Gray Shaker Kitchen Remodel With Espresso Island, SWFL",
    seoDescription:
      "Light gray shaker cabinets, an espresso island, white quartz and a butler's pantry nook on wide-plank LVP in a Southwest Florida home. Free estimate.",
    city: "Southwest Florida",
    date: "",
    serviceSlugs: ["kitchen-remodeling", "flooring"],
    summary:
      "A full kitchen in light gray shaker cabinets with crown molding, a charcoal-stained island under white quartz, a glossy subway-tile backsplash and a butler's pantry nook by the laundry room, all on new wide-plank light oak LVP.",
    storyTitle: "Light cabinets, a dark island, and a wall that became a pantry",
    body: [
      "This single-story Southwest Florida home got a new kitchen from the floor up. The photos were taken in the last days of the job: the island and the main run are finished, but the pantry nook is still waiting on its countertop, a few outlets have no covers yet, and the end panel on the peninsula is still bare. That is a useful moment to photograph, because you can see how the pieces go together before the final trim hides it.",
      "The cabinets are light gray shaker-style doors with a raised center panel, topped with a stacked crown that runs straight along the ceiling line. The run ends at the arched doorway with open corner shelves instead of a dead-end cabinet, which is where cookbooks or everyday plates tend to live. The stainless side-by-side fridge sits inside a tall cabinet surround, and the cabinet over the range is set higher and shallower so the microwave or hood that goes in last has room to breathe.",
      "The island is the one dark piece in the room: a charcoal-stained shaker box with drawers on the working side and finished end panels, under white quartz with soft gray veining. Light uppers keep a kitchen bright; a dark island hides the fingerprints and scuffs where hands and bar stools actually land. The same quartz runs along the sink wall and wraps the peninsula, which ends at a short pony wall with a quartz ledge, open to the living room on the other side.",
      "The backsplash is a glossy beige subway tile with a slightly rippled, handmade look, run in a standard offset. Over the black undermount sink there is a matte black spring-coil pull-down faucet, a small detail that ties the sink wall to the island. Overhead, recessed lights do the general lighting, and the round tray ceiling with its cove light gives the kitchen a center without a hanging fixture in the way.",
      "The last photo is the part most kitchens skip. A wall recess next to the laundry room was fitted out as a butler's pantry: upper cabinets with an open shelf for a coffee maker or microwave, three drawer bases below, the same subway tile on the wall, and a spot for the countertop once it arrives. Fitting cabinets into a recess is slower than lining them along an open wall, because every box has to be scribed to walls that are never perfectly square. Done right, it looks like it was always there.",
      "Under all of it is wide-plank light oak LVP that runs from the kitchen into the laundry room without a transition strip. Whether the floor goes under the cabinets or stops at the toe kick depends on the product. A glue-down or rigid-core plank can run under the boxes; a floating floor should not be pinned by a heavy island, or it cannot move with the seasons. That is one of the questions we settle before the cabinets are ordered, not on install day.",
      "If you are pricing a kitchen like this, ask any contractor: Are the cabinets ordered and inspected before demo starts? Is the countertop templated after the bases are set, not from the drawings? Does the floor go under the cabinets, and why? Who pulls the permit if plumbing or electrical moves? Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte, remodeling kitchens across Charlotte, Sarasota, Lee and Manatee counties. Call for a free in-home estimate.",
    ],
    scope: [
      "Light gray shaker cabinets with raised center panels and a stacked crown",
      "Open corner shelves at the end of the run by the arched doorway",
      "Charcoal-stained island with drawers and finished end panels",
      "White quartz counters with gray veining on the island, sink wall and peninsula ledge",
      "Glossy beige subway-tile backsplash",
      "Black undermount sink with a matte black spring pull-down faucet",
      "Stainless side-by-side fridge in a tall surround, stainless electric range",
      "Butler's pantry nook in a wall recess by the laundry room",
      "Wide-plank light oak LVP through the kitchen and laundry room",
    ],
    duration: "",
    before: grayHero,
    after: grayHero,
    gallery: [
      jobPhoto(
        GRAY_KITCHEN,
        2,
        "kitchen",
        "Kitchen seen from the living room: gray shaker cabinets, a stainless range under a raised cabinet, a black faucet at the sink and a quartz-topped peninsula ending at a pony wall beside an arched doorway",
        "The peninsula ends at a pony wall with a quartz ledge. The end panel is still bare here; it gets a finished skin after the counter is set.",
      ),
      jobPhoto(
        GRAY_KITCHEN,
        3,
        "kitchen",
        "Wide view of the remodeled kitchen under a round tray ceiling with a cove light, the dark island in the middle of light oak vinyl plank flooring and a laundry room visible through the doorway",
        "Recessed cans handle the task light; the tray ceiling gives the room a center without a pendant hanging over the island.",
      ),
      jobPhoto(
        GRAY_KITCHEN,
        4,
        "kitchen",
        "Close view of the charcoal-stained shaker island with a white veined quartz top, folded towels on it, a stainless range and subway tile behind",
        "Quartz with soft veining reads as marble from across the room but shrugs off lemon juice and red wine, which marble does not.",
      ),
      jobPhoto(
        GRAY_KITCHEN,
        5,
        "kitchen",
        "Butler's pantry built into a wall recess: gray upper cabinets with an open shelf, three drawer bases with no countertop yet, subway tile on the wall and a washer in the laundry room beyond",
        "A recess like this is scribed box by box, because the walls are never truly square. The counter is the last piece to arrive.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Can I mix a dark island with light cabinets?",
        a: "Yes, and it is one of the most practical combinations in a Florida kitchen. Light perimeter cabinets keep the room bright, and a dark island hides the wear where people lean, sit and set bags down. Keep the door style the same on both so the room reads as one design.",
      },
      {
        q: "Should new flooring go under the kitchen cabinets?",
        a: "It depends on the product. Glue-down vinyl and rigid-core plank can run under the boxes. A floating floor should stop at the cabinets and the island, because a heavy island pins the planks and stops the floor from expanding. We decide this with you before the cabinets are ordered.",
      },
      {
        q: "Do I need a permit for a kitchen remodel in Southwest Florida?",
        a: "Replacing cabinets, counters and a backsplash in the same layout usually does not need a permit. Moving the sink, adding circuits for an island or relocating the range does. As a licensed contractor we pull any permit the job needs and schedule the inspections.",
      },
      {
        q: "Why do the photos show unfinished spots?",
        a: "These were taken before the final walkthrough: the pantry counter was still at the fabricator, and outlet covers and the peninsula end panel go on last. We photograph jobs as they are, not staged.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. Pool home: LVP floors and a white kitchen, mid-job                */
  /* ------------------------------------------------------------------ */
  {
    slug: POOL_HOME,
    title: "White Shaker Kitchen and New LVP Floors in a Pool Home, Mid-Job",
    seoTitle: "Kitchen and LVP Flooring Remodel in a SWFL Pool Home",
    seoDescription:
      "Mid-job photos: wide-plank LVP through a vaulted-ceiling pool home, white shaker cabinets going in at a black-frame window over the lanai. Free estimate.",
    city: "Southwest Florida",
    date: "",
    serviceSlugs: ["whole-home-remodeling", "kitchen-remodeling", "flooring"],
    summary:
      "Progress photos from a single-story pool home: new wide-plank light oak LVP through the living room, bedrooms and kitchen, fresh gray paint, and white shaker cabinets being set under a black-framed window that looks out at the screened pool.",
    storyTitle: "What a remodel looks like halfway through",
    body: [
      "Most project photos are taken on the last day. These were taken in the middle of the job, which is when you learn the most about how a contractor works. The house is a single-story Southwest Florida pool home with a vaulted living room ceiling, a screened pool cage and a brick-paver lanai. By the time these were shot the new floor was down everywhere, the walls were painted, and the kitchen cabinets were going in.",
      "The floor went first. Wide-plank light oak LVP runs through the living room, down the hall and into both bedrooms in a single direction, so the house reads as one space instead of a set of rooms. Look at the bottom of the walls: the baseboards are not back on yet. That is the correct order. The floor is laid with an expansion gap at every wall, and the base goes on afterward to cover the gap, not the other way around. By the sliding door you can see the foam underlayment and two sample planks sitting on it.",
      "The walls have been painted a warm gray. One closet still shows the old salmon color behind its opening, so paint was still being finished room by room when the camera came out. In the living room the vaulted ceiling and ceiling fans stayed; the floor and paint do most of the work of making a 1980s or 1990s house feel current, at a fraction of the cost of moving walls.",
      "The kitchen is the busiest photo. White shaker cabinets are being set on the finished floor: a farmhouse-style apron sink base in the center, three-drawer bases on each side, and glass-door uppers at the end of the run. The cabinet tops are open and there are no counters yet, which is normal. The countertop template is taken only after every base is set, shimmed and screwed together, so the stone fits the cabinets as they really are. Above the sink is a black-framed window looking straight at the pool, and to the right a black-framed sliding door opens onto the lanai.",
      "One photo shows the back of the sink base from above, with the openings cut for the supply lines and the drain. Those cut-outs look rough on purpose: they are hidden inside the cabinet, and what matters is that the box sits level and the plumbing comes through where the sink and disposal need it. The wires stubbed out of the wall behind the cabinets are for the counter outlets, which get trimmed out after the backsplash.",
      "Doing floors, paint and a kitchen together is cheaper and faster than doing them one at a time over three years, mostly because the sequence is planned once: floor, paint touch-ups, cabinets, counters, backsplash, baseboards, final paint. Each trade comes once instead of coming back to work around the last one's finish.",
      "If you are planning a whole-interior refresh, ask any contractor: What is the order of work, and why? Does the new floor run under the cabinets or stop at them? Who takes the countertop template, and when? Will the baseboards be replaced or reinstalled? Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte, handling floors, kitchens and whole-home remodels across Southwest Florida. Call for a free in-home estimate.",
    ],
    scope: [
      "Wide-plank light oak LVP through the living room, hallway, bedrooms and kitchen",
      "Baseboards held off until the floor is complete, to cover the expansion gap",
      "Walls painted warm gray; existing vaulted ceiling and fans kept",
      "White shaker base cabinets with an apron-front sink base and three-drawer bases",
      "Glass-door upper cabinets at the end of the run",
      "Sink base cut for supply lines and drain; counter outlets stubbed",
      "Black-framed window over the sink and black-framed slider to the paver lanai",
      "Countertops, backsplash and trim still to come when photographed",
    ],
    duration: "",
    before: poolHero,
    after: poolHero,
    gallery: [
      jobPhoto(
        POOL_HOME,
        2,
        "flooring",
        "New light oak vinyl plank floor at a black-framed sliding glass door opening onto a brick-paver lanai with a screened pool, two sample planks lying on foam underlayment",
        "Foam underlayment and sample planks by the slider. The planks stop at the door track with a gap that the threshold trim will cover.",
      ),
      jobPhoto(
        POOL_HOME,
        3,
        "flooring",
        "Vaulted-ceiling living room with freshly painted gray walls, a white ceiling fan, a black-framed window and new light oak vinyl plank flooring, baseboards not yet installed",
        "No baseboards yet, on purpose. The base goes on after the floor so it covers the expansion gap instead of trapping the planks.",
      ),
      jobPhoto(
        POOL_HOME,
        4,
        "flooring",
        "Bedroom with gray walls, a white ceiling fan, a closet opening still painted salmon and new wide-plank oak vinyl flooring running through the doorway",
        "Same plank, same direction, through the doorway. One closet still wears the old color: paint was being finished room by room.",
      ),
      jobPhoto(
        POOL_HOME,
        5,
        "flooring",
        "Second view of the bedroom with a dark-framed window, a white six-panel door and new oak vinyl plank flooring meeting the bare wall",
        "The gap at the bottom of the wall is the expansion space a floating floor needs. It disappears under the new base.",
      ),
      jobPhoto(
        POOL_HOME,
        6,
        "kitchen",
        "Back of a white shaker sink base cabinet seen from above, with openings cut for the water supply and drain, sitting on new vinyl plank flooring",
        "The back of a sink base is cut for the supply lines and the drain. Rough is fine here; level and square is what matters.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "What is the right order for floors, paint and a new kitchen?",
        a: "Floor first in most of the house, paint while the room is empty, then cabinets, countertop template, counters, backsplash, baseboards and final paint touch-ups. Doing them together means each trade comes once and nobody has to protect someone else's fresh finish.",
      },
      {
        q: "Why are the baseboards off in the photos?",
        a: "A floating vinyl floor needs an expansion gap at every wall. The baseboard goes on after the floor and covers that gap. If the base went on first, the planks would have to be scribed to it and could not move.",
      },
      {
        q: "Can we live in the house during a job like this?",
        a: "Usually yes, with planning. Floors go in one area at a time, and the kitchen is the stretch to plan around: there is a window between demo and the new counters when the sink is out of service. We tell you those dates before work starts.",
      },
      {
        q: "When is the countertop measured?",
        a: "After every base cabinet is set, leveled and fastened. The fabricator templates the real cabinets, not the drawings, so the stone fits the walls and the sink cut-out lands exactly where it should.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. Condo: LVP throughout and a white shaker kitchen                  */
  /* ------------------------------------------------------------------ */
  {
    slug: CONDO,
    title: "Wide-Plank LVP Throughout a Condo, With a White Shaker Kitchen",
    seoTitle: "Condo LVP Flooring and White Kitchen Remodel, SWFL",
    seoDescription:
      "Brown-oak rigid-core LVP from the front door to the laundry closet of a Southwest Florida condo, plus a white shaker kitchen with crown molding. Free estimate.",
    city: "Southwest Florida",
    date: "",
    serviceSlugs: ["flooring", "kitchen-remodeling", "whole-home-remodeling"],
    summary:
      "A condo unit with new brown-oak wide-plank LVP running through the great room, kitchen, hallway, bedrooms and laundry closet, and a white shaker kitchen with a French-door fridge, a built-in microwave island and crown molding, photographed just before the baseboards went back on.",
    storyTitle: "One floor, one direction, every room",
    body: [
      "This is a condo, not a house: tall windows look out over a tree canopy and the neighboring building, the ceilings are flat with crown molding and recessed lights, and the great room opens straight into the kitchen. Jobs like this come with their own rules, from elevator reservations to the association's say on what can go under your floor. The photos were taken near the end, with the baseboard stacked on the island and a hard hat still on the counter.",
      "The floor is a brown oak wide-plank luxury vinyl, rigid core, from boxes you can see leaning against the island. It runs in one direction from the front door through the great room, into the kitchen, down the hall and into both bedrooms with no transition strips. That continuity is what makes a condo feel bigger than its square footage. Each doorway shows the same thing: the planks pass under the jamb instead of stopping at a strip.",
      "Look at the door openings and you can see how that was done. The jambs and casings were undercut so the plank slides underneath, which is cleaner than scribing the floor around every piece of trim. The baseboards come off before the floor and go back on after, covering the expansion gap. In the bedroom photo the white shaker door hangs on bronze hinges above a floor that runs straight through.",
      "The laundry closet got the same floor behind its louvered bifold doors, with the washer set back on it. At the bathroom door the vinyl meets the existing white tile, which stayed. That is a normal choice in a condo: tile in wet rooms, plank everywhere else, with a low-profile transition at the threshold.",
      "The kitchen is white shaker cabinets taken up to the crown, with tall pantry cabinets on both sides of a counter-depth stainless French-door fridge that still has its energy label on. The island carries a built-in microwave at one end under a white quartz top, with cabinet doors on the working side. Around the corner, a side counter with a blush herringbone tile backsplash makes a coffee station. The pull-out drawers beside it were still open when the photo was taken.",
      "Condo work is as much about logistics as about the finish. The association usually has to approve the flooring, and many require a sound-rated underlayment under hard floors so the neighbor below does not hear every footstep. Material comes up in an elevator with a reservation, work hours are limited, and dust has to stay inside the unit. We plan all of that before the first box arrives.",
      "If you are planning new floors or a kitchen in a condo, ask any contractor: Does the association have a flooring or underlayment requirement, and have you read it? Will the baseboards and door jambs be undercut, or will you use transition strips? How will dust and noise be controlled? Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte, installing floors and kitchens in houses and condos across Southwest Florida. Call for a free in-home estimate.",
    ],
    scope: [
      "Brown oak wide-plank rigid-core LVP through the great room, kitchen, hallway and bedrooms",
      "Same floor in the laundry closet behind louvered bifold doors",
      "Door jambs and casings undercut so planks run under the trim, no transition strips",
      "Baseboards removed and reinstalled after the floor",
      "Existing white tile kept in the bathroom, with a transition at the door",
      "White shaker kitchen cabinets to the crown with tall pantry cabinets",
      "Counter-depth stainless French-door fridge",
      "Island with built-in microwave under a white quartz top",
      "Blush herringbone tile backsplash at the side counter",
    ],
    duration: "",
    before: condoHero,
    after: condoHero,
    gallery: [
      jobPhoto(
        CONDO,
        2,
        "kitchen",
        "White shaker kitchen with tall pantry cabinets flanking a stainless French-door fridge, an island with a built-in microwave and white quartz top, a hard hat and baseboard pieces on the island, new brown oak vinyl flooring",
        "Baseboard stacked on the island and a hard hat on the counter: the floor is done, the trim is next.",
      ),
      jobPhoto(
        CONDO,
        3,
        "flooring",
        "Open white shaker interior door with bronze hinges leading to the kitchen island, with brown oak vinyl plank flooring running through the doorway",
        "The plank runs under the door jamb. Undercutting the jambs is slower than a transition strip, and it is why the floor reads as one piece.",
      ),
      jobPhoto(
        CONDO,
        4,
        "flooring",
        "Empty condo living room with crown molding, a tall window looking at trees, a shovel and bucket, and new brown oak wide-plank vinyl flooring",
        "A rigid-core plank over a condo slab, laid in one direction toward the windows so the long lines follow the light.",
      ),
      jobPhoto(
        CONDO,
        5,
        "flooring",
        "Condo room with crown molding, a window toward the neighboring building, a black utility cart and new brown oak vinyl plank flooring",
        "Dust control matters in a shared building. Tools and off-cuts stay on a cart, and the hallway outside stays clean.",
      ),
      jobPhoto(
        CONDO,
        6,
        "flooring",
        "Condo bedroom with a tall window over a tree canopy, pale walls and new brown oak wide-plank vinyl flooring",
        "Same plank in the bedroom. On a condo slab the underlayment is usually chosen for sound as much as for moisture.",
      ),
      jobPhoto(
        CONDO,
        7,
        "flooring",
        "Condo hallway with a window at the end, white baseboards and brown oak vinyl plank flooring running toward it",
        "In the hall the planks run the long way, which hides the seams and makes a narrow space look longer.",
      ),
      jobPhoto(
        CONDO,
        8,
        "flooring",
        "White two-panel shaker door on bronze hinges opening into a bedroom with new brown oak vinyl plank flooring",
        "Doors go back on their hinges after the floor. If a door drags on the new plank, the bottom is trimmed, not the floor.",
      ),
      jobPhoto(
        CONDO,
        9,
        "flooring",
        "Laundry closet with white louvered bifold doors and a white front-load washer sitting on new brown oak vinyl plank flooring",
        "The closet gets the same floor. The washer goes back on it with a pan and a level check, so it does not walk.",
      ),
      jobPhoto(
        CONDO,
        10,
        "flooring",
        "Open bathroom door showing existing white tile floor meeting new brown oak vinyl plank in the condo hallway",
        "Tile stays in the wet room. The transition at the door is low-profile so there is nothing to catch a toe.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Does a condo need a special underlayment for vinyl plank?",
        a: "Often, yes. Many associations require a sound-rated underlayment under hard flooring so footsteps do not carry to the unit below. We read the association's flooring rules before we quote and include the right underlayment in the price.",
      },
      {
        q: "Can vinyl plank go over existing tile in a condo?",
        a: "Sometimes. Rigid-core plank can go over flat, well-bonded tile with the grout lines filled, which saves demo noise and dust. If the tile is cracked, hollow or uneven, it comes out. We check with a straightedge before deciding.",
      },
      {
        q: "Do I need HOA or association approval for new floors?",
        a: "Usually. Most Florida condo associations have a flooring policy and an approval form, and some limit work hours and elevator use. We handle the paperwork that concerns the installation and plan the schedule around the building's rules.",
      },
      {
        q: "Transition strips or undercut jambs?",
        a: "Undercut jambs with the plank running underneath, wherever the floor height allows it. Transition strips are for changes in material, like vinyl meeting the bathroom tile, and we keep those low and flush.",
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 4. French doors with an arched transom, crew at work                 */
  /* ------------------------------------------------------------------ */
  {
    slug: FRENCH,
    title: "Our Crew Setting Bronze French Doors Under an Arched Transom",
    seoTitle: "Arched French Door Installation on a SWFL Stucco Home",
    seoDescription:
      "Our crew sealing the sill of dark bronze outswing French doors with an arched transom on a stucco home in Southwest Florida. What a careful install looks like.",
    city: "Southwest Florida",
    date: "",
    serviceSlugs: ["impact-windows-doors", "exterior-remodeling"],
    summary:
      "Two of our installers in company shirts setting a pair of dark bronze aluminum French doors with an arched glass transom in a yellow stucco home: the sill taped and sealed, the stucco cut back around the arch, the dining room cleaned up behind them.",
    storyTitle: "The part of a door install nobody photographs",
    body: [
      "Most door photos show the finished door. These show the crew. A yellow stucco home in Southwest Florida with a herringbone brick-paver walk had an arched opening off the dining room, and it got a pair of dark bronze aluminum French doors with an arched glass transom above them. In the photos one installer is kneeling on the pavers at the threshold with a sealant gun, and another is inside with a blower, clearing the dust before the furniture goes back. A fan runs in the dining room and a ladder stands by the wall.",
      "Look at the hinges. The open leaf is hung on the outside face of the jamb and swings out onto the pavers, so these are outswing doors. In Florida that is the better way for a door to face the weather: under hurricane wind an outswing door presses into its stops and weatherstripping instead of pulling away from them, and wind-driven rain has a harder time getting under the bottom. The trade-off is that the door has to clear the walkway, and the hinges need secured pins, which is standard on a good outswing unit.",
      "The arch is the interesting part. The door and the arched transom are one assembly in one frame, so the rough opening had to match the curve. Around the top you can see the stucco cut back to the sheathing and the block where the old frame came out. That is not damage; it is how a new frame gets set flush, anchored into solid material and sealed edge to edge before the stucco is patched back to it. The raw edge in the photo disappears under new stucco and paint, but the seal behind it is what keeps the water out for the next twenty years.",
      "Now the sill. Blue painter's tape runs along the tile inside and along the threshold outside, and the sealant tube is on the pavers next to the kneeling installer. The sill is where doors leak, not the head. A sloped, sealed sill under the threshold sends any water that gets past the weatherstrip back outside instead of under the tile. It is slow, careful work on your knees, and it is done before any trim goes back on so nothing is hidden.",
      "The yellow product label on the jamb stays on until the inspection. It lists the Florida Product Approval and the design pressure the door was tested to, which is what the inspector and later your insurance inspector will look for. Inside, the dining table is still set with its runner and chairs. People live here. Cleaning as you go, with a blower and a fan, is part of the job, not an extra.",
      "If you are replacing patio or French doors in Southwest Florida, ask any installer: Inswing or outswing, and why for my house? Is the transom part of the approved assembly? How will the sill be sealed and sloped? Who patches the stucco afterward, and is that in the price? Prestigious Home Improvements is a family-owned, licensed contractor (CRC1327831) based in Port Charlotte. Our own crew installs French doors, sliders and impact windows across Charlotte, Sarasota, Lee and Manatee counties. Call for a free in-home estimate.",
    ],
    scope: [
      "Pair of dark bronze aluminum French doors with full glass",
      "Arched glass transom in the same frame, matched to the arched opening",
      "Outswing configuration with exterior hinges and secured pins",
      "Stucco cut back around the arch to set and seal the new frame",
      "Threshold and sill sealed with the tile and pavers masked",
      "Product label left on the jamb for inspection",
      "Dust cleared with a blower and fan before the furniture went back",
      "Stucco patch and paint to follow",
    ],
    duration: "",
    before: frenchHero,
    after: frenchHero,
    gallery: [
      jobPhoto(
        FRENCH,
        2,
        "windows-doors",
        "Installer in a white Prestigious Home Improvements shirt kneeling at the taped threshold of dark bronze French doors while a second installer inside the dining room clears dust with a blower",
        "One installer seals the sill, the other clears the dust. The dining table behind them is still set: people live here.",
      ),
      jobPhoto(
        FRENCH,
        3,
        "windows-doors",
        "Open dark bronze French door leaf on exterior hinges with an installer sealing the threshold and the dining room, chandelier and a fan visible inside",
        "Hinge knuckles on the outside mean an outswing door. Under storm wind it presses into its stops instead of away from them.",
      ),
      jobPhoto(
        FRENCH,
        4,
        "windows-doors",
        "Close view of the French door jamb with a yellow product label, blue tape along the threshold and an installer in a company shirt working at the sill on brick pavers",
        "The yellow label on the jamb lists the product approval and design pressure. It stays on until the inspector has seen it.",
      ),
    ],
    sample: false,
    faqs: [
      {
        q: "Should French doors swing in or out in Florida?",
        a: "Outswing is usually better for weather. Wind pushes the doors into the frame and weatherstripping, and the threshold sheds rain more easily. Outswing doors need room to open and hinges with secured pins, so the right choice also depends on the porch or walkway.",
      },
      {
        q: "Can French doors with an arched transom be impact-rated?",
        a: "Yes. Several manufacturers make French doors with arched or rectangular transoms as a single tested assembly with laminated impact glass. The approval covers the whole unit, so the transom, hinges and anchors must match what was tested.",
      },
      {
        q: "Do you patch the stucco after a door replacement?",
        a: "Yes. Setting a new frame properly often means cutting the stucco back to solid material around the opening. We seal the frame, then patch the stucco and prime it so it is ready for paint. It is part of the job, not a surprise on the invoice.",
      },
      {
        q: "Will the house be open overnight?",
        a: "No. A door replacement is done in a day, and the opening is never left open when the crew leaves. The stucco patch and paint may come on a later visit, but the new door locks on day one.",
      },
    ],
  },
];
