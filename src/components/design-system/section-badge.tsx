import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span className={cn("ref-badge", className)}>
      {children}
    </span>
  );
}
