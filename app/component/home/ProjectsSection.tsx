"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import NexusCoreVisual from "../projects/visuals/NexusCoreVisual";
import SynapseVisual from "../projects/visuals/SynapseVisual";
import CodeForgeVisual from "../projects/visuals/CodeForgeVisual";
import SovereignVisual from "../projects/visuals/SovereignVisual";
import ClinicalVisual from "../projects/visuals/ClinicalVisual";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeFlagshipProjects } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

function ProjectVisual({
  id,
  active,
}: {
  id: string;
  active: boolean;
}) {
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

export default function ProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduced = useReducedMotion();

  return (
    <DesignSection id="projects" className="ax-section-large">
      <DesignHeader
        label={homeFlagshipProjects.label}
        title={homeFlagshipProjects.title}
        description={homeFlagshipProjects.description}
      />

      <Stagger className="ax-project-grid ax-project-grid-premium">
        {homeFlagshipProjects.items.map((project) => {
          const active = hovered === project.id;
          return (
            <StaggerItem key={project.id}>
              <motion.article
                className="ax-project-card ax-project-card-premium"
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
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
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="ax-project-metric-value">{m.value}</p>
                        <p className="ax-project-metric-label">{m.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={project.href} className="ax-project-link group">
                    View case study
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DesignSection>
  );
}
