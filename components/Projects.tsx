"use client";

import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer } from "./ui/FadeIn";
import ProjectCard, { type Project } from "./projects/ProjectCard";
import { projects, projectsSection } from "@/app/content/astrenox-content";

const projectCards: Project[] = projects.map((p) => ({
  id: p.id,
  title: p.title,
  category: p.category,
  description: p.description,
  tags: [...p.tags],
  stats: p.stats.map((s) => ({ ...s })),
  outcome: p.outcome,
  href: p.href,
}));

export default function Projects() {
  return (
    <section id="projects" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={projectsSection.label}
          title={
            <>
              Real stories,{" "}
              <span className="text-highlight-primary">real results</span>.
            </>
          }
          description={projectsSection.description}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="projects-grid"
        >
          {projectCards.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
