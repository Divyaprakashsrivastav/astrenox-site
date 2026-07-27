"use client";

import type { ReactNode } from "react";
import { AISystemsVisual } from "./visuals/AISystemsVisual";
import { DroneVisual } from "./visuals/DroneVisual";
import { RoboticsVisual } from "./visuals/RoboticsVisual";
import { AerospaceVisual } from "./visuals/AerospaceVisual";
import { ComputerVisionVisual } from "./visuals/ComputerVisionVisual";
import { ResearchVisual } from "./visuals/ResearchVisual";
import { AnalyticsVisual } from "./visuals/AnalyticsVisual";
import { DashboardHud } from "./visuals/DashboardHud";

export type FeatureVisualId =
  | "ai-systems"
  | "drones"
  | "robotics"
  | "aerospace"
  | "vision"
  | "research"
  | "analytics";

const VISUAL_META: Record<
  FeatureVisualId,
  { code: string; hudLabel: string; metrics: number[] }
> = {
  "ai-systems": { code: "NX-AI-01", hudLabel: "Neural Core", metrics: [68, 92, 78, 95] },
  drones: { code: "NX-UAV-02", hudLabel: "Flight Control", metrics: [55, 82, 74, 88] },
  robotics: { code: "NX-RBT-03", hudLabel: "Arm Control", metrics: [80, 70, 86, 72] },
  aerospace: { code: "NX-SPC-04", hudLabel: "Orbital Ops", metrics: [62, 90, 68, 84] },
  vision: { code: "NX-CV-05", hudLabel: "Perception", metrics: [88, 76, 92, 70] },
  research: { code: "NX-RND-06", hudLabel: "Lab Pipeline", metrics: [74, 68, 82, 78] },
  analytics: { code: "NX-ML-07", hudLabel: "Forecast", metrics: [70, 94, 66, 90] },
};

const VISUALS: Record<FeatureVisualId, (props: VisualProps) => ReactNode> = {
  "ai-systems": AISystemsVisual,
  drones: DroneVisual,
  robotics: RoboticsVisual,
  aerospace: AerospaceVisual,
  vision: ComputerVisionVisual,
  research: ResearchVisual,
  analytics: AnalyticsVisual,
};

export interface VisualProps {
  active: boolean;
  reducedMotion: boolean;
}

interface FeatureCardVisualProps extends VisualProps {
  visualId: FeatureVisualId;
}

export default function FeatureCardVisual({
  visualId,
  active,
  reducedMotion,
}: FeatureCardVisualProps) {
  const Visual = VISUALS[visualId];
  const meta = VISUAL_META[visualId];

  return (
    <div
      className={`feature-visual-stage ${active ? "is-active" : ""}`}
      data-active={active}
    >
      <div className="feature-visual-deco" aria-hidden>
        <div className="feature-visual-scanline" />
        <div className="feature-visual-grid" />
        <div className="feature-visual-mesh" />
        <div className="feature-visual-glow" />
        <div className="feature-visual-vignette" />
        <div className="feature-visual-corners">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      <DashboardHud
        label={meta.hudLabel}
        code={meta.code}
        active={active}
        reducedMotion={reducedMotion}
        metrics={meta.metrics}
      />

      <div className="feature-visual-content">
        <div className="feature-visual-svg-wrap">
          <Visual active={active} reducedMotion={reducedMotion} />
        </div>
      </div>
    </div>
  );
}
