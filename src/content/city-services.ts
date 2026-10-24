import type { Faq } from "./types";

/**
 * City + service landing pages (src/app/service-areas/[slug]/[service]/page.tsx),
 * built only where keyword data shows real search demand (DataForSEO, keywords-core.csv):
 * bathroom remodeling sarasota fl (390/mo), kitchen remodeling sarasota fl (320),
 * kitchen remodeling fort myers (140), impact windows fort myers (90).
 * Prices come from the main service data; local copy must stay specific to the city.
 */
export type CityService = {
  area: string; // area slug
  service: string; // service slug
  seoTitle: string;
  seoDescription: string;
  h1: string;
  eyebrow: string;
  lead: string;
  localTitle: string;
  local: string[];
  notes: { title: string; text: string }[];
  faqs: Faq[];
  /** project.city values to pull real jobs from, in priority order */
  jobCities: string[];
  /** testimonial names to feature first */
  reviewNames: string[];
};

export const cityServices: CityService[] = [
  {
    area: "sarasota",
    service: "bathroom-remodeling",
    seoTitle: "Bathroom Remodeling Sarasota FL | Walk-In Showers & Baths",
    seoDescription:
      "Bathroom remodeling in Sarasota, FL: walk-in showers, tub-to-shower conversions, condo and mid-century baths. Flood-tested waterproofing, permits handled. Free estimate.",
    h1: "Bathroom Remodeling in Sarasota, FL",
    eyebrow: "Sarasota · Siesta Key · Palmer Ranch · Lakewood Ranch",
    lead: "From original pink-tile baths in mid-century Gulf Gate ranches to condo bathrooms on the keys, we rebuild Sarasota bathrooms from the studs out, with every waterproofing layer photographed and flood-tested before tile.",
    localTitle: "What Sarasota Bathrooms Usually Need",
    local: [
      "Sarasota's housing runs from 1950s and 1960s ranch homes in Gulf Gate, South Gate and around the Sarasota School of Architecture neighborhoods to 1970s and 1980s block homes off Beneva and Bee Ridge, and newer construction in Palmer Ranch and Lakewood Ranch. The older homes still have the original bathrooms more often than you would think: small tub-shower combinations, colored ceramic tile set in a mortar bed, cast-iron drains and galvanized supply lines behind the wall.",
      "That age matters once the wall is open. Mortar-bed tile is heavy and slow to remove, and old shower pans were often built without a membrane we would recognize today. Cast-iron drains under the slab can be scaled or cracked, and moving a drain for a curbless shower means cutting concrete. We check the drain, the shutoffs and the subfloor at the estimate, so those costs are on paper before demo, not discovered halfway through.",
      "A large share of Sarasota bathroom work is in condos, especially on Longboat, Lido and Siesta Key and along the bayfront. Associations set work hours, require insurance certificates, control anything touching shared drain stacks and often require sound-rated underlayment under new tile. Seasonal owners are common, so we can run the job while you are up north, with photo updates at every milestone.",
    ],
    notes: [
      {
        title: "Which office permits your bathroom",
        text: "The City of Sarasota Building Department inside city limits, Sarasota County Planning and Development Services for unincorporated areas like Gulf Gate and Palmer Ranch, and Manatee County for the northern part of Lakewood Ranch. We confirm your parcel before we file.",
      },
      {
        title: "Barrier islands and flood zones",
        text: "Bathrooms on the keys and along the bay are often in high-risk flood zones, where remodel costs count toward the FEMA 50% substantial-improvement rule. We check your zone and the structure value before the scope is final.",
      },
      {
        title: "Aging in place",
        text: "Many Sarasota homeowners plan to stay put. Curbless entries, blocking for grab bars in every wall, a fold-down seat and a comfort-height toilet are easiest and cheapest to build in while the room is open.",
      },
    ],
    faqs: [
      {
        q: "How much does a bathroom remodel cost in Sarasota?",
        a: "Sarasota projects follow the same typical 2026 Southwest Florida ranges as the rest of our work: about $12,000 to $22,000 for a tub-to-shower conversion, $18,000 to $32,000 for a full guest bath and $35,000 to $75,000 for a primary bath with a layout change. Condo logistics, mortar-bed tile removal and moving a drain through the slab are what push a Sarasota job toward the top of a range. You get a written, fixed price after the free visit.",
      },
      {
        q: "Do you remodel condo bathrooms on Siesta Key, Lido and Longboat?",
        a: "Yes. We prepare the association application and insurance certificates, plan around elevator reservations and work hours, and use underlayment that meets the building's sound rules. Tell us it is a condo on the first call, because board approval is what most often sets the start date.",
      },
      {
        q: "Can you work on my Sarasota bathroom while I am up north?",
        a: "Yes. We agree on access in advance, send photos of each waterproofing layer and every milestone, and handle inspections without you needing to be there.",
      },
      {
        q: "Can you keep the mid-century character of my bathroom?",
        a: "Often, yes. We can keep a terrazzo floor or a period window, and choose tile, vanity and fixtures that suit the house, while everything behind the wall is rebuilt to current code.",
      },
    ],
    jobCities: ["Sarasota", "Siesta Key", "Sarasota County", "Lakewood Ranch", "Venice"],
    reviewNames: ["Jwb M.", "Fred B."],
  },
  {
    area: "sarasota",
    service: "kitchen-remodeling",
    seoTitle: "Kitchen Remodeling Sarasota FL | Cabinets, Quartz & Islands",
    seoDescription:
      "Kitchen remodeling in Sarasota, FL: new cabinets and quartz, open layouts in mid-century homes, condo kitchens. Cabinets inspected before demo, dates in writing. Free estimate.",
    h1: "Kitchen Remodeling in Sarasota, FL",
    eyebrow: "Sarasota · Gulf Gate · Palmer Ranch · Lakewood Ranch",
    lead: "Closed-in galley kitchens in mid-century Sarasota ranches, builder-grade kitchens in Palmer Ranch and Lakewood Ranch, and condo kitchens on the keys. We order and inspect your cabinets before the old kitchen comes out, and your finish date goes into the contract.",
    localTitle: "What Sarasota Kitchens Usually Need",
    local: [
      "Older Sarasota homes, especially the 1950s through 1970s ranches in Gulf Gate, South Gate and nearby, were built with small, closed kitchens. The most common request we get there is to open the kitchen to the living area. Interior walls in these block homes are often not load-bearing, but not always, and a wall that comes out usually has wiring, plumbing or ductwork to reroute. An engineer confirms it before anything is cut.",
      "In Palmer Ranch, Lakewood Ranch and other master-planned communities, the house is newer but the kitchen is builder-grade: laminate counters, particleboard boxes and an island too small to use. There the work is usually new cabinets and counters in the same layout, sometimes a bigger island, with HOA review only if the exterior changes, such as a new vented hood through the wall.",
      "Our own Sarasota jobs show how the kitchen connects to the rest of the house. On one, we set a PGT pass-through window over the kitchen sink so the counter now serves straight out to the lanai. If you are planning a kitchen and new windows or sliders, we sequence both under one contract so nothing gets opened twice.",
    ],
    notes: [
      {
        title: "Which office permits your kitchen",
        text: "New circuits, moved plumbing, a vented hood or a wall coming out need a permit: from the City of Sarasota inside city limits, Sarasota County for unincorporated areas, or Manatee County in north Lakewood Ranch. Cabinets swapped in place usually do not.",
      },
      {
        title: "Moving the sink to an island",
        text: "Sarasota homes are almost all on slabs, so a sink in a new island means trenching concrete for drain and vent, an inspection and a patch. It adds cost and a few days, priced in writing up front.",
      },
      {
        title: "Condo kitchens",
        text: "On the keys and downtown, the association controls work hours, shared stacks and sound rules. We plan the layout around the existing stacks and prepare the board paperwork before ordering.",
      },
    ],
    faqs: [
      {
        q: "How much does a kitchen remodel cost in Sarasota?",
        a: "Sarasota kitchens follow our typical 2026 Southwest Florida ranges: about $22,000 to $40,000 for new cabinets and counters in the same layout, $45,000 to $85,000 for a full kitchen that keeps the footprint, and $55,000 to $105,000 when the layout changes. Opening a wall in a mid-century home can add $25,000 to $60,000 in structural and finish work. You get a written, fixed price after the free visit.",
      },
      {
        q: "Can you open up the kitchen in my mid-century Sarasota ranch?",
        a: "Usually. We check on the first visit whether the wall carries load, then bring in a Florida engineer to confirm before anything is cut. A non-bearing wall still has wiring or ductwork to reroute, and we price that up front.",
      },
      {
        q: "How long will I be without a kitchen?",
        a: "Counted from demo day: about 3 to 4 weeks for cabinets and counters, 5 to 7 weeks for a full kitchen in the same layout, and 6 to 9 weeks when the layout changes. Selections, permits and cabinet delivery all happen while your old kitchen still works.",
      },
      {
        q: "Can you add a pass-through window from the kitchen to the lanai?",
        a: "Yes, it is a job we have done in Sarasota. The opening is cut in the block wall, a header is set, and an impact-rated pass-through window is installed and trimmed so the counter becomes a serving ledge to the lanai.",
      },
    ],
    jobCities: ["Sarasota", "Sarasota County", "Siesta Key", "Lakewood Ranch", "Venice"],
    reviewNames: ["Fred B.", "Jwb M."],
  },
  {
    area: "fort-myers",
    service: "kitchen-remodeling",
    seoTitle: "Kitchen Remodeling Fort Myers FL | Post-Ian Kitchen Rebuilds",
    seoDescription:
      "Kitchen remodeling in Fort Myers, FL: post-Ian kitchen rebuilds, new cabinets and quartz, open layouts in McGregor and gated communities. Lee County permits handled. Free estimate.",
    h1: "Kitchen Remodeling in Fort Myers, FL",
    eyebrow: "Fort Myers · McGregor · Iona · Cypress Lake",
    lead: "Many Fort Myers kitchens were rebuilt in a hurry after Ian, and many more are still original to 1980s gated communities. We plan the whole kitchen on paper, inspect cabinets before demo and give you a finish date in writing.",
    localTitle: "What Fort Myers Kitchens Usually Need",
    local: [
      "Hurricane Ian's surge flooded homes in Iona, along the Caloosahatchee and near Fort Myers Beach, and in a flooded kitchen the base cabinets, toe-kicks and lower drywall go first. A lot of those kitchens were replaced quickly with whatever cabinets were in stock, and some were never finished properly. We see swollen particleboard boxes, counters set on out-of-level cabinets and appliances on circuits that were never permitted.",
      "South Fort Myers is full of 1970s and 1980s gated golf communities with closed kitchens, soffits hiding ductwork and small electrical panels. Those are the kitchens where opening a wall, removing soffits and adding the circuits a modern kitchen needs make the biggest difference, and where HOA rules apply to anything visible outside. Along McGregor Boulevard, older homes need the same care with plumbing and wiring that any 1950s house does.",
      "In a flood zone, kitchen cost counts toward the FEMA 50% substantial-improvement rule, and after Ian many Fort Myers homes are already close to that line. We check your zone and the structure value before you commit, and we can suggest water-tolerant choices, such as plywood boxes on legs or porcelain floors, if the house could flood again.",
    ],
    notes: [
      {
        title: "Which office permits your kitchen",
        text: "The City of Fort Myers for addresses inside city limits, and Lee County for unincorporated areas such as Iona, McGregor and the gated communities in south Fort Myers. We confirm your parcel and file with the right office.",
      },
      {
        title: "Finishing a rushed rebuild",
        text: "If your kitchen was replaced after Ian and something is not right, we assess what was done and what was permitted, then give you a written scope to finish it properly.",
      },
      {
        title: "Gated communities and HOAs",
        text: "Most south Fort Myers communities control contractor access, work hours and anything exterior, like a hood vent through the wall. We handle the paperwork and plan around the rules.",
      },
    ],
    faqs: [
      {
        q: "How much does a kitchen remodel cost in Fort Myers?",
        a: "Fort Myers kitchens follow our typical 2026 Southwest Florida ranges: about $22,000 to $40,000 for cabinets and counters in the same layout, $45,000 to $85,000 for a full kitchen that keeps the footprint, and $55,000 to $105,000 for a new layout. Unpermitted work from a rushed rebuild or an undersized panel can add to the scope, which we price up front.",
      },
      {
        q: "My kitchen was redone after Ian and the cabinets are already swelling. Can you fix it?",
        a: "Yes. We look at what was installed, check the cabinets, counters and circuits, find out what was permitted, and give you a written scope and price to put it right, whether that is a repair or a replacement.",
      },
      {
        q: "Does the 50% rule affect my Fort Myers kitchen remodel?",
        a: "If the home is in a Special Flood Hazard Area, the kitchen cost counts toward the 50% substantial-improvement threshold together with any other recent work. We check where you stand before you sign.",
      },
      {
        q: "Do you work in Fort Myers gated communities?",
        a: "Yes. We arrange gate access, follow the community's work hours and prepare any HOA paperwork the project needs.",
      },
    ],
    jobCities: ["Bonita Springs"],
    reviewNames: [],
  },
  {
    area: "fort-myers",
    service: "impact-windows-doors",
    seoTitle: "Impact Windows Fort Myers FL | Impact Doors & Sliders",
    seoDescription:
      "Impact windows and doors in Fort Myers, FL, installed by career installers. Post-Ian replacements, sliders, entry doors, Lee County permits and wind mitigation paperwork. Free estimate.",
    h1: "Impact Windows & Doors in Fort Myers, FL",
    eyebrow: "Fort Myers · McGregor · Iona · Gateway",
    lead: "Before we had our own company, we spent years installing windows and doors for other contractors. In Fort Myers we measure, permit and install every opening ourselves, from a single slider to a whole house that still has its pre-Ian windows.",
    localTitle: "What Fort Myers Homes Usually Need",
    local: [
      "Hurricane Ian made landfall just west of Fort Myers in 2022, and Milton added more wind damage in 2024. Homes that came through with their original aluminum windows or with shutters that were never put up are now the ones insurers ask about. Impact glass removes the shutter routine entirely, and with every opening protected a wind-mitigation inspector can credit opening protection on your report.",
      "Fort Myers homes are mostly concrete block, so most replacements are set into the existing block or wood buck. The opening is checked for level, square and soft wood, sealed before the new frame goes in, and the unit is anchored with the type and spacing its Florida Product Approval requires. Product labels stay on the glass until the Lee County or City of Fort Myers inspector has checked them against the permit.",
      "Canal and river homes face more wind exposure than inland streets, and design pressures can be higher for the openings facing the water. In gated communities in south Fort Myers, the HOA usually controls frame color and grid style. We specify the product for your exposure and prepare the HOA submittal before anything is ordered.",
    ],
    notes: [
      {
        title: "Which office permits your windows",
        text: "The City of Fort Myers inside city limits, and Lee County for unincorporated areas such as Iona, McGregor and Gateway. Every replacement opening is permitted and inspected, and you keep the records.",
      },
      {
        title: "Insurance and wind mitigation",
        text: "With every opening protected by impact-rated products, your wind-mitigation report can show opening protection. We hand you the product approvals and permit paperwork the inspector asks for.",
      },
      {
        title: "Flood zones",
        text: "Window and door replacement is part of the cost that counts toward the FEMA 50% rule when it is done together with a larger remodel or rebuild. On its own it rarely comes close, but we keep an eye on it.",
      },
    ],
    faqs: [
      {
        q: "How much do impact windows cost in Fort Myers?",
        a: "Fort Myers follows our typical 2026 Southwest Florida ranges: about $1,200 to $3,800 per window opening, $4,500 to $14,000 per impact sliding glass door, and $2,800 to $15,000 per entry door, depending on size, frame material and design pressure. Your written estimate prices every opening on its own line.",
      },
      {
        q: "Do I need a permit for impact windows in Fort Myers?",
        a: "Yes. Window and door replacement needs a permit from the City of Fort Myers or Lee County, depending on your address. We pull it, provide the product approvals and schedule the inspections.",
      },
      {
        q: "Will impact windows lower my insurance in Fort Myers?",
        a: "Often, yes. Protecting every opening can earn an opening-protection credit on your wind-mitigation report. Ask your agent what your carrier offers; we provide the paperwork the inspector needs.",
      },
      {
        q: "Have you done window work near Fort Myers?",
        a: "Yes. One of our recent window replacement jobs is in Bonita Springs, just south of Fort Myers, with new single-hung windows set into existing stucco openings and the stucco patched around each frame.",
      },
    ],
    jobCities: ["Bonita Springs"],
    reviewNames: [],
  },
];

export function getCityService(area: string, service: string) {
  return cityServices.find((c) => c.area === area && c.service === service);
}
