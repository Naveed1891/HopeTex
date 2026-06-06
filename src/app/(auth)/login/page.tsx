import { buildMetadata } from "@/components/templates/page-layout";
import { AuthForm } from "@/components/auth/auth-form";
import { routes } from "@/config/routes";

export const metadata = buildMetadata("Sign in", "Access your HopeTex client portal.");

export default function LoginPage() {
  return (
    <AuthForm
      mode="login"
      title="Welcome back"
      description="Sign in to manage orders, documents, and compliance."
      alternateHref={routes.client.register}
      alternateLabel="Create an account"
    />
  );
}
