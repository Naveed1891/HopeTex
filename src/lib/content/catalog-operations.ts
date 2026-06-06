import { routes } from "@/config/routes";

export type ServiceTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
};

export type CategoryPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  titleHighlight?: string;
  description: string;
  benefits: string[];
  tiers?: ServiceTier[];
  faqs?: { question: string; answer: string }[];
};

export const operationsCatalog = [
  {
    title: "Address Services",
    description:
      "Registered office, director, and business service addresses for UK and US entities.",
    href: routes.operations.virtualAddress,
    icon: "MapPin" as const,
  },
  {
    title: "Phone Numbers",
    description:
      "Professional UK and US business phone lines for a credible global presence.",
    href: routes.operations.phoneNumbers,
    icon: "Phone" as const,
  },
];

export const operationsPages: Record<string, CategoryPageData> = {
  index: {
    slug: "operations",
    eyebrow: "Business Operations",
    title: "Address & Phone Infrastructure",
    titleHighlight: "Infrastructure",
    description:
      "Professional addresses and phone numbers that help your company look established, stay compliant, and operate globally.",
    benefits: [
      "UK and US virtual address options",
      "Registered office and director service addresses",
      "Mail handling and proof-of-address support",
      "UK and US business phone numbers",
      "Lifetime HopeTex support",
    ],
  },
  "virtual-address": {
    slug: "virtual-address",
    eyebrow: "Address Services",
    title: "Professional Address Solutions",
    titleHighlight: "Address",
    description:
      "Registered office, director, and business service addresses for UK and US companies — with mail handling and compliance support.",
    benefits: [
      "Official registered office addresses",
      "Director privacy service addresses",
      "Business mailing and proof-of-address support",
      "Mail handling included on select plans",
      "Ideal for remote and international founders",
    ],
    tiers: [
      {
        name: "Registered Office Address",
        price: "$50",
        description: "Official registered office for your entity.",
        features: [
          "Registered office listing",
          "Compliance-ready address",
          "Mail notification support",
        ],
      },
      {
        name: "Director Service Address",
        price: "$30",
        description: "Privacy-friendly director correspondence address.",
        features: [
          "Director service address",
          "Mail handling",
          "Proof of address support",
        ],
      },
      {
        name: "Business Service Address",
        price: "$100",
        description: "Professional business mailing address.",
        features: [
          "Business service address",
          "Up to 10 mail items/month",
          "Proof of address letters",
        ],
      },
      {
        name: "Business Address – All in One",
        price: "$150",
        description: "Registered, director, and business address bundle.",
        features: [
          "All three address types",
          "Up to 15 mail items/month",
          "Priority mail handling",
        ],
      },
    ],
    faqs: [
      {
        question: "Why do I need a registered office address?",
        answer:
          "Most jurisdictions require a physical registered address for official correspondence and compliance filings.",
      },
      {
        question: "Can I use these addresses for banking?",
        answer:
          "Many banks accept service addresses for verification; requirements vary by provider and jurisdiction.",
      },
    ],
  },
  "phone-numbers": {
    slug: "phone-numbers",
    eyebrow: "Phone Services",
    title: "Business Phone Numbers",
    titleHighlight: "Phone",
    description:
      "UK and US business phone lines that give your company a professional, reachable presence for clients, banks, and partners.",
    benefits: [
      "UK and US number options",
      "Professional business presence",
      "Ideal for banking and merchant verification",
      "Flexible packages for startups and scale-ups",
      "Expert setup guidance from HopeTex",
    ],
    tiers: [
      {
        name: "UK Business Number",
        price: "From $25",
        description: "UK phone line for your business operations.",
        features: [
          "UK business number setup",
          "Verification support",
          "Lifetime HopeTex guidance",
        ],
      },
      {
        name: "US Business Number",
        price: "From $35",
        description: "US phone line including Google Voice options on select packages.",
        features: [
          "US business number setup",
          "Banking and merchant support",
          "Flexible forwarding options",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a business phone number?",
        answer:
          "Many banks, payment providers, and marketplaces require a reachable business phone number during verification.",
      },
      {
        question: "Are UK and US numbers available?",
        answer: "Yes. HopeTex supports both UK and US business phone number packages.",
      },
    ],
  },
};
