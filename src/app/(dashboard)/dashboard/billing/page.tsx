import { redirect } from "next/navigation";
import { routes } from "@/config/routes";

export default function BillingPage() {
  redirect(routes.dashboard.invoices);
}
