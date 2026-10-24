import type { Service } from "../types";

/**
 * Restoration group: older-home restoration and storm / water damage rebuilds.
 * Search reality (DataForSEO, Oct 2026): "home restoration" terms are tiny in
 * Florida, while "water damage restoration near me" runs ~9,900/mo. Copy leans on
 * water / storm damage repair wording, but stays honest: we rebuild after the
 * mitigation company has extracted water and dried the house.
 */
export const restorationServices: Service[] = [
  {
    slug: "home-restoration",
    title: "Home Restoration",
    navLabel: "Home Restoration",
    group: "restoration",
    blurb:
      "1960s–1990s Florida homes brought back: full gut renovations, old ranch and canal homes, condos, updated plumbing, wiring and layouts.",
    seoTitle: "Home Restoration Port Charlotte FL | Older Florida Homes",
    seoDescription:
      "Restoring 1960s–1990s Florida homes in Port Charlotte and SWFL: gut renovations, old plumbing and wiring, terrazzo, impact upgrades. Licensed CRC1327831.",
    keywords: [
      "home restoration port charlotte",
      "home restoration contractors near me",
      "old florida home restoration",
      "old house renovation contractors near me",
      "house restoration contractor florida",
      "gut renovation port charlotte",
      "condo renovation contractor port charlotte",
      "polybutylene plumbing replacement florida",
      "terrazzo floor restoration",
    ],
    eyebrow: "Home Restoration · Port Charlotte & SWFL",
    headline: "Restore an Older Florida Home Without the Guesswork",
    subhead:
      "We check the drains, panel and attic before we price. Then you get a dated phase schedule, one owner to call, and written change orders for anything the walls are hiding. 1960s–1990s ranch, canal and condo homes across SWFL.",
    heroPhoto: "restoration",
    howWeWork: [
      {
        title: "A phase schedule with dates",
        text: "Demo, rough-in, inspections and finishes all get dates, including the stretches with no water or kitchen, so you can plan where to live.",
      },
      {
        title: "One owner, one number",
        text: "Tim or Vlad runs your restoration in person and coordinates the plumber, electrician and inspectors. You only have to call one person.",
      },
      {
        title: "What the walls hide, in writing",
        text: "Older homes surprise everyone. When demo uncovers something, you get photos and a priced change order before any work on it starts.",
      },
      {
        title: "Final walkthrough, then the bill",
        text: "Punch list built together and finished, permits finaled and paperwork handed over. The last invoice comes after that.",
      },
    ],
    promises: [
      {
        title: "Owner-run, start to finish",
        text: "One of the two owners is on your job from the first walkthrough to closeout. Not a rotating crew lead, not a call center.",
      },
      {
        title: "We look before we price",
        text: "Attic, panel, plumbing material and slab are checked on the first visit. What truly cannot be seen until demo is priced as a clear allowance.",
      },
      {
        title: "Permits finaled and handed over",
        text: "Every restoration is permitted and inspected. You keep the records a four-point inspector, your insurer and a future buyer will ask to see.",
      },
      {
        title: "A workmanship warranty on paper",
        text: "Delivered at the final walkthrough with product approvals and finaled permits, not promised on the day you sign.",
      },
      {
        title: "Licensed and insured, CRC1327831",
        text: "Florida Certified Residential Contractor. Look the license up yourself on the state DBPR site before you sign with anyone, us included.",
      },
    ],
    signsTitle: "Signs an Older Home Needs More Than a Cosmetic Refresh",
    signs: [
      {
        title: "Gray plastic water lines",
        text: "Polybutylene from the 1980s often shows up at the water heater or under sinks. Many insurers will not write a policy until it is gone.",
      },
      {
        title: "Slow drains or a sewer smell",
        text: "Original cast-iron drains under the slab scale and crack with age. A camera inspection shows how far along they are.",
      },
      {
        title: "Two-prong outlets and flickering lights",
        text: "Ungrounded circuits, warm switch plates or an older panel mean the wiring needs work before new finishes go on the walls.",
      },
      {
        title: "Cracks that come back after patching",
        text: "Drywall or stucco cracks that return point to movement or moisture that paint and filler will not fix.",
      },
      {
        title: "A flagged four-point inspection",
        text: "If an inspector or insurer has called out the roof, plumbing, electrical or HVAC, the fix is inside the walls, not on them.",
      },
      {
        title: "Musty rooms or old ceiling stains",
        text: "Past leaks often leave damp insulation or framing behind. That needs opening up and drying, not another coat of paint.",
      },
    ],
    optionsTitle: "Refresh, Systems Restoration or Full Gut?",
    optionsIntro:
      "Older homes usually land in one of three scopes. The right one depends on what is behind the walls, not how dated the kitchen looks. After a free walkthrough we tell you plainly which one your house needs, and if the smaller scope will do, that is what we recommend.",
    options: [
      {
        title: "Interior refresh",
        text: "Ceilings, floors, paint, doors and trim, with the plumbing, wiring and panel left in place.",
        bullets: ["Best when: the systems check out sound", "Most visible change for the money", "Often phased while you live at home"],
      },
      {
        title: "Systems restoration",
        text: "Supply lines, drains and wiring replaced, walls and floors restored, kitchens and baths updated as needed.",
        bullets: ["Best when: polybutylene, cast iron or old wiring is flagged", "Fixes four-point problems at the source", "Pairs well with impact window upgrades"],
      },
      {
        title: "Full gut renovation",
        text: "Down to block walls and trusses, then a new layout, new systems and new finishes throughout.",
        bullets: ["Best when: most systems and finishes are worn out", "Plan to live elsewhere during the work", "Check the 50% flood-zone rule before signing"],
      },
    ],
    processTitle: "From First Walkthrough to Finaled Permits",
    process: [
      {
        n: "01",
        title: "Walkthrough and systems check",
        kicker: "Attic, panel, plumbing",
        text: "We walk the house with you, look at the attic, panel, plumbing material, slab and windows, and listen to how you want to live in it.",
      },
      {
        n: "02",
        title: "Written scope and allowances",
        kicker: "Fixed price",
        text: "A line-by-line scope with a fixed price. Anything that cannot be seen until demo is shown as a clear allowance, not left blank.",
      },
      {
        n: "03",
        title: "Testing and permits",
        kicker: "Before demo",
        text: "Asbestos and lead testing where the age of materials calls for it, the 50% flood-zone check, and permits submitted in your county.",
      },
      {
        n: "04",
        title: "Demo and discovery",
        kicker: "Photos before changes",
        text: "Rooms and furniture protected, then demolition. What we find goes to you as photos and, if needed, a written change order.",
      },
      {
        n: "05",
        title: "Systems and build",
        kicker: "Inspected at each stage",
        text: "Licensed plumbing and electrical, inspections, then insulation, drywall, kitchens, baths, floors and finish work by our crew.",
      },
      {
        n: "06",
        title: "Walkthrough and closeout",
        kicker: "Before the final invoice",
        text: "Punch list finished together, permits finaled, warranty and records handed over. Then the final bill.",
      },
    ],
    intro: [
      "Most of Port Charlotte, North Port and Punta Gorda was built between 1960 and 1995. Those houses have good bones: concrete block walls, simple roof lines, big lots, often a canal out back. What they also have is 40 to 60 years of patches. Original cast-iron drains under the slab, polybutylene supply lines from the 1980s, two-prong outlets, popcorn ceilings, closed-in kitchens and aluminum windows that would not survive a Category 1 storm.",
      "Home restoration is how we handle that. We gut what needs to go, keep what is worth keeping, and bring the plumbing, electrical, layout and storm protection up to current Florida Building Code. The goal is a house that looks finished and new, but also one that passes a four-point inspection, insures at a fair price and does not surprise you with a slab leak two years later.",
      "Prestigious Home Improvements is a family-owned, licensed Florida Certified Residential Contractor (CRC1327831) based in Port Charlotte. Tim Fomin and Vlad Filippov run every restoration job themselves with our own crew. You get a free estimate, a written fixed-price scope, permits handled for you, a written workmanship warranty and financing on approval.",
    ],
    scopes: [
      {
        title: "Full gut renovation",
        summary:
          "Down to block walls and trusses, then rebuilt: new layout, systems, insulation, drywall, kitchen, baths and finishes.",
        changes: [
          { label: "Demo", detail: "Interior walls, ceilings, flooring and fixtures out to the shell; asbestos testing first where materials suggest it" },
          { label: "Systems", detail: "New water supply, drain replacement or lining, new electrical panel and circuits, ductwork as needed" },
          { label: "Envelope", detail: "Spray foam or batt insulation, new drywall, impact windows and doors if not already done" },
          { label: "Finish", detail: "New kitchen and baths, flooring, trim, doors, paint and lighting throughout" },
          { label: "Code", detail: "Smoke and CO detectors, GFCI/AFCI protection, egress and current wind-load requirements" },
        ],
        priceRange: "$120k–$260k",
        duration: "4–7 months",
      },
      {
        title: "Old Florida ranch or canal home",
        summary:
          "The 1960s–70s block ranch: open the kitchen, update the baths, fix the systems and keep the mid-century character.",
        changes: [
          { label: "Layout", detail: "Remove non-structural walls between kitchen, dining and living; header or beam where a wall is load-bearing" },
          { label: "Kitchen", detail: "New cabinets, counters and appliances in the opened space" },
          { label: "Baths", detail: "Tub-to-shower conversions, new tile, vanities and fixtures" },
          { label: "Character", detail: "Terrazzo revived, original block or jalousie details kept where they work" },
          { label: "Canal side", detail: "Sliders and lanai doors replaced with impact units facing the water" },
        ],
        priceRange: "$75k–$160k",
        duration: "3–5 months",
      },
      {
        title: "Condo renovation",
        summary:
          "Interior restoration inside an association building: everything from the drywall in, coordinated with your HOA and building manager.",
        changes: [
          { label: "Approvals", detail: "Association application, contractor insurance certificates and work-hour rules handled by us" },
          { label: "Plumbing", detail: "Unit supply lines and shutoffs replaced; risers coordinated with the association" },
          { label: "Sound", detail: "Underlayment that meets the building's sound-rating rules under new tile or vinyl" },
          { label: "Kitchen & baths", detail: "New cabinets, counters, walk-in showers and fixtures" },
          { label: "Finish", detail: "Popcorn removal, new flooring, doors, trim, paint and lighting" },
        ],
        priceRange: "$45k–$110k",
        duration: "8–14 weeks",
      },
      {
        title: "Plumbing and wiring replacement",
        summary:
          "Cast-iron, galvanized or polybutylene plumbing and old wiring replaced, with walls and floors restored afterward.",
        changes: [
          { label: "Drains", detail: "Camera inspection, then cast-iron replaced with PVC or lined where that makes more sense" },
          { label: "Supply", detail: "Polybutylene or galvanized lines replaced with PEX or copper, new shutoffs" },
          { label: "Electrical", detail: "Panel upgrade, grounded circuits, new outlets and fixtures by a licensed electrician" },
          { label: "Restore", detail: "Slab cuts patched, drywall repaired, flooring and paint matched or replaced" },
        ],
        priceRange: "$18k–$55k",
        duration: "3–6 weeks",
      },
      {
        title: "Interior refresh with ceilings and floors",
        summary:
          "Popcorn ceilings scraped, terrazzo or new flooring, paint, doors and trim: the most visible change for the money.",
        changes: [
          { label: "Ceilings", detail: "Popcorn tested for asbestos, removed or encapsulated, then skim-coated smooth" },
          { label: "Floors", detail: "Carpet and old tile out; terrazzo ground and polished or new tile/LVP installed" },
          { label: "Walls", detail: "Patching, texture matching and full interior paint" },
          { label: "Doors & trim", detail: "Taller baseboards, new interior doors and hardware" },
        ],
        priceRange: "$22k–$60k",
        duration: "3–6 weeks",
      },
      {
        title: "Restoration with impact upgrades",
        summary:
          "While the walls are open, we upgrade the home's storm protection so restoration pays off at insurance renewal.",
        changes: [
          { label: "Openings", detail: "Impact windows and doors with Florida product approvals" },
          { label: "Garage", detail: "Wind-rated garage door, the most common failure point in a storm" },
          { label: "Roof tie-down", detail: "Hurricane straps or clips added where accessible during the work" },
          { label: "Paperwork", detail: "Documentation for a wind mitigation inspection and insurance credits" },
        ],
        priceRange: "$25k–$70k added",
        duration: "Adds 2–4 weeks",
      },
    ],
    included: [
      "Free in-home walkthrough with attic, panel and plumbing check",
      "Written fixed-price scope with allowances spelled out",
      "Asbestos and lead testing coordinated where the age of materials calls for it",
      "Permits pulled, inspections scheduled and met by us",
      "Licensed plumbing and electrical work on our permit",
      "Demolition, haul-off and dumpster",
      "Framing, drywall, insulation and ceiling work by our own crew",
      "Kitchen, bath, flooring and finish installation",
      "Dust protection for rooms and furniture that stay in place",
      "HOA or condo association paperwork handled",
      "Final walkthrough, punch list and finaled permits",
      "Written workmanship warranty",
    ],
    cost: {
      title: "What home restoration costs in Southwest Florida",
      text: [
        "In 2026, a full gut restoration of a typical 1,400–2,000 sq ft Port Charlotte or North Port block home runs about $120,000 to $260,000. Partial restorations, like a kitchen and two baths plus floors and ceilings, usually land between $75,000 and $160,000. Condo interiors run $45,000 to $110,000 depending on size and finish.",
        "The biggest swing in older homes is what is behind the walls. A camera inspection of the drains and a look at the panel before we price keeps that from becoming a mid-job change order. Where something truly cannot be seen until demo, we price it as a clear allowance, not a surprise.",
      ],
      factors: [
        "Condition of drains, supply lines and electrical panel",
        "How many walls move and whether any are load-bearing",
        "Asbestos in popcorn ceilings, flooring mastic or drywall compound",
        "Kitchen and bath count and finish level",
        "Whether impact windows and doors are part of the scope",
        "Condo association rules, work hours and approvals",
        "Flood zone status and the 50% substantial-improvement threshold",
      ],
    },
    localNotes: [
      {
        title: "Four-point inspections and insurance",
        text: "Most Florida insurers want a four-point inspection (roof, electrical, plumbing, HVAC) on homes over about 30 years old. Polybutylene, cast iron near end of life and certain older panels can block coverage or raise premiums. A restoration that replaces them usually fixes that, and we give you the permit records to prove it.",
      },
      {
        title: "Flood zones and the 50% rule",
        text: "Many canal homes in Port Charlotte, Punta Gorda Isles and Englewood sit in FEMA flood zones. If restoration costs reach 50% of the structure's market value, the local building department can require the whole house to meet current flood rules, including elevation. We check this before you sign so the scope stays under the line or you know what crossing it means.",
      },
      {
        title: "Permits across three counties",
        text: "We pull restoration permits in Charlotte County, the cities of Punta Gorda and North Port, Sarasota County (Englewood, Venice, Sarasota) and Lee County (Fort Myers, Cape Coral). Each office has its own review times; we build those into the schedule we give you.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between home restoration and remodeling?",
        a: "Remodeling usually changes the look or layout of a room. Restoration, the way we use it, means bringing an older house back to sound condition: replacing worn-out plumbing and wiring, fixing past repairs, and then finishing it. Most of our restoration jobs include remodeling too, but they start with what is inside the walls.",
      },
      {
        q: "Is it worth restoring a 1970s Port Charlotte house or should I tear it down?",
        a: "For most block homes, restoration costs well under new construction and keeps you out of a full rebuild under current setback and flood rules. Teardown starts to make sense when the slab, roof framing and walls all need major work, or when the home is in a flood zone and repairs would cross the 50% line anyway. We will give you a straight answer on which side your house falls.",
      },
      {
        q: "Do you replace polybutylene and cast-iron plumbing?",
        a: "Yes. We camera-inspect the drains first, then replace cast iron with PVC or line it where that is the better value. Polybutylene and galvanized supply lines get replaced with PEX or copper. The plumbing work is done by licensed plumbers under the permit, and we restore the floors and walls afterward.",
      },
      {
        q: "Can you save our terrazzo floors?",
        a: "Often, yes. A lot of 1960s and 1970s Florida homes have terrazzo under carpet or tile. After removal we assess the damage from old adhesive and tack strips, then grind, patch and polish it. Where it is too damaged in one area, we can patch or plan a transition rather than cover the whole house.",
      },
      {
        q: "Do popcorn ceilings have asbestos?",
        a: "Some do, especially in homes built before the early 1980s. We have the ceiling texture tested before anyone scrapes it. If it is positive, a licensed abatement company removes it, and we finish the ceiling after. If it is negative, our crew removes it and skim-coats the ceiling smooth.",
      },
      {
        q: "Can we live in the house during a restoration?",
        a: "For a partial restoration, often yes, with work phased room by room and dust walls up. For a full gut renovation, plan to move out; there will be stretches with no water, power or kitchen. We give you a phase schedule up front so you can plan around it.",
      },
      {
        q: "Should we add impact windows during the restoration?",
        a: "If you are opening walls and replacing drywall anyway, it is the cheapest time to do it. Impact windows and doors also bring wind mitigation credits on your insurance and remove the need to put up shutters. We include them as a separate line so you can decide.",
      },
    ],
    related: ["whole-home-remodeling", "storm-damage-rebuild", "impact-windows-doors"],
  },
  {
    slug: "storm-damage-rebuild",
    title: "Storm & Water Damage Rebuilds",
    navLabel: "Storm & Water Damage",
    group: "restoration",
    blurb:
      "After the water is out and the house is dry, we rebuild: drywall, insulation, floors, cabinets, roof-to-interior repairs, with permits and insurance paperwork.",
    seoTitle: "Storm & Water Damage Repair Port Charlotte FL | Rebuilds",
    seoDescription:
      "Water and storm damage rebuilds in Port Charlotte and SWFL: drywall, insulation, floors and cabinets after mitigation. Permits, adjuster-ready estimates.",
    keywords: [
      "water damage restoration near me",
      "water damage repair contractor port charlotte",
      "storm damage repair port charlotte",
      "storm damage restoration port charlotte",
      "hurricane damage repair contractor",
      "home rebuild after hurricane",
      "flood damage repair contractor florida",
      "drywall repair port charlotte",
      "water damage restoration company near me",
    ],
    eyebrow: "Storm & Water Damage · Port Charlotte & SWFL",
    headline: "After the Water Is Out, a Rebuild You Can Plan Around",
    subhead:
      "Once mitigation signs off on a dry house, we put it back together: drywall, insulation, floors, cabinets and the roof or window repairs that let the water in. A dated schedule, one owner to call, and a room-by-room estimate your adjuster can follow.",
    heroPhoto: "storm-damage",
    howWeWork: [
      {
        title: "A realistic start date, in writing",
        text: "After a regional storm everyone promises next week. We give you written dates based on permit and material lead times, and update you when they move.",
      },
      {
        title: "One owner talks to everyone",
        text: "Your mitigation company, adjuster, plumber and inspector all deal with one of the owners. You keep the same direct number throughout.",
      },
      {
        title: "Hidden damage documented first",
        text: "Wet framing or a damaged subfloor found mid-job is photographed and written up as a change order, with supplement paperwork, before we fix it.",
      },
      {
        title: "Walkthrough before the final invoice",
        text: "We finish the punch list with you and hand over finaled permits. Then we bill, on the written payment schedule you signed.",
      },
    ],
    promises: [
      {
        title: "Owner-run rebuilds",
        text: "Tim or Vlad meets your adjuster, runs the crew and answers your calls. You are never handed off to someone who needs to check with the office.",
      },
      {
        title: "We never close a wet wall",
        text: "Moisture readings are checked against the mitigation company's dry log before insulation or drywall goes back in.",
      },
      {
        title: "Paperwork that holds up",
        text: "Itemized, room-by-room estimates with photos, measurements and code references, so you or your public adjuster can compare and request supplements.",
      },
      {
        title: "Every repair permitted",
        text: "Roofing, openings, electrical, plumbing and drywall are permitted and inspected, and you keep the finaled records for your insurer and a future sale.",
      },
      {
        title: "Licensed, insured, claim stays yours",
        text: "Florida Certified Residential Contractor CRC1327831, verifiable on the state DBPR site. We will never ask you to sign over your insurance benefits.",
      },
    ],
    signsTitle: "Signs of Hidden Water Damage After a Storm",
    signs: [
      {
        title: "Ceiling stains or sagging drywall",
        text: "Brown rings or a soft, bowed ceiling mean water reached the attic, and the insulation above is likely soaked.",
      },
      {
        title: "Swollen or loose baseboards",
        text: "Trim swells fast when water wicks up from the floor. The drywall behind it has usually taken on water too.",
      },
      {
        title: "Bubbling paint under windows",
        text: "Blisters on interior walls below windows and sliders point to wind-driven rain getting past the opening.",
      },
      {
        title: "Floors that lift, cup or sound hollow",
        text: "Peaked laminate seams, lifting vinyl or tile that suddenly sounds hollow means water is trapped underneath.",
      },
      {
        title: "A musty smell that will not clear",
        text: "An earthy odor in closets or behind furniture days after the storm is a sign of moisture still inside the walls.",
      },
      {
        title: "Doors that suddenly stick",
        text: "Interior and cabinet doors that bind after a storm often mean swollen framing, jambs or cabinet boxes.",
      },
    ],
    optionsTitle: "Mitigation First, Rebuild Second",
    optionsIntro:
      "Water damage is two jobs, usually done by two different companies. Knowing which one you need, and in what order, keeps your claim and your house moving.",
    options: [
      {
        title: "Water mitigation",
        text: "A mitigation company extracts water, removes wet materials and dries the structure with dehumidifiers and air movers. We do not do this part.",
        bullets: ["Call one first; wet drywall needs attention within 24 to 48 hours", "Ends with a dry log showing the structure is dry", "Documents moisture readings for your claim"],
      },
      {
        title: "Rebuild",
        text: "We rebuild what mitigation removed, plus the roof, window or exterior damage that let the water in.",
        bullets: ["Starts once readings confirm the house is dry", "Permitted, inspected and itemized for your adjuster", "Built back with water-tolerant materials where it makes sense"],
      },
      {
        title: "Storm hardening (optional)",
        text: "Upgrades made while the walls are open, so the next storm does less damage.",
        bullets: ["Moisture-resistant drywall at the bottom course", "Impact windows, doors and wind-rated garage doors", "Better roof-to-wall connections where reachable"],
      },
    ],
    processTitle: "From Damage Assessment to Finaled Permits",
    process: [
      {
        n: "01",
        title: "Damage assessment",
        kicker: "Photos and measurements",
        text: "A free on-site visit to document the damage room by room and find where the water came in.",
      },
      {
        n: "02",
        title: "Estimate for your claim",
        kicker: "Room by room",
        text: "An itemized estimate your insurance adjuster or public adjuster can compare line by line. We meet them on site if you want us there.",
      },
      {
        n: "03",
        title: "Flood zone and permits",
        kicker: "The 50% check",
        text: "We check your flood zone and the substantial-damage threshold, then pull repair permits so there are no surprises halfway through.",
      },
      {
        n: "04",
        title: "Dry confirmation",
        kicker: "No wet walls closed",
        text: "We coordinate with your mitigation company and confirm moisture readings before a single sheet of drywall goes up.",
      },
      {
        n: "05",
        title: "Rebuild",
        kicker: "Inspected at each stage",
        text: "Roof and openings first if they let the water in, then insulation, drywall, floors, cabinets, doors and paint.",
      },
      {
        n: "06",
        title: "Walkthrough and closeout",
        kicker: "Before the final invoice",
        text: "Punch list finished with you, permits finaled, warranty and records handed over. Then the final bill.",
      },
    ],
    intro: [
      "Charlotte County has been through it. Hurricane Ian in September 2022 tore off roofs and flooded homes from Punta Gorda to Englewood. Milton in October 2024 brought surge to Manasota Key and the barrier islands, wind damage and tornadoes inland, and soaked homes still waiting on their Ian repairs. Between big storms, there are roof leaks, burst supply lines, water heater failures and AC overflows. All of them end the same way: wet drywall, ruined floors and a house that needs to be rebuilt.",
      "Here is how the work splits. A water damage restoration or mitigation company comes first. They extract the water, tear out wet materials, run dehumidifiers and document that the structure is dry. We come next. Prestigious Home Improvements is the licensed contractor who rebuilds what was removed: drywall, insulation, baseboards, flooring, cabinets, doors, paint and, when water came through the roof or walls, the structural and exterior repairs that caused it. We coordinate with your mitigation company so there is no gap between dry-out and rebuild.",
      "We are a family-owned Florida Certified Residential Contractor (CRC1327831) based in Port Charlotte, run by Tim Fomin and Vlad Filippov with our own crew. Free estimates, a written fixed-price scope, permits handled, a written workmanship warranty and financing on approval for the part insurance does not cover.",
    ],
    scopes: [
      {
        title: "Flood cut rebuild after water intrusion",
        summary:
          "Mitigation cut the drywall 2 to 4 feet up and removed flooring. We rebuild the lower walls and everything on them.",
        changes: [
          { label: "Verify dry", detail: "Moisture readings checked against the mitigation company's dry log before we close anything" },
          { label: "Walls", detail: "New insulation, moisture-resistant drywall at the bottom course, tape, texture and paint" },
          { label: "Trim", detail: "Baseboards, door casings and interior doors replaced and finished" },
          { label: "Floors", detail: "Tile, LVP or engineered flooring installed through the affected rooms" },
          { label: "Cabinets", detail: "Swollen base cabinets and vanities replaced; tops reset or replaced" },
        ],
        priceRange: "$30k–$85k",
        duration: "4–8 weeks",
      },
      {
        title: "Single-room or plumbing leak repair",
        summary:
          "A burst supply line, water heater or AC leak that damaged one or two rooms, rebuilt to match the rest of the house.",
        changes: [
          { label: "Source", detail: "Confirm the leak is repaired by the plumber or HVAC tech before we rebuild" },
          { label: "Drywall", detail: "Walls and ceilings replaced, texture matched to existing" },
          { label: "Flooring", detail: "Replace or blend into existing flooring where matching is possible" },
          { label: "Paint", detail: "Full walls painted corner to corner so patches do not show" },
        ],
        priceRange: "$6k–$25k",
        duration: "1–3 weeks",
      },
      {
        title: "Roof-to-interior storm rebuild",
        summary:
          "Wind opened the roof, rain came in. We repair the roof deck and roofing, then the ceilings, insulation and finishes below.",
        changes: [
          { label: "Roof", detail: "Damaged decking and trusses repaired, roofing replaced to current code under permit" },
          { label: "Attic", detail: "Wet insulation removed by mitigation, new insulation blown or rolled in" },
          { label: "Ceilings", detail: "New drywall ceilings, texture and paint" },
          { label: "Openings", detail: "Damaged windows, sliders and garage doors replaced with impact-rated units" },
          { label: "Exterior", detail: "Soffit, fascia, stucco and gutter repairs" },
        ],
        priceRange: "$35k–$120k",
        duration: "6–12 weeks",
      },
      {
        title: "Whole-house hurricane rebuild",
        summary:
          "Surge or extended flooding affected the entire home. A full interior rebuild, often with storm-hardening upgrades.",
        changes: [
          { label: "Shell check", detail: "Walls, slab, framing and electrical evaluated after mitigation" },
          { label: "Systems", detail: "Electrical, plumbing and HVAC repaired or replaced by licensed trades" },
          { label: "Interior", detail: "Insulation, drywall, kitchen, baths, flooring, doors and paint throughout" },
          { label: "Flood rules", detail: "Substantial-damage review with the building department; elevation or flood-resistant materials if required" },
          { label: "Hardening", detail: "Impact openings and roof-to-wall connections upgraded where feasible" },
        ],
        priceRange: "$110k–$280k",
        duration: "4–8 months",
      },
      {
        title: "Lanai, garage and exterior storm repair",
        summary:
          "The parts of the house storms hit first: screen cages, garage doors, stucco, soffits and fences.",
        changes: [
          { label: "Lanai", detail: "Screen enclosure frame and screens repaired or rebuilt to current wind code" },
          { label: "Garage", detail: "Wind-rated garage door replacement and framing repair" },
          { label: "Stucco", detail: "Cracks and impact damage repaired, textured and painted to match" },
          { label: "Soffit & fascia", detail: "Replaced and sealed to keep wind-driven rain out of the attic" },
        ],
        priceRange: "$8k–$45k",
        duration: "1–4 weeks",
      },
    ],
    included: [
      "Free on-site damage assessment and photo documentation",
      "Coordination with your water mitigation company and their dry log",
      "Itemized room-by-room estimate for your insurance claim",
      "Meeting your insurance adjuster or public adjuster on site when requested",
      "Repair permits pulled and inspections met",
      "Flood zone and 50% substantial-damage check before work starts",
      "Insulation, drywall, texture and paint by our own crew",
      "Flooring, baseboards, doors, cabinets and countertops",
      "Roof, window, stucco and exterior repairs under permit",
      "Licensed plumbing and electrical where the damage requires it",
      "Supplement documentation if hidden damage turns up",
      "Final walkthrough, finaled permits and written workmanship warranty",
    ],
    cost: {
      title: "What storm and water damage rebuilds cost in SWFL",
      text: [
        "In 2026, a one-room leak repair in Port Charlotte or North Port usually runs $6,000 to $25,000. A flood cut rebuild through most of a 1,500–2,000 sq ft house, with new drywall, insulation, flooring, trim and base cabinets, runs about $30,000 to $85,000. Full hurricane rebuilds after surge flooding range from $110,000 to $280,000 or more, depending on how much of the home's systems and finishes were lost.",
        "Your insurance claim and our price are separate documents. We price the work to do it right under the Florida Building Code, then itemize it so your adjuster can compare it to their estimate. Where the two differ, we document why with photos, measurements and code references so you or your public adjuster can request a supplement.",
        "Florida law does not allow contractors to negotiate your claim or interpret your policy for you, and we will not ask you to sign over your benefits. What we can do is give you clear, honest paperwork that holds up.",
      ],
      factors: [
        "Height of the flood cut and number of rooms affected",
        "Whether water came through the roof, walls or plumbing",
        "Cabinets, countertops and flooring that need full replacement",
        "Electrical, plumbing and HVAC repairs needed after flooding",
        "Flood zone status and the 50% substantial-damage threshold",
        "Code upgrades triggered by the repair, such as roofing or openings",
        "Material lead times after a regional storm",
      ],
    },
    localNotes: [
      {
        title: "The 50% rule in flood zones",
        text: "If your home is in a FEMA special flood hazard area and repair costs reach 50% of the structure's market value (not including land), Charlotte County, Sarasota County, Lee County and the cities treat it as substantially damaged. The house then has to meet current flood rules, which can mean elevating it. We check your zone and help you gather what the building department asks for before demolition goes further.",
      },
      {
        title: "Permits are required for storm repairs",
        text: "Replacing drywall, roofing, windows, doors, electrical and plumbing after a storm still needs permits in Charlotte, Sarasota and Lee counties. After Ian and Milton, unpermitted repairs caused problems at resale and with insurers. Every rebuild we do is permitted and inspected, and you get the finaled permits.",
      },
      {
        title: "Insurance, adjusters and assignment of benefits",
        text: "Florida ended assignment of benefits for residential property policies issued after January 1, 2023, so the claim stays in your name. We work alongside your insurance adjuster or the public adjuster you hire, provide the estimate and documentation they need, and get paid by you on a written schedule tied to completed work.",
      },
    ],
    faqs: [
      {
        q: "Are you a water damage restoration company?",
        a: "We are the rebuild half of water damage restoration. A mitigation company extracts water, removes wet materials and dries the structure. We come in after they confirm the house is dry and rebuild everything they removed, plus any roof, window or structural repairs. If you do not have a mitigation company yet, call one first; standing water and wet drywall need attention within 24 to 48 hours.",
      },
      {
        q: "How soon can you start after the mitigation company is done?",
        a: "Usually within one to two weeks for smaller jobs. After a regional storm like Ian or Milton, demand spikes and permit offices slow down, so we give you a realistic start date in writing rather than a promise we cannot keep. We can often start documenting and ordering long-lead items like cabinets while the house is still drying.",
      },
      {
        q: "Will you work with my insurance adjuster?",
        a: "Yes. We meet the insurance company's adjuster or your public adjuster on site, walk the damage, and provide an itemized estimate they can compare line by line. We do not negotiate your claim; Florida law does not allow contractors to do that. We give you and your adjuster accurate documentation.",
      },
      {
        q: "What if insurance does not cover the full cost?",
        a: "We show you exactly where the gap is, line by line. Some of it may be code upgrades your policy covers under ordinance or law coverage, which your adjuster can review. For the rest, we offer financing on approval, and we can phase the work so the most important repairs happen first.",
      },
      {
        q: "Does a storm repair need a permit in Charlotte County?",
        a: "Yes, for most of it. Roofing, windows, doors, structural repairs, electrical, plumbing and significant drywall replacement all need permits in Charlotte, Sarasota and Lee counties. We pull them and meet every inspection. Unpermitted repairs can cause trouble with your insurer and when you sell.",
      },
      {
        q: "What is the 50% substantial-damage rule?",
        a: "In FEMA flood zones, if the cost to repair a house reaches 50% of its market value (structure only, not land), the local building department can require the entire house to be brought up to current flood standards, which may include elevation. We check this before rebuilding so you are not surprised halfway through.",
      },
      {
        q: "Can you rebuild so the next storm does less damage?",
        a: "Yes. Common upgrades include moisture-resistant drywall at the bottom course, tile or water-tolerant vinyl floors instead of carpet or laminate, impact windows and doors, wind-rated garage doors, and better roof-to-wall connections. Some of these also earn wind mitigation credits on your insurance.",
      },
    ],
    related: ["roofing", "home-restoration", "impact-windows-doors"],
  },
];
