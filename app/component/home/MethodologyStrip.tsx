"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { homeMethodology } from "@/app/content/homepage-content";

export default function MethodologyStrip() {
  return (
    <section id="methodology" className="section-shell relative bg-background scroll-mt-28">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={homeMethodology.label}
          title={homeMethodology.title}
          description={homeMethodology.description}
        />

        <div className="hidden lg:flex items-center justify-between gap-3 mb-6 px-8" aria-hidden>
          {homeMethodology.stages.map((stage) => (
            <span key={stage.id} className="text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
              {stage.title}
            </span>
          ))}
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="hidden lg:block absolute top-8 left-[16%] right-[16%] h-px bg-border" aria-hidden />
          {homeMethodology.stages.map((stage, i) => (
            <motion.article
              key={stage.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="enterprise-card p-5 lg:p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-xs font-bold text-primary bg-background">
                  {stage.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-text tracking-tight">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">{stage.tagline}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {stage.items.map((item) => (
                  <li key={item} className="text-sm text-muted leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
