import { Logo } from "@/components/brand/logo";
import { RouteTransition } from "@/components/motion/route-transition";
import Link from "next/link";
import { routes } from "@/config/routes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen bg-background">
      <div className="relative hidden w-1/2 flex-col justify-between border-r border-border bg-surface-2 p-12 lg:flex">
        <Logo />
        <blockquote className="max-w-md">
          <p className="text-h2 font-semibold leading-snug tracking-tight">
            Global formation infrastructure for founders who move fast.
          </p>
          <footer className="mt-6 text-sm text-muted-foreground">
            HopeTex Platform
          </footer>
        </blockquote>
        <Link
          href={routes.home}
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to platform
        </Link>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center p-8 lg:w-1/2">
        <div className="mb-10 lg:hidden">
          <Logo />
        </div>
        <RouteTransition>
          <div className="w-full max-w-[400px]">{children}</div>
        </RouteTransition>
      </div>
    </div>
  );
}
