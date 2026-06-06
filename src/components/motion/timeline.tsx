"use client";

import { m } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export type TimelineStep = {
  id: string;
  title: string;
  description?: string;
  step?: number;
};

type TimelineProps = {
  steps: TimelineStep[];
  className?: string;
};

export function Timeline({ steps, className }: TimelineProps) {
  const reduced = useReducedMotion();

  return (
    <m.ol
      initial={reduced ? undefined : "hidden"}
      whileInView={reduced ? undefined : "visible"}
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
      className={cn("relative space-y-0", className)}
    >
      <div
        aria-hidden
        className="absolute left-[15px] top-2 bottom-2 w-px bg-border"
      />
      {steps.map((step, index) => (
        <m.li
          key={step.id}
          variants={fadeUp}
          className="relative flex gap-6 pb-10 last:pb-0"
        >
          <m.div
            className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface-1 text-xs font-semibold tabular-nums text-primary shadow-xs"
            whileInView={
              reduced
                ? undefined
                : { scale: [0.92, 1], transition: { delay: index * 0.08 } }
            }
          >
            {step.step ?? index + 1}
          </m.div>
          <div className="pt-0.5">
            <h3 className="font-semibold tracking-tight">{step.title}</h3>
            {step.description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {step.description}
              </p>
            )}
          </div>
        </m.li>
      ))}
    </m.ol>
  );
}
