import { SectionBadge } from "@/components/design-system/section-badge";
import { GradientHeading, GradientText } from "@/components/design-system/gradient-heading";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  badge?: string;
  actions?: ReactNode;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  titleHighlight,
  description,
  badge,
  actions,
  align = "left",
}: PageHeroProps) {
  const titleParts = titleHighlight ? title.split(titleHighlight) : [title];

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {badge && (
        <SectionBadge className="mb-6">{badge}</SectionBadge>
      )}
      {eyebrow && (
        <SectionBadge className={cn("mb-6", align === "center" && "mx-auto")}>
          {eyebrow}
        </SectionBadge>
      )}
      <GradientHeading as="h1">
        {titleHighlight && titleParts.length > 1 ? (
          <>
            {titleParts[0]}
            <GradientText>{titleHighlight}</GradientText>
            {titleParts[1]}
          </>
        ) : (
          title
        )}
      </GradientHeading>
      {description && (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
      {actions && (
        <div
          className={cn(
            "mt-10 flex flex-wrap gap-3",
            align === "center" && "justify-center"
          )}
        >
          {actions}
        </div>
      )}
    </div>
  );
}
