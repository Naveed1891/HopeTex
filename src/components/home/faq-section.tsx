"use client";

import Link from "next/link";
import { useId, useState } from "react";
import {
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileText,
  Globe2,
  Headphones,
  ReceiptText,
  Shield,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

type FaqEntry = {
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FaqEntry[] = [
  {
    question: "How long does it take to form a US LLC?",
    answer:
      "Typically, it takes between 1–3 business days to form your LLC. Processing times may vary depending on the state you choose and the specific package you select. We'll keep you updated every step of the way.",
    icon: FileText,
  },
  {
    question: "Do I need to be in the US to form an LLC?",
    answer:
      "No. Non-US residents can form a US LLC remotely. HopeTex helps you complete the required steps and documentation online.",
    icon: Shield,
  },
  {
    question: "What is included in your LLC formation packages?",
    answer:
      "Our packages may include company formation, EIN support, registered agent support, business address options, banking guidance, and ongoing compliance support depending on the package you select.",
    icon: CreditCard,
  },
  {
    question: "Can you help with opening a US bank account?",
    answer:
      "Yes. We guide eligible clients with banking and payment setup options through trusted financial partners and available business account solutions.",
    icon: UserRound,
  },
  {
    question: "Do you provide registered agent services?",
    answer:
      "Yes. We can help arrange registered agent support where required for your US company formation and compliance needs.",
    icon: Globe2,
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No. We aim to keep pricing transparent. Any government, state, or third-party fees are shown clearly before you place your order.",
    icon: ReceiptText,
  },
];

function SectionBackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[10%] top-16 h-80 w-80 rounded-full bg-violet-300/22 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] bottom-12 h-96 w-96 rounded-full bg-sky-300/28 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute left-0 top-1/4 h-64 w-48 opacity-[0.1]"
        aria-hidden
      >
        <defs>
          <linearGradient id="hfaq-curve-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M8 20 C40 80 20 140 48 200 C70 250 30 280 56 320"
          fill="none"
          stroke="url(#hfaq-curve-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M24 40 C56 100 36 160 64 220"
          fill="none"
          stroke="url(#hfaq-curve-grad)"
          strokeWidth="1"
          opacity="0.6"
        />
      </svg>
      <div className="hfaq-stars pointer-events-none absolute inset-0" aria-hidden>
        <span className="hfaq-star hfaq-star--1" />
        <span className="hfaq-star hfaq-star--2" />
        <span className="hfaq-star hfaq-star--3" />
      </div>
    </>
  );
}

function HeadingDivider() {
  return (
    <div className="hfaq-heading-divider" aria-hidden>
      <span className="hfaq-heading-divider__line" />
      <span className="hfaq-heading-divider__gem" />
      <span className="hfaq-heading-divider__line" />
    </div>
  );
}

function FaqAccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FaqEntry;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const baseId = useId();
  const buttonId = `${baseId}-button-${index}`;
  const panelId = `${baseId}-panel-${index}`;
  const Icon = faq.icon;

  return (
    <li className={cn("hfaq-item", isOpen && "hfaq-item--open")}>
      <button
        type="button"
        id={buttonId}
        className="hfaq-item__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span
          className={cn("hfaq-item__icon", isOpen && "hfaq-item__icon--open")}
          aria-hidden
        >
          <Icon className="size-[22px] stroke-[1.65]" />
        </span>
        <span className="hfaq-item__question">{faq.question}</span>
        <ChevronDown
          className={cn("hfaq-item__chevron", isOpen && "hfaq-item__chevron--open")}
          aria-hidden
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn("hfaq-item__panel", isOpen && "hfaq-item__panel--open")}
      >
        <div className="hfaq-item__panel-inner">
          <p className="hfaq-item__answer">{faq.answer}</p>
        </div>
      </div>
    </li>
  );
}

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className={cn(
        "home-faq-section relative overflow-hidden",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]",
        "py-24 sm:py-28 lg:py-32"
      )}
      aria-labelledby="home-faq-title"
    >
      <SectionBackgroundDecor />

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16 lg:px-10">
        <aside className="hfaq-intro lg:sticky lg:top-28">
          <ScrollReveal>
            <span className="hfaq-badge">
              <CircleHelp className="size-3.5 shrink-0 text-violet-600" aria-hidden />
              FAQs
            </span>
            <h2
              id="home-faq-title"
              className="mt-7 text-[clamp(3rem,5vw,5.6rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950"
            >
              Frequently
              <br />
              <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                Asked
                <br />
                Questions
              </span>
            </h2>
            <HeadingDivider />
            <p className="mt-6 max-w-[420px] text-lg leading-relaxed text-slate-600">
              Everything you need to know about our services, process, and how we help
              your business succeed.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="mt-10">
            <div className="hfaq-support">
              <span className="hfaq-support__icon" aria-hidden>
                <Headphones className="size-6 stroke-[1.65]" />
              </span>
              <div className="hfaq-support__copy">
                <p className="hfaq-support__title">Still have questions?</p>
                <p className="hfaq-support__text">
                  Our support team is always here to help you.
                </p>
                <Link href={routes.company.contact} className="hfaq-support__link">
                  Contact Us
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </aside>

        <div className="hfaq-accordion-wrap min-w-0">
          <ul className="hfaq-accordion list-none p-0 m-0">
            {faqs.map((faq, index) => (
              <FaqAccordionItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={activeIndex === index}
                onToggle={() =>
                  setActiveIndex((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
