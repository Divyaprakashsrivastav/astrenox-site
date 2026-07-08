"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Plug,
  BarChart3,
  Rocket,
  Database,
  Calendar,
} from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

const CARDS = [
  { label: "Task Board", icon: LayoutGrid, className: "mvp-dashboard-card--task", delay: 0 },
  { label: "API", icon: Plug, className: "mvp-dashboard-card--api", delay: 0.15 },
  { label: "Analytics", icon: BarChart3, className: "mvp-dashboard-card--analytics", delay: 0.3 },
  { label: "Deployment", icon: Rocket, className: "mvp-dashboard-card--deploy", delay: 0.45 },
  { label: "Database", icon: Database, className: "mvp-dashboard-card--db", delay: 0.6 },
  { label: "Timeline", icon: Calendar, className: "mvp-dashboard-card--timeline", delay: 0.75 },
] as const;

const CONNECTIONS = [
  "M 120 80 L 280 120",
  "M 280 120 L 340 200",
  "M 120 80 L 80 220",
  "M 80 220 L 200 300",
  "M 340 200 L 300 340",
  "M 200 300 L 300 340",
  "M 280 120 L 80 220",
];

function MVPStudioDashboard() {
  return (
    <div className="mvp-dashboard" aria-hidden>
      <svg className="mvp-dashboard-svg" viewBox="0 0 400 380" fill="none">
        <defs>
          <linearGradient id="mvp-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(79, 140, 255, 0.4)" />
          </linearGradient>
        </defs>
        {CONNECTIONS.map((d, i) => (
          <motion.path
            key={d}
            d={d}
            className="mvp-dashboard-line"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: EASE_PREMIUM }}
          />
        ))}
      </svg>

      {CARDS.map(({ label, icon: Icon, className, delay }) => (
        <motion.div
          key={label}
          className={`mvp-dashboard-card ${className}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{
            opacity: 1,
            y: [0, -6, 0],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 + delay },
            y: {
              duration: 4 + delay,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            },
          }}
        >
          <Icon size={14} aria-hidden />
          {label}
        </motion.div>
      ))}
    </div>
  );
}

export default memo(MVPStudioDashboard);
