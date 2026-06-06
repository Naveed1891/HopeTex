"use client";

import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DataTable } from "@/components/dashboard/data-table";
import { mockDocuments } from "@/lib/mock/dashboard";

export default function DocumentsPage() {
  return (
    <DashboardPage title="Documents" description="Certificates, filings, and verified uploads.">
      <div className="p-6 lg:p-10">
        <DataTable
          data={mockDocuments}
          columns={[
            { key: "name", header: "Document" },
            { key: "type", header: "Type" },
            { key: "company", header: "Company" },
            { key: "uploadedAt", header: "Uploaded" },
          ]}
        />
      </div>
    </DashboardPage>
  );
}
