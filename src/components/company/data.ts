import type { Faq } from "@/content/types";

/* ------------------------------------------------------------------
   Page-level copy for the company pages (/process, /financing,
   /warranty, /contact, /free-estimate, /privacy, /terms).
   Plain data, no JSX.
------------------------------------------------------------------- */

export type Stage = {
  n: string;
  title: string;
  when: string;
  we: string[];
  you: string;
};

/** /process — the full 8-stage job, from first call to warranty. */
export const processStages: Stage[] = [
  {
    n: "01",
    title: "Free in-home estimate",
    when: "Usually within 48 hours of your call",
    we: [
      "Walk the house with you and listen to what you want to change",
      "Measure, photograph and check what is behind the problem (moisture, framing, wiring age)",
      "Flag permit, HOA and flood-zone issues before they cost you money",
    ],
    you: "Be home for about an hour. Show us the rooms, the wish list and anything that has bothered you about the house.",
  },
  {
    n: "02",
    title: "Written, itemized scope",
    when: "Usually within a week of the visit",
    we: [
      "Send a line-by-line estimate: labor, materials, allowances, permits, cleanup",
      "Mark every allowance (tile, fixtures, cabinets) so you know what is a placeholder",
      "Walk you through the numbers by phone or in person, and revise as often as you need",
    ],
    you: "Read it, ask questions, and tell us what to cut or add. Compare it with other bids line for line.",
  },
  {
    n: "03",
    title: "Contract & schedule",
    when: "When you are ready — the price holds for 90 days",
    we: [
      "Turn the final scope into a fixed-price contract with a payment schedule tied to progress",
      "Include the Florida Homeowners' Construction Recovery Fund notice required by state law",
      "Give you a target start date and an estimated duration in weeks",
    ],
    you: "Sign the contract, pay the deposit, and pick your selections or the date you will have them.",
  },
  {
    n: "04",
    title: "Permits & materials",
    when: "Typically 2–6 weeks, depending on the county and the job",
    we: [
      "Draw up and submit permit applications to the county or city building department",
      "Get HOA or condo association approval packets together when needed",
      "Order windows, doors, cabinets and long-lead items and track delivery dates",
    ],
    you: "Sign and record the Notice of Commencement when the permit requires it. Approve any HOA paperwork.",
  },
  {
    n: "05",
    title: "Demo & rough-in",
    when: "First days to first weeks on site",
    we: [
      "Protect floors, furniture and landscaping; set up dust walls where we work indoors",
      "Demolish, haul away debris, and repair hidden damage only after you approve the change in writing",
      "Run framing, plumbing, electrical and HVAC changes to code",
    ],
    you: "Clear the work area and keep pets and kids out of it. Answer change-order questions within a day or two.",
  },
  {
    n: "06",
    title: "Inspections",
    when: "At each stage the permit calls for",
    we: [
      "Schedule every inspection and meet the inspector on site",
      "Fix anything flagged before we cover it up — nothing gets closed in uninspected",
      "Send you photos and the inspection result after each one",
    ],
    you: "Provide access on inspection days. That's it — the paperwork is ours.",
  },
  {
    n: "07",
    title: "Finishes",
    when: "The last third of the job",
    we: [
      "Install drywall, tile, cabinets, trim, paint, fixtures and hardware",
      "Check every finish against your selections and the contract",
      "Keep the site broom-clean at the end of each workday",
    ],
    you: "Visit at the milestones we suggest and tell us early if anything looks different than you pictured.",
  },
  {
    n: "08",
    title: "Walkthrough & warranty",
    when: "Final week",
    we: [
      "Walk every room with you and write a punch list together",
      "Close the punch list, pass the final inspection and close the permit",
      "Hand over manufacturer warranties, care instructions and our written workmanship warranty",
    ],
    you: "Walk the job with us, sign off on the punch list, and make the final payment once you are satisfied.",
  },
];

