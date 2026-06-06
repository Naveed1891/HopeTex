import Link from "next/link";
import type { ComponentProps } from "react";
import { buttonVariants, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: ComponentProps<typeof Link>["href"];
  children: React.ReactNode;
  className?: string;
} & Pick<ButtonProps, "variant" | "size">;

/** Link styled as a Button — avoids asChild + Slot typing issues */
export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </Link>
  );
}
