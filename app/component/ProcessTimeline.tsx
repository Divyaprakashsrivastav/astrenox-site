"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "framer-motion";
import TimelineStepCard from "./timeline/TimelineStepCard";
import TimelineBackground from "./timeline/TimelineBackground";
import {
  ReviewVisual,
  DeliveryVisual,
  ProductionVisual,
  OptimizationVisual,
  ScaleVisual,
} from "./timeline/TimelineVisuals";
import { processSection, processSteps } from "@/app/content/astrenox-content";

const STEP_VISUALS = [
  ReviewVisual,
  DeliveryVisual,
  ProductionVisual,
  OptimizationVisual,
  ScaleVisual,
] as const;

const STEPS = processSteps.map((step, i) => ({
  ...step,
  Visual: STEP_VISUALS[i],
}));

const STEP_COUNT = STEPS.length;
const SCROLL_VH_PER_STEP = 70;
const CARD_HEIGHT = 300;

function TimelineMarker({
  index,
  label,
  progress,
  activeIndex,
}: {
  index: number;
  label: string;
  progress: MotionValue<number>;
  activeIndex: number;
}) {
  const maxIndex = STEP_COUNT - 1;
  const isActive = activeIndex === index;

  const dotScale = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.3 ? 1.3 : 0.92;
  });

  const dotOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist < 0.3) return 1;
    return 0.65 + Math.max(0, 0.3 - dist * 0.3);
  });

  const labelOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.35 ? 1 : 0.62;
  });

  const ringOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return Math.max(0, 1 - dist * 2);
  });

  return (
    <div className="flex flex-col items-center gap-3 flex-1 min-w-0 z-10">
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="relative flex h-10 w-10 items-center justify-center"
      >
        {isActive && (
          <>
            <motion.span
              className="absolute inset-[-4px] rounded-full border border-primary/25"
              animate={{ scale: [1, 1.45, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              aria-hidden
            />
            <motion.span
              className="absolute inset-0 rounded-full bg-primary/10"
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
          </>
        )}
        <motion.div
          style={{ opacity: ringOpacity }}
          className="absolute inset-0 rounded-full border border-primary/20 bg-white shadow-sm"
        />
        <motion.div
          className={`rounded-full transition-colors duration-300 ${
            isActive
              ? "h-3.5 w-3.5 bg-primary shadow-[0_0_14px_rgba(125,46,104,0.5)]"
              : "h-2.5 w-2.5 bg-[#d0d5dd]"
          }`}
          layout
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        />
      </motion.div>
      <motion.span
        style={{ opacity: labelOpacity }}
        className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase text-center truncate w-full px-1 ${
          isActive ? "text-primary" : "text-[#667085]"
        }`}
      >
        {label}
      </motion.span>
    </div>
  );
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 88,
    damping: 24,
    mass: 0.85,
    restDelta: 0.0006,
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    const idx = Math.round(v * (STEP_COUNT - 1));
    setActiveIndex(Math.min(Math.max(idx, 0), STEP_COUNT - 1));
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const lineGlow = useTransform(smoothProgress, [0, 1], [0.45, 1]);
  const headerY = useTransform(smoothProgress, [0, 0.1], [0, -4]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.08], [1, 0.97]);

  const sectionHeight = `${STEP_COUNT * SCROLL_VH_PER_STEP + 40}vh`;

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative bg-background"
      style={{ height: sectionHeight }}
    >
      <div
        className="sticky top-0 h-screen flex flex-col overflow-hidden bg-background"
        style={{ perspective: 1400 }}
      >
        <TimelineBackground progress={smoothProgress} />

        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8 pt-[5.5rem] lg:pt-24 pb-8 lg:pb-10">
          <motion.div style={{ y: headerY, opacity: headerOpacity }}>
            <div className="max-w-2xl mx-auto text-center mb-8 lg:mb-10 shrink-0">
              <span className="inline-block text-[11px] font-semibold text-[#667085] tracking-[0.24em] uppercase mb-4">
                {processSection.partBLabel}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.875rem] font-semibold text-[#0a0a0a] tracking-[-0.03em] leading-[1.1]">
                Think → Align →{" "}
                <span className="text-highlight-primary">Execute</span>
              </h2>
              <p className="mt-4 text-base sm:text-[1.0625rem] text-[#667085] leading-[1.65] max-w-xl mx-auto">
                {processSection.description}
              </p>
            </div>
          </motion.div>

          {/* Progress track */}
          <div className="relative mb-8 lg:mb-10 px-2 sm:px-4 shrink-0">
            <div className="absolute top-[19px] left-4 right-4 sm:left-8 sm:right-8 h-[3px] rounded-full bg-[#e5e7eb] shadow-[inset_0_1px_2px_rgba(16,24,40,0.06)] overflow-visible">
              <motion.div
                style={{ width: lineWidth, opacity: lineGlow }}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary/90 via-primary to-secondary/90"
              />
              <motion.div
                style={{ width: lineWidth, opacity: lineGlow }}
                className="absolute inset-y-[-2px] left-0 h-[7px] rounded-full bg-primary/30 blur-[4px]"
                aria-hidden
              />
              <motion.div
                style={{ left: lineWidth, opacity: lineGlow }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary border-[2.5px] border-white shadow-[0_0_0_1px_rgba(125,46,104,0.2),0_2px_8px_rgba(125,46,104,0.35)] z-10"
                aria-hidden
              />
            </div>

            <div className="relative flex justify-between gap-2 pt-1">
              {STEPS.map((s, i) => (
                <TimelineMarker
                  key={s.step}
                  index={i}
                  label={s.title.split(" ")[0]}
                  progress={smoothProgress}
                  activeIndex={activeIndex}
                />
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="relative flex-1 flex items-stretch min-h-[340px]">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-8 lg:w-12 z-10 bg-gradient-to-r from-background to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8 lg:w-12 z-10 bg-gradient-to-l from-background to-transparent"
              aria-hidden
            />

            <div className="w-full flex gap-4 lg:gap-4 overflow-x-auto lg:overflow-visible pb-5 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide items-stretch px-1">
              {STEPS.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    delay: i * 0.07,
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="snap-center shrink-0 w-[min(88vw,304px)] lg:shrink lg:flex-1 lg:min-w-0 h-full"
                  style={{ minHeight: CARD_HEIGHT }}
                >
                  <TimelineStepCard
                    index={i}
                    step={item.step}
                    title={item.title}
                    description={item.description}
                    Visual={item.Visual}
                    progress={smoothProgress}
                    totalSteps={STEP_COUNT}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <ActiveStepCaption activeIndex={activeIndex} />
        </div>
      </div>
    </section>
  );
}

function ActiveStepCaption({ activeIndex }: { activeIndex: number }) {
  const step = STEPS[activeIndex];

  return (
    <motion.div
      className="mt-6 lg:mt-8 flex flex-col items-center gap-2 shrink-0"
      layout
    >
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2.5 shadow-[0_1px_2px_rgba(16,24,40,0.05),0_4px_12px_rgba(16,24,40,0.04)]"
      >
        <span className="text-[11px] font-semibold tracking-wide text-primary uppercase">
          {step.step}
        </span>
        <span className="h-1 w-1 rounded-full bg-border" aria-hidden />
        <span className="text-sm font-medium text-[#1d2939]">{step.title}</span>
      </motion.div>

      <div className="flex items-center gap-2.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[#98a2b3]">
        <span>Scroll to advance</span>
        <motion.div
          animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-5 bg-gradient-to-b from-primary/70 to-transparent"
        />
      </div>
    </motion.div>
  );
}
