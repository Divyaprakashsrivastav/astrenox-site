"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import TimelineStepCard from "./timeline/TimelineStepCard";
import {
  ReviewVisual,
  DeliveryVisual,
  ProductionVisual,
  OptimizationVisual,
  ScaleVisual,
} from "./timeline/TimelineVisuals";

const STEPS = [
  {
    step: "Step 01",
    title: "System Review",
    description:
      "Deep audit of your infrastructure, data flows, and autonomy readiness across every critical layer.",
    Visual: ReviewVisual,
  },
  {
    step: "Step 02",
    title: "Weekly Delivery",
    description:
      "Iterative sprints with measurable milestones — shipping production-grade increments every week.",
    Visual: DeliveryVisual,
  },
  {
    step: "Step 03",
    title: "Production",
    description:
      "Hardened deployment pipelines with enterprise security, observability, and compliance built in.",
    Visual: ProductionVisual,
  },
  {
    step: "Step 04",
    title: "Optimization",
    description:
      "Continuous performance tuning, model refinement, and operational efficiency at scale.",
    Visual: OptimizationVisual,
  },
  {
    step: "Step 05",
    title: "Scale Automation",
    description:
      "Self-scaling autonomous workflows that compound value across your entire organization.",
    Visual: ScaleVisual,
  },
] as const;

const STEP_COUNT = STEPS.length;
const SCROLL_VH_PER_STEP = 85;

function TimelineMarker({
  index,
  label,
  progress,
}: {
  index: number;
  label: string;
  progress: MotionValue<number>;
}) {
  const maxIndex = STEP_COUNT - 1;

  const dotScale = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.4 ? 1.2 : 0.85;
  });

  const dotOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    if (dist < 0.35) return 1;
    return 0.35 + Math.max(0, 0.4 - dist * 0.35);
  });

  const textOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return dist < 0.45 ? 1 : 0.4;
  });

  const ringOpacity = useTransform(progress, (p) => {
    const active = p * maxIndex;
    const dist = Math.abs(active - index);
    return Math.max(0, 1 - dist * 1.5);
  });

  return (
    <div className="flex flex-col items-center gap-2 flex-1 min-w-0 z-10">
      <motion.div
        style={{ scale: dotScale, opacity: dotOpacity }}
        className="relative flex items-center justify-center w-8 h-8"
      >
        <motion.div
          style={{ opacity: ringOpacity }}
          className="absolute inset-0 rounded-full border border-primary/40 bg-primary/10"
        />
        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
      </motion.div>
      <motion.span
        style={{ opacity: textOpacity }}
        className="text-[10px] sm:text-xs font-medium tracking-wider text-muted uppercase text-center truncate w-full px-1"
      >
        {label}
      </motion.span>
    </div>
  );
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.0008,
  });

  const lineWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const headerY = useTransform(smoothProgress, [0, 0.15], [0, -8]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0.92]);

  const parallaxY = useTransform(smoothProgress, [0, 1], [24, -24]);
  const parallaxYInverse = useTransform(parallaxY, (v) => -v * 0.6);

  const sectionHeight = `${STEP_COUNT * SCROLL_VH_PER_STEP + 40}vh`;

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative border-t border-border/60"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-background">
        <div className="absolute inset-0 grid-background opacity-50 pointer-events-none" />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-primary/6 blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ y: parallaxYInverse }}
          className="absolute bottom-0 left-[10%] w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"
        />

        <div className="relative flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8 pt-28 lg:pt-32 pb-8 lg:pb-12">
          <motion.div style={{ y: headerY, opacity: headerOpacity }}>
            <div className="max-w-3xl mx-auto text-center mb-8 lg:mb-10 shrink-0">
              <span className="inline-block text-xs font-medium text-primary tracking-[0.2em] uppercase mb-5">
                How We Work
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-text tracking-tight leading-[1.15]">
                A cinematic path from review to{" "}
                <span className="font-editorial text-primary">scale</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-2xl mx-auto">
                Scroll to explore each phase of our enterprise delivery model —
                designed for clarity, momentum, and long-term autonomy.
              </p>
            </div>
          </motion.div>

          {/* Progress track */}
          <div className="relative mt-2 mb-8 lg:mb-10 px-2 sm:px-4">
            <div className="absolute top-4 left-4 right-4 sm:left-8 sm:right-8 h-px bg-border" />
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-4 left-4 sm:left-8 h-px bg-gradient-to-r from-primary via-primary/80 to-primary/40 origin-left"
            />
            <div className="relative flex justify-between gap-1">
              {STEPS.map((s, i) => (
                <TimelineMarker
                  key={s.step}
                  index={i}
                  label={s.title.split(" ")[0]}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>

          {/* Cards — horizontal on desktop, scroll-snap row on tablet */}
          <div className="flex-1 flex items-stretch min-h-0">
            <div className="w-full flex gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory lg:snap-none scrollbar-hide">
              {STEPS.map((item, i) => (
                <div
                  key={item.step}
                  className="snap-center shrink-0 w-[min(85vw,280px)] lg:shrink lg:w-auto lg:flex-1"
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
                </div>
              ))}
            </div>
          </div>

          {/* Active step readout */}
          <ActiveStepCaption progress={smoothProgress} />
        </div>
      </div>
    </section>
  );
}

function ActiveStepCaption({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.05], [1, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="mt-6 lg:mt-8 flex items-center justify-center gap-3 text-xs text-muted"
    >
      <span className="hidden sm:inline tracking-[0.15em] uppercase">
        Scroll to advance
      </span>
      <motion.div
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-6 bg-gradient-to-b from-primary/50 to-transparent"
      />
    </motion.div>
  );
}
