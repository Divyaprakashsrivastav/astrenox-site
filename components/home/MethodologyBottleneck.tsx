"use client";

import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { methodology } from "@/app/content/site-pages";

const flow = ["Input", "The Bottleneck", "Focus Point", "Scale"];

export default function MethodologyBottleneck() {
  const { partA } = methodology;

  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="premium-card card-pad lg:card-pad-lg"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted mb-4">
            Methodology · Part A
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight max-w-2xl">
            {partA.title}
          </h2>
          <p className="mt-5 text-muted leading-relaxed max-w-3xl"><FormattedText text={partA.description} /></p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`px-4 py-2.5 rounded-full text-xs font-medium border ${
                    step === "The Bottleneck"
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted"
                  }`}
                >
                  {step}
                </span>
                {i < flow.length - 1 ? (
                  <span className="text-muted hidden sm:inline" aria-hidden>
                    →
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <blockquote className="mt-8 text-center text-sm italic text-primary max-w-xl mx-auto">
            &ldquo;{partA.quote}&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
