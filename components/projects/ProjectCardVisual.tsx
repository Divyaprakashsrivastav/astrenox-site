"use client";

import type { ReactNode } from "react";
import { AISystemsVisual } from "../features/visuals/AISystemsVisual";
import { AnalyticsVisual } from "../features/visuals/AnalyticsVisual";
import { ResearchVisual } from "../features/visuals/ResearchVisual";
import { OrionProjectVisual } from "./projectVisuals/OrionProjectVisual";
import { RoboticsProjectVisual } from "./projectVisuals/RoboticsProjectVisual";
import { VisionProjectVisual } from "./projectVisuals/VisionProjectVisual";
import type { ProjectVisualId } from "@/app/content/astrenox-content";

export type { ProjectVisualId };

export interface ProjectVisualProps {
  active: boolean;
  reducedMotion: boolean;
}

const VISUALS: Record<
  ProjectVisualId,
  (props: ProjectVisualProps) => ReactNode
> = {
  solvoris: AISystemsVisual,
  orzo: AnalyticsVisual,
  velocity: RoboticsProjectVisual,
  copilot: VisionProjectVisual,
  "data-revamp": ResearchVisual,
  frontend: OrionProjectVisual,
};

interface ProjectCardVisualProps extends ProjectVisualProps {
  visualId: ProjectVisualId;
}

export default function ProjectCardVisual({
  visualId,
  active,
  reducedMotion,
}: ProjectCardVisualProps) {
  const Visual = VISUALS[visualId];

  return (
    <div className={`project-visual-stage ${active ? "is-active" : ""}`}>
      <div className="project-visual-deco" aria-hidden>
        <div className="project-visual-grid" />
        <div className="project-visual-glow" />
        <div className="project-visual-scan" />
      </div>
      <div className="project-visual-glass" aria-hidden />
      <div className="project-visual-content">
        <div className="project-visual-svg-wrap">
          <Visual active={active} reducedMotion={reducedMotion} />
        </div>
      </div>
    </div>
  );
}
