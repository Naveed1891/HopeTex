"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { AnimatedCard } from "@/components/motion/animated-card";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string;
  numericValue?: number;
  suffix?: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  className?: string;
};

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || reduced) {
      setDisplay(value);
      return;
    }
    let start = 0;
    const duration = 800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    return () => {
      start = value;
      void start;
    };
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export function StatCard({
  label,
  value,
  numericValue,
  suffix,
  change,
  trend = "neutral",
  icon: Icon,
  className,
}: StatCardProps) {
  return (
    <AnimatedCard className={cn("p-6", className)} hover>
      <div className="flex items-start justify-between gap-4">
        <p className="text-sm text-muted-foreground">{label}</p>
        {Icon && (
          <span className="rounded-lg bg-tint-brand p-2 text-primary">
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <p className="mt-3 text-3xl font-semibold tracking-tight">
        {numericValue !== undefined ? (
          <AnimatedNumber value={numericValue} suffix={suffix} />
        ) : (
          value
        )}
      </p>
      {change && (
        <p
          className={cn(
            "mt-2 text-caption font-medium",
            trend === "up" && "text-brand-secondary-dark dark:text-brand-secondary",
            trend === "down" && "text-destructive",
            trend === "neutral" && "text-muted-foreground"
          )}
        >
          {change}
        </p>
      )}
    </AnimatedCard>
  );
}
