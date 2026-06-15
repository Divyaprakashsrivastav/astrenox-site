"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function MissionFlowPulse() {
  const reduced = useReducedMotion();

  return (
    <div className="mission-flow" aria-hidden>
      <svg
        className="mission-flow-svg mission-flow-svg--desktop"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="mission-flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
            <stop offset="50%" stopColor="#c084fc" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.15" />
          </linearGradient>
          <filter id="mission-flow-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line
          x1="120"
          y1="16"
          x2="1080"
          y2="16"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.5"
        />
        <line
          x1="120"
          y1="16"
          x2="1080"
          y2="16"
          stroke="url(#mission-flow-grad)"
          strokeWidth="1.5"
          opacity="0.55"
        />
        {!reduced && (
          <>
            <motion.circle
              r="5"
              cy="16"
              fill="#c084fc"
              filter="url(#mission-flow-glow)"
              animate={{ cx: [160, 600, 1040, 160] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              r="3"
              cy="16"
              fill="#60a5fa"
              opacity={0.85}
              animate={{ cx: [160, 600, 1040, 160] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.12,
              }}
            />
          </>
        )}
      </svg>

      <svg
        className="mission-flow-svg mission-flow-svg--mobile"
        viewBox="0 0 32 800"
        preserveAspectRatio="none"
      >
        <line x1="16" y1="40" x2="16" y2="760" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        {!reduced && (
          <motion.circle
            r="4"
            cx="16"
            fill="#a855f7"
            animate={{ cy: [80, 400, 720, 80] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </svg>
    </div>
  );
}
