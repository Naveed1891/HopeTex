import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { GradientHeading, GradientText } from "@/components/design-system/gradient-heading";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type CTASectionProps = {
  title: string;
  highlight?: string;
  description?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
  children?: ReactNode;
};

export function CTASection({
  title,
  highlight,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  className,
  children,
}: CTASectionProps) {
  const titleParts = highlight ? title.split(highlight) : [title];

  return (
    <ScrollReveal>
      <section
        className={cn(
          "relative overflow-hidden rounded-[32px] border border-purple-100/80 bg-white/70 px-8 py-12 text-center shadow-[0_28px_90px_rgba(31,41,55,.10)] backdrop-blur-xl sm:px-12 sm:py-14",
          className
        )}
      >
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-300/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-12 top-0 h-36 w-36 rounded-full bg-sky-300/22 blur-3xl"
          aria-hidden
        />
        <div className="relative z-[1]">
          <GradientHeading as="h2" className="mx-auto max-w-2xl">
            {highlight && titleParts.length > 1 ? (
              <>
                {titleParts[0]}
                <GradientText>{highlight}</GradientText>
                {titleParts[1]}
              </>
            ) : (
              title
            )}
          </GradientHeading>
          {description && (
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              {description}
            </p>
          )}
          {children}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={primaryHref} variant="premium" size="lg">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel && (
              <ButtonLink href={secondaryHref} variant="premiumOutline" size="lg">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
