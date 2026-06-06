import { DashboardPage } from "@/components/dashboard/dashboard-page";
import { DepthCard } from "@/components/motion/depth-card";
import { ButtonLink } from "@/components/ui/button-link";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

export default function SupportPage() {
  return (
    <DashboardPage title="Support" description="Get help from our global team.">
      <div className="grid gap-5 p-6 sm:grid-cols-2 lg:grid-cols-3 lg:p-10">
        <DepthCard>
          <h3 className="font-semibold">Open a ticket</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Trackable support requests with SLA response times.
          </p>
          <ButtonLink href={routes.dashboard.tickets} className="mt-4" size="sm">
            View tickets
          </ButtonLink>
        </DepthCard>
        <DepthCard>
          <h3 className="font-semibold">Live chat</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Chat with our team during business hours.
          </p>
          <ButtonLink href={routes.dashboard.chat} className="mt-4" size="sm">
            Open chat
          </ButtonLink>
        </DepthCard>
        <DepthCard>
          <h3 className="font-semibold">WhatsApp</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.contact.phoneDisplay}
          </p>
          <ButtonLink href={siteConfig.contact.whatsapp} className="mt-4" size="sm">
            Message us
          </ButtonLink>
        </DepthCard>
      </div>
    </DashboardPage>
  );
}
