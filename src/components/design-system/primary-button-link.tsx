import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { primaryButtonClass, secondaryButtonClass, pricingCardCtaClass, pricingCardCtaOutlineClass, tierCardCtaClass } from "@/components/design-system/button-styles";
import { cn } from "@/lib/utils";

type PrimaryButtonLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "pricing" | "pricingOutline" | "tier";
};

export function PrimaryButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: PrimaryButtonLinkProps) {
  const variantClass =
    variant === "secondary"
      ? secondaryButtonClass
      : variant === "pricing"
        ? pricingCardCtaClass
        : variant === "pricingOutline"
          ? pricingCardCtaOutlineClass
          : variant === "tier"
            ? tierCardCtaClass
            : primaryButtonClass;

  return (
    <Link href={href} className={cn(variantClass, className)}>
      {children}
    </Link>
  );
}
