import type { Step } from "./types";

/** Verified company facts (Sunbiz, DBPR, BBB, Google, Yelp – 20 Oct 2026). */
export const site = {
  name: "Prestigious Home Improvements",
  legalName: "Prestigious Home Improvements, Inc.",
  tagline: "Residential General Contractor · Southwest Florida",
  domain: "prestigiousimprovements.com",
  url: "https://www.prestigiousimprovements.com",
  phone: "(941) 223-4875",
  phoneHref: "tel:+19412234875",
  email: "Office@prestigiousimprovements.com",
  address: {
    city: "Port Charlotte",
    state: "FL",
    zip: "33953",
    county: "Charlotte County",
    geo: { lat: 27.0221, lng: -82.1921 },
  },
  hours: "Mon–Fri 8:00 AM – 6:00 PM · Sat by appointment",
  license: "CRC1327831",
  licenseLabel: "Florida Certified Residential Contractor CRC1327831",
  founded: 2022,
  owners: [
    { name: "Tim Fomin", role: "President & Co-Founder · Estimates & Project Management" },
    { name: "Vlad Filippov", role: "Co-Founder · Field Operations" },
  ],
  ratings: {
    google: { score: "5.0", count: 8, href: "https://www.google.com/maps/search/Prestigious+Home+Improvements+Inc+Port+Charlotte+FL" },
    yelp: { score: "5.0", count: 3, href: "https://www.yelp.com/biz/prestigious-home-improvements-port-charlotte" },
    bbb: { grade: "A+", accreditedSince: "2026", href: "https://www.bbb.org/us/fl/port-charlotte/profile/construction/prestigious-home-improvements-inc-0653-90459781" },
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61575178593681",
    instagram: "https://www.instagram.com/prestigious_improvements/",
  },
  /** cities we list everywhere */
  serviceAreas: [
    "Port Charlotte",
    "North Port",
    "Punta Gorda",
    "Englewood",
    "Venice",
    "Sarasota",
    "Fort Myers",
    "Cape Coral",
    "Lakewood Ranch",
    "Bonita Springs",
    "Siesta Key",
  ],
  /** one phrase for the service-area span, used in copy everywhere */
  serviceSpan: "from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs",
  counties: ["Charlotte County", "Sarasota County", "Lee County", "Manatee County"],
  /** Referral reward — PLACEHOLDER, confirm amount with the client (OPEN-QUESTIONS.md) */
  referral: { reward: "$250", rewardNote: "paid after your friend's project is complete" },
  trust: [
    "Licensed & insured · CRC1327831",
    "Free in-home estimate",
    "Written workmanship warranty",
    "Financing available",
  ],
  stats: [
    { value: "5.0", label: "Google rating" },
    { value: "A+", label: "BBB accredited" },
    { value: "2022", label: "Family-owned since" },
    { value: "Every", label: "Required permit pulled by us" },
  ],
} as const;

export const processSteps: Step[] = [
  {
    n: "01",
    title: "Free in-home estimate",
    kicker: "Usually within 48 hours",
    text: "We walk the house with you, measure, listen to what you want to change, and leave you with a written, itemized estimate. No pressure, no fee.",
  },
  {
    n: "02",
    title: "Fixed price, written scope",
    kicker: "Good for 90 days",
    text: "Every line of work, every material and every allowance is in the contract before we start. Changes happen only in writing, approved by you first.",
  },
  {
    n: "03",
    title: "One crew, one person to call",
    kicker: "Tim runs the job",
    text: "We handle the permits, order the materials and install with our own crew. You get one phone number and updates at every milestone.",
  },
  {
    n: "04",
    title: "Final walkthrough & warranty",
    kicker: "Done when the punch list is closed",
    text: "We build the punch list together, close it out, pass the final inspection and hand you a written workmanship warranty.",
  },
];

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const nav = {
  services: [
    { label: "Impact Windows & Doors", href: "/services/impact-windows-doors" },
    { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
    { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
    { label: "Storm & Water Damage Rebuilds", href: "/services/storm-damage-rebuild" },
    { label: "Whole-Home Remodeling", href: "/services/whole-home-remodeling" },
    { label: "Home Additions & Florida Rooms", href: "/services/home-additions" },
    { label: "Lanai Enclosures", href: "/services/lanai-enclosures" },
    { label: "Exterior Remodeling & Stucco", href: "/services/exterior-remodeling" },
    { label: "Siding", href: "/services/siding" },
    { label: "Interior & Exterior Painting", href: "/services/painting" },
    { label: "Flooring & Tile", href: "/services/flooring" },
    { label: "Outdoor Living", href: "/services/outdoor-living" },
    { label: "Home Restoration", href: "/services/home-restoration" },
  ],
  /** Top-level menu. Items with `children` render as a dropdown in the header. */
  main: [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Resources", href: "/resources" },
    {
      label: "About",
      href: "/about",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about/team" },
        { label: "Reviews", href: "/reviews" },
        { label: "Careers", href: "/careers" },
        { label: "Refer Someone", href: "/referral" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],
  /** Secondary call-to-action link shown next to the main menu */
  estimateBuilder: { label: "Estimate Builder", href: "/estimate-builder" },
};
