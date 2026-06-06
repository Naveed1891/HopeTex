import { buildMetadata } from "@/components/templates/page-layout";
import { AuthForm } from "@/components/auth/auth-form";
import { routes } from "@/config/routes";

export const metadata = buildMetadata("Reset password");

export default function ForgotPasswordPage() {
  return (
    <AuthForm
      mode="forgot"
      title="Reset password"
      description="We'll send a reset link to your email."
      alternateHref={routes.client.login}
      alternateLabel="Back to sign in"
    />
  );
}
