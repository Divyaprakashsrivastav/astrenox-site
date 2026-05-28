"use client";

import { motion } from "framer-motion";

const companies = [
  "SpaceX",
  "NASA",
  "Airbus",
  "Boeing",
  "Lockheed",
  "Northrop",
];

export default function TrustedCompanies() {
  return (
    <section className="py-14 lg:py-16 border-y border-border/60 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-medium text-muted uppercase tracking-[0.2em] mb-10"
        >
          Trusted by industry leaders
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
          {companies.map((company, i) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="font-heading text-lg sm:text-xl font-semibold text-muted/30 hover:text-muted/60 transition-colors duration-500 cursor-default select-none"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
