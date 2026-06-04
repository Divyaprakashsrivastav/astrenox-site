"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidButton from "../ui/LiquidButton";
import { intelligencePlatform } from "@/app/content/platform-content";

export default function PlatformDemoCTA() {
  const d = intelligencePlatform.demo;

  return (
    <section id={d.id} className="section-shell relative platform-section-dark scroll-mt-28">
      <div className="absolute inset-0 mesh-grid opacity-10" aria-hidden />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dark-muted mb-3">
            {d.label}
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-dark-text tracking-tight leading-[1.12]">
            {d.title}
          </h2>
          <p className="mt-4 text-base text-dark-muted leading-relaxed">{d.description}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <LiquidButton href={d.primaryHref} variant="primary">
              {d.primaryCta}
              <ArrowRight size={16} strokeWidth={2} />
            </LiquidButton>
            <LiquidButton href={d.secondaryHref} variant="outline" className="!border-white/20 !text-dark-text hover:!bg-white/10">
              {d.secondaryCta}
            </LiquidButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
