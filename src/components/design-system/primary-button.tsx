import { Button, type ButtonProps } from "@/components/ui/button";

export function PrimaryButton({ size = "lg", variant = "premium", ...props }: ButtonProps) {
  return <Button variant={variant} size={size} {...props} />;
}
