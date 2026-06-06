import Image from "next/image";
import { Building2, UserCheck, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { marketingImages } from "@/config/images";
import { cn } from "@/lib/utils";

type CredentialType = "acsp" | "caa";

type Credential = {
  title: string;
  description: string;
  pill: string;
  pillIcon: LucideIcon;
  type: CredentialType;
  logoSrc: string;
  logoAlt: string;
};

const credentials: Credential[] = [
  {
    title: "ACSP Certified",
    description:
      "Authorised Corporate Service Provider support for trusted company services.",
    pill: "Companies House Authorised",
    pillIcon: Building2,
    type: "acsp",
    logoSrc: marketingImages.credentials.irs,
    logoAlt: "IRS credential logo",
  },
  {
    title: "CAA Certified",
    description:
      "Certified Acceptance Agent assistance for relevant tax-related application workflows.",
    pill: "Acceptance Agent Support",
    pillIcon: UserCheck,
    type: "caa",
    logoSrc: marketingImages.credentials.caa,
    logoAlt: "CAA Certified Acceptance Agent logo",
  },
];

function BackgroundDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-[8%] top-16 h-72 w-72 rounded-full bg-violet-300/22 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-[6%] top-1/4 h-80 w-80 rounded-full bg-sky-300/26 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.11]"
        aria-hidden
      >
        <defs>
          <linearGradient id="tcred-deco-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M-50 100 C160 60 280 180 480 120"
          fill="none"
          stroke="url(#tcred-deco-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M720 180 C560 120 420 260 240 200"
          fill="none"
          stroke="url(#tcred-deco-grad)"
          strokeWidth="1"
        />
        <path
          d="M-30 480 C200 420 360 520 560 460"
          fill="none"
          stroke="url(#tcred-deco-grad)"
          strokeWidth="1"
          opacity="0.65"
        />
      </svg>
      <div className="tcred-stars pointer-events-none absolute inset-0" aria-hidden>
        <span className="tcred-star tcred-star--1" />
        <span className="tcred-star tcred-star--2" />
        <span className="tcred-star tcred-star--3" />
        <span className="tcred-star tcred-star--4" />
      </div>
    </>
  );
}

function CredentialLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-6 flex min-h-[150px] items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={160}
        quality={100}
        className="mx-auto h-[120px] w-[120px] object-contain drop-shadow-[0_18px_40px_rgba(124,58,237,.18)] transition-all duration-300 group-hover:drop-shadow-[0_22px_48px_rgba(124,58,237,.26)] sm:h-[140px] sm:w-[140px]"
      />
    </div>
  );
}

function CredentialCard({ credential, index }: { credential: Credential; index: number }) {
  const PillIcon = credential.pillIcon;

  return (
    <ScrollReveal delay={index * 0.06} className="h-full">
      <article
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[30px]",
          "border border-purple-100/80 bg-white/78 p-9 text-center sm:p-10",
          "shadow-[0_24px_80px_rgba(31,41,55,.09)] backdrop-blur-xl",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-1.5 hover:border-purple-300/80",
          "hover:shadow-[0_32px_90px_rgba(124,58,237,.16),0_12px_40px_rgba(14,165,233,.10)]"
        )}
      >
        <span
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-violet-300/20 to-transparent opacity-60"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-gradient-to-tr from-sky-300/18 to-transparent opacity-50"
          aria-hidden
        />

        <div className="relative z-[1] flex flex-1 flex-col">
          <CredentialLogo src={credential.logoSrc} alt={credential.logoAlt} />

          <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-[1.35rem]">
            {credential.title}
          </h3>

          <p className="mx-auto mt-4 max-w-[22rem] flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
            {credential.description}
          </p>

          <div className="mt-8 flex justify-center">
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-purple-200/90",
                "bg-violet-50/80 px-5 py-2.5 text-xs font-semibold text-violet-700",
                "transition-all duration-300 group-hover:border-purple-300 group-hover:bg-violet-50"
              )}
            >
              <PillIcon className="h-3.5 w-3.5 shrink-0 stroke-[2]" aria-hidden />
              {credential.pill}
            </span>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function TrustedCredentials() {
  return (
    <section
      className="trusted-credentials-section relative overflow-hidden bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)] py-20 sm:py-24 lg:py-28"
      aria-labelledby="trusted-credentials-title"
    >
      <BackgroundDecor />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
        <header className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <span className="tcred-eyebrow">Trusted Credentials</span>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2
              id="trusted-credentials-title"
              className="mt-7 text-[clamp(2.8rem,5vw,5.3rem)] font-extrabold leading-[1.03] tracking-[-0.05em] text-slate-950"
            >
              Certified.{" "}
              <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                Trusted.
              </span>{" "}
              Compliant.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[760px] text-lg leading-relaxed text-slate-600">
              Official credentials that strengthen confidence in every formation and
              compliance service we provide.
            </p>
          </ScrollReveal>
        </header>

        <div className="mx-auto mt-14 grid max-w-[920px] grid-cols-1 gap-7 md:grid-cols-2 md:gap-8 lg:mt-16">
          {credentials.map((credential, index) => (
            <CredentialCard key={credential.title} credential={credential} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
