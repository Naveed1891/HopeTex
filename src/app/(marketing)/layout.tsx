import { SkipLink } from "@/components/layout/skip-link";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppWidget } from "@/components/layout/whatsapp-widget";
import { RouteTransition } from "@/components/motion/route-transition";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SkipLink />
      <div className="relative flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          <RouteTransition>{children}</RouteTransition>
        </main>
        <SiteFooter />
        <WhatsAppWidget />
      </div>
    </>
  );
}
