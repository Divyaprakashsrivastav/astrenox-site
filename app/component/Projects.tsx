"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";

const projects = [
  {
    title: "SkyGuard AI Surveillance",
    category: "Drone Technology",
    description:
      "Autonomous aerial surveillance with real-time threat detection and multi-drone coordination.",
  },
  {
    title: "Orion Navigation System",
    category: "Autonomous Navigation",
    description:
      "GPS-denied navigation using visual-inertial odometry for aerospace and defense.",
  },
  {
    title: "AgriBot Precision Platform",
    category: "Robotics Solutions",
    description:
      "AI-powered agricultural robots for precision farming and autonomous harvesting.",
  },
  {
    title: "Neural Flight Controller",
    category: "AI Systems",
    description:
      "Deep reinforcement learning flight controller for dynamic environments.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 lg:py-40 border-t border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Our Work"
          title={
            <>
              Projects that define the{" "}
              <span className="font-editorial text-primary">frontier</span>
            </>
          }
          description="Explore our portfolio of autonomous systems deployed across aerospace, defense, and enterprise."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="group premium-card relative overflow-hidden aspect-[16/10] cursor-pointer p-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-primary/10" />
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, #6FA3B8 0.5px, transparent 0)`,
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="absolute inset-0 border border-border group-hover:border-primary/30 transition-colors duration-400 rounded-xl pointer-events-none" />

              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-medium text-primary border border-primary/25 bg-primary/5 mb-4">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed max-w-md opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {project.description}
                </p>
                <motion.div
                  className="absolute top-6 right-6 w-9 h-9 rounded-full border border-border flex items-center justify-center bg-surface opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/30"
                >
                  <ArrowUpRight size={16} className="text-text" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
