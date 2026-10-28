# Google Business Profile — услуги (черновик для заполнения)

Источник: карточки «products» на страницах услуг сайта (`src/content/service-pages/*.ts`), те же цены, что клиент подтвердил для сайта. Лимиты Google: название услуги ≤ 120 символов, описание ≤ 300 символов, цена — «Fixed», «From», «Free» или без цены. Цены указаны как **From** (нижняя граница диапазона), диапазон повторён в описании; «/ sq ft» и «priced per opening» — без цены, диапазон только в описании. Через пару месяцев цены можно убрать, не трогая описания.

Категории профиля (1 основная + до 9 дополнительных) — проверить, что они заданы, иначе услуги под ними не добавить:

- General contractor (primary)
- Remodeler
- Window installation service
- Water damage restoration service
- Stucco contractor
- Siding contractor
- Painter
- Flooring contractor
- Sunroom contractor
- Landscape designer / Patio builder

## General contractor (primary)

### Whole-Home Remodeling  (`/services/whole-home-remodeling`)

| Service name | Price | Description |
|---|---|---|
| Whole-home refresh | From $45,000 | No walls move. New floors from room to room, popcorn tested and removed, new doors, trim, lighting and one paint palette. Typical range $45,000–$90,000. |
| Kitchen, baths & floors | From $95,000 | The package most of our whole-home clients choose: a new kitchen, two bathrooms taken to the studs and one continuous floor. Typical range $95,000–$170,000. |
| Wall removal & open concept | From $25,000 | The walls between kitchen, dining and living come out. Load path checked, beam sized by an engineer, inspected before it is covered. Typical range $25,000–$60,000 (plus finishes). |
| Full gut renovation | From $180,000 | Down to block and studs: drains scoped and replaced, wiring to code, insulation, new layout and every finish, often with impact openings. Typical range $180,000–$350,000+. |

### Home Additions & Florida Rooms  (`/services/home-additions`)

| Service name | Price | Description |
|---|---|---|
| Florida room | From $45,000 | A lanai wall rebuilt in block with storm-rated windows and a door: the first step toward a true Florida room. Typical range $45,000–$95,000. |
| Garage conversion | From $40,000 | The most affordable new room: slab, walls and roof already exist. Floor leveled, door infilled, insulated and cooled. Typical range $40,000–$90,000. |
| Room or bedroom addition | From $90,000 | Built from the footing up: slab doweled to the old one, block walls with a tie beam, roof tied in and flashed, stucco matched. Typical range $90,000–$200,000. |
| Primary or in-law suite | From $150,000 | Bedroom, walk-in closet and a curbless shower, with a private entry and an optional kitchenette where zoning allows. Typical range $150,000–$300,000. |

### Home Restoration  (`/services/home-restoration`)

| Service name | Price | Description |
|---|---|---|
| Full gut renovation | From $120,000 | Down to block walls and trusses, then new layout, plumbing, wiring, insulation, kitchen, baths and finishes throughout. Typical range $120,000–$260,000. |
| Old Florida ranch or canal home | From $75,000 | Open the kitchen, update the baths, fix the systems and keep the mid-century character, with impact sliders facing the water. Typical range $75,000–$160,000. |
| Plumbing & wiring replacement | From $18,000 | Cast iron, galvanized or polybutylene replaced, panel upgraded and circuits grounded, then slab cuts, walls and floors restored. Typical range $18,000–$55,000. |
| Condo renovation | From $45,000 | Everything from the drywall in, coordinated with your association: approvals, risers, sound underlayment and work hours. Typical range $45,000–$110,000. |

## Remodeler

### Kitchen Remodeling  (`/services/kitchen-remodeling`)

| Service name | Price | Description |
|---|---|---|
| Kitchen refresh & refacing | From $12,000 | The cabinet boxes and layout stay. New doors and fronts, quartz or granite, a tile backsplash, soft-close hardware and under-cabinet light. Typical range $12,000–$25,000. |
| Cabinets & countertops | From $22,000 | What most people mean by a new kitchen. Same layout, new cabinets set dead level, stone templated after install, new sink and faucet. Typical range $22,000–$40,000. |
| Full kitchen, same layout | From $45,000 | Everything new while the sink, range and fridge stay put: soffits out, cabinets to the ceiling, recessed lights, new floor and a hood vented outdoors. Typical range $45,000–$85,000. |
| New layout & open concept | From $55,000 | The sink moves to an island, a wall comes out, ductwork is rerouted. On a slab that means cutting concrete, which we price before you sign. Typical range $55,000–$150,000. |