/** /process — "What we need from you". */
export const needFromYou: string[] = [
  "A decision-maker at the estimate (both owners if two names are on the deed)",
  "HOA or condo rules and the management company contact, if you have one",
  "Your survey, past permits or plans if you have them — not required, but helpful",
  "Flood-zone or elevation certificate for additions and major remodels",
  "Selections (tile, fixtures, cabinets, colors) by the dates in your schedule",
  "A clear path to the work area and a spot for the dumpster or trailer",
  "Insurance claim number and adjuster report for storm or water-damage jobs",
  "Quick answers on change orders so the crew does not have to stop",
];

/* ---------------------------- /financing ---------------------------- */

/** /financing — four-step "how paying over time works", in the reference's order. */
export const financingPlanSteps = [
  {
    n: "01",
    kicker: "During your estimate",
    title: "See a Monthly Figure Before You Commit",
    text: "Ask about financing during the free in-home visit. We set the itemized price beside the lender's options, so you can see what the job costs per month before you commit. The lender decides approval, rate and term, subject to credit.",
  },
  {
    n: "02",
    kicker: "The whole job or a share",
    title: "Finance All of It, or Only Some",
    text: "Cover part from savings or an insurance check and finance what is left, or put the entire project on a plan. We show you how each split changes the monthly amount so you can pick what fits.",
  },
  {
    n: "03",
    kicker: "Check or plan",
    title: "One Price, However You Pay",
    text: "Financing changes how you pay, not what the work costs. The written number on your estimate is the same whether you finance it or write us a check.",
  },
  {
    n: "04",
    kicker: "No rush",
    title: "Sign at the Table, or Sleep On It",
    text: "If the payment works, sign during the visit and we start on permits. If you want time, keep the itemized estimate. Our price holds for 90 days.",
  },
];

export const qualifyingProjects: string[] = [
  "Kitchen and bathroom remodels",
  "Whole-home renovations",
  "Impact windows and doors",
  "Lanai enclosures",
  "Home additions and Florida rooms",
  "Siding, stucco and exterior painting",
  "Storm and water-damage rebuilds (including the gap insurance does not cover)",
];

export const paymentSchedule = [
  { stage: "Contract signed", detail: "Deposit to reserve your start date and order materials." },
  { stage: "Materials on site / work starts", detail: "Progress payment when demo begins or major materials are delivered." },
  { stage: "Rough-in inspection passed", detail: "Progress payment once the work behind the walls is inspected and approved." },
  { stage: "Substantial completion", detail: "Progress payment when finishes are in and the punch list is written." },
  { stage: "Final inspection & walkthrough", detail: "Final payment only after the permit is closed and you sign off." },
];

export const financingFaqs: Faq[] = [
  {
    q: "Do you offer financing?",
    a: "Yes. Financing is available upon credit approval through third-party lenders. We help you through the application, but the lender makes the credit decision and sets the rate and terms.",
  },
  {
    q: "What interest rate will I get?",
    a: "That depends on the lender, the plan you choose and your credit. We do not set or advertise rates. You will see the exact rate, term and monthly payment from the lender before you accept anything.",
  },
  {
    q: "Does applying hurt my credit?",
    a: "Many lenders start with a soft credit check to show you options, and only run a hard inquiry when you accept a plan. Ask the lender to confirm before you apply.",
  },
  {
    q: "Is there a minimum project size?",
    a: "Lenders set their own minimums. Most remodeling, window and lanai projects we quote qualify. Ask us at the estimate and we will tell you what applies to your job.",
  },
  {
    q: "Can I combine financing with insurance money?",
    a: "Yes. On storm and water-damage jobs, many homeowners use the insurance payout for the covered work and finance the upgrades or the gap. We itemize the estimate so both are easy to separate.",
  },
  {
    q: "Do I pay more if I finance?",
    a: "Our contract price is the same whether you pay cash, check or finance. Any interest or fees are between you and the lender and are disclosed by them.",
  },
];

/* ---------------------------- /warranty ---------------------------- */

