import {
  Clock3,
  Globe2,
  Layers3,
  Network,
  Rocket,
  ShieldCheck,
  TrendingUp,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type BenefitCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const benefits: BenefitCard[] = [
  {
    title: "Global Edge",
    description: "International expertise for limitless business possibilities.",
    icon: Globe2,
  },
  {
    title: "Tailored Solutions",
    description: "Customized approaches for your unique business needs.",
    icon: Layers3,
  },
  {
    title: "Strategic Growth",
    description: "Partnering in your strategic expansion journey for success.",
    icon: TrendingUp,
  },
  {
    title: "Secure Transactions",
    description: "Ensuring confidentiality with cutting-edge security measures.",
    icon: ShieldCheck,
  },
  {
    title: "Efficiency Unleashed",
    description: "Swift solutions for seamless business operations.",
    icon: Rocket,
  },
  {
    title: "Timely Support",
    description: "Responsive assistance for prompt issue resolution.",
    icon: Clock3,
  },
  {
    title: "Client-Centric Focus",
    description: "Dedicated to success through collaboration and support.",
    icon: UsersRound,
  },
  {
    title: "Global Connections",
    description: "Explore diverse collaborations with our worldwide network.",
    icon: Network,
  },
];

function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[10%] top-12 h-80 w-80 rounded-full bg-violet-300/22 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[8%] top-1/3 h-96 w-96 rounded-full bg-sky-300/28 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-16 left-[6%] h-64 w-64 rounded-full bg-fuchsia-200/20 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden
      >
        <defs>
          <linearGradient id="wcus-deco-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M-60 80 C120 40 200 160 380 100"
          fill="none"
          stroke="url(#wcus-deco-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M680 200 C520 140 420 280 260 220"
          fill="none"
          stroke="url(#wcus-deco-grad)"
          strokeWidth="1"
        />
        <path
          d="M-40 520 C180 460 340 560 520 500"
          fill="none"
          stroke="url(#wcus-deco-grad)"
          strokeWidth="1"
          opacity="0.65"
        />
      </svg>
      <div className="wcus-stars pointer-events-none absolute inset-0" aria-hidden>
        <span className="wcus-star wcus-star--1" />
        <span className="wcus-star wcus-star--2" />
        <span className="wcus-star wcus-star--3" />
        <span className="wcus-star wcus-star--4" />
        <span className="wcus-star wcus-star--5" />
      </div>
    </>
  );
}

function HeadingDivider() {
  return (
    <div className="wcus-heading-divider" aria-hidden>
      <span className="wcus-heading-divider__line" />
      <span className="wcus-heading-divider__gem" />
      <span className="wcus-heading-divider__line" />
    </div>
  );
}

function BenefitCardItem({
  benefit,
  index,
  featured = false,
}: {
  benefit: BenefitCard;
  index: number;
  featured?: boolean;
}) {
  const Icon = benefit.icon;

  return (
    <ScrollReveal delay={index * 0.04} className="h-full">
      <article
        className={cn("wcus-card group h-full", featured && "wcus-card--featured")}
      >
        <span className="wcus-card__glow wcus-card__glow--tl" aria-hidden />
        <span className="wcus-card__glow wcus-card__glow--br" aria-hidden />

        <span className="wcus-card__icon-wrap">
          <span className="wcus-card__icon">
            <Icon className={cn("stroke-[1.65]", featured ? "size-9" : "size-8")} />
          </span>
        </span>

        <h3 className="wcus-card__title">{benefit.title}</h3>
        <span className="wcus-card__accent" aria-hidden />
        <p className="wcus-card__desc">{benefit.description}</p>
      </article>
    </ScrollReveal>
  );
}

export function WhyChooseUs() {
  return (
    <section
      className={cn(
        "why-choose-us-section relative overflow-hidden",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]",
        "py-24 sm:py-28 lg:py-32"
      )}
      aria-labelledby="why-choose-us-title"
    >
      <svg className="absolute h-0 w-0" aria-hidden>
        <defs>
          <linearGradient id="wcus-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="55%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
        </defs>
      </svg>
      <BackgroundDecor />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2
              id="why-choose-us-title"
              className="text-[clamp(2.2rem,4vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950"
            >
              Why{" "}
              <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                Choose Us
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <HeadingDivider />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-[720px] text-lg leading-relaxed text-slate-600">
              Experience the HopeTex advantage—where excellence meets innovation, and
              your success is our commitment.
            </p>
          </ScrollReveal>
        </header>

        <ul className="wcus-grid mx-auto mt-16 list-none p-0 sm:mt-20">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className={cn("wcus-grid__item min-h-0", `wcus-grid__item--${index + 1}`)}
            >
              <BenefitCardItem
                benefit={benefit}
                index={index}
                featured={index === 3 || index === 4}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
