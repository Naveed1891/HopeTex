import Image from "next/image";
import type { Partner } from "@/lib/partners/types";
import { cn } from "@/lib/utils";

type PartnerLogoCardProps = {
  partner: Partner;
  className?: string;
};

const cardSizeClass =
  "h-[72px] w-[140px] px-4 sm:h-[82px] sm:w-[160px] sm:px-5 lg:h-[90px] lg:w-[180px] lg:px-6";

function PartnerCardInner({
  partner,
  hasLink,
  hasLogo,
}: {
  partner: Partner;
  hasLink: boolean;
  hasLogo: boolean;
}) {
  return (
    <>
      <span className="partner-card__shine" aria-hidden />
      <span className="partner-card__glow" aria-hidden />
      {hasLink && (
        <span className="partner-card__arrow" aria-hidden>
          ↗
        </span>
      )}
      {hasLogo ? (
        <Image
          src={partner.logoUrl!}
          alt={`${partner.name} logo`}
          width={140}
          height={48}
          loading="lazy"
          className="partner-card__logo"
          draggable={false}
        />
      ) : (
        <span className="partner-card__label">{partner.name}</span>
      )}
    </>
  );
}

export function PartnerLogoCard({ partner, className }: PartnerLogoCardProps) {
  const hasLink = Boolean(partner.websiteUrl?.trim());
  const hasLogo = Boolean(partner.logoUrl?.trim());

  const cardClassName = cn(
    "partner-card group cursor-pointer",
    cardSizeClass,
    className
  );

  if (!hasLink) {
    return (
      <div className={cardClassName} aria-label={partner.name}>
        <PartnerCardInner partner={partner} hasLink={false} hasLogo={hasLogo} />
      </div>
    );
  }

  return (
    <a
      href={partner.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${partner.name} website`}
      className={cardClassName}
    >
      <PartnerCardInner partner={partner} hasLink hasLogo={hasLogo} />
    </a>
  );
}
