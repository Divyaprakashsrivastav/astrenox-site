"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Innovation" },
  { value: 30, suffix: "+", label: "Expert Engineers" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function Statistics() {
  return (
    <section id="statistics" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="By the numbers"
          title="Trusted at enterprise scale"
          description="A track record built on delivery, security, and long-term partnerships."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card p-12 lg:p-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {stats.map((stat, i) => (
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
