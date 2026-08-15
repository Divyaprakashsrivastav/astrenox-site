"use client";

import { memo, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

const STAGES = [
  { id: "prototype", label: "Prototype", kind: "start" as const },
  { id: "api", label: "API Limits", kind: "barrier" as const },
  { id: "latency", label: "Latency", kind: "barrier" as const },
  { id: "security", label: "Security", kind: "barrier" as const },
  { id: "governance", label: "Governance", kind: "barrier" as const },
  { id: "scaling", label: "Scaling", kind: "barrier" as const },
  { id: "monitoring", label: "Monitoring", kind: "barrier" as const },
  { id: "engineering", label: "Astrenox Engineering Layer", kind: "solution" as const },
  { id: "production", label: "Production Ready", kind: "success" as const },
];

function AIEngineeringFailurePipeline() {
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start 0.88", "end 0.25"],
  });

  const activeIndex = useTransform(scrollYProgress, (p) =>
    Math.min(STAGES.length - 1, Math.floor(p * STAGES.length))
  );

  return (
    <div ref={rootRef} className="aie-failure-pipeline" aria-hidden>
      <div className="aie-failure-spine">
        <div className="aie-failure-spine-track" />
        <motion.div className="aie-failure-spine-fill" style={{ scaleY: scrollYProgress }} />
        <motion.div className="aie-failure-spine-glow" style={{ scaleY: scrollYProgress }} />
      </div>

      <div className="aie-failure-rows">
        {STAGES.map((stage, i) => (
          <PipelineRow
            key={stage.id}
            stage={stage}
            index={i}
            activeIndex={activeIndex}
            inView={inView}
          />
        ))}
      </div>
    </div>
  );
}

function PipelineRow({
  stage,
  index,
  activeIndex,
  inView,
}: {
  stage: (typeof STAGES)[number];
  index: number;
  activeIndex: ReturnType<typeof useTransform<number, number>>;
  inView: boolean;
}) {
  const lit = useTransform(activeIndex, (a) => a >= index);

  return (
    <div className="aie-failure-row">
      <div className="aie-failure-rail-slot">
        <motion.span
          className={`aie-failure-node aie-failure-node--${stage.kind}`}
          style={{
            opacity: useTransform(lit, (on) => (on ? 1 : 0.35)),
            scale: useTransform(lit, (on) => (on ? 1 : 0.72)),
          }}
        />
      </div>

      <motion.article
        className={`aie-failure-card aie-failure-card--${stage.kind}`}
        initial={{ opacity: 0, y: 14 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.48, delay: index * 0.06, ease: EASE_PREMIUM }}
        style={{
          borderColor: useTransform(lit, (on) =>
            on
              ? stage.kind === "success"
                ? "rgba(74, 222, 128, 0.38)"
                : stage.kind === "solution"
                  ? "rgba(167, 139, 250, 0.5)"
                  : stage.kind === "barrier"
                    ? "rgba(251, 191, 36, 0.22)"
                    : "rgba(167, 139, 250, 0.32)"
              : "rgba(124, 92, 255, 0.1)"
          ),
        }}
        whileHover={{
          y: -3,
          boxShadow: "0 14px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
          transition: { duration: 0.25 },
        }}
      >
        <span className="aie-failure-card-index">{String(index + 1).padStart(2, "0")}</span>
        <p className="aie-failure-card-label">{stage.label}</p>
      </motion.article>
    </div>
  );
}

export default memo(AIEngineeringFailurePipeline);
