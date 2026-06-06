"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Globe2, ShieldCheck, Zap } from "lucide-react";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { MagneticWrap } from "@/components/motion/magnetic-button";
import { Button } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const trustItems = [
  { icon: Globe2, label: "100+ countries served" },
  { icon: ShieldCheck, label: "Enterprise-grade compliance" },
  { icon: Zap, label: "Average 18-day formation" },
];

export function MarketingHero() {
  const reduced = useReducedMotion();

  return (
    <m.section
      initial={reduced ? undefined : "hidden"}
      animate={reduced ? undefined : "visible"}
      variants={staggerContainer}
      className="relative overflow-hidden pb-20 pt-8 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 dot-grid opacity-40"
      />

      <div className="container-wide relative grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="max-w-xl">
          <m.p
            variants={fadeUp}
            className="text-caption font-medium uppercase tracking-[0.2em] text-brand-secondary-dark dark:text-brand-secondary"
          >
            HopeTex Platform
          </m.p>

          <m.h1 variants={fadeUp} className="text-display mt-5 text-foreground">
            Global business formation &amp; compliance
          </m.h1>

          <m.p variants={fadeUp} className="text-body-lg mt-6 text-muted-foreground">
            Incorporate, stay compliant, and manage every filing from one
            premium workspace — built for founders scaling across borders.
          </m.p>

          <m.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticWrap>
              <Button size="lg" asChild>
                <Link href={routes.client.register}>
                  Start your company
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticWrap>
            <Button size="lg" variant="outline" asChild>
              <Link href={routes.packages}>View packages</Link>
            </Button>
          </m.div>

          <m.ul
            variants={fadeUp}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8"
          >
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tint-secondary text-brand-secondary-dark dark:text-brand-secondary">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </m.ul>
        </div>

        <m.div variants={fadeUp} className="relative lg:pl-6">
          <ProductShowcase />
        </m.div>
      </div>
    </m.section>
  );
}
