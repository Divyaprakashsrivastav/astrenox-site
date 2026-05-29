"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidButton from "./ui/LiquidButton";

export default function CTABanner() {
  return (
    <section className="section-shell relative bg-background pb-4">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card px-8 py-14 sm:px-14 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted mb-3">
                Partner with Astrenox
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight leading-snug">
                Ready to build the next generation of autonomous systems?
              </h2>
              <p className="mt-3 text-muted leading-relaxed">
                From strategy to production — enterprise rigor, weekly delivery,
                and systems built to last.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <LiquidButton href="#contact" variant="primary">
                Book a call
                <ArrowRight size={16} strokeWidth={2} />
              </LiquidButton>
              <LiquidButton href="#projects" variant="outline">
                View projects
              </LiquidButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
