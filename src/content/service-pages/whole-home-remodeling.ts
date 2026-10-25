/**
 * Content for the redesigned Whole-Home Remodeling service page
 * (src/app/services/whole-home-remodeling/page.tsx). No client whole-home photos
 * yet: every image here is stock and is labelled "Illustrative" on the page.
 * Prices and durations must stay consistent with src/content/services/interior-core.ts.
 */
import { photos } from "../photos";
import type { Photo } from "../types";

function stock(id: string): Photo {
  const p = photos.find((x) => x.id === id);
  if (!p) throw new Error(`Missing stock photo ${id}`);
  return p;
}

const P = {
  bright: stock("whole-home-01"),
  updated: stock("whole-home-02"),
  open: stock("whole-home-03"),
  woodFloor: stock("whole-home-05"),
  gutted: stock("whole-home-06"),
  ladder: stock("whole-home-08"),
  drywall: stock("whole-home-09"),
};

export type HouseEra = { label: string; years: string; checks: { title: string; text: string }[] };

export const wholeHomePage = {
  seoTitle: "Whole-Home Remodeling Port Charlotte FL | One Contract",
  seoDescription:
    "Whole-home remodeling in Port Charlotte, North Port, Punta Gorda & Venice: kitchen, baths, floors and open layouts under one contract and one schedule.",
  hero: {
    eyebrow: "Kitchen · baths · floors · open layouts",
    title: "Whole-Home Remodeling in Port Charlotte & North Port",
    lead: "The kitchen is dated, both baths have the original tile, and the popcorn ceilings came with the house. We plan the whole house at once, price every room in writing, and build it with one crew on one schedule.",
    photos: [P.open, P.gutted, P.drywall] as Photo[],
    proof: [
      { value: "1", label: "contract, crew and schedule" },
      { value: "Often", label: "cheaper than room by room" },
      { value: "5.0", label: "Google rating" },
    ],
  },
  products: [
    {
      title: "Whole-home refresh",
      text: "No walls move. New floors from room to room, popcorn tested and removed, new doors, trim, lighting and one paint palette.",
      photo: P.updated,
      price: "$45,000–$90,000",
      links: [{ label: "Renovation vs remodel", href: "/resources/renovation-vs-remodel-vs-restoration" }],
    },
    {
      title: "Kitchen, baths & floors",
      text: "The package most of our whole-home clients choose: a new kitchen, two bathrooms taken to the studs and one continuous floor.",
      photo: P.woodFloor,
      price: "$95,000–$170,000",
      links: [{ label: "What it costs in Florida", href: "/resources/cost-to-remodel-a-house-in-florida" }],
    },
    {
      title: "Wall removal & open concept",
      text: "The walls between kitchen, dining and living come out. Load path checked, beam sized by an engineer, inspected before it is covered.",
      photo: P.bright,
      price: "$25,000–$60,000 plus finishes",
      links: [{ label: "Remodeling a 1980s ranch", href: "/resources/remodeling-a-1980s-florida-ranch-house" }],
    },
    {
      title: "Full gut renovation",
      text: "Down to block and studs: drains scoped and replaced, wiring to code, insulation, new layout and every finish, often with impact openings.",
      photo: P.ladder,
      price: "$180,000–$350,000+",
      links: [{ label: "Whole-house checklist", href: "/resources/whole-house-renovation-checklist-florida" }],
    },
  ],
  why: [
    {
      title: "One round of permits and setup",
      text: "Each separate project has its own mobilization, permits, dumpster and inspections. Doing the house as one project is often cheaper than room by room, because it typically saves on mobilization, permits and dumpsters.",
    },
    {
      title: "Finishes that match",
      text: "One floor with no thresholds, one trim profile, one paint palette and one hardware finish, instead of five rooms from five different years.",
    },
    {
      title: "One season of dust",
      text: "You live through the disruption once, on a dated schedule, instead of every spring for the next five years.",
    },
  ],
  eraIntro:
    "Most homes in Port Charlotte, North Port and Punta Gorda are concrete block on a slab, built between the 1970s and the early 2000s. Each era has its own usual suspects. Pick yours to see what we look at during the free walkthrough, before anything is priced.",
  eras: [
    {
      label: "1970s",
      years: "Built 1970–1979",
      checks: [
        { title: "Cast-iron drains under the slab", text: "Often scaled or cracked after 50 years. We camera-scope them before quoting kitchen and bath work." },
        { title: "Galvanized or polybutylene supply lines", text: "Both are known to fail. Where walls open, we replace them with PEX and new shutoffs." },
        { title: "Aluminum branch wiring in some homes", text: "Needs a specific repair method at every connection. We check outlets and the panel at the first visit." },
        { title: "Popcorn ceilings and old flooring adhesive", text: "Can contain asbestos you cannot see. Work pauses for a lab test before anyone disturbs them." },
        { title: "Lead paint (before 1978)", text: "Painted surfaces call for lead-safe work practices during demolition." },
        { title: "Undersized electrical panel", text: "Often cannot carry a modern kitchen. A panel upgrade is priced into the number, not found mid-job." },
      ],
    },
    {
      label: "1980s",
      years: "Built 1980–1989",
      checks: [
        { title: "Cast-iron drains under the slab", text: "Still common in this era. Scoped before we commit to moving a toilet or sink." },
        { title: "Polybutylene supply lines", text: "Widely installed in this period and prone to failing at the fittings. Replaced with PEX where walls open." },
        { title: "Popcorn ceilings", text: "Tested for asbestos before removal; most homeowners want them gone in a whole-home job." },
        { title: "Soffits hiding ductwork", text: "Kitchen soffits often carry ducts, so removing them means rerouting HVAC. We plan that in the layout." },
        { title: "Panel capacity", text: "Many panels from this era are tight for today's kitchen circuits. Checked at the walkthrough." },
        { title: "Original windows", text: "Pre-2002 openings were not built to today's hurricane code. Replacing them fits the same permit cycle." },
      ],
    },
    {
      label: "1990s",
      years: "Built 1990–2001",
      checks: [
        { title: "Polybutylene in early-90s homes", text: "Still possible until the mid-90s. We look at the water heater and under sinks for gray pipe." },
        { title: "Garden tubs and dated primary baths", text: "Most clients turn the tub into a larger shower, which often means moving a drain through the slab." },
        { title: "Particleboard cabinets", text: "Swollen boxes at the sink and dishwasher are common after 30 years of humidity." },
        { title: "Non-impact windows and sliders", text: "Homes before the 2002 Florida Building Code usually need impact openings to stop putting up shutters." },
        { title: "Aging AC and ductwork", text: "If ducts move with a wall or soffit, it is a good time to check the system as a whole." },
      ],
    },
    {
      label: "2000s+",
      years: "Built 2002 or later",
      checks: [
        { title: "Builder-grade finishes", text: "Cabinets, counters and flooring are usually the first things to go; the bones tend to be solid." },
        { title: "Open-concept tweaks", text: "Walls are fewer, so projects focus on the kitchen island, lighting and flooring continuity." },
        { title: "Water heater and AC age", text: "Original units are reaching the end of their life, so we flag them before finishes go in." },
        { title: "Flood zone rules", text: "Newer homes in flood zones may sit at the required elevation already, but the 50% rule still applies to big remodels." },
      ],
    },
  ] satisfies HouseEra[],
  living: [
    {
      title: "A working bathroom, always",
      text: "In homes with two baths we finish one before starting the other. With one bath, getting a working toilet back comes first.",
    },
    {
      title: "A temporary kitchen",
      text: "A sink and counter set up in another room while cabinets and stone are being installed, so the microwave and coffee maker keep working.",
    },
    {
      title: "Dust walls and sealed rooms",
      text: "Active areas are sealed with zip walls, floors are covered, and the crew cleans up at the end of every day.",
    },
    {
      title: "When to stay elsewhere",
      text: "A full gut is the exception. Most families stay elsewhere for a few months, and the job finishes faster without working around them.",
    },
  ],
  compare: {
    columns: ["One whole-home project", "Room by room over several years"],
    rows: [
      { label: "Permits, setup and dumpsters", values: ["Once", "Every time"] },
      { label: "Total cost", values: ["Often less: shared mobilization, permits and dumpsters", "Higher, and climbs with each project"] },
      { label: "Finishes", values: ["One floor, one trim, one palette", "Rooms from different years that never quite match"] },
      { label: "Living with construction", values: ["One planned stretch, on a dated schedule", "Dust again with every project"] },
      { label: "Hidden problems", values: ["Found and priced once, up front", "Found again each time a wall opens"] },
    ],
    note: "Phasing still makes sense when the budget needs it. We can plan the whole house now and build it in stages, with the most important rooms first.",
    link: { label: "Whole-house renovation checklist for Florida", href: "/resources/whole-house-renovation-checklist-florida" },
  },
  learn: [
    "cost-to-remodel-a-house-in-florida",
    "whole-house-renovation-checklist-florida",
    "remodeling-a-1980s-florida-ranch-house",
    "renovation-vs-remodel-vs-restoration",
    "design-build-vs-general-contractor-vs-handyman",
    "permit-for-bathroom-or-kitchen-remodel-charlotte-county",
  ],
};
