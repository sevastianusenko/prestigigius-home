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

export const postsG: Post[] = [
  // 7a — Tempered glass windows
  {
    slug: "tempered-glass-windows",
    title: "Tempered Glass Windows: Where Code Requires Them and What Replacement Costs",
    seoTitle: "Tempered Glass Windows: Code, Bathrooms & Replacement",
    seoDescription:
      "Tempered glass windows explained: where Florida code requires safety glazing, bathroom window rules, replacement options and typical 2026 SWFL costs.",
    excerpt:
      "Tempered glass windows are required wherever people could fall into or push against glass: near doors, floors, tubs and showers. Here is where the code calls for them, how to replace one, and how they relate to impact windows.",
    date: "2026-10-22",
    readMinutes: 7,
    cover: img(
      "blog-tempered-windows-cover",
      U("1764837599929-100bd5890c57"),
      "Modern glass doors with views to the outdoors",
      "windows-doors",
    ),
    body: lines(`
A tempered glass window is a window glazed with heat-treated safety glass that is several times stronger than ordinary annealed glass and breaks into small, blunt pieces instead of sharp shards. Building codes require tempered (or another approved safety glass) in "hazardous locations": glass in and next to doors, large panes close to the floor, glass by stairs, and glass near tubs, showers and pools. Tempered glass is not hurricane protection on its own; in Florida's wind-borne debris region that job belongs to laminated impact glass.
If you want the full breakdown of how the two glass types differ, start with our guide to [laminated vs tempered glass](/resources/laminated-vs-tempered-glass). This article focuses on the practical questions: where tempered glass windows are required, what to do in a bathroom, and what replacement looks like.
## How Tempered Glass Windows Differ From Standard Windows
From across the room a tempered glass window looks like any other window. The difference is in how the glass was made and how it fails:
- **Manufacturing:** the glass is cut to final size, then heated and rapidly cooled so the surface is in compression. That is what makes it strong.
- **Breakage:** when it breaks, the whole lite crumbles into small granules that are far less likely to cause deep cuts.
- **Identification:** tempered glass used to meet safety-glazing rules carries a permanent etched or ceramic mark (often called a "bug") in a corner.
- **No cutting after the fact:** every size, notch and hole is set before tempering, which is why a broken tempered pane is always ordered to exact size. We cover that in detail in [can you cut tempered glass?](/resources/can-you-cut-tempered-glass)
## Tempered Glass Windows Code: Where Safety Glazing Is Required
The Florida Building Code, Residential (8th Edition, 2023) requires safety glazing in hazardous locations. Either tempered glass or laminated glass that passes the safety-glazing standard qualifies. In general terms, those locations include:
- **Doors:** glass in swinging, sliding and bifold doors, including sliding glass patio doors.
- **Next to doors:** glass within a 24-inch arc of either vertical edge of a door in the closed position when the bottom edge of the glass is less than 60 inches above the floor.
- **Large, low panes:** an individual pane larger than 9 square feet with its bottom edge less than 18 inches above the floor, its top edge more than 36 inches above the floor, and a walking surface within 36 inches horizontally.
- **Wet areas:** glass in walls and enclosures around tubs, showers, hot tubs and pools when the bottom edge is less than 60 inches above a standing or walking surface, generally applying to glass within 60 inches horizontally of the water's edge.
- **Stairs and landings:** glass adjacent to stairways, landings and ramps within the distances the code specifies, including near the bottom of a stair.
- **Guards and railings:** glass used as a guard or railing infill.
These are summaries. The code includes exceptions (for example, certain protective bars or blinds do not count, and some decorative glass is exempt), so confirm the rule for a specific opening with your building department or contractor.
![Remodeled bathroom with a frameless glass shower and floating vanity](${U("1584622650111-993a426fbf0a")} "Glass in and around showers and tubs is a hazardous location, so it must be safety glazing. Stock photo.")
## Tempered Glass Window for a Bathroom
Bathrooms generate more tempered glass questions than any other room. The common scenarios:
- **Window over or beside a tub or shower:** if the bottom edge of the glass is less than 60 inches above the tub floor or shower floor and the window is within 60 inches horizontally of the water's edge, it needs safety glazing. Many older Florida homes have a plain annealed window right above the tub; that is worth fixing when you remodel.
- **Window elsewhere in the bathroom:** a window over the vanity or toilet, away from the tub and shower and not otherwise in a hazardous location, usually does not require safety glazing by code, although many homeowners choose it anyway.
- **Privacy:** tempered glass can be ordered with obscure or frosted patterns, so you do not have to choose between safety and privacy.
- **Shower enclosures:** shower doors and panels are safety glazing, almost always tempered.
If you are planning a [bathroom remodel](/services/bathroom-remodeling) and the tub is moving or becoming a walk-in shower, check whether the existing window ends up in the wet zone. A layout change can turn a code-compliant window into one that needs to be replaced with safety glazing.
## Tempered Glass Window Replacement: Your Options
When a tempered pane breaks, or you discover a window in a hazardous location was never glazed with safety glass, you have three realistic paths:
1. **Replace the glass only.** If the frame is sound and the window is not required to be impact-rated, a glass shop can measure and order a new tempered pane or insulated unit to size. Expect a wait while the glass is fabricated.
2. **Replace the sash or panel.** Some window and door systems are designed so a damaged sash or slider panel is replaced as a unit from the manufacturer.
3. **Replace the whole window.** If the frame is corroded, the seals have failed throughout, or the opening is in the wind-borne debris region and you want impact protection, a new impact window is usually the better investment.
One important limit: putting new glass in an old non-impact frame does not make the window hurricane-rated. Impact ratings belong to a tested system of glass, frame, glazing and anchors, verified through the Florida Product Approval for the exact model.
## Typical Costs in Southwest Florida
Typical 2026 ranges, installed:
- **Tempered glass replacement in an existing window or door panel:** typically a few hundred dollars up to about $1,000, depending on size, insulated vs single pane, coatings and obscure patterns.
- **Shower glass:** priced by panel size, hardware and whether it is frameless; part of most bathroom remodel quotes.
- **New impact window (laminated glass system):** $1,200–$3,800 per opening.
- **Impact sliding glass door:** $4,500–$14,000 depending on width, height and panel count.
## Tempered Glass and Impact Windows Work Together
Many homeowners assume they must pick one or the other. In practice, many impact windows use both: an insulated glass unit with a laminated lite on one side and a tempered or heat-strengthened lite on the other. The laminated lite provides impact resistance; the other lite adds strength and insulation. Other impact windows use a single laminated pane. Ask which glass makeup is on your quote, and confirm it matches the product approval.
For openings on the building envelope in coastal Charlotte, Sarasota and Lee counties, our usual recommendation is a complete [impact window and door](/services/impact-windows-doors) system rather than piecemeal tempered glass upgrades.
![Large sliding glass patio door with slim frames opening to the outdoors](${U("1565261949232-3fcc78206c0c")} "Sliding glass doors always require safety glazing; in coastal Florida they are usually impact-rated as well. Stock photo.")
## Questions to Ask Before You Replace Glass
- Is this opening a hazardous location under the code, or in the wind-borne debris region?
- Will the new glass carry a visible safety-glazing mark?
- Is the window or door currently impact-rated, and will a glass-only repair keep that rating?
- Is the frame worth keeping, or is it corroded, leaking or out of square?
- What is the lead time for the glass, and is the opening secure in the meantime?
## Frequently Asked Questions
### Are tempered glass windows required by code?
Only in hazardous locations, such as glass in or near doors, large panes near the floor, glass near stairs, and glass near tubs, showers and pools. Ordinary windows elsewhere in a house generally do not have to be tempered.
### Does a bathroom window need to be tempered glass?
It needs safety glazing when it sits in the wet zone: generally within 60 inches horizontally of the tub or shower water's edge with its bottom edge less than 60 inches above the standing surface. Laminated safety glass also qualifies.
### Is a tempered glass window the same as an impact window?
No. Tempered glass protects people from injury if the glass breaks. An impact window is a tested system with laminated glass designed to stay closed after being struck by debris.
### How do I know if my window glass is tempered?
Look for a small etched or printed mark in one corner. Unmarked glass in a door or beside a tub should be treated as non-safety glass until a professional confirms otherwise.
### Can a broken tempered window pane be repaired?
No. Cracked tempered glass cannot be repaired or cut down. The pane is replaced with a new one fabricated to the exact size.
## Bottom Line
Tempered glass windows belong wherever people could fall into or push against glass, especially around doors, floors and wet areas. On the outside of a Florida home, pair that safety thinking with a tested impact system so every opening is protected from both injury and storms.
Questions about the glass in your home? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "tempered glass windows",
      "tempered glass windows code",
      "tempered glass window replacement",
      "tempered glass window for bathroom",
      "safety glazing requirements",
      "tempered vs impact glass",
    ],
    relatedServices: ["impact-windows-doors", "bathroom-remodeling"],
  },

  // 7b — Can you cut tempered glass
  {
    slug: "can-you-cut-tempered-glass",
    title: "Can You Cut Tempered Glass? Why It Shatters and How Custom Glass Is Made",
    seoTitle: "Can You Cut Tempered Glass? What to Do Instead",
    seoDescription:
      "Can you cut tempered glass? No. Learn why it shatters, how custom tempered glass is ordered, how to tell if glass is tempered, and what this means in FL.",
    excerpt:
      "No, tempered glass cannot be cut, drilled or trimmed after it is tempered. Here is why, how custom tempered glass is made instead, and how to tell whether the glass you have is tempered.",
    date: "2026-10-22",
    readMinutes: 5,
    cover: img(
      "blog-cut-tempered-cover",
      U("1702724758750-9ff8d50f02e5"),
      "Empty room with a new full-height sliding glass door",
      "windows-doors",
    ),
    body: lines(`
No, you cannot cut tempered glass. Once glass has been tempered, any attempt to cut, drill, notch or grind it releases the stress locked inside and the whole pane shatters into small pieces. Every custom tempered glass part is cut to final size from regular annealed glass first, with all holes and notches made, and only then tempered.
Tempered glass is one of two common types of safety glass. For a complete comparison with laminated glass, including which one impact windows use, see our pillar guide on [laminated vs tempered glass](/resources/laminated-vs-tempered-glass). Here we focus on cutting, ordering and identification.
## Why Tempered Glass Cannot Be Cut
Tempering heats glass to roughly 1,150°F and then cools the surfaces quickly with air. The outer surfaces harden first and end up in compression; the center ends up in tension. That balance is what makes tempered glass strong.
Cutting glass works by scoring the surface and snapping along the score. On tempered glass, scoring or drilling breaks through the compressed surface into the tensioned core, and the stored energy releases all at once. The result is not a clean cut but a pane of small granules.
Claims that you can cut tempered glass with a special blade, a laser or a water jet at home do not hold up for fully tempered glass. Edge sanding or "seaming" the sharp corners very lightly is something glass shops may do on some products, but changing the size or shape is not possible.
## How Custom Tempered Glass Is Made Instead
If you need a piece of tempered glass in a specific size or shape, the process is the same whether it is a shower panel, a tabletop or a window lite:
1. **Measure precisely.** For a window or door, the glass size is usually smaller than the visible opening because part of the edge sits in the frame. Professionals measure the glass pocket, not just the daylight opening.
2. **Specify everything up front.** Thickness, edge finish, corner radius, hole sizes and locations, notches, obscure patterns and coatings must all be on the order.
3. **The shop cuts annealed glass** to the final dimensions and fabricates every hole and notch.
4. **The glass is tempered.** It goes through the tempering furnace and gets its safety mark.
5. **Delivery and installation.** Custom tempered glass is typically not same-day. Lead times vary by shop and season, so plan for some wait.
Because nothing can be adjusted afterward, a measuring mistake means ordering again. That is the main reason tempered glass cutting is left to fabricators rather than done on site.
![Remodeled bathroom with a frameless glass shower and floating vanity](${U("1584622650111-993a426fbf0a")} "Frameless shower panels are custom tempered glass: every hinge hole and notch is made before tempering. Stock photo.")
## How to Tell If Glass Is Tempered
Before you try to cut, drill or modify any glass, figure out what it is. Here are the practical checks:
- **Look for the mark.** Tempered safety glass is required to carry a permanent mark in a corner, often etched or sandblasted, naming the manufacturer and safety standard. It may be faint; check all four corners.
- **Check the location.** Glass in doors, shower enclosures, sliding patio doors and other hazardous locations is usually tempered or laminated by code.
- **Use polarized sunglasses.** Looking through tempered glass with polarized lenses, especially in daylight at an angle, often reveals faint dark spots or stripes. These are stress patterns from the tempering process.
- **Look at the edges.** Tempered glass edges are usually smooth and finished because they had to be prepared before tempering. Raw, sharp cut edges suggest annealed glass.
- **Look for roller distortion.** Tempered glass sometimes shows a slight wave in reflections from the rollers in the furnace.
- **Check for laminated glass.** If you see a thin plastic layer between two lites at the edge, the glass is laminated, not monolithic tempered.
When in doubt, treat the glass as tempered and do not attempt to modify it.
## What You Can Cut: Annealed and Laminated Glass
Not all glass is off limits:
- **Annealed (standard float) glass** cuts cleanly with a scoring wheel. It is the starting point for most custom glass.
- **Laminated glass** made from annealed lites can be cut by a glass shop by scoring both sides and separating the interlayer. It takes skill, but it is routine for fabricators.
- **Heat-strengthened glass** is partially tempered and also should not be cut after treatment.
- **Laminated glass made with tempered lites** cannot be cut, for the same reason as tempered glass.
## The Florida Angle: Impact Glass Is Ordered to Size
In Southwest Florida, many glass questions come up after storms, when a slider panel or window lite is cracked. Two points matter here:
- **Impact glass is part of a tested system.** The laminated glass in an impact window or door is fabricated to the manufacturer's specification and installed with a specific glazing method. You cannot trim a generic piece of glass to fit and keep the impact rating. Replacement glass should come through the manufacturer or an authorized source, matching the Florida Product Approval for that model.
- **Hazardous locations stay hazardous.** If you replace glass in a door, beside a tub or near a floor, the new glass still has to be safety glazing.
If a storm cracked several units, it is often more practical to compare repair against replacement with an [impact window installation](/services/impact-windows-doors) or a broader [storm damage rebuild](/services/storm-damage-rebuild) estimate. If you are deciding where tempered glass belongs in the first place, see [tempered glass windows](/resources/tempered-glass-windows).
![Large sliding glass patio door with slim frames opening to the outdoors](${U("1565261949232-3fcc78206c0c")} "A cracked slider panel is replaced with glass fabricated to that door's specification, not cut down from stock. Stock photo.")
## Typical Costs
Typical 2026 ranges in Southwest Florida:
- **Custom tempered glass replacement** for a window lite or door panel: typically a few hundred dollars up to about $1,000, depending on size, thickness, insulated vs single pane and coatings.
- **New impact windows:** $1,200–$3,800 per opening installed.
- **New impact sliding glass doors:** $4,500–$14,000 installed.
## Frequently Asked Questions
### Can you cut tempered glass with a diamond blade or laser?
Not fully tempered glass. Any cut or hole that breaks through the compressed surface causes the pane to shatter. Custom shapes are cut before tempering.
### Can you drill a hole in tempered glass?
No. Holes for hinges, handles or fixtures must be drilled before the glass is tempered. Plan hardware locations before ordering.
### Can tempered glass be resized if it is slightly too big?
No. If a tempered piece does not fit, the only fix is to order a new piece at the correct size.
### How long does custom tempered glass take?
It varies by shop and demand. Because the glass must be cut, fabricated and run through a tempering furnace, it is rarely same-day; ask your supplier for the current lead time.
### Can I replace broken impact glass with tempered glass?
No. Tempered glass alone does not meet impact requirements. Replacement glass for an impact unit must match the manufacturer's specification and product approval.
## Bottom Line
Tempered glass is cut once, before tempering, and never again. Measure carefully, specify every hole and notch up front, and on Florida impact windows and doors, use glass that matches the tested system.
Need glass replaced or windows upgraded after a storm? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "can you cut tempered glass",
      "tempered glass cutting",
      "custom tempered glass",
      "how to tell if glass is tempered",
      "can you drill tempered glass",
      "cutting laminated glass",
    ],
    relatedServices: ["impact-windows-doors", "storm-damage-rebuild", "bathroom-remodeling"],
  },

  // 8a — Single-hung window replacement cost
  {
    slug: "single-hung-window-replacement-cost",
    title: "Single-Hung Window Replacement Cost in Florida: 2026 Price Guide",
    seoTitle: "Single-Hung Window Replacement Cost (2026 Florida)",
    seoDescription:
      "Single-hung window replacement cost in SW Florida: typical 2026 prices for impact and vinyl single-hung windows, what drives cost, and how to compare.",
    excerpt:
      "In Southwest Florida, most single-hung window replacements are impact windows, typically at the lower end of $1,200–$3,800 per opening. Here is what drives the price and how to read a quote.",
    date: "2026-10-22",
    readMinutes: 6,
    cover: img(
      "blog-sh-cost-cover",
      U("1572739275114-ec3764ba1477"),
      "White-framed replacement window",
      "windows-doors",
    ),
    body: lines(`
In Southwest Florida, a single-hung impact window replacement typically costs $1,200 to $3,800 per opening installed in 2026, and standard-size single-hung units usually land in the lower part of that range. A non-impact vinyl single-hung window costs less, but in the wind-borne debris region it needs approved shutters to meet code, which changes the math.
Single-hung windows have a fixed top sash and a sliding bottom sash. If you are still deciding on the style, our comparison of [single-hung vs double-hung windows](/resources/single-hung-vs-double-hung-windows) covers ventilation, cleaning and maintenance. This guide is about price.
## Typical Single-Hung Windows Prices in 2026
Typical installed ranges in Charlotte, Sarasota and Lee counties:
- **Impact single-hung, standard bedroom or living room size, white frame:** typically toward the lower end of $1,200–$3,800 per opening.
- **Impact single-hung, large size, higher design pressure, bronze or black frame, or upgraded glass:** typically mid-range to upper range.
- **Impact single-hung in an opening that needs buck replacement or significant stucco work:** add the repair cost on top; it is usually itemized.
- **Non-impact vinyl single-hung windows:** typically less per opening than impact units. In the wind-borne debris region you must also budget for approved shutters on each opening, plus the time to install them before every storm.
- **Whole-house projects:** priced per opening, but mobilization, permitting and disposal are spread across more windows, so the average per opening often drops on larger jobs.
These are typical figures for budgeting. Your quote depends on your exact sizes, ratings and opening conditions.
## What Drives Single-Hung Window Replacement Cost
### Size and design pressure
Bigger windows cost more, and so do windows that must meet a higher design pressure (DP). DP depends on your home's wind speed zone, exposure, height and where the window sits on the wall; corner zones need higher ratings.
### Frame material
- **Aluminum:** slim sightlines, strong, common on block homes. Thermally broken aluminum improves efficiency.
- **Vinyl:** usually better insulation and often slightly lower cost. Vinyl single-hung windows are popular for energy-conscious replacements.
### Glass package
Low-E coatings, tints, obscure glass for bathrooms, and insulated laminated glass all change the price. Insulated laminated glass costs more but improves comfort and energy performance.
### Opening condition
On concrete block homes, windows are anchored through a wood or concrete buck. Rotted wood bucks, cracked stucco returns or water damage below the sill add labor and materials.
### Permits and paperwork
In Florida, window replacement requires a permit. A licensed contractor pulls it, submits the product approval, and schedules inspections. That cost belongs in your quote.
![Single-story Florida home with white stucco walls and front windows](${U("1786550860372-116b871a1697")} "Single-hung impact windows are the most common replacement on single-story block homes in Southwest Florida. Stock photo.")
## Single-Hung Window Replacement: What the Job Includes
A complete single-hung window replacement quote should list:
1. Removal and disposal of the existing window.
2. Inspection of the buck and opening, with a stated plan and price for rot repair.
3. The new window: brand, series, size, frame color, glass package and Florida Product Approval number.
4. Anchoring per the product approval: anchor type, spacing and embedment.
5. Sealing and waterproofing around the frame.
6. Exterior finish: stucco patch, trim or sealant.
7. Interior finish: caulk, trim or drywall returns, and paint touch-up if included.
8. Permit, inspections and final paperwork you can give your insurer.
Comparing quotes line by line is the only fair way to compare price. Two quotes that differ by thousands of dollars often differ in scope, not in the window.
## Repair or Replace?
Not every tired single-hung window needs to go. Worn balances, broken locks and dried-out weatherstripping are inexpensive parts that a technician can often replace in an afternoon. Replacement makes more sense when:
- The window is non-impact and the opening is in the wind-borne debris region, so you are relying on shutters every storm.
- The insulated glass has fogged between the panes, and the frame is old enough that replacing glass alone is poor value.
- Aluminum frames are pitted, corroded or bent, especially near salt water.
- Water is getting in around the frame, not just through the sash, which points to failed sealant, flashing or a rotted buck.
- Parts are no longer available for the brand or series.
If several of these apply to most of your windows, replacing them as one project is usually more economical than fixing them one at a time.
## Vinyl Single-Hung Windows vs Aluminum in Florida
- **Heat and sun:** both work in Florida. Vinyl insulates better; aluminum frames get hotter to the touch unless thermally broken.
- **Salt air:** vinyl does not corrode; aluminum relies on its finish, so rinsing and care matter near the Gulf.
- **Size limits:** aluminum lines often allow larger approved sizes or higher ratings in some product lines.
- **Color:** dark frame colors are available in both, at a premium.
## Ways to Control the Cost
- Keep standard sizes where the opening allows; custom sizes add cost.
- Group windows into one permit and one project.
- Choose single-hung for most openings and reserve casements or larger units where they add real value.
- Ask about glass packages; not every opening needs every upgrade.
- Ask about [financing options](/financing) if you want to protect the whole house at once.
- Keep your permit and product approval records; a wind mitigation inspection may qualify you for insurance credits, which vary by insurer.
## The Florida Angle
- **Wind-borne debris region:** most of coastal Southwest Florida requires impact protection on glazed openings, either impact-rated windows or approved shutters.
- **Florida Building Code, 8th Edition (2023):** replacement windows must meet the design pressure for your location. Verify the current Florida Product Approval for the exact model and size.
- **Egress:** a bedroom single-hung window must provide the required clear opening with the bottom sash open. Some sizes do not qualify.
- **HOAs:** many associations specify frame color and grid patterns. Get approval before ordering to avoid delays.
If you are ready to price your home, our [impact window and door installation](/services/impact-windows-doors) team measures every opening and quotes each one line by line. If two or more windows sit side by side, you will also want to understand [mulled windows](/resources/mulled-windows), because how units are joined affects both the price and the rating.
## Frequently Asked Questions
### How much does it cost to replace a single-hung window?
In Southwest Florida in 2026, a single-hung impact window typically costs $1,200–$3,800 per opening installed, with standard sizes toward the lower end. Non-impact vinyl units cost less but need approved shutters in the wind-borne debris region.
### Are single-hung windows cheaper than double-hung?
Usually, yes. For the same size, series and glass, single-hung windows have fewer moving parts and typically cost less than double-hung windows.
### Can I replace just one single-hung window?
Yes. Single-window replacements are common, though the per-opening price is usually higher because the permit and setup costs are spread over fewer units.
### Does window replacement need a permit in Florida?
Yes. Window replacement requires a building permit in Florida. Your contractor should pull it and include the product approval with the application.
### How long does single-hung window replacement take?
Installation of a typical home's windows often takes a few days once the windows arrive. Ordering and permitting usually take longer than the installation itself.
## Bottom Line
Single-hung windows are the most cost-effective way to replace windows in a typical Southwest Florida home. Budget toward the lower end of $1,200–$3,800 per opening for standard impact units, compare quotes line by line, and make sure each window carries the right approval and design pressure.
Want a precise number for your house? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "single hung window replacement cost",
      "single hung window replacement",
      "vinyl single hung windows",
      "single hung windows prices",
      "impact single hung windows cost",
      "window replacement cost florida",
    ],
    relatedServices: ["impact-windows-doors", "exterior-remodeling"],
  },

  // 8b — Mulled windows
  {
    slug: "mulled-windows",
    title: "Mulled Windows Explained: Mulling Kits, Structural Mullions and Impact Ratings",
    seoTitle: "Mulled Windows: Mulling Kits & Structural Mullions",
    seoDescription:
      "Mulled windows explained: what mulling means, mulling kits vs structural mullions, mulled impact windows and design pressure under Florida code.",
    excerpt:
      "Mulled windows are two or more window units joined into one assembly with a mullion. In hurricane country, the mullion has to be rated for wind load just like the windows.",
    date: "2026-10-22",
    readMinutes: 6,
    cover: img(
      "blog-mulled-cover",
      U("1783125127015-bf513362480b"),
      "Spacious room with wood floors and large windows",
      "windows-doors",
    ),
    body: lines(`
Mulled windows are two or more separate window units joined side by side or stacked into a single assembly. The joint between them is called a mullion, and the process of joining them is called mulling. Common examples are a picture window flanked by two single-hung windows, or a row of casements. In Florida, the mullion is a structural part: it has to carry the same wind pressure as the windows, so mulled impact windows require a mullion that is tested or engineered for your design pressure.
If you are still choosing between window styles for each unit in the group, see our guide to [single-hung vs double-hung windows](/resources/single-hung-vs-double-hung-windows).
## Mullion vs Muntin: Clearing Up the Terms
These two words get mixed up constantly:
- **Mullion:** a structural member between two separate window frames. It joins units and transfers wind load.
- **Muntin (grids):** decorative or dividing bars within a single sash that split the glass into smaller panes. Today they are usually grids between the glass or applied to its surface.
- **Meeting rail:** where the two sashes of a single or double-hung window overlap. It is part of one window, not a mullion.
## Common Mulled Window Configurations
- **Twin or triple single-hung:** two or three hung units side by side, common in bedrooms and living rooms.
- **Picture window with operable flankers:** a fixed center unit for the view, with single-hung or casement windows on each side for airflow.
- **Stacked units:** a fixed transom or arched unit mulled on top of a window or door.
- **Window walls:** multiple fixed and operable units combined to fill a large opening.
![Living room with tall wood-framed windows looking out to trees](${U("1774199679021-db3b421867c3")} "Large window groups are usually several units mulled together rather than one giant frame. Stock photo.")
## Window Mulling Kits vs Structural Mullions
### What a window mulling kit is
A window mulling kit is a manufacturer-supplied set of parts, typically connectors, clips, a mull cover and sealant, that joins two units in the field or at the factory. For non-impact windows in low-wind areas, a basic kit mostly aligns the frames and keeps water out.
### What a structural mullion is
In high-wind regions, the mullion becomes a load-bearing member. Wind pushes on the glass, the glass pushes on the frames, and the frames push on the mullion, which must carry that load to the anchors at the top and bottom of the opening without bending too far. A structural mullion is usually a heavier aluminum or reinforced section with its own anchoring clips at each end.
### Integral vs separate mullions
- **Integral (factory) mulled units:** the manufacturer joins the units and the assembly is tested or rated as a combination.
- **Field-mulled units:** separate windows are joined on site with a tested mullion system listed in its own product approval.
Either approach can be correct. What matters is that the specific mullion, size and anchoring are covered by an approval or engineering for your design pressure.
## Mulled Impact Windows and Design Pressure
Under the Florida Building Code, 8th Edition (2023), mullions between window and door units must be tested or engineered to carry the design wind load for the opening. In practice for impact work in Southwest Florida:
- **The assembly is only as strong as its weakest part.** If two windows are rated for a high design pressure but the mullion is rated lower, the whole assembly is limited to the mullion's rating.
- **Longer spans mean more load.** A tall mullion between two full-height units sees much more load than a short one, so tall mulls often require heavier sections.
- **Anchors matter.** The mullion clips must be fastened into the buck, block or framing exactly as the approval specifies.
- **Impact rating applies too.** In the wind-borne debris region the mullion and joined units must form an impact-resistant assembly, as covered by the product approvals.
- **Paperwork:** your permit package should include the approval for the windows and the approval or engineering for the mullion. Verify the current Florida Product Approval for the exact products.
![Installer applying flashing tape around a new window opening](${U("1786295866839-d17f879c65cd")} "Mullion anchoring and waterproofing are installation details that inspectors look for. Stock photo.")
## Pros and Cons of Mulled Windows
### Pros
- Large glass areas without one oversized, expensive unit.
- Mix fixed glass for the view with operable windows for airflow.
- Individual units are easier to handle, ship and install.
- A single damaged unit can sometimes be replaced without replacing the whole group.
### Cons
- More joints to seal against wind-driven rain.
- Structural mullions add cost and can widen the sightline between units.
- Size and DP limits of the mullion can restrict the design.
- Poorly sealed mull joints are a common leak source.
## What Mulled Windows Cost
Each unit in a mulled group is priced like any impact window: typically $1,200–$3,800 per unit installed in Southwest Florida in 2026. The mullion adds cost on top, and structural mullions for tall or high-pressure assemblies cost more than simple short mulls. Ask your contractor to list the mullion as a separate line so you can compare quotes fairly. For a single-hung group, our [single-hung window replacement cost](/resources/single-hung-window-replacement-cost) guide shows what moves each unit's price.
## How to Spec Mulled Windows on a Quote
When you review a quote for a mulled group, look for these details:
- The product and approval number for each individual unit.
- The mullion type, its approval or engineering, and the maximum span and design pressure it is rated for.
- The overall assembly size and how it is anchored at the head and sill.
- How the mull joint is sealed and covered, inside and out.
- Whether the units are factory-mulled or joined on site.
## Signs of Mullion Problems
- Water stains or soft drywall directly below a mull joint.
- A visible gap or cracked sealant between joined frames.
- Bowing or flexing of the joint on windy days.
- Rust stains from mullion fasteners in older aluminum assemblies.
If you see these, have the opening inspected. Re-sealing helps with minor gaps; structural movement usually means the assembly needs to be rebuilt to current code with an [impact window installation](/services/impact-windows-doors).
## Frequently Asked Questions
### What does mulled window mean?
A mulled window is a combination of two or more window units joined together with a mullion into one assembly, so they install and look like a single larger window.
### Is a window mulling kit enough for impact windows?
Only if that specific mulling system is approved or engineered for your required design pressure and impact rating. In coastal Florida, a basic alignment kit is not a substitute for a rated structural mullion.
### Can you mull a picture window to a single-hung window?
Yes, it is one of the most common configurations. The mullion between them must be rated for the opening's design pressure.
### Are mulled windows more likely to leak?
Each joint is a potential leak point, so sealing and flashing matter. A properly installed mulled assembly should perform as well as a single unit.
### Can I add a mullion to existing windows?
Generally not in a code-compliant way. Mulling is done when windows are installed, using approved components for those specific products.
## Bottom Line
Mulled windows let you build large, flexible window groups from standard units. In hurricane country, the mullion is a structural part of that assembly: make sure it is rated for your design pressure, anchored per its approval, and listed clearly on your quote.
Planning a window wall or combination unit? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "mulled windows",
      "window mulling kit",
      "mulled impact windows",
      "structural mullion",
      "mullion vs muntin",
      "window design pressure",
    ],
    relatedServices: ["impact-windows-doors", "home-additions"],
  },

  // 9a — Hurricane impact windows cost
  {
    slug: "hurricane-impact-windows-cost",
    title: "Hurricane Impact Windows Cost in Florida: 2026 Prices and a Simple Calculator",
    seoTitle: "Hurricane Impact Windows Cost: 2026 Florida Prices",
    seoDescription:
      "Hurricane impact windows cost $1,200–$3,800 per opening in SWFL (typical 2026). See prices by window type, a whole-house calculator and what drives it.",
    excerpt:
      "Impact windows typically cost $1,200–$3,800 per opening installed in Southwest Florida. Here is how prices break down by window type, a simple way to estimate your whole house, and what pushes a quote up or down.",
    date: "2026-10-22",
    readMinutes: 5,
    cover: img(
      "blog-impact-cost-cover",
      U("1561831710-3a8abd9657cf"),
      "White single-story home surrounded by tall palm trees under a blue sky",
      "exterior",
    ),
    body: lines(`
Hurricane impact windows typically cost $1,200 to $3,800 per opening installed in Southwest Florida in 2026, including the window, permit, removal of the old unit, installation and finish. Impact sliding glass doors typically cost $4,500 to $14,000. For a typical single-family home, multiply your number of openings by a per-opening figure that fits your window types to get a realistic starting budget.
Brand is rarely what moves the price most. If you are comparing manufacturers, read our fair comparison of [PGT vs ES vs CWS impact windows](/resources/pgt-vs-es-vs-cws-impact-windows). Not sure whether "hurricane windows" and "impact windows" mean the same thing? See [impact windows vs hurricane windows](/resources/impact-windows-vs-hurricane-windows).
## Hurricane Impact Windows Prices by Window Type
Typical 2026 installed ranges in Charlotte, Sarasota and Lee counties:
- **Single-hung, standard size:** typically toward the lower end of $1,200–$3,800 per opening.
- **Horizontal roller:** similar to single-hung for comparable sizes.
- **Picture (fixed) window:** varies widely with size; small units sit low in the range, large view windows sit higher.
- **Casement and awning:** typically mid-range to upper range because of the hinges, operators and hardware.
- **Arched, half-round and custom shapes:** typically toward the upper end, and very large shapes can exceed it.
- **Mulled groups:** each unit is priced individually, plus the structural mullion.
- **Impact sliding glass doors:** $4,500–$14,000 depending on width, height and panel count.
## Impact Windows Cost Calculator: A Simple Method
Online impact windows cost calculators can be useful, but most use national averages. This quick method gives you a Southwest Florida budget in a few minutes:
1. **Count your openings.** Walk the house and count every window and glass door. Treat a mulled pair or trio as separate units.
2. **Sort them by type.** Standard single-hung and rollers, picture windows, casements, specialty shapes, sliding doors.
3. **Assign a typical figure.** Use the lower part of $1,200–$3,800 for standard hung and roller windows, the middle for most picture windows and casements, and the upper part for large or shaped units.
4. **Add sliders separately.** Use $4,500–$14,000 per slider depending on size.
5. **Add a contingency.** Older homes often need buck or stucco repairs around a few openings. A contingency of 10% is a reasonable planning number.
**Example (typical, for budgeting only):** a single-story home with 12 standard single-hung windows and one 8-foot slider would land, at the low-to-middle of the ranges, somewhere around $20,000–$35,000 before contingency. Larger windows, dark frames or upgraded glass move it up. Only an in-home measurement gives a real price.
## What Drives Impact Window Cost
### Size and design pressure
Larger glass and higher design pressure (DP) ratings cost more. Required DP depends on your wind speed zone under the Florida Building Code, 8th Edition (2023), the exposure category, building height and the window's position on the wall.
### Frame material and color
Aluminum and vinyl are both common. Bronze, black and custom colors cost more than white.
### Glass package
Low-E, tints, obscure glass and insulated laminated glass all add cost but improve comfort, privacy or energy performance.
### Opening condition and installation scope
Rotted wood bucks, damaged stucco, water damage and interior trim work all add labor. Good quotes itemize these.
### Permits, engineering and lead times
Permits are required. Large or unusual openings can need engineering. After busy storm seasons, lead times stretch and some prices rise.
![Installer applying flashing tape around a new window opening](${U("1786295866839-d17f879c65cd")} "Flashing, anchoring and stucco repair are part of the installed price. Stock photo.")
## What Your Quote Should Include
- Exact model, series and Florida Product Approval number for each window.
- Size, DP rating, frame color and glass package for each opening.
- Removal and disposal of old windows.
- Buck inspection and the price for any rot repair.
- Anchoring and sealing method per the approval.
- Exterior stucco or trim finish and interior finish.
- Permit, inspections and final paperwork.
- Manufacturer warranty and the contractor's workmanship warranty.
## Impact Windows vs Shutters: Comparing the Cost
The most common alternative to impact windows is keeping or adding approved shutters over non-impact windows. Shutters usually cost less up front, especially basic panels, and accordion or roll-down shutters fall in between. The trade-offs are practical:
- **Preparation:** panels must be stored and put up before every storm; accordion and roll-down shutters are faster but still need to be closed.
- **Full-time protection:** impact windows protect the opening year-round, including when you are away or a storm intensifies quickly.
- **Daily benefits:** impact windows add security and noise reduction and block most UV light. Shutters add none of that when open.
- **Existing windows:** shutters do nothing for old windows that leak, fog or stick.
Many owners combine the two: impact windows on most openings, and shutters on an older door or a large opening scheduled for a later phase.
## When to Schedule Your Project
Demand for impact windows climbs before and right after hurricane season, and so do lead times. Getting measured in the off-season gives you more time to compare quotes, secure HOA approval and have the windows ordered and installed before the next season starts.
## Is the Cost Worth It in Florida?
Impact windows replace the need to install shutters before every storm, add security and noise reduction, and block most UV light. In the wind-borne debris region, they satisfy the code requirement for opening protection on their own. Many insurers offer wind mitigation credits for protected openings; the amount varies, so ask your agent and keep your permit and product approval records for the wind mitigation inspection. Check whether state programs, such as My Safe Florida Home, are currently accepting applications, since availability changes.
If the cost of protecting every opening at once is a stretch, many owners phase the work, starting with the largest openings and the windward side, or use [financing](/financing).
![Gray single-family home with a stone chimney and front porch in Fort Myers, Florida](${U("1583608205776-bfd35f0d9f83")} "Whole-house projects spread permit and setup costs across more openings. Stock photo.")
## Frequently Asked Questions
### How much do hurricane impact windows cost per window?
In Southwest Florida in 2026, typically $1,200–$3,800 per opening installed. Standard single-hung and roller windows sit lower in the range; large, shaped or specialty units sit higher.
### How much does it cost to put impact windows in a whole house?
Multiply your number of openings by a per-opening figure that matches your window types, add sliding doors at $4,500–$14,000 each, and add a contingency for repairs. A mid-size single-story home commonly lands in the tens of thousands of dollars.
### Are impact windows cheaper than hurricane shutters?
Shutters usually cost less up front. Impact windows cost more but protect the opening full time, with no setup before storms, and add security, noise reduction and UV protection.
### Do impact windows lower insurance in Florida?
They can. Protected openings are one of the features on Florida's wind mitigation inspection form, and many insurers give credits for them. The amount varies by insurer and policy.
### Why do impact window quotes vary so much?
Usually because the scope differs: window series, DP ratings, glass packages, frame colors and whether buck, stucco and interior repairs are included. Compare quotes line by line.
## Bottom Line
Budget $1,200–$3,800 per window and $4,500–$14,000 per slider for typical 2026 impact projects in Southwest Florida, then refine with an in-home measurement. The best value comes from the right rating for each opening and a permitted, properly anchored installation from a licensed [impact window and door](/services/impact-windows-doors) contractor.
Want an exact price for your home? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "hurricane impact windows cost",
      "impact windows cost",
      "hurricane impact windows prices",
      "impact windows cost calculator",
      "impact windows cost per window",
      "impact windows florida",
    ],
    relatedServices: ["impact-windows-doors", "storm-damage-rebuild"],
  },

  // 9b — Impact windows vs hurricane windows
  {
    slug: "impact-windows-vs-hurricane-windows",
    title: "Impact Windows vs Hurricane Windows vs Storm Windows: What Each Term Really Means",
    seoTitle: "Impact Windows vs Hurricane Windows: The Real Difference",
    seoDescription:
      "Impact windows vs hurricane windows vs storm windows: what each term means, which meets Florida code without shutters, and what to check on any quote.",
    excerpt:
      "\"Impact window\" is a tested product rating. \"Hurricane window\" is a marketing term that may or may not mean impact-rated. \"Storm window\" is something else entirely. Here is how to tell them apart.",
    date: "2026-10-22",
    readMinutes: 5,
    cover: img(
      "blog-impact-vs-hurricane-cover",
      U("1628133287836-40bd5453bed1"),
      "White house with shuttered front windows, a dormer and a green lawn",
      "exterior",
    ),
    body: lines(`
An impact window is a window system that has passed missile-impact and cyclic wind-pressure testing and carries a product approval stating it is impact-resistant. "Hurricane window" is not a code term: most sellers use it to mean an impact window, but some use it for windows that are only rated for wind pressure and still need shutters. A storm window is a different product altogether, a secondary sash added over an existing window for weather and insulation, and it provides no hurricane impact protection.
So the honest answer to "impact windows vs hurricane windows" is: they can be the same thing, but only the impact rating on the product approval tells you for sure.
## What Is an Impact Window?
An impact window is tested as a complete system, meaning the glass, frame, glazing method and anchors together. Outside the High-Velocity Hurricane Zone, testing generally follows ASTM E1886 and E1996: a projectile (a large missile, a 2x4 piece of lumber, for most residential openings near ground level) is fired at the glass, and then the damaged unit goes through thousands of cycles of positive and negative wind pressure. The glass may crack, but the opening must stay closed.
That performance comes from laminated glass, where layers of glass are bonded to a tough interlayer. For more on why laminated, not tempered, glass is used, see [laminated vs tempered glass](/resources/laminated-vs-tempered-glass).
In Florida, an impact window's ratings are documented in its Florida Product Approval or, in Miami-Dade and Broward, a Miami-Dade Notice of Acceptance (NOA). The approval lists the tested sizes, design pressure (DP) and whether the product is impact-rated.
## What Is a "Hurricane Window"?
Because it has no official definition, "hurricane window" can mean different things depending on who says it:
- **Most often:** an impact-rated window, the same thing as an impact window. This is how most Florida contractors, including us, use the phrase "hurricane impact windows".
- **Sometimes:** a window with a high design pressure rating that resists wind pressure and water but has not passed missile-impact testing. In the wind-borne debris region, such a window still needs approved shutters or panels.
- **Occasionally:** any window sold in a coastal market, with no special rating at all.
This is why the label alone is not enough. Ask for the product approval and look for the impact rating on it.
## What Is a Storm Window?
Storm windows are secondary panels installed over the inside or outside of an existing window. They are common in colder parts of the country, where they add insulation and protect older windows from weather. They are not designed or tested to resist hurricane debris, and they do not satisfy Florida's opening protection requirements.
Do not confuse storm windows with **storm panels**. Storm panels, such as aluminum or polycarbonate panels and accordion or roll-down shutters, are hurricane shutters. When they carry a product approval for impact, they are an approved way to protect a non-impact window, but they must be installed before each storm.
![White-framed replacement window](${U("1572739275114-ec3764ba1477")} "From the street, an impact window and a non-impact window can look identical. The rating is in the paperwork. Stock photo.")
## Storm Windows vs Impact Windows vs Hurricane Windows: Side-by-Side
- **Impact window:** tested for missile impact plus cyclic pressure; laminated glass; meets wind-borne debris requirements without shutters; protects full time.
- **"Hurricane window" (pressure-rated only):** rated for design pressure and water but not impact; needs approved shutters in the wind-borne debris region.
- **"Hurricane window" (impact-rated):** the same as an impact window; confirm on the product approval.
- **Storm window:** add-on secondary sash for weather and insulation; no hurricane impact rating; not a code solution for opening protection.
- **Storm panels and shutters:** approved shutters can protect non-impact windows, but must be deployed before each storm.
## What Florida Code Requires
Under the Florida Building Code, 8th Edition (2023), homes in the wind-borne debris region must protect glazed openings. Most of coastal Charlotte, Sarasota and Lee counties falls in this region. You have two code-compliant paths:
1. **Impact-resistant windows and doors** that carry the right impact rating and design pressure for each opening.
2. **Non-impact windows plus approved impact-rated shutters or panels**, installed before a storm.
Every window must also meet the design pressure required for its location on the house. Even an impact window has to be rated high enough for the specific opening.
![Aerial view of a neighborhood with a home destroyed by a hurricane](${U("1682351889381-9bbc98ebca86")} "Keeping every opening closed during a storm helps prevent wind pressure from entering the house. Stock photo.")
## How to Verify What You Are Buying
- Ask for the Florida Product Approval (FL number) or Miami-Dade NOA for each model on your quote.
- Look up the approval on the Florida Building Commission's product approval site and confirm the word "impact" and the large missile rating where required.
- Check that the approved size and DP meet or exceed what each opening needs.
- Look for a permanent label or etched mark on the glass or frame identifying the product, and keep the permit records.
- Make sure the quote names the exact series, not just the brand. Several manufacturers sell both impact and non-impact lines.
## Cost Difference
Impact windows typically cost $1,200–$3,800 per opening installed in Southwest Florida in 2026, and impact sliding glass doors typically $4,500–$14,000. Non-impact windows cost less up front, but in the wind-borne debris region you also pay for approved shutters and the work of installing them before each storm. Our [hurricane impact windows cost](/resources/hurricane-impact-windows-cost) guide breaks down pricing by window type, and [PGT vs ES vs CWS impact windows](/resources/pgt-vs-es-vs-cws-impact-windows) compares the major Florida manufacturers.
## Frequently Asked Questions
### Are hurricane windows and impact windows the same?
Often, but not always. "Hurricane window" is a marketing term. If the product approval lists it as impact-resistant, it is an impact window. If it is rated only for wind pressure, it still needs shutters in the wind-borne debris region.
### Do storm windows protect against hurricanes?
No. Storm windows are secondary panels for insulation and weather protection. They are not tested for hurricane debris and do not meet Florida opening protection requirements.
### Do I need shutters if I have impact windows?
Not for code purposes, as long as the impact windows carry the correct rating for each opening. Some owners still keep shutters for extra protection or for glass that is not impact-rated, such as an older door.
### How can I tell if my existing windows are impact windows?
Look for a permanent label or etched mark on the glass or frame, check permit records, and look at the edge of the glass for a laminated interlayer. A contractor can confirm the product and its approval.
### Are impact windows worth it over shutters?
They cost more but protect the house full time without preparation, add security and reduce noise. For many Southwest Florida owners, that convenience is the deciding factor.
## Bottom Line
Use the term that is on the paperwork. "Impact" on a valid product approval is what counts in Florida; "hurricane window" needs that proof; storm windows are not hurricane protection. When in doubt, ask your contractor for the approval number for every opening.
Want a clear, line-by-line [impact window and door](/services/impact-windows-doors) quote, or help after a storm with our [storm damage rebuild](/services/storm-damage-rebuild) team? Call Prestigious Home Improvements at (941) 223-4875 for a free in-home estimate.
`),
    keywords: [
      "impact windows vs hurricane windows",
      "hurricane windows vs impact windows",
      "hurricane impact windows",
      "storm windows vs impact windows",
      "what are impact windows",
      "hurricane shutters vs impact windows",
    ],
    relatedServices: ["impact-windows-doors", "storm-damage-rebuild"],
  },
];
