"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DataTable } from "@/components/dashboard/data-table";
import { mockInvoices } from "@/lib/mock/dashboard";
import { formatCurrency } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export default function InvoicesPage() {
  return (
    <DashboardPage title="Invoices" description="Billing history and outstanding payments.">
      <div className="p-6 lg:p-10">
        <DataTable
          data={mockInvoices}
          columns={[
            { key: "id", header: "Invoice" },
            { key: "description", header: "Description" },
            {
              key: "amount",
              header: "Amount",
              render: (row) => formatCurrency(row.amount),
            },
            {
              key: "status",
              header: "Status",
              render: (row) => (
                <Badge variant={row.status === "paid" ? "secondary" : "default"}>
                  {row.status}
                </Badge>
              ),
            },
            { key: "dueDate", header: "Due" },
          ]}
        />
      </div>
    </DashboardPage>
  );
}
