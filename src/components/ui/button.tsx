import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import {
  primaryButtonClass,
  secondaryButtonClass,
} from "@/components/design-system/button-styles";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "rounded-2xl bg-primary text-primary-foreground shadow-sm hover:opacity-90 active:scale-[0.98]",
        secondary:
          "rounded-2xl bg-secondary text-secondary-foreground hover:opacity-90",
        outline:
          "rounded-2xl border border-purple-300/70 bg-white/75 text-purple-800 shadow-[0_10px_28px_rgba(31,41,55,.08)] hover:border-purple-400 hover:bg-purple-50/80",
        ghost: "rounded-xl hover:bg-purple-50/80 hover:text-purple-800",
        link: "text-purple-700 underline-offset-4 hover:underline",
        premium: primaryButtonClass,
        premiumOutline: secondaryButtonClass,
      },
      size: {
        default: "h-10 min-w-0 rounded-xl px-5 py-2 text-sm font-semibold",
        sm: "h-9 min-w-0 rounded-xl px-3.5 text-xs font-semibold",
        lg: "h-12 min-w-[150px] rounded-2xl px-6 text-sm font-bold",
        icon: "h-10 w-10 min-w-0 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
