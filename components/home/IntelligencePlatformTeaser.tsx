"use client";

import { motion } from "framer-motion";
import { ArrowRight, Network } from "lucide-react";
import Link from "next/link";
import { intelligencePlatform } from "@/app/content/platform-content";

export default function IntelligencePlatformTeaser() {
  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" aria-hidden />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted mb-3">
                Core capability
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight leading-[1.15]">
                {intelligencePlatform.name}
              </h2>
              <p className="mt-4 text-muted leading-relaxed max-w-lg">
                {intelligencePlatform.positioning}
              </p>
              <p className="mt-3 text-sm text-muted italic">
                {intelligencePlatform.hero.taglines[0]}
              </p>
              <Link
                href="/platform"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Explore the platform
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {[
                "Enterprise Search",
                "Knowledge Graph",
                "AI Agents",
                "Workflow Automation",
              ].map((cap) => (
                <span
                  key={cap}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium border border-border bg-background text-text"
                >
                  <Network size={12} className="text-primary" />
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
