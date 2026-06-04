"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { staggerItem } from "../ui/FadeIn";
import { useReducedMotion } from "../features/useReducedMotion";
import ProjectCardVisual, { type ProjectVisualId } from "./ProjectCardVisual";

export interface Project {
  id: ProjectVisualId;
  title: string;
  category: string;
  description: string;
  tags: string[];
  stats: { label: string; value: string }[];
  outcome?: string;
  href: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const lift = useMotionValue(0);
  const springLift = useSpring(lift, { stiffness: 280, damping: 26 });
  const transform = useMotionTemplate`translateY(${springLift}px)`;

  return (
    <motion.article
      variants={staggerItem}
      style={reducedMotion ? undefined : { transform }}
      onMouseEnter={() => {
        setHovered(true);
        lift.set(-12);
      }}
      onMouseLeave={() => {
        setHovered(false);
        lift.set(0);
      }}
      className={`project-card ${hovered ? "is-hovered" : ""}`}
    >
      <div className="project-card-border-glow" aria-hidden />

      <div className="project-card-shell">
        <div className="project-visual-frame">
          <ProjectCardVisual
            visualId={project.id}
            active={hovered}
            reducedMotion={reducedMotion}
          />
        </div>

        <div className="project-card-body">
          <div className="project-card-intro">
            <span className="project-card-category">{project.category}</span>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
            {project.outcome ? (
              <p className="project-card-outcome">{project.outcome}</p>
            ) : null}
          </div>

          <ul className="project-metrics" aria-label="Project metrics">
            {project.stats.map((stat) => (
              <li key={stat.label} className="project-metric-card">
                <span className="project-metric-value">{stat.value}</span>
                <span className="project-metric-label">{stat.label}</span>
              </li>
            ))}
          </ul>

          <ul className="project-card-tags" aria-label="Technologies">
            {project.tags.map((tag) => (
              <li key={tag}>
                <span className="project-tag">{tag}</span>
              </li>
            ))}
          </ul>

          <Link href={project.href} className="project-card-cta group/cta">
            <span>View Project</span>
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="project-card-cta-icon"
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
