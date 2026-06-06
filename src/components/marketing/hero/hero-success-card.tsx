import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSuccessCard() {
  return (
    <div
      className={cn(
        "hero-success-card w-[clamp(280px,20vw,330px)] max-w-full shrink-0 rounded-[28px] border border-white/80 bg-white/88 p-[clamp(1.5rem,2vw,2rem)] text-center",
        "shadow-[0_28px_90px_rgba(31,41,55,0.14)] backdrop-blur-xl",
        "max-lg:w-[min(330px,calc(100vw-2.5rem))]"
      )}
    >
      <div
        className="relative mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-gradient-to-br from-[#6c177c] to-[#009ddb] text-white shadow-[0_16px_45px_rgba(14,165,233,0.25)] max-lg:mb-5 max-lg:h-16 max-lg:w-16"
        aria-hidden
      >
        <Check className="size-8 max-lg:size-7" strokeWidth={2.5} />
        <span className="absolute -left-1 top-2 size-2 rounded-full bg-[#b83bb2] opacity-80" />
        <span className="absolute -right-0.5 top-3 size-1.5 rounded-full bg-[#009ddb] opacity-90" />
        <span className="absolute left-3 -top-1 size-1.5 rounded-full bg-[#6c177c] opacity-70" />
      </div>

      <h3 className="text-lg font-extrabold leading-7 text-foreground max-lg:text-base max-lg:leading-6">
        Your US LLC is <br />
        <span className="text-gradient-brand">successfully formed!</span>
      </h3>

      <p className="mt-5 text-lg font-extrabold text-primary max-lg:mt-4 max-lg:text-base">
        ABC LLC
      </p>

      <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/[0.06] px-6 py-4 dark:bg-primary/10 max-lg:mt-5 max-lg:px-5 max-lg:py-3">
        <p className="text-xs font-medium text-muted-foreground">State Filing No.</p>
        <p className="mt-1 text-xl font-extrabold tracking-wide text-foreground max-lg:text-lg">
          12345678
        </p>
      </div>

      <div className="mt-6 space-y-3 max-lg:mt-5" aria-hidden>
        <span
          className={cn(
            "flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#6c177c] to-[#009ddb] px-5 py-3 text-sm font-bold text-white shadow-lg",
            "pointer-events-none select-none"
          )}
        >
          View Documents
        </span>
        <span
          className={cn(
            "flex w-full items-center justify-center rounded-xl border-2 border-primary/35 bg-white/90 px-5 py-3 text-sm font-bold text-primary",
            "pointer-events-none select-none dark:bg-card/80"
          )}
        >
          Go to My Dashboard
        </span>
      </div>
    </div>
  );
}
