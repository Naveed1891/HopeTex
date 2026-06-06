import {
  ArrowUpRight,
  BadgeCheck,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";

type ReviewPlatform = {
  name: string;
  rating: string;
  label: string;
  button: string;
  href: string;
  type: "google" | "trustpilot";
  ariaLabel: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  accent: string;
};

const reviewPlatforms: ReviewPlatform[] = [
  {
    name: "Google Business",
    rating: "4.9",
    label: "Trusted by founders and business owners",
    button: "Read reviews",
    href: "https://share.google/U6647AlmUNatCY8ht",
    type: "google",
    ariaLabel: "Read HopeTex Google Business reviews",
  },
  {
    name: "Trustpilot",
    rating: "4.8",
    label: "Trusted by founders and business owners",
    button: "View feedback",
    href: "https://www.trustpilot.com/review/hopetexx.com",
    type: "trustpilot",
    ariaLabel: "Read HopeTex Trustpilot reviews",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Amazing services ... they performed beyond expectations and delivered more than what we agree upon. Simply superb, will surely hire their services again. ❤️",
    name: "Zeeshan Haider",
    role: "Co-Founder, Zee Commerce LLC",
    initials: "ZH",
    accent: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "Amazing Agency and has a qualified team…Amazing Agency and has a qualified team who knows how to resolve customer issues. I have taken benefit from them, so I want you should too. Highly Recommended!",
    name: "Aanish Mujahid",
    role: "CEO, OPTIMUS CLICKS LTD",
    initials: "AM",
    accent: "from-sky-500 to-blue-600",
  },
];

function PanelDecor() {
  return (
    <>
      <div
        className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 top-1/3 h-64 w-64 rounded-full bg-sky-300/22 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-6 right-[18%] h-40 w-40 rounded-full bg-purple-200/18 blur-3xl"
        aria-hidden
      />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.12]"
        aria-hidden
      >
        <defs>
          <linearGradient id="reviews-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M-40 80 C180 40 320 160 520 100"
          fill="none"
          stroke="url(#reviews-orbit-grad)"
          strokeWidth="1.2"
        />
        <path
          d="M680 60 C520 20 360 140 180 90"
          fill="none"
          stroke="url(#reviews-orbit-grad)"
          strokeWidth="1"
        />
        <path
          d="M-20 420 C220 360 400 480 640 420"
          fill="none"
          stroke="url(#reviews-orbit-grad)"
          strokeWidth="1"
          opacity="0.7"
        />
      </svg>
      <Sparkles
        className="pointer-events-none absolute right-8 top-8 h-5 w-5 text-violet-400/70 sm:right-12 sm:top-10"
        aria-hidden
      />
    </>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("h-9 w-9", className)}>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

function TrustpilotIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00B67A]",
        className
      )}
      aria-hidden
    >
      <Star className="h-5 w-5 fill-white text-white" />
    </span>
  );
}

function StarRating({ type }: { type: ReviewPlatform["type"] }) {
  const colorClass =
    type === "google"
      ? "fill-amber-400 text-amber-400"
      : "fill-[#00B67A] text-[#00B67A]";

  return (
    <span className="inline-flex items-center justify-center gap-0.5" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={cn("h-4 w-4 sm:h-[18px] sm:w-[18px]", colorClass)} />
      ))}
    </span>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <ScrollReveal delay={0.08 + index * 0.05}>
      <article
        className={cn(
          "group h-full rounded-[24px] border border-white/80 bg-white/78 p-5 sm:p-6",
          "shadow-[0_16px_48px_rgba(31,41,55,.07)] backdrop-blur-xl",
          "transition-all duration-300 hover:-translate-y-0.5",
          "hover:border-purple-200/80 hover:shadow-[0_20px_55px_rgba(124,58,237,.10)]"
        )}
      >
        <Quote
          className="h-5 w-5 fill-violet-100 text-violet-500"
          aria-hidden
        />
        <p className="mt-3 break-words text-sm leading-relaxed text-slate-600">
          {testimonial.quote}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div
            className={cn(
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-xs font-bold text-white shadow-sm",
              testimonial.accent
            )}
            aria-hidden
          >
            {testimonial.initials}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-sm font-bold text-slate-900">
                {testimonial.name}
              </p>
              <BadgeCheck
                className="h-4 w-4 shrink-0 text-sky-500"
                aria-label="Verified"
              />
            </div>
            <p className="truncate text-xs text-slate-500">{testimonial.role}</p>
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

