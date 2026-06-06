"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, FileText, Globe2, Shield } from "lucide-react";

const rows = [
  { label: "US LLC — Delaware", status: "Filing in progress", pct: 72 },
  { label: "EIN Application", status: "Approved", pct: 100 },
  { label: "BOIR Report", status: "Submitted", pct: 100 },
];

export function ProductShowcase({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <m.div
      initial={reduced ? undefined : "hidden"}
      animate={reduced ? undefined : "visible"}
      variants={staggerContainer}
      className={cn(
        "relative rounded-2xl border border-border bg-surface-1 p-1 shadow-lg",
        className
      )}
    >
      <div className="rounded-[calc(1rem-4px)] bg-surface-2 p-5 sm:p-6">
        <m.div variants={fadeUp} className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-caption font-medium text-muted-foreground">
              Compliance workspace
            </p>
            <p className="mt-0.5 text-sm font-semibold">Acme Global Holdings</p>
          </div>
          <span className="rounded-full bg-tint-secondary px-2.5 py-1 text-xs font-medium text-brand-secondary-dark dark:text-brand-secondary">
            Active
          </span>
        </m.div>

        <m.ul variants={staggerContainer} className="space-y-3">
          {rows.map((row, i) => (
            <m.li
              key={row.label}
              variants={fadeUp}
              className="rounded-xl border border-border bg-surface-1 p-4 shadow-xs"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">{row.label}</p>
                  <p className="mt-0.5 text-caption text-muted-foreground">
                    {row.status}
                  </p>
                </div>
                {row.pct === 100 ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-secondary" />
                ) : (
                  <span className="text-caption tabular-nums text-muted-foreground">
                    {row.pct}%
                  </span>
                )}
              </div>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-muted">
                <m.div
                  className="h-full rounded-full bg-brand-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${row.pct}%` }}
                  transition={{
                    duration: 1,
                    delay: reduced ? 0 : 0.3 + i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </m.li>
          ))}
        </m.ul>

        <m.div
          variants={fadeUp}
          className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5"
        >
          {[
            { icon: Globe2, label: "3 jurisdictions" },
            { icon: FileText, label: "12 documents" },
            { icon: Shield, label: "Compliant" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-lg bg-muted/50 py-3 text-center"
            >
              <Icon className="h-4 w-4 text-muted-foreground" />
              <span className="text-[11px] font-medium text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </m.div>
      </div>

      {!reduced && (
        <m.div
          aria-hidden
          className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-2xl border border-border bg-surface-1 shadow-md"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </m.div>
  );
}
