import { buildMetadata } from "@/components/templates/page-layout";
import { AuthForm } from "@/components/auth/auth-form";
import { routes } from "@/config/routes";

export const metadata = buildMetadata("Get started", "Create your HopeTex account.");

export default function RegisterPage() {
  return (
    <AuthForm
      mode="register"
      title="Create your account"
      description="Start your formation or compliance application in minutes."
      alternateHref={routes.client.login}
      alternateLabel="Already have an account?"
    />
  );
}
