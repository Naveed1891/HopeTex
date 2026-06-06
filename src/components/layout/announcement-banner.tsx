"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { transitionBase } from "@/lib/motion";

const MESSAGES = [
  "Trusted by entrepreneurs in 100+ countries",
  "Global business formation and compliance services",
  "Fast formation. Ongoing compliance. Global support.",
] as const;

const STORAGE_KEY = "hopetex-announcement-dismissed";

export function AnnouncementBanner() {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "1") return;
    setVisible(true);
    const rotate = window.setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 8000);
    return () => window.clearInterval(rotate);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={transitionBase}
          className="overflow-hidden border-b border-border bg-surface-2"
        >
          <div className="container-wide flex h-9 items-center justify-center gap-3 px-4 text-caption">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-secondary"
              aria-hidden
            />
            <AnimatePresence mode="wait">
              <m.p
                key={index}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="text-muted-foreground"
              >
                {MESSAGES[index]}
              </m.p>
            </AnimatePresence>
            <button
              type="button"
              onClick={dismiss}
              className={cn(
                "ml-2 shrink-0 rounded-md p-1 text-muted-foreground transition-colors",
                "hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
              aria-label="Dismiss announcement"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
