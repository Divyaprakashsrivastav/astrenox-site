"use client";

import { trustMarquee } from "@/app/content/astrenox-content";

export default function TrustMarquee() {
  return (
    <section className="relative py-4 overflow-hidden border-y border-border/50 bg-background">
      <div className="trust-marquee-track flex whitespace-nowrap">
        <span className="trust-marquee-text text-xs font-medium uppercase tracking-[0.2em] text-muted px-4">
          {trustMarquee}
        </span>
        <span className="trust-marquee-text text-xs font-medium uppercase tracking-[0.2em] text-muted px-4" aria-hidden>
          {trustMarquee}
        </span>
      </div>
    </section>
  );
}
