"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function WhatsAppWidget() {
  const reduced = useReducedMotion();
  const href = `${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hello HopeTex, I need assistance with my order.")}`;

  return (
    <m.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      animate={reduced ? undefined : { y: [0, -4, 0] }}
      transition={
        reduced
          ? undefined
          : { duration: 3, repeat: Infinity, ease: "easeInOut" }
      }
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="h-5 w-5" />
    </m.a>
  );
}
