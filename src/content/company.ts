import { site } from "./site";

/**
 * Company-wide copy shared by the bands in src/components/bands.
 * Facts only from site.ts / about.ts (license, ratings, founding year).
 * Written for Prestigious; mirrors the structure of the reference site, never its wording.
 */

export type TitledText = { title: string; text: string };

/** "Promises We Put in Writing First" */
export const promises: TitledText[] = [
  {
    title: "A written price that holds for 90 days",
    text: "Your estimate is itemized line by line and stays good for 90 days. Take time to plan, compare and budget; the number does not move while you think it over.",
  },
  {
    title: "One person who answers for the job",
    text: "Tim prices the work and runs it start to finish. You get one phone number, and the person who made the promise is the one who picks up.",
  },
  {
    title: "Permits pulled, every time",
    text: "If the work needs a permit, we pull it under our own license and book every inspection. We never ask you to file as an owner-builder for our work.",
  },
  {
    title: "No surprise charges",
    text: "If opening the walls reveals something new, you get a written change order showing the cost before any added work starts. Nothing is added unless you sign.",
  },
  {
    title: "A clean house at the end of every day",
    text: "Floors protected, dust contained, debris hauled off. You should be able to cook dinner and walk through your home after the crew leaves each afternoon.",
  },
  {
    title: "A walkthrough before the final invoice",
    text: "We walk the finished work with you, write the punch list together and close every item. The last bill comes after you sign off, not before.",
  },
];

/** Eight reasons homeowners pick us — used on /services and /about */
export const whyUs: TitledText[] = [
  {
    title: "State-certified contractor",
    text: `Florida Certified Residential Contractor ${site.license}. Valid statewide and easy to verify on myfloridalicense.com.`,
  },
  {
    title: "Our own crew on site",
    text: "The people who install your windows or tile your shower work for us. We know who is in your house every day.",
  },
  {
    title: "Owner-run, family-owned",
    text: `Founded in Port Charlotte in ${site.founded} by two installers. The owners still price and run every job.`,
  },
  {
    title: "Built for Gulf Coast weather",
    text: "Impact-rated openings, product approvals and current Florida Building Code wind loads, because hurricane season comes every year.",
  },
  {
    title: "Rated by real neighbors",
    text: `${site.ratings.google.score} on Google, ${site.ratings.yelp.score} on Yelp and an ${site.ratings.bbb.grade} from the Better Business Bureau, earned job by job.`,
  },
  {
    title: "Itemized, written estimates",
    text: "Every material, allowance and labor line is spelled out, so you can compare us fairly against anyone else.",
  },
  {
    title: "Permits and inspections handled",
    text: "Charlotte, Sarasota or Lee County — we know the building departments and close every permit out.",
  },
  {
    title: "Workmanship warranty in writing",
    text: "When the job is done you get a written warranty on our work, plus the manufacturer coverage on the products.",
  },
];

/** "Start Now, Spread the Cost Out" — 3 steps */
export const financingSteps: TitledText[] = [
  {
    title: "Ask during your estimate",
    text: "Bring up financing during the visit. We can break the written price into monthly payments so you see them before you commit.",
  },
  {
    title: "Finance all of it or just part",
    text: "Some homeowners finance the whole project, others pay a portion up front and spread out the rest. You choose the split that fits.",
  },
  {
    title: "The same price either way",
    text: "Financing changes how you pay, not what the job costs. The itemized number on your estimate stays the same, subject to credit approval.",
  },
];

/** "One Call, Three Simple Steps From Here." — /contact */
export const contactNext: TitledText[] = [
  {
    title: "You call or send the form",
    text: "Tell us what you want to change and where the house is. A short description and a couple of photos are plenty to start.",
  },
  {
    title: "We call you back and book a visit",
    text: "A real person from our team returns your message, usually the same business day, and sets a time to come out.",
  },
  {
    title: "You get a written, itemized estimate",
    text: "We measure, look at the conditions behind the problem and send a line-by-line estimate. Free, with no pressure to sign.",
  },
];

export const reviewsHeadline = `${site.ratings.google.score} stars on Google from Southwest Florida homeowners.`;

export const areasHeadline = "Serving Charlotte, Sarasota and Lee Counties";
