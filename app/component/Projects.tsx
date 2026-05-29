"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer } from "./ui/FadeIn";
import ProjectCard, { type Project } from "./projects/ProjectCard";

const projects: Project[] = [
  {
    id: "skyguard",
    title: "SkyGuard AI Surveillance",
    category: "Autonomous Drones",
    description:
      "Multi-drone coordination with real-time threat detection for enterprise security.",
    tags: ["UAV", "Swarm AI", "Radar Fusion", "Edge AI"],
    stats: [
      { value: "12 km", label: "Coverage" },
      { value: "<40ms", label: "Latency" },
      { value: "99.8%", label: "Accuracy" },
    ],
    href: "#contact",
  },
  {
    id: "orion",
    title: "Orion Navigation System",
    category: "AI Systems",
    description:
      "GPS-denied navigation via visual-inertial odometry and neural pathfinding.",
    tags: ["VIO", "Neural Nav", "Path Planning", "Edge AI"],
    stats: [
      { value: "±0.3m", label: "Accuracy" },
      { value: "GPS-denied", label: "Environments" },
      { value: "24/7", label: "Operations" },
    ],
    href: "#contact",
  },
  {
    id: "robotics",
    title: "AgriBot Precision Platform",
    category: "Robotics",
    description:
      "Autonomous manipulators with sub-millimeter precision for industrial farming.",
    tags: ["Manipulator", "Automation", "Field Ops", "Edge AI"],
    stats: [
      { value: "±0.02mm", label: "Precision" },
      { value: "99.7%", label: "Uptime" },
      { value: "847", label: "Cycles/hr" },
    ],
    href: "#process",
  },
  {
    id: "vision",
    title: "Neural Flight Controller",
    category: "Computer Vision",
    description:
      "RL perception stack for dynamic object tracking in contested airspace.",
    tags: ["Detection", "Tracking", "RL Control", "60 FPS"],
    stats: [
      { value: "60 FPS", label: "Frame rate" },
      { value: "120+", label: "Classes" },
      { value: "<16ms", label: "Inference" },
    ],
    href: "#services",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Projects"
          title={
            <>
              Systems deployed at the{" "}
              <span className="text-highlight-primary">frontier</span>
            </>
          }
          description="Production missions across defense, aerospace, and enterprise — each card is a live snapshot of technology in the field."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
