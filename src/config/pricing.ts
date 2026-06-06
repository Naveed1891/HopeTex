/**
 * Pricing domain model — populated from content/packages.md at page build time.
 * Structure only; values mirror source content.
 */

export type PricingTier = "essential" | "enhanced" | "elite" | "pro";

export type PricingFeature = {
  label: string;
  included: boolean;
  highlight?: boolean;
};

export type PricingPlan = {
  id: PricingTier;
  name: string;
  slug: string;
  description?: string;
  price: number;
  compareAtPrice?: number;
  currency: "USD" | "GBP" | "PKR";
  stateFeeNote?: string;
  savingsPercent?: number;
  popular?: boolean;
  turnaround: string;
  features: PricingFeature[];
  cta: {
    label: string;
    href: string;
  };
};

export type PricingRegion = "us" | "uk" | "pk";

export const pricingRegions: { id: PricingRegion; label: string }[] = [
  { id: "us", label: "United States" },
  { id: "uk", label: "United Kingdom" },
  { id: "pk", label: "International" },
];

/** US LLC formation packages — from content/packages.md */
export const usLlcPlans: PricingPlan[] = [
  {
    id: "essential",
    name: "Essential",
    slug: "llc-formation-essential",
    price: 99,
    compareAtPrice: 150,
    currency: "USD",
    stateFeeNote: "+ state fee",
    savingsPercent: 34,
    turnaround: "20–25 business days",
    features: [
      { label: "Articles of Organization filing", included: true },
      { label: "Unlimited name searches", included: true },
      { label: "Certificate of formation", included: true },
      { label: "Registered agent (1st year)", included: true },
      { label: "Shared mailing address", included: true },
      { label: "Digital document copies", included: true },
      { label: "HopeTex dashboard access", included: true },
      { label: "Lifetime support", included: true },
      { label: "EIN", included: false },
      { label: "Unique mailing address", included: false },
    ],
    cta: { label: "Start Essential", href: "/order/llc-essential" },
  },
  {
    id: "enhanced",
    name: "Enhanced",
    slug: "llc-formation-enhanced",
    price: 150,
    compareAtPrice: 220,
    currency: "USD",
    stateFeeNote: "+ state fee",
    savingsPercent: 31,
    turnaround: "20–22 business days",
    features: [
      { label: "Everything in Essential", included: true, highlight: true },
      { label: "EIN & verification document", included: true },
      { label: "Business phone number", included: true },
    ],
    cta: { label: "Start Enhanced", href: "/order/llc-enhanced" },
  },
  {
    id: "elite",
    name: "Elite",
    slug: "llc-formation-elite",
    price: 222,
    compareAtPrice: 350,
    currency: "USD",
    stateFeeNote: "+ state fee",
    savingsPercent: 36,
    popular: true,
    turnaround: "18–20 business days",
    features: [
      { label: "Everything in Enhanced", included: true, highlight: true },
      { label: "Unique business mailing address", included: true },
      { label: "Printed document copies", included: true },
      { label: "Bank account consultation", included: true },
      { label: "Merchant setup guidelines", included: true },
    ],
    cta: { label: "Start Elite", href: "/order/llc-elite" },
  },
  {
    id: "pro",
    name: "Pro",
    slug: "llc-formation-pro",
    price: 333,
    compareAtPrice: 425,
    currency: "USD",
    stateFeeNote: "+ state fee",
    savingsPercent: 21,
    turnaround: "15–18 business days",
    features: [
      { label: "Everything in Elite", included: true, highlight: true },
      { label: "Next-day filing", included: true },
      { label: "Physical SIM phone number", included: true },
      { label: "PayPal business consultation", included: true },
      { label: "Payment merchant consultation", included: true },
    ],
    cta: { label: "Start Pro", href: "/order/llc-pro" },
  },
];

export function getPlansByRegion(region: PricingRegion): PricingPlan[] {
  switch (region) {
    case "us":
      return usLlcPlans;
    case "uk":
    case "pk":
      return [];
    default:
      return [];
  }
}
