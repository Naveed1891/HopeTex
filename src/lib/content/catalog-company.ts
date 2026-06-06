import { DEFAULT_BENEFITS, DEFAULT_PROCESS } from "@/lib/content/shared";
import type { FaqItem } from "@/lib/content/types";

export const aboutContent = {
  title: "About HopeTex",
  headline:
    "Empowering entrepreneurs worldwide with efficient formation and compliance services.",
  description:
    "HopeTex Limited is your partner for seamless international expansion across the United Kingdom, the United States, and global markets. We specialize in company registration, tax IDs, compliance filings, and the infrastructure founders need to operate with confidence.",
  benefits: DEFAULT_BENEFITS,
  processSteps: DEFAULT_PROCESS,
};

export const contactContent = {
  title: "Contact us",
  description:
    "Reach our global team for formation, compliance, and support. We respond quickly across time zones.",
  offices: [
    { label: "United Kingdom", address: "85 Dunstall Hill, Wolverhampton WV6 0SR, UK" },
    { label: "Pakistan", address: "13-E2, Wapda Town, Phase 1, Lahore, PK" },
  ],
};

export const faqsContent: FaqItem[] = [
  {
    question: "What is HopeTex?",
    answer:
      "HopeTex is a professional business service provider helping individuals and companies worldwide with US registrations, tax IDs, compliance filings, and business documentation.",
  },
  {
    question: "Do you assist non-US residents?",
    answer:
      "Yes, we assist non-US residents globally with registering and managing US business and compliance requirements.",
  },
  {
    question: "Is HopeTex a government agency?",
    answer:
      "No. HopeTex is a private service provider. We prepare and submit applications to relevant authorities on your behalf.",
  },
  {
    question: "What services does HopeTex offer?",
    answer:
      "EIN and ITIN applications, BOIR filing, D-U-N-S registration, Seller's Permit, trademark registration, annual compliance, and company formation.",
  },
  {
    question: "Are there hidden fees?",
    answer: "No. Our pricing is transparent with all fees communicated upfront.",
  },
  {
    question: "How can I contact HopeTex?",
    answer:
      "Use our contact form, email info@hopetexx.com, or WhatsApp. We guide you through every step.",
  },
];
