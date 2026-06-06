"use client";

import { useState } from "react";
import type { PricingRegion } from "@/config/pricing";
import {
  getPlansByRegion,
  pricingRegions,
} from "@/config/pricing";
import { PricingCard } from "@/components/pricing/pricing-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function PricingGrid() {
  const [region, setRegion] = useState<PricingRegion>("us");
  const plans = getPlansByRegion(region);

  return (
    <Tabs
      value={region}
      onValueChange={(v) => setRegion(v as PricingRegion)}
      className="w-full"
    >
      <TabsList className="mx-auto mb-14 h-12 w-full max-w-lg rounded-2xl border border-purple-100/80 bg-white/70 p-1 shadow-[0_10px_30px_rgba(31,41,55,.06)] backdrop-blur">
        {pricingRegions.map((r) => (
          <TabsTrigger
            key={r.id}
            value={r.id}
            className="flex-1 rounded-xl text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-700 data-[state=active]:via-violet-600 data-[state=active]:to-sky-500 data-[state=active]:text-white data-[state=active]:shadow-[0_8px_20px_rgba(124,58,237,.22)]"
          >
            {r.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {pricingRegions.map((r) => (
        <TabsContent key={r.id} value={r.id} className="mt-0">
          {getPlansByRegion(r.id).length === 0 ? (
            <p className="rounded-xl border border-dashed border-border py-20 text-center text-muted-foreground">
              Packages for {r.label} — available in the next release.
            </p>
          ) : (
            <StaggerChildren className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {plans.map((plan) => (
                <m.div key={plan.id} variants={fadeUp}>
                  <PricingCard plan={plan} />
                </m.div>
              ))}
            </StaggerChildren>
          )}
        </TabsContent>
      ))}
    </Tabs>
  );
}
