"use client";

import { useCallback, useRef } from "react";

type MagneticOptions = {
  strength?: number;
};

export function useMagnetic<T extends HTMLElement>({
  strength = 0.25,
}: MagneticOptions = {}) {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    },
    [strength]
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0, 0)";
    el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
    const t = window.setTimeout(() => {
      if (el) el.style.transition = "";
    }, 400);
    return () => window.clearTimeout(t);
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}
