"use client";

import { useState, type MouseEvent } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import NexusCoreVisual from "../projects/visuals/NexusCoreVisual";
import SynapseVisual from "../projects/visuals/SynapseVisual";
import CodeForgeVisual from "../projects/visuals/CodeForgeVisual";
import SovereignVisual from "../projects/visuals/SovereignVisual";
import ClinicalVisual from "../projects/visuals/ClinicalVisual";
import AnimatedCounter from "../ui/AnimatedCounter";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeFlagshipProjects } from "@/app/content/homepage-content";
import { MOTION } from "../motion/home-motion";

function parseMetric(value: string) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return null;
  const num = parseFloat(match[1]);
  return {
    num,
    suffix: match[2],
    decimals: match[1].includes(".") ? 1 : 0,
  };
}

function ProjectVisual({ id, active }: { id: string; active: boolean }) {
  switch (id) {
    case "synapse":
      return <SynapseVisual active={active} />;
    case "codeforge":
      return <CodeForgeVisual active={active} />;
    case "sovereign":
      return <SovereignVisual active={active} />;
    case "clinical":
      return <ClinicalVisual active={active} />;
    default:
      return <NexusCoreVisual active={active} />;
  }
}

function ProjectCard({
  project,
  active,
  reduced,
  onEnter,
  onLeave,
}: {
  project: (typeof homeFlagshipProjects.items)[number];
  active: boolean;
  reduced: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 22,
  });

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetTilt = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.article
      className={`ax-project-card ax-project-card-premium${active ? " is-active" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={() => {
        onLeave();
        resetTilt();
      }}
      onMouseMove={onMove}
      style={
        reduced
          ? undefined
          : { rotateX, rotateY, transformPerspective: 900 }
      }
      whileHover={
        reduced
          ? { y: -4 }
          : {
              y: -6,
              scale: 1.02,
              boxShadow: "0 20px 48px rgba(177, 70, 131, 0.14), 0 8px 24px rgba(17,17,17,0.06)",
            }
      }
      transition={{ duration: 0.32, ease: MOTION.lineReveal.ease }}
      data-cursor-hover
    >
      <div className="ax-project-visual ax-project-visual-premium">
        <ProjectVisual id={project.id} active={active && !reduced} />
      </div>
      <div className="ax-project-body">
        <p className="ax-label">{project.category}</p>
        <h3 className="ax-project-title">{project.title}</h3>
        <p className="ax-project-desc">{project.outcome}</p>
        <div className="ax-project-metrics">
          {project.metrics.map((m) => {
            const parsed = parseMetric(m.value);
            return (
              <div key={m.label}>
                <p className="ax-project-metric-value">
                  {parsed && active && !reduced ? (
                    <AnimatedCounter
                      value={parsed.num}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      duration={1}
                      immediate
                    />
                  ) : (
                    m.value
                  )}
                </p>
                <p className="ax-project-metric-label">{m.label}</p>
              </div>
            );
          })}
        </div>
        <Link href={project.href} className="ax-project-link group">
          View case study
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <DesignSection id="projects">
      <DesignHeader
        label={homeFlagshipProjects.label}
        title={homeFlagshipProjects.title}
        description={homeFlagshipProjects.description}
      />

      <Stagger className="ax-project-grid ax-project-grid-premium">
        {homeFlagshipProjects.items.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard
              project={project}
              active={hovered === project.id}
              reduced={reduced}
              onEnter={() => setHovered(project.id)}
              onLeave={() => setHovered(null)}
            />
          </StaggerItem>
        ))}
      </Stagger>
    </DesignSection>
  );
}
