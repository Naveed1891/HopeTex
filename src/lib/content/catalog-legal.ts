import type { LegalContent } from "@/lib/content/types";

export const legalCatalog: Record<string, LegalContent> = {
  privacy: {
    id: "privacy",
    slug: "privacy",
    title: "Privacy Policy",
    effectiveDate: "2019-01-01",
    lastUpdated: "2026-02-23",
    sections: [
      {
        heading: "Information we collect",
        bullets: [
          "Name, email, phone, and business address",
          "Billing and payment information",
          "Professional and formation-related details",
          "IP address, browser, and usage data via cookies",
        ],
      },
      {
        heading: "How we use your information",
        bullets: [
          "Provide registration and compliance services",
          "Process payments and send confirmations",
          "Comply with legal obligations",
          "Improve our platform and support experience",
        ],
      },
      {
        heading: "Your rights",
        bullets: [
          "Access, correct, or delete your data",
          "Restrict or object to processing",
          "Request data portability",
          "Lodge a complaint with a supervisory authority",
        ],
      },
    ],
  },
  terms: {
    id: "terms",
    slug: "terms",
    title: "Terms & Conditions",
    lastUpdated: "2020-03-14",
    sections: [
      {
        heading: "Services",
        bullets: [
          "Business entity formation (LLC, UK LTD, international)",
          "Tax identification (EIN, ITIN)",
          "D-U-N-S, BOIR, Seller's Permit, trademark, and annual filing support",
          "Business consultancy and administrative assistance",
        ],
      },
      {
        heading: "Customer obligations",
        bullets: [
          "Provide accurate, complete, and current information",
          "Respond promptly to requests for documentation",
        ],
      },
      {
        heading: "Fees and processing",
        bullets: [
          "Service fees are exclusive of government and third-party charges",
          "Processing times are estimates, not guarantees",
          "HopeTex does not guarantee government approval",
        ],
      },
    ],
  },
  refund: {
    id: "refund",
    slug: "refund",
    title: "Refund Policy",
    lastUpdated: "2026-01-20",
    sections: [
      {
        heading: "Nature of our services",
        body: "HopeTex provides professional consulting, document preparation, and filing assistance. We are not a government authority.",
      },
      {
        heading: "Eligible for refund",
        bullets: [
          "Duplicate payment or billing error",
          "Cancellation before any work has commenced",
        ],
      },
      {
        heading: "Non-refundable",
        bullets: [
          "Work already commenced or documents prepared",
          "Applications submitted to government authorities",
          "Government and third-party fees",
          "Delays caused by authorities or incorrect client information",
        ],
      },
      {
        heading: "Request procedure",
        body: "Submit a written request within 7 days of purchase and before work commences. Approved refunds process in 7–14 business days.",
      },
    ],
  },
};
