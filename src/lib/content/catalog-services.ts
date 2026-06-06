import type { ServiceContent } from "@/lib/content/types";

export const servicesCatalog: ServiceContent[] = [
  {
    id: "ein",
    slug: "ein",
    title: "EIN (Employer Identification Number)",
    description:
      "Obtain your US employer identification number for banking, payroll, and federal tax compliance.",
    price: { amount: 75, currency: "USD" },
    benefits: [
      "Faster processing times",
      "Confirmation letter 147C & CP575",
      "5+ years experience",
      "100% approval guarantee",
      "Lifetime phone & WhatsApp support",
    ],
    processSteps: [],
    faqs: [
      {
        question: "What is an EIN?",
        answer:
          "An EIN is a unique tax ID issued by the IRS to businesses. You need it to open a US business bank account, hire employees, file taxes, or operate legally in the US.",
      },
      {
        question: "Can non-US residents get an EIN?",
        answer:
          "Yes. Non-US residents can apply for an EIN even without a Social Security Number (SSN).",
      },
      {
        question: "Do I need an ITIN or SSN?",
        answer:
          "No. Foreign applicants can apply using Form SS-4 with instructions for international applicants.",
      },
      {
        question: "Can one EIN be used for multiple businesses?",
        answer:
          "No. Each separate legal entity requires its own EIN. DBAs under one LLC may use the same EIN.",
      },
    ],
  },
  {
    id: "itin",
    slug: "itin",
    title: "ITIN (Individual Taxpayer Identification Number)",
    description:
      "Federal tax identification for individuals who are not eligible for a US Social Security Number.",
    price: {
      amount: 225,
      currency: "USD",
      originalAmount: 350,
      discountPercent: 35,
    },
    benefits: [
      "100% money-back guarantee",
      "No complicated paperwork",
      "Estimated 8–14 week approval",
      "Lifetime support",
    ],
    processSteps: [
      {
        step: 1,
        title: "Complete Form W-7",
        description: "IRS application for an Individual Taxpayer Identification Number.",
      },
      {
        step: 2,
        title: "Gather identity documents",
        description: "Passport or certified copies of identity and foreign status documents.",
      },
      {
        step: 3,
        title: "Provide tax purpose",
        description: "Submit a federal tax return or documentation showing the tax reason for an ITIN.",
      },
      {
        step: 4,
        title: "Submit application",
        description: "Mail to the IRS, use a Certifying Acceptance Agent, or visit an IRS assistance center.",
      },
    ],
    faqs: [
      {
        question: "What is an ITIN?",
        answer:
          "An ITIN is issued by the IRS for individuals not eligible for an SSN who must file or be listed on US tax returns.",
      },
      {
        question: "Is an ITIN the same as an SSN?",
        answer:
          "No. An ITIN is for federal tax reporting only and does not authorize employment or Social Security benefits.",
      },
    ],
  },
  {
    id: "boir",
    slug: "boir",
    title: "BOIR Filing",
    description:
      "Beneficial Ownership Information Report filing under the Corporate Transparency Act.",
    price: { amount: 50, currency: "USD" },
    benefits: [
      "Preparation and submission",
      "No hidden costs",
      "Hassle-free service",
      "Lifetime customer support",
    ],
    processSteps: [],
    faqs: [
      {
        question: "What is BOIR?",
        answer:
          "BOIR is a federal requirement mandating US businesses to report beneficial owner information to FinCEN.",
      },
      {
        question: "Who must file?",
        answer:
          "Most US LLCs, corporations, and similar entities unless they qualify for specific exemptions.",
      },
      {
        question: "What are penalties for not filing?",
        answer:
          "Failure to file can result in civil penalties, daily fines, and potential criminal charges.",
      },
    ],
  },
  {
    id: "duns",
    slug: "duns",
    title: "D-U-N-S Number",
    description:
      "Establish your business identity with Dun & Bradstreet for credit, contracts, and global credibility.",
    price: { amount: 50, currency: "USD" },
    benefits: [
      "Preparation and submission",
      "Honest pricing",
      "Hassle-free service",
      "Free customer support",
    ],
    processSteps: [],
    faqs: [
      {
        question: "What is a D-U-N-S Number?",
        answer:
          "A unique nine-digit identifier issued by Dun & Bradstreet to verify business credibility.",
      },
      {
        question: "How long does processing take?",
        answer:
          "Standard processing is typically up to 30 business days; expedited options may be available.",
      },
    ],
  },
  {
    id: "trademark",
    slug: "trademark",
    title: "Trademark Registration",
    description:
      "Protect your brand name, logo, or slogan with USPTO trademark registration support.",
    price: { amount: 100, currency: "USD", note: "+ USPTO fees per class" },
    benefits: [
      "Preparation and submission",
      "No hidden costs",
      "Hassle-free service",
      "Free customer support",
    ],
    processSteps: [],
    faqs: [
      {
        question: "Why register a trademark?",
        answer:
          "Registration legally protects your brand and helps prevent others from using it.",
      },
      {
        question: "How long does registration take?",
        answer: "Generally 6–12 months depending on examination and any objections.",
      },
    ],
  },
  {
    id: "sellers-permit",
    slug: "sellers-permit",
    title: "Seller's Permit",
    description:
      "State resale license for businesses selling tangible goods or taxable services in the US.",
    price: null,
    benefits: [
      "Avoid sales tax on wholesale purchases",
      "Qualify for wholesale pricing",
      "Fully legal process",
      "6+ years experience",
      "100% approval guarantee",
    ],
    processSteps: [],
    faqs: [
      {
        question: "What is a Seller's Permit?",
        answer:
          "A state-issued license allowing businesses to legally sell goods or taxable services.",
      },
      {
        question: "Do online stores need one?",
        answer:
          "Yes, if you sell taxable products in states that require sales tax collection.",
      },
    ],
  },
  {
    id: "annual-filing",
    slug: "annual-filing",
    title: "US Entity Annual Filing",
    description:
      "Stay in good standing with state annual reports, franchise tax, and compliance filings.",
    price: null,
    benefits: [
      "Faster processing",
      "Fully legal process",
      "5+ years experience",
      "100% approval guarantee",
      "Lifetime support",
    ],
    processSteps: [],
    faqs: [
      {
        question: "What is annual filing?",
        answer:
          "Yearly reports and compliance documents LLCs and corporations must submit to remain active.",
      },
      {
        question: "What happens if I miss the deadline?",
        answer:
          "Late fees, penalties, or administrative dissolution of your entity may apply.",
      },
    ],
  },
];

export const servicesBySlug = Object.fromEntries(
  servicesCatalog.map((s) => [s.slug, s])
) as Record<string, ServiceContent>;
