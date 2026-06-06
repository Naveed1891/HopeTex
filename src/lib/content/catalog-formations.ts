import type { FormationContent } from "@/lib/content/types";
import { DEFAULT_BENEFITS, DEFAULT_PROCESS } from "@/lib/content/shared";

export const formationsCatalog: FormationContent[] = [
  {
    id: "usa-llc",
    slug: "usa-llc",
    title: "US LLC Formation",
    headline: "Tailored US LLC formation for global founders",
    subtitle: "Incorporate in any US state with guided filing and lifetime portal access.",
    highlights: ["5-star rated", "Fast service", "Exclusive offers", "Lifetime support"],
    benefits: DEFAULT_BENEFITS,
    processSteps: DEFAULT_PROCESS,
    faqs: [
      {
        question: "What is a US LLC?",
        answer:
          "An LLC combines partnership flexibility with corporation-style liability protection, offering tax savings and personal asset protection.",
      },
      {
        question: "Can non-US residents form an LLC?",
        answer:
          "Yes. Foreign founders can establish a US LLC; requirements vary by state.",
      },
      {
        question: "What is a registered agent?",
        answer:
          "A designated party who receives official legal and state correspondence on behalf of your LLC.",
      },
    ],
  },
  {
    id: "uk-ltd",
    slug: "uk-ltd",
    title: "UK LTD Formation",
    headline: "Seamlessly register your UK limited company",
    subtitle: "Companies House formation with banking and compliance guidance.",
    highlights: ["5-star rated", "Fast service", "Exclusive offers", "Lifetime support"],
    benefits: DEFAULT_BENEFITS,
    processSteps: DEFAULT_PROCESS,
    faqs: [
      {
        question: "What is a UK LTD?",
        answer:
          "A UK limited company offers limited liability, protecting personal assets from business debts.",
      },
      {
        question: "Can non-UK residents start a UK LTD?",
        answer:
          "Yes, though at least one director with a service address in the EEA may be required.",
      },
      {
        question: "How long does formation take?",
        answer:
          "Typically a few hours to several days depending on Companies House workload.",
      },
    ],
  },
  {
    id: "pk-pvt",
    slug: "pk-pvt",
    title: "International Registration",
    headline: "Entity registration across global jurisdictions",
    subtitle: "Private limited company and international incorporation support.",
    highlights: ["Expert guidance", "Fast service", "Compliance support", "Lifetime support"],
    benefits: DEFAULT_BENEFITS,
    processSteps: DEFAULT_PROCESS,
    faqs: [
      {
        question: "Which jurisdictions do you support?",
        answer:
          "We support international registration including Pakistan private limited companies and other markets on request.",
      },
      {
        question: "What documents are required?",
        answer:
          "Requirements vary by jurisdiction; we provide a tailored checklist during intake.",
      },
    ],
  },
];

export const formationsBySlug = Object.fromEntries(
  formationsCatalog.map((f) => [f.slug, f])
) as Record<string, FormationContent>;
