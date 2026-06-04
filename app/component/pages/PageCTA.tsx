"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidButton from "../ui/LiquidButton";
import { ctaBanner } from "@/app/content/astrenox-content";

export default function PageCTA() {
  return (
    <section className="section-shell relative bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted mb-3">
            {ctaBanner.eyebrow}
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            {ctaBanner.title}
          </h2>
          <p className="mt-4 text-muted max-w-xl mx-auto leading-relaxed">
            {ctaBanner.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <LiquidButton href="/contact" variant="primary">
              {ctaBanner.primaryCta}
              <ArrowRight size={16} strokeWidth={2} />
            </LiquidButton>
            <LiquidButton href="/contact" variant="outline">
              {ctaBanner.secondaryCta}
            </LiquidButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
