"use client";

import { m } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex min-h-0 flex-1 flex-col"
    >
      {children}
    </m.div>
  );
}
