import type { Area } from "./types";

/**
 * Service-area pages. Local notes cover housing stock, construction type,
 * flood zones, communities and the permitting office for each city.
 */
export const areas: Area[] = [
  {
    slug: "port-charlotte",
    name: "Port Charlotte",
    county: "Charlotte County",
    zip: ["33948", "33952", "33953", "33954", "33980", "33981"],
    driveTime: "Our home base",
    seoTitle: "Home Remodeling Contractor in Port Charlotte, FL",
    seoDescription:
      "Licensed Port Charlotte contractor (CRC1327831): kitchens, baths, impact windows, lanais and storm rebuilds. Local crew, free in-home estimates.",
    intro: [
      "Port Charlotte is home. Our office is here, our crew lives here, and most of our jobs are a short drive down US-41, Veterans Boulevard or Kings Highway. Much of the city was laid out by General Development Corporation from the late 1950s onward, so a large share of the houses we work on are single-story concrete block (CBS) homes from the 1960s through the 1980s, with a second wave of newer construction since the 2000s. Original single-pane aluminum windows, galvanized plumbing, closed-off galley kitchens and 1980s bathrooms are what we see every week.",
      "Port Charlotte has roughly 165 miles of man-made canals, and many waterfront homes sit in FEMA flood zones. That matters when you remodel: if improvements to a home in a Special Flood Hazard Area exceed 50% of the structure's value, the county can require the house to be brought up to current flood elevation rules. We look at your flood zone and elevation certificate during the estimate, so the scope and budget work with the rules, not against them. Deep Creek, east of I-75, has its own mix of larger 1980s and 1990s homes, golf-course lots and active HOAs.",
      "Hurricane Charley in 2004 and Hurricane Ian in 2022 both hit Charlotte County hard, and Milton in 2024 added another round of roof, lanai and water damage. Many homes still have temporary repairs, tired screen enclosures or windows that were never upgraded. Permits for unincorporated Port Charlotte go through Charlotte County Community Development on Murdock Circle; we handle the application, the product approvals and every inspection.",
    ],
    popularServices: [
      "impact-windows-doors",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "lanai-enclosures",
      "storm-damage-rebuild",
      "whole-home-remodeling",
    ],
    faqs: [
      {
        q: "Who issues building permits in Port Charlotte?",
        a: "Port Charlotte is unincorporated, so permits go through Charlotte County Community Development. We prepare the drawings and product approvals, submit the application and schedule every inspection under our license.",
      },
      {
        q: "My canal home is in a flood zone. Can I still remodel?",
        a: "Yes. The key number is the FEMA 50% rule: if the cost of improvements exceeds half the value of the structure, the house may need to meet current flood elevation rules. We review your flood zone and elevation certificate up front and plan the scope accordingly.",
      },
      {
        q: "How quickly can you come out for an estimate in Port Charlotte?",
        a: "Port Charlotte is our home base, so we can usually schedule an in-home estimate within a day or two. Call (941) 223-4875.",
      },
    ],
  },
  {
    slug: "north-port",
    name: "North Port",
    county: "Sarasota County",
    zip: ["34286", "34287", "34288", "34289", "34291"],
    driveTime: "About 20 min from Port Charlotte",
    seoTitle: "Remodeling Contractor in North Port, FL",
    seoDescription:
      "Licensed North Port contractor: kitchens, baths, impact windows and doors, lanais, additions and storm repairs. City of North Port permits handled for you.",
    intro: [
      "North Port is one of the fastest-growing cities in Florida, and that shows in the housing stock. Like Port Charlotte, it was platted by General Development Corporation, but most houses here were built from the 1990s onward, with a big wave of construction since 2015. Most are single-story concrete block homes on quarter-acre lots, many of them builder-grade: standard windows, laminate counters, small primary bathrooms and plain open patios. That makes North Port a natural place for kitchen and bathroom upgrades, lanai enclosures, impact windows and room additions.",
      "Not all of North Port is new. Older neighborhoods near US-41 have 1970s and 1980s homes that need the same work as Port Charlotte: new openings, updated plumbing and full interior remodels. And in Wellen Park, the master-planned community on the city's west side, new homes come with strict HOA architectural rules for anything exterior, which we plan around from the start.",
      "Hurricane Ian in 2022 caused serious flooding along the Myakkahatchee Creek and the Myakka River, and parts of North Port were under water for days. Milton in 2024 brought more wind and water damage. North Port is an incorporated city, so permits go through the City of North Port Building Division, not Sarasota County. We know the process and handle it for you.",
    ],
    popularServices: [
      "kitchen-remodeling",
      "bathroom-remodeling",
      "impact-windows-doors",
      "lanai-enclosures",
      "home-additions",
      "storm-damage-rebuild",
    ],
    faqs: [
      {
        q: "Who issues permits in North Port, the city or Sarasota County?",
        a: "The City of North Port Building Division issues permits for addresses inside the city limits. We submit the application, provide the product approvals and schedule all inspections.",
      },
      {
        q: "Can you add a lanai enclosure or Florida room to a newer North Port home?",
        a: "Yes, it is a project we price often in this area. We check your setbacks, any easements on the lot and your HOA rules, then design the slab, footer and enclosure to code.",
      },
      {
        q: "Do you work in Wellen Park?",
        a: "Yes. We prepare the drawings, product specs and color samples your HOA architectural review needs and wait for approval before any exterior work starts.",
      },
    ],
  },
  {
    slug: "punta-gorda",
    name: "Punta Gorda",
    county: "Charlotte County",
    zip: ["33950", "33955", "33982", "33983"],
    driveTime: "About 15 min from Port Charlotte",
    seoTitle: "Remodeling & Renovation Contractor in Punta Gorda, FL",
    seoDescription:
      "Licensed Punta Gorda contractor for remodels, impact windows and doors, lanais and kitchens. Canal homes, deed restrictions and city permits handled.",
    intro: [
      "Punta Gorda sits right across the Peace River from us, and it is a different market from Port Charlotte. The historic district has frame homes dating back to the early 1900s, while Punta Gorda Isles and Burnt Store Isles are built around deep-water, sailboat-access canals, with larger block homes from the 1970s through the 2000s. South of town, Burnt Store Lakes and the homes around Burnt Store Marina add newer construction on bigger lots.",
      "Hurricane Charley in 2004 hit Punta Gorda directly, and many homes were rebuilt in the years after. Ian in 2022 and Milton in 2024 brought the next round of roof, lanai cage and water damage. Today we see a lot of homes with windows and doors from the post-Charley rebuild that are now due, screen enclosures that never fully recovered, and kitchens and baths ready for a full update.",
      "Most waterfront homes in Punta Gorda Isles and Burnt Store Isles are in FEMA flood zones, so the 50% substantial-improvement rule matters for big remodels, and deed restrictions control exterior colors, roofs and additions. Punta Gorda is an incorporated city with its own building division, so permits inside city limits go through the City of Punta Gorda; homes outside the city, such as Burnt Store Lakes, are permitted by Charlotte County. We handle either.",
    ],
    popularServices: [
      "impact-windows-doors",
      "lanai-enclosures",
      "kitchen-remodeling",
      "whole-home-remodeling",
    ],
    faqs: [
      {
        q: "Who handles permits in Punta Gorda?",
        a: "Inside city limits, the City of Punta Gorda. Outside the city, for example in Burnt Store Lakes, Charlotte County Community Development. We check your address and file with the right office.",
      },
      {
        q: "Do Punta Gorda Isles deed restrictions affect my project?",
        a: "Often, yes, especially for exterior colors, roofing materials, fences and additions. We help you prepare the submission and keep the scope inside the restrictions.",
      },
      {
        q: "My windows were replaced after Charley. Is it time again?",
        a: "Many windows and doors installed in the post-Charley rebuild were not impact-rated, and seals and hardware have aged. We look at each opening and tell you honestly whether a repair, a few replacements or a full impact upgrade makes sense.",
      },
    ],
  },
  {
    slug: "englewood",
    name: "Englewood",
    county: "Sarasota County",
    zip: ["34223", "34224", "34295", "33947"],
    driveTime: "About 30 min from Port Charlotte",
    seoTitle: "Remodeling Contractor in Englewood & Rotonda West, FL",
    seoDescription:
      "Licensed contractor for Englewood, Rotonda West and Manasota Key: storm rebuilds, impact windows, kitchens, baths and lanais. Permits in both counties.",
    intro: [
      "Englewood straddles two counties. The part north of the county line, around Old Englewood and Lemon Bay, is in Sarasota County; south of it, Englewood East, Grove City, Placida and Rotonda West are in Charlotte County. That split decides which office issues your permit, and it is the first thing we check on any Englewood job. Rotonda West, with its circular layout and canals, is mostly block homes from the 1970s through the 2000s, many of them with screened pools.",
      "Englewood's housing is older and more varied than its neighbors'. There are 1950s and 1960s cottages, frame and block, near Dearborn Street and Lemon Bay, 1970s and 1980s ranch homes and manufactured-home communities inland, and elevated beach homes on Manasota Key. Older homes here often need new windows and doors, updated electrical and full kitchen and bath remodels.",
      "The coast took a beating in 2024. Hurricane Helene's surge and then Hurricane Milton flooded and damaged homes along Lemon Bay and on Manasota Key. Many homes are in high-risk flood zones, so the FEMA 50% rule shapes what can be rebuilt and how. We document damage for your insurer, scope the repair against the flood rules, and pull the permit with Sarasota County or Charlotte County as appropriate.",
    ],
    popularServices: [
      "storm-damage-rebuild",
      "impact-windows-doors",
      "home-restoration",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "lanai-enclosures",
    ],
    faqs: [
      {
        q: "Is my Englewood home permitted by Sarasota or Charlotte County?",
        a: "It depends on which side of the county line you are on. North Englewood is Sarasota County; Englewood East, Rotonda West, Grove City and Placida are Charlotte County. We confirm your parcel and file with the correct office.",
      },
      {
        q: "Can you rebuild my home after Milton or Helene damage?",
        a: "Yes. We document the damage, write a line-item estimate your adjuster can review, check whether the FEMA 50% rule applies, and handle the permits and rebuild with our own crew.",
      },
      {
        q: "Do you work in Rotonda West?",
        a: "Yes. It is about 30 minutes from our base. Windows, doors, lanai enclosures and kitchen and bath remodels are the most common projects there.",
      },
    ],
  },
  {
    slug: "venice",
    name: "Venice",
    county: "Sarasota County",
    zip: ["34285", "34292", "34293"],
    driveTime: "About 35 min from Port Charlotte",
    seoTitle: "Home Remodeling Contractor in Venice, FL",
    seoDescription:
      "Licensed Venice FL contractor: kitchen and bath remodels, impact windows and doors, lanais and storm repairs on the island, South Venice and Wellen Park.",
    intro: [
      "Venice is a city of distinct neighborhoods, and each one brings different work. Venice Island has homes from the 1920s Mediterranean Revival era alongside 1950s and 1960s block ranches and condos. Venice Gardens and South Venice are mostly 1960s through 1980s single-story block homes, many on canals, that are ready for new windows, kitchens and baths. East of I-75, the newer gated communities and Wellen Park were built in the 2000s and later.",
      "A lot of Venice is retirement and seasonal housing, so much of our work here is scheduled around owners who are up north part of the year. We document progress with photos, keep you updated by phone and text, and can coordinate with a neighbor or property manager for access. Condo and HOA approvals are common, so we prepare the paperwork early.",
      "Hurricane Ian in 2022 and Milton in 2024 both brought damaging wind to Venice, and Milton tore off roofs and screen enclosures across the area. Permits for addresses inside city limits go through the City of Venice; South Venice, Venice Gardens and most areas outside the city are permitted by Sarasota County. We file with the right one.",
    ],
    popularServices: [
      "kitchen-remodeling",
      "bathroom-remodeling",
      "impact-windows-doors",
      "lanai-enclosures",
    ],
    faqs: [
      {
        q: "Do you work on Venice homes while the owners are away?",
        a: "Yes. Many of our Venice clients are seasonal. We agree on access in advance, send photo updates at each milestone and handle inspections without you needing to be there.",
      },
      {
        q: "Who issues permits in Venice?",
        a: "The City of Venice for addresses inside city limits, and Sarasota County for South Venice, Venice Gardens and other unincorporated areas. We check and file with the correct office.",
      },
      {
        q: "Can you replace my lanai screen enclosure after storm damage?",
        a: "Yes. We rebuild or replace aluminum screen enclosures to current wind-load requirements, with engineered drawings and a permit, and we can coordinate with your insurance claim.",
      },
    ],
  },
  {
    slug: "sarasota",
    name: "Sarasota",
    county: "Sarasota County",
    zip: ["34231", "34232", "34233", "34238", "34240", "34241"],
    driveTime: "About 50 min from Port Charlotte",
    seoTitle: "Remodeling Contractor in Sarasota, FL",
    seoDescription:
      "Licensed Sarasota contractor for whole-home remodels, kitchens, baths, impact windows, lanais and exterior work. Rated 5.0 by Sarasota homeowners on Yelp.",
    intro: [
      "Sarasota is where several of our earliest reviews came from. Homeowners here found us through referrals and the Sarasota Home Show, and we have replaced windows and sliders and rebuilt a lanai wall in the area. The housing stock is wide-ranging: mid-century ranch homes in neighborhoods like Gulf Gate and South Gate, some in the Sarasota School of Architecture style, 1970s and 1980s block homes off Beneva and Bee Ridge, and newer construction in Palmer Ranch and Lakewood Ranch.",
      "Older Sarasota homes often have original jalousie or single-pane aluminum windows, terrazzo floors under carpet, tight kitchens and dated bathrooms. They are good candidates for whole-home remodels that open the layout while keeping what makes the house special. In Lakewood Ranch and other master-planned communities, the work is more often kitchen and bath upgrades, lanai extensions and impact glass, with HOA architectural review on anything exterior.",
      "Permits depend on the address: the City of Sarasota has its own building department, unincorporated areas go through Sarasota County Planning and Development Services, and the Manatee County side of Lakewood Ranch is permitted by Manatee County. Barrier-island and bayfront homes are in high-risk flood zones, where the FEMA 50% rule applies. Ian in 2022 and Milton in 2024 both caused roof and water damage across Sarasota County.",
    ],
    popularServices: [
      "whole-home-remodeling",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "impact-windows-doors",
      "lanai-enclosures",
      "exterior-remodeling",
    ],
    faqs: [
      {
        q: "Do you really work as far north as Sarasota?",
        a: "Yes. Sarasota is about 50 minutes from our base, and several of our 5-star reviews come from Sarasota homeowners. We have also completed a lanai wall project in Manatee County.",
      },
      {
        q: "Who handles permits for a Sarasota home?",
        a: "The City of Sarasota inside city limits, Sarasota County for unincorporated areas, and Manatee County for the northern part of Lakewood Ranch. We confirm your parcel and file with the right office.",
      },
      {
        q: "Can you remodel a mid-century home without losing its character?",
        a: "Yes. We can open up a layout, replace windows with impact units that keep the original sightlines, and update kitchens and baths while keeping features like terrazzo floors and clerestory windows.",
      },
    ],
  },
  {
    slug: "fort-myers",
    name: "Fort Myers",
    county: "Lee County",
    zip: ["33901", "33907", "33908", "33912", "33919", "33966"],
    driveTime: "About 40 min from Port Charlotte",
    seoTitle: "Remodeling & Storm Rebuild Contractor in Fort Myers, FL",
    seoDescription:
      "Licensed Fort Myers contractor for storm-damage rebuilds, impact windows and doors, kitchens and baths. Lee County and City of Fort Myers permits.",
    intro: [
      "Fort Myers has some of the oldest housing in Southwest Florida. Along McGregor Boulevard and in neighborhoods near downtown there are frame and block homes from the 1920s through the 1950s, and much of south Fort Myers was built out in the 1970s and 1980s with block ranch homes, many in gated golf communities with active HOAs. Newer construction east of I-75 rounds out the mix.",
      "Hurricane Ian in 2022 made landfall just to the west, and its storm surge flooded the Iona area, neighborhoods along the Caloosahatchee and the communities closest to Fort Myers Beach. Thousands of homes needed drywall, flooring, cabinets and electrical replaced from the flood line down, and many fell under the FEMA 50% rule. Milton in 2024 brought another round of roof and window damage. A lot of homes still have temporary repairs or rebuilds that were rushed.",
      "Permits inside city limits go through the City of Fort Myers; unincorporated areas such as Iona, McGregor and the gated communities in south Fort Myers go through Lee County. We prepare the drawings and product approvals, handle substantial-improvement paperwork where it applies, and schedule every inspection.",
    ],
    popularServices: [
      "storm-damage-rebuild",
      "home-restoration",
      "impact-windows-doors",
      "kitchen-remodeling",
      "bathroom-remodeling",
    ],
    faqs: [
      {
        q: "Can you finish or redo a post-Ian rebuild?",
        a: "Yes. We regularly see rebuilds that were rushed or left half done. We assess what was done, what was permitted and what is left, and give you a written scope and price to finish it properly.",
      },
      {
        q: "Who issues permits in Fort Myers?",
        a: "The City of Fort Myers for addresses inside the city, and Lee County for unincorporated areas such as Iona and McGregor. We confirm your parcel and file with the correct office.",
      },
      {
        q: "Does the FEMA 50% rule apply to my Fort Myers home?",
        a: "If the home is in a Special Flood Hazard Area and the repair or improvement cost exceeds 50% of the structure's value, yes. We help you understand where you stand before you commit to a scope.",
      },
    ],
  },
  {
    slug: "cape-coral",
    name: "Cape Coral",
    county: "Lee County",
    zip: ["33904", "33909", "33914", "33990", "33991", "33993"],
    driveTime: "About 45 min from Port Charlotte",
    seoTitle: "Remodeling Contractor in Cape Coral, FL",
    seoDescription:
      "Licensed Cape Coral contractor: impact windows and doors, lanais and pool cages, kitchens, baths and storm rebuilds. City permits handled.",
    intro: [
      "Cape Coral has more than 400 miles of canals, more than any other city in the world, and the canal is the reason many people live here. Developed from the late 1950s by Gulf American Land Corporation, the city's southeast quadrant has the oldest homes, mostly 1960s and 1970s block ranches, while the north and west filled in from the 1990s on, with building booms in the 2000s and again after 2015. Almost all of it is single-story concrete block construction.",
      "Typical Cape Coral projects are about the outdoor living space as much as the house: pool cages and lanai enclosures, sliding glass walls to the pool deck, impact windows and doors facing the canal, and kitchens that open to the back of the house. Older homes in the southeast Cape also need full interior remodels, new openings and updated electrical. Gulf-access canal homes are mostly in FEMA flood zones, so the 50% rule comes into play on large remodels and rebuilds.",
      "Hurricane Ian in 2022 hit Cape Coral hard, with storm surge along the southern canals and wind damage to roofs and pool cages across the city, and Milton in 2024 added more. Cape Coral is an incorporated city, so permits go through the City of Cape Coral Department of Community Development. We know their submittal requirements and inspection process, and we handle them for you.",
    ],
    popularServices: [
      "impact-windows-doors",
      "lanai-enclosures",
      "outdoor-living",
      "storm-damage-rebuild",
      "kitchen-remodeling",
    ],
    faqs: [
      {
        q: "Who issues permits in Cape Coral?",
        a: "The City of Cape Coral Department of Community Development handles permits within the city. We prepare the application, engineering and product approvals and schedule every inspection.",
      },
      {
        q: "Can you replace a pool cage or lanai enclosure damaged by Ian or Milton?",
        a: "Yes. We rebuild screen enclosures to current wind-load requirements with engineered drawings and a permit, and we can coordinate the work with your insurance claim.",
      },
      {
        q: "Do you install impact sliders and windows on canal-front homes?",
        a: "Yes, it is one of our core services. Exposed canal-facing openings often need higher design pressures, so we specify product approvals that match your home's wind zone and exposure category.",
      },
    ],
  },
  {
    slug: "lakewood-ranch",
    name: "Lakewood Ranch",
    county: "Manatee County",
    zip: ["34202", "34211", "34212", "34240"],
    driveTime: "About 60 min from Port Charlotte",
    seoTitle: "Remodeling & Impact Windows in Lakewood Ranch, FL",
    seoDescription:
      "Licensed contractor for Lakewood Ranch: impact windows and doors, kitchens, baths, lanais and exterior work. County permits and HOA design review handled.",
    intro: [
      "Lakewood Ranch is one of the largest master-planned communities in the country, built out from the mid-1990s onward across the Manatee and Sarasota county line. Most homes are concrete block with stucco and tile or shingle roofs, from the first 1990s villages to the newest neighborhoods still under construction. The bones are generally good; what owners call us about is what the builder left standard: non-impact windows and sliders, builder-grade kitchens and baths, and plain lanais.",
      "Almost everything visible from outside goes through architectural review. The community's design review committees and individual village HOAs set rules for window frame colors, grid styles, roof materials, paint palettes and lanai enclosures, and they want drawings and product sheets before work starts. We prepare that package, wait for written approval, and only then order material.",
      "The county line decides who issues your permit: the northern villages are permitted by Manatee County Building and Development Services, the southern ones by Sarasota County Planning and Development Services. We confirm the parcel first. One of our own window jobs in Lakewood Ranch, arched transoms over twin windows on a stucco home with a tile roof, is in our project gallery.",
    ],
    popularServices: [
      "impact-windows-doors",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "lanai-enclosures",
      "exterior-remodeling",
      "outdoor-living",
    ],
    faqs: [
      {
        q: "Who issues permits in Lakewood Ranch?",
        a: "It depends on which side of the county line your home is on: Manatee County for the northern villages, Sarasota County for the southern ones. We check your parcel and file with the correct office.",
      },
      {
        q: "Do you handle Lakewood Ranch design review?",
        a: "Yes. We prepare the drawings, product approvals and color or style samples your village and the community design review require, and we do not start exterior work until approval is in writing.",
      },
      {
        q: "Can you replace builder-grade windows with impact windows that match the HOA rules?",
        a: "Yes. We specify frame color, grid pattern and glass that fit your community's guidelines and the design pressure for your address, and we have installed arched transoms and windows in Lakewood Ranch.",
      },
    ],
  },
  {
    slug: "bonita-springs",
    name: "Bonita Springs",
    county: "Lee County",
    zip: ["34134", "34135"],
    driveTime: "About 55 min from Port Charlotte",
    seoTitle: "Remodeling & Window Replacement in Bonita Springs, FL",
    seoDescription:
      "Licensed contractor for Bonita Springs: impact windows and doors, storm-damage rebuilds, kitchens, baths and stucco. City permits handled.",
    intro: [
      "Bonita Springs sits at the southern end of Lee County, between Estero and Naples. The housing ranges from older block homes and cottages near the Imperial River and Old 41 to large gated golf and country club communities from the 1980s through the 2000s, plus newer neighborhoods east of I-75. Most homes are concrete block with stucco, and many older ones still have their original windows.",
      "Hurricane Ian in 2022 pushed storm surge into Bonita Beach and flooded neighborhoods along the Imperial River, and many homes needed drywall, flooring and cabinets replaced. Homes close to the water are often in FEMA flood zones, where the 50% substantial-improvement rule applies to large remodels and rebuilds. We check your zone and the structure value before the scope is final.",
      "Bonita Springs is an incorporated city, so permits inside city limits go through the City of Bonita Springs, not Lee County. Gated communities add their own rules for contractor access, work hours and anything exterior. One of our own window jobs is here: single-hung replacements set into existing stucco openings, with the stucco patched around each new frame.",
    ],
    popularServices: [
      "impact-windows-doors",
      "storm-damage-rebuild",
      "exterior-remodeling",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "home-restoration",
    ],
    faqs: [
      {
        q: "Who issues permits in Bonita Springs?",
        a: "The City of Bonita Springs for addresses inside city limits. Some homes with a Bonita Springs mailing address are in unincorporated Lee County, so we confirm the parcel before we file.",
      },
      {
        q: "Have you worked in Bonita Springs?",
        a: "Yes. One of our window replacement jobs is in Bonita Springs, with new windows set into existing stucco openings and the stucco patched and ready for paint. You can see it in our project gallery.",
      },
      {
        q: "My home flooded during Ian. Does the 50% rule apply to my rebuild?",
        a: "If the home is in a Special Flood Hazard Area and the repair or improvement cost reaches 50% of the structure's market value, the building department can require the house to meet current flood rules. We help you understand where you stand before you commit to a scope.",
      },
    ],
  },
  {
    slug: "siesta-key",
    name: "Siesta Key",
    county: "Sarasota County",
    zip: ["34242"],
    driveTime: "About 55 min from Port Charlotte",
    seoTitle: "Impact Windows & Remodeling on Siesta Key, FL",
    seoDescription:
      "Licensed contractor for Siesta Key homes and condos: impact windows and sliders, storm rebuilds, kitchens and baths. Permits and flood rules handled.",
    intro: [
      "Siesta Key is a barrier island, and building here is shaped by the water on both sides. Homes range from mid-century cottages and ranches to large elevated new builds on the bay and canals, alongside condo buildings near the beach. Exposure to wind and salt air is high, so window and door products need design pressures for coastal exposure and hardware that holds up to salt.",
      "Most of the island is in high-risk FEMA flood zones. Helene's surge and Milton's wind in 2024 damaged homes and condos across the key. For large remodels and rebuilds, the FEMA 50% substantial-improvement rule applies, and work near the Gulf can also run into Sarasota County's coastal setback rules. We check the flood zone, elevation certificate and setbacks before the scope is final.",
      "Siesta Key is unincorporated, so permits go through Sarasota County Planning and Development Services. Condo associations add their own approvals, work hours and insurance requirements. One of our own jobs is a waterfront new build on Siesta Key, with black-frame impact windows and multi-panel sliders facing the canal.",
    ],
    popularServices: [
      "impact-windows-doors",
      "storm-damage-rebuild",
      "kitchen-remodeling",
      "bathroom-remodeling",
      "exterior-remodeling",
      "lanai-enclosures",
    ],
    faqs: [
      {
        q: "Who issues permits on Siesta Key?",
        a: "Siesta Key is unincorporated, so Sarasota County Planning and Development Services issues permits. We prepare the application, product approvals and any flood-zone paperwork and schedule the inspections.",
      },
      {
        q: "Do you work on Siesta Key condos?",
        a: "Yes. We prepare the association application and insurance certificates, plan around work hours and elevator access, and coordinate anything that touches shared structure or exterior openings with the building.",
      },
      {
        q: "What windows and sliders hold up on the island?",
        a: "Impact-rated units with design pressures for your exposure, frames and hardware rated for coastal conditions, and sliders sized and engineered for the opening. We installed impact windows and multi-panel sliders on a waterfront new build on Siesta Key.",
      },
    ],
  },
];