### Bathroom Remodeling  (`/services/bathroom-remodeling`)

| Service name | Price | Description |
|---|---|---|
| Walk-in shower rebuild | From $14,000 | The old shower comes out to the studs or block and goes back larger, with a bench, a recessed niche, a sloped pan and frameless glass. Typical range $14,000–$28,000. |
| Tub-to-shower conversion | From $12,000 | The bathroom job homeowners ask about most. The tub goes, the drain is converted, and a tiled walk-in shower with a low curb or no curb takes its place. Typical range $12,000–$22,000. |
| Primary bath & layout change | From $35,000 | The unused garden tub comes out, the shower doubles in size, and drains move through the slab. Double vanity, better light, more storage. Typical range $35,000–$75,000. |
| Curbless & aging-in-place | From $20,000 | The slab is recessed for a zero-step entry, every wall gets blocking for grab bars, and the seat, toilet and vanity are set to the person using the room. Typical range $20,000–$45,000. |

## Window installation service

### Impact Windows & Doors  (`/services/impact-windows-doors`)

| Service name | Price | Description |
|---|---|---|
| Impact windows | From $1,200 | Single-hung, horizontal roller, casement, picture and arched units in vinyl or aluminum, with laminated impact glass rated for your address. Typical range $1,200–$3,800 per opening per opening. |
| Impact sliding glass doors | From $4,500 | Two-panel to multi-panel sliders, from a lanai swap to a full glass wall on the water. Wide units are engineered for the opening. Typical range $4,500–$14,000 per door per door. |
| Entry & French doors | From $2,800 | Impact front doors, doubles with decorative glass, French doors to the lanai and modern pivot-look entries, set with a sloped, sealed sill. Typical range $2,800–$15,000 per door per door. |
| Specialty openings | No price | Arched and eyebrow windows, transoms, pool-bath doors with privacy glass and kitchen pass-through windows to the lanai. Priced per opening after a free in-home measure. |

## Water damage restoration service

### Storm & Water Damage Rebuilds  (`/services/storm-damage-rebuild`)

| Service name | Price | Description |
|---|---|---|
| Flood cut rebuild | From $30,000 | Mitigation cut the drywall 2 to 4 feet up and pulled the floors. We rebuild the lower walls, trim, doors, flooring and swollen base cabinets. Typical range $30,000–$85,000. |
| Wind-damage rebuild | From $35,000 | Broken windows, sliders or a garage door let the rain in. We replace the openings with impact units and rebuild ceilings and finishes, scheduled around your roofer. Typical range $35,000–$120,000. |
| One-room leak repair | From $6,000 | A burst supply line, water heater or AC overflow. Walls and ceilings replaced, texture matched and floors blended into the rest of the house. Typical range $6,000–$25,000. |
| Lanai, garage & exterior | From $8,000 | The parts storms hit first: screen cages, garage doors, stucco cracks, soffit and fascia that let wind-driven rain into the attic. Typical range $8,000–$45,000. |

## Stucco contractor

### Exterior Remodeling & Stucco  (`/services/exterior-remodeling`)

| Service name | Price | Description |
|---|---|---|
| Stucco crack & opening repair | From $1,500 | Cracks routed and bonded, loose stucco cut out, window and door perimeters resealed, and the patch hand-matched to your texture. Typical range $1,500–$7,000. |
| Whole-house re-texture | From $12,000 | One uniform finish over every elevation, ending the patchwork of old repairs, with new trim bands and full exterior paint. Typical range $12,000–$32,000. |
| Soffit, fascia & gutters | From $4,000 | Rotted wood fascia replaced and wrapped, vented aluminum or vinyl soffit, gutters reset, and the gaps pests were using closed. Typical range $4,000–$15,000. |
| Front entry makeover | From $8,000 | Impact entry door with sidelites, columns and arch reshaped, new lighting and a paver walk, tied into the rest of the house. Typical range $8,000–$30,000. |

## Siding contractor

### Siding  (`/services/siding`)

