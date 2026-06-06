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

export const bankingCatalog = [
  {
    title: "PayPal Solutions",
    description:
      "PayPal account setup and verification support for UK and US businesses.",
    href: `${routes.banking.index}#paypal-packages`,
    icon: "ArrowRightLeft" as const,
  },
  {
    title: "Bank Account Support",
    description:
      "Guidance for opening UK and US business bank accounts with trusted partners.",
    href: routes.banking.corporateBanking,
    icon: "Banknote" as const,
  },
  {
    title: "Stripe & Merchant Accounts",
    description:
      "Payment merchant setup including Stripe, SumUp, and regional merchant solutions.",
    href: routes.banking.merchants,
    icon: "CreditCard" as const,
  },
];

export const bankingPages: Record<string, CategoryPageData> = {
  index: {
    slug: "banking",
    eyebrow: "Banking & Payments",
    title: "Banking & Payment Solutions",
    titleHighlight: "Payment",
    description:
      "PayPal, business banking, and merchant account support — helping founders collect payments and operate globally with confidence.",
    benefits: [
      "PayPal setup for UK and US entities",
      "Business bank account consultation",
      "Stripe and merchant onboarding guidance",
      "Trusted partner network",
      "Lifetime HopeTex support",
    ],
    tiers: [
      {
        name: "UK PayPal Package",
        price: "From $99",
        description: "PayPal verification support for UK businesses.",
        features: [
          "Account setup guidance",
          "Verification support",
          "Lifetime assistance",
        ],
      },
      {
        name: "US PayPal Package",
        price: "From $99",
        description: "PayPal verification support for US businesses.",
        features: [
          "Account setup guidance",
          "Verification support",
          "Lifetime assistance",
        ],
      },
    ],
  },
  corporate: {
    slug: "corporate",
    eyebrow: "Bank Account Support",
    title: "Business Bank Account Support",
    titleHighlight: "Bank",
    description:
      "Expert guidance for opening UK and US business bank accounts — aligned with your entity structure and compliance profile.",
    benefits: [
      "UK and US bank account pathways",
      "Documentation and readiness review",
      "Partner introductions where applicable",
      "Formation-to-banking workflow support",
      "Lifetime HopeTex guidance",
    ],
    tiers: [
      {
        name: "UK Bank Account Package",
        price: "From $149",
        description: "Support for UK business banking applications.",
        features: [
          "Readiness checklist",
          "Application guidance",
          "Partner recommendations",
        ],
      },
      {
        name: "US Bank Account Package",
        price: "From $199",
        description: "Support for US business banking applications.",
        features: [
          "EIN and document review",
          "Bank partner guidance",
          "Merchant readiness tips",
        ],
      },
    ],
    faqs: [
      {
        question: "Can non-residents open a US business bank account?",
        answer:
          "Requirements vary by bank. HopeTex helps prepare your entity, EIN, and documentation for the best chance of approval.",
      },
      {
        question: "Do you guarantee bank approval?",
        answer:
          "Banks make final decisions independently. We provide expert preparation and guidance, not guaranteed approvals.",
      },
    ],
  },
  merchants: {
    slug: "merchants",
    eyebrow: "Merchant Accounts",
    title: "Stripe & Merchant Solutions",
    titleHighlight: "Merchant",
    description:
      "Payment merchant setup for Stripe, SumUp, and regional processors — so you can accept payments online with confidence.",
    benefits: [
      "Stripe onboarding support",
      "UK, US, and UAE merchant pathways",
      "Website and compliance readiness review",
      "Payment gateway consultation",
      "Lifetime HopeTex support",
    ],
    tiers: [
      {
        name: "US Stripe / Merchant",
        price: "From $149",
        description: "Merchant setup support for US entities.",
        features: [
          "Stripe application guidance",
          "Website compliance review",
          "Payment flow consultation",
        ],
      },
      {
        name: "UK Stripe / SumUp",
        price: "From $129",
        description: "Merchant setup support for UK entities.",
        features: [
          "Stripe or SumUp guidance",
          "Business verification prep",
          "Lifetime support",
        ],
      },
      {
        name: "UAE Merchant (Stripe)",
        price: "From $199",
        description: "Regional merchant support for UAE businesses.",
        features: [
          "Regional processor guidance",
          "Documentation review",
          "Expert consultation",
        ],
      },
    ],
    faqs: [
      {
        question: "What do I need for a Stripe account?",
        answer:
          "Typically a registered entity, business website, EIN or local tax ID, and compliant business activity description.",
      },
      {
        question: "Can HopeTex help with PayPal too?",
        answer: "Yes. See our PayPal packages on the Banking & Payments overview page.",
      },
    ],
  },
};
