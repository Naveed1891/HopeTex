"use client";

import { useRouter } from "next/navigation";
import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DataTable } from "@/components/dashboard/data-table";
import { mockOrders } from "@/lib/mock/dashboard";
import { routes } from "@/config/routes";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function OrdersPage() {
  const router = useRouter();

  return (
    <DashboardPage title="Orders" description="Track all formation and compliance orders.">
      <div className="p-6 lg:p-10">
        <DataTable
          data={mockOrders}
          onRowClick={(row) => router.push(routes.dashboard.order(row.id))}
          columns={[
            { key: "id", header: "Order" },
            { key: "service", header: "Service" },
            { key: "company", header: "Company" },
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <Badge variant={row.status === "completed" ? "secondary" : "default"}>
                  {row.status.replace("_", " ")}
                </Badge>
              ),
            },
            {
              key: "amount",
              header: "Amount",
              render: (row) => formatCurrency(row.amount),
            },
          ]}
        />
      </div>
    </DashboardPage>
  );
}
