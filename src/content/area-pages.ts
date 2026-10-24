/**
 * Extra content for the redesigned city pages (src/app/service-areas/[slug]/page.tsx),
 * keyed by area slug. Base copy, ZIPs and FAQs stay in src/content/areas.ts.
 * Map coordinates are real lat/lon; AreaMap projects them onto a schematic SVG.
 */

export type MapPoint = { name: string; lat: number; lon: number; slug?: string; label?: "left" | "right" };

/** Cities with a page, plus places where we have finished real jobs. */
export const mapCities: MapPoint[] = [
  { name: "Port Charlotte", lat: 26.976, lon: -82.09, slug: "port-charlotte" },
  { name: "North Port", lat: 27.044, lon: -82.236, slug: "north-port" },
  { name: "Punta Gorda", lat: 26.929, lon: -82.045, slug: "punta-gorda" },
  { name: "Englewood", lat: 26.962, lon: -82.352, slug: "englewood", label: "left" },
  { name: "Venice", lat: 27.1, lon: -82.454, slug: "venice", label: "left" },
  { name: "Sarasota", lat: 27.336, lon: -82.531, slug: "sarasota", label: "right" },
  { name: "Fort Myers", lat: 26.64, lon: -81.872, slug: "fort-myers", label: "left" },
  { name: "Cape Coral", lat: 26.563, lon: -81.95, slug: "cape-coral", label: "left" },
  { name: "Lakewood Ranch", lat: 27.42, lon: -82.4, slug: "lakewood-ranch" },
  { name: "Siesta Key", lat: 27.267, lon: -82.546, slug: "siesta-key", label: "right" },
  { name: "Bonita Springs", lat: 26.34, lon: -81.78, slug: "bonita-springs", label: "left" },
];

export const mapJobs: MapPoint[] = [
  { name: "Parrish", lat: 27.587, lon: -82.425 },
];

export type AreaExtra = {
  lead: string;
  permits: string;
  built: string;
  neighborhoods: string[];
  /** project.city values that count as local or nearby work, in priority order */
  jobCities: string[];
};

