"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DepthCard } from "@/components/motion/depth-card";
import { mockCompanies } from "@/lib/mock/dashboard";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function CompaniesPage() {
  return (
    <DashboardPage title="Companies" description="Entities registered through HopeTex.">
      <div className="p-6 lg:p-10">
        <StaggerChildren className="grid gap-5 sm:grid-cols-2">
          {mockCompanies.map((c) => (
            <m.div key={c.id} variants={fadeUp}>
              <DepthCard>
                <h3 className="font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.jurisdiction}</p>
                <span className="mt-4 inline-block rounded-full bg-tint-secondary px-3 py-1 text-xs font-medium text-brand-secondary-dark dark:text-brand-secondary">
                  {c.status}
                </span>
              </DepthCard>
            </m.div>
          ))}
        </StaggerChildren>
      </div>
    </DashboardPage>
  );
}
