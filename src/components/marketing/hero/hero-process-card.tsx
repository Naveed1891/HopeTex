import {
  Building2,
  FileText,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS: {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: "primary" | "secondary";
}[] = [
  {
    title: "Choose State & Name",
    description: "Select your state and check business name availability",
    icon: Building2,
    tone: "primary",
  },
  {
    title: "Enter Company Details",
    description: "Provide your business information and contact details",
    icon: FileText,
    tone: "secondary",
  },
  {
    title: "Add Members & Manager",
    description: "Add owners, management, and registered agent details",
    icon: Users,
    tone: "primary",
  },
  {
    title: "Review & Submit",
    description: "Confirm your details and we'll handle the filing",
    icon: ShieldCheck,
    tone: "secondary",
  },
];

export function HeroProcessCard() {
  return (
    <div
      className={cn(
        "hero-process-card w-[clamp(300px,23vw,360px)] max-w-full shrink-0 rounded-[28px] border border-white/80 bg-white/85 p-[clamp(1.5rem,2vw,2rem)]",
        "shadow-[0_28px_90px_rgba(31,41,55,0.14)] backdrop-blur-xl",
        "max-lg:w-[min(360px,calc(100vw-2.5rem))]"
      )}
    >
      <h3 className="mb-6 text-base font-extrabold tracking-tight text-foreground max-lg:mb-5 max-lg:text-[0.9375rem]">
        Start your US LLC in 4 easy steps
      </h3>

      <ol className="space-y-5 max-lg:space-y-4">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.title} className="relative flex gap-4 max-lg:gap-3">
              {index < STEPS.length - 1 && (
                <span
                  className="absolute left-5 top-11 h-[calc(100%+0.5rem)] w-px bg-gradient-to-b from-primary/35 to-[#009ddb]/35 max-lg:left-4 max-lg:top-10"
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white shadow-lg",
                  "max-lg:h-9 max-lg:w-9",
                  step.tone === "primary"
                    ? "bg-gradient-to-br from-[#6c177c] to-[#b83bb2]"
                    : "bg-gradient-to-br from-[#009ddb] to-[#1e5a92]"
                )}
                aria-hidden
              >
                <Icon className="size-[1.05rem] max-lg:size-4" strokeWidth={2} />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-extrabold text-foreground">{step.title}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
