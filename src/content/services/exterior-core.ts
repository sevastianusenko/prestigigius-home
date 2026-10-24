import type { Service } from "../types";

/**
 * Exterior core services: impact windows & doors, lanais, exterior/stucco,
 * roofing, siding. Prices are typical Southwest Florida ranges for 2026 and are
 * shown as guidance only; every job gets a written, fixed-price estimate.
 */
export const exteriorCore: Service[] = [
  // ---------------------------------------------------------------------------
  // 1. IMPACT WINDOWS & DOORS
  // ---------------------------------------------------------------------------
  {
    slug: "impact-windows-doors",
    title: "Impact Windows & Doors",
    navLabel: "Impact Windows & Doors",
    group: "exterior",
    blurb:
      "Impact windows, sliding glass doors and entry doors installed by the crew that started out doing nothing else.",
    seoTitle: "Impact Windows & Doors Port Charlotte FL | Prestigious",
    seoDescription:
      "Impact windows and impact sliding glass doors in Port Charlotte and SWFL. PGT, CWS, ES Windows. Permitted, NOA-approved, insurance-ready. Free estimate.",
    keywords: [
      "impact windows port charlotte",
      "impact sliding glass doors",
      "impact windows installation cost",
      "window replacement company near me",
      "impact windows and doors port charlotte",
      "sliding glass door replacement port charlotte",
      "hurricane windows port charlotte",
      "impact windows fort myers",
      "entry door installation port charlotte",
      "impact windows vs hurricane shutters",
    ],
    eyebrow: "Impact Windows & Doors · Port Charlotte & SWFL",
    headline: "Impact Window and Door Replacement, Installed by Career Window Installers",
    subhead:
      "Hurricane-rated windows, sliding glass doors and entry doors for Southwest Florida homes, measured, permitted and set by a licensed local crew that started out doing nothing but openings.",
    heroPhoto: "windows-doors",
    howWeWork: [
      {
        title: "Windows, sliders and entry doors",
        text: "One opening or the whole house: impact windows, sliding glass doors, French doors and front doors under one permit, one quote and one crew.",
      },
      {
        title: "Buck-in or full rebuild, explained plainly",
        text: "We check every opening and tell you whether the new unit can go into the existing buck or the buck needs replacing, and why. You get the reason, not an upsell.",
      },
      {
        title: "Glass rated for your address",
        text: "Laminated impact glass with a Florida Product Approval or Miami-Dade NOA, matched to the design pressure your house and exposure actually call for.",
      },
      {
        title: "Our own licensed installers",
        text: "The people who measure your openings are the people who set the units and run the last bead of sealant. No hand-off to a crew you never met.",
      },
    ],
    intro: [
      "Windows and doors are where Prestigious Home Improvements started. Before Tim Fomin and Vlad Filippov licensed their own company, they spent years installing windows and sliding doors for other contractors across Southwest Florida. That is still the work our Google reviewers mention most: slider installs, impact windows and shutters done cleanly and on schedule. When you hire us, the people measuring your openings are the same people who will set the units and caulk the last bead.",
      "Almost all of Charlotte, Sarasota and Lee counties sit inside the Florida Building Code's wind-borne debris region. That means every new window and glass door has to be impact-rated or protected by approved shutters, and every product needs a Florida Product Approval or Miami-Dade Notice of Acceptance (NOA) for the design pressure your house requires. We size each opening to the right rating, pull the permit with Charlotte County, North Port, Punta Gorda, Sarasota County or Lee County, and schedule the inspections. No permit, no warranty claim, no insurance credit, so we never skip it.",
      "Timing matters here. Hurricane season runs June 1 through November 30, and impact glass lead times stretch to 8–14 weeks once the summer rush starts. Homes in FEMA flood zones and condo or HOA communities often need extra approvals for frame color, grid pattern or glass tint. We collect those approvals up front, order once, and install without leaving your house open overnight. If you want to replace windows in phases, we plan the order so your most exposed openings get done first.",
    ],
    scopes: [
      {
        title: "Whole-house impact windows",
        summary:
          "Replace every window in the house with impact-rated units in one permit and one install.",
        changes: [
          { label: "Product", detail: "PGT WinGuard, CWS or ES Windows in aluminum or vinyl frames" },
          { label: "Glass", detail: "Laminated impact glass with Low-E and optional gray or bronze tint" },
          { label: "Install", detail: "Old units out, bucks repaired, new units anchored to the approved pattern" },
          { label: "Finish", detail: "Interior trim, exterior stucco patch and sealant at every opening" },
          { label: "Paperwork", detail: "Permit, final inspection and opening list for your wind mitigation report" },
        ],
        priceRange: "$22k–$55k",
        duration: "2–4 days on site · 8–14 weeks lead time",
      },
      {
        title: "Impact sliding glass doors",
        summary:
          "Swap a tired, sticking slider for an impact-rated door that rolls easily and seals tight.",
        changes: [
          { label: "Configuration", detail: "Two-, three- or four-panel sliders, pocket or stacking options" },
          { label: "Sill", detail: "High-performance sill to stop wind-driven rain on the lanai side" },
          { label: "Hardware", detail: "Multi-point locks and stainless rollers rated for coastal air" },
          { label: "Opening", detail: "Header and buck checked; widening possible with an engineered header" },
          { label: "Finish", detail: "Interior drywall, trim and flooring transition repaired" },
        ],
        priceRange: "$4.5k–$14k per door",
        duration: "1 day per door",
      },
      {
        title: "Single windows and phased upgrades",
        summary:
          "Start with the openings that matter most and finish the rest later under the same product line.",
        changes: [
          { label: "Priority", detail: "Bedrooms and the windward side first, garage and baths later" },
          { label: "Matching", detail: "Same frame color and glass so phase two looks like phase one" },
          { label: "Permits", detail: "Separate permit per phase, each with its own final inspection" },
          { label: "Shutters", detail: "Remaining openings covered with existing approved shutters until replaced" },
        ],
        priceRange: "$1.2k–$3.8k per opening",
        duration: "1 day per phase",
      },
      {
        title: "Impact entry and French doors",
        summary:
          "A front door or set of French doors that looks like an upgrade and holds up to a hurricane.",
        changes: [
          { label: "Style", detail: "Fiberglass, steel or aluminum-glass, single or double with sidelites" },
          { label: "Glass", detail: "Impact glass inserts in clear, frosted or decorative patterns" },
          { label: "Swing", detail: "Outswing options where code and wind load call for them" },
          { label: "Hardware", detail: "Multi-point locks, smart lock prep and coastal-grade finishes" },
          { label: "Trim", detail: "New casing and threshold, stucco and paint touched up outside" },
        ],
        priceRange: "$2.8k–$15k per door (single to double)",
        duration: "1–2 days",
      },
      {
        title: "Insurance and My Safe Florida Home upgrades",
        summary:
          "Window and door work planned around your wind mitigation report and grant rules.",
        changes: [
          { label: "Review", detail: "We read your current wind mitigation report and find the gaps" },
          { label: "Openings", detail: "All glazed openings and garage door protected for the top credit" },
          { label: "Grant", detail: "Scope written to fit My Safe Florida Home program rules when funds are open" },
          { label: "Documents", detail: "Product approval numbers and permit records ready for your inspector" },
        ],
        priceRange: "Varies with scope",
        duration: "Plan around program timelines",
      },
    ],
    included: [
      "In-home measurement of every opening by an installer, not a salesperson",
      "Written, fixed-price quote listing each window and door with its size and rating",
      "Product choice from PGT, CWS and ES Windows with Florida Product Approval or Miami-Dade NOA",
      "Permit, engineering where needed, and all inspections",
      "Removal and disposal of old windows, doors and shutter hardware you no longer need",
      "Buck and framing repair at openings, called out in writing before we start",
      "Installation to the manufacturer's tested anchor pattern",
      "Waterproofing, sealant and exterior stucco patch at each opening",
      "Interior trim, drywall returns and paint touch-up around new units",
      "Daily cleanup and a whole-house clean at the end",
      "Opening list and product approvals for your wind mitigation inspection",
      "Manufacturer warranty registration plus our written workmanship warranty",
    ],
    cost: {
      title: "What Drives the Price of a Impact Window Project",
      text: [
        "In 2026 most impact windows in Charlotte, Sarasota and Lee counties run $1,200 to $3,800 per opening installed, and impact sliding glass doors run $4,500 to $14,000 depending on width and panel count. A typical 2,000-square-foot home with 14 to 18 openings lands between $22,000 and $55,000.",
        "The biggest swing factors are frame material, size and design pressure. A large slider facing open water needs heavier framing and glass than a small bathroom window on a sheltered side. We quote every opening on its own line so you can see exactly where the money goes, and we offer financing on approved credit.",
        "Impact glass often pays some of itself back. A complete set of protected openings can cut the wind portion of your homeowners premium, and it ends the yearly routine of hanging shutters.",
      ],
      factors: [
        "Number and size of openings",
        "Aluminum vs vinyl frames",
        "Design pressure required for your address and exposure",
        "Glass options: Low-E, tint, privacy or decorative",
        "Slider width and panel count",
        "Buck or framing repairs found at removal",
        "HOA or condo approval requirements",
      ],
    },
    localNotes: [
      {
        title: "Wind-borne debris region and product approvals",
        text: "Most of Charlotte, Sarasota and Lee counties fall in the wind-borne debris region, so new glass must be impact-rated or protected. Every unit we install carries a Florida Product Approval or Miami-Dade NOA number, and we match the design pressure to your house before ordering.",
      },
      {
        title: "Wind mitigation discounts and My Safe Florida Home",
        text: "Florida insurers must offer credits for opening protection. When every glazed opening and the garage door are protected, your wind mitigation inspector can mark the top category. The state My Safe Florida Home program offers free inspections and, when funded, matching grants for upgrades. We write scopes that fit its rules so you are not leaving money on the table.",
      },
      {
        title: "Hurricane season ordering",
        text: "Order by early spring if you want glass in before June. Lead times jump in summer and after any named storm. We stage installs so your house is never left open overnight, and we keep shutters on hand for any opening still waiting on product.",
      },
    ],
    faqs: [
      {
        q: "How much do impact windows cost in Port Charlotte?",
        a: "Most impact windows run $1,200 to $3,800 per opening installed in 2026, and impact sliding glass doors run $4,500 to $14,000. A whole house usually lands between $22,000 and $55,000. We give you a written, line-by-line price after measuring.",
      },
      {
        q: "Which brands do you install?",
        a: "Mostly PGT, CWS and ES Windows. All three are built in Florida, carry Florida Product Approval, and have models with Miami-Dade NOAs. We recommend based on your openings, budget and lead time, not on which brand pays the best commission.",
      },
      {
        q: "Are impact windows worth it compared with hurricane shutters?",
        a: "For most homeowners, yes. Impact windows protect you 24/7 with no panels to hang, cut outside noise, block UV, and add security. Shutters cost less up front. Many clients start with impact sliders and the windward side and keep shutters on the rest until phase two.",
      },
      {
        q: "Will impact windows lower my insurance?",
        a: "Usually. Florida insurers must give credits for opening protection. To get the best credit, every glazed opening and the garage door need to be protected. We give you the product approval numbers and permit records your wind mitigation inspector needs.",
      },
      {
        q: "How long does installation take?",
        a: "One to four working days on site for most homes, about one day per sliding door. Ordering takes longer: impact glass is built to size and usually ships in 8 to 14 weeks, longer in summer.",
      },
      {
        q: "Do you handle permits and HOA approval?",
        a: "Yes. We pull the permit, schedule inspections, and prepare the product sheets and color samples your HOA or condo board asks for. We do not order until approvals are in.",
      },
      {
        q: "Can you help with the My Safe Florida Home program?",
        a: "We can write a scope that follows the program's rules and provide the documents it requires. The program has its own eligibility and funding windows, so check your status with the state first and we will build the quote around it.",
      },
      {
        q: "Do you install French doors and front entry doors too?",
        a: "Yes. We install impact-rated entry doors, French doors and patio doors in fiberglass, steel and aluminum-glass, including double doors with sidelites and outswing models where wind load calls for them.",
      },
    ],
    promises: [
      {
        title: "An installer does your measure",
        text: "Your quote comes from someone who has set impact windows for years, so it reflects what each opening really needs, not a guess from a catalog.",
      },
      {
        title: "Every opening priced on its own line",
        text: "Size, product, design pressure and price for each window and door, written down before you sign anything.",
      },
      {
        title: "Bad bucks called out before we start",
        text: "If we find rot, termite damage or cracked stucco at an opening, we show you and price the repair up front instead of surprising you mid-install.",
      },
      {
        title: "No house left open overnight",
        text: "Every opening we take out that day gets its new unit or a secure closure before the crew leaves.",
      },
      {
        title: "Permit, inspection and paperwork included",
        text: "We pull the permit, meet the inspector and hand you the approvals and opening list your insurer and wind mitigation inspector ask for.",
      },
      {
        title: "Two warranties, both in writing",
        text: "We register the manufacturer warranty for you and back the installation itself with our written workmanship warranty.",
      },
    ],
    signsTitle: "Signs Your Windows and Doors Are Ready to Be Replaced",
    signs: [
      {
        title: "Rooms that bake every afternoon",
        text: "Older clear glass lets the Gulf sun pour in. Low-E impact glass cuts that heat gain, so west-facing rooms stay usable and the AC gets a break.",
      },
      {
        title: "Dreading shutter season",
        text: "If every storm warning means ladders, panels and wing nuts, impact glass ends the routine and keeps protecting the house while you are away.",
      },
      {
        title: "A slider that drags or will not lock",
        text: "Worn rollers and pitted tracks make old sliders hard to move and harder to secure. A new impact door glides and closes on a multi-point lock.",
      },
      {
        title: "Haze trapped between the panes",
        text: "A cloudy insulated unit means its seal has failed. It has stopped insulating, and the fog will not clear on its own.",
      },
      {
        title: "Water on the sill after a storm",
        text: "Puddles or stains below a window after wind-driven rain usually mean failed sealant or a damaged buck that needs attention before it spreads.",
      },
      {
        title: "Street noise in the living room",
        text: "Laminated impact glass is noticeably quieter than single-pane aluminum windows, a difference you hear most on busy roads.",
      },
      {
        title: "Faded floors and furniture",
        text: "Florida sun bleaches rugs, wood and upholstery. Low-E coatings and the laminated interlayer screen out most UV without darkening the room.",
      },
      {
        title: "Gaps on your wind mitigation report",
        text: "If your inspector marked openings as unprotected, you are probably missing an insurance credit. Protecting every glazed opening closes that gap.",
      },
    ],
    optionsTitle: "Two Ways to Install, and What Goes Into the Opening",
    optionsIntro:
      "Most homes here are concrete block, and every window is fastened to a wood or concrete buck set into that block. Which install method fits depends on the condition of that buck, not on a sales script. Here is how the two methods compare, plus the styles, frames and glass we install.",
    options: [
      {
        title: "New unit in the existing buck",
        text: "The old window comes out, the buck stays, and the new impact unit is anchored into it to the tested pattern. The right call when the buck is solid, dry and square.",
        bullets: [
          "Best for: sound bucks and keeping the same opening size",
          "Stucco: a narrow perimeter patch, textured to match",
          "Look: same opening, new frame and glass; interior trim often reused",
          "Timeline: quicker, with several openings finished per day",
          "Cost: lower, since there is less labor and finish work",
        ],
      },
      {
        title: "Full buck and frame replacement",
        text: "Window, old buck and any damaged material come out to the block. A new treated buck is fastened in, then the unit is installed and sealed. Our recommendation whenever the buck is soft or the opening needs to change.",
        bullets: [
          "Best for: rot, termite damage, water intrusion or resizing an opening",
          "Stucco: a wider cut-back, then patched and textured to match",
          "Look: a like-new opening, and room for a bigger slider if you want one",
          "Timeline: more prep and finish work per opening",
          "Cost: higher up front, but it fixes the problem behind the frame",
        ],
      },
      {
        title: "Window styles we install",
        text: "The right style balances looks, airflow and how often you actually open the window.",
        bullets: [
          "Single-hung: the bottom sash moves; simple and budget-friendly",
          "Horizontal roller: slides side to side, good for wide openings",
          "Casement: cranks outward for full airflow and a tight seal",
          "Picture: fixed glass for the most light and the best view",
          "Sliding, French and entry doors in impact-rated versions",
        ],
      },
      {
        title: "Frames and impact glass",
        text: "Frame and glass choices drive comfort, upkeep and price. We lay them out side by side for each opening.",
        bullets: [
          "Aluminum: slim and strong, common on large sliders and high design pressures",
          "Vinyl: better insulation and no painting, popular for bedrooms and baths",
          "Laminated impact glass: the interlayer holds broken glass in the frame",
          "Low-E coating: reflects heat and UV while keeping rooms bright",
          "Gray or bronze tint, and obscure privacy glass where you want it",
        ],
      },
    ],
    benefitsTitle: "Cooler, Quieter, Storm-Ready Homes",
    benefits: [
      {
        title: "Less heat and glare",
        text: "Low-E impact glass reflects a large share of the sun's heat, so south- and west-facing rooms stop overheating by mid-afternoon.",
      },
      {
        title: "A quieter house",
        text: "The laminated layer in impact glass dampens sound. Homeowners notice it most with traffic, boat motors and lawn crews outside.",
      },
      {
        title: "Protection that is always on",
        text: "Impact glass is in place every day of the year, so the house stays protected if a storm shifts overnight or you are up north for the summer.",
      },
      {
        title: "Insurance credits",
        text: "Fully protected openings can move your wind mitigation report into a better opening-protection category, which many carriers reward on the wind premium.",
      },
      {
        title: "Better security",
        text: "Laminated glass is hard to get through, and new sliders and entry doors close on multi-point locks.",
      },
      {
        title: "Built for salt air",
        text: "Near the Gulf, Charlotte Harbor and the canals, we specify coastal-grade hardware and finishes so rollers and locks keep working for years.",
      },
    ],
    processTitle: "Six Steps. No Surprises.",
    process: [
      {
        n: "01",
        title: "Free in-home visit",
        kicker: "Installers, not salespeople",
        text: "We look at your windows and doors, ask what bothers you most, whether that is heat, noise, storms or insurance, and answer every question without pressure.",
      },
      {
        n: "02",
        title: "Measure and probe",
        kicker: "Every opening, every buck",
        text: "We measure each opening, check the buck and surrounding stucco for rot or cracks, and confirm the design pressure your address requires.",
      },
      {
        n: "03",
        title: "Written quote and approvals",
        kicker: "Permit and HOA handled",
        text: "You get a line-by-line quote with product, size and rating for each opening. Once you approve, we file the permit and any HOA paperwork, then place the order.",
      },
      {
        n: "04",
        title: "Install",
        kicker: "Closed up the same day",
        text: "We cover floors and landscaping, remove the old units, and anchor the new ones exactly as the product approval specifies.",
      },
      {
        n: "05",
        title: "Seal and test",
        kicker: "Weather-tight",
        text: "Each opening is sealed, the stucco patched and the interior trimmed. We run every sash, slider and lock before we call an opening finished.",
      },
      {
        n: "06",
        title: "Inspection and walkthrough",
        kicker: "Paperwork in your hands",
        text: "We meet the final inspection, walk the house with you, clean up, and hand over product approvals and the opening list for your wind mitigation inspector.",
      },
    ],
    related: ["lanai-screen-enclosures", "exterior-remodeling", "storm-damage-rebuild"],
  },

  // ---------------------------------------------------------------------------
  // 2. LANAI & SCREEN ENCLOSURES
  // ---------------------------------------------------------------------------
  {
    slug: "lanai-screen-enclosures",
    title: "Lanai & Screen Enclosures",
    navLabel: "Lanai & Screen Enclosures",
    group: "exterior",
    blurb:
      "Lanai remodels, rescreens, pool cage rebuilds and under-roof lanai conversions with impact glass.",
    seoTitle: "Lanai & Screen Enclosures Port Charlotte FL | Prestigious",
    seoDescription:
      "Lanai remodels, rescreening, pool cage rebuilds and lanai conversions with impact sliders in Port Charlotte, North Port and SWFL. Permitted. Free estimate.",
    keywords: [
      "lanai remodel",
      "lanai enclosure port charlotte",
      "screen enclosure repair port charlotte",
      "pool cage rescreen",
      "pool cage replacement port charlotte",
      "screen room additions near me",
      "lanai conversion florida",
      "patio cover port charlotte",
    ],
    eyebrow: "Lanai & Screen Enclosures · Port Charlotte & SWFL",
    headline: "A Lanai You Will Use All Year, Built for the Next Storm Season",
    subhead:
      "Rescreens, engineered pool cage rebuilds, open-air lanai remodels and full conversions with impact glass, permitted and built by a licensed Port Charlotte crew.",
    heroPhoto: "lanai",
    howWeWork: [
      {
        title: "Repair, rebuild or convert",
        text: "Rescreens, new engineered cages, open-air remodels and under-roof conversions, each priced in writing so you can weigh one against another.",
      },
      {
        title: "Frame first, screen second",
        text: "We check aluminum, fasteners, footers and the roof tie-in before talking about screen. Fresh mesh on a failing frame is money thrown away.",
      },
      {
        title: "Engineered for your wind zone",
        text: "New enclosures and conversions are built from sealed drawings for your local wind speed and exposure, not copied from the original plans.",
      },
      {
        title: "Glass set by window specialists",
        text: "When a lanai becomes a room, our own window crew installs the impact sliders and windows, the work this company was founded on.",
      },
    ],
    intro: [
      "In Southwest Florida the lanai is the room you live in from October to May. Too often it is also the most neglected part of the house: torn screen, chalky aluminum, a cracked slab, and a slider that has not rolled right in years. We fix all of it under one contract. Because our roots are in window and door installation, we are especially good at the part most screen companies avoid: turning an under-roof lanai into real living space with impact sliders and windows.",
      "Screen enclosures in Charlotte, Sarasota and Lee counties have to be engineered for the local wind speed, and most of the region sits in the wind-borne debris region. Hurricanes Ian, Helene and Milton showed what happens to cages built light: bent beams, popped gutters and screen torn out in sheets. When we rebuild, we use current engineering and heavier framing where the drawings call for it. Conversions add more rules, because a closed-in lanai becomes conditioned space and has to meet energy and impact requirements.",
      "Permits run through Charlotte County, North Port, Punta Gorda, Sarasota County or Lee County depending on your address. In FEMA flood zones, enclosing a lanai below base flood elevation can trigger extra rules, so we check your elevation certificate first. Most HOAs control frame color and screen type, and some limit cage height. We gather approvals before ordering, and we schedule rebuilds outside the peak of hurricane season when we can.",
    ],
    scopes: [
      {
        title: "Rescreen and repair",
        summary:
          "New screen, splines and fasteners on a sound frame, so the space looks new without rebuilding.",
        changes: [
          { label: "Screen", detail: "Standard 18/14, no-see-um, or heavy-duty pet screen on lower panels" },
          { label: "Hardware", detail: "Corroded screws swapped for stainless; loose cables re-tensioned" },
          { label: "Doors", detail: "Screen doors re-hung with new closers and kick plates" },
          { label: "Frame", detail: "Bent members and damaged gutters replaced where needed" },
        ],
        priceRange: "$2.5k–$8k",
        duration: "1–3 days",
      },
      {
        title: "Pool cage rebuild",
        summary:
          "A new, engineered enclosure when the old one is bent, undersized or past saving.",
        changes: [
          { label: "Engineering", detail: "Sealed drawings to current wind code for your exposure" },
          { label: "Shape", detail: "Mansard, dome, gable or hip roof, often taller than the original" },
          { label: "Framing", detail: "Heavier beams, new footers and anchors where required" },
          { label: "Finish", detail: "Powder-coated aluminum in white or bronze, new screen throughout" },
          { label: "Protection", detail: "Pool and deck covered and cleaned throughout the build" },
        ],
        priceRange: "$16k–$45k",
        duration: "1–3 weeks on site",
      },
      {
        title: "Under-roof lanai conversion",
        summary:
          "Turn a screened porch under the main roof into a bright, air-conditioned room with impact glass.",
        changes: [
          { label: "Walls", detail: "Screen replaced with framed knee walls or full impact glass" },
          { label: "Openings", detail: "Impact sliders and windows from PGT, CWS or ES Windows" },
          { label: "Comfort", detail: "Insulated ceiling, mini-split or ducted AC, outlets and lighting" },
          { label: "Floor", detail: "Slab leveled and finished with tile or luxury vinyl" },
          { label: "Code", detail: "Engineering, energy calcs, permit and inspections" },
        ],
        priceRange: "$25k–$70k",
        duration: "4–8 weeks",
      },
      {
        title: "Lanai remodel",
        summary:
          "Keep it open-air but make it better: new floor, ceiling, fans, lighting and an outdoor kitchen hookup.",
        changes: [
          { label: "Floor", detail: "Pavers, tile or coating over the existing slab" },
          { label: "Ceiling", detail: "Tongue-and-groove or vinyl soffit ceiling with fans and lights" },
          { label: "Slider", detail: "Old patio door to the house upgraded to an impact slider" },
          { label: "Extras", detail: "Gas and power stubs for a summer kitchen or TV wall" },
          { label: "Screen", detail: "Fresh screen and doors to tie it all together" },
        ],
        priceRange: "$12k–$40k",
        duration: "2–5 weeks",
      },
      {
        title: "Screen room or patio cover addition",
        summary:
          "Add covered outdoor space where there is none, attached to the house and built to code.",
        changes: [
          { label: "Roof", detail: "Insulated aluminum panel roof or tie-in to the main roof" },
          { label: "Slab", detail: "New or extended slab with proper footers" },
          { label: "Enclosure", detail: "Open, screened, or prepared for glass later" },
          { label: "Electrical", detail: "Fans, lights and outlets on their own circuit" },
        ],
        priceRange: "$15k–$45k",
        duration: "3–6 weeks",
      },
    ],
    included: [
      "Structural inspection of frame, fasteners, slab and roof tie-in",
      "Written comparison of repair, rebuild and conversion options with prices",
      "Engineering and sealed drawings for new enclosures and conversions",
      "Permits and all required inspections",
      "HOA approval packet with colors, screen type and drawings",
      "Removal and disposal of old screen, aluminum and debris",
      "Stainless fasteners and powder-coated aluminum",
      "Impact sliders and windows installed by our own window crew",
      "Pool and landscaping protection during the work",
      "Final walkthrough and written workmanship warranty",
    ],
    cost: {
      title: "What Drives the Price of a Lanai Project",
      text: [
        "In 2026 a rescreen on a sound frame in Charlotte or Sarasota County usually runs $2,500 to $8,000. A full pool cage rebuild runs $16,000 to $45,000 depending on size, height and roof style. Converting an under-roof lanai into air-conditioned space with impact glass usually lands between $25,000 and $70,000.",
        "The biggest variables are the condition of the existing frame and slab, the size of the enclosure, and how much impact glass goes into a conversion. We quote each option on paper so you can decide with real numbers, and we offer financing on approved credit.",
      ],
      factors: [
        "Square footage and height of the enclosure",
        "Condition of existing frame, footers and slab",
        "Screen type: standard, no-see-um or pet-resistant",
        "Roof style and engineering requirements",
        "Amount of impact glass in a conversion",
        "Air conditioning, electrical and flooring choices",
        "HOA restrictions on color, height or design",
      ],
    },
    localNotes: [
      {
        title: "Engineering after Ian, Helene and Milton",
        text: "Many older cages in the region were built to lighter standards and failed in recent storms. New enclosures need engineering for your local wind speed and exposure. We use current drawings, not the original 1990s plans.",
      },
      {
        title: "Flood zones and enclosed lanais",
        text: "If your lanai floor sits below base flood elevation, enclosing it as living space can be restricted. We check your FEMA flood zone and elevation certificate before we design a conversion, so there are no surprises at permit review.",
      },
      {
        title: "HOA rules",
        text: "Deed-restricted communities in North Port, Punta Gorda Isles, Venice and Cape Coral often dictate frame color, screen type and cage height. We prepare the submittal and wait for approval before ordering material.",
      },
    ],
    faqs: [
      {
        q: "How much does it cost to rescreen a pool cage?",
        a: "Most rescreens in Port Charlotte and North Port run $2,500 to $8,000 in 2026, depending on size, screen type, and how many fasteners and frame parts need replacing.",
      },
      {
        q: "Should I rescreen or rebuild my pool cage?",
        a: "If the frame is straight, the fasteners are not rusted through, and the footers are sound, rescreen. If beams are bent, gutters are separated or the cage moved in a storm, rebuild. We show you what we find and price both.",
      },
      {
        q: "Can you turn my lanai into a room with air conditioning?",
        a: "Yes, if it is under the main roof and the floor elevation works for your flood zone. We frame knee walls or install full impact glass, add insulation, AC, outlets and lighting, and permit it as conditioned space.",
      },
      {
        q: "Do I need a permit for a lanai project?",
        a: "New enclosures, rebuilds, conversions and roof covers need a permit. A straight rescreen on an existing frame usually does not. We tell you which applies and handle the permit when it does.",
      },
      {
        q: "How long does a pool cage rebuild take?",
        a: "One to three weeks on site once engineering, permit and HOA approval are done. Approvals usually take three to six weeks before that.",
      },
      {
        q: "What screen should I choose?",
        a: "Standard 18/14 for most cages, no-see-um screen if you sit out at dusk near water, and heavy-duty pet screen on the lower panels if you have dogs. We bring samples.",
      },
      {
        q: "Will my HOA allow a new enclosure?",
        a: "Usually, with conditions on color, height and style. We prepare the drawings and product sheets your HOA asks for and do not order material until you have written approval.",
      },
    ],
    promises: [
      {
        title: "We check the frame before we sell screen",
        text: "If the structure cannot carry new screen safely, we tell you, show you what we found and price the fix instead of a rescreen that will not last.",
      },
      {
        title: "Every path priced in writing",
        text: "Rescreen, rebuild or conversion, each with its own written scope and price, so the decision is yours and the numbers are real.",
      },
      {
        title: "Current engineering on every new build",
        text: "New cages and conversions follow sealed drawings for today's wind requirements, with heavier framing wherever the engineer calls for it.",
      },
      {
        title: "Pool, deck and plants protected",
        text: "We cover the pool, keep debris out of the water and off the landscaping, and clean up at the end of every workday.",
      },
      {
        title: "Nothing ordered before approvals",
        text: "Permit and HOA approval come first. We do not buy aluminum or glass until both are in hand.",
      },
      {
        title: "Workmanship warranty in writing",
        text: "We walk the finished space with you before final inspection and back the work with our written warranty.",
      },
    ],
    signsTitle: "Signs Your Lanai or Pool Cage Needs Work",
    signs: [
      {
        title: "Torn or sagging screen",
        text: "Holes, popped splines and panels that flap in the wind let bugs in and tend to get worse with every storm.",
      },
      {
        title: "Rust streaks and chalky aluminum",
        text: "Bleeding screws and powdery frames mean corrosion is working on the connections that hold the cage together.",
      },
      {
        title: "Bent beams or a cage that shifted",
        text: "If a storm twisted a beam, pulled a gutter loose or moved the structure, new screen will not solve it. The frame needs a real evaluation.",
      },
      {
        title: "Screen doors that will not latch",
        text: "Doors that drag or refuse to close often point to a racked frame or a settled footer, not just a tired closer.",
      },
      {
        title: "Cracked or sloping slab",
        text: "Cracks, lifted pavers or a deck that drains toward the house create trip hazards and send rain where it should not go.",
      },
      {
        title: "A lanai nobody sits in",
        text: "Too hot in August, too buggy at dusk, too exposed in a storm. A remodel or conversion can turn it into the room you use most.",
      },
    ],
    optionsTitle: "Rescreen, Rebuild, or Convert?",
    optionsIntro:
      "The right answer depends on what the structure can still carry and how you want to use the space. Here is how the three paths compare. If a rescreen will hold, that is what we recommend.",
    options: [
      {
        title: "Rescreen and repair",
        text: "New screen, splines and stainless fasteners on a frame that is still straight and sound, with damaged members swapped as needed.",
        bullets: [
          "Best when: aluminum, footers and gutters are in good shape",
          "Permit: usually not required for a straight rescreen",
          "Result: a like-new enclosure for the least money",
        ],
      },
      {
        title: "Engineered rebuild",
        text: "The old cage comes down and a new one goes up from current engineering, often taller or with a different roof style than before.",
        bullets: [
          "Best when: beams are bent, the cage moved, or corrosion is structural",
          "Permit: yes, with sealed drawings for your exposure",
          "Result: an enclosure built to today's wind requirements",
        ],
      },
      {
        title: "Lanai conversion",
        text: "An under-roof lanai closed in with knee walls or impact glass and finished as air-conditioned living space.",
        bullets: [
          "Best when: you want a usable room every month of the year",
          "Permit: yes, plus energy calculations and a flood-zone check",
          "Result: real square footage without building a full addition",
        ],
      },
    ],
    processTitle: "From First Look to Final Inspection",
    process: [
      {
        n: "01",
        title: "Structure check",
        kicker: "Free visit",
        text: "We inspect the frame, fasteners, slab and roof tie-in, photograph what we find and listen to how you want to use the space.",
      },
      {
        n: "02",
        title: "Options on paper",
        kicker: "Repair, rebuild or convert",
        text: "You get written scopes and prices for every path that makes sense, with our honest recommendation on which one fits.",
      },
      {
        n: "03",
        title: "Engineering and approvals",
        kicker: "Permit and HOA",
        text: "For rebuilds and conversions we order sealed drawings, check your flood zone, and submit the permit and HOA packet before buying material.",
      },
      {
        n: "04",
        title: "Build",
        kicker: "Pool and yard protected",
        text: "Our crew does the work, keeps the pool and landscaping clean, and keeps you posted as each stage wraps up.",
      },
      {
        n: "05",
        title: "Walkthrough and final",
        kicker: "Written warranty",
        text: "We walk the finished lanai with you, close any punch items, pass final inspection and hand over the warranty.",
      },
    ],
    related: ["impact-windows-doors", "outdoor-living", "home-additions"],
  },

  // ---------------------------------------------------------------------------
  // 3. EXTERIOR REMODELING & STUCCO
  // ---------------------------------------------------------------------------
  {
    slug: "exterior-remodeling",
    title: "Exterior Remodeling & Stucco",
    navLabel: "Exterior & Stucco",
    group: "exterior",
    blurb:
      "Stucco repair and re-texture, soffit and fascia, new entries and curb appeal makeovers for Florida homes.",
    seoTitle: "Exterior Remodeling & Stucco Port Charlotte FL | Prestigious",
    seoDescription:
      "Stucco repair, re-texture, soffit and fascia, entry makeovers and curb appeal remodels in Port Charlotte and SWFL. Licensed, permitted, free estimate.",
    keywords: [
      "stucco repair port charlotte",
      "exterior remodeling contractors near me",
      "exterior renovation port charlotte",
      "curb appeal remodel",
      "exterior remodel cost",
      "soffit and fascia repair port charlotte",
      "stucco contractor sarasota",
      "front entry makeover florida",
    ],
    eyebrow: "Exterior Remodeling & Stucco · Port Charlotte & SWFL",
    headline: "Stucco Repair and Exterior Remodeling That Fixes the Cause First",
    subhead:
      "Crack repair, re-texture, water-damage rebuilds, soffit, fascia and curb appeal makeovers for Southwest Florida block homes, by a licensed local team that finds the leak before anything gets painted.",
    heroPhoto: "exterior",
    howWeWork: [
      {
        title: "Crack and wall repair",
        text: "From a handful of wide cracks to a whole failing elevation, repaired at the source and blended into your existing texture.",
      },
      {
        title: "Water-damage rebuilds",
        text: "Where water got behind the stucco, we open the wall, repair the bucks, block or framing, and rebuild the finish in the right order.",
      },
      {
        title: "Whole-house re-texture",
        text: "One uniform finish across every elevation, ending the patchwork look that years of spot repairs leave behind.",
      },
      {
        title: "Openings and paint in sequence",
        text: "Windows, doors and garage door go in before the stucco, and paint goes on last, so you pay for each step only once.",
      },
    ],
    intro: [
      "Most Southwest Florida homes are concrete block with stucco, and the Gulf climate is hard on it. Sun, salt air and summer downpours open hairline cracks, rot the wood fascia, stain the soffits and fade the paint. Left alone, those cracks let water into the block and around window frames. We repair the stucco properly, then give the outside of the house the look you want, from a fresh texture and trim package to a full front entry redesign.",
      "The order of work matters. If you are planning impact windows, a new front door or a garage door, those go in before the stucco patch and paint, or you pay twice. Because we install windows and doors with our own crew, we can sequence the whole exterior in one plan. Most of the region sits in the wind-borne debris region, so new openings, garage doors and entry doors all need product approvals for the design pressure at your address.",
      "Cosmetic stucco and paint usually do not need a permit, but new openings, structural repairs and garage doors do, through Charlotte County, North Port, Punta Gorda, Sarasota County or Lee County. HOAs often control paint colors, roof trim and front door styles, and many require approval before any exterior change. In flood zones, large remodels can trigger the FEMA 50% rule, so we keep that number in view. We schedule exterior work for the drier months when we can, because hurricane season afternoons do not mix with fresh stucco.",
    ],
    scopes: [
      {
        title: "Stucco crack repair",
        summary:
          "Targeted repair of cracks, delamination and impact damage, blended to match the existing texture.",
        changes: [
          { label: "Diagnosis", detail: "Moisture readings and sounding to find hollow or wet areas" },
          { label: "Repair", detail: "Cracks routed, bonded and patched; loose stucco cut out and replaced" },
          { label: "Openings", detail: "Window and door perimeters resealed where water was getting in" },
          { label: "Texture", detail: "Patch hand-matched to your existing finish" },
          { label: "Paint", detail: "Elastomeric or acrylic primer and paint over repairs" },
        ],
        priceRange: "$1.5k–$7k",
        duration: "2–5 days",
      },
      {
        title: "Whole-house re-texture",
        summary:
          "A fresh, uniform stucco finish over the whole house, ending the patchwork look for good.",
        changes: [
          { label: "Prep", detail: "Pressure wash, crack repair and bonding agent over sound stucco" },
          { label: "Finish", detail: "Smooth, sand, knockdown or Spanish lace texture" },
          { label: "Details", detail: "New window bands, quoins or trim profiles if you want them" },
          { label: "Paint", detail: "Full exterior paint in HOA-approved colors" },
          { label: "Cleanup", detail: "Landscaping, pool and driveway protected throughout" },
        ],
        priceRange: "$12k–$32k",
        duration: "2–4 weeks",
      },
      {
        title: "Soffit and fascia",
        summary:
          "Replace rotted wood fascia and stained soffits with low-maintenance materials that handle Florida weather.",
        changes: [
          { label: "Fascia", detail: "Rotted wood replaced; aluminum or PVC wrap to stop future rot" },
          { label: "Soffit", detail: "Vented aluminum or vinyl soffit for attic airflow" },
          { label: "Gutters", detail: "Seamless gutters and downspouts reset or replaced" },
          { label: "Pests", detail: "Gaps closed where birds, rodents or bees were getting in" },
        ],
        priceRange: "$4k–$15k",
        duration: "3–7 days",
      },
      {
        title: "Front entry makeover",
        summary:
          "The first thing guests see: door, lighting, columns and walkway redesigned together.",
        changes: [
          { label: "Door", detail: "Impact-rated single or double entry door with sidelites" },
          { label: "Structure", detail: "Columns wrapped, entry arch reshaped or portico added" },
          { label: "Lighting", detail: "New sconces, address numbers and soffit lights" },
          { label: "Ground", detail: "Pavers or tile on the front walk and porch" },
          { label: "Finish", detail: "Stucco detail and paint tied to the rest of the house" },
        ],
        priceRange: "$8k–$30k",
        duration: "1–3 weeks",
      },
      {
        title: "Full curb appeal remodel",
        summary:
          "Windows, entry, garage door, stucco and paint planned as one project for a house that looks newer than its year.",
        changes: [
          { label: "Openings", detail: "Impact windows and doors installed first" },
          { label: "Garage", detail: "Wind-rated garage door coordinated with the new color scheme" },
          { label: "Walls", detail: "Stucco repair or re-texture, new trim bands" },
          { label: "Roofline", detail: "Fascia, soffit and gutters refreshed" },
          { label: "Color", detail: "Full exterior paint and HOA submittal" },
          { label: "Lighting", detail: "Entry and landscape lighting tie-ins" },
        ],
        priceRange: "$35k–$110k",
        duration: "4–10 weeks",
      },
    ],
    included: [
      "Moisture and soundness check of stucco before we price repairs",
      "Written, fixed-price scope with each area and repair listed",
      "Color and texture samples, and photo mockups on larger projects",
      "Permits where required and all inspections",
      "HOA submittal with colors, product sheets and drawings",
      "Protection of landscaping, pool, pavers and windows",
      "Sequencing of windows, doors, garage door, stucco and paint",
      "Rot and pest repairs at fascia and soffit",
      "Disposal of all debris",
      "Final walkthrough and written workmanship warranty",
    ],
    cost: {
      title: "What Drives the Price of a Stucco and Exterior Project",
      text: [
        "In 2026, stucco crack repair on a typical Port Charlotte or North Port home runs $1,500 to $7,000. A full re-texture and paint runs $12,000 to $32,000. Soffit and fascia replacement usually lands between $4,000 and $15,000, and a complete curb appeal remodel with windows, entry, garage door, stucco and paint can run $35,000 to $110,000.",
        "Hidden damage is the wild card. Water behind stucco can rot window bucks or damage block, and we cannot see all of it until we open the wall. We price known work as fixed lines and put any likely hidden repair on the estimate as a clear allowance, so you know the range before we start.",
      ],
      factors: [
        "Square footage of wall area",
        "Extent of cracking, delamination or water damage",
        "Texture style and trim details",
        "Fascia and soffit material and linear footage",
        "Number of new windows, doors and garage doors",
        "Two-story access and scaffolding",
        "HOA color and design requirements",
      ],
    },
    localNotes: [
      {
        title: "Stucco over block, and why cracks matter",
        text: "Most homes here are concrete block with a thin stucco skin. Hairline cracks are normal; cracks wider than a credit card, stair-step cracks or bulging patches often mean water or movement. Those get fixed at the source before any cosmetic finish.",
      },
      {
        title: "Wind-rated garage and entry doors",
        text: "In the wind-borne debris region, a new garage door or entry door needs a product approval for your design pressure. An unprotected garage door is also the most common weak spot on a wind mitigation report, so we coordinate it with your exterior plan.",
      },
      {
        title: "Weather and scheduling",
        text: "Fresh stucco and paint need dry weather to cure. We schedule larger exterior jobs between October and May when we can, and build rain days into summer schedules.",
      },
    ],
    faqs: [
      {
        q: "How much does stucco repair cost in Port Charlotte?",
        a: "Most crack and patch repairs run $1,500 to $7,000 in 2026. A whole-house re-texture with paint runs $12,000 to $32,000 depending on wall area and texture.",
      },
      {
        q: "Are stucco cracks a problem?",
        a: "Fine hairline cracks are normal in Florida stucco. Wide cracks, stair-step patterns, hollow-sounding areas or staining around windows can mean water is getting in. We test and tell you which you have.",
      },
      {
        q: "Can you match my existing stucco texture?",
        a: "Yes. Our crew hand-matches common Florida textures. On houses with many old patches, a full re-texture often looks better and costs less than chasing each spot.",
      },
      {
        q: "Should I replace windows before redoing stucco?",
        a: "Yes. Window replacement disturbs the stucco around each opening. Doing windows first means one patch and one paint job instead of two.",
      },
      {
        q: "Do I need a permit for exterior remodeling?",
        a: "Paint and cosmetic stucco usually do not. New windows, doors, garage doors, structural repairs and new porticos do. We pull the permits that apply.",
      },
      {
        q: "Do you replace garage doors?",
        a: "We coordinate wind-rated garage doors as part of exterior remodels so color, style and timing match the rest of the work, and the new door carries the product approval your inspector needs.",
      },
      {
        q: "How long does an exterior remodel take?",
        a: "Stucco repairs take days. A re-texture and paint takes two to four weeks. A full curb appeal remodel with new windows and doors takes four to ten weeks, mostly driven by window lead times.",
      },
    ],
    promises: [
      {
        title: "We find the water before we patch",
        text: "Moisture readings and sounding come first. If water is getting in, the source is repaired before any finish coat goes on.",
      },
      {
        title: "Hidden damage priced up front",
        text: "Likely repairs behind the stucco appear on your estimate as a clear allowance, so you know the range before the wall is opened.",
      },
      {
        title: "Texture matched by hand",
        text: "Our crew studies your existing finish and recreates it, and we tell you honestly when a full re-texture will look better than a patch.",
      },
      {
        title: "Trades in the right order",
        text: "Openings, then stucco, then paint. One schedule and one point of contact, so nothing gets torn out and redone.",
      },
      {
        title: "Your property protected",
        text: "Landscaping, pool, pavers and windows are covered while we work, and the site is cleaned at the end of each day.",
      },
      {
        title: "Workmanship warranty in writing",
        text: "We walk the whole exterior with you, close the punch list, and back the work with our written warranty.",
      },
    ],
    signsTitle: "When a Stucco Crack Is More Than Cosmetic",
    signs: [
      {
        title: "Cracks on more than one wall",
        text: "Stair-step, branching or wide cracks appearing on several sides of the house mean the finish is failing, not just one spot.",
      },
      {
        title: "A hollow sound when you tap",
        text: "Knock beside a crack with your knuckles. Sound stucco feels solid; a dull, empty sound means it has let go of the block behind it.",
      },
      {
        title: "Stains below windows and sliders",
        text: "Dark streaks or bubbling paint under an opening usually trace back to water slipping in around the frame or a failing buck.",
      },
      {
        title: "Rust spots bleeding through",
        text: "On frame walls and additions, rust marks mean the metal lath inside the stucco is corroding and pushing the finish outward.",
      },
      {
        title: "Damp drywall or a musty smell inside",
        text: "Moisture on an interior wall means water is already through the exterior. The fix has to start at the source.",
      },
      {
        title: "Rotted fascia and stained soffits",
        text: "Soft wood at the roofline and dark soffit stains point to water and pests getting in where the roof meets the wall.",
      },
      {
        title: "A patch that keeps failing",
        text: "A crack you have sealed and painted more than once is telling you the real cause was never addressed.",
      },
    ],
    optionsTitle: "Patch, Re-Texture, or Rebuild?",
    optionsIntro:
      "Not every damaged wall needs the same fix. What is happening behind the surface decides whether a targeted repair, a whole-house re-texture or a water-damage rebuild is the right call. After a free inspection with moisture readings, we tell you which one your house needs, and if a repair will hold, that is what we recommend.",
    options: [
      {
        title: "Targeted repair",
        text: "Cracks routed and bonded, loose sections cut out and replaced, openings resealed, and the patch hand-matched to the surrounding finish.",
        bullets: [
          "Best when: damage is limited and the rest of the stucco is sound",
          "Result: the most affordable fix that still lasts",
        ],
      },
      {
        title: "Whole-house re-texture",
        text: "Sound stucco is washed, repaired and bonded, then every elevation gets a fresh, uniform finish coat and full exterior paint.",
        bullets: [
          "Best when: the house is covered in mismatched old patches or cracking spans several walls",
          "Result: one consistent look and a full reset of curb appeal",
        ],
      },
      {
        title: "Water-damage rebuild",
        text: "We open the affected section, repair the buck, block, sheathing or framing, correct the sealant and flashing at openings, then rebuild the stucco.",
        bullets: [
          "Best when: there is staining, soft spots or moisture inside the house",
          "Result: the source is fixed instead of sealed in under a new coat",
        ],
      },
    ],
    benefitsTitle: "Stucco on Block Is a Layered System, Not Just Paint",
    benefits: [
      {
        title: "Concrete block wall",
        text: "The structure itself. Block is strong, but it absorbs water, so everything layered on top has a job to do.",
      },
      {
        title: "Bucks at every opening",
        text: "Wood or concrete frames anchored to the block that windows and doors fasten into. Rot here is where many hidden repairs start.",
      },
      {
        title: "Sealant and flashing at openings",
        text: "The joints around windows, doors and penetrations. When they fail, water runs behind the stucco instead of off it.",
      },
      {
        title: "Base and finish coats",
        text: "Cement stucco bonded to the block, then the texture you see. Cracks through these coats let water reach the wall.",
      },
      {
        title: "Paint or elastomeric coating",
        text: "The last line of defense against rain and sun. A good coating bridges hairline cracks; it cannot fix the ones beneath it.",
      },
      {
        title: "Roofline: fascia, soffit and gutters",
        text: "They keep roof water and pests away from the top of the wall. Rotted fascia lets both straight in.",
      },
    ],
    processTitle: "Four Steps. No Surprises.",
    process: [
      {
        n: "01",
        title: "Free inspection",
        kicker: "Usually within 48 hours",
        text: "We tap, probe and moisture-test the walls, look at the roofline and openings, and talk through the look you want for the outside of the house.",
      },
      {
        n: "02",
        title: "Fixed price, written scope",
        kicker: "Good for 90 days",
        text: "Each area and repair is listed, likely hidden damage is shown as an allowance, and the price holds while you plan.",
      },
      {
        n: "03",
        title: "One crew lead",
        kicker: "Trades in sequence",
        text: "We handle permits and HOA approval, then run windows, doors, stucco and paint in order, with updates at every milestone.",
      },
      {
        n: "04",
        title: "Final walkthrough",
        kicker: "Workmanship warranty",
        text: "We walk the whole exterior with you, fix anything on the punch list, and hand over a written warranty.",
      },
    ],
    related: ["painting", "impact-windows-doors", "siding"],
  },

  // ---------------------------------------------------------------------------
  // 4. ROOFING
  // ---------------------------------------------------------------------------
  {
    slug: "roofing",
    title: "Roofing",
    navLabel: "Roofing",
    group: "exterior",
    blurb:
      "Shingle, metal and tile re-roofs and repairs, permitted and documented for your insurer.",
    seoTitle: "Roofing Contractor Port Charlotte FL | Prestigious",
    seoDescription:
      "Shingle, metal and tile roof replacement and repair in Port Charlotte and SWFL. Wind mitigation upgrades, insurance roof letters, permits. Free estimate.",
    keywords: [
      "roofing contractor port charlotte",
      "roof replacement charlotte county",
      "roof repair port charlotte",
      "metal roof port charlotte",
      "tile roof replacement florida",
      "florida 25 percent roof rule",
      "wind mitigation roof",
      "roof inspection for insurance florida",
    ],
    eyebrow: "Roofing · Port Charlotte & SWFL",
    headline: "Roofing Built for Hurricane Country, and for Your Insurer",
    subhead:
      "Shingle, metal and tile re-roofs, repairs and honest inspections, managed start to finish by a licensed local general contractor, with roof coverings installed by our state-licensed roofing partner.",
    heroPhoto: "roofing",
    howWeWork: [
      {
        title: "Re-roofs down to the deck",
        text: "Full tear-off, rotted sheathing replaced, deck re-nailed and a secondary water barrier laid before any new covering goes on.",
      },
      {
        title: "Repairs that find the real leak",
        text: "We trace leaks from the attic side and the roof side, then repair flashing, boots and damaged covering instead of smearing sealant over the symptom.",
      },
      {
        title: "Roofs for additions and conversions",
        text: "New roof framing and coverings for additions, Florida rooms and lanai conversions, tied into the existing roof and matched to it.",
      },
      {
        title: "A free, honest roof check",
        text: "As part of your free estimate we tell you in writing what you have, what it needs and roughly how much life it has left. No obligation.",
      },
    ],
    intro: [
      "In Florida the roof is the line item your insurance company cares about most. Carriers look at roof age, material and condition before they will write or renew a policy, and many will not cover a shingle roof past 15 years without an inspection. We help homeowners in Charlotte, Sarasota and Lee counties figure out whether a roof needs a repair, a partial replacement or a full re-roof, and we document the work so it counts with the insurer.",
      "We manage roofing the same way we manage every exterior job: one contract, one schedule, our project lead on site. Roof coverings are installed by a state-licensed roofing contractor we work with on every job, with permits pulled under that license as Florida law requires. We coordinate the roof with your impact windows, soffit, fascia, gutters and paint so the trades follow each other instead of tripping over each other.",
      "Most of the region is in the wind-borne debris region with design wind speeds well above the national average, so roof-to-wall connections, deck nailing and secondary water barriers matter. Permits run through Charlotte County, North Port, Punta Gorda, Sarasota County or Lee County. HOAs often specify tile profile or shingle color. Re-roofs during hurricane season are planned around the forecast, with the deck dried in the same day it is opened. In flood zones, a re-roof combined with other work can count toward the FEMA 50% improvement threshold, so we track it.",
    ],
    scopes: [
      {
        title: "Roof repair",
        summary:
          "Fix leaks, lifted shingles, cracked tiles and failed flashing without replacing the whole roof.",
        changes: [
          { label: "Leak trace", detail: "Attic and roof inspection to find the real entry point" },
          { label: "Covering", detail: "Damaged shingles, tiles or panels replaced with matching material" },
          { label: "Flashing", detail: "Pipe boots, wall flashing and valleys resealed or replaced" },
          { label: "Deck", detail: "Soft or rotted decking cut out and replaced" },
          { label: "Interior", detail: "Ceiling stain and drywall repair if needed" },
        ],
        priceRange: "$500–$4k",
        duration: "1–2 days",
      },
      {
        title: "Shingle re-roof",
        summary:
          "Tear-off and replacement with architectural shingles rated for high wind.",
        changes: [
          { label: "Tear-off", detail: "Old roof removed down to the deck; rotted sheathing replaced" },
          { label: "Deck", detail: "Re-nailed to current code for better wind mitigation credit" },
          { label: "Barrier", detail: "Self-adhered secondary water barrier on the full deck" },
          { label: "Shingles", detail: "High-wind architectural shingles with Florida Product Approval" },
          { label: "Details", detail: "New drip edge, vents, pipe boots and flashing" },
        ],
        priceRange: "$14k–$30k",
        duration: "2–4 days",
      },
      {
        title: "Metal re-roof",
        summary:
          "Standing seam or exposed-fastener metal for long life and strong wind performance.",
        changes: [
          { label: "Panel", detail: "Standing seam or 5V crimp in Galvalume or painted finishes" },
          { label: "Underlayment", detail: "High-temperature self-adhered underlayment" },
          { label: "Attachment", detail: "Clips and fasteners per tested product approval" },
          { label: "Trim", detail: "Matching ridge, eave and rake trim; coastal-grade fasteners" },
        ],
        priceRange: "$28k–$60k",
        duration: "4–8 days",
      },
      {
        title: "Tile re-roof",
        summary:
          "Concrete or clay tile replaced and reset with modern underlayment and attachment.",
        changes: [
          { label: "Tile", detail: "New concrete or clay tile, or salvage and reset where possible" },
          { label: "Underlayment", detail: "Full new underlayment system, the part that actually keeps water out" },
          { label: "Attachment", detail: "Foam adhesive or mechanical fastening per product approval" },
          { label: "Details", detail: "New hip and ridge, bird stops and flashing" },
          { label: "HOA", detail: "Profile and color matched to community standards" },
        ],
        priceRange: "$35k–$75k",
        duration: "1–3 weeks",
      },
      {
        title: "Insurance roof inspection and letters",
        summary:
          "Documentation for carriers: condition reports, remaining life, and records of completed work.",
        changes: [
          { label: "Inspection", detail: "Roof and attic photographed and documented" },
          { label: "Condition", detail: "Written summary of age, condition and estimated remaining life" },
          { label: "Repairs", detail: "Any repairs the carrier requires, priced and completed" },
          { label: "Close-out", detail: "Permit, final inspection and product approvals for your file" },
        ],
        priceRange: "$150–$450",
        duration: "Same week",
      },
    ],
    included: [
      "Roof and attic inspection with photos",
      "Written repair-vs-replace recommendation with prices",
      "Permits under a state-licensed roofing contractor and all inspections",
      "Full tear-off and disposal on re-roofs",
      "Decking replacement priced per sheet in the contract",
      "Deck re-nailing and secondary water barrier on re-roofs",
      "New flashing, vents, pipe boots and drip edge",
      "Products with Florida Product Approval for your wind zone",
      "Same-day dry-in when the deck is opened",
      "Magnetic nail sweep and full site cleanup",
      "Permit record, product approvals and photos for your insurer",
      "Manufacturer warranty registration and written workmanship warranty",
    ],
    cost: {
      title: "What Drives the Price of a Roof Project",
      text: [
        "In 2026 a shingle re-roof on a typical 2,000-square-foot Port Charlotte home runs $14,000 to $30,000. Metal runs $28,000 to $60,000, and concrete or clay tile runs $35,000 to $75,000. Most repairs land between $500 and $4,000.",
        "Roof size and pitch set the base price. Rotted decking is the most common surprise, so we list a per-sheet price in the contract instead of guessing. A new roof with a secondary water barrier and upgraded deck attachment can also earn wind mitigation credits that reduce your premium, and financing is offered subject to credit approval.",
      ],
      factors: [
        "Roof size, pitch and number of layers to remove",
        "Material: shingle, metal or tile",
        "Amount of rotted decking found at tear-off",
        "Number of penetrations, valleys and skylights",
        "Roof-to-wall connection or deck nailing upgrades",
        "HOA color and profile requirements",
        "Two-story access and disposal costs",
      ],
    },
    localNotes: [
      {
        title: "The Florida 25% rule",
        text: "Under the Florida Building Code, if more than 25% of a roof section is repaired or replaced within 12 months, the whole section traditionally had to be brought up to current code. Since 2022, roofs built to the 2007 code or newer only need the damaged portion redone to current code. We check your roof's permit history and tell you which applies.",
      },
      {
        title: "Wind mitigation credits",
        text: "Roof covering, deck attachment, roof-to-wall connection, roof shape and secondary water barrier all appear on the wind mitigation form. A re-roof is the cheapest moment to improve several of them at once, and we document each one for your inspector.",
      },
      {
        title: "Insurance and roof age",
        text: "Many Florida carriers require a roof inspection on shingle roofs older than about 15 years and may decline renewal on older roofs. Florida law limits refusing coverage on roofs under 15 years old based only on age if an inspection shows useful life remains. We provide the documentation either way.",
      },
    ],
    faqs: [
      {
        q: "What does a roof replacement cost in Port Charlotte?",
        a: "In 2026 a shingle re-roof on a typical home runs $14,000 to $30,000, metal $28,000 to $60,000, and tile $35,000 to $75,000. We give you a written, fixed price after inspecting the roof and attic.",
      },
      {
        q: "Should I repair or replace my roof?",
        a: "Repair if the roof has used less than about two-thirds of its expected life and the damage is local. Replace when leaks are spreading, the underlayment is failing, or your insurer will not renew. We price both when both make sense.",
      },
      {
        q: "What is the Florida 25% roof rule?",
        a: "It used to mean that repairing more than 25% of a roof section in 12 months forced a full re-roof of that section. Since 2022, roofs built to the 2007 Florida Building Code or later only need the damaged part redone to current code. Older roofs still follow the original rule.",
      },
      {
        q: "Who actually installs the roof?",
        a: "Roof coverings are installed and permitted by a state-licensed roofing contractor we work with on every job, as Florida law requires. We hold the contract, manage the schedule and coordinate the roof with the rest of your exterior.",
      },
      {
        q: "Can a new roof lower my insurance premium?",
        a: "Often, yes. A new roof with a secondary water barrier, upgraded deck nailing and proper roof-to-wall connections can improve your wind mitigation report. Ask your agent which credits your carrier offers.",
      },
      {
        q: "How long does a re-roof take?",
        a: "Two to four days for most shingle roofs, four to eight days for metal, and one to three weeks for tile. Permits and material ordering add one to three weeks before we start.",
      },
      {
        q: "Can you provide a roof letter for my insurance company?",
        a: "Yes. We inspect the roof and attic, photograph it, and give you a written condition summary with estimated remaining life. If the carrier asks for repairs, we price and complete them.",
      },
    ],
    promises: [
      {
        title: "A straight repair-or-replace answer",
        text: "If the roof still has solid years in it, we say so. If a repair will get you through, we price the repair, not a whole new roof.",
      },
      {
        title: "Rotted decking priced before we start",
        text: "Replacement sheathing has a per-sheet price written into your contract, so what we find at tear-off never turns into a surprise invoice.",
      },
      {
        title: "Flashing, boots and vents replaced",
        text: "Every re-roof gets new flashing, pipe boots, vents and drip edge. Old metal is not reused under a new covering.",
      },
      {
        title: "Dried in the same day",
        text: "Any section of deck we open is covered with water barrier before the crew leaves, which matters a lot in summer.",
      },
      {
        title: "Licensed roofer, one point of contact",
        text: "Coverings are installed and permitted by our state-licensed roofing partner. We hold the contract, run the schedule and check the work.",
      },
      {
        title: "Documents your insurer asks for",
        text: "Permit record, final inspection, product approvals and photos, organized for your wind mitigation and four-point inspections.",
      },
    ],
    signsTitle: "Not Sure Your Roof Needs Replacing? Find Out for Free.",
    signs: [
      {
        title: "The roof covering",
        text: "Lifted, creased or missing shingles, cracked or slipped tiles, loose metal panels, and granule loss that shows how much wear is left.",
      },
      {
        title: "Flashing and penetrations",
        text: "Walls, valleys, vents, pipes and skylights, the places where most Florida roof leaks actually begin.",
      },
      {
        title: "The deck and the attic",
        text: "Soft spots underfoot, water stains, daylight or wet insulation in the attic, all signs of trouble under the surface.",
      },
      {
        title: "Ventilation and age",
        text: "We compare the roof's age and attic airflow with its expected life, so our advice covers the whole roof, not one bad spot.",
      },
      {
        title: "What your insurer will see",
        text: "We look at the roof the way a carrier's inspector will, so you know before renewal whether a repair or replacement is coming.",
      },
      {
        title: "A written answer, no obligation",
        text: "You get a plain write-up: replace, repair, or keep an eye on it. Formal insurance roof letters are available as a separate service.",
      },
    ],
    optionsTitle: "The Right Roof for Your Florida Home",
    optionsIntro:
      "We replace and repair the roof types common across Charlotte, Sarasota and Lee counties. Every covering we install carries a Florida Product Approval for your wind zone, and HOA rules often narrow the choice, so we check them first.",
    options: [
      {
        title: "Architectural shingle",
        text: "The most common and budget-friendly choice, in high-wind rated shingles and a wide range of colors.",
        bullets: [
          "Best for: most single-family homes and tight budgets",
          "Install: two to four days on a typical home",
        ],
      },
      {
        title: "Metal",
        text: "Standing seam or 5V crimp panels that shed water fast, reflect heat and hold up well in high wind.",
        bullets: [
          "Best for: long-term owners and coastal exposure",
          "Install: about four to eight days",
        ],
      },
      {
        title: "Concrete and clay tile",
        text: "The classic Florida look for Mediterranean and Spanish-style homes, installed over a new underlayment system.",
        bullets: [
          "Best for: tile communities and homes built for the weight",
          "Install: one to three weeks",
        ],
      },
      {
        title: "Flat and low-slope",
        text: "Membrane roofing for lanai roofs, porches, additions and flat sections that shingles cannot handle.",
        bullets: [
          "Best for: additions, Florida rooms and covered lanais",
          "Install: often paired with a larger re-roof or remodel",
        ],
      },
    ],
    benefitsTitle: "A Roof Is a Whole System, Not Just Shingles",
    benefits: [
      {
        title: "Trusses and roof-to-wall connections",
        text: "The framing carries the roof, and the straps or clips tying it to the walls keep it attached in high wind. They show up on your wind mitigation form.",
      },
      {
        title: "Roof deck and nailing",
        text: "The plywood or OSB everything fastens to. We replace soft sections and re-nail the deck to current code, which can earn an insurance credit.",
      },
      {
        title: "Secondary water barrier",
        text: "A self-adhered membrane over the deck that keeps water out if the covering is damaged in a storm. Another line item insurers look for.",
      },
      {
        title: "Drip edge and flashing",
        text: "Metal at the edges, valleys, walls and penetrations, where wind-driven rain usually gets in first.",
      },
      {
        title: "The covering you see",
        text: "Shingle, metal or tile, fastened exactly as its Florida Product Approval specifies for your design wind speed.",
      },
      {
        title: "Ridge and attic ventilation",
        text: "Ridge and soffit vents let hot, damp attic air out, which helps the whole roof last and takes load off your AC.",
      },
    ],
    processTitle: "A Re-Roof Done Right, All the Way to the Deck",
    process: [
      {
        n: "01",
        title: "Protect the property",
        kicker: "Before anything comes off",
        text: "We cover landscaping, shield the AC unit, pool and windows, and organize the site so it stays clean from start to finish.",
      },
      {
        n: "02",
        title: "Tear off to the deck",
        kicker: "Nothing covered over",
        text: "The old roof comes off down to bare wood. We do not lay new material over old, so nothing gets hidden.",
      },
      {
        n: "03",
        title: "Deck inspection and repair",
        kicker: "Per-sheet price in the contract",
        text: "With the deck exposed, we show you any rotted or weak sheathing before replacing it, and you pay only for what your roof needs.",
      },
      {
        n: "04",
        title: "Re-nail and dry in",
        kicker: "Same-day dry-in",
        text: "The deck is re-nailed to current code and covered with secondary water barrier the same day it is opened, with inspections where required.",
      },
      {
        n: "05",
        title: "Flashing, covering and vents",
        kicker: "Installed to the approval",
        text: "New drip edge, flashing and boots, then the covering and ridge ventilation, fastened to the tested pattern for your wind zone.",
      },
      {
        n: "06",
        title: "Cleanup and close-out",
        kicker: "Paperwork in hand",
        text: "Magnetic nail sweep, final inspection, a walk around the finished roof, and the permit record and photos for your insurer.",
      },
    ],
    related: ["storm-damage-rebuild", "exterior-remodeling", "impact-windows-doors"],
  },

  // ---------------------------------------------------------------------------
  // 5. SIDING
  // ---------------------------------------------------------------------------
  {
    slug: "siding",
    title: "Siding",
    navLabel: "Siding",
    group: "exterior",
    blurb:
      "James Hardie fiber cement, vinyl and board-and-batten siding for frame and manufactured homes.",
    seoTitle: "Siding Contractor Port Charlotte FL | Prestigious",
    seoDescription:
      "James Hardie fiber cement, vinyl and board-and-batten siding for frame and manufactured homes in Port Charlotte and SWFL. Permitted. Free estimate.",
    keywords: [
      "siding contractor port charlotte",
      "james hardie siding florida",
      "fiber cement siding port charlotte",
      "vinyl siding replacement",
      "board and batten siding",
      "manufactured home siding florida",
      "siding repair port charlotte",
    ],
    eyebrow: "Siding · Port Charlotte & SWFL",
    headline: "Siding Built for Gulf Sun, Salt Air and Storm Season",
    subhead:
      "James Hardie fiber cement, vinyl and board-and-batten siding for frame houses, manufactured homes and additions, installed over new house wrap with flashing done by window people.",
    heroPhoto: "siding-stucco",
    howWeWork: [
      {
        title: "Fiber cement, vinyl, board-and-batten",
        text: "Full re-sides, accent gables, manufactured homes and storm repairs, with the material chosen for your house, budget and HOA rules.",
      },
      {
        title: "The wall behind it, checked first",
        text: "We pull test pieces to look at sheathing and framing for rot or termites, and price that repair before we price the siding.",
      },
      {
        title: "Flashing done by window installers",
        text: "Most siding failures start at windows and doors. Our crew came up installing them, so every opening gets flashed properly.",
      },
      {
        title: "Fastened to the approval",
        text: "Every product carries a Florida Product Approval for your wind zone, and we fasten it exactly as tested so it passes inspection.",
      },
    ],
    intro: [
      "Not every Southwest Florida home is block and stucco. Older frame houses in Port Charlotte and Englewood, manufactured homes across Charlotte and Sarasota counties, and many additions and second stories are wood-framed and sided. Siding is one of the services our Google reviewers mention by name, and it is a natural fit for a crew that started out in windows and doors: most siding failures we see start with bad flashing around openings.",
      "We install James Hardie fiber cement for homeowners who want a long-lasting, noncombustible, termite-proof wall that holds paint well in the Florida sun. We install vinyl when budget comes first or on manufactured homes where weight matters. Board-and-batten, in fiber cement or vinyl, gives a coastal farmhouse look that works on gables, entries and additions. All of it goes over new house wrap with flashing done right.",
      "Most of the region is in the wind-borne debris region, so siding has to carry a Florida Product Approval for your design wind speed and be fastened exactly as tested. Re-siding usually needs a permit through Charlotte County, North Port, Punta Gorda, Sarasota County or Lee County. Manufactured homes have their own rules for anchoring and skirting, and many parks and HOAs restrict colors and styles. In flood zones, we keep an eye on the FEMA 50% rule when siding is part of a bigger remodel, and we plan installs to avoid open walls during hurricane season storms.",
    ],
    scopes: [
      {
        title: "James Hardie fiber cement re-side",
        summary:
          "Full tear-off and new fiber cement lap siding for a durable, paint-ready exterior.",
        changes: [
          { label: "Tear-off", detail: "Old siding removed; rotted sheathing and framing repaired" },
          { label: "Wrap", detail: "New weather-resistive barrier and flashing tape at openings" },
          { label: "Siding", detail: "HardiePlank lap in smooth or cedar texture, pre-finished or primed" },
          { label: "Trim", detail: "HardieTrim at corners, windows, doors and frieze boards" },
          { label: "Finish", detail: "Caulk and paint, or ColorPlus factory finish" },
        ],
        priceRange: "$22k–$60k",
        duration: "2–4 weeks",
      },
      {
        title: "Vinyl siding",
        summary:
          "An affordable, low-maintenance option that never needs paint.",
        changes: [
          { label: "Panels", detail: "High-wind-rated vinyl lap or Dutch lap in heat-resistant colors" },
          { label: "Insulation", detail: "Optional foam backer for stiffness and comfort" },
          { label: "Trim", detail: "J-channel, corners and window wraps in matching color" },
          { label: "Soffit", detail: "Vented vinyl soffit and aluminum fascia wrap" },
        ],
        priceRange: "$12k–$32k",
        duration: "1–2 weeks",
      },
      {
        title: "Board-and-batten accents",
        summary:
          "Vertical board-and-batten on gables, entries or the whole house for a coastal farmhouse look.",
        changes: [
          { label: "Material", detail: "Hardie panel with batten strips, or vinyl board-and-batten" },
          { label: "Layout", detail: "Batten spacing planned around windows and corners" },
          { label: "Mix", detail: "Combined with lap siding or stucco below a belly band" },
          { label: "Color", detail: "Two-tone schemes with contrasting trim" },
        ],
        priceRange: "$5k–$25k",
        duration: "1–2 weeks",
      },
      {
        title: "Manufactured home re-side",
        summary:
          "New siding, skirting and trim for mobile and manufactured homes in parks and on private lots.",
        changes: [
          { label: "Siding", detail: "Lightweight vinyl or fiber cement where the structure allows" },
          { label: "Skirting", detail: "New vented vinyl or faux-stone skirting" },
          { label: "Openings", detail: "Window and door trim rewrapped; impact upgrades available" },
          { label: "Rules", detail: "Park or HOA approvals and permit handled" },
        ],
        priceRange: "$9k–$24k",
        duration: "1–2 weeks",
      },
      {
        title: "Siding repair and storm patch",
        summary:
          "Replace damaged or missing sections after a storm, matched as closely as possible.",
        changes: [
          { label: "Assess", detail: "Damage photographed for your insurance claim" },
          { label: "Repair", detail: "Damaged boards and wrap replaced, sheathing checked" },
          { label: "Match", detail: "Profile and color matched; wall-to-corner replacement where needed" },
          { label: "Seal", detail: "Openings and penetrations re-flashed" },
        ],
        priceRange: "$800–$6k",
        duration: "1–3 days",
      },
    ],
    included: [
      "Wall inspection with test removals before final pricing",
      "Written, fixed-price scope with a per-sheet price for hidden sheathing repair",
      "Color and texture samples on your wall",
      "Permit, HOA or park submittal, and inspections",
      "Tear-off and disposal of old siding",
      "New house wrap and flashing at every window, door and penetration",
      "Siding with Florida Product Approval, fastened to the tested pattern",
      "Corner, window and frieze trim",
      "Soffit and fascia tie-ins",
      "Caulk and paint where the product calls for it",
      "Final walkthrough and written workmanship warranty",
    ],
    cost: {
      title: "What Drives the Price of a Siding Project",
      text: [
        "In 2026, James Hardie fiber cement on a typical 1,600 to 2,200-square-foot SWFL frame home runs $22,000 to $60,000 installed. Vinyl runs $12,000 to $32,000. A manufactured home re-side with skirting usually lands between $9,000 and $24,000.",
        "Wall area and trim detail drive the price, and the condition of the sheathing underneath is the biggest unknown. We do a few test removals before we finalize the number and list a per-sheet price for any rotted sheathing, so the contract covers it instead of a surprise change order. Financing is offered subject to credit approval.",
      ],
      factors: [
        "Wall square footage and number of stories",
        "Material: fiber cement, vinyl or board-and-batten",
        "Pre-finished color vs field paint",
        "Rotted sheathing or framing behind the old siding",
        "Number of windows and doors to trim and flash",
        "Soffit, fascia and skirting included",
        "HOA or park design requirements",
      ],
    },
    localNotes: [
      {
        title: "Wind ratings and fastening",
        text: "In the wind-borne debris region, siding must carry a Florida Product Approval for your design wind speed. The approval specifies fastener type and spacing, and the inspector checks it. We fasten exactly to the tested pattern.",
      },
      {
        title: "Termites and moisture",
        text: "Wood siding and sheathing in Florida attract termites and rot, especially near the ground and around windows. Fiber cement does not feed termites or rot, and we keep it the required clearance above grade and roofs.",
      },
      {
        title: "Manufactured home rules",
        text: "Manufactured homes have their own anchoring and skirting requirements, and many 55+ parks in Port Charlotte, North Port and Englewood control colors and materials. We get park approval and the right permit before we start.",
      },
    ],
    faqs: [
      {
        q: "How much does new siding cost in Port Charlotte?",
        a: "In 2026, James Hardie fiber cement runs $22,000 to $60,000 on a typical frame home, and vinyl runs $12,000 to $32,000. Manufactured homes usually run $9,000 to $24,000 with skirting.",
      },
      {
        q: "Is James Hardie siding worth it in Florida?",
        a: "For most frame homes, yes. Fiber cement does not rot, burn or feed termites, holds paint well in strong sun, and is available with Florida Product Approval for high wind. It costs more than vinyl but lasts much longer.",
      },
      {
        q: "Can you side a manufactured home?",
        a: "Yes. We re-side manufactured and mobile homes with vinyl or, where the structure allows, fiber cement, plus new skirting and trim. We handle park approval and permits.",
      },
      {
        q: "Does replacing siding require a permit?",
        a: "In most of Charlotte, Sarasota and Lee counties, yes, because the product has to meet wind requirements. We pull the permit and schedule inspections.",
      },
      {
        q: "What if there is rot behind my old siding?",
        a: "It is common. We do test removals before pricing and put a per-sheet price for sheathing replacement in the contract, so you know the cost before we find it.",
      },
      {
        q: "Can you combine siding with stucco?",
        a: "Yes. A popular look is stucco on the lower wall with board-and-batten or lap siding on gables or the upper story. We detail the transition so water cannot get behind either material.",
      },
      {
        q: "How long does a siding job take?",
        a: "One to two weeks for vinyl or a manufactured home, two to four weeks for a full fiber cement re-side with paint.",
      },
    ],
    promises: [
      {
        title: "Test removals before the final price",
        text: "We look behind your existing siding before we commit to a number, so the quote reflects the wall you actually have.",
      },
      {
        title: "Hidden rot priced per sheet",
        text: "Sheathing replacement has its own per-sheet price in the contract, so rot found at tear-off never becomes a surprise change order.",
      },
      {
        title: "Every opening flashed",
        text: "New house wrap, then flashing tape and trim at each window, door and penetration, the details most siding leaks trace back to.",
      },
      {
        title: "Samples on your own wall",
        text: "You pick color and texture from samples held up on your house, in your light, not from a brochure.",
      },
      {
        title: "Workmanship warranty in writing",
        text: "Final walkthrough, final inspection and a written warranty on the installation, plus the manufacturer's product warranty.",
      },
    ],
    signsTitle: "Signs Your Siding Is Due for Replacement",
    signs: [
      {
        title: "Soft or swollen boards",
        text: "Wood or composite siding that feels spongy or has swelled at the joints is holding water, and the sheathing behind it is likely wet too.",
      },
      {
        title: "Termite trails or damage",
        text: "Mud tubes, hollow-sounding boards or frass near the bottom courses mean termites have found the wall.",
      },
      {
        title: "Cracked, warped or missing pieces",
        text: "Storm damage and years of sun leave gaps that let wind-driven rain behind the siding.",
      },
      {
        title: "Paint that will not stay on",
        text: "Peeling a year or two after painting usually means moisture is pushing out from behind, not a bad paint job.",
      },
      {
        title: "Stains or leaks around windows",
        text: "Streaks below openings or damp interior walls point to failed flashing at windows and doors.",
      },
      {
        title: "Faded, chalky or brittle vinyl",
        text: "Old vinyl bleached by Florida sun cracks easily and can break loose in a storm.",
      },
    ],
    optionsTitle: "Fiber Cement, Vinyl, or Board-and-Batten?",
    optionsIntro:
      "Each material has a place. The right one depends on the house, the budget, how long you expect to own the home and what your HOA or park allows.",
    options: [
      {
        title: "James Hardie fiber cement",
        text: "Noncombustible, termite-proof lap siding that holds paint well in strong sun, available pre-finished or primed.",
        bullets: [
          "Best for: frame homes you plan to keep for the long run",
          "Upkeep: repaint on a normal exterior schedule",
          "Cost: higher up front, longest-lasting of the three",
        ],
      },
      {
        title: "Vinyl",
        text: "A lightweight, low-maintenance siding that never needs paint, in high-wind rated profiles and heat-resistant colors.",
        bullets: [
          "Best for: tighter budgets and manufactured homes",
          "Upkeep: an occasional wash",
          "Cost: the most affordable full re-side",
        ],
      },
      {
        title: "Board-and-batten",
        text: "Vertical panels with batten strips, in fiber cement or vinyl, for a coastal farmhouse look on gables, entries or the whole house.",
        bullets: [
          "Best for: accents above stucco or a full style change",
          "Upkeep: depends on the material underneath",
          "Cost: often used on part of the house to control budget",
        ],
      },
    ],
    processTitle: "Five Steps. No Surprises.",
    process: [
      {
        n: "01",
        title: "Free visit and test removals",
        kicker: "We look behind the wall",
        text: "We measure the house, pull a few pieces to check sheathing and framing, and talk through material and style.",
      },
      {
        n: "02",
        title: "Samples and written scope",
        kicker: "Fixed price, per-sheet allowance",
        text: "You choose color and profile from samples on your wall, and get a written scope with a set price for any hidden repair.",
      },
      {
        n: "03",
        title: "Permit and approvals",
        kicker: "HOA or park included",
        text: "We file the permit and handle the HOA or park submittal before ordering material.",
      },
      {
        n: "04",
        title: "Tear-off, wrap and flash",
        kicker: "Walls closed quickly",
        text: "Old siding off, sheathing repaired, new house wrap on and every opening flashed, working in sections so walls are not left open in bad weather.",
      },
      {
        n: "05",
        title: "Install, trim and close out",
        kicker: "Written warranty",
        text: "Siding fastened to the approval, trim and soffit tie-ins finished, paint where needed, then final inspection and a walkthrough with you.",
      },
    ],
    related: ["exterior-remodeling", "painting", "storm-damage-rebuild"],
  },
];
