"use client";

import { PageLayout } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { DepthCard } from "@/components/motion/depth-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { mockOrders } from "@/lib/mock/dashboard";

export default function TrackOrderPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Track your order"
          description="Enter your order reference and email to view real-time status."
        />
      }
      narrow
    >
      <DepthCard className="mb-10">
        <form className="flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-1 space-y-2">
            <Label htmlFor="orderId">Order ID</Label>
            <Input id="orderId" placeholder="HTX-2401" />
          </div>
          <div className="flex-1 space-y-2">
            <Label htmlFor="trackEmail">Email</Label>
            <Input id="trackEmail" type="email" placeholder="you@company.com" />
          </div>
          <Button type="submit">Track</Button>
        </form>
      </DepthCard>
      <p className="mb-4 text-caption font-medium uppercase tracking-wider text-muted-foreground">
        Example orders
      </p>
      <ul className="space-y-3">
        {mockOrders.map((o) => (
          <li
            key={o.id}
            className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-border bg-card px-5 py-4"
          >
            <div>
              <p className="font-medium">{o.id}</p>
              <p className="text-sm text-muted-foreground">{o.service}</p>
            </div>
            <span className="rounded-full bg-tint-secondary px-3 py-1 text-xs font-medium capitalize text-brand-secondary-dark dark:text-brand-secondary">
              {o.status.replace("_", " ")}
            </span>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
