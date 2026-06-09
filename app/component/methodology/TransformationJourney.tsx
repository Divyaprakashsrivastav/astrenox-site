"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import JourneyParticles from "./JourneyParticles";
import JourneyPipeline from "./JourneyPipeline";
import JourneyStagePanel from "./JourneyStagePanel";
import ThinkNeuralVisual from "./visuals/ThinkNeuralVisual";
import AlignArchitectureVisual from "./visuals/AlignArchitectureVisual";
import ExecuteDeploymentVisual from "./visuals/ExecuteDeploymentVisual";
import { homeMethodology } from "@/app/content/homepage-content";

const STAGE_COUNT = homeMethodology.stages.length;
const SCROLL_VH = 85;

const VISUALS = [ThinkNeuralVisual, AlignArchitectureVisual, ExecuteDeploymentVisual];

export default function TransformationJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.8,
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const idx =
      v < 0.28 ? 0 : v < 0.62 ? 1 : 2;
    setActiveIndex(Math.min(Math.max(idx, 0), STAGE_COUNT - 1));
  });

  const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0.92]);
  const sectionHeight = `${STAGE_COUNT * SCROLL_VH + 30}vh`;

  return (
    <section
      id="methodology"
      ref={containerRef}
      className="journey-section relative"
      style={{ height: sectionHeight }}
    >
      <div className="journey-sticky">
        <JourneyParticles />
        <div className="journey-command-bg" aria-hidden />
        <div className="journey-mesh mesh-grid opacity-20" aria-hidden />

        <div className="relative z-10 h-full flex flex-col max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-24 pb-8">
          <motion.header
            style={{ opacity: headerOpacity }}
            className="text-center max-w-2xl mx-auto mb-6 lg:mb-8 shrink-0"
          >
            <p className="text-[11px] font-medium text-muted uppercase tracking-[0.22em] mb-3">
              {homeMethodology.label}
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.12]">
              {homeMethodology.title}
            </h2>
            <p className="mt-2 text-sm font-semibold tracking-[0.14em] text-primary uppercase">
              {homeMethodology.subtitle}
            </p>
            <p className="mt-3 text-base text-muted leading-relaxed font-light">
              {homeMethodology.description}
            </p>
          </motion.header>

          <div className="hidden lg:block shrink-0 mb-6">
            <JourneyPipeline progress={smoothProgress} activeIndex={activeIndex} />
          </div>

          <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-4 lg:gap-5 items-stretch">
            {homeMethodology.stages.map((stage, i) => {
              const Visual = VISUALS[i] ?? ThinkNeuralVisual;
              return (
                <JourneyStagePanel
                  key={stage.id}
                  stage={stage}
                  index={i}
                  active={activeIndex === i}
                  visual={<Visual active={activeIndex === i} />}
                />
              );
            })}
          </div>

          <div className="lg:hidden mt-4 shrink-0">
            <JourneyPipeline progress={smoothProgress} activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
