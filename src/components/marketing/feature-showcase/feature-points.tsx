import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeaturePoint = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FeaturePointsProps = {
  items: FeaturePoint[];
  className?: string;
};

export function FeaturePoints({ items, className }: FeaturePointsProps) {
  return (
    <ul className={cn("feature-points", className)}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <li key={item.title} className="feature-point">
            <span className="feature-point__icon" aria-hidden>
              <Icon className="size-[18px] stroke-[1.75]" />
            </span>
            <div className="feature-point__copy">
              <p className="feature-point__title">{item.title}</p>
              <p className="feature-point__desc">{item.description}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
