import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { RouteTransition } from "@/components/motion/route-transition";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 overflow-auto bg-surface-2/50">
          <RouteTransition>{children}</RouteTransition>
        </main>
      </div>
    </div>
  );
}
