import { AnimatedBackground } from "@/components/motion/animated-background";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
  hero?: ReactNode;
  narrow?: boolean;
  fullBleedHero?: boolean;
};

export function PageShell({
  children,
  className,
  hero,
  narrow = false,
  fullBleedHero = false,
}: PageShellProps) {
  return (
    <div className={cn("relative flex flex-1 flex-col", className)}>
      <AnimatedBackground variant="premium" />
      {hero && (
        <section
          className={cn(
            "relative border-b border-purple-100/60",
            !fullBleedHero && "section-padding pb-14 pt-8 sm:pb-16 sm:pt-10"
          )}
        >
          {fullBleedHero ? (
            hero
          ) : (
            <div
              className={cn(
                narrow ? "container-content" : "container-wide"
              )}
            >
              {hero}
            </div>
          )}
        </section>
      )}
      <div
        className={cn(
          "relative flex-1 section-padding",
          narrow ? "container-content" : "container-wide"
        )}
      >
        {children}
      </div>
    </div>
  );
}
