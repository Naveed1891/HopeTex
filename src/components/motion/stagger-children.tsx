"use client";

import { m } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type StaggerChildrenProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "section";
};

export function StaggerChildren({
  children,
  className,
  as = "div",
}: StaggerChildrenProps) {
  const reduced = useReducedMotion();
  const Component = m[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
      className={cn(className)}
    >
      {children}
    </Component>
  );
}
