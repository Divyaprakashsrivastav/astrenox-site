"use client";

import { memo, useCallback, useRef, useState, type MouseEvent } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Compass,
  Database,
  Target,
  BarChart3,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";

type WorkflowSection = NonNullable<ServicePageContent["workflow"]>;

const STEP_ICONS: LucideIcon[] = [Compass, Database, Target, BarChart3, Layers, Rocket];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

function JourneyMilestone({
  step,
  index,
  total,
  progress,
}: {
  step: WorkflowSection["steps"][number];
  index: number;
  total: number;
  progress: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });
  const [hovered, setHovered] = useState(false);
  const isLeft = index % 2 === 0;
  const Icon = STEP_ICONS[index] ?? Compass;
  const number = String(index + 1).padStart(2, "0");
  const isCompleted = progress >= (index + 1) / total;
  const isCurrent =
    progress >= index / total && progress < (index + 1) / total;

  const rotateX = useSpring(0, { stiffness: 200, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const onMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * 6);
      rotateX.set(-y * 5);
    },
    [rotateX, rotateY]
  );

  const resetTilt = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  }, [rotateX, rotateY]);

  return (
    <article
      ref={ref}
      className={`adv-journey-milestone adv-journey-milestone--${isLeft ? "left" : "right"}`}
    >
      <div className="adv-journey-milestone-spine" aria-hidden>
        <motion.div
          className="adv-journey-node"
          data-completed={isCompleted ? "true" : "false"}
          data-current={isCurrent ? "true" : "false"}
          animate={
            inView
              ? {
                  scale: hovered || isCurrent ? 1.12 : 1,
                  boxShadow: hovered || isCurrent
                    ? "0 0 0 8px rgba(139, 92, 246, 0.15), 0 0 32px rgba(103, 232, 249, 0.35)"
                    : isCompleted
                      ? "0 0 0 4px rgba(139, 92, 246, 0.12), 0 0 20px rgba(139, 92, 246, 0.2)"
                      : "0 0 0 4px rgba(139, 92, 246, 0.06)",
                }
              : { scale: 0.92, boxShadow: "0 0 0 0 transparent" }
          }
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <motion.span
            className="adv-journey-node-num"
            style={{ opacity: inView ? 1 : 0.35 }}
          >
            {number}
          </motion.span>
          <motion.span
            className="adv-journey-node-ring"
            animate={{ opacity: hovered || inView ? [0.3, 0.7, 0.3] : 0.15 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {index < total - 1 && (
          <div className="adv-journey-energy">
            {[0, 1, 2].map((p) => (
              <motion.span
                key={p}
                className="adv-journey-energy-dot"
                animate={{ y: ["0%", "100%"], opacity: [0, 0.9, 0] }}
                transition={{
                  duration: 2.2 + p * 0.4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: index * 0.35 + p * 0.55,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <motion.div
        className="adv-journey-card-wrap"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ delay: index * 0.08 }}
      >
        <motion.div
          className="adv-journey-card"
          style={{ transform }}
          onMouseEnter={() => setHovered(true)}
          onMouseMove={onMove}
          onMouseLeave={resetTilt}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.35, ease: EASE_PREMIUM }}
          data-active={inView ? "true" : "false"}
          data-completed={isCompleted ? "true" : "false"}
          data-current={isCurrent ? "true" : "false"}
        >
          <div className="adv-journey-card-glow" aria-hidden />
          <div className="adv-journey-card-head">
            <motion.span
              className="adv-journey-card-icon"
              animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE_PREMIUM }}
            >
              <Icon size={20} strokeWidth={1.65} aria-hidden />
            </motion.span>
            <span className="adv-journey-card-num">{number}</span>
          </div>
          <h3>{step.name}</h3>
          <p>
            <FormattedText text={step.description} />
          </p>
          <div className="adv-journey-card-progress" aria-hidden>
            <motion.span
              initial={{ width: 0 }}
              animate={inView ? { width: `${((index + 1) / total) * 100}%` } : { width: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE_PREMIUM }}
            />
          </div>
        </motion.div>
      </motion.div>
    </article>
  );
}

function AdvisoryStrategyJourney({ workflow }: { workflow: WorkflowSection }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.75", "end 0.25"],
  });
  const spineProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 28 });
  const spineHeight = useTransform(spineProgress, [0, 1], ["0%", "100%"]);
  const bgY = useTransform(spineProgress, [0, 1], ["0%", "-4%"]);
  useMotionValueEvent(spineProgress, "change", (v) => setProgress(v));

  return (
    <section
      ref={sectionRef}
      id={workflow.id}
      className="adv-journey"
      aria-labelledby="adv-journey-title"
    >
      <div className="adv-journey-bg" aria-hidden>
        <motion.div className="adv-journey-bg-blueprint" style={{ y: bgY }} />
        <motion.div className="adv-journey-bg-nebula" style={{ y: bgY }} />
        <svg className="adv-journey-bg-network" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden>
          <motion.path
            d="M80 120 Q 200 80 320 140 T 560 100 T 720 160"
            fill="none"
            stroke="rgba(139, 92, 246, 0.12)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: [0.2, 0.45, 0.2] }}
            transition={{ pathLength: { duration: 2.5, ease: "easeInOut" }, opacity: { duration: 4, repeat: Infinity } }}
          />
          <motion.path
            d="M60 420 Q 240 380 400 440 T 740 400"
            fill="none"
            stroke="rgba(103, 232, 249, 0.1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0.25 }}
            animate={{ pathLength: 1, opacity: [0.15, 0.35, 0.15] }}
            transition={{ pathLength: { duration: 3, ease: "easeInOut", delay: 0.4 }, opacity: { duration: 5, repeat: Infinity, delay: 0.5 } }}
          />
        </svg>
        {Array.from({ length: 10 }, (_, i) => (
          <motion.span
            key={i}
            className="adv-journey-bg-particle"
            style={{
              left: `${(i * 23 + 8) % 100}%`,
              top: `${(i * 31 + 12) % 100}%`,
            }}
            animate={{
              y: [0, -20 - (i % 4) * 8, 0],
              opacity: [0.06, 0.35, 0.06],
            }}
            transition={{
              duration: 8 + (i % 5) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 6) * 0.4,
            }}
          />
        ))}
      </div>

      <div className="mvp-inner adv-journey-inner">
        <motion.header
          className="adv-journey-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          {workflow.label ? <p className="mvp-eyebrow">{workflow.label}</p> : null}
          <h2 id="adv-journey-title" className="mvp-section-title">
            {workflow.title}
          </h2>
          {workflow.intro ? <p className="mvp-section-intro"><FormattedText text={workflow.intro} /></p> : null}
        </motion.header>

        <div className="adv-journey-track">
          <div className="adv-journey-spine" aria-hidden>
            <div className="adv-journey-spine-track" />
            <motion.div className="adv-journey-spine-fill" style={{ height: spineHeight }} />
            <motion.div className="adv-journey-spine-glow" style={{ height: spineHeight }} />
          </div>

          <div className="adv-journey-milestones">
            {workflow.steps.map((step, index) => (
              <JourneyMilestone
                key={step.name}
                step={step}
                index={index}
                total={workflow.steps.length}
                progress={progress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AdvisoryStrategyJourney);
