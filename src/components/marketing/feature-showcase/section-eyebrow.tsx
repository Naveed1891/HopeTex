import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type SectionEyebrowProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function SectionEyebrow({ icon: Icon, label, className }: SectionEyebrowProps) {
  return (
    <span className={cn("feature-eyebrow", className)}>
      <Icon className="size-3.5 shrink-0 opacity-80" aria-hidden />
      {label}
    </span>
  );
}
