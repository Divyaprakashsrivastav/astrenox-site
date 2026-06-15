"use client";

import { AnimatePresence, motion, useInView, useMotionTemplate, useSpring } from "framer-motion";
import { useCallback, useRef, useState } from "react";
import { FadeUp } from "../design/FadeUp";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeTriFlywheel } from "@/app/content/homepage-content";
import { MOTION } from "../motion/home-motion";
import MoatAmbient from "./MoatAmbient";

type FlywheelId = (typeof homeTriFlywheel.flywheels)[number]["id"];

const FLYWHEEL_ACCENTS: Record<
  FlywheelId,
  { stroke: string; glow: string; glowStrong: string; ring: string }
> = {
  product: {
    stroke: "#C084FC",
    glow: "rgba(192, 132, 252, 0.35)",
    glowStrong: "rgba(192, 132, 252, 0.65)",
    ring: "rgba(168, 85, 247, 0.4)",
  },
  operations: {
    stroke: "#818CF8",
    glow: "rgba(129, 140, 248, 0.35)",
    glowStrong: "rgba(129, 140, 248, 0.65)",
    ring: "rgba(99, 102, 241, 0.4)",
  },
  ecosystem: {
    stroke: "#E879F9",
    glow: "rgba(232, 121, 249, 0.35)",
    glowStrong: "rgba(232, 121, 249, 0.65)",
    ring: "rgba(217, 70, 239, 0.4)",
  },
};

const FLYWHEEL_LAYOUT: Record<
  FlywheelId,
  { top: string; left: string; revealDelay: number }
> = {
  product: { top: "2%", left: "50%", revealDelay: 0.35 },
  operations: { top: "68%", left: "10%", revealDelay: 0.55 },
  ecosystem: { top: "68%", left: "90%", revealDelay: 0.75 },
};

const LINK_LINES = [
  { id: "product" as const, x2: 200, y2: 58 },
  { id: "operations" as const, x2: 72, y2: 292 },
  { id: "ecosystem" as const, x2: 328, y2: 292 },
] as const;

const CORE_CENTER = { x: 200, y: 178 };

const NEURAL_NODES = [
  { cx: 48, cy: 52, r: 1.2 },
  { cx: 112, cy: 28, r: 0.9 },
  { cx: 168, cy: 44, r: 1.1 },
  { cx: 224, cy: 36, r: 0.8 },
  { cx: 288, cy: 58, r: 1.0 },
  { cx: 340, cy: 48, r: 0.9 },
  { cx: 62, cy: 118, r: 1.0 },
  { cx: 318, cy: 112, r: 1.1 },
  { cx: 54, cy: 248, r: 0.9 },
  { cx: 346, cy: 252, r: 1.0 },
  { cx: 120, cy: 312, r: 0.8 },
  { cx: 280, cy: 318, r: 1.0 },
];

const NEURAL_EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [5, 7], [6, 8], [7, 9], [8, 10], [9, 11], [10, 11],
  [2, 7], [3, 6],
];

interface FlywheelNodeProps {
  id: FlywheelId;
  label: string;
  active: boolean;
  hovered: boolean;
  inView: boolean;
  reduced: boolean;
  layout: { top: string; left: string; revealDelay: number };
  onSelect: (id: FlywheelId) => void;
  onHover: (id: FlywheelId | null) => void;
}

function FlywheelNode({
  id,
  label,
  active,
  hovered,
  inView,
  reduced,
  layout,
  onSelect,
  onHover,
}: FlywheelNodeProps) {
  const accent = FLYWHEEL_ACCENTS[id];
  const positionClass =
    id === "operations"
      ? "moat-node--pos-left"
      : id === "ecosystem"
        ? "moat-node--pos-right"
        : "moat-node--pos-top";

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={active}
      className={`moat-node moat-node--${id} ${positionClass} ${active ? "is-active" : ""} ${hovered ? "is-hovered" : ""}`}
      style={{
        top: layout.top,
        left: layout.left,
        ["--moat-accent" as string]: accent.stroke,
        ["--moat-glow" as string]: accent.glow,
        ["--moat-glow-strong" as string]: accent.glowStrong,
      }}
      onClick={() => onSelect(id)}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(id)}
      onBlur={() => onHover(null)}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={
        inView
          ? {
              opacity: 1,
              scale: active || hovered ? 1.08 : 1,
            }
          : { opacity: 0, scale: 0.7 }
      }
      transition={{
        opacity: { duration: 0.55, delay: layout.revealDelay, ease: MOTION.lineReveal.ease },
        scale: { duration: 0.35, ease: MOTION.lineReveal.ease },
      }}
      whileHover={reduced ? undefined : { scale: 1.1 }}
      data-cursor-hover
    >
      <span className="moat-node-glass" aria-hidden />
      <span className="moat-node-ring" aria-hidden />
      <span className="moat-node-label">{label}</span>
    </motion.button>
  );
}