function RatingCard({
  platform,
  index,
}: {
  platform: ReviewPlatform;
  index: number;
}) {
  return (
    <ScrollReveal delay={0.1 + index * 0.06}>
      <a
        href={platform.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={platform.ariaLabel}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-[32px]",
          "border border-purple-100/80 bg-white/82 p-6 text-center sm:p-7 lg:p-8",
          "shadow-[0_28px_80px_rgba(31,41,55,.10)] backdrop-blur-xl",
          "transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/80",
          "hover:shadow-[0_34px_95px_rgba(124,58,237,.16),0_12px_40px_rgba(14,165,233,.10)]"
        )}
      >
        <div
          className="pointer-events-none absolute inset-x-6 -bottom-8 h-16 rounded-full bg-violet-400/10 blur-2xl"
          aria-hidden
        />

        <div className="relative mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border border-white/90 bg-white shadow-[0_10px_32px_rgba(31,41,55,.08)]">
          {platform.type === "google" ? <GoogleIcon /> : <TrustpilotIcon />}
        </div>

        <p className="mt-4 text-sm font-bold text-slate-900">{platform.name}</p>

        <div className="mt-3">
          <StarRating type={platform.type} />
        </div>

        <div className="mt-4 flex items-end justify-center gap-1">
          <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-[clamp(2.75rem,5vw,3.75rem)] font-extrabold leading-none tracking-[-0.04em] text-transparent">
            {platform.rating}
          </span>
          <span className="pb-1 text-lg font-medium text-slate-400">/5</span>
        </div>

        <p className="mt-3 text-sm leading-snug text-slate-500">{platform.label}</p>

        <span
          className={cn(
            "mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl",
            "border border-purple-200/80 bg-white/65 px-5 py-3 text-sm font-semibold text-slate-800",
            "shadow-[inset_0_1px_0_rgba(255,255,255,.85)] backdrop-blur-sm",
            "transition-all duration-300 group-hover:border-purple-300/90 group-hover:bg-white/90"
          )}
        >
          {platform.button}
          <ArrowUpRight className="h-4 w-4 text-violet-500 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </a>
    </ScrollReveal>
  );
}

export function ReviewsSection() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_38%,#eef7ff_72%,#e7f7ff_100%)] px-4 py-10 sm:px-6 lg:px-8"
      aria-labelledby="reviews-section-title"
    >
      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[34px] border border-white/80 bg-white/70 px-5 py-10 shadow-[0_28px_90px_rgba(31,41,55,.09)] backdrop-blur-xl sm:px-8 sm:py-11 lg:px-10 lg:py-12 xl:px-12">
        <PanelDecor />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-100/90 bg-white/85 px-4 py-2 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-violet-600 shadow-[0_8px_24px_rgba(124,58,237,.08)]">
                <Star className="h-3.5 w-3.5 fill-violet-400 text-violet-400" aria-hidden />
                Client Reviews
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                id="reviews-section-title"
                className="mt-5 text-[clamp(2.2rem,4vw,4.8rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-slate-950"
              >
                Loved by
                <br />
                Founders
                <br />
                <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                  Worldwide
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
                Thousands of founders and businesses trust HopeTex to incorporate, stay
                compliant, and scale with confidence.
              </p>
            </ScrollReveal>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-7">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {reviewPlatforms.map((platform, index) => (
              <RatingCard key={platform.name} platform={platform} index={index} />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.14}>
          <div className="relative z-10 mt-8 flex items-center justify-center gap-3 sm:mt-9 sm:gap-4">
            <div
              className="hidden h-px max-w-[120px] flex-1 bg-gradient-to-r from-transparent via-slate-200 to-slate-200 sm:block"
              aria-hidden
            />
            <p className="flex items-center gap-2 text-center text-sm text-slate-600 sm:text-[0.9375rem]">
              <ShieldCheck className="h-4 w-4 shrink-0 text-violet-500" aria-hidden />
              <span>
                Trusted by{" "}
                <span className="bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text font-bold text-transparent">
                  10,000+
                </span>{" "}
                founders and growing businesses
              </span>
            </p>
            <div
              className="hidden h-px max-w-[120px] flex-1 bg-gradient-to-l from-transparent via-slate-200 to-slate-200 sm:block"
              aria-hidden
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
