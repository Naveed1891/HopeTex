import { Building2, Clock, Landmark, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FeatureRow } from "@/components/marketing/feature-showcase/feature-row";
import { marketingImages } from "@/config/images";
import { cn } from "@/lib/utils";

export function FeatureShowcaseSection() {
  return (
    <section
      className={cn(
        "feature-showcase-section relative overflow-hidden",
        "bg-[linear-gradient(120deg,#fbf7ff_0%,#f7f1ff_42%,#e7f7ff_100%)]",
        "py-16 sm:py-20 lg:py-24"
      )}
      aria-labelledby="feature-showcase-heading"
    >
      <div
        className="pointer-events-none absolute left-[-10%] top-32 h-80 w-80 rounded-full bg-violet-200/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-20 right-[-8%] h-96 w-96 rounded-full bg-sky-200/30 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10 xl:px-12">
        <h2 id="feature-showcase-heading" className="sr-only">
          Platform capabilities
        </h2>

        <div className="flex flex-col gap-8 lg:gap-10">
          <FeatureRow
            eyebrowIcon={Landmark}
            eyebrow="Banking & Payments"
            headline={
              <>
                Empowering Global
                <br />
                <span className="text-gradient-brand">Financial Success</span>
              </>
            }
            description="Seamless banking and payment solutions designed for global businesses. Partnered with leading financial institutions to power your growth with security, speed, and reliability."
            points={[
              {
                icon: ShieldCheck,
                title: "Trusted Financial Partners",
                description:
                  "We collaborate with top banks and fintech leaders worldwide.",
              },
              {
                icon: Clock,
                title: "Secure & Efficient Transactions",
                description:
                  "Multi-currency accounts, fast settlements, and enterprise-grade security.",
              },
            ]}
            imageSrc={marketingImages.features.bankingPayments}
            imageAlt="3D illustration of online commerce with secure banking, payments, and financial growth"
          />

          <FeatureRow
            reverse
            eyebrowIcon={MapPin}
            eyebrow="Address & Contact Solutions"
            headline={
              <>
                Professional Address &amp;
                <br />
                <span className="text-gradient-brand">Contact Solutions</span>
              </>
            }
            description="Build trust and credibility with a prestigious business address and dedicated contact solutions. Establish a strong global presence while we handle your communication with professionalism."
            points={[
              {
                icon: Building2,
                title: "Prestigious Business Address",
                description:
                  "Prime locations in key global markets to elevate your brand image.",
              },
              {
                icon: Phone,
                title: "Dedicated Contact Support",
                description:
                  "Local phone numbers and call handling to keep you connected, worldwide.",
              },
            ]}
            imageSrc={marketingImages.features.addressContact}
            imageAlt="3D illustration of global business address, contact card, and worldwide communication"
          />
        </div>
      </div>
    </section>
  );
}
