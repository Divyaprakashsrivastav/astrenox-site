"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";
import { homeMethodology } from "@/app/content/homepage-content";

interface JourneyPipelineProps {
  progress: MotionValue<number>;
  activeIndex: number;
}

export default function JourneyPipeline({ progress, activeIndex }: JourneyPipelineProps) {
  const lineWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  const pulseLeft = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="journey-pipeline" aria-hidden>
      <div className="journey-pipeline-track">
        <motion.div className="journey-pipeline-fill" style={{ width: lineWidth }} />
        <motion.div className="journey-pipeline-glow" style={{ width: lineWidth }} />
        <motion.div className="journey-pipeline-pulse" style={{ left: pulseLeft }} />
      </div>
      <div className="journey-pipeline-nodes">
        {homeMethodology.stages.map((stage, i) => {
          const isActive = activeIndex === i;
          const isPast = activeIndex > i;
          return (
            <div key={stage.id} className="journey-pipeline-node">
              <motion.div
                className="journey-pipeline-dot"
                animate={{
                  scale: isActive ? 1.2 : 1,
                  boxShadow: isActive
                    ? "0 0 20px rgba(125, 46, 104, 0.55)"
                    : isPast
                      ? "0 0 8px rgba(125, 46, 104, 0.25)"
                      : "0 0 0 transparent",
                }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <span className={`journey-pipeline-dot-core ${isActive || isPast ? "is-live" : ""}`} />
              </motion.div>
              <motion.span
                className="journey-pipeline-label"
                animate={{
                  color: isActive ? "var(--color-primary)" : isPast ? "var(--color-text)" : "var(--color-muted)",
                  opacity: isActive ? 1 : 0.75,
                }}
              >
                {stage.title}
              </motion.span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
