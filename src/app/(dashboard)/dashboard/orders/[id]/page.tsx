"use client";

import { use } from "react";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DepthCard } from "@/components/motion/depth-card";
import { mockOrders } from "@/lib/mock/dashboard";
import { routes } from "@/config/routes";
import { ButtonLink } from "@/components/ui/button-link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default function OrderDetailPage({ params }: Props) {
  const { id } = use(params);
  const order = mockOrders.find((o) => o.id === id);
  if (!order) notFound();

  return (
    <DashboardPage title={order.id} description={order.service}>
      <div className="space-y-6 p-6 lg:p-10">
        <ButtonLink href={routes.dashboard.orders} variant="ghost" size="sm">
          ← Back to orders
        </ButtonLink>
        <DepthCard>
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-caption text-muted-foreground">Company</dt>
              <dd className="mt-1 font-medium">{order.company}</dd>
            </div>
            <div>
              <dt className="text-caption text-muted-foreground">Status</dt>
              <dd className="mt-1 font-medium capitalize">
                {order.status.replace("_", " ")}
              </dd>
            </div>
            <div>
              <dt className="text-caption text-muted-foreground">Created</dt>
              <dd className="mt-1 font-medium">{order.createdAt}</dd>
            </div>
            <div>
              <dt className="text-caption text-muted-foreground">Amount</dt>
              <dd className="mt-1 font-medium">${order.amount}</dd>
            </div>
          </dl>
        </DepthCard>
      </div>
    </DashboardPage>
  );
}
