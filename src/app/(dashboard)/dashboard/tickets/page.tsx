"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DataTable } from "@/components/dashboard/data-table";
import { mockTickets } from "@/lib/mock/dashboard";
import { Badge } from "@/components/ui/badge";

export default function TicketsPage() {
  return (
    <DashboardPage title="Support tickets" description="Track requests and resolutions.">
      <div className="p-6 lg:p-10">
        <DataTable
          data={mockTickets}
          columns={[
            { key: "id", header: "Ticket" },
            { key: "subject", header: "Subject" },
            {
              key: "status",
              header: "Status",
              render: (row) => <Badge variant="outline">{row.status}</Badge>,
            },
            { key: "updatedAt", header: "Updated" },
          ]}
        />
      </div>
    </DashboardPage>
  );
}
