import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { requireAdmin } from "@/lib/auth/require-admin";
import { routes } from "@/config/routes";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-surface-2/40">
      <header className="border-b border-border bg-surface-1">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
          <Logo showWordmark />
          <nav className="flex items-center gap-4 text-sm font-medium">
            <Link
              href={routes.admin.partners}
              className="text-foreground hover:text-primary"
            >
              Partners
            </Link>
            <Link
              href={routes.home}
              className="text-muted-foreground hover:text-foreground"
            >
              View site
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-6 py-10">{children}</main>
    </div>
  );
}
