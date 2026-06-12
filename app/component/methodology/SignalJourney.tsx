"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Brain, GitBranch, Rocket } from "lucide-react";
import { homeMethodology } from "@/app/content/homepage-content";
import SignalJourneyStage from "./SignalJourneyStage";
import SignalJourneyTimeline from "./SignalJourneyTimeline";
import ThinkSignalVisual from "./visuals/ThinkSignalVisual";
import AlignBlueprintVisual from "./visuals/AlignBlueprintVisual";
import ExecuteDeployVisual from "./visuals/ExecuteDeployVisual";

const STAGE_COUNT = homeMethodology.stages.length;
const SCROLL_VH = 72;
const ICONS = [Brain, GitBranch, Rocket] as const;
const VISUALS = [ThinkSignalVisual, AlignBlueprintVisual, ExecuteDeployVisual] as const;

export default function SignalJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 28,
    mass: 0.85,
  });

  useMotionValueEvent(smoothProgress, "change", (value) => {
    const index =
      value < 0.34 ? 0 : value < 0.67 ? 1 : 2;
    setActiveIndex(Math.min(Math.max(index, 0), STAGE_COUNT - 1));
  });

  const headerY = useTransform(smoothProgress, [0, 0.2], [0, -6]);
  const sectionHeight = `${STAGE_COUNT * SCROLL_VH + 35}vh`;

  return (
    <section
      id={homeMethodology.id ?? "methodology"}
      ref={containerRef}
      className="signal-journey"
      style={{ height: sectionHeight }}
    >
      <div className="signal-journey-sticky">
        <div className="ax-container signal-journey-shell">
          <motion.header
            className="signal-journey-header"
            style={{ y: headerY }}
          >
            <p className="ax-label">{homeMethodology.label}</p>
            <h2 className="ax-title">{homeMethodology.title}</h2>
            <p className="signal-journey-subtitle">{homeMethodology.subtitle}</p>
            <p className="ax-description signal-journey-desc">
              {homeMethodology.description}
            </p>
          </motion.header>

          <SignalJourneyTimeline
            progress={smoothProgress}
            activeIndex={activeIndex}
          />

          <div className="signal-journey-stages">
            {homeMethodology.stages.map((stage, index) => {
              const Icon = ICONS[index] ?? Brain;
              const Visual = VISUALS[index] ?? ThinkSignalVisual;
              const active = activeIndex === index;
              const past = activeIndex > index;

              return (
                <SignalJourneyStage
                  key={stage.id}
                  stage={stage}
                  active={active}
                  past={past}
                  icon={Icon}
                  visual={<Visual active={active} />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
