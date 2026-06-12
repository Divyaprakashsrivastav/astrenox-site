"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeTriFlywheel } from "@/app/content/homepage-content";
import { MOTION } from "../motion/home-motion";

type FlywheelId = (typeof homeTriFlywheel.flywheels)[number]["id"];

const FLYWHEEL_ACCENTS: Record<
  FlywheelId,
  { stroke: string; glow: string; surface: string; pulseDuration: number }
> = {
  product: {
    stroke: "#9b4d8f",
    glow: "rgba(155, 77, 143, 0.4)",
    surface: "rgba(155, 77, 143, 0.07)",
    pulseDuration: 6.5,
  },
  operations: {
    stroke: "#6B5B95",
    glow: "rgba(107, 91, 149, 0.4)",
    surface: "rgba(107, 91, 149, 0.07)",
    pulseDuration: 7.2,
  },
  ecosystem: {
    stroke: "#B65C8A",
    glow: "rgba(182, 92, 138, 0.4)",
    surface: "rgba(182, 92, 138, 0.07)",
    pulseDuration: 7.8,
  },
};

const FLYWHEEL_LAYOUT: Record<
  FlywheelId,
  { top: string; left: string; linkX: number; linkY: number; revealDelay: number }
> = {
  product: { top: "2%", left: "50%", linkX: 200, linkY: 58, revealDelay: 0.35 },
  operations: { top: "68%", left: "10%", linkX: 72, linkY: 292, revealDelay: 0.55 },
  ecosystem: { top: "68%", left: "90%", linkX: 328, linkY: 292, revealDelay: 0.75 },
};

const LINK_LINES = [
  { x2: 200, y2: 58, delay: 0.95 },
  { x2: 72, y2: 292, delay: 1.05 },
  { x2: 328, y2: 292, delay: 1.15 },
] as const;

const CORE_CENTER = { x: 200, y: 178 };

interface FlywheelLoopProps {
  id: FlywheelId;
  label: string;
  active: boolean;
  inView: boolean;
  reduced: boolean;
  onSelect: (id: FlywheelId) => void;
}

function FlywheelLoop({
  id,
  label,
  active,
  inView,
  reduced,
  onSelect,
}: FlywheelLoopProps) {
  const accent = FLYWHEEL_ACCENTS[id];
  const layout = FLYWHEEL_LAYOUT[id];

  return (
    <motion.button
      type="button"
      role="tab"
      aria-selected={active}
      className={`moat-fw moat-fw--${id} ${active ? "is-active" : ""}`}
      style={{ top: layout.top, left: layout.left }}
      onClick={() => onSelect(id)}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.82 }}
      transition={{
        duration: 0.55,
        delay: layout.revealDelay,
        ease: MOTION.lineReveal.ease,
      }}
      whileHover={reduced ? undefined : { scale: 1.03 }}
      data-cursor-hover
    >
      <svg viewBox="0 0 100 100" className="moat-fw-svg" aria-hidden>
        <circle
          cx="50"
          cy="50"
          r="44"
          fill="rgba(255, 255, 255, 0.78)"
          stroke="rgba(255, 255, 255, 0.9)"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill={accent.surface}
          stroke="rgba(0, 0, 0, 0.04)"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="rgba(0, 0, 0, 0.06)"
          strokeWidth="1.25"
        />

        <motion.g
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "50px 50px" }}
        >
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="none"
            stroke={accent.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="48 190"
            opacity={active ? 0.85 : 0.45}
          />
        </motion.g>

        {!reduced && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{
              duration: accent.pulseDuration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "50px 50px" }}
          >
            <motion.circle
              cx="50"
              cy="12"
              r="3"
              fill={accent.stroke}
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle cx="50" cy="12" r="6" fill="none" stroke={accent.stroke} strokeWidth="0.5" opacity="0.35" />
          </motion.g>
        )}

        <text
          x="50"
          y="54"
          textAnchor="middle"
          className="moat-fw-label"
          fill={active ? accent.stroke : "#667085"}
        >
          {label}
        </text>
      </svg>
    </motion.button>
  );
}

export default function TriFlywheel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reduced = useReducedMotion();
  const [activeId, setActiveId] = useState<FlywheelId>("product");

  const activeFlywheel =
    homeTriFlywheel.flywheels.find((fw) => fw.id === activeId) ??
    homeTriFlywheel.flywheels[0];

  return (
    <DesignSection id="flywheel" className="moat-section" ambient={false}>
      <DesignHeader
        label={homeTriFlywheel.label}
        title={homeTriFlywheel.title}
        description={homeTriFlywheel.description}
        align="center"
      />

      <div ref={ref} className="moat-layout">
        <div className="moat-viz">
          <svg
            className="moat-links"
            viewBox="0 0 400 360"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            {LINK_LINES.map((line, i) => (
              <motion.line
                key={i}
                x1={CORE_CENTER.x}
                y1={CORE_CENTER.y}
                x2={line.x2}
                y2={line.y2}
                stroke="url(#moat-link-gradient)"
                strokeWidth="1.25"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={
                  inView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0 }
                }
                transition={{
                  pathLength: { duration: 0.7, delay: line.delay, ease: MOTION.lineReveal.ease },
                  opacity: { duration: 0.4, delay: line.delay },
                }}
              />
            ))}
            <defs>
              <linearGradient id="moat-link-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#9b4d8f" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#9b4d8f" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#B65C8A" stopOpacity="0.35" />
              </linearGradient>
            </defs>
          </svg>

          <motion.div
            className="moat-core"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.5, ease: MOTION.lineReveal.ease }}
          >
            <span className="moat-core-ring" aria-hidden />
            <span className="moat-core-label">{homeTriFlywheel.centerLabel}</span>
          </motion.div>

          {homeTriFlywheel.flywheels.map((fw) => (
            <FlywheelLoop
              key={fw.id}
              id={fw.id}
              label={fw.tabLabel}
              active={activeId === fw.id}
              inView={inView}
              reduced={reduced}
              onSelect={setActiveId}
            />
          ))}
        </div>

        <div className="moat-panel">
          <div className="moat-tabs" role="tablist" aria-label="Flywheel loops">
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
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: MOTION.lineReveal.ease }}
            >
              <h3 className="moat-detail-title">{activeFlywheel.title}</h3>
              <p className="moat-detail-desc">{activeFlywheel.description}</p>

              <ol className="moat-steps">
                {activeFlywheel.steps.map((step, index) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: 0.05 + index * 0.06,
                      ease: MOTION.lineReveal.ease,
                    }}
                  >
                    <span className="moat-step-index">{index + 1}</span>
                    <span className="moat-step-text">{step}</span>
                    {index < activeFlywheel.steps.length - 1 && (
                      <span className="moat-step-connector" aria-hidden />
                    )}
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </DesignSection>
  );
}
