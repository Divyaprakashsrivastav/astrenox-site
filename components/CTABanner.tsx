"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidButton from "./ui/LiquidButton";
import { ctaBanner, site } from "@/app/content/astrenox-content";

export default function CTABanner() {
  return (
    <section className="section-shell relative bg-background pb-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted mb-3">
                {ctaBanner.eyebrow}
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight leading-snug">
                {ctaBanner.title}
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                {ctaBanner.description}
              </p>
              <p className="mt-4 text-sm text-muted">
                <a
                  href={`mailto:${site.email}`}
                  className="text-primary hover:underline font-medium"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <LiquidButton href="/contact" variant="primary">
                {ctaBanner.primaryCta}
                <ArrowRight size={16} strokeWidth={2} />
              </LiquidButton>
              <LiquidButton href="/platform" variant="outline">
                {ctaBanner.secondaryCta}
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
