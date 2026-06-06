import { cn } from "@/lib/utils";

type SectionSkeletonProps = {
  className?: string;
};

export function SectionSkeleton({ className }: SectionSkeletonProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full animate-pulse rounded-[28px] bg-white/40",
        className
      )}
    />
  );
}
