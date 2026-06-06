"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const CinematicDocumentsInner = dynamic(() => import("./company-network-inner"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent" aria-hidden />,
});

type CinematicDocumentsSceneProps = {
  className?: string;
  scrollProgress?: number;
};

export function CinematicDocumentsScene({
  className,
  scrollProgress = 0,
}: CinematicDocumentsSceneProps) {
  const reduced = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(scrollProgress);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setScroll(scrollProgress);
  }, [scrollProgress]);

  useEffect(() => {
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  const isDark = mounted && resolvedTheme === "dark";

  if (reduced) {
    return <div className={cn("h-full w-full bg-tint-brand", className)} aria-hidden />;
  }

  return (
    <div
      className={cn("hero-3d-canvas relative h-full w-full overflow-visible", className)}
      aria-hidden
    >
      <CinematicDocumentsInner mouse={mouse} scroll={scroll} isDark={isDark} />
    </div>
  );
}
