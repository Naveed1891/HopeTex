import { redirect } from "next/navigation";
import { isAdmin } from "@/lib/auth/roles";
import { routes } from "@/config/routes";

export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    redirect(`${routes.client.login}?unauthorized=admin`);
  }
}
