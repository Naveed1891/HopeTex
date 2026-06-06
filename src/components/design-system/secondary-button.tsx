import { Button, type ButtonProps } from "@/components/ui/button";

export function SecondaryButton({
  size = "lg",
  variant = "premiumOutline",
  ...props
}: ButtonProps) {
  return <Button variant={variant} size={size} {...props} />;
}
