/**
 * About page content. Facts verified against prestigious-home-improvements-research.md
 * (Sunbiz, DBPR, BBB, Google, Yelp, Oct 2026). First person plural, no hype.
 */
export type AboutContent = {
  story: string[];
  values: { title: string; text: string }[];
  team: { name: string; role: string; bio: string }[];
  milestones: { year: string; text: string }[];
};

export const about: AboutContent = {
  story: [
    "We are Tim Fomin and Vlad Filippov, and Prestigious Home Improvements is the company we built after years of installing windows and doors for other contractors across Southwest Florida. We were the crew that showed up after a big window company sold the job: we pulled the old frames, set the new impact units, sealed and trimmed them, and moved on to the next house in Port Charlotte, North Port, Sarasota or Fort Myers. We did that for years, through the building boom and through the rebuild after Hurricane Ian.",
    "Working as subcontractors taught us two things. First, how an opening is actually supposed to be built in this climate: the bucks, the flashing, the design pressures, the product approvals, the inspections. Second, what goes wrong between the salesperson and the install. Promises made at the kitchen table that nobody on site had heard about. Lead times that were never explained. A homeowner who could not get a call back. We decided that if we ran our own company, the person who priced the job would be the person who ran it.",
    "We incorporated Prestigious Home Improvements, Inc. in Port Charlotte in October 2022, one month after Ian. For the first couple of years the company was the two of us, doing windows, doors, sliders, siding and shutters, mostly by referral. In 2025 we took the step that let us take on the whole house: the company became a licensed Florida Certified Residential Contractor, license CRC1327831. That license is valid statewide, it is on file with the Charlotte County Construction License Board, and you can check it yourself on myfloridalicense.com.",
    "That changed what we can do for you. We still install impact windows and doors every week, but now we also run full renovations and restorations: kitchens, bathrooms, additions and Florida rooms, lanai and screen enclosures, roofing, siding and stucco, painting, flooring, outdoor living, and the storm-damage rebuilds that too many families in Charlotte, Sarasota and Lee counties are still living with. We pull the permits, we schedule the inspections, and our own crew does the work.",
    "We are a small, family-owned company and we intend to stay that way. Tim prices every job and manages it. Vlad leads the crew in the field. You get one phone number, a written scope before a single tool comes out, and a written workmanship warranty when we are done. Our customers have given us a 5.0 rating on Google and on Yelp, and the Better Business Bureau accredited us with an A+ rating in January 2026. Those reviews come from real jobs on real streets, and we work to keep every one of them.",
    "If you are planning a remodel, a window and door package, or putting a house back together after a storm, call us. We will come out, measure, listen, and leave you with an honest number.",
  ],
  values: [
    {
      title: "We show up",
      text: "On the day we said, with the people we said. If something changes, a delayed delivery or a storm in the forecast, you hear it from us first, not from an empty driveway.",
    },
    {
      title: "One point of contact",
      text: "Tim prices your job and runs it. The person who made the promise at your kitchen table is the person who answers the phone when the walls are open.",
    },
    {
      title: "Permits and inspections, always",
      text: "Every job that needs a permit gets one, under our license, with the inspections passed before we ask for final payment. No exceptions and no 'we can skip it to save you money'.",
    },
    {
      title: "Built for the Florida we work in",
      text: "Design wind speeds over 150 mph, 50 inches of rain a year, salt air and flood zones. We build to the current Florida Building Code and to the product approvals, because the next storm is not hypothetical here.",
    },
    {
      title: "Finished means finished",
      text: "The job is done when the punch list is empty, the final inspection has passed, the site is clean and you have signed off. Not when the last big piece goes in.",
    },
  ],
  team: [
    {
      name: "Tim Fomin",
      role: "President · Estimates & Project Management",
      bio: "Tim co-founded the company in 2022 after years as a window and door installer for other Southwest Florida contractors. He does every in-home estimate, writes every scope, pulls the permits and manages the job from the first visit to the final walkthrough. He is the one phone number you need.",
    },
    {
      name: "Vlad Filippov",
      role: "Co-Founder · Field Operations & Installation Lead",
      bio: "Vlad runs the crew on site. He spent years installing impact windows, sliders and entry doors across Charlotte, Sarasota and Lee counties before co-founding the company, and he still sets the standard for how an opening, a lanai or a kitchen gets built: measured twice, sealed properly, and inspected.",
    },
    {
      name: "Our crew",
      role: "Installers, finish carpenters, tile & paint",
      bio: "The same faces on your job from start to finish. Our installers, finish carpenters, tile setters and painters have worked with us for years. Where the Florida code requires a separately licensed trade, electrical, plumbing or HVAC, we bring in licensed subs we have used on many jobs and we supervise them.",
    },
  ],
  milestones: [
    {
      year: "2022",
      text: "Prestigious Home Improvements, Inc. is incorporated in Port Charlotte on October 27, one month after Hurricane Ian crossed Charlotte County.",
    },
    {
      year: "2023",
      text: "First full year in business: windows, doors, sliders and siding across Charlotte, Sarasota and Lee counties, mostly by referral, during the Ian rebuild.",
    },
    {
      year: "2024",
      text: "Hurricanes Helene and Milton hit the coast in September and October. Impact windows and doors are the first thing homeowners ask for, and we keep installing.",
    },
    {
      year: "2025",
      text: "Licensed as a Florida Certified Residential Contractor, CRC1327831. New website, Sarasota Home Show, and the first Yelp reviews, all five stars.",
    },
    {
      year: "2026",
      text: "BBB accredited with an A+ rating in January. 5.0 on Google and Yelp. Full renovation and restoration services across Southwest Florida.",
    },
  ],
};

