"use client";

import type { ReactNode } from "react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

type DashboardPageProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function DashboardPage({
  title,
  description,
  children,
}: DashboardPageProps) {
  return (
    <>
      <DashboardHeader title={title} description={description} />
      {children}
    </>
  );
}
