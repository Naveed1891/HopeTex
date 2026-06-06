"use client";

import { PageLayout } from "@/components/templates/page-layout";
import { PageHero } from "@/components/templates/page-hero";
import { DepthCard } from "@/components/motion/depth-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function ComplaintPage() {
  return (
    <PageLayout
      hero={
        <PageHero
          title="Submit a complaint"
          description="We take every concern seriously. Our team will review your submission and respond promptly."
        />
      }
      narrow
    >
      <DepthCard>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <Label htmlFor="order">Order reference (optional)</Label>
            <Input id="order" name="order" placeholder="HTX-0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="details">Details</Label>
            <textarea
              id="details"
              name="details"
              required
              rows={6}
              className="flex w-full rounded-lg border border-input bg-surface-1 px-3.5 py-2.5 text-sm shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>
          <Button type="submit">Submit complaint</Button>
        </form>
      </DepthCard>
    </PageLayout>
  );
}
