"use client";

import { useState } from "react";
import { ArrowRight, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function FooterNewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setMessage(ok ? "Thanks for subscribing." : "Please enter a valid email.");
    if (ok) setEmail("");
  }

  return (
    <>
      <form onSubmit={handleSubscribe} className="mt-3 space-y-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full rounded-xl border border-white/80 bg-white/85 px-3 py-2 text-sm text-slate-700 outline-none ring-violet-300 transition focus:ring-2"
        />
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 via-violet-600 to-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(124,58,237,.26)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(124,58,237,.32)]"
        >
          Subscribe
          <ArrowRight className="h-4 w-4" />
        </button>
        {message && (
          <p
            className={cn(
              "text-xs",
              message.startsWith("Thanks") ? "text-emerald-600" : "text-rose-600"
            )}
          >
            {message}
          </p>
        )}
      </form>
      <p className="mt-2 text-xs text-slate-500">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </>
  );
}

export function FooterBackToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/80 text-violet-600 shadow-[0_10px_22px_-12px_rgba(124,58,237,.42)] transition-all duration-300 hover:-translate-y-0.5 hover:text-sky-600 hover:shadow-[0_14px_28px_-10px_rgba(14,165,233,.32)]"
    >
      <ArrowUp className="h-4.5 w-4.5" />
    </button>
  );
}
