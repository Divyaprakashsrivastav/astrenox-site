"use client";

import "./projects-showcase.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { homeFlagshipProjects } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import ProjectsAmbient from "./ProjectsAmbient";
import ProjectBentoCard from "./ProjectBentoCard";

const BENTO_LAYOUTS = [
  "prj-bento-span-7",
  "prj-bento-span-5",
  "prj-bento-span-4",
  "prj-bento-span-4",
  "prj-bento-span-4",
  "prj-bento-span-5",
  "prj-bento-span-7",
] as const;

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });
  const descriptionParagraphs = homeFlagshipProjects.description.split("\n\n").filter(Boolean);

  return (
    <section id="projects" className="prj-section scroll-mt-28">
      <ProjectsAmbient />

      <div className="prj-inner">
        <motion.header
          ref={headerRef}
          className="prj-header"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
        >
          <p className="prj-eyebrow">{homeFlagshipProjects.label}</p>
          <h2 className="prj-title">{homeFlagshipProjects.title}</h2>
          <div className="prj-description">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="prj-description-p">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.header>

        <div className="prj-bento">
          {homeFlagshipProjects.items.map((project, index) => (
            <ProjectBentoCard
              key={project.id}
              project={project}
              index={index}
              layoutClass={BENTO_LAYOUTS[index] ?? "prj-bento-span-6"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
