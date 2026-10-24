import { site } from "@/content/site";
import type { LegalSection } from "./data";

const contactLine = `${site.legalName}, ${site.address.city}, ${site.address.state} ${site.address.zip} · ${site.phone} · ${site.email}`;

export const privacySections: LegalSection[] = [
  {
    title: "Who we are",
    body: [
      `This website is operated by ${site.legalName} ("we", "us"), a licensed residential contractor in ${site.address.city}, Florida (${site.licenseLabel}). This policy explains what information we collect through ${site.domain}, how we use it, and the choices you have.`,
    ],
  },
  {
    title: "Information we collect",
    body: [
      "Information you give us: when you fill out an estimate or contact form, call, text or email us, we collect what you provide — typically your name, phone number, email address, project address, the service you are interested in, and any message, photos or details about your project.",
      "Information collected automatically: like most websites, our hosting provider and analytics tools record basic technical data such as IP address, browser type, device, pages visited, referring site and the date and time of your visit. This data is used in aggregate to keep the site secure and understand how it is used.",
      "Cookies: we use a small number of cookies and similar technologies needed for the site to work and, where enabled, to measure traffic. You can block or delete cookies in your browser settings; the site will still work.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "To respond to your request, schedule an in-home estimate, prepare a proposal, and perform and support the work you hire us for.",
      "To communicate with you about your project by phone, text or email, including scheduling, permits, inspections and warranty service.",
      "To keep records required by Florida contractor licensing, permitting, tax and insurance rules.",
      "To improve our website and services, and to protect against fraud, spam and abuse.",
      "We do not use your information for automated decision-making, and we do not sell or rent your personal information to anyone.",
    ],
  },
  {
    title: "How we share information",
    body: [
      "We share information only as needed to run our business and complete your project: with service providers that host our website, deliver form submissions and email, or provide analytics; with suppliers, subcontractors, building departments, HOAs or lenders when that is part of your project or you ask us to; and when required by law, subpoena or to protect our rights and safety.",
      "If you apply for financing, the lender's own privacy policy governs the information you give them.",
    ],
  },
  {
    title: "Phone calls and text messages",
    body: [
      "If you give us your phone number, you agree that we may call or text you about your inquiry and project. Message and data rates may apply. We do not send marketing texts without your consent, and you can reply STOP to any text to opt out.",
    ],
  },
  {
    title: "How long we keep information",
    body: [
      "We keep inquiry information for as long as needed to respond and follow up. Project records (contracts, permits, warranties, photos) are kept for as long as needed for warranty service and to meet legal, tax and licensing obligations.",
    ],
  },
  {
    title: "Security",
    body: [
      "We use reasonable administrative and technical safeguards, including encrypted (HTTPS) connections, to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can ask us to tell you what personal information we hold about you, correct it, or delete it where we are not required to keep it. You can also opt out of non-essential communications at any time. Contact us using the details below and we will respond within a reasonable time.",
    ],
  },
  {
    title: "Children",
    body: [
      "This website is intended for adults. We do not knowingly collect personal information from children under 13.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "Our site links to other websites such as Google, Yelp, the Better Business Bureau, social networks and the Florida DBPR license lookup. We are not responsible for their content or privacy practices.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
    ],
  },
  {
    title: "Contact us",
    body: [`Questions about this policy or your information: ${contactLine}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    title: "Agreement",
    body: [
      `These terms govern your use of ${site.domain}, operated by ${site.legalName}. By using the site you agree to them. If you do not agree, please do not use the site.`,
    ],
  },
  {
    title: "Information only — not an offer",
    body: [
      "Content on this website, including service descriptions, typical price ranges, timelines and blog articles, is general information about home improvement in Southwest Florida. It is not a quote, offer, guarantee or professional engineering, legal, insurance or tax advice.",
      "Prices and durations shown are typical ranges and vary with the home, scope, materials, permit requirements and market conditions. Your price is set only by a written estimate and a signed contract.",
    ],
  },
  {
    title: "Estimates and contracts",
    body: [
      "Submitting a form or requesting an estimate does not create a contract or obligate either party. Any work we perform is governed solely by a written contract signed by you and us, which controls over anything on this website.",
      "Warranty terms are those stated in your written contract and warranty documents. Manufacturer warranties are provided by the manufacturer.",
    ],
  },
  {
    title: "Financing",
    body: [
      "Financing is offered by third-party lenders and is subject to credit approval. Rates, terms and eligibility are set by the lender. We are not a lender and do not make credit decisions.",
    ],
  },
  {
    title: "Licensing",
    body: [
      `${site.legalName} is a ${site.licenseLabel}. You can verify any Florida contractor license with the Department of Business and Professional Regulation at myfloridalicense.com.`,
    ],
  },
  {
    title: "Photos and reviews",
    body: [
      "Some photos on this website are representative stock images or sample projects used until our own project photos are published, and are marked as samples where shown. Reviews are quoted from public review platforms and shortened to first name and last initial.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "The text, design, logos and original images on this site belong to us or our licensors. You may view and print pages for personal, non-commercial use. Any other use requires our written permission.",
    ],
  },
  {
    title: "Acceptable use",
    body: [
      "Do not use the site to send spam, submit false information, attempt to access systems without permission, or interfere with its operation.",
    ],
  },
  {
    title: "Third-party sites",
    body: [
      "Links to third-party websites (maps, review sites, lenders, manufacturers, government sites) are provided for convenience. We do not control and are not responsible for their content.",
    ],
  },
  {
    title: "Disclaimer and limitation of liability",
    body: [
      'The website is provided "as is" without warranties of any kind. To the fullest extent permitted by law, we are not liable for any indirect, incidental or consequential damages arising from your use of the website. Nothing in these terms limits rights you have under a signed contract or under Florida law that cannot be waived.',
    ],
  },
  {
    title: "Governing law",
    body: [
      `These terms are governed by the laws of the State of Florida. Any dispute about this website will be resolved in the state courts located in ${site.address.county}, Florida.`,
    ],
  },
  {
    title: "Changes",
    body: [
      "We may update these terms at any time by posting a new version here. The date at the top of this page shows when they were last changed.",
    ],
  },
  {
    title: "Contact",
    body: [`${contactLine}.`],
  },
];
