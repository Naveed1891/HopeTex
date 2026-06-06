import { PartnerLogoCard } from "@/components/marketing/partner-logo-card";
import { getActivePartners } from "@/lib/partners/repository";
import { cn } from "@/lib/utils";

export function TrustedByFounders() {
  const activePartners = getActivePartners();
  const marqueePartners = [...activePartners, ...activePartners];

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(120deg,#fbf7ff_0%,#f7f1ff_42%,#e7f7ff_100%)] py-20 sm:py-24"
      aria-labelledby="trusted-by-founders-title"
    >
      <div
        className="pointer-events-none absolute left-[-8%] top-20 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-6%] top-10 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="ref-badge mx-auto">Trusted by Founders</div>

          <h2
            id="trusted-by-founders-title"
            className="mt-6 text-[clamp(2.4rem,4vw,4.8rem)] font-extrabold tracking-[-0.04em] text-slate-950"
          >
            Our <span className="text-gradient-brand">Partners</span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Chosen by global entrepreneurs building in the US, UK, and beyond.
          </p>
        </div>

        <div
          className={cn(
            "partner-marquee group relative mt-14 overflow-x-hidden overflow-y-visible bg-transparent py-8",
            "[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
          )}
        >
          <div className="partner-track relative z-[1] flex w-max items-center gap-5 bg-transparent sm:gap-6 lg:gap-7">
            {marqueePartners.map((partner, index) => (
              <PartnerLogoCard
                key={`${partner.id}-${index}`}
                partner={partner}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