function MoatVizBackground({ reduced }: { reduced: boolean }) {
  return (
    <div className="moat-viz-bg" aria-hidden>
      <motion.div
        className="moat-viz-ring moat-viz-ring--outer"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="moat-viz-ring moat-viz-ring--inner"
        animate={reduced ? undefined : { rotate: -360 }}
        transition={{ duration: 95, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="moat-viz-pulse"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg className="moat-neural" viewBox="0 0 400 360" preserveAspectRatio="xMidYMid meet">
        {NEURAL_EDGES.map(([a, b], i) => {
          const na = NEURAL_NODES[a];
          const nb = NEURAL_NODES[b];
          return (
            <motion.line
              key={i}
              x1={na.cx}
              y1={na.cy}
              x2={nb.cx}
              y2={nb.cy}
              stroke="rgba(168, 85, 247, 0.12)"
              strokeWidth="0.75"
              animate={reduced ? undefined : { opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            />
          );
        })}
        {NEURAL_NODES.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="rgba(192, 132, 252, 0.45)"
            animate={reduced ? undefined : { opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + (i % 4) * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function TriFlywheel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<FlywheelId>("product");
  const [hoveredId, setHoveredId] = useState<FlywheelId | null>(null);

  const highlightId = hoveredId ?? activeId;

  return (
    <section id="flywheel" className="moat-section scroll-mt-28">
      <MoatAmbient />

      <div className="ax-section-content moat-section-inner">
        <FadeUp className="ax-header ax-header-center moat-header">
          <p className="ax-label moat-eyebrow">{homeTriFlywheel.label}</p>
          <h2 className="ax-title moat-title">{homeTriFlywheel.title}</h2>
          <p className="ax-description moat-description">{homeTriFlywheel.description}</p>
        </FadeUp>

        <div ref={ref} className="moat-layout">
          <motion.div
            className="moat-viz-wrap"
            initial={{ opacity: 0, y: 32, rotate: reduced ? 0 : -6 }}
            animate={
              inView
                ? { opacity: 1, y: 0, rotate: 0 }
                : { opacity: 0, y: 32, rotate: reduced ? 0 : -6 }
            }
            transition={{ duration: 0.75, ease: MOTION.lineReveal.ease }}
          >
            <div className="moat-viz">
              <MoatVizBackground reduced={reduced} />

              <svg
                className="moat-links"
                viewBox="0 0 400 360"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <defs>
                  <linearGradient id="moat-link-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#C084FC" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="#E879F9" stopOpacity="0.35" />
                  </linearGradient>
                  <filter id="moat-link-glow">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                {LINK_LINES.map((line) => {
                  const accent = FLYWHEEL_ACCENTS[line.id];
                  const isHot = highlightId === line.id;
                  return (
                    <g key={line.id}>
                      <motion.line
                        x1={CORE_CENTER.x}
                        y1={CORE_CENTER.y}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={isHot ? accent.glowStrong : "url(#moat-link-gradient)"}
                        strokeWidth={isHot ? 2 : 1.25}
                        strokeLinecap="round"
                        filter={isHot ? "url(#moat-link-glow)" : undefined}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          inView
                            ? { pathLength: 1, opacity: isHot ? 1 : 0.55 }
                            : { pathLength: 0, opacity: 0 }
                        }
                        transition={{
                          pathLength: { duration: 0.8, delay: 0.9, ease: MOTION.lineReveal.ease },
                          opacity: { duration: 0.35 },
                          strokeWidth: { duration: 0.3 },
                        }}
                      />
                      {!reduced && (
                        <motion.line
                          x1={CORE_CENTER.x}
                          y1={CORE_CENTER.y}
                          x2={line.x2}
                          y2={line.y2}
                          stroke={accent.stroke}
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray="4 18"
                          opacity={isHot ? 0.85 : 0.25}
                          animate={{ strokeDashoffset: [0, -44] }}
                          transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </g>
                  );
                })}
              </svg>

              <motion.div
                className="moat-orbit-system"
                animate={reduced ? undefined : { rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />

              {homeTriFlywheel.flywheels.map((fw) => (
                <FlywheelNode
                  key={fw.id}
                  id={fw.id}
                  label={fw.tabLabel}
                  active={activeId === fw.id}
                  hovered={hoveredId === fw.id}
                  inView={inView}
                  reduced={reduced}
                  layout={FLYWHEEL_LAYOUT[fw.id]}
                  onSelect={setActiveId}
                  onHover={setHoveredId}
                />
              ))}

              <motion.div
                className="moat-core"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.15, ease: MOTION.lineReveal.ease }}
              >
                <motion.span
                  className="moat-core-sphere"
                  aria-hidden
                  animate={
                    reduced
                      ? undefined
                      : { scale: [1, 1.04, 1], boxShadow: [
                          "0 0 40px rgba(168, 85, 247, 0.35), 0 0 80px rgba(124, 58, 237, 0.15)",
                          "0 0 55px rgba(168, 85, 247, 0.5), 0 0 100px rgba(124, 58, 237, 0.25)",
                          "0 0 40px rgba(168, 85, 247, 0.35), 0 0 80px rgba(124, 58, 237, 0.15)",
                        ] }
                  }
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="moat-core-ring moat-core-ring--a" aria-hidden />
                <span className="moat-core-ring moat-core-ring--b" aria-hidden />
                <span className="moat-core-label">{homeTriFlywheel.centerLabel}</span>
              </motion.div>
            </div>
          </motion.div>

          <MoatPanelWithTabs
            activeId={activeId}
            setActiveId={setActiveId}
            reduced={reduced}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}

function MoatPanelWithTabs({
  activeId,
  setActiveId,
  reduced,
  inView,
}: {
  activeId: FlywheelId;
  setActiveId: (id: FlywheelId) => void;
  reduced: boolean;
  inView: boolean;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 22 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const activeFlywheel =
    homeTriFlywheel.flywheels.find((fw) => fw.id === activeId) ??
    homeTriFlywheel.flywheels[0];

  const activeIndex = homeTriFlywheel.flywheels.findIndex((fw) => fw.id === activeId);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (reduced || !panelRef.current) return;
      const rect = panelRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * 5);
      rotateX.set(-y * 4);
    },
    [reduced, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={panelRef}
      className="moat-panel"
      style={reduced ? undefined : { transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.65, delay: 0.2, ease: MOTION.lineReveal.ease }}
    >
      <div className="moat-panel-glow" aria-hidden />

      <div className="moat-tabs" role="tablist" aria-label="Flywheel loops">
        {reduced ? null : (
          <motion.span
            className="moat-tab-indicator"
            layout={false}
            animate={{
              left: `${(activeIndex * 100) / homeTriFlywheel.flywheels.length}%`,
            }}
            style={{
              width: `${100 / homeTriFlywheel.flywheels.length}%`,
            }}
            transition={{ duration: 0.5, ease: MOTION.lineReveal.ease }}
          />
        )}
        {homeTriFlywheel.flywheels.map((fw) => (
          <button
            key={fw.id}
            type="button"
            role="tab"
            aria-selected={activeId === fw.id}
            className={`moat-tab moat-tab--${fw.id} ${activeId === fw.id ? "is-active" : ""}`}
            onClick={() => setActiveId(fw.id)}
          >
            {fw.tabLabel}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFlywheel.id}
          className="moat-detail"
          data-flywheel={activeFlywheel.id}
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: MOTION.lineReveal.ease }}
        >
          <h3 className="moat-detail-title">{activeFlywheel.title}</h3>
          <p className="moat-detail-desc">{activeFlywheel.description}</p>

          <ol className="moat-timeline">
            {activeFlywheel.steps.map((step, index) => (
              <motion.li
                key={step}
                className="moat-timeline-step"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.08 + index * 0.1,
                  ease: MOTION.lineReveal.ease,
                }}
              >
                <div className="moat-timeline-marker">
                  <span className="moat-timeline-num">{index + 1}</span>
                  {index < activeFlywheel.steps.length - 1 && (
                    <span className="moat-timeline-connector" aria-hidden />
                  )}
                </div>
                <div className="moat-timeline-row">
                  <span className="moat-step-text">{step}</span>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
