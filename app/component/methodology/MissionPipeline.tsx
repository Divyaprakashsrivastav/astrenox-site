"use client";

import "./mission-pipeline.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeMethodology } from "@/app/content/homepage-content";
import MissionAmbient from "./MissionAmbient";
import MissionCardVisual from "./MissionCardVisual";
import MissionFlowPulse from "./MissionFlowPulse";
import MissionScrollCard, {
  useCardPointerEvents,
} from "./MissionScrollCard";
import { FadeUp } from "../design/FadeUp";

const VISUALS = ["signal", "neural", "orbital"] as const;
const SCROLL_SPRING = { stiffness: 85, damping: 22, mass: 0.9, restDelta: 0.0008 };

const EXIT_X = "-108%";
const ENTER_X = "108%";

function CardContent({ index }: { index: number }) {
  const stage = homeMethodology.stages[index];
  return (
    <>
      <div className="mission-card-visual">
        <MissionCardVisual variant={VISUALS[index]} />
      </div>
      <p className="mission-card-index">{stage.number}</p>
      <h3 className="mission-card-title">{stage.title}</h3>
      <p className="mission-card-subtitle">{stage.tagline}</p>
      <ul className="mission-card-list">
        {stage.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function usePinnedCardMotion(progress: ReturnType<typeof useSpring>) {
  const card0 = {
    x: useTransform(
      progress,
      [0, 0.22, 0.33, 1],
      ["0%", "0%", EXIT_X, EXIT_X]
    ),
    scale: useTransform(progress, [0, 0.22, 0.33, 1], [1, 1, 0.9, 0.9]),
    opacity: useTransform(progress, [0, 0.22, 0.33, 1], [1, 1, 0, 0]),
    zIndex: useTransform(progress, [0, 0.32, 0.33, 1], [3, 3, 1, 1]),
  };
  const card1 = {
    x: useTransform(
      progress,
      [0, 0.22, 0.33, 0.55, 0.66, 1],
      [ENTER_X, ENTER_X, "0%", "0%", EXIT_X, EXIT_X]
    ),
    scale: useTransform(
      progress,
      [0, 0.22, 0.33, 0.55, 0.66, 1],
      [0.9, 0.9, 1, 1, 0.9, 0.9]
    ),
    opacity: useTransform(
      progress,
      [0, 0.22, 0.33, 0.55, 0.66, 1],
      [0, 0, 1, 1, 0, 0]
    ),
    zIndex: useTransform(
      progress,
      [0, 0.32, 0.33, 0.55, 0.65, 0.66, 1],
      [1, 1, 3, 3, 3, 1, 1]
    ),
  };
  const card2 = {
    x: useTransform(
      progress,
      [0, 0.55, 0.66, 1],
      [ENTER_X, ENTER_X, "0%", "0%"]
    ),
    scale: useTransform(progress, [0, 0.55, 0.66, 1], [0.9, 0.9, 1, 1]),
    opacity: useTransform(progress, [0, 0.55, 0.66, 1], [0, 0, 1, 1]),
    zIndex: useTransform(progress, [0, 0.65, 0.66, 1], [1, 1, 3, 3]),
  };

  const pointerEvents0 = useCardPointerEvents(card0.opacity);
  const pointerEvents1 = useCardPointerEvents(card1.opacity);
  const pointerEvents2 = useCardPointerEvents(card2.opacity);

  return [
    { ...card0, pointerEvents: pointerEvents0 },
    { ...card1, pointerEvents: pointerEvents1 },
    { ...card2, pointerEvents: pointerEvents2 },
  ];
}

function PinnedDesktopStage({ progress }: { progress: ReturnType<typeof useSpring> }) {
  const motionSets = usePinnedCardMotion(progress);

  return (
    <div className="mission-card-stage" aria-live="polite">
      {homeMethodology.stages.map((stage, index) => (
        <MissionScrollCard key={stage.id} motionProps={motionSets[index]}>
          <CardContent index={index} />
        </MissionScrollCard>
      ))}
    </div>
  );
}

function MobileCardStack() {
  const reduced = useReducedMotion();

  return (
    <div className="mission-pipeline-grid">
      {homeMethodology.stages.map((stage, index) => (
        <motion.article
          key={stage.id}
          className="mission-card mission-card--interactive"
          initial={reduced ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.85, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={reduced ? undefined : { y: -8, scale: 1.02 }}
        >
          <div className="mission-card-glow" aria-hidden />
          <CardContent index={index} />
        </motion.article>
      ))}
    </div>
  );
}

export default function MissionPipeline() {
  const reduced = useReducedMotion();
  const pinRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, SCROLL_SPRING);

  return (
    <section
      ref={pinRef}
      id={homeMethodology.id}
      className="scroll-mt-28 mission-pipeline-section"
    >
      <MissionAmbient />

      <div className="mission-pin-sticky">
        <div className="ax-container ax-section-content mission-pipeline-content">
          <FadeUp className="ax-header ax-header-center mission-pipeline-header">
            <p className="ax-label">{homeMethodology.label}</p>
            <h2 className="ax-title">{homeMethodology.title}</h2>
            <p className="ax-description">{homeMethodology.description}</p>
          </FadeUp>

          <div className="mission-pipeline">
            <MissionFlowPulse />

            <div className="mission-pipeline-cards mission-pipeline-cards--desktop">
              {reduced ? (
                <div className="mission-pipeline-grid">
                  {homeMethodology.stages.map((stage, index) => (
                    <article key={stage.id} className="mission-card">
                      <CardContent index={index} />
                    </article>
                  ))}
                </div>
              ) : (
                <PinnedDesktopStage progress={progress} />
              )}
            </div>

            <div className="mission-pipeline-cards mission-pipeline-cards--mobile">
              <MobileCardStack />
            </div>

            <p className="mission-pipeline-flow-label" aria-hidden>
              <span>DISCOVER</span>
              <span className="mission-pipeline-arrow">→</span>
              <span>ARCHITECT</span>
              <span className="mission-pipeline-arrow">→</span>
              <span>DEPLOY</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
