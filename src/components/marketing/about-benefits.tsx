"use client";

import { DepthCard } from "@/components/motion/depth-card";
import { StaggerChildren } from "@/components/motion/stagger-children";
import type { Benefit } from "@/lib/content/types";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function AboutBenefits({ benefits }: { benefits: Benefit[] }) {
  return (
    <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {benefits.map((b) => (
        <m.div key={b.title} variants={fadeUp}>
          <DepthCard>
            <h3 className="font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
          </DepthCard>
        </m.div>
      ))}
    </StaggerChildren>
  );
}