export const areaExtras: Record<string, AreaExtra> = {
  "port-charlotte": {
    lead: "Port Charlotte is home: our office, our crew and most of our jobs are a short drive down US-41, Veterans Boulevard or Kings Highway. Mostly 1960s–1980s block homes, 165 miles of canals, and every storm since Charley.",
    permits: "Charlotte County Community Development",
    built: "Mostly 1960s–1980s CBS, newer since 2000",
    neighborhoods: ["Deep Creek", "Harbor Heights", "Murdock", "El Jobean", "Charlotte Harbor", "South Gulf Cove"],
    jobCities: ["Port Charlotte", "North Port", "Venice"],
  },
  "north-port": {
    lead: "One of the fastest-growing cities in Florida, mostly 1990s-and-newer builder-grade block homes on quarter-acre lots: the natural place for kitchen and bath upgrades, lanai enclosures and impact glass.",
    permits: "City of North Port Building Division",
    built: "Mostly 1990s and newer, big wave since 2015",
    neighborhoods: ["Wellen Park", "Heron Creek", "Bobcat Trail", "Warm Mineral Springs"],
    jobCities: ["North Port", "Port Charlotte", "Venice"],
  },
  "punta-gorda": {
    lead: "Right across the Peace River from us: sailboat-access canals in Punta Gorda Isles and Burnt Store Isles, a historic district with early-1900s frame homes, and roofs and windows from the post-Charley rebuild that are now due.",
    permits: "City of Punta Gorda, or Charlotte County outside city limits",
    built: "Historic frame homes to 1970s–2000s canal homes",
    neighborhoods: ["Punta Gorda Isles", "Burnt Store Isles", "Burnt Store Lakes", "Historic District", "Seminole Lakes"],
    jobCities: ["Port Charlotte", "North Port"],
  },
  englewood: {
    lead: "A town split by a county line, with 1950s cottages near Lemon Bay, Rotonda West's canals and elevated homes on Manasota Key. Helene's surge and Milton's wind in 2024 left a lot of rebuilding to do.",
    permits: "Sarasota County north of the line, Charlotte County south of it",
    built: "1950s cottages to 2000s block homes",
    neighborhoods: ["Rotonda West", "Manasota Key", "Grove City", "Placida", "Englewood East", "Lemon Bay"],
    jobCities: ["Venice", "North Port", "Port Charlotte"],
  },
  venice: {
    lead: "Venice Island's 1920s Mediterranean homes, canal-side block ranches in Venice Gardens and South Venice, and newer gated communities east of I-75. Many owners are seasonal, so we work and report while you are up north.",
    permits: "City of Venice, or Sarasota County outside city limits",
    built: "1920s Mediterranean to 2000s gated communities",
    neighborhoods: ["Venice Island", "Venice Gardens", "South Venice", "Nokomis", "Wellen Park", "Jacaranda"],
    jobCities: ["Venice", "Sarasota", "Sarasota County", "North Port"],
  },
  sarasota: {
    lead: "Several of our earliest reviews came from Sarasota homeowners, and many of our finished window and door jobs are in Sarasota County, from a waterfront new build on Siesta Key to arched transoms in Lakewood Ranch. Homes here run from mid-century ranches to new construction.",
    permits: "City of Sarasota, Sarasota County, or Manatee County in north Lakewood Ranch",
    built: "Mid-century ranches to new waterfront builds",
    neighborhoods: ["Gulf Gate", "South Gate", "Palmer Ranch", "Siesta Key", "Lakewood Ranch", "Bee Ridge"],
    jobCities: ["Sarasota", "Sarasota County", "Siesta Key", "Lakewood Ranch", "Manatee County"],
  },
  "fort-myers": {
    lead: "Some of the oldest homes in Southwest Florida along McGregor Boulevard, 1970s–80s gated golf communities in south Fort Myers, and thousands of homes still recovering from Ian's surge along the Caloosahatchee.",
    permits: "City of Fort Myers, or Lee County outside city limits",
    built: "1920s–1950s historic to 1970s–80s gated communities",
    neighborhoods: ["McGregor", "Iona", "Whiskey Creek", "Cypress Lake", "Gateway", "San Carlos Park"],
    jobCities: ["Bonita Springs"],
  },
  "cape-coral": {
    lead: "More than 400 miles of canals, almost all single-story block homes, and projects that are as much about the pool cage, the slider to the deck and the glass facing the water as about the house.",
    permits: "City of Cape Coral Department of Community Development",
    built: "1960s–70s southeast Cape to 2000s–2020s north and west",
    neighborhoods: ["Southeast Cape", "Cape Harbour", "Yacht Club", "Pelican", "Northwest Cape", "Burnt Store corridor"],
    jobCities: ["Bonita Springs"],
  },
  "lakewood-ranch": {
    lead: "A master-planned community built out from the mid-1990s across the Manatee–Sarasota line: solid block homes with builder-grade windows, kitchens and lanais, and design review on anything you can see from the street.",
    permits: "Manatee County (north) or Sarasota County (south)",
    built: "Mid-1990s to new construction",
    neighborhoods: ["Country Club", "Greenbrook", "Summerfield", "Riverwalk", "Waterside", "Lakewood National"],
    jobCities: ["Lakewood Ranch", "Manatee County", "Parrish", "Sarasota", "Sarasota County"],
  },
  "bonita-springs": {
    lead: "Older block homes near the Imperial River, gated golf communities from the 1980s on, and many homes still recovering from Ian's surge. One of our own window replacement jobs is right here.",
    permits: "City of Bonita Springs, or Lee County outside city limits",
    built: "Older cottages to 1980s–2000s gated communities",
    neighborhoods: ["Bonita Beach", "Imperial River", "Pelican Landing", "Bonita Bay", "Spanish Wells", "Downtown Bonita"],
    jobCities: ["Bonita Springs"],
  },
  "siesta-key": {
    lead: "A barrier island with mid-century cottages, elevated waterfront new builds and beach condos, where wind exposure, salt air and flood rules shape every project. Our own job here: impact windows and multi-panel sliders on a canal-front new build.",
    permits: "Sarasota County Planning and Development Services",
    built: "Mid-century cottages to elevated new builds and condos",
    neighborhoods: ["Siesta Village", "Crescent Beach", "Point of Rocks", "Bay Island", "Turtle Beach"],
    jobCities: ["Siesta Key", "Sarasota", "Sarasota County"],
  },
};
