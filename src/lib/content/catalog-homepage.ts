import { DEFAULT_BENEFITS, DEFAULT_PROCESS, TRUST_PARTNERS } from "@/lib/content/shared";
import type { FaqItem } from "@/lib/content/types";

export const homepageContent = {
  headline: "Simplifying global company formation",
  description:
    "HopeTex streamlines international business registration — UK, US, and beyond. Whether you're launching or expanding, our team delivers a hassle-free path from formation to compliance.",
  partners: TRUST_PARTNERS,
  benefits: DEFAULT_BENEFITS,
  processSteps: DEFAULT_PROCESS,
  valueSections: [
    {
      title: "Empowering global financial success",
      body: "Streamlined banking introductions and payment infrastructure aligned with your business goals.",
    },
    {
      title: "Professional address & contact solutions",
      body: "Prestigious virtual addresses and dedicated business lines in the UK and US.",
    },
  ],
  faqs: [
    {
      question: "What is an EIN?",
      answer:
        "An EIN is a unique nine-digit number assigned by the IRS for business tax purposes — like a Social Security number for your company.",
    },
    {
      question: "Difference between PayPal Personal and Business?",
      answer:
        "Personal accounts are for individuals; Business accounts support merchants operating under a company name with additional features.",
    },
    {
      question: "How long do services take?",
      answer:
        "Timelines depend on the service and government authority. We provide estimates upfront and keep you updated at every stage.",
    },
  ] satisfies FaqItem[],
};
