import {
  BadgeCheck,
  ClipboardCheck,
  PackageCheck,
  Search,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type HowItWorksStep = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: HowItWorksStep[] = [
  {
    number: "1",
    title: "Check name availability",
    description: "Verify your company name with our guided name-check tool.",
    icon: Search,
  },
  {
    number: "2",
    title: "Choose your package",
    description:
      "Select the formation or compliance package that fits your goals.",
    icon: PackageCheck,
  },
  {
    number: "3",
    title: "Complete your application",
    description:
      "Submit details through our secure, founder-friendly intake forms.",
    icon: ClipboardCheck,
  },
  {
    number: "4",
    title: "Receive confirmation",
    description:
      "Track progress in your client portal until your filing is complete.",
    icon: BadgeCheck,
  },
];

function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[12%] top-16 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[10%] bottom-8 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        aria-hidden
      >
        <defs>
          <linearGradient id="hiw-deco-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M-40 120 C180 80 320 200 520 140"
          fill="none"
          stroke="url(#hiw-deco-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M-20 420 C200 360 380 480 600 400"
          fill="none"
          stroke="url(#hiw-deco-grad)"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>
      <div className="hiw-stars pointer-events-none absolute inset-0" aria-hidden>
        <span className="hiw-star hiw-star--1" />
        <span className="hiw-star hiw-star--2" />
        <span className="hiw-star hiw-star--3" />
        <span className="hiw-star hiw-star--4" />
      </div>
    </>
  );
}

export function HowItWorks() {
  return (
    <section
      className={cn(
        "how-it-works-section relative overflow-hidden",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_38%,#e7f7ff_100%)]",
        "py-24 sm:py-28 lg:py-32"
      )}
      aria-labelledby="how-it-works-title"
    >
      <BackgroundDecor />

      <div className="relative mx-auto max-w-[920px] px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="hiw-eyebrow">Simple. Transparent. Reliable.</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2
              id="how-it-works-title"
              className="mt-7 text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.05em] text-slate-950"
            >
              How it works
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-slate-600">
              From name check to registered entity — four clear steps.
            </p>
          </ScrollReveal>
        </header>

        <div className="hiw-timeline relative mx-auto mt-16 max-w-[760px] sm:mt-20">
          <div className="hiw-spine" aria-hidden />

          <ol className="hiw-steps relative z-[1] list-none p-0 m-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.number} className="hiw-step">
                  <ScrollReveal delay={index * 0.06} className="hiw-step__inner">
                    <div className="hiw-step__node-wrap">
                      <span className="hiw-step__node" aria-hidden>
                        {step.number}
                      </span>
                    </div>
                    <span className="hiw-step__bridge" aria-hidden />
                    <article className="hiw-step__card">
                      <span className="hiw-step__icon" aria-hidden>
                        <Icon className="size-7 stroke-[1.65]" />
                      </span>
                      <div className="hiw-step__copy">
                        <h3 className="hiw-step__title">{step.title}</h3>
                        <p className="hiw-step__desc">{step.description}</p>
                      </div>
                    </article>
                  </ScrollReveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
