"use client";

import Link from "next/link";
import type { PricingPlan } from "@/config/pricing";
import { GlassCard } from "@/components/design-system/glass-card";
import { pricingCardCtaClass, pricingCardCtaOutlineClass } from "@/components/design-system/button-styles";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  plan: PricingPlan;
};

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <GlassCard
      hover
      className={cn(
        "relative flex h-full min-h-[420px] flex-col",
        plan.popular && "border-purple-300/80 ring-1 ring-purple-200/60"
      )}
    >
      {plan.savingsPercent && (
        <Badge
          variant="secondary"
          className="absolute right-5 top-5 border-purple-200/80 bg-violet-50 text-violet-700"
        >
          Save {plan.savingsPercent}%
        </Badge>
      )}
      {plan.popular && (
        <Badge className="mb-4 w-fit border-0 bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 text-white">
          Most popular
        </Badge>
      )}
      <h3 className="text-lg font-bold tracking-tight text-slate-900">{plan.name}</h3>
      <div className="mt-4 flex flex-wrap items-baseline gap-2">
        <span className="text-4xl font-extrabold tabular-nums tracking-tight text-slate-900">
          {formatCurrency(plan.price, plan.currency)}
        </span>
        {plan.stateFeeNote && (
          <span className="text-sm text-slate-500">{plan.stateFeeNote}</span>
        )}
      </div>
      {plan.compareAtPrice && (
        <p className="mt-1 text-sm text-slate-400 line-through">
          {formatCurrency(plan.compareAtPrice, plan.currency)}
        </p>
      )}
      <p className="mt-2 text-sm text-slate-500">{plan.turnaround}</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f.label} className="flex items-start gap-2.5 text-sm">
            {f.included ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-300" />
            )}
            <span
              className={cn(
                f.included ? "text-slate-600" : "text-slate-400",
                f.highlight && "font-semibold text-slate-800"
              )}
            >
              {f.label}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={plan.cta.href}
        className={plan.popular ? pricingCardCtaClass : pricingCardCtaOutlineClass}
      >
        {plan.cta.label}
      </Link>
    </GlassCard>
  );
}