| Service name | Price | Description |
|---|---|---|
| James Hardie fiber cement | From $22,000 | Noncombustible, termite-proof lap siding that holds paint in strong sun, pre-finished in ColorPlus or primed for paint. Typical range $22,000–$60,000. |
| Vinyl siding | From $12,000 | Lightweight and low-maintenance, in high-wind rated profiles and heat-resistant colors. It does not need paint. Typical range $12,000–$32,000. |
| Board-and-batten | From $5,000 | Vertical panels with battens on gables, entries or the whole house, often above stucco for a coastal farmhouse look. Typical range $5,000–$25,000. |
| Manufactured home re-side | From $9,000 | Lightweight siding, new vented skirting and rewrapped window trim, with park or HOA approval and the permit handled. Typical range $9,000–$24,000. |

## Painter

### Interior & Exterior Painting  (`/services/painting`)

| Service name | Price | Description |
|---|---|---|
| Interior repaint | From $3,500 | Walls, ceilings, trim and doors, from a few rooms to the whole house, with stain-blocking primer where water marks used to be. Typical range $3,500–$14,000. |
| Kitchen cabinet painting | From $4,500 | Doors sprayed off-site in a controlled space, boxes degreased and primed, two coats of urethane-modified enamel. Typical range $4,500–$9,500. |
| Exterior stucco repaint | From $6,000 | Low-pressure wash and mildewcide, cracks routed and filled, then elastomeric or high-build masonry coating at the specified thickness. Typical range $6,000–$15,000. |
| Popcorn ceiling removal | From $2,500 | Older texture tested for asbestos first, then contained, scraped, skim-coated and painted for flat, bright ceilings. Typical range $2,500–$8,000. |

## Flooring contractor

### Flooring & Tile  (`/services/flooring`)

| Service name | Price | Description |
|---|---|---|
| Luxury vinyl plank | No price | Waterproof rigid-core plank through living areas and bedrooms, run in one direction so it flows room to room. Typical range $6–$11 / sq ft installed. |
| Porcelain tile | No price | Large-format or wood-look porcelain over an uncoupling membrane, with leveling clips so edges sit flush. Typical range $11–$20 / sq ft installed. |
| Engineered wood | No price | A real wood wear layer on a stable core, over a barrier rated for slab-on-grade, once the slab tests dry enough. Typical range $12–$22 / sq ft installed. |
| Old tile & terrazzo removal | No price | Dust-controlled removal with shrouded tools and HEPA vacuums, thinset ground off, cracks treated, debris out the same day. Typical range $3–$6 / sq ft. |

## Sunroom contractor

### Lanai Enclosures  (`/services/lanai-enclosures`)

| Service name | Price | Description |
|---|---|---|
| Rescreen & repair | From $2,500 | New screen, splines and stainless fasteners on a sound frame, with bent members and loose gutters swapped where needed. Typical range $2,500–$8,000. |
| Engineered pool cage rebuild | From $16,000 | The old cage comes down and a new one goes up from sealed drawings for your wind zone, often taller and with heavier beams. Typical range $16,000–$45,000. |
| Under-roof lanai conversion | From $25,000 | One lanai wall rebuilt in block with storm-rated windows and a door under the existing screen enclosure, or a full conversion with glass or knee walls on the open sides. Typical range $25,000–$70,000. |
| Lanai remodel | From $12,000 | Keep it open-air but better: new floor and ceiling, fans and lights, and the old patio door upgraded to an impact slider. Typical range $12,000–$40,000. |

## Landscape designer / Patio builder

### Outdoor Living  (`/services/outdoor-living`)

| Service name | Price | Description |
|---|---|---|
| Outdoor & summer kitchens | From $15,000 | Block or steel-frame island, UV-stable stone or porcelain top, 304 stainless appliances, and gas and power run to code. Typical range $15,000–$60,000. |
| Paver patios & pool decks | No price | Compacted rock or shell base, edge restraint and polymeric sand, in travertine, concrete or porcelain that stays cooler underfoot. Typical range $15–$32 / sq ft. |
| Pergolas | From $8,000 | Powder-coated aluminum or treated wood on engineered footings, with fixed or adjustable louvers, lights and fans. Typical range $8,000–$30,000. |
| Insulated patio covers | From $12,000 | A solid, rain-proof roof with a finished ceiling, recessed lights and fan pre-wire, flashed and engineered to the house. Typical range $12,000–$40,000. |

Всего услуг: 52.
