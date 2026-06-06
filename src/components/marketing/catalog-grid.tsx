"use client";

import Link from "next/link";
import { DepthCard } from "@/components/motion/depth-card";
import { StaggerChildren } from "@/components/motion/stagger-children";
import { m } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import {
  ArrowRight,
  ArrowRightLeft,
  Banknote,
  Building2,
  CreditCard,
  FileCheck,
  Fingerprint,
  FileText,
  Globe2,
  Landmark,
  Layers,
  MapPin,
  Phone,
  Scale,
  Shield,
  Stamp,
  Wallet,
} from "lucide-react";
export const catalogIconMap = {
  Building2,
  Landmark,
  Globe2,
  FileText,
  Fingerprint,
  FileCheck,
  Shield,
  Layers,
  Scale,
  Stamp,
  MapPin,
  Phone,
  Wallet,
  ArrowRightLeft,
  Banknote,
  CreditCard,
};

export type CatalogItem = {
  title: string;
  description?: string;
  href: string;
  icon?: keyof typeof catalogIconMap;
};

type CatalogGridProps = {
  items: CatalogItem[];
};

export function CatalogGrid({ items }: CatalogGridProps) {
  return (
    <StaggerChildren className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon ? catalogIconMap[item.icon] : null;
        return (
        <m.div key={item.href} variants={fadeUp}>
          <Link href={item.href} className="block h-full group">
            <DepthCard className="flex h-full flex-col">
              {Icon && (
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-700/10 via-violet-600/10 to-sky-500/10 text-violet-600">
                  <Icon className="h-5 w-5" />
                </span>
              )}
              <h3 className="font-bold tracking-tight text-slate-900 group-hover:text-violet-600">
                {item.title}
              </h3>
              {item.description && (
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              )}
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-violet-600">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </DepthCard>
          </Link>
        </m.div>
        );
      })}
    </StaggerChildren>
  );
}
