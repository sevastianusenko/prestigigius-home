import type { Photo, Post } from "../types";

const img = (id: string, src: string, alt: string, category: Photo["category"]): Photo => ({
  id,
  src,
  alt,
  category,
  width: 1600,
  height: 1067,
});

/** One template literal → one body entry per non-empty line. */
const lines = (s: string): string[] =>
  s
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const postsC: Post[] = [
  // 9 — PGT vs ES vs CWS
  {
    slug: "pgt-vs-es-vs-cws-impact-windows",
    title: "PGT vs ES vs CWS Impact Windows: An Honest Florida Comparison",
    seoTitle: "PGT vs ES vs CWS Impact Windows: Florida Comparison",
    seoDescription:
      "PGT, ES and CWS impact windows compared by a licensed SWFL contractor: product lines, frames, ratings, typical 2026 cost and how to choose the right model.",
    excerpt:
      "All three are Florida manufacturers that build code-approved impact windows. The real differences are in product lines, frame options, ratings for your specific opening and the installer behind them.",
    date: "2026-10-22",
    readMinutes: 7,
    cover: img(
      "blog-pgt-es-cws-cover",
      U("1774199679021-db3b421867c3"),
      "Living room with large windows overlooking trees",
      "windows-doors",
    ),
    body: lines(`
PGT, ES and CWS are three Florida-based manufacturers of hurricane impact windows, and all three make products that can meet the Florida Building Code when they are sized, rated and installed correctly. No single brand is "best" for every house. The right choice depends on the specific model's Florida Product Approval, the design pressure your opening needs, the frame material you prefer, your budget and the quality of the installation crew.
This guide is written by a licensed Southwest Florida contractor who installs impact windows from Charlotte County to Lee and Sarasota. We are not paid by any manufacturer to write it, and we do not rank one brand above the others. Product lines change, so before you sign anything, verify the current Florida Product Approval for the exact model on your quote.
## Who Are PGT, ES and CWS?
### PGT (PGT Innovations)
PGT is headquartered in North Venice, Florida, and is one of the best-known impact window names in the state. Its WinGuard line is the one most homeowners have heard of, and it is offered in both aluminum and vinyl frames across common styles: single hung, horizontal roller, casement, picture windows and sliding glass doors. PGT also sells non-impact lines, so when you see "PGT" on a quote, check that the product named is actually an impact product. Because the brand is widely distributed, PGT windows reviews online cover a huge range of installers, which makes them hard to read as a verdict on the product itself.
### ES Windows
ES Windows is based in Miami and is known primarily for aluminum impact windows and doors. You will see ES on many high-rise and coastal projects as well as single-family homes, and its lineup leans toward contemporary aluminum styles, large fixed glass and big sliding doors. Homeowners researching ES windows are usually looking at a modern aluminum look or very large openings.
### CWS (Custom Window Systems)
CWS is based in Ocala, Florida, and builds impact and non-impact windows and doors in aluminum and vinyl. CWS windows are common in Central and Southwest Florida residential work, and the company offers the standard residential styles: single hung, horizontal roller, casement, picture and sliding doors.
![White-framed replacement window](${U("1572739275114-ec3764ba1477")} "Brand matters less than the rating, sizing and installation of each opening. Stock photo.")
## What Actually Differs Between the Brands
Laminated impact glass from any reputable manufacturer works on the same principle: two or more lites bonded to a tough interlayer that holds the glass in the frame after it cracks. The meaningful differences are in the details:
- **Frame material:** all three offer aluminum; PGT and CWS also offer vinyl lines. Aluminum allows slimmer sightlines and very large sizes; vinyl usually insulates better and costs a little less.
- **Size and design pressure limits:** each model is tested at specific sizes and design pressures (DP). One brand's casement may be approved for a larger opening or higher pressure than another brand's casement, and the reverse can be true for a sliding door.
- **Glass packages:** options such as Low-E coatings, tints, insulated laminated glass (an insulating unit with a laminated lite) and privacy glass vary by line.
- **Colors and hardware:** frame colors, finishes and hardware choices vary by product line and change over time.
- **Lead times:** availability swings with demand, especially after a hurricane season. Ask for the current lead time in writing.
- **Distribution and service:** who your installer buys from and how warranty claims are handled locally matters as much as the logo.
## Side-by-Side Overview
Here is a fair, general comparison. Treat it as a starting point and confirm every line against the current product approval and spec sheet for the exact model.
- **PGT:** North Venice, FL. Aluminum and vinyl impact lines (WinGuard is the best known). Very wide dealer network across Florida. Good fit when you want many style options and easy local availability.
- **ES Windows:** Miami, FL. Mainly aluminum impact windows and doors with a contemporary focus. Good fit for modern designs, large fixed glass and big sliding or multi-panel doors.
- **CWS:** Ocala, FL. Aluminum and vinyl impact windows and doors for residential work. Good fit for standard residential replacements where you want a Florida-built product with common styles.
We deliberately do not list "strength" or "quality" scores. Every approved product has passed the required testing for its rated size and pressure, and the claims that circulate online ("brand X is stronger") are usually comparing different models, sizes or ratings.
## Pros and Cons of Choosing by Brand
### Pros
- Established Florida manufacturers understand the state's code, testing and approval system.
- All three offer impact products that, when correctly specified, satisfy wind-borne debris requirements without shutters.
- Brand familiarity can help resale: buyers and inspectors recognize the names.
### Cons
- Choosing on brand alone ignores the details that matter: DP rating, size limits, glass package and installation.
- Online reviews mix product, dealer and installer experiences, so they are a weak signal.
- Popular lines can have long lead times after storm seasons.
## How Much Do PGT, ES and CWS Impact Windows Cost?
In Southwest Florida in 2026, a typical installed impact window runs about **$1,200 to $3,800 per opening**, including the window, permit, removal of the old unit, installation, sealing and finish trim. Where you land in that range depends far more on size, style, frame material and glass options than on the brand name.
- Small single hung or horizontal roller, white frame: typically toward the lower end.
- Casements, large picture windows, custom shapes, bronze or black frames, and upgraded glass: typically toward the upper end.
- Impact sliding glass doors are priced separately, typically $4,500 to $14,000 installed depending on width, height and panel count.
When you compare quotes, compare like for like: same style, same frame material, same glass, same DP rating and the same scope of work (stucco repair, buck replacement and trim included or not). Two quotes that differ by thousands of dollars often differ in scope, not in brand.
![Installer applying flashing tape around a new window opening](${U("1786295866839-d17f879c65cd")} "Flashing, fasteners and anchoring are where installation quality shows. Stock photo.")
## The Florida Angle: Approvals, Pressures and Zones
### Florida Product Approval and Miami-Dade NOA
Every impact window sold for permitted work in Florida needs a state product approval (searchable on floridabuilding.org) or, in the High-Velocity Hurricane Zone of Miami-Dade and Broward counties, a Miami-Dade Notice of Acceptance (NOA). Charlotte, Sarasota and Lee counties are outside the HVHZ, but many homeowners still like NOA-rated products. The approval document lists the exact sizes, design pressures, glass and anchoring the product was tested with. Your permit package should match it.
### Design pressure for your opening
The required DP depends on your home's wind speed per the Florida Building Code, 8th Edition (2023), the exposure category, the building height and where the window sits on the wall (corners see higher pressures). A coastal home in Punta Gorda or Englewood can need higher ratings than an inland home in North Port. Ask your contractor which DP each opening requires and confirm the product meets it.
### Wind-borne debris region
Most of coastal Southwest Florida falls in the wind-borne debris region, which means glazed openings need impact protection: impact-rated windows or approved shutters. Impact windows from any of these brands handle that requirement when they carry the right approval.
### Salt air, HOAs and insurance
Near the Gulf, ask about the finish and hardware specified for coastal exposure and follow the manufacturer's care instructions. Many HOAs require a specific frame color or grid style, so check before ordering. For insurance, keep your product approval numbers and permit records; wind mitigation inspections rely on them.
## How to Choose: Questions to Ask Your Contractor
- Which exact model and series are you quoting, and what is its Florida Product Approval number?
- What DP rating does each opening need, and does the product meet it at my sizes?
- Aluminum or vinyl, and why for my house?
- Which glass package is included (Low-E, tint, insulated laminated)?
- How will the window be anchored into my block or frame wall, and will you inspect and replace rotted bucks?
- Who pulls the permit and schedules inspections?
- What does the manufacturer warranty cover, and what does your workmanship warranty cover?
- What is the current lead time?
## Frequently Asked Questions
### Are PGT windows better than ES or CWS windows?
Not as a blanket rule. All three manufacturers make impact products approved for use in Florida. The better window is the specific model that meets your opening's size and design pressure, fits your style and budget, and is installed correctly. Compare models, not logos.
### What is PGT WinGuard?
WinGuard is PGT's impact-resistant product line, offered in aluminum and vinyl frames in several window styles and sliding doors. Confirm the current approval for the specific WinGuard series and size on your quote.
### Do I need Miami-Dade NOA windows in Southwest Florida?
Not usually. Charlotte, Sarasota and Lee counties are outside the High-Velocity Hurricane Zone, so a valid Florida Product Approval with the correct ratings is generally what the permit requires. Some owners choose NOA products anyway.
### How do I check a window's Florida Product Approval?
Ask your contractor for the FL number, then search it on the Florida Building Commission's product approval site. The documents show tested sizes, design pressures and installation requirements.
### How long do impact windows last?
With proper installation and basic maintenance (cleaning tracks, rinsing salt, checking sealant), impact windows commonly last decades. Sealant and weatherstripping are maintenance items that may need attention sooner.
### Are online PGT windows reviews reliable?
Use them carefully. Most reviews describe the dealer or installer experience, not the product. Check your contractor's license, reviews and permit history as closely as the brand.
## Bottom Line
PGT, ES and CWS are all legitimate Florida impact window manufacturers. Choose the model that carries the right approval and DP for each opening, the frame and glass that fit your home, and above all a licensed installer who permits the job and anchors it correctly.
Want a side-by-side quote on comparable models? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "pgt windows",
      "es windows",
      "cws windows",
      "pgt winguard",
      "pgt windows reviews",
      "impact windows florida",
    ],
    relatedServices: ["impact-windows-doors", "storm-damage-rebuild"],
  },

  // 10 — Impact sliding glass doors
  {
    slug: "impact-sliding-glass-doors",
    title: "Impact Sliding Glass Doors: Sizes, Multi-Panel Options and Cost",
    seoTitle: "Impact Sliding Glass Doors: Sizes, Panels & Cost (FL)",
    seoDescription:
      "Impact sliding glass doors explained: standard sizes, multi-panel and pocket layouts, Florida code ratings, typical 2026 SWFL cost and how to choose.",
    excerpt:
      "Impact sliders replace the weakest opening in many Florida homes. Here is how sizes, panel configurations, ratings and cost actually work.",
    date: "2026-10-22",
    readMinutes: 6,
    cover: img(
      "blog-impact-sliders-cover",
      U("1565261949232-3fcc78206c0c"),
      "Large sliding glass patio door with slim frames",
      "windows-doors",
    ),
    body: lines(`
An impact sliding glass door is a patio door built with laminated glass and a reinforced frame that is tested to resist wind-borne debris and hurricane wind pressure. In Southwest Florida, it replaces both the old slider and the shutters or panels you would otherwise put up before a storm. Typical installed cost in 2026 runs about **$4,500 to $14,000**, depending mainly on width, height and the number of panels.
Sliding glass doors are often the largest glazed opening in a Florida home, which makes them one of the most important openings to protect. Below is what you need to know about sizes, multi-panel options, ratings and cost before you get quotes.
## How Impact Sliding Glass Doors Work
A standard slider has one or more panels that roll on a track at the sill, plus fixed panels that do not move. An impact version keeps the same basic layout but adds:
- **Laminated glass:** two lites bonded to a tough interlayer. If debris cracks the glass, the interlayer holds it in the frame so the opening stays closed.
- **Heavier frames and interlocks:** where panels meet, reinforced interlocks resist the panels being pushed apart under pressure.
- **Rated sills and weatherstripping:** taller sills and better seals help with water infiltration during wind-driven rain.
- **Tested anchoring:** the product approval specifies how the frame is fastened into the wall. That anchoring is part of what makes it impact-rated.
![Sliding glass door opening to the outdoors](${U("1525570665650-76bb26af503d")} "A slider is often the largest opening on the back of a Florida home. Stock photo.")
## Sliding Glass Door Sizes
Most sliding glass door sizes are described by width and height of the frame, and by panel layout. Common nominal sizes include:
- **Widths:** about 5 ft (60 in), 6 ft (72 in) and 8 ft (96 in) for two-panel doors; 9 to 12 ft for three-panel doors; 12 to 16 ft and beyond for four-panel and larger doors.
- **Heights:** 6 ft 8 in (80 in) is the traditional standard; 8 ft (96 in) is common in newer and higher-ceiling homes; taller custom heights are available in some lines.
Impact doors are typically made to fit the existing rough opening, so "standard size" matters less than in a big-box store. What matters is that the size you need is within the tested limits of the product's Florida Product Approval at the design pressure your opening requires. Large, tall panels need higher-performance frames and glass, which raises cost.
### Reading panel configurations
Manufacturers describe layouts with letters: **X** is an operating (sliding) panel and **O** is a fixed panel, viewed from outside.
- **XO / OX:** two panels, one slides. The most common replacement door.
- **OXO:** three panels with a center slider, or **XXO / OXX** with two sliders.
- **OXXO:** four panels; the two center panels slide apart, giving a wide center opening.
- **Pocket doors:** panels slide into a cavity in the wall so the opening fully clears. These require framing work and are usually planned during a remodel.
- **Stacking doors:** multiple sliding panels stack behind one another at one or both ends.
## Multi-Panel Sliding Glass Doors
Multi-panel sliding glass doors (three, four or more panels, sometimes with pocket or stacking layouts) are popular for lanai and pool-deck openings because they open a large part of the wall. In Florida they work well when properly specified, but there are trade-offs:
- Each added panel adds weight, interlocks and rollers, so quality hardware matters.
- Larger openings may need a structural header review, especially when an existing wall is widened.
- Pocket configurations require a wall cavity and more carpentry and stucco work.
- Big panels of laminated glass are heavy; ask about roller quality and how easy the door is to operate.
![Dining area with tile floors and sliding doors to the patio](${U("1779078652956-ad049e4778af")} "Multi-panel layouts open a dining or living area to the lanai. Stock photo.")
## Pros and Cons of Impact Sliding Glass Doors
### Pros
- Protection without shutters: no panels to store, carry or install before a storm.
- Laminated glass reduces outside noise and blocks most UV.
- Better security than standard tempered-glass sliders because laminated glass is harder to get through.
- Can help on wind mitigation inspections when documented with permits and approvals.
- Modern frames and Low-E glass can improve comfort near large glass.
### Cons
- Higher cost than standard sliders, and the largest doors can push past the top of the typical range.
- Heavier panels; cheap rollers wear out faster.
- Lead times can stretch after active hurricane seasons.
- Pocket and widened openings add structural, stucco and finish work.
## How Much Do Impact Sliding Glass Doors Cost?
In Southwest Florida in 2026, typical installed prices are:
- **Two-panel (XO), about 6 to 8 ft wide, standard height:** roughly $4,500 to $7,500.
- **Three- or four-panel, about 9 to 16 ft wide:** roughly $7,000 to $12,000.
- **Large, tall or pocket configurations with upgraded glass and finishes:** roughly $10,000 to $14,000, with unusual sizes or structural changes sometimes higher.
Prices include the door, permit, removal of the old door, installation, sealing and basic trim. They usually do not include significant stucco repair, structural header changes, flooring repairs at the sill or rot repair in the framing, so ask what is included. For comparison, impact windows typically run $1,200 to $3,800 per opening.
## What Goes Wrong With Sliding Doors in Florida
- **Water at the sill:** often caused by missing sill pans, failed sealant or a sill installed lower than the exterior surface.
- **Worn rollers and tracks:** sand, salt and grit grind rollers down; the door becomes hard to move.
- **Corroded hardware:** salt air attacks locks and screws near the coast.
- **Failed seals in insulated glass:** fogging between lites in insulated units.
- **Rotted subfloor or framing:** long-term leaks under the threshold, sometimes found only when the old door comes out.
## Caring for an Impact Slider
A little maintenance keeps a heavy impact door rolling smoothly for years. Vacuum sand and debris out of the track regularly, rinse salt off the frame and glass, keep weep holes at the sill clear so water can drain, and lubricate locks with a product the manufacturer recommends. If the door starts to drag, have the rollers adjusted or replaced before they damage the track.
## The Florida Angle
Most of coastal Southwest Florida is in the wind-borne debris region under the Florida Building Code, 8th Edition (2023), so large glazed openings need impact protection. Each impact slider must carry a Florida Product Approval (or Miami-Dade NOA) covering its size, configuration and design pressure, and the permit inspector will check the installation against it. Pay attention to the water resistance rating as well as the design pressure, especially on exposed coastal and lanai-facing walls. In flood zones, discuss sill height and threshold details with your contractor. HOAs often control frame color and grid patterns, so get approval first.
![Empty room with a new full-height sliding glass door](${U("1702724758750-9ff8d50f02e5")} "Taller doors bring in more light but need higher-performance frames and glass. Stock photo.")
## How to Choose: Questions to Ask Your Contractor
- What is the Florida Product Approval number, and does it cover my exact width, height and panel layout?
- What design pressure and water rating does this opening need, and does the door meet both?
- Aluminum or vinyl frame for this size and exposure?
- How will you handle the sill pan and water management under the threshold?
- What happens if you find rot or damaged framing when the old door comes out?
- Will a wider or pocket opening need a new header or engineering?
- What roller and lock hardware is included, and what does the warranty cover?
## Frequently Asked Questions
### What size sliding glass door do I need?
Measure the existing rough opening, not just the old door. Common replacement sizes are 6 ft or 8 ft wide by 6 ft 8 in or 8 ft tall, but impact doors are usually built to fit the opening. Your contractor should field-measure before ordering.
### Are impact sliding glass doors worth it?
For most Southwest Florida homes, yes. They remove the need to shutter one of the largest openings, add security and noise reduction, and can support your wind mitigation documentation.
### How long does it take to install an impact sliding glass door?
Installation of a typical replacement door is often completed in a day, plus time for any stucco, paint and inspection. Ordering usually takes several weeks.
### Can I convert a two-panel slider to a multi-panel door?
Often, but a wider opening means cutting into the wall and possibly adding a new header. That requires a permit, sometimes engineering, and exterior and interior finish work.
### Do impact sliders need hurricane shutters too?
No. An impact-rated door with the correct approval and design pressure satisfies the opening protection requirement on its own.
### What is the difference between OXXO and XO?
XO has two panels with one sliding. OXXO has four panels: two fixed at the ends and two center panels that slide apart for a wider opening.
## Bottom Line
Size and configuration drive cost, but rating and installation drive performance. Pick the panel layout that suits how you use the lanai, then make sure the specific door is approved for your size and design pressure and installed with proper water management.
Ready to replace your slider? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "sliding glass doors",
      "impact sliding glass doors",
      "sliding glass door sizes",
      "multi panel sliding glass doors",
      "hurricane sliding glass doors",
      "impact sliding glass door cost",
    ],
    relatedServices: ["impact-windows-doors", "outdoor-living", "lanai-enclosures"],
  },

  // 11 — Outswing vs inswing
  {
    slug: "outswing-vs-inswing-front-door",
    title: "Outswing vs Inswing Front Door: Which Is Better in Florida?",
    seoTitle: "Outswing vs Inswing Front Door: Florida Guide",
    seoDescription:
      "Outswing vs inswing front doors in Florida: wind and water performance, code basics, security, landing rules, typical 2026 impact door cost and tips.",
    excerpt:
      "Outswing doors are common in Florida for good reasons, but they are not always the right call. Here is how swing direction affects wind, water, security and your entry.",
    date: "2026-10-22",
    readMinutes: 7,
    cover: img(
      "blog-outswing-door-cover",
      U("1787491581029-e712d8e8caa4"),
      "New black front door with a welcome mat on the porch",
      "windows-doors",
    ),
    body: lines(`
An outswing front door opens toward the outside, while an inswing door opens into the house. In Florida, outswing doors are popular because hurricane wind pressure pushes the door against its frame stops and weatherstripping, which can improve resistance to wind and wind-driven rain. Inswing doors remain common and can be fully code-compliant when the specific door is rated for your opening.
Neither direction is automatically required for a typical single-family home in Southwest Florida. What matters is that the exact door and swing carry a Florida Product Approval for your size and design pressure, and that the entry layout works for your steps, porch and daily use.
## How Swing Direction Affects Performance
During a hurricane, wind pushes on the windward side of the house and pulls on the leeward side. An exterior door has to resist both:
- **Positive pressure** (wind pushing in): on an outswing door, this presses the slab against the frame stop. On an inswing door, it works to push the door open, so the locks, hinges and latches carry more of the load.
- **Negative pressure** (suction pulling out): the situation reverses, and an outswing door relies more on its hardware.
Manufacturers test each door configuration for both directions and publish separate ratings. That is why a product approval may list different design pressures for the inswing and outswing versions of the same door. The rating, not the swing on its own, tells you whether a door is adequate.
### Water resistance
Water is where outswing doors often have a practical edge. Wind-driven rain is pushed against the weatherstripping instead of into the gap, and the sill can be designed so water drains outward. Inswing doors need a well-designed sill dam and threshold to keep water out, and water performance ratings for inswing units are often lower. On an exposed coastal entry with no overhang, this difference matters.
![Entryway with a glass-paneled front door and wood stairs](${U("1771354959667-96360bf59eab")} "Glass panels in an entry door must be impact-rated in the wind-borne debris region. Stock photo.")
## Pros and Cons
### Outswing front door: pros
- Wind pressure seats the door against its stops and seals.
- Often better water resistance ratings for wind-driven rain.
- Frees interior floor space; no swing over rugs or furniture in the foyer.
- Harder to kick in, because the door would have to break through the frame stop.
### Outswing front door: cons
- Hinges are on the outside. Use security or non-removable hinge pins.
- The door swings over the landing, so the porch or step layout must allow it.
- Can conflict with a storm door, screen door or tight porch.
- Visitors standing on the step have to move back when you open it.
- Exposed to weather when open; wind can catch it.
### Inswing front door: pros
- The traditional layout most people expect.
- Hinges are protected inside.
- Works with a storm or screen door and with small landings or steps right outside.
- Easier to place on an existing entry without changing the porch.
### Inswing front door: cons
- Usually depends more on hardware and sill design to resist pressure and water.
- Takes interior space for the swing.
- Water ratings are often lower than comparable outswing units.
## Code Basics in Florida
The Florida Building Code, 8th Edition (2023), sets the rules for exterior doors. In general terms:
- **Impact protection:** in the wind-borne debris region, glazed doors need impact-rated glass or approved shutters. Many owners choose impact doors for all entries so there is nothing to shutter.
- **Product approval:** the door, frame, glass, hardware and swing direction must match a Florida Product Approval (or Miami-Dade NOA) for your size and design pressure.
- **Egress door:** at least one exterior egress door must be a side-hinged door with a minimum clear width of 32 inches and a minimum clear height of 78 inches.
- **Landings:** exterior doors need a landing. The code allows an exterior landing to be lower than the threshold only when the door does not swing over it, which is why outswing doors usually need a landing close to threshold height. Your contractor should check the step at your entry before ordering.
Local amendments and permit reviewers can add details, so confirm with your building department or contractor. Your permit will require the approval documents for the exact door and swing.
## How Much Does an Impact Front Door Cost?
Swing direction itself has little effect on price. Typical installed costs in Southwest Florida in 2026:
- **Single impact entry door (fiberglass or steel):** roughly $2,800 to $6,500.
- **Single door with sidelites or a transom, or a high-end finish:** roughly $5,000 to $9,500.
- **Double entry doors or large custom units:** roughly $7,500 to $15,000.
These are typical ranges including permit, removal, installation and standard trim. Changing swing direction may add carpentry, threshold or porch work. For reference, impact windows typically run $1,200 to $3,800 per opening and impact sliding doors $4,500 to $14,000.
![Single-story Florida home with white stucco walls and a garage door](${U("1786550860372-116b871a1697")} "Covered entries reduce the water load on either swing direction. Stock photo.")
## What Goes Wrong With Florida Entry Doors
- **Water under the threshold:** often on inswing doors on exposed walls, or when the sill pan was skipped.
- **Swelling and rot:** wood doors and wood frames in humid, salty air.
- **Rusted hinges and locks:** salt exposure near the Gulf; use corrosion-resistant hardware.
- **Sagging doors:** heavy impact slabs on undersized hinges or poor anchoring.
- **Warped slabs:** dark doors in direct sun can move; check the manufacturer's color and exposure guidance.
## Storm Doors, Screens and Sidelites
Swing direction affects more than the main door. If you like a storm door or a screen door for airflow, an inswing entry is the simpler pairing, because the screen or storm door swings out while the main door swings in. With an outswing main door, a conventional storm door has nowhere to go; the alternatives are a retractable screen built into the frame or a screened porch or entry enclosure.
Sidelites and transoms add light and style, but every glass panel in the assembly must be impact-rated, and the whole unit (door, sidelites, transom and any mullions) has to be covered by the approval at your design pressure. Larger assemblies see more wind load, so a wide double door with sidelites usually needs a higher-performance frame than a single slab.
Double doors deserve extra thought. On a pair, the inactive leaf is held by flush bolts or a multipoint system at the top and bottom, and that hardware is part of the tested assembly. Ask how the inactive leaf is secured and make sure the approval covers the pair in the swing you want.
## Which Swing Fits Which Situation
A simple way to decide:
- **Exposed entry, little or no overhang, coastal location:** lean toward outswing for water resistance, if the landing allows it.
- **Deep covered porch or recessed entry:** either swing works well; choose by layout and preference.
- **Small step right outside the door, or a step down to the walkway:** inswing is usually easier unless you rebuild the landing.
- **You want a storm or screen door:** inswing.
- **Small foyer, tight interior layout:** outswing frees floor space.
- **Replacing a door that already performs well:** keeping the same swing usually avoids extra carpentry, threshold and porch work.
Whichever way you go, the door you buy must be the configuration that was tested. Ordering an inswing version of a door because the outswing version had the rating you saw on a brochure is a common mistake; check the numbers for the exact swing on your quote.
## How to Choose: Questions to Ask Your Contractor
- What design pressure does my entry need, and what are the approved ratings for both swing directions of this door?
- What is the door's water resistance rating?
- Does my landing or step work with an outswing door?
- Will I keep a storm or screen door?
- What security hinges, multipoint locks or deadbolts are included?
- What finish and hardware are recommended for my distance from the coast?
- Does my HOA have rules for door style, color or glass?
## Frequently Asked Questions
### Are outswing doors required in Florida?
Not for typical single-family homes. The door must be impact-protected where required and approved for your size and design pressure. Outswing is a common choice, not a blanket rule.
### Is an outswing door less secure?
Not necessarily. The hinges are outside, so use security or non-removable hinge pins. With proper hinges and a good multipoint lock, an outswing door is very hard to force because it closes against the frame stop.
### Can I change my inswing front door to outswing?
Usually yes, but it may require a new frame, threshold and sometimes changes to the step or porch so the landing works for an outswing door. A permit is required.
### Which swing is better for hurricanes?
Outswing doors often have an advantage in water resistance, but either swing can be rated for hurricane pressures. Compare the approved ratings for your exact door.
### Do impact front doors need shutters?
No. An impact-rated door with the correct approval for your opening does not need additional shutters.
### Which material is best for a Florida front door?
Fiberglass and steel are the most common impact entry door materials. Fiberglass resists dents and rust and handles humidity well; steel is strong but needs its finish maintained near salt air. Wood looks great but needs the most upkeep in Florida's climate.
## Bottom Line
Outswing doors often do better with wind-driven rain and free up foyer space, while inswing doors suit tight porches and storm doors. Pick the swing that fits your entry, then verify the specific door's approved ratings for that swing.
Planning a new entry door? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "outswing front door",
      "outswing doors",
      "outswing vs inswing door",
      "inswing front door",
      "florida front door code",
      "impact front door",
    ],
    relatedServices: ["impact-windows-doors", "exterior-remodeling"],
  },

  // 12 — Arched windows
  {
    slug: "arched-windows",
    title: "Arched Windows: Half Moon, Eyebrow and Impact Options for Florida",
    seoTitle: "Arched Windows: Half Moon, Eyebrow & Impact Options",
    seoDescription:
      "Arched windows explained: half moon, eyebrow, quarter round and round-top styles, impact options in Florida, typical 2026 cost, pros and cons.",
    excerpt:
      "Half moon, eyebrow and round-top windows add character, but they are custom shapes. Here is how they work, what they cost and how to replace them with impact glass.",
    date: "2026-10-22",
    readMinutes: 7,
    cover: img(
      "blog-arched-windows-cover",
      U("1759355787174-044355f63c55"),
      "White stucco house with a red barrel tile roof",
      "exterior",
    ),
    body: lines(`
Arched windows are windows with a curved top instead of a square one. The main types are the half moon (a half circle), the eyebrow (a shallow, gently curved arch), the quarter round and the round-top or arch-top window (a rectangle topped with an arch). They are usually fixed, non-opening units, and in Florida they can be replaced with impact-rated versions built to the exact shape of your opening.
Arched windows are common on Mediterranean-style and stucco homes across Southwest Florida, often over entry doors, sliders and large picture windows. Because each one is a custom shape, they need more careful measuring, ordering and installation than standard rectangles.
## Types of Arched Windows
### Half moon window
A half moon window is a half circle: its width is roughly twice its height. It is often set above a door, a pair of windows or a slider, and it is almost always fixed glass. Half moon windows can also be "extended," with short straight legs below the curve.
### Eyebrow window
An eyebrow window has a flatter arch than a half circle, rising gently from the sides to a low peak, like a raised eyebrow. Eyebrows suit wide openings where a full half circle would be too tall, such as over a wide slider or a bank of windows.
### Quarter round window
A quarter round is one quarter of a circle, often used in pairs on either side of a gable or beside other shapes.
### Round-top or arch-top window
A round-top combines a rectangular window with an arched top in one frame or in two units joined together (mulled). The lower part may be a single hung or casement while the arched part is fixed.
### Full circle and other custom shapes
Full circles, ellipses, gothic arches and other specialty shapes are possible but are more custom and more expensive.
![Spacious room with wood floors and large windows](${U("1783125127015-bf513362480b")} "Large glass areas, including shaped units above, bring in light but also heat. Stock photo.")
## How Arched Windows Work
Most arched windows are picture windows: the glass is set in a fixed frame and does not open. Operable arched units exist but are uncommon and costly. When an arch sits above another window or door, the two are usually joined by a mullion. In hurricane country, that mullion must be rated too, because it carries wind load between the units.
Manufacturers build shaped windows from a template or precise field measurements. The radius, leg heights and overall width all have to be right, because a shaped frame cannot be trimmed to fit like a stock rectangle.
## Pros and Cons
### Pros
- Architectural character, especially on Mediterranean and Spanish-style homes.
- Extra daylight high on the wall, where privacy is rarely an issue.
- Can visually raise a ceiling or entry.
- Available in impact glass from major Florida manufacturers.
### Cons
- Custom shapes cost more per square foot than rectangles.
- Longer lead times for ordering and replacement parts.
- Blinds and shades for curved tops are specialty items.
- Heat gain on sunny walls unless you choose Low-E glass.
- High units can be hard to clean and reach.
## Impact Arched Windows in Florida
Most coastal Southwest Florida homes are in the wind-borne debris region under the Florida Building Code, 8th Edition (2023), so arched windows need impact protection just like rectangular ones. Shuttering a curved opening is awkward, which is one reason homeowners choose impact arched windows. Key points:
- **Product approval:** the shape, size, glass and anchoring must be covered by a Florida Product Approval or Miami-Dade NOA. Shaped products often have their own approvals and size limits, so confirm the approval for the exact shape on your quote.
- **Design pressure:** the window and any mullion must meet the design pressure for its location on the wall. Higher units and corners can see higher pressures.
- **Mulled assemblies:** an arch mulled to a door or window below must use a tested mullion or a combination approved together.
- **Buck and stucco:** older arched openings often have curved wood bucks that hold moisture. Inspect and replace rotted bucks during replacement.
- **HOA rules:** associations may require a specific frame color or grid pattern on arches.
![Exterior of a stucco home with front steps and plantings](${U("1768941124452-9a624bb5c8ab")} "Stucco around window openings needs careful patching after replacement. Stock photo.")
## How Much Do Arched Windows Cost?
Arched and other shaped impact windows fall within the typical Southwest Florida range of about **$1,200 to $3,800 per opening** installed in 2026, but they tend to land in the upper half of that range because of custom fabrication and extra labor. Typical guidance:
- **Small half moon or quarter round over an existing window:** toward the middle of the range.
- **Wide eyebrow or large half moon:** toward the upper end.
- **Round-top assemblies (rectangle plus arch):** often priced as two openings, or as one large custom unit at the top of the range or above.
- **Arches over sliders:** the arch is priced as a window; the door is priced separately, typically $4,500 to $14,000 for an impact slider.
Costs rise with grids, tinted or Low-E glass, colored frames, curved buck replacement and stucco repair around the curve. Ask whether the quote includes interior trim on the arch.
## What Goes Wrong With Arched Windows
- **Leaks at the curve:** sealant along a curved head is harder to install and often fails first.
- **Rotted curved bucks:** water entering at the curve can rot the wood buck behind the stucco.
- **Fogged glass:** failed seals in older insulated units.
- **Cracked stucco around the arch:** movement and water intrusion at the curve show up as hairline cracks.
- **Missing impact protection:** older arched units are often plain annealed glass, and many homes never had a practical way to shutter them.
## How Arched Window Replacement Works
Replacing a shaped window takes a few more steps than a standard rectangle:
- **1. Measure or template the opening.** The installer records the width, leg heights and radius, or traces the curve onto a template, after checking the existing opening for square and level.
- **2. Confirm the approval.** The shape and size are checked against the product approval and the design pressure for that wall before ordering.
- **3. Order and wait.** Shaped units are custom-built, so lead times are usually longer than for standard windows.
- **4. Remove the old unit.** The old frame comes out carefully to limit stucco damage around the curve.
- **5. Inspect and repair the buck.** Rotted or damaged curved bucks are replaced; in block homes, anchoring points are checked.
- **6. Install, anchor and seal.** The window is set, shimmed and fastened per the approval, then sealed and flashed along the curve.
- **7. Finish and inspect.** Stucco patch, paint and interior trim are completed, and the permit inspection is passed.
On a round-top assembly over a door or window, the lower unit and the arch are often installed the same day so the mullion and sealing are done as one system.
## Glass and Comfort Choices
Arched windows are often high on sun-facing walls, so glass selection matters. Low-E coatings reduce heat gain while keeping the view bright, and light tints can cut glare in rooms where the arch catches the afternoon sun. Insulated laminated glass adds another layer of comfort and sound reduction compared with single laminated glass, at a higher price. Grids (muntins) in a sunburst or colonial pattern can match the style of the house, but they add cost and need to match the rest of the windows if you are replacing in phases.
## How to Choose: Questions to Ask Your Contractor
- Is this shape and size covered by the product's Florida Product Approval at my design pressure?
- If the arch is mulled to a door or window, what mullion or combined approval is being used?
- Will you make a template or field-measure the radius?
- Will you inspect and replace the curved buck if it is damaged?
- Is stucco repair and paint around the curve included?
- Fixed arch or operable? What are the cost and lead time differences?
- Which glass package helps with heat on this wall?
## Frequently Asked Questions
### What is the difference between a half moon and an eyebrow window?
A half moon is a half circle, with a height about half its width. An eyebrow has a flatter, gentler curve, so it is shorter relative to its width.
### Can arched windows be impact-rated?
Yes. Florida manufacturers offer impact arched windows in common shapes. Confirm the approval covers your exact shape, size and design pressure.
### Do arched windows open?
Most are fixed. Round-top units can include an operable rectangle below a fixed arch, and specialty operable arches exist but are uncommon.
### Can I replace an arched window with a rectangle?
Sometimes, but it changes the exterior appearance and requires reframing and stucco work, and HOAs may not allow it. Most owners replace the arch with an impact arch.
### How do you cover an arched window for privacy or sun?
Specialty arched shades and shutters exist. Many owners leave arches uncovered and use Low-E or tinted glass to control heat.
## Bottom Line
Arched windows give Florida homes their character, but each is a custom piece. Choose an impact arch whose shape and size are covered by its product approval, insist on accurate measuring and buck inspection, and budget for the upper half of the typical window range.
Thinking about replacing arched or half moon windows? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "arched windows",
      "half moon window",
      "eyebrow window",
      "impact arched windows",
      "round top windows",
      "arched window replacement",
    ],
    relatedServices: ["impact-windows-doors", "exterior-remodeling", "home-restoration"],
  },
];
