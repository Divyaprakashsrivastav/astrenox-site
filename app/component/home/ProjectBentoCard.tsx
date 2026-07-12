"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import { useInView } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";
import ProjectBentoVisual from "./ProjectBentoVisual";

type ProjectItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  status: string;
  techStack: readonly string[];
  metrics: readonly { value: string; label: string }[];
  href: string;
};

const HOVER_EFFECTS = [
  "sweep",
  "zoom",
  "border",
  "particles",
  "rotate",
  "slide",
  "pulse",
] as const;

const REVEAL_VARIANTS = [
  { x: -28, rotate: -1, scale: 0.96 },
  { x: 28, rotate: 1, scale: 0.96 },
  { y: 32, rotate: 0.8, scale: 0.94 },
  { x: -20, rotate: -0.6, scale: 0.97 },
  { x: 24, rotate: 0.6, scale: 0.95 },
  { y: 28, rotate: -0.8, scale: 0.96 },
  { x: 0, y: 36, rotate: 1, scale: 0.93 },
];

type ProjectBentoCardProps = {
  project: ProjectItem;
  index: number;
  layoutClass: string;
};

export default function ProjectBentoCard({
  project,
  index,
  layoutClass,
}: ProjectBentoCardProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6%" });
  const [hovered, setHovered] = useState(false);
  const reduced = useReducedMotion();
  const effect = HOVER_EFFECTS[index] ?? "sweep";
  const reveal = REVEAL_VARIANTS[index] ?? REVEAL_VARIANTS[0];

  const descriptionParagraphs = project.description.split("\n\n").filter(Boolean);
  const outcomeParagraphs = project.outcome.split("\n\n").filter(Boolean);

  return (
    <motion.article
      ref={ref}
      className={`prj-bento-card prj-bento-card--${effect} ${layoutClass}${hovered ? " is-hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{
        opacity: 0,
        x: reduced ? 0 : reveal.x,
        y: reduced ? 0 : reveal.y ?? 0,
        rotate: reduced ? 0 : reveal.rotate,
        scale: reduced ? 1 : reveal.scale,
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }
          : {
              opacity: 0,
              x: reduced ? 0 : reveal.x,
              y: reduced ? 0 : reveal.y ?? 0,
              rotate: reduced ? 0 : reveal.rotate,
              scale: reduced ? 1 : reveal.scale,
            }
      }
      transition={{
        duration: 0.62,
        delay: 0.08 + index * 0.09,
        ease: EASE_PREMIUM,
      }}
      whileHover={reduced ? undefined : { y: -4 }}
      data-cursor-hover
    >
      <span className="prj-bento-border" aria-hidden />
      {effect === "sweep" ? <span className="prj-bento-sweep" aria-hidden /> : null}
      {effect === "particles" && hovered ? (
        <span className="prj-bento-particles" aria-hidden>
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="prj-bento-particle" style={{ "--i": i } as CSSProperties} />
          ))}
        </span>
      ) : null}

      <div className={`prj-bento-visual-wrap${effect === "zoom" ? " prj-bento-visual-wrap--zoom" : ""}`}>
        <ProjectBentoVisual id={project.id} active={hovered && !reduced} />
        <span className="prj-bento-status">{project.status}</span>
      </div>

      <div className={`prj-bento-body${effect === "slide" ? " prj-bento-body--slide" : ""}`}>
        <div className="prj-bento-meta">
          <span className="prj-bento-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="prj-bento-category">{project.category}</span>
        </div>

        <h3 className="prj-bento-title">{project.title}</h3>

        <div className="prj-bento-scroll">
          {descriptionParagraphs.map((p) => (
            <p key={p} className="prj-bento-desc">
              {p}
            </p>
          ))}
          {outcomeParagraphs.map((p) => (
            <p key={p} className="prj-bento-outcome">
              {p}
            </p>
          ))}
          <div className="prj-bento-metrics" aria-label="Key capabilities">
            {project.metrics.map((m) => (
              <div key={`${m.label}-${m.value}`} className="prj-bento-metric">
                <span className="prj-bento-metric-label">{m.label}</span>
                <span className="prj-bento-metric-value">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="prj-bento-chips" aria-label="Technology stack">
          {project.techStack.map((tech) => (
            <span key={tech} className="prj-bento-chip">
              {tech}
            </span>
          ))}
        </div>

        <Link href={project.href} className="prj-bento-cta group">
          View case study
          <ArrowRight size={14} className="prj-bento-cta-arrow" aria-hidden />
        </Link>
      </div>
    </motion.article>
  );
}
