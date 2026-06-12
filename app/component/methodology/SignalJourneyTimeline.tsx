"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";
import { homeMethodology } from "@/app/content/homepage-content";

interface SignalJourneyTimelineProps {
  progress: MotionValue<number>;
  activeIndex: number;
}

export default function SignalJourneyTimeline({
  progress,
  activeIndex,
}: SignalJourneyTimelineProps) {
  const fillWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  const pulseLeft = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div className="signal-journey-timeline" aria-hidden>
      <div className="signal-journey-timeline-track">
        <motion.div className="signal-journey-timeline-fill" style={{ width: fillWidth }} />
        <motion.div className="signal-journey-timeline-glow" style={{ width: fillWidth }} />
        <motion.span className="signal-journey-timeline-pulse" style={{ left: pulseLeft }} />
      </div>

      <div className="signal-journey-timeline-nodes">
        {homeMethodology.stages.map((stage, i) => {
          const isActive = activeIndex === i;
          const isPast = activeIndex > i;

          return (
            <div key={stage.id} className="signal-journey-timeline-node">
              <motion.div
                className="signal-journey-timeline-dot"
                animate={{
                  scale: isActive ? 1.15 : 1,
                  boxShadow: isActive
                    ? "0 0 0 6px rgba(155, 77, 143, 0.12), 0 8px 24px rgba(155, 77, 143, 0.2)"
                    : isPast
                      ? "0 0 0 4px rgba(155, 77, 143, 0.06)"
                      : "0 0 0 0px transparent",
                }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <motion.span
                  className="signal-journey-timeline-dot-core"
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    backgroundColor: isActive || isPast ? "#9b4d8f" : "#D0D5DD",
                  }}
                  transition={
                    isActive
                      ? { scale: { duration: 1.6, repeat: Infinity }, backgroundColor: { duration: 0.3 } }
                      : { duration: 0.3 }
                  }
                />
              </motion.div>
              <motion.span
                className="signal-journey-timeline-label"
                animate={{
                  color: isActive ? "#9b4d8f" : isPast ? "#111111" : "#667085",
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
