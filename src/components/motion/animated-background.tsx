"use client";

import { cn } from "@/lib/utils";

type AnimatedBackgroundProps = {
  className?: string;
  variant?: "subtle" | "grid" | "premium";
};

export function AnimatedBackground({
  className,
  variant = "premium",
}: AnimatedBackgroundProps) {
  if (variant === "grid") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 dot-grid opacity-30",
          className
        )}
      />
    );
  }

  if (variant === "subtle") {
    return (
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0", className)}
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#fbf7ff_0%,#ffffff_42%,#e7f7ff_100%)]" />
      <div className="absolute -left-[10%] top-12 h-72 w-72 rounded-full bg-violet-300/18 blur-3xl" />
      <div className="absolute -right-[8%] top-1/4 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
        <defs>
          <linearGradient id="page-deco-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
        </defs>
        <path
          d="M-40 80 C180 40 320 160 520 100"
          fill="none"
          stroke="url(#page-deco-grad)"
          strokeWidth="1.25"
        />
        <path
          d="M680 200 C520 140 420 280 260 220"
          fill="none"
          stroke="url(#page-deco-grad)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
