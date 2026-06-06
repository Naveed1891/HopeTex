"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { glassCardClass, glassCardHoverClass } from "@/components/design-system/button-styles";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type DepthCardProps = {
  children: ReactNode;
  className?: string;
};

export function DepthCard({ children, className }: DepthCardProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className={cn(glassCardClass, className)}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      className={cn(glassCardClass, glassCardHoverClass, className)}
      whileHover={{
        y: -4,
        boxShadow:
          "0 28px 85px rgba(124, 58, 237, 0.14), 0 10px 35px rgba(14, 165, 233, 0.08)",
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
