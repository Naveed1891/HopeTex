"use client";

import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function MagneticWrap({
  children,
  className,
  strength = 0.2,
}: MagneticButtonProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLDivElement>({
    strength,
  });

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </div>
  );
}
