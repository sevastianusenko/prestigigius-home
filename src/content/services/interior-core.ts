import type { Service } from "../types";

/**
 * Interior core services: whole-home, kitchen, bathroom, additions.
 * Prices are typical Southwest Florida ranges for 2026 and are shown as guidance only;
 * every project gets a written, fixed-price estimate after an in-home visit.
 * Structure mirrors the reference service pages (see docs/REFERENCE-MAP.md); all copy is our own.
 */
export const interiorCore: Service[] = [
  // ───────────────────────────────── WHOLE-HOME ─────────────────────────────────
  {
    slug: "whole-home-remodeling",
    title: "Whole-Home Remodeling",
    navLabel: "Whole-Home Remodeling",
    group: "interior",
    blurb:
      "One contract, one crew and one schedule to update the kitchen, baths, floors and layout of your Southwest Florida home.",
    seoTitle: "Whole-Home Remodeling Port Charlotte FL | Prestigious",
    seoDescription:
      "Whole-home remodeling in Port Charlotte, North Port, Punta Gorda & Venice. Licensed CRC1327831, own crew, permits pulled, fixed price. Free estimate.",
    keywords: [
      "whole home remodel port charlotte",
      "home remodeling port charlotte fl",
      "whole house remodel contractors near me",
      "home remodeling contractor near me",
      "remodeling company near me",
      "remodeling contractor sarasota fl",
      "home remodeling punta gorda",
      "home remodeling north port fl",
      "whole house remodel cost florida",
    ],
    eyebrow: "Whole-Home Remodeling · Port Charlotte & Southwest Florida",
    headline: "One House, One Schedule, One Contract.",
    subhead:
      "Every room scoped and priced in writing before the first wall opens. One person running the whole job, from selections to final inspection. And a dated, room-by-room schedule so you know when each part of the house is yours again.",
    heroPhoto: "whole-home",
    howWeWork: [
      {
        title: "A room-by-room schedule",
        text: "Start and finish dates for each phase go into the contract. If an inspection or a delivery moves a date, you hear it from us first.",
      },
      {
        title: "One point of contact",
        text: "The same person runs your house from demo to final inspection, and you have their direct cell number the whole way through.",
      },
      {
        title: "Changes priced and signed first",
        text: "Whatever we find behind a wall, you see it, you get the price in writing, and you sign before anyone builds it or bills for it.",
      },
      {
        title: "Punch list, then the last invoice",
        text: "We walk every room with you, write the punch list together, close it out, and only then send the final bill.",
      },
    ],
    intro: [
      "A whole-home remodel is what most Southwest Florida homeowners actually need once the kitchen is dated, both bathrooms have the original tile, and the carpet and popcorn ceilings came with the house. Doing it room by room over five years means five rounds of dust, five permits and finishes that never quite match. We plan the whole house at once, then build it with our own crew under one Florida Certified Residential Contractor license, CRC1327831. Tim Fomin and Vlad Filippov started out installing windows and doors for licensed contractors; the company has held its own contractor license since 2025, and they still walk every job.",
      "Whole-home projects go wrong in predictable ways: nobody owns the schedule, selections are made after demo, and the price grows with every change order. Hidden problems turn up too, like cast-iron drain lines that are scaled shut, aluminum branch wiring, or an electrical panel that cannot carry a new kitchen. We prevent most of that with a pre-construction inspection, a written scope that lists every room and every allowance, and a schedule that puts inspections where the county needs them. When we do find something behind a wall, you get a written change order with a price before any work happens.",
      "Homes here are built differently than the remodeling shows assume. Most Port Charlotte, North Port and Punta Gorda houses are concrete block with stucco on a slab, built between the 1970s and the early 2000s. That means plumbing runs under the slab, exterior walls are furred block that cannot hide much, and moving a toilet or island sink means cutting concrete. Humidity punishes cheap cabinets and the wrong drywall. Any work that touches openings must meet hurricane code, many communities have HOA or condo rules, and Charlotte, Sarasota, Lee and Manatee counties each run their own permitting, and we know each office's process.",
    ],
    scopes: [
      {
        title: "Whole-Home Refresh",
        summary: "No walls move. Floors, ceilings, doors, trim, lighting and paint get replaced in every room.",
        changes: [
          { label: "Flooring", detail: "Waterproof LVP or porcelain, room to room" },
          { label: "Ceilings", detail: "Popcorn tested, removed and refinished" },
          { label: "Doors & trim", detail: "Interior doors, baseboard and casing" },
          { label: "Lighting", detail: "LED recessed, fans, switches and outlets" },
          { label: "Paint", detail: "Walls, ceilings and trim in one palette" },
        ],
        priceRange: "$45k–$90k",
        duration: "4–7 weeks",
      },
      {
        title: "Kitchen, Baths & Floors",
        summary: "The package most whole-home clients choose: a new kitchen, two bathrooms and one continuous floor.",
        changes: [
          { label: "Kitchen", detail: "Cabinets, quartz, backsplash, appliances" },
          { label: "Bathrooms", detail: "Primary and guest baths taken to the studs" },
          { label: "Flooring", detail: "One floor, no thresholds between rooms" },
          { label: "Plumbing", detail: "PEX supply and new shutoffs where walls open" },
          { label: "Finish", detail: "Paint, doors, baseboard and fixtures" },
        ],
        priceRange: "$95k–$170k",
        duration: "8–12 weeks",
      },
      {
        title: "Wall Removal & Open Concept",
        summary: "Walls between kitchen, dining and living come out to make one bright room. Engineered and inspected.",
        changes: [
          { label: "Engineering", detail: "Load path checked, beam sized, plans sealed" },
          { label: "Structure", detail: "Flush or dropped beam, inspected before cover" },
          { label: "Utilities", detail: "Wiring, plumbing and ducts rerouted" },
          { label: "Floor patch", detail: "Slab and flooring joined where the wall stood" },
          { label: "Kitchen", detail: "Island or peninsula to anchor the new room" },
        ],
        priceRange: "$25k–$60k plus finishes",
        duration: "3–6 weeks for the structural work",
      },
      {
        title: "Full Gut Renovation",
        summary: "Down to block and studs. New layout, plumbing, wiring, insulation, drywall and every finish.",
        changes: [
          { label: "Demo", detail: "Interior to block and framing, hauled weekly" },
          { label: "Plumbing", detail: "Drains camera-scoped, then replaced" },
          { label: "Electrical", detail: "Panel if needed, AFCI and GFCI to code" },
          { label: "Envelope", detail: "Insulation and moisture-resistant board" },
          { label: "Finishes", detail: "Kitchen, baths, floors, doors, trim, paint" },
          { label: "Openings", detail: "Impact windows and doors on the same permit cycle" },
        ],
        priceRange: "$180k–$350k+",
        duration: "4–6 months",
      },
      {
        title: "Condo or Villa Remodel",
        summary: "Whole-unit remodels in Port Charlotte, Punta Gorda Isles, Venice and Englewood condos and villas.",
        changes: [
          { label: "Approvals", detail: "Board application and insurance certificates" },
          { label: "Sound control", detail: "Acoustic underlayment where required" },
          { label: "Kitchen & bath", detail: "Updated within the existing stacks" },
          { label: "Logistics", detail: "Elevator, parking and debris booked with management" },
        ],
        priceRange: "$60k–$140k",
        duration: "6–10 weeks after board approval",
      },
    ],
    included: [
      "Free in-home estimate and whole-house condition check",
      "Written, itemized fixed-price contract with allowances listed",
      "Design and selection meetings before demo",
      "Engineering and drawings when walls or structure change",
      "All permits pulled and inspections scheduled by us",
      "Our own crew for demo, framing, tile, cabinets and finish work",
      "Licensed plumbing, electrical and HVAC partners we coordinate",
      "Dust walls, floor protection and daily cleanup",
      "Progress updates at every milestone and one point of contact",
      "Final walkthrough, punch list and passed final inspection",
      "Written workmanship warranty",
      "Financing available on approval",
    ],
    cost: {
      title: "What a whole-home remodel costs in Southwest Florida",
      text: [
        "In 2026 most whole-home remodels we price in Charlotte, Sarasota and Lee counties land between $45,000 for a cosmetic refresh and $350,000 or more for a full gut. A typical 1,600 to 2,000 square-foot block home getting a new kitchen, two bathrooms and new floors throughout usually runs $95,000 to $170,000. That works out to roughly $60 to $175 per square foot, depending on how deep we go.",
        "The biggest swings come from layout and plumbing. Keeping the kitchen and baths where they are saves real money, because every drain we move means cutting and re-pouring slab. Cabinet and countertop choices are next. After that it is what we find: an undersized panel, failing cast-iron drains, or a wall that turns out to be load-bearing.",
        "You get a written, fixed price before we start, with every allowance spelled out. If you want to spread the cost, financing is available on approval, and we can phase the work so the most important rooms get done first.",
      ],
      factors: [
        "Square footage and how many rooms are included",
        "Moving plumbing through the slab versus keeping fixtures in place",
        "Structural changes such as removing load-bearing walls",
        "Cabinet, countertop, tile and fixture selections",
        "Condition of electrical panel, wiring and drain lines",
        "Condo or HOA requirements, work hours and approvals",
        "Whether you live in the home during construction",
      ],
    },
    localNotes: [
      {
        title: "Permits and inspections",
        text: "Whole-home work almost always needs building, plumbing and electrical permits, plus mechanical if ductwork moves. We file with Charlotte County, Sarasota County, the City of North Port, Lee County, Cape Coral or Fort Myers depending on your address, record the Notice of Commencement, and schedule every rough and final inspection. You never stand in line at the permit counter.",
      },
      {
        title: "Florida Building Code, wind and flood zones",
        text: "We build to the Florida Building Code 8th Edition (2023). Any new or replaced windows and exterior doors must meet the design wind pressure for your address, so we include product approvals in the permit. In a FEMA flood zone, if the remodel cost reaches 50% of the structure value, the county can treat it as a substantial improvement and require the whole house to meet current flood rules. We check your flood zone and the property appraiser value before we finalize scope.",
      },
      {
        title: "HOA and condo approvals",
        text: "Deed-restricted neighborhoods and condo associations often require an architectural application, contractor insurance certificates and set work hours. We prepare the paperwork, meet the board conditions, and build the approval time into the schedule so nobody is surprised by a stop-work letter.",
      },
    ],
    promises: [
      {
        title: "One point of contact, demo to final",
        text: "You get a direct cell number on day one. No call center, no new face every week, and nobody who has to go find out and call you back.",
      },
      {
        title: "Every room scoped in writing",
        text: "Each room, each allowance and each line of work is listed and priced before demo. If it is not on the page, it is not in the job or the price.",
      },
      {
        title: "Change orders before the work",
        text: "When an old drain or a tired panel turns up, you get photos, a price and the schedule impact, and nothing proceeds until you sign.",
      },
      {
        title: "A written workmanship warranty",
        text: "Handed to you with the permit sign-offs at the final walkthrough, on paper, not as a promise made in the driveway.",
      },
      {
        title: "Licensed and insured, CRC1327831",
        text: "Florida Certified Residential Contractor. Verify the license on the state DBPR website before you sign any contract, ours included.",
      },
    ],
    processTitle: "From First Walkthrough to Final Inspection",
    process: [
      {
        n: "01",
        title: "Whole-house walkthrough",
        kicker: "Free, at your home",
        text: "We look at the slab, drains, panel, windows and attic as well as the rooms you want changed, because surprises cost less on day one than in week six.",
      },
      {
        n: "02",
        title: "Layout and selections",
        kicker: "Before anything is ordered",
        text: "Layout first, then cabinets, tile, fixtures, flooring and paint for every room. Every choice lands on one signed selections sheet, so nothing gets decided in a hurry mid-job.",
      },
      {
        n: "03",
        title: "Contract, engineering and permits",
        kicker: "While life goes on as normal",
        text: "Every room goes into one fixed-price contract. Engineering is ordered if walls move, and we file the permits and any HOA paperwork, then tell you exactly what we are waiting on.",
      },
      {
        n: "04",
        title: "Phased demolition",
        kicker: "Dust walls up first",
        text: "Floors protected, active areas sealed off, and a working bathroom and temporary kitchen kept going if you stay home. Anything we uncover is photographed and priced before we touch it.",
      },
      {
        n: "05",
        title: "Build, room by room",
        kicker: "Updates at every milestone",
        text: "Rough plumbing and electrical, inspections, drywall, cabinets, tile, trim and paint, sequenced so trades never trip over each other and inspections land when the county needs them.",
      },
      {
        n: "06",
        title: "Final walkthrough",
        kicker: "Before the last invoice",
        text: "We walk the whole house with you, build the punch list together, finish it, pass final inspection and hand over the written warranty.",
      },
    ],
    faqs: [
      {
        q: "What does a whole-home remodel cost in Port Charlotte and Southwest Florida?",
        a: "In 2026 our whole-home projects run from about $45,000 for a cosmetic refresh to $350,000 or more for a full gut. A new kitchen, two bathrooms and floors throughout a typical 1,600 to 2,000 square-foot block home usually lands between $95,000 and $170,000. What moves the number most is whether plumbing moves through the slab, the cabinet and tile selections, and what the walkthrough finds in the panel and drains. You get a written, fixed price before anything is signed.",
      },
      {
        q: "Can we live in the house during a whole-home remodel?",
        a: "Often, yes. We phase the work so you keep a working bathroom and a temporary kitchen setup, and we seal off the active areas with dust walls. A full gut is different. For that, most families stay elsewhere for a few months, and the job finishes faster.",
      },
      {
        q: "How long does a whole-home remodel take?",
        a: "A cosmetic refresh takes about 4 to 7 weeks. A kitchen, two baths and floors package takes 8 to 12 weeks. A full gut runs 4 to 6 months. Permit review and HOA approval add time before we start, and we give you the real schedule in writing.",
      },
      {
        q: "Do I need a permit?",
        a: "Almost certainly. Paint, flooring and cabinets swapped in place usually do not need one, but a whole-home project nearly always touches plumbing, wiring, ductwork or structure, and those do. We pull every permit, record the Notice of Commencement and give you the passed inspection records at the end, which matters when you sell or file an insurance claim.",
      },
      {
        q: "What happens if something is wrong behind the walls?",
        a: "We stop, show you, and write a change order with the price and the fix. Nothing extra is done without your signature. Our pre-construction inspection catches most issues, like old drain lines or an undersized panel, before the contract is signed.",
      },
      {
        q: "Do you handle design, or do I need an architect?",
        a: "For most remodels we handle layout and selections with you directly. When walls come out or the structure changes, we bring in a Florida engineer to sign the plans. A separate architect is usually only needed for additions or major exterior changes.",
      },
      {
        q: "Is it cheaper to remodel one room at a time?",
        a: "Usually not. Each separate project has its own mobilization, permits, dumpster and inspections, and you live through the dust again each time. Doing the house in one project is often cheaper than room by room, because it typically saves on mobilization, permits and dumpsters, and it gives you finishes that match.",
      },
      {
        q: "My house was built in the 1970s or 1980s. Does that change anything?",
        a: "Yes, and much of Charlotte County was built in those years, so it is in our planning from day one. Common finds include aging cast-iron drains, polybutylene or galvanized supply lines, aluminum branch wiring in some homes, and popcorn ceilings or old flooring adhesive that must be tested for asbestos before anyone disturbs them. Homes built before 1978 also call for lead-safe work practices on painted surfaces. None of it makes the home unsafe. It just means testing comes before demolition.",
      },
      {
        q: "Do you remodel condos and villas?",
        a: "Yes. We handle the association application, insurance certificates, elevator protection and work-hour rules in condos and villas across Port Charlotte, Punta Gorda, Venice and Englewood. Board approval is separate from the county permit, so tell us it is an association property on the first call and we build that time into the schedule.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Prestigious Home Improvements holds Florida Certified Residential Contractor license CRC1327831, carries workers' compensation and general liability insurance, and pulls permits on every job that needs one.",
      },
    ],
    related: ["kitchen-remodeling", "bathroom-remodeling", "flooring"],
  },

  // ───────────────────────────────── KITCHEN ─────────────────────────────────
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    navLabel: "Kitchen Remodeling",
    group: "interior",
    blurb:
      "New cabinets, quartz counters, lighting and layout, built by our own crew with a fixed price and a real schedule.",
    seoTitle: "Kitchen Remodeling Port Charlotte FL | Prestigious Home",
    seoDescription:
      "Kitchen remodeling in Port Charlotte, Sarasota, Fort Myers & North Port. Cabinets, quartz, islands, open layouts. Licensed CRC1327831. Free estimate.",
    keywords: [
      "kitchen remodeling port charlotte",
      "kitchen remodel contractors near me",
      "kitchen remodeling sarasota fl",
      "kitchen remodeling fort myers",
      "custom kitchen cabinets port charlotte",
      "countertops installation port charlotte",
      "kitchen remodel cost florida",
      "kitchen remodel near me with financing",
      "kitchen remodel costs 2026",
    ],
    eyebrow: "Kitchen Remodeling · Port Charlotte & Southwest Florida",
    headline: "A Kitchen Remodel You Can Plan Around, in Port Charlotte.",
    subhead:
      "A fixed price and an itemized scope before the old cabinets come out. One person running the job from layout to punch list. And a date in writing for when you will be cooking at home again.",
    heroPhoto: "kitchen",
    howWeWork: [
      {
        title: "Dates on paper",
        text: "Your start and finish dates go into the contract. If a delivery or an inspection shifts anything, we call you before you notice.",
      },
      {
        title: "One point of contact",
        text: "One person runs your kitchen from first measurement to final inspection, and you have their direct cell number.",
      },
      {
        title: "Every change signed first",
        text: "No extra work gets built or billed on a handshake. You see the price, you sign, and then we do it.",
      },
      {
        title: "Punch list, then payment",
        text: "We tour the finished kitchen together, close out every item on the list, and only then send the final invoice.",
      },
    ],
    intro: [
      "We remodel kitchens across Port Charlotte, North Port, Punta Gorda, Venice, Sarasota, Fort Myers and Cape Coral, from new counters and a backsplash to a full layout change with a new island. Design, cabinets, counters, plumbing, electrical, permits and inspections all sit under one contract and one Florida license, CRC1327831. Our own crew handles demo, cabinets, tile and finish carpentry, and we coordinate licensed plumbers and electricians, so you have one schedule and one person to call.",
      "Most kitchen remodels that go sideways fail on timing, communication and money nobody wrote down, not on the tile. Cabinets arrive damaged or late while the family has no kitchen. Counters are templated before cabinets are level and come back with gaps. An island goes in without a dedicated circuit, or a range hood vents into the attic. We avoid this by ordering and inspecting cabinets before demo, setting them dead level, templating stone only after install, and designing circuits and venting into the plan. Everything is written into the scope, so there is no doubt about what you are paying for.",
      "Southwest Florida kitchens come with their own puzzles. In a slab-on-grade block home, moving the sink to an island means trenching the concrete for drain and vent, which we price up front. Exterior walls are block, so new outlets or a vent hood on those walls take more work than in a frame house. Humidity swells cheap particleboard boxes, so we steer you to plywood or high-grade cabinets. Many 1980s and 1990s homes still have soffits hiding ductwork, and condos have shared stacks you cannot move. We plan around all of it and pull the permits with your county.",
    ],
    scopes: [
      {
        title: "Kitchen Refresh",
        summary: "Cabinet boxes and layout stay put. The surfaces you look at and touch every day get replaced.",
        changes: [
          { label: "Doors & fronts", detail: "Refaced over sound boxes" },
          { label: "Countertops", detail: "Quartz or granite, optional" },
          { label: "Backsplash", detail: "Tile up to the upper cabinets" },
          { label: "Hardware", detail: "Soft-close hinges and new pulls" },
          { label: "Lighting", detail: "Under-cabinet LED on its own switch" },
        ],
        priceRange: "$12k–$25k",
        duration: "1–2 weeks",
      },
      {
        title: "Cabinets & Countertops",
        summary: "What most people picture when they say new kitchen. Same layout, new cabinets, stone and sink.",
        changes: [
          { label: "Cabinets", detail: "Shaker or flat panel, soft-close" },
          { label: "Countertops", detail: "Templated after cabinets are level" },
          { label: "Sink & faucet", detail: "Undermount sink, faucet, disposal" },
          { label: "Backsplash", detail: "Tile to the underside of the uppers" },
          { label: "Lighting", detail: "Under-cabinet LED strips" },
        ],
        priceRange: "$22k–$40k",
        duration: "3–4 weeks",
      },
      {
        title: "Full Replacement, Same Layout",
        summary: "Everything new while the sink, range and fridge stay where they are. The most common full-kitchen scope.",
        changes: [
          { label: "Demo", detail: "Cabinets, counters, soffits, old floor out" },
          { label: "Cabinets", detail: "Uppers to the ceiling, pantry pull-outs" },
          { label: "Electrical", detail: "Recessed lights, appliance circuits, GFCI" },
          { label: "Flooring", detail: "Porcelain or LVP into adjoining rooms" },
          { label: "Appliances", detail: "Set, connected, hood vented outdoors" },
        ],
        priceRange: "$45k–$85k",
        duration: "5–7 weeks",
      },
      {
        title: "Layout Change",
        summary: "The sink, range or island moves. On a slab that means cutting concrete, so we price it up front.",
        changes: [
          { label: "Island", detail: "New base, top and code-required outlets" },
          { label: "Slab work", detail: "Trench for drain and vent, then patched" },
          { label: "Plumbing", detail: "Sink and dishwasher relocated" },
          { label: "Electrical", detail: "Circuits moved and added" },
          { label: "Ventilation", detail: "Hood ducted to the exterior" },
          { label: "Flooring", detail: "Patched or replaced across the room" },
        ],
        priceRange: "$55k–$105k",
        duration: "6–9 weeks",
      },
      {
        title: "Wall Removal & Open Concept",
        summary: "A wall between kitchen and living space comes out, with an engineered beam where the load needs one.",
        changes: [
          { label: "Structure", detail: "Beam sized and sealed by an engineer" },
          { label: "Permits", detail: "Plans filed, inspections booked" },
          { label: "HVAC", detail: "Ducts from old soffits rerouted" },
          { label: "Island", detail: "Seating island with prep sink or cooktop" },
          { label: "Finish", detail: "Floor and ceiling joined across the opening" },
        ],
        priceRange: "$85k–$150k",
        duration: "7–10 weeks",
      },
      {
        title: "Condo & Villa Kitchen",
        summary: "A full kitchen inside association rules: fixed plumbing stacks, quiet hours and board approval.",
        changes: [
          { label: "Approval", detail: "Board application and certificates" },
          { label: "Layout", detail: "Planned around existing stacks and exhaust" },
          { label: "Cabinets & counters", detail: "Full-height storage, quartz tops" },
          { label: "Sound", detail: "Acoustic underlayment if required" },
        ],
        priceRange: "$30k–$60k",
        duration: "4–6 weeks after approval",
      },
    ],
    included: [
      "Free in-home estimate with measurements",
      "Layout drawing and selection meetings",
      "Cabinets and materials ordered and inspected before demo",
      "Written fixed-price contract with allowances listed",
      "Permits pulled and inspections scheduled by us",
      "Demo, haul-away and dust protection",
      "Cabinet install by our own crew",
      "Countertop templating and install",
      "Licensed plumbing and electrical connections",
      "Tile backsplash and flooring if in scope",
      "Final walkthrough, punch list and written workmanship warranty",
      "Financing available on approval",
    ],
    cost: {
      title: "What a kitchen remodel costs in Southwest Florida",
      text: [
        "In 2026 a kitchen remodel in Port Charlotte and the surrounding area runs from about $12,000 for refacing to $150,000 for an open layout with a new island. Most homeowners we work with spend $45,000 to $85,000 for a full remodel that keeps the footprint and replaces cabinets, counters, lighting, flooring and appliances.",
        "Cabinets are usually 30 to 40 percent of the budget, so that choice drives everything else. Moving plumbing is the next big variable on a slab, followed by structural changes and appliance packages. A remodel that keeps the sink and range where they are can save $8,000 to $20,000 over one that moves them.",
        "You get a written, itemized price before anything is ordered. Financing is available on approval for homeowners who would rather pay over time.",
      ],
      factors: [
        "Cabinet construction, style and how many linear feet you need",
        "Countertop material and square footage",
        "Moving the sink, range or adding an island sink through the slab",
        "Removing walls or soffits and rerouting ductwork",
        "Appliance package and whether a vented hood is added",
        "Flooring area if it continues into other rooms",
        "Condo or HOA requirements",
      ],
    },
    localNotes: [
      {
        title: "Permits and inspections",
        text: "Replacing cabinets in place may not need a permit, but new circuits, moved plumbing, wall removal or a new vented hood do. We pull the right permits with Charlotte, Sarasota or Lee County, North Port, Cape Coral or Fort Myers, and schedule rough and final inspections so your kitchen is legal and your insurer is satisfied.",
      },
      {
        title: "Florida Building Code, wind and flood zones",
        text: "All work follows the Florida Building Code 8th Edition (2023), including countertop GFCI and AFCI protection. If a kitchen window or door is replaced, it must be rated for your design wind pressure. In a FEMA flood zone, the cost of the kitchen counts toward the 50% substantial improvement threshold, which we check before you commit.",
      },
      {
        title: "HOA and condo rules",
        text: "Associations may require an application, set work hours, limit dumpster placement and ask for sound underlayment under new floors. We handle the paperwork and plan the schedule around approval.",
      },
    ],
    promises: [
      {
        title: "One point of contact, start to finish",
        text: "Their direct number is yours from the first day. No office switchboard, no rotating cast of faces, and no waiting while somebody goes to find the answer.",
      },
      {
        title: "An itemized scope before demo",
        text: "Every line of work is written down and priced before the first cabinet comes off the wall. Anything missing from the scope is not part of the job, and not part of the price.",
      },
      {
        title: "Cabinets checked before your kitchen comes out",
        text: "New cabinets are delivered and inspected for damage and missing pieces before demo day, so you are not living with an empty room while parts are reordered.",
      },
      {
        title: "A written workmanship warranty",
        text: "You get it on paper with your permit sign-offs at the final walkthrough, not as a verbal promise on the last day.",
      },
      {
        title: "Licensed and insured, CRC1327831",
        text: "Florida Certified Residential Contractor. Verify the license on the state DBPR website before you sign any contract, ours included.",
      },
    ],
    processTitle: "From First Measurement to Final Walkthrough",
    process: [
      {
        n: "01",
        title: "Free in-home estimate",
        kicker: "At your kitchen table",
        text: "We measure every wall, check the panel, plumbing and venting, and talk through how you cook, store and entertain before anything gets drawn.",
      },
      {
        n: "02",
        title: "Layout and selections",
        kicker: "Before anything is ordered",
        text: "A layout drawing first, then cabinets, counters, sink, faucet, backsplash and appliances. We help you compare cabinet lines and stone so the choices are made calmly, not mid-demo.",
      },
      {
        n: "03",
        title: "Scope, permits and ordering",
        kicker: "While you still have a kitchen",
        text: "Every line goes into a fixed-price contract. We file the permits with your county, order the cabinets, and inspect them on arrival before we schedule demo.",
      },
      {
        n: "04",
        title: "Demolition",
        kicker: "About 1 to 2 days",
        text: "Dust walls up, floors covered, and a temporary sink or counter set up if you need one. Anything we uncover is photographed and written up as a priced change order for you to approve first.",
      },
      {
        n: "05",
        title: "Build",
        kicker: "Updates at every milestone",
        text: "Rough plumbing and electrical, inspection, cabinets set level, counters templated in place, then backsplash, flooring, lighting and appliances. One person runs every trade.",
      },
      {
        n: "06",
        title: "Final walkthrough",
        kicker: "Before the last invoice",
        text: "We walk the kitchen side by side, write down every punch item and close each one. Final inspection passed, written warranty in your hands, then we bill.",
      },
    ],
    faqs: [
      {
        q: "How much is a kitchen remodel in Port Charlotte and Southwest Florida?",
        a: "Online ranges are too wide to be useful. Ours run from about $12,000 for a refresh to $150,000 for an open layout with an island, and most full kitchens that keep the same footprint land between $45,000 and $85,000. Three things move the number most: cabinets, which are usually 30 to 40 percent of the budget; whether the sink or range moves, which on a slab means cutting concrete; and what we find in the panel and drain lines. We give you a written, fixed price after the free in-home visit, and if it lands above your budget we will show you a scope that fits.",
      },
      {
        q: "Does a kitchen remodel need a permit?",
        a: "Cabinets and counters swapped in the same spots, paint, flooring and a like-for-like appliance usually do not. New circuits, recessed lights, a moved sink, a new vented hood or a wall coming out do. What triggers a permit is the kind of work involved, not how much you spend. We pull the permits ourselves and give you the passed inspection records at the end, which matters when you sell or file an insurance claim.",
      },
      {
        q: "How many weeks will I be without a working kitchen?",
        a: "Not as long as the project itself, because layout, selections, permits and cabinet delivery all happen while your old kitchen still works. From demo day: about 1 to 2 weeks for a refresh, 3 to 4 weeks for cabinets and counters, 5 to 7 weeks for a full replacement that keeps the layout, and 6 to 10 weeks when the layout changes or a wall comes out. We can set up a temporary sink and counter, and most families stay in the house.",
      },
      {
        q: "What happens when you uncover a problem behind the walls?",
        a: "You see photos and receive a priced change order in writing with the price and the schedule impact, and nothing happens until you sign it. In older Port Charlotte homes the usual finds are corroded drain lines, an undersized panel or a soffit full of ductwork. Surprises happen. Spending your money without asking does not.",
      },
      {
        q: "Will my electrical need upgrading?",
        a: "Often. That comes from code, not from us trying to upsell. With a permit open, current code applies: a pair of 20-amp countertop circuits, GFCI protection on countertop outlets, AFCI protection on kitchen circuits, and dedicated circuits for appliances like the dishwasher and disposal. Many 1970s and 1980s homes here have none of that, and some have panels that cannot carry it. We look at the panel during the first visit, so any upgrade is already in your number.",
      },
      {
        q: "Can a wall come out to open the kitchen up?",
        a: "Usually. In many Southwest Florida block homes the roof trusses span to the exterior walls, so interior walls are often not load-bearing, but not always. A non-bearing wall still has wiring, plumbing or ductwork to reroute. A bearing wall needs an engineer, a sized beam and a permit. Most of the time we can tell on the first visit, and an engineer confirms it before anything is cut.",
      },
      {
        q: "Can you move my sink to an island?",
        a: "Yes. On a slab foundation we cut a trench in the concrete for the drain and vent, have it inspected, then patch and finish the floor. It adds cost and a few days, and we price it in writing up front.",
      },
      {
        q: "Will I be choosing every finish on my own?",
        a: "No. We help you narrow cabinets, counters, tile and fixtures and you sign off on a selections sheet well before construction, because budgets usually slip on decisions rushed through mid-project. Working with a designer already, or holding a plan you love? We will follow it. You can also supply your own appliances, and we install and connect them.",
      },
      {
        q: "Can my current cabinets be saved?",
        a: "Sometimes. Refacing makes sense if the cabinet boxes are sound and you like where everything sits, and it costs a fraction of new cabinets. It does not work when boxes near the sink or dishwasher have swollen from moisture, which is common with particleboard in our humidity, or when you want a different layout. For new cabinets, plywood boxes with solid wood or quality MDF doors hold up best here. You will get a straight answer on which situation you are in.",
      },
      {
        q: "My house was built in the 1970s or 1980s. Does that change anything?",
        a: "Yes, and much of Charlotte County dates from then, so it is in our planning from day one. Common finds include aging cast-iron drains, polybutylene or galvanized supply lines, small panels and soffits hiding ductwork. Old flooring, adhesive and popcorn ceilings can contain asbestos that no one can spot by eye, so work pauses for a lab test whenever we suspect it. Painted surfaces in homes built before 1978 call for lead-safe work practices.",
      },
      {
        q: "Quartz or granite in Florida?",
        a: "Both work well. Quartz needs no sealing and has consistent color. Granite handles heat better. Either one is far better than laminate in our humidity. We help you compare slabs before ordering.",
      },
      {
        q: "Do you remodel condo and HOA kitchens?",
        a: "Yes. A county permit does not cover association approval, and the board may set work hours, elevator use, insurance certificates and rules for shared stacks. Mention the association on the first call. Board paperwork is what delays start dates most often, and it is simple to plan for.",
      },
    ],
    related: ["whole-home-remodeling", "flooring", "painting"],
  },

  // ───────────────────────────────── BATHROOM ─────────────────────────────────
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    navLabel: "Bathroom Remodeling",
    group: "interior",
    blurb:
      "Walk-in showers, tub-to-shower conversions, master baths and safer senior bathrooms, waterproofed right and built by our own crew.",
    seoTitle: "Bathroom Remodeling Port Charlotte FL | Walk-In Showers",
    seoDescription:
      "Bathroom remodeling in Port Charlotte & Sarasota: walk-in showers, tub-to-shower, master baths, senior & ADA baths. Licensed CRC1327831. Free estimate.",
    keywords: [
      "bathroom remodeling port charlotte",
      "bathroom remodel contractors near me",
      "bathroom remodeling sarasota fl",
      "walk in shower installation",
      "tub to shower conversion port charlotte",
      "master bath remodel",
      "senior bathroom remodel",
      "ada bathroom remodel",
      "bathroom remodel near me with financing",
      "bathroom remodel cost breakdown",
    ],
    eyebrow: "Bathroom Remodeling · Port Charlotte & Southwest Florida",
    headline: "A Bathroom That Stays Dry Behind the Tile.",
    subhead:
      "A fixed price and an itemized scope before the old tile comes off. Photos of every waterproofing layer while you can still see it. And a firm date for when you can shower at home again.",
    heroPhoto: "bathroom",
    howWeWork: [
      {
        title: "Dates on paper",
        text: "Start and finish dates go into the contract. If glass, tile or an inspection moves a date, you hear it from us first.",
      },
      {
        title: "One point of contact",
        text: "One person runs your bathroom from the first visit to the final flush test, and you have their direct cell number.",
      },
      {
        title: "Every change signed first",
        text: "Rot behind the old tub or a cracked drain gets photographed and priced. You sign before we build or bill it.",
      },
      {
        title: "Waterproofing on camera",
        text: "Rough plumbing, the pan and the membrane are photographed and flood-tested while they are still visible.",
      },
    ],
    intro: [
      "We remodel bathrooms across Port Charlotte, North Port, Punta Gorda, Englewood, Venice, Sarasota, Fort Myers and Cape Coral: design and fixture choices, plumbing, wiring, the waterproofing system, tile, glass, permits and inspections, all under one contract. The most common jobs are walk-in showers, tub-to-shower conversions, primary bath remodels and safer bathrooms for homeowners who plan to stay put as they get older. Our own crew does the demo, waterproofing and tile, and licensed plumbers and electricians work under our license, CRC1327831.",
      "The bathroom is where shortcuts hide best and cost the most. Tile set over drywall or a pan with no slope looks fine for a year, then the grout darkens, the baseboard swells and mold shows up in the closet next door. Glass doors leak when the curb is not level. Grab bars pull out when there is no blocking. We prevent this with a mortar-sloped or foam pan, a continuous waterproof membrane, a 24-hour flood test, solid blocking for every bar and a level curb or a true curbless entry. These steps are written into your scope, not left to whoever shows up.",
      "Southwest Florida bathrooms have a few quirks. Almost every house sits on a slab, so moving a drain or recessing a curbless shower means cutting concrete and re-pouring, which we price in writing. Many 1970s to 1990s homes still have cast-iron drains and galvanized or polybutylene supply lines that we replace while the wall is open. Humidity is constant, so exhaust fans must discharge outdoors rather than into the attic. Condos have shared stacks and quiet hours. We plan for all of it and pull the permit with your county.",
    ],
    scopes: [
      {
        title: "Bathroom Refresh",
        summary: "No drains move and no walls open. The vanity, toilet, fixtures, lighting and paint get replaced. Priced at the visit.",
        changes: [
          { label: "Vanity & top", detail: "New cabinet, quartz top and sink" },
          { label: "Toilet", detail: "Comfort height, on the existing drain" },
          { label: "Fixtures", detail: "Faucet, shower trim, bars and hooks" },
          { label: "Mirror & lighting", detail: "New fixture on the same circuit" },
          { label: "Paint", detail: "Walls, ceiling and trim" },
        ],
      },
      {
        title: "Walk-In Shower Rebuild",
        summary: "The shower comes out to the block or studs and goes back better, often larger, with bench, niche and glass.",
        changes: [
          { label: "Demolition", detail: "Tile and backer out to the studs" },
          { label: "Pan", detail: "Mortar or foam, sloped to the drain" },
          { label: "Waterproofing", detail: "Full membrane, 24-hour flood test" },
          { label: "Bench & niche", detail: "Framed before the membrane goes on" },
          { label: "Valve & heads", detail: "Pressure-balanced, rain plus handheld" },
          { label: "Glass", detail: "Frameless, measured after grout" },
        ],
        priceRange: "$14k–$28k",
        duration: "2–3 weeks",
      },
      {
        title: "Tub-to-Shower Conversion",
        summary: "The tub comes out and a tiled walk-in shower goes in. The bathroom job homeowners ask about most, and the most underestimated.",
        changes: [
          { label: "Tub removal", detail: "Wall and slab checked underneath" },
          { label: "Drain", detail: "Converted for a shower, slab cut if needed" },
          { label: "Waterproofing", detail: "Sloped pan and membrane, flood-tested" },
          { label: "Tile", detail: "Walls, floor and a recessed niche" },
          { label: "Entry", detail: "Low curb or curbless, frameless glass" },
        ],
        priceRange: "$12k–$22k",
        duration: "1.5–3 weeks",
      },
      {
        title: "Full Replacement, Same Layout",
        summary: "Everything new, with every fixture kept in its current spot. The most common guest-bath scope.",
        changes: [
          { label: "Shower or tub", detail: "Rebuilt in the same spot" },
          { label: "Waterproofing", detail: "New membrane behind all of it" },
          { label: "Vanity & top", detail: "Cabinet, quartz top, faucet, mirror" },
          { label: "Flooring", detail: "Porcelain over a prepared slab" },
          { label: "Ventilation", detail: "Exhaust fan ducted outdoors" },
        ],
        priceRange: "$18k–$32k",
        duration: "2–3 weeks",
      },
      {
        title: "Primary Bath & Layout Change",
        summary: "The garden tub goes, the shower grows, and drains move through the slab. Most primary baths land here.",
        changes: [
          { label: "Layout", detail: "Tub out, oversized shower in" },
          { label: "Slab work", detail: "Drains cut, rerouted and inspected" },
          { label: "Shower", detail: "Curbless or low curb, bench, two heads" },
          { label: "Vanity", detail: "Double vanity with drawer storage" },
          { label: "Lighting", detail: "Recessed, sconces, lighted mirror" },
          { label: "Optional", detail: "Freestanding tub, heated floor, water closet" },
        ],
        priceRange: "$35k–$75k",
        duration: "3–6 weeks",
      },
      {
        title: "Aging-in-Place & Curbless",
        summary: "A safer bathroom for staying in the home you love, built to ADA guidelines where you need them.",
        changes: [
          { label: "Entry", detail: "Slab recessed for a zero-step shower" },
          { label: "Support", detail: "Blocking in every wall, grab bars placed" },
          { label: "Seating", detail: "Fold-down or built-in seat at your height" },
          { label: "Access", detail: "Wider door, comfort toilet, roll-under vanity" },
          { label: "Safety", detail: "Slip-resistant tile, anti-scald valve" },
        ],
        priceRange: "$20k–$45k",
        duration: "2–4 weeks",
      },
    ],
    included: [
      "Free in-home estimate and moisture check",
      "Layout plan and selection help for tile, glass and fixtures",
      "Written fixed-price contract with allowances listed",
      "Permits pulled and inspections scheduled by us",
      "Demo, haul-away and dust protection",
      "Sloped shower pan and full waterproofing membrane",
      "24-hour flood test before tile",
      "Photos of the waterproofing before tile covers it",
      "Blocking for grab bars and accessories",
      "Licensed plumbing and electrical work",
      "Exhaust fan ducted to the exterior",
      "Final walkthrough and written workmanship warranty",
      "Financing available on approval",
    ],
    cost: {
      title: "What a bathroom remodel costs in Southwest Florida",
      text: [
        "In 2026 a tub-to-shower conversion in Port Charlotte typically costs $12,000 to $22,000. A full guest bath remodel runs $18,000 to $32,000, and a master bath remodel ranges from $35,000 to $75,000. Senior and ADA-friendly bathrooms usually fall between $20,000 and $45,000, depending on whether we recess the slab for a curbless entry and widen the doorway.",
        "Here is a typical bathroom remodel cost breakdown: about 35 to 45 percent is labor for demo, waterproofing and tile, 20 to 30 percent is tile, glass and fixtures, 15 to 20 percent is plumbing and electrical, and the rest covers permits, disposal and the vanity and top. Moving the drain or going curbless is the biggest single add on a slab.",
        "Every bathroom gets a written, fixed price before work starts. Bathroom remodel financing is available on approval, which many homeowners use to do the shower right instead of buying a cheap insert.",
      ],
      factors: [
        "Size of the bathroom and the shower",
        "Moving drains or recessing the slab for a curbless entry",
        "Tile size and pattern, glass type and fixture finish",
        "Condition of supply lines, drains and the wall behind the tub",
        "Vanity, countertop and storage choices",
        "Accessibility features such as wider doors and grab bars",
        "Condo rules and access",
      ],
    },
    localNotes: [
      {
        title: "Permits and inspections",
        text: "In Florida, a bathroom remodel that changes plumbing, electrical or framing needs a permit, and that covers most shower conversions. We pull it with Charlotte County, Sarasota County, North Port, Lee County, Cape Coral or Fort Myers, and schedule the rough plumbing, shower pan and final inspections where your jurisdiction requires them.",
      },
      {
        title: "Florida Building Code, wind and flood zones",
        text: "We build to the Florida Building Code 8th Edition (2023), including safety glazing at showers and tubs and GFCI protection at every receptacle. If you replace a bathroom window, it must meet your wind zone, and obscure impact glass is a common upgrade. In a FEMA flood zone, bathroom costs count toward the 50% substantial improvement rule.",
      },
      {
        title: "HOA and condo rules",
        text: "Condo associations usually require approval, insurance certificates and work during set hours, and they may restrict changes to shared drain stacks. We prepare the application and plan the shower around what the building allows.",
      },
    ],
    optionsTitle: "What Goes Behind the Tile, in Order",
    optionsIntro:
      "A shower with a proper waterproofing system and a shower without one look identical on the day they are finished. Once the tile is up, nobody can check, not you and not the next contractor. Here is each layer we install, from the studs out.",
    options: [
      {
        title: "Framing and blocking",
        text: "Studs straightened and furring checked on block walls, with solid blocking set for grab bars, a bench or a future seat.",
        bullets: ["Nearly free before the wall closes, expensive after"],
      },
      {
        title: "Backer board",
        text: "Cement or foam board gives the tile something solid to bond to. On its own it is a tile backer, not a waterproofing layer.",
        bullets: ["Backer board and waterproofing are covered by different standards"],
      },
      {
        title: "The membrane",
        text: "The layer that actually keeps water out of the wall. Sheet or liquid-applied, installed as a complete system from one manufacturer.",
        bullets: ["Rated to ANSI A118.10", "Liquid is applied to the thickness the label calls for"],
      },
      {
        title: "Corners, valve and drain",
        text: "Leaks start at inside corners, around the valve and where the floor meets the drain, so those get pre-formed pieces and a membrane bonded to the drain itself.",
        bullets: ["Bonded to the drain flange, not just lapped near it"],
      },
      {
        title: "Slope, flood test, then tile",
        text: "The pan is pitched to the drain, then plugged and filled for a 24-hour flood test. Only after it holds does tile go on, and we photograph every layer first.",
        bullets: ["At least 1/4 inch of slope per foot", "Grout lets water through; the membrane under it is what stops it"],
      },
    ],
    promises: [
      {
        title: "Waterproofing photos before tile",
        text: "Sent to you while the membrane can still be seen, along with the flood test. A passed inspection is good, but it is not the same as seeing it yourself.",
      },
      {
        title: "An itemized scope before demo",
        text: "Every line of work is written down and priced before the old tile comes off. Anything missing from the scope is not part of the job, and not part of the price.",
      },
      {
        title: "One point of contact, start to finish",
        text: "A direct number from day one. No office switchboard, no rotating cast of faces, and no waiting while somebody goes to find the answer.",
      },
      {
        title: "A written workmanship warranty",
        text: "Handed over with your permit sign-offs at the final walkthrough, on paper, not as a promise on the way out the door.",
      },
      {
        title: "Licensed and insured, CRC1327831",
        text: "Florida Certified Residential Contractor. Verify the license on the state DBPR website before you sign any contract, ours included.",
      },
    ],
    processTitle: "From First Measurement to Final Walkthrough",
    process: [
      {
        n: "01",
        title: "Free in-home estimate",
        kicker: "At your home",
        text: "We measure, look under the vanity and around the tub for soft spots and old leaks, check the shutoffs and find the drain in the slab before we quote.",
      },
      {
        n: "02",
        title: "Layout and selections",
        kicker: "Before anything is ordered",
        text: "We settle the layout, then choose tile, vanity, fixtures and glass. Entry height, bench, niche and grab bar locations are set on paper, and slow-to-arrive items are ordered early.",
      },
      {
        n: "03",
        title: "Scope and permits",
        kicker: "While you still use the room",
        text: "Every line goes into a fixed-price contract. We find out which permit office handles your address, pull the permit and handle any condo or HOA approval.",
      },
      {
        n: "04",
        title: "Demolition",
        kicker: "Dust control up first",
        text: "Floors and paths protected, the doorway sealed, and the old bathroom removed. Rot, cracked drains or old leaks get photographed and priced before we touch them.",
      },
      {
        n: "05",
        title: "Build",
        kicker: "Photos before tile",
        text: "Rough plumbing and electrical, inspection, then the pan and membrane with a 24-hour flood test. Tile, vanity and fixtures follow, and frameless glass is measured after grout.",
      },
      {
        n: "06",
        title: "Final walkthrough",
        kicker: "Before the last invoice",
        text: "We run the shower, check the drain and the fan, walk the room side by side and close every punch item. Final inspection passed, written warranty in hand, then we bill.",
      },
    ],
    faqs: [
      {
        q: "How much is a bathroom remodel in Port Charlotte and Southwest Florida?",
        a: "In 2026 a tub-to-shower conversion typically runs $12,000 to $22,000, a guest bath $18,000 to $32,000, and a primary bath $35,000 to $75,000. Two bathrooms that look the same can be far apart in price because of what is under them: moving a drain on a slab means cutting concrete, a custom tile shower behind frameless glass costs more than a prefab pan with a framed door, and a permit can force old supply lines to be brought up to current code. We give you a written, fixed price after the free in-home visit, not a guess over the phone.",
      },
      {
        q: "How many days or weeks will the bathroom be out of use?",
        a: "The time you go without the room is counted from demo day. Picking finishes and pulling permits both happen before the room goes out of service. Roughly: 1.5 to 3 weeks for a tub-to-shower conversion, 2 to 3 weeks for a full replacement that keeps the layout, and 3 to 6 weeks for a primary bath with a layout change. Frameless glass is measured after the tile is grouted and takes about a week to arrive, which we build into the schedule. Only one bathroom in the house? Mention it at the first visit so we can plan the order of work around it.",
      },
      {
        q: "Do I need a permit for a bathroom remodel in Florida?",
        a: "If plumbing, electrical, ventilation or walls change, yes, and that covers most shower conversions. Swapping a vanity in place usually does not. Inspectors here regularly flag three things homeowners do not expect: the exhaust fan must vent outdoors, not into the attic; glass at a shower or tub must be safety glazing; and a shower has to meet minimum size rules in the Florida plumbing code. Charlotte, Sarasota and Lee counties and the cities inside them each run their own permitting, and we confirm which one covers you first.",
      },
      {
        q: "How do you waterproof a shower behind the tile?",
        a: "Backer board does not stop water. Its job is to give tile a surface to bond to. The membrane does the work, either a sheet or a liquid-applied system, and it should meet ANSI A118.10. If someone says the backer board is enough on its own, look elsewhere. Leaks almost always begin at inside corners, around the valve or where the floor joins the drain, so those spots get extra attention. Then the pan is plugged and flood-tested for 24 hours before tile. You get photos of every layer. Keep them; they are the only proof it is there.",
      },
      {
        q: "Tub or walk-in shower: which should I choose?",
        a: "A tub is worth keeping when young kids need baths, when someone in the house still soaks, or when it is the last tub in the home and resale matters. A shower makes more sense once climbing over the tub wall feels risky or the tub has sat unused for years. Where people get caught out is the drain: the shower drain usually lands in a new spot, and on a slab that can mean cutting concrete. Settle the entry height early, and have us set grab bar blocking, which is cheap to add before the wall closes.",
      },
      {
        q: "Can you build a curbless walk-in shower on a slab?",
        a: "Yes. We cut and recess the slab so the shower floor sits lower than the bathroom floor, then slope it to the drain. It costs more than a low curb, but it is the safest option for aging in place and wheelchair access.",
      },
      {
        q: "Can we keep living at home while you work?",
        a: "Yes, almost always. Floors and paths get protected, the doorway is sealed for dust, and the water stays on except while we connect new lines. In homes with two bathrooms we keep one working at all times. With a single bathroom, getting a working toilet back comes first, as soon as the plumbing lets us.",
      },
      {
        q: "What happens if there is rot or bad plumbing behind the wall?",
        a: "You see photos and receive a priced change order in writing with the price and the schedule impact before we touch it, and nothing proceeds until you sign. No room in the house conceals more damage, since small leaks can run for years out of sight. The usual finds here are rotted framing behind an old tub, termite damage, cracked cast-iron drains and failing polybutylene supply lines, and nobody can see them until the tub is out.",
      },
      {
        q: "My house was built in the 1970s or 1980s. Does that change anything?",
        a: "Yes, and much of Charlotte County dates from then, so it is in our planning from day one. Common finds include aging cast-iron drains and galvanized or polybutylene supply lines. Old vinyl flooring and its adhesive are treated as possible asbestos, and work pauses for a lab test whenever we suspect it. Painted surfaces in homes built before 1978 call for lead-safe work practices. None of it makes the home unsafe. It just means testing comes before demolition.",
      },
      {
        q: "Do you build ADA-compliant bathrooms?",
        a: "We build to ADA guidelines where you need them: curbless entry, grab bars with blocking, correct seat and toilet heights, wider doors and roll-under vanities. For a private home we fit those features to the person using the room.",
      },
      {
        q: "Is a tile shower better than an acrylic insert?",
        a: "A tile shower lasts longer, looks better and can be sized and shaped any way you want. An acrylic insert is cheaper upfront. Either way, what matters most is the waterproofing behind it, and we never skip that step.",
      },
      {
        q: "Do you remodel condo and HOA bathrooms?",
        a: "Yes. Association approval and the county permit are separate, and the association may control work hours, elevator use, insurance certificates and anything touching shared drain stacks. Mention the association on the first call. Board paperwork is what delays start dates most often, and it is simple to plan for.",
      },
    ],
    related: ["kitchen-remodeling", "whole-home-remodeling", "flooring"],
  },

  // ───────────────────────────────── ADDITIONS ─────────────────────────────────
  {
    slug: "home-additions",
    title: "Home Additions & Florida Rooms",
    navLabel: "Home Additions & Florida Rooms",
    group: "interior",
    blurb:
      "Florida rooms, room additions, in-law suites and garage conversions that look like they were always part of the house.",
    seoTitle: "Home Additions & Florida Rooms Port Charlotte FL",
    seoDescription:
      "Florida room additions, room additions, in-law suites and garage conversions in Port Charlotte, North Port & Venice. Engineered, permitted, CRC1327831.",
    keywords: [
      "home additions port charlotte",
      "florida room addition",
      "florida room addition cost",
      "room addition contractors near me",
      "garage conversion to living space",
      "garage conversion contractors near me",
      "in-law suite addition",
      "master suite addition",
      "second story addition florida",
      "home addition cost per square foot",
    ],
    eyebrow: "Home Additions · Port Charlotte & Southwest Florida",
    headline: "More Room, Same Street, One Contract.",
    subhead:
      "Your lot, flood zone and HOA rules checked before anyone draws a plan. One person running the job from engineering to final inspection. And a schedule in writing for permit review, construction and move-in.",
    heroPhoto: "addition",
    howWeWork: [
      {
        title: "The lot checked first",
        text: "Setbacks, flood zone, easements, septic location and HOA rules decide what you can build. We confirm them before design starts.",
      },
      {
        title: "One point of contact",
        text: "The same person runs your addition from plans and permits to the last inspection, with a direct cell number you can use.",
      },
      {
        title: "Every change signed first",
        text: "Soil, septic or a tie-in that needs more work gets photographed and priced. Nothing is built or billed until you sign.",
      },
      {
        title: "Punch list, then payment",
        text: "We walk the new space with you, close every item on the list, pass the final inspection, and only then send the last invoice.",
      },
    ],
    intro: [
      "When the house is too small but you like the street, the schools or the canal behind you, an addition is often the better move. We build Florida rooms, bedroom and primary suite additions, in-law suites, garage conversions to living space and the occasional second story across Port Charlotte, North Port, Punta Gorda, Englewood, Venice, Sarasota, Fort Myers and Cape Coral. Plans, engineering, permits, foundation, shell, systems and finishes sit under one contract, and Tim Fomin and Vlad Filippov run every addition personally under our Florida Certified Residential Contractor license, CRC1327831.",
      "Additions go wrong at the seams. A roof tie-in leaks at the first summer storm. The new slab settles away from the old one and cracks the tile. The air conditioner was never sized for the extra square footage, so the new room is always hot. Or the plan ignored setbacks and the permit stalls for months. We avoid this with a site check before design, engineered plans, a proper footing and dowel tie to the existing slab, a flashed and sealed roof connection, and a load calculation for the HVAC. All of it is in writing before we start.",
      "Southwest Florida additions have specific rules. Most homes are concrete block and stucco on a slab, so we usually build block walls with a tie beam to match. The roof and every opening must meet the design wind speed for your address under the current code. In a flood zone, the new floor may have to be built at or above base flood elevation, which can mean a step up from the existing house. Septic tanks and drain fields limit where you can build on many North Port and Port Charlotte lots. HOA architectural review is common. We plan for all of this from the first visit.",
    ],
    scopes: [
      {
        title: "Florida Room Addition",
        summary: "A bright, air-conditioned room off the back of the house, often replacing a screened porch or open lanai.",
        changes: [
          { label: "Structure", detail: "New slab or lanai slab upgraded, knee walls" },
          { label: "Windows", detail: "Impact windows and sliders on three sides" },
          { label: "Roof", detail: "Extension or insulated panels tied in" },
          { label: "Comfort", detail: "Mini-split or ducts, fan, outlets" },
          { label: "Finish", detail: "Tile or LVP, drywall, paint and trim" },
        ],
        priceRange: "$45k–$95k",
        duration: "8–12 weeks after permit",
      },
      {
        title: "Garage Conversion",
        summary: "An attached garage becomes a bedroom, office, gym or in-law space. No new footprint, so the most affordable room.",
        changes: [
          { label: "Floor", detail: "Raised or leveled, vapor barrier added" },
          { label: "Opening", detail: "Door infilled, impact window set" },
          { label: "Insulation", detail: "Walls and ceiling to energy code" },
          { label: "Systems", detail: "HVAC extended or mini-split, outlets" },
          { label: "Finish", detail: "Drywall, flooring, door and trim" },
        ],
        priceRange: "$40k–$90k",
        duration: "6–10 weeks after permit",
      },
      {
        title: "Room or Bedroom Addition",
        summary: "A new bedroom, office or family room built from the footing up and matched to the house.",
        changes: [
          { label: "Foundation", detail: "Footings and slab doweled to the old slab" },
          { label: "Walls", detail: "Block with tie beam, stucco matched" },
          { label: "Roof", detail: "Trusses and roofing tied in and flashed" },
          { label: "Systems", detail: "Electrical, HVAC, insulation to code" },
          { label: "Openings", detail: "Impact windows and doors for your zone" },
        ],
        priceRange: "$90k–$200k",
        duration: "3–5 months after permit",
      },
      {
        title: "Primary or In-Law Suite",
        summary: "Bedroom, full bath and closet, with an optional kitchenette and private entry for family.",
        changes: [
          { label: "Layout", detail: "Bedroom, walk-in closet, walk-in shower" },
          { label: "Plumbing", detail: "Drains tied to sewer or septic, sized right" },
          { label: "Access", detail: "Private entry, wide doors, curbless shower" },
          { label: "Kitchenette", detail: "Sink and appliances where zoning allows" },
          { label: "Comfort", detail: "Its own mini-split or HVAC zone" },
        ],
        priceRange: "$150k–$300k",
        duration: "4–6 months after permit",
      },
      {
        title: "Second-Story Addition",
        summary: "A new upper floor on a single-story home, where the structure and the lot can carry it.",
        changes: [
          { label: "Engineering", detail: "Walls, footings and slab checked for load" },
          { label: "Structure", detail: "Reinforced block or frame, new roof" },
          { label: "Stairs", detail: "Code-compliant stair inside the footprint" },
          { label: "Envelope", detail: "Impact windows, stucco and roof matched" },
          { label: "Systems", detail: "New HVAC zone, plumbing, service upgrade" },
        ],
        priceRange: "$250k–$500k+",
        duration: "6–9 months after permit",
      },
    ],
    included: [
      "Free site visit and feasibility check",
      "Setback, flood zone, septic and HOA review",
      "Plans and engineering coordinated by us",
      "Written fixed-price contract with allowances listed",
      "Building, electrical, plumbing and mechanical permits pulled by us",
      "Foundation, block or framing and roof by our crew and trusted partners",
      "Impact windows and doors rated for your wind zone",
      "HVAC load calculation and system extension",
      "Exterior matched to the existing house",
      "All inspections scheduled and passed",
      "Final walkthrough and written workmanship warranty",
      "Financing available on approval",
    ],
    cost: {
      title: "What a home addition costs in Southwest Florida",
      text: [
        "In 2026, home addition cost per square foot in Charlotte, Sarasota and Lee counties usually runs $250 to $400 for a finished room addition, and more when it includes a bathroom or kitchen. A Florida room addition costs about $45,000 to $95,000. A garage conversion to living space is the most affordable way to add a room, typically $40,000 to $90,000, because the slab, walls and roof already exist.",
        "Primary suite and in-law suite additions with a full bathroom run $150,000 to $300,000. Second-story additions start around $250,000 and depend heavily on whether the existing walls and footings can carry the load. Plans, engineering, permits and impact windows are real costs in Florida, and we include them in the estimate instead of surprising you later.",
        "You get a written, fixed price after the plans are drawn. Financing is available on approval for qualified homeowners.",
      ],
      factors: [
        "Square footage and type of room",
        "Bathroom or kitchenette in the addition",
        "Flood zone and required floor elevation",
        "Foundation and soil conditions, septic location",
        "Roof tie-in complexity and roofing material",
        "Impact window and door package",
        "HVAC extension versus a new system",
      ],
    },
    localNotes: [
      {
        title: "Permits and inspections",
        text: "Every addition needs signed plans and a building permit, plus electrical, plumbing and mechanical permits as needed. We submit to Charlotte County, Sarasota County, North Port, Lee County, Cape Coral or Fort Myers, answer plan review comments, and schedule footing, slab, tie beam, framing, roofing, rough and final inspections. Review typically takes 3 to 8 weeks depending on the jurisdiction.",
      },
      {
        title: "Florida Building Code, wind and flood zones",
        text: "Additions are built to the Florida Building Code 8th Edition (2023), with engineered connections for the design wind speed at your address, which is 150 mph or higher in much of our area. In a FEMA flood zone the new floor may need to sit at or above base flood elevation, and a garage below that elevation may not be convertible to living space. If the addition reaches 50% of the home value, the whole house may need to meet current flood rules. We check this first.",
      },
      {
        title: "HOA and deed restrictions",
        text: "Many neighborhoods require architectural approval for additions, matching roof and stucco colors, and some limit garage conversions or require covered parking. We prepare the HOA submission with drawings and samples and wait for written approval before we break ground.",
      },
    ],
    promises: [
      {
        title: "Feasibility before design fees",
        text: "Setbacks, flood elevation, septic and HOA limits are checked at the site visit, so you do not pay for plans on a room the lot cannot hold.",
      },
      {
        title: "An itemized scope before ground breaks",
        text: "Plans, engineering, permits, impact openings and finishes are all listed and priced. Anything missing from the scope is not part of the job, and not part of the price.",
      },
      {
        title: "One point of contact, plans to final",
        text: "A direct number from day one, and the same person answering it through plan review, construction and every inspection.",
      },
      {
        title: "A written workmanship warranty",
        text: "Handed over with the permit sign-offs at the final walkthrough, on paper rather than as a promise on the last day.",
      },
      {
        title: "Licensed and insured, CRC1327831",
        text: "Florida Certified Residential Contractor. Verify the license on the state DBPR website before you sign any contract, ours included.",
      },
    ],
    processTitle: "From Site Visit to Final Inspection",
    process: [
      {
        n: "01",
        title: "Site visit and feasibility",
        kicker: "Free, on your lot",
        text: "We walk the property, check setbacks, flood zone, septic and easements, look at how the roof could tie in, and tell you honestly what the lot will allow.",
      },
      {
        n: "02",
        title: "Design and engineering",
        kicker: "Plans you can sign off",
        text: "We work with a Florida engineer or designer on drawings, wind-load calculations and the energy forms the county needs, and you approve the layout and finishes.",
      },
      {
        n: "03",
        title: "Permits and HOA approval",
        kicker: "Typically 3 to 8 weeks of review",
        text: "We submit to your county or city, answer plan review comments and file the HOA application, then confirm a start date once the permit is issued.",
      },
      {
        n: "04",
        title: "Foundation and shell",
        kicker: "Inspected at every stage",
        text: "Footings and slab doweled to the existing house, block walls and tie beam or framing, then the roof tied in, flashed and dried in.",
      },
      {
        n: "05",
        title: "Systems and finishes",
        kicker: "Updates at every milestone",
        text: "Electrical, plumbing and HVAC extended, insulation and drywall, then floors, trim, paint and stucco matched so the seam to the old house disappears.",
      },
      {
        n: "06",
        title: "Final walkthrough",
        kicker: "Before the last invoice",
        text: "We walk the new space side by side, close every punch item, pass the final inspection and hand over the written warranty.",
      },
    ],
    faqs: [
      {
        q: "How much does a home addition cost in Southwest Florida?",
        a: "In 2026 a finished room addition in Charlotte, Sarasota and Lee counties usually runs $250 to $400 per square foot, more with a bathroom or kitchen. A Florida room costs about $45,000 to $95,000, a garage conversion $40,000 to $90,000, and a primary or in-law suite $150,000 to $300,000. Flood elevation, foundation and roof tie-in move the number most. You get a written, fixed price once the plans are drawn.",
      },
      {
        q: "How much does a Florida room addition cost?",
        a: "In 2026, most Florida room additions we build cost $45,000 to $95,000. Enclosing an existing lanai slab with impact windows sits at the low end. A new slab, new roof and a ducted air conditioning extension sits at the high end.",
      },
      {
        q: "How long does a room addition take?",
        a: "Plans and permits usually take 6 to 12 weeks. Construction takes about 8 to 12 weeks for a Florida room and 3 to 6 months for a bedroom or primary suite addition.",
      },
      {
        q: "Can I convert my garage to living space?",
        a: "Usually, yes. We check your flood zone, because a garage slab below base flood elevation may not be allowed as living space, and your HOA, which may require covered parking. Then we raise or level the floor, frame the wall, insulate and add cooling.",
      },
      {
        q: "Do I need an architect for an addition?",
        a: "You need signed plans and engineering, which we coordinate with a Florida engineer or designer as part of the project. You do not need to hire an architect separately unless you want one.",
      },
      {
        q: "What happens if digging turns up a problem?",
        a: "You see photos and receive a priced change order in writing with the price and the schedule impact, and nothing proceeds until you sign. On additions the usual surprises are poor soil under the footing, a septic line or buried utility where the plans did not show one, or rot at the existing fascia where the roof ties in.",
      },
      {
        q: "Can you build an in-law suite with a kitchen?",
        a: "Often, yes, depending on zoning. Some jurisdictions treat a full kitchen with a separate entrance as an accessory dwelling unit with extra rules. We check before designing so the plan passes review.",
      },
      {
        q: "Will the addition match the rest of my house?",
        a: "That is the goal. We match the block and stucco texture, roof pitch and material, window style and interior trim, so the addition looks like it was always there.",
      },
      {
        q: "Is a second-story addition possible on a Florida block home?",
        a: "Sometimes. An engineer has to confirm the existing footings and walls can carry a second floor and the hurricane loads. When they cannot, building out instead of up is usually more cost-effective.",
      },
      {
        q: "Do I need HOA approval for an addition?",
        a: "In most deed-restricted neighborhoods, yes, and it is separate from the county permit. Associations often require matching roof and stucco colors and may limit garage conversions. We prepare the submission with drawings and samples and wait for written approval before we break ground.",
      },
    ],
    related: ["lanai-enclosures", "impact-windows-doors", "outdoor-living"],
  },
];
