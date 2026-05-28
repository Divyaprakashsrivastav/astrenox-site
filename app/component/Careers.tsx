"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const openings = [
  {
    title: "Senior Robotics Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
  },
  {
    title: "ML Research Scientist",
    location: "San Francisco, CA",
    type: "Full-time",
  },
  {
    title: "Aerospace Systems Architect",
    location: "Remote",
    type: "Full-time",
  },
];

export default function Careers() {
  return (
    <section id="careers" className="py-28 lg:py-40 border-t border-border/60">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <SectionHeader
          label="Careers"
          title={
            <>
              Join the team shaping{" "}
              <span className="font-editorial text-primary">tomorrow</span>
            </>
          }
          description="We're looking for exceptional engineers, researchers, and innovators building the future of autonomous systems."
        />

        <div className="max-w-2xl mx-auto space-y-3">
          {openings.map((job, i) => (
            <motion.a
              key={job.title}
              href="#contact"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ x: 3 }}
              className="premium-card p-6 flex items-center justify-between group cursor-pointer"
            >
              <div>
                <h3 className="font-heading font-semibold text-text group-hover:text-primary transition-colors duration-300">
                  {job.title}
                </h3>
                <p className="text-sm text-muted mt-1">
                  {job.location} · {job.type}
                </p>
              </div>
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="text-muted group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
