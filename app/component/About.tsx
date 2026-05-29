"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";

const highlights = [
  { value: "2010", label: "Founded" },
  { value: "Global", label: "Operations" },
  { value: "ISO 9001", label: "Certified" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-44">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About Us"
          title={
            <>
              Engineering autonomy at{" "}
              <span className="font-editorial text-primary">scale</span>
            </>
          }
          description="Astrenox is a deep-tech company specializing in AI-powered autonomous systems. We combine aerospace expertise, robotics engineering, and enterprise software to deliver mission-critical solutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-10 text-center glow-border"
            >
              <p className="font-heading text-3xl lg:text-4xl font-semibold text-accent-gradient">
                {item.value}
              </p>
              <p className="mt-3 text-sm text-muted tracking-[0.15em] uppercase">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