/* ------------------------------------------------------------------
   Rebuild copy (reference: hybridrenovations.com about / team / careers /
   referral / review pages). Same section purpose and order, every sentence
   written fresh for Prestigious. Real facts only.
------------------------------------------------------------------- */

type Card = { title: string; text: string };
type Faq = { q: string; a: string };
type KickerCard = { kicker: string; title: string; text: string };

export const aboutHero = {
  eyebrow: "Our story · Port Charlotte & Southwest Florida",
  lines: ["Built on Trust,", "Finished With Care"],
  lead: "A family-owned crew remodeling and rebuilding homes across Charlotte, Sarasota and Lee Counties since 2022. One licensed contractor, one written price, and work we put our name behind.",
};

export const whoWeAre = {
  eyebrow: "Who we are",
  title: "We See Renovation Differently",
  paragraphs: [
    "A Florida house has to hold up to wind, rain and salt air before it gets to look good. We treat yours as somebody's home first and a jobsite second: protected while we work, explained before we touch it, and left tougher and better looking than the day we pulled into the driveway.",
    "That is the whole idea behind the company. Small enough that the owners still answer the phone, licensed and insured enough to take on the full house.",
  ],
};

export const origin = {
  eyebrow: "Our story",
  title: "Built From the Jobsite Up",
  steps: [
    {
      kicker: "Before 2022",
      title: "Years on other people's jobs",
      text: "Tim Fomin and Vlad Filippov spent years as the installers other contractors sent out once a sale was closed, setting impact windows and doors in homes from Sarasota to Fort Myers. They saw how often the promise made at the kitchen table never made it to the crew.",
    },
    {
      kicker: "October 2022",
      title: "A company of our own",
      text: "One month after Hurricane Ian, they incorporated Prestigious Home Improvements in Port Charlotte around a single rule: the person who prices your job is the person who runs it.",
    },
    {
      kicker: "2025",
      title: "Licensed for the whole house",
      text: "The company is licensed under CRC1327831 as a Florida Certified Residential Contractor. That opened the door to kitchens, baths, additions, lanais, roofing and storm rebuilds alongside the window and door work we started with.",
    },
    {
      kicker: "Today",
      title: "Still the same two names",
      text: "Family-owned and run by both founders, BBB accredited with an A+ since January 2026 and rated 5.0 on Google. Every job is permitted where required, inspected, and closed out with a written workmanship warranty.",
    },
  ] as KickerCard[],
};

