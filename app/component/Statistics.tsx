"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./ui/AnimatedCounter";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Innovation" },
  { value: 30, suffix: "+", label: "Expert Engineers" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

export default function Statistics() {
  return (
    <section id="research" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative premium-card rounded-2xl overflow-hidden p-12 lg:p-16"
        >
          <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-text tracking-tight">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-3 text-sm text-muted font-medium tracking-wide">
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
