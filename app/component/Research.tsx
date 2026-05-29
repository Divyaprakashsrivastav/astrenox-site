"use client";

import { motion } from "framer-motion";
import { FlaskConical, Satellite, Microscope } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";

const pillars = [
  {
    icon: FlaskConical,
    title: "Applied AI Research",
    description:
      "Translating frontier models into deployable autonomy stacks for defense, aerospace, and industrial partners.",
  },
  {
    icon: Satellite,
    title: "Aerospace & Avionics",
    description:
      "Navigation, propulsion intelligence, and space-system architectures for extreme environments.",
  },
  {
    icon: Microscope,
    title: "Perception & Robotics",
    description:
      "Computer vision, sensor fusion, and embodied intelligence for drones and field robotics.",
  },
];

export default function Research() {
  return (
    <section id="research" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Research & Innovation"
          title={
            <>
              Advancing the science of{" "}
              <span className="text-highlight-primary">autonomous</span> systems
            </>
          }
          description="Long-horizon R&D across AI, aerospace, and robotics — from laboratory insight to production-grade deployment."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.title}
                variants={staggerItem}
                className="premium-card p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center mb-6">
                  <Icon size={18} className="text-primary" strokeWidth={2} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-text mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
