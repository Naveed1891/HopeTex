import { glassCardClass, glassCardHoverClass } from "@/components/design-system/button-styles";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function GlassCard({ children, className, hover = true }: GlassCardProps) {
  return (
    <div
      className={cn(
        glassCardClass,
        hover && glassCardHoverClass,
        className
      )}
    >
      {children}
    </div>
  );
}
