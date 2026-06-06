import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  Headphones,
  Package,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type EmpowermentCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const empowermentCards: EmpowermentCard[] = [
  {
    title: "Streamlined Registration Process",
    description:
      "Simplify your business journey with our efficient registration process. From name availability checks to document submission, we guide you at every step. Our streamlined process ensures a hassle-free start to your entrepreneurial endeavor.",
    icon: FileCheck2,
  },
  {
    title: "Tailored Packages for Every Need",
    description:
      "Explore our Digital and Business packages, designed to cater to the unique requirements of your venture. Choose the package that aligns perfectly with your business goals. Our tailored solutions empower you to customize your journey.",
    icon: Package,
  },
  {
    title: "Ongoing Support and Guidance",
    description:
      "With HopeTex Limited, it's not just about starting a business; it's about sustained success. Benefit from ongoing support, ensuring you thrive at every stage of your entrepreneurial journey. Our dedicated team is here to assist you on your path to business excellence.",
    icon: Headphones,
  },
];

const CTA_HREF = "#get-started";

function SectionBackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[8%] top-20 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[6%] bottom-24 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl"
        aria-hidden
      />
    </>
  );
}

function BannerDecor() {
  return (
    <>
      <svg
        className="ebs-banner__lines pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <linearGradient id="ebs-banner-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        <path
          d="M-20 60 C200 20 380 120 620 70"
          fill="none"
          stroke="url(#ebs-banner-line-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M40 180 C280 140 480 220 720 160"
          fill="none"
          stroke="url(#ebs-banner-line-grad)"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>
      <span className="ebs-banner__spark ebs-banner__spark--1" aria-hidden />
      <span className="ebs-banner__spark ebs-banner__spark--2" aria-hidden />
      <span className="ebs-banner__spark ebs-banner__spark--3" aria-hidden />
    </>
  );
}

function EmpowermentCardItem({
  card,
  index,
}: {
  card: EmpowermentCard;
  index: number;
}) {
  const Icon = card.icon;

  return (
    <ScrollReveal delay={0.08 + index * 0.05} className="h-full">
      <article className="ebs-card group h-full">
        <span className="ebs-card__dots" aria-hidden />
        <div className="ebs-card__icon">
          <Icon className="size-8 stroke-[1.65]" />
        </div>
        <h3 className="ebs-card__title">{card.title}</h3>
        <span className="ebs-card__accent" aria-hidden />
        <p className="ebs-card__desc">{card.description}</p>
        <Link
          href={CTA_HREF}
          className="ebs-card__arrow"
          aria-label={`Get started — ${card.title}`}
        >
          <ArrowRight className="size-4" />
        </Link>
      </article>
    </ScrollReveal>
  );
}

export function EmpowerBusinessSection() {
  return (
    <section
      id="get-started"
      className={cn(
        "empower-business-section relative overflow-hidden",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]",
        "py-24 sm:py-28 lg:py-[6.5rem]"
      )}
      aria-labelledby="empower-business-title"
    >
      <SectionBackgroundDecor />

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="ebs-banner">
            <BannerDecor />
            <div className="ebs-banner__grid">
              <div className="ebs-banner__copy">
                <span className="ebs-banner__badge">
                  <Sparkles className="size-3.5 shrink-0 text-violet-600" aria-hidden />
                  Built for Your Success
                </span>
                <h2
                  id="empower-business-title"
                  className="ebs-banner__heading"
                >
                  Empower Your Business Journey with{" "}
                  <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                    HopeTex
                  </span>
                </h2>
                <p className="ebs-banner__subtitle">
                  Discover seamless solutions for your business aspirations.
                  <br className="hidden sm:block" />
                  Get started with HopeTex Limited today.
                </p>
              </div>
              <div className="ebs-banner__cta-wrap">
                <Link href={CTA_HREF} className="ebs-banner__cta">
                  Start a Business
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ul className="ebs-cards list-none p-0 m-0">
          {empowermentCards.map((card, index) => (
            <li key={card.title} className="min-h-0">
              <EmpowermentCardItem card={card} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
