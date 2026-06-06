"use client";

import { StatCard } from "@/components/dashboard/stat-card";
import { EmptyState } from "@/components/dashboard/empty-state";
import { Package, FileText, Building2, Clock } from "lucide-react";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export function DashboardShellPreview() {
  return (
    <div className="space-y-10 p-6 lg:p-10">
      <StaggerChildren className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <m.div variants={fadeUp}>
          <StatCard
            label="Active orders"
            value="3"
            numericValue={3}
            change="+1 this week"
            trend="up"
            icon={Package}
          />
        </m.div>
        <m.div variants={fadeUp}>
          <StatCard
            label="Companies"
            value="2"
            numericValue={2}
            icon={Building2}
          />
        </m.div>
        <m.div variants={fadeUp}>
          <StatCard
            label="Documents"
            value="12"
            numericValue={12}
            change="All verified"
            trend="neutral"
            icon={FileText}
          />
        </m.div>
        <m.div variants={fadeUp}>
          <StatCard
            label="Avg. turnaround"
            value="18d"
            numericValue={18}
            suffix="d"
            change="On track"
            trend="up"
            icon={Clock}
          />
        </m.div>
      </StaggerChildren>
      <EmptyState
        icon={Package}
        title="No recent activity"
        description="Orders, documents, tickets, and chat will appear here as your workspace grows."
      />
    </div>
  );
}
