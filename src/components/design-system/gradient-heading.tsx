import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GradientHeadingProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
};

export function GradientHeading({
  children,
  as: Tag = "h1",
  className,
}: GradientHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-extrabold tracking-[-0.05em] text-slate-950",
        Tag === "h1" && "text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.05]",
        Tag === "h2" && "text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1]",
        Tag === "h3" && "text-xl leading-tight",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
