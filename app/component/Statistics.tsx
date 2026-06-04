"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedCounter from "./ui/AnimatedCounter";
import { statistics, statisticsSection } from "@/app/content/astrenox-content";

export default function Statistics() {
  return (
    <section id="statistics" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={statisticsSection.label}
          title={statisticsSection.title}
          description={statisticsSection.description}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
            {statistics.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.45 }}
                className="text-center"
              >
                <p className="font-heading text-4xl sm:text-5xl font-semibold text-text tracking-tight tabular-nums">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium text-muted uppercase tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