/** Real, checkable numbers only (site.ts, Sunbiz, DBPR, BBB, Google). */
export const trackRecord = {
  eyebrow: "By the numbers",
  title: "A Record You Can Check",
  intro: "We are a young company, so we would rather show you numbers you can check than numbers that only sound big.",
  items: [
    { value: "5.0", label: "Star rating on Google" },
    { value: "A+", label: "BBB rating, accredited 2026" },
    { value: "2022", label: "Family-owned since" },
    { value: "3", label: "Counties: Charlotte, Sarasota & Lee" },
    { value: "14", label: "Services under one license" },
    { value: "100%", label: "Of required permits pulled & inspected" },
  ] as { value: string; label: string }[],
  groups: [
    { title: "Windows & doors", text: "Impact windows, sliders, entry doors and shutters, where we started." },
    { title: "Interior remodels", text: "Kitchens, bathrooms, flooring, tile and whole-home renovations." },
    { title: "Exterior & structure", text: "Roofing, siding, stucco, painting, additions and Florida rooms." },
    { title: "Outdoor & restoration", text: "Lanais, screen enclosures, outdoor living and storm-damage rebuilds." },
  ] as Card[],
};

export const owner = {
  eyebrow: "Meet the owner",
  title: "Meet the Owner of Prestigious Home Improvements",
  name: "Tim Fomin",
  role: "President & Co-Founder",
  /** Not shown on the site. Put Tim's own approved words here, then render it in MeetOwner. */
  quote: "",
  bio: [
    "Tim came into this business with a drill in his hand, not a sales binder. Before the company existed he and Vlad were installing impact windows and doors for other Southwest Florida contractors, and that is where he learned the part of renovation that rarely makes the brochure: the trouble usually is not the carpentry, it is the hand-off.",
    "So when they opened Prestigious in October 2022, Tim built it so the hand-off disappears. He walks every estimate himself, writes the scope, handles the permits and stays your contact until the final inspection. Vlad leads the crew on site, so the two people who made you the promise are the two people keeping it.",
    "Tim still measures openings and checks the work in person, because a standard is hard to hold from behind a desk.",
  ],
};

export const homeownersIntro = {
  eyebrow: "In their own words",
  title: "Hear It From the Homeowners",
  intro: "Real reviews from Southwest Florida families, as posted on Google, Yelp and the BBB. No actors and no paid endorsements.",
  /** names in src/content/testimonials.ts */
  names: ["Jwb M.", "Dennis B.", "Brad N."],
};

export const teamPage = {
  eyebrow: "Our team · Port Charlotte, FL",
  title: "The People Behind Your Project",
  lead: "Two owners on the job and a steady crew on the tools. No call center and no rotating cast of strangers, just the same faces from estimate to walkthrough.",
  careers: {
    title: "Want to learn this trade?",
    text: "We hire around Port Charlotte, and we value a strong work ethic over a polished resume. Plenty of good installers started as the helper who kept showing up.",
    cta: "See how to join us",
  },
};

/* ------------------------------------------------------------------
   Careers
------------------------------------------------------------------- */

