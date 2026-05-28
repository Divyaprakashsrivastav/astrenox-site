"use client";

import { motion } from "framer-motion";

const lineTransition = {
  duration: 2,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function NetworkVisual() {
  const nodes = [
    { cx: 50, cy: 30, r: 4 },
    { cx: 120, cy: 55, r: 5 },
    { cx: 180, cy: 35, r: 4 },
    { cx: 90, cy: 100, r: 6 },
    { cx: 160, cy: 95, r: 4 },
    { cx: 220, cy: 70, r: 3 },
  ];

  return (
    <svg viewBox="0 0 260 130" className="w-full h-full" aria-hidden>
      {[
        [50, 30, 120, 55],
        [120, 55, 180, 35],
        [50, 30, 90, 100],
        [120, 55, 90, 100],
        [120, 55, 160, 95],
        [180, 35, 220, 70],
        [160, 95, 220, 70],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#6FA3B8"
          strokeWidth="1"
          strokeOpacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.8 }}
        />
      ))}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="#F7F8FA"
          stroke="#6FA3B8"
          strokeWidth="1.5"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ ...lineTransition, delay: i * 0.2 }}
        />
      ))}
      <motion.circle
        cx={120}
        cy={55}
        r={18}
        fill="none"
        stroke="#6FA3B8"
        strokeWidth="1"
        strokeOpacity="0.2"
        animate={{ r: [16, 22, 16], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </svg>
  );
}

export function AutonomousVisual() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      <motion.rect
        x="20"
        y="25"
        width="70"
        height="50"
        rx="6"
        fill="#F7F8FA"
        stroke="#D9DEE5"
        strokeWidth="1"
        animate={{ y: [25, 22, 25] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect
        x="110"
        y="20"
        width="70"
        height="55"
        rx="6"
        fill="#F7F8FA"
        stroke="#6FA3B8"
        strokeWidth="1"
        strokeOpacity="0.6"
        animate={{ y: [20, 17, 20] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />
      {[35, 50, 65].map((y, i) => (
        <motion.line
          key={i}
          x1="90"
          y1={y}
          x2="110"
          y2={y - 5}
          stroke="#6FA3B8"
          strokeWidth="1"
          strokeDasharray="3 4"
          className="animate-dash"
          opacity="0.5"
        />
      ))}
      <circle cx="55" cy="50" r="3" fill="#6FA3B8" opacity="0.8" />
      <circle cx="145" cy="47" r="3" fill="#6FA3B8" />
    </svg>
  );
}

export function DroneVisual() {
  return (
    <svg viewBox="0 0 160 120" className="w-full h-full" aria-hidden>
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="80" cy="60" rx="12" ry="6" fill="#6FA3B8" opacity="0.15" />
        <line x1="80" y1="60" x2="40" y2="40" stroke="#D9DEE5" strokeWidth="1" />
        <line x1="80" y1="60" x2="120" y2="40" stroke="#D9DEE5" strokeWidth="1" />
        <line x1="80" y1="60" x2="40" y2="80" stroke="#D9DEE5" strokeWidth="1" />
        <line x1="80" y1="60" x2="120" y2="80" stroke="#D9DEE5" strokeWidth="1" />
        <circle cx="40" cy="40" r="8" fill="none" stroke="#6FA3B8" strokeWidth="1" />
        <circle cx="120" cy="40" r="8" fill="none" stroke="#6FA3B8" strokeWidth="1" />
        <circle cx="40" cy="80" r="8" fill="none" stroke="#6FA3B8" strokeWidth="1" />
        <circle cx="120" cy="80" r="8" fill="none" stroke="#6FA3B8" strokeWidth="1" />
        <rect x="72" y="54" width="16" height="10" rx="2" fill="#F7F8FA" stroke="#6FA3B8" strokeWidth="1" />
      </motion.g>
      <motion.path
        d="M 20 95 Q 80 75 140 95"
        fill="none"
        stroke="#6FA3B8"
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="4 6"
        animate={{ strokeDashoffset: [0, -20] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}

export function RoboticsVisual() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={30 + i * 55}
          y={30}
          width="40"
          height="50"
          rx="4"
          fill="#F7F8FA"
          stroke="#D9DEE5"
          strokeWidth="1"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5], y: [30, 28, 30] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
        />
      ))}
      <motion.path
        d="M 50 55 L 85 55 L 120 55"
        stroke="#6FA3B8"
        strokeWidth="1"
        fill="none"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, -16] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      {[50, 105, 160].map((x, i) => (
        <circle key={i} cx={x} cy="55" r="3" fill="#6FA3B8" />
      ))}
    </svg>
  );
}

export function AnalyticsVisual() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-full" aria-hidden>
      {[40, 65, 90, 55, 75, 50].map((h, i) => (
        <motion.rect
          key={i}
          x={25 + i * 28}
          y={100 - h}
          width="16"
          height={h}
          rx="2"
          fill="#6FA3B8"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1, opacity: [0.3, 0.7, 0.3] }}
          style={{ originY: 1 }}
          transition={{
            scaleY: { delay: i * 0.1, duration: 0.6 },
            opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 },
          }}
        />
      ))}
      <motion.path
        d="M 25 45 Q 70 20 115 40 T 185 30"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="1"
        strokeOpacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
    </svg>
  );
}

export function AerospaceVisual() {
  return (
    <svg viewBox="0 0 320 80" className="w-full h-full" aria-hidden>
      <motion.path
        d="M 20 50 L 80 35 L 160 40 L 240 30 L 300 45"
        fill="none"
        stroke="#6FA3B8"
        strokeWidth="1"
        strokeOpacity="0.4"
        animate={{ pathLength: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.g
        animate={{ x: [0, 200, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M 0 0 L 24 8 L 0 16 L 6 8 Z"
          fill="#F7F8FA"
          stroke="#6FA3B8"
          strokeWidth="1"
          transform="translate(40, 32)"
        />
      </motion.g>
      {[60, 140, 220].map((x, i) => (
        <circle key={i} cx={x} cy={42} r="2" fill="#6FA3B8" opacity="0.5" />
      ))}
      <line x1="0" y1="65" x2="320" y2="65" stroke="#D9DEE5" strokeWidth="1" />
    </svg>
  );
}

export function DashboardVisual() {
  return (
    <svg viewBox="0 0 120 80" className="w-full h-auto max-h-20" aria-hidden>
      <rect x="4" y="4" width="112" height="72" rx="6" fill="#F7F8FA" stroke="#D9DEE5" strokeWidth="1" />
      <rect x="12" y="14" width="40" height="6" rx="2" fill="#D9DEE5" opacity="0.6" />
      <rect x="12" y="28" width="96" height="40" rx="4" fill="white" stroke="#D9DEE5" strokeWidth="0.5" />
      <motion.circle
        cx="60"
        cy="48"
        r="12"
        fill="none"
        stroke="#6FA3B8"
        strokeWidth="1"
        animate={{ rotate: 360 }}
        style={{ transformOrigin: "60px 48px" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </svg>
  );
}
