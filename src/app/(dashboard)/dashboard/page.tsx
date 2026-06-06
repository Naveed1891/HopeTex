import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DashboardShellPreview } from "@/components/dashboard/dashboard-shell-preview";

export default function DashboardOverviewPage() {
  return (
    <DashboardPage
      title="Overview"
      description="Orders, documents, compliance, and billing in one place."
    >
      <DashboardShellPreview />
    </DashboardPage>
  );
}
