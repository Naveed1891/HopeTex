import Image from "next/image";
import Link from "next/link";
import { brandHubImage, marketingImages } from "@/config/images";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <Link
      href={routes.home}
      className={cn(
        "group flex items-center gap-3.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <span
        className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_1px_3px_rgba(15,23,42,0.08)] ring-1 ring-black/[0.06] transition-transform duration-300 ease-[var(--ease-premium)] group-hover:scale-[1.04] dark:bg-white/95 dark:ring-white/12"
        aria-hidden
      >
        <Image
          src={brandHubImage}
          alt=""
          width={36}
          height={36}
          className="h-[2.05rem] w-[2.05rem] object-contain object-center"
          sizes="44px"
          priority
        />
      </span>
      {showWordmark && (
        <Image
          src={marketingImages.brand.mark}
          alt=""
          width={168}
          height={48}
          className="h-[2.125rem] w-auto max-w-[9.5rem] object-contain object-left sm:max-w-none sm:h-9"
          sizes="(max-width: 640px) 152px, 168px"
        />
      )}
    </Link>
  );
}
