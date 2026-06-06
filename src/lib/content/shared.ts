import type { Benefit, ProcessStep } from "@/lib/content/types";

export const DEFAULT_PROCESS: ProcessStep[] = [
  {
    step: 1,
    title: "Check name availability",
    description: "Verify your company name with our guided name-check tool.",
  },
  {
    step: 2,
    title: "Choose your package",
    description: "Select the formation or compliance package that fits your goals.",
  },
  {
    step: 3,
    title: "Complete your application",
    description: "Submit details through our secure, founder-friendly intake forms.",
  },
  {
    step: 4,
    title: "Receive confirmation",
    description: "Track progress in your client portal until your filing is complete.",
  },
];

export const DEFAULT_BENEFITS: Benefit[] = [
  {
    title: "Global edge",
    description: "International expertise for founders scaling across borders.",
  },
  {
    title: "Secure transactions",
    description: "Confidential handling with enterprise-grade data practices.",
  },
  {
    title: "Efficiency unleashed",
    description: "Streamlined workflows designed for speed and clarity.",
  },
  {
    title: "Tailored solutions",
    description: "Packages and services matched to your jurisdiction and goals.",
  },
  {
    title: "Client-centric focus",
    description: "Dedicated support from intake through ongoing compliance.",
  },
  {
    title: "Timely support",
    description: "Responsive assistance when you need answers fast.",
  },
  {
    title: "Strategic growth",
    description: "Infrastructure that grows with your global ambitions.",
  },
  {
    title: "Global connections",
    description: "Trusted partner network for banking, payments, and formation.",
  },
];

export const TRUST_PARTNERS = [
  "Wise",
  "Mercury",
  "PayPal",
  "Payoneer",
  "SumUp",
  "Stripe",
  "Authorize.net",
];