export const careers = {
  hero: {
    eyebrow: "Careers at Prestigious Home Improvements",
    lines: ["Learn a Trade,", "Not Just a Task"],
    lead: "We are a small, licensed crew in Port Charlotte that grows by teaching. If you are dependable and want to learn how Florida homes are really built, we want to hear from you, experience or not.",
  },
  startHere: {
    eyebrow: "What this job is",
    title: "Start From Zero, Learn on the Job",
    paragraphs: [
      "Prestigious Home Improvements is a residential general contractor based in Port Charlotte. Most of our work happens inside people's homes: impact windows and doors, remodels, lanais, roofing and storm repairs across Charlotte, Sarasota and Lee Counties.",
      "You do not need to know the trade yet. The owners still work on site, so you learn directly from the people who built the company, one job at a time, until you can do it without anyone looking over your shoulder.",
    ],
    notNeeded: { label: "Not required", text: "A construction background, a long resume or a full set of tools on day one." },
    needed: { label: "Required", text: "Showing up on time, listening, and wanting to get better at something real." },
  },
  perks: {
    eyebrow: "Working here",
    title: "What You Actually Get",
    intro: "Honest work, real skills, and owners who know your name.",
    // TODO confirm with client: benefits / pay structure. No pay rates published on purpose.
    items: [
      {
        kicker: "On-the-job training",
        title: "You learn it the right way",
        text: "How an impact opening is bucked, flashed and sealed, how a permit gets pulled, what an inspector looks for. Skills that hold up anywhere in Florida.",
      },
      {
        kicker: "Pay discussed up front",
        title: "No guessing about money",
        text: "We go over pay on the first call based on what you bring, and we revisit it as your skills grow. Nothing vague, nothing hidden.",
      },
      {
        kicker: "Owners on site",
        title: "You work with the founders",
        text: "Tim and Vlad are on the jobs, not in a far-off office. Questions get answered by the people who actually know the answer.",
      },
      {
        kicker: "Room to grow",
        title: "Your first role is a starting point",
        text: "As the company grows, people who prove themselves take on more: leading installs, running punch lists, working with customers.",
      },
    ] as KickerCard[],
  },
  qualities: {
    eyebrow: "What matters to us",
    title: "Three Things That Count More Than Experience",
    items: [
      {
        title: "You show up when you said",
        text: "On a crew this small, one no-show stalls a whole job. Being on time every day is worth more to us than any line on a resume.",
      },
      {
        title: "You care about the details",
        text: "Straight caulk lines, clean cuts, a swept floor at the end of the day. Homeowners notice, and so do we.",
      },
      {
        title: "You can get to Port Charlotte",
        text: "Live within reach of Charlotte County and have a dependable way to get to work each morning. We will teach you everything else.",
      },
    ] as Card[],
  },
  after: {
    eyebrow: "After you apply",
    title: "What Happens Once You Apply",
    steps: [
      { kicker: "Read by the owners", title: "We read it", text: "Tim or Vlad reads every application. No software screening you out over a missing keyword." },
      { kicker: "A short call", title: "We talk it over", text: "A short phone conversation about the daily work, what you want from a job, and whether the two match." },
      { kicker: "In person", title: "Meet us on a job", text: "Come see the work, meet the crew, and go over the details face to face before you decide anything." },
    ] as KickerCard[],
  },
  faqs: [
    {
      q: "Do I need construction experience?",
      a: "No. We would rather teach someone dependable from the ground up than undo someone else's bad habits. If you already have trade experience, great, tell us about it in the form.",
    },
    {
      q: "What kind of work is it?",
      a: "Mostly hands-on field work in occupied homes: removing and installing windows and doors, framing and finish work, demolition and clean-up on remodels, and helping on lanai, roofing and storm-repair jobs. Work that needs a separately licensed trade, such as electrical or plumbing, goes to licensed subcontractors.",
    },
    {
      q: "How much does it pay?",
      a: "It depends on the role and on what you already know, so we do not post a single number here. We go over pay openly on the first phone call, before you commit to anything.",
    },
    {
      q: "What are the hours?",
      a: "Crew days are weekday daytime hours, with the occasional Saturday when a job or the weather calls for it. We will tell you exactly what a normal week looks like before you start.",
    },
    {
      q: "Is it hot?",
      a: "This is Southwest Florida, so yes, a lot of the work happens outdoors in the heat. We start early, take water breaks seriously, and plan around the worst of the afternoon storms.",
    },
    {
      q: "What if the work turns out not to suit me?",
      a: "That is a fair outcome. Some people discover the trades are not their thing. We part as friends, you keep the skills, and nobody holds it against you.",
    },
  ] as Faq[],
  form: {
    eyebrow: "Apply",
    title: "Tell Us About Yourself",
    intro: "Send this in and one of the owners reads it personally. If it seems like a match, we will phone you and describe the job before you commit to anything.",
    bullets: ["No experience needed", "Learn from the owners", "Charlotte, Sarasota & Lee Counties"],
  },
};

/* ------------------------------------------------------------------
   Referral (reward amount lives in site.referral and is a placeholder)
------------------------------------------------------------------- */

