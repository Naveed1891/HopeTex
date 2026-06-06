"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { Globe2, ShieldCheck } from "lucide-react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { fadeUp } from "@/lib/motion";

export function TrustBanner() {
  const reduced = useReducedMotion();

  return (
    <m.section
      initial={reduced ? undefined : "hidden"}
      animate={reduced ? undefined : "visible"}
      variants={fadeUp}
      className="relative overflow-hidden border-b border-border"
      aria-label="Global trust banner"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85 dark:bg-background/90" />
      </div>

      <div className="container-wide relative flex flex-col items-start justify-between gap-6 py-8 sm:flex-row sm:items-center sm:py-10">
        <div className="max-w-xl">
          <p className="text-caption font-medium uppercase tracking-[0.2em] text-brand-secondary-dark dark:text-brand-secondary">
            Global platform
          </p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            Trusted by entrepreneurs in 100+ countries
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Formation, compliance, and ongoing support — built for founders who
            operate across borders.
          </p>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tint-secondary text-brand-secondary-dark dark:text-brand-secondary">
              <Globe2 className="h-4 w-4" />
            </span>
            100+ countries
          </div>
          <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tint-brand text-primary">
              <ShieldCheck className="h-4 w-4" />
            </span>
            Enterprise-grade compliance
          </div>
        </div>
      </div>
    </m.section>
  );
}
