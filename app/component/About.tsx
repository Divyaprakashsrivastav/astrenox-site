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
    <section id="about" className="py-28 lg:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="About Us"
          title={
            <>
              Engineering autonomy at{" "}
              <span className="font-editorial text-primary">scale</span>
            </>
          }
          description="Astreanox is a deep-tech company specializing in AI-powered autonomous systems. We combine aerospace expertise, robotics engineering, and enterprise software to deliver mission-critical solutions."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
              whileHover={{ y: -3 }}
              className="premium-card p-8 text-center"
            >
              <p className="font-heading text-2xl lg:text-3xl font-semibold text-text">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-muted tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