export const warrantyFaqs: Faq[] = [
  {
    q: "How long does your workmanship warranty last?",
    a: "The term is written into your contract and depends on the scope. A bathroom, a set of impact windows and an interior repaint wear differently, so we put the exact coverage for your job on paper before you sign rather than quoting one number for everything.",
  },
  {
    q: "Who do I call if something goes wrong?",
    a: `Us. Call or email the office, describe what you see and send a few photos. You do not have to track down a subcontractor or a manufacturer on your own.`,
  },
  {
    q: "What if the problem is the product, not the installation?",
    a: "We still come out and look. If a window, fixture or finish material failed on its own, we document it and file the claim with the manufacturer for you, then handle the swap when the replacement arrives.",
  },
  {
    q: "Do I need to register anything myself?",
    a: "Usually not. We register the products that require it and hand you the warranty cards, model numbers and product approval (NOA) numbers at the final walkthrough.",
  },
  {
    q: "Does someone else working on it void the warranty?",
    a: "Only for the part they changed. If another contractor alters or repairs something we built, that portion is no longer ours to warranty. The rest of your project stays covered under the contract terms.",
  },
];

export const warrantyCovered: string[] = [
  "Defects in our installation and workmanship on the work listed in your contract",
  "Leaks at windows, doors and other openings we installed, when caused by our installation",
  "Tile, grout and setting failures caused by improper installation (cracked or loose tile, failed shower pans)",
  "Cabinets, trim and doors that we installed coming out of level, plumb or alignment",
  "Plumbing and electrical connections we made",
  "Stucco, siding and paint failures traced to our surface prep or application",
];

export const manufacturerWarranties: { title: string; text: string }[] = [
  {
    title: "Impact windows & doors",
    text: "Frame, glass and hardware warranties come from the manufacturer. We register the product where required and give you the paperwork with model and NOA numbers.",
  },
  {
    title: "Cabinets, fixtures & appliances",
    text: "Cabinet boxes, faucets, valves, toilets and appliances are covered by their makers. We help you file the claim and handle the swap when a part fails.",
  },
  {
    title: "Flooring, paint & finishes",
    text: "Flooring wear layers, paints and sealers carry the manufacturer's terms. We keep the product names and colors on file so warranty claims are easy.",
  },
];

export const warrantyClaimSteps = [
  {
    n: "01",
    title: "Call or email us",
    text: "Tell us what you see and send a few photos. Have your address or contract date handy.",
  },
  {
    n: "02",
    title: "We look at it",
    text: "We call you back, schedule a visit, and tell you whether it is our workmanship, a manufacturer issue, or maintenance.",
  },
  {
    n: "03",
    title: "We fix it or file it",
    text: "Workmanship issues we repair at no charge. Product failures we document and file with the manufacturer for you.",
  },
];

export const warrantyExclusions: string[] = [
  "Normal wear and tear, fading and weathering",
  "Hairline cracks from normal settling, stucco movement or wood shrinkage",
  "Damage from hurricanes, floods, fire, lightning or other acts of nature",
  "Work changed or repaired by others after we finish",
  "Materials or fixtures supplied by the homeowner",
  "Problems from skipped maintenance (caulk, grout sealing, AC condensate lines, gutters)",
  "Natural variation in stone, wood and tile color or grain",
  "Pre-existing conditions outside our contracted scope",
];

/* ------------------------- /contact, /free-estimate ------------------------- */

export const nextSteps = [
  { n: "01", title: "We call you back", text: "Within one business day. We ask a few questions and pick a visit time that suits your schedule." },
  { n: "02", title: "In-home visit", text: "About an hour. We walk the house, measure, and talk through options and budget." },
  { n: "03", title: "Written estimate", text: "An itemized price in your inbox, usually within a week. No pressure, no fee." },
];

export const estimateBenefits: string[] = [
  "Free, no-obligation visit, anywhere from Sarasota and Lakewood Ranch down to Fort Myers and Bonita Springs",
  "Written, itemized estimate: labor, materials, allowances and permits",
  "Fixed price good for 90 days",
  "Licensed Florida contractor — we pull every permit",
  "Honest advice on what to fix first and what can wait",
  "Financing available upon credit approval",
];

/* ---------------------------- /privacy, /terms ---------------------------- */

export type LegalSection = { title: string; body: string[] };

export const LEGAL_UPDATED = "October 20, 2026";
export const LEGAL_UPDATED_ISO = "2026-10-20";
