export type FaqItem = { question: string; answer: string };

export type ProcessStep = { step: number; title: string; description: string };

export type Benefit = { title: string; description: string };

export type PriceInfo = {
  amount: number;
  currency: "USD" | "GBP" | "PKR";
  originalAmount?: number;
  discountPercent?: number;
  note?: string;
};

export type ServiceContent = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  price?: PriceInfo | null;
  benefits: string[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
};

export type FormationContent = {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subtitle?: string;
  highlights: string[];
  benefits: Benefit[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
};

export type LegalSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type LegalContent = {
  id: string;
  slug: string;
  title: string;
  lastUpdated?: string;
  effectiveDate?: string;
  sections: LegalSection[];
};
