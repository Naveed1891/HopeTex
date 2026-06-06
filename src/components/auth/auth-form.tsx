"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DepthCard } from "@/components/motion/depth-card";
import { routes } from "@/config/routes";

type AuthFormProps = {
  mode: "login" | "register" | "forgot";
  title: string;
  description: string;
  alternateHref: string;
  alternateLabel: string;
};

export function AuthForm({
  mode,
  title,
  description,
  alternateHref,
  alternateLabel,
}: AuthFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode !== "login") return;

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    setSubmitting(true);
    try {
      const res = await fetch("/api/auth/role", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { role?: "admin" | "client" };
      if (data.role === "admin") {
        router.push(routes.admin.partners);
      } else {
        router.push(routes.dashboard.root);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DepthCard>
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      {mode !== "forgot" && (
        <p className="mt-4 text-sm text-muted-foreground">
          Login or create an account to start your application.
        </p>
      )}
      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        {mode === "register" && (
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" required placeholder="Jane Founder" />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@company.com" />
        </div>
        {mode !== "forgot" && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {mode === "login" && (
                <Link
                  href={routes.client.forgotPassword}
                  className="text-caption text-primary hover:underline"
                >
                  Forgot?
                </Link>
              )}
            </div>
            <Input id="password" type="password" required />
          </div>
        )}
        <Button type="submit" variant="premium" className="w-full" disabled={submitting}>
          {mode === "login" && (submitting ? "Signing in…" : "Sign in")}
          {mode === "register" && "Create account"}
          {mode === "forgot" && "Send reset link"}
        </Button>
      </form>
      {mode !== "forgot" && (
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link href={alternateHref} className="font-medium text-primary hover:underline">
            {alternateLabel}
          </Link>
        </p>
      )}
      {mode === "forgot" && (
        <p className="mt-6 text-center text-sm">
          <Link href={alternateHref} className="text-primary hover:underline">
            {alternateLabel}
          </Link>
        </p>
      )}
    </DepthCard>
  );
}