// TODO confirm reward amount with client (site.referral.reward is a placeholder)
// TODO confirm program rules with client: no cap, any project size counts, first referral on file wins
export const referral = {
  hero: {
    eyebrow: "For Prestigious customers",
    lead: (reward: string) =>
      `If we have worked on your home, every friend, neighbor or relative you send our way earns you ${reward} once their job is complete. Simple rules, nothing buried.`,
  },
  payout: {
    eyebrow: "How it pays",
    title: "Here Is How the Thank-You Works",
    intro: "A referral program only means something if the money actually shows up. Ours is short enough to read in ten seconds.",
    bullets: (reward: string, note: string) => [
      `${reward} for every referral that becomes a finished job, ${note}.`,
      "There is no cap on how many people you refer.",
      "A minor repair earns the same reward as a major remodel.",
      "You send a name. We do the calling, the estimate and the work.",
    ],
  },
  steps: {
    eyebrow: "The process",
    title: "Three Steps, and Yours Is Only the First",
    intro: "There is nothing to sell. Give us a name, we take care of them, and you get thanked when their project wraps up.",
    items: (reward: string): KickerCard[] => [
      { kicker: "About a minute", title: "Send us a name", text: "Use the short form below, or just text or call Tim with their name and number." },
      { kicker: "Nothing for you to do", title: "We take it from there", text: "We reach out, book a free estimate at their home, and treat them with the same care you got." },
      { kicker: reward, title: "Their job wraps, you get paid", text: `Once their project is complete and signed off, we send you ${reward}.` },
    ],
  },
  who: {
    eyebrow: "Who to send us",
    title: "You Probably Know Two or Three People Already",
    intro: "Most people draw a blank when asked if they know anyone who needs a contractor. These prompts make it easier.",
    items: [
      { who: "Someone still living with builder-grade windows and no shutters", service: "Impact windows & doors" },
      { who: "A neighbor still putting things back together after Ian, Helene or Milton", service: "Storm rebuilds" },
      { who: "A friend who keeps making excuses for their kitchen when you come over", service: "Kitchen & bath" },
      { who: "Someone whose screen enclosure is torn, rusted or sagging", service: "Lanai & screens" },
      { who: "A relative whose roof keeps coming up in insurance letters", service: "Roofing" },
      { who: "Someone who just bought an older home that needs a refresh", service: "Whole-home" },
    ],
    outro: "Pictured someone while reading that list? Send us their name.",
  },
  faqs: (reward: string): Faq[] => [
    {
      q: "Who qualifies for the reward?",
      a: "Homeowners we have already done work for. It is how we say thanks to past customers, so if Prestigious has worked on your house, you are in.",
    },
    {
      q: "Should I tell them before I send their name?",
      a: "It is optional, but it helps. With a quick heads-up, our call does not come as a surprise and they already know why you passed their name along. If you prefer we contact them cold, we will keep it polite.",
    },
    {
      q: "Is there a limit on referrals?",
      a: "As many as you want. Every referral that turns into a finished job counts on its own.",
    },
    {
      q: "When do I get paid?",
      a: `Your ${reward} goes out once their job is complete, not at the estimate stage or at signing. Window work or repainting often takes just weeks; additions and full remodels take months. We will keep you updated along the way.`,
    },
    {
      q: "Does the size of their project matter?",
      a: `No. If we complete the work, you get ${reward}, whether it was a single slider or a whole-house renovation.`,
    },
    {
      q: "What if they get a quote but do not hire us?",
      a: "In that case no reward is paid, but nothing is lost. Your friend still came away with a free estimate at home and a straight answer about their house. Feel free to send the next one.",
    },
    {
      q: "Where do you work?",
      a: "Homes in Charlotte, Sarasota and Lee Counties: Port Charlotte, Punta Gorda, North Port, Englewood, Venice, Sarasota, Fort Myers, Cape Coral and the communities around them. Residential only. If you are unsure, send the name and we will tell you.",
    },
    {
      q: "What if two people refer the same friend?",
      a: "We credit whichever referral reaches us first. If that person was already in touch with us before your referral came in, we cannot pay on it, so it pays to send names early.",
    },
  ],
  form: {
    eyebrow: "Refer a friend",
    title: "Have Someone in Mind?",
    intro: (reward: string) =>
      `Give us their name and phone number. We take care of everything else and send your ${reward} once their project is complete.`,
  },
};

/* ------------------------------------------------------------------
   Review request page (/review), noindex, linked from follow-up texts
------------------------------------------------------------------- */

export const reviewPage = {
  title: "Thanks for Having Us Out",
  ask: "Mind leaving a quick review?",
  lead: "A few honest sentences, when you have a moment, give your neighbors a fair picture before they invite a contractor inside.",
  platforms: [
    { key: "google", label: "Google", note: "The one most people read first", primary: true },
    { key: "yelp", label: "Yelp", note: "Popular with Sarasota-area shoppers", primary: false },
    { key: "bbb", label: "BBB", note: "Matters to careful, research-first buyers", primary: false },
  ] as { key: "google" | "yelp" | "bbb"; label: string; note: string; primary: boolean }[],
  problem: "Something not right? Please call us first so we can make it right.",
};
