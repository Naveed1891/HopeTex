import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SplitFeatureProps = {
  title: string;
  description: string;
  visual: ReactNode;
  reverse?: boolean;
  children?: ReactNode;
};

export function SplitFeature({
  title,
  description,
  visual,
  reverse = false,
  children,
}: SplitFeatureProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-12 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:[&>div:first-child]:order-2"
      )}
    >
      <ScrollReveal>
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {description}
        </p>
        {children && <div className="mt-6">{children}</div>}
      </ScrollReveal>
      <ScrollReveal delay={0.1}>{visual}</ScrollReveal>
    </div>
  );
}
