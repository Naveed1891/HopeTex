import { PartnersAdminPanel } from "@/components/admin/partners-admin-panel";
import { buildMetadata } from "@/components/templates/page-layout";

export const metadata = buildMetadata(
  "Manage partners",
  "Admin-only partner logo management for the HopeTex homepage."
);

export default function AdminPartnersPage() {
  return <PartnersAdminPanel />;
}
