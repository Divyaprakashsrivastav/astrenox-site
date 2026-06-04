"use client";

import { motion } from "framer-motion";
import {
  Layers,
  GitBranch,
  Shield,
  Cpu,
  Code2,
  ClipboardList,
  Users,
  type LucideIcon,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";
import { researchPillars, researchSection } from "@/app/content/astrenox-content";

const icons: LucideIcon[] = [
  Layers,
  GitBranch,
  Shield,
  Cpu,
  Code2,
  ClipboardList,
  Users,
];

export default function Research() {
  return (
    <section id="research" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={researchSection.label}
          title={
            <>
              We{" "}
              <span className="text-highlight-primary">orchestrate</span> the
              ecosystem—not just use it.
            </>
          }
          description={researchSection.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {researchPillars.map((pillar, i) => {
            const Icon = icons[i] ?? Layers;
            return (
              <motion.article
                key={pillar.title}
                variants={staggerItem}
                className="premium-card p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-4">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
