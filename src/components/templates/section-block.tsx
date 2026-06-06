import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StaggerChildren } from "@/components/motion/stagger-children";
import type { ReactNode } from "react";

type SectionBlockProps = {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
  stagger?: boolean;
};

export function SectionBlock({
  id,
  title,
  description,
  children,
  className,
  stagger = false,
}: SectionBlockProps) {
  const body = stagger ? (
    <StaggerChildren className={className}>{children}</StaggerChildren>
  ) : (
    <div className={className}>{children}</div>
  );

  return (
    <section id={id} className="py-20 lg:py-28">
      {(title || description) && (
        <ScrollReveal className="mb-14 max-w-2xl">
          {title && (
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-[-0.04em] text-slate-950">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          )}
        </ScrollReveal>
      )}
      {body}
    </section>
  );
}
