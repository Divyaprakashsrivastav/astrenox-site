"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  UserCircle,
  Code2,
  Server,
  Brain,
  Wrench,
  Network,
  Users,
  Briefcase,
} from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";

const ROLES = [
  { label: "Tech Lead", icon: UserCircle, x: "12%", y: "8%", delay: 0 },
  { label: "Frontend", icon: Code2, x: "58%", y: "6%", delay: 0.12 },
  { label: "Backend", icon: Server, x: "72%", y: "38%", delay: 0.24 },
  { label: "ML Engineer", icon: Brain, x: "8%", y: "42%", delay: 0.36 },
  { label: "DevOps", icon: Wrench, x: "38%", y: "58%", delay: 0.48 },
  { label: "CXO Advisory", icon: Briefcase, x: "62%", y: "72%", delay: 0.6 },
  { label: "POD Team", icon: Users, x: "18%", y: "78%", delay: 0.72 },
  { label: "Skill Match", icon: Network, x: "48%", y: "28%", delay: 0.84 },
] as const;

function TalentOrgVisual() {
  return (
    <div className="htt-visual" aria-hidden>
      <div className="htt-visual-glow" />
      <svg className="htt-visual-lines" viewBox="0 0 400 360" fill="none">
        <motion.path
          d="M80 50 L190 110 L290 50"
          stroke="rgba(139,92,246,0.35)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.3, ease: EASE_PREMIUM }}
        />
        <motion.path
          d="M190 110 L60 160 L150 230"
          stroke="rgba(139,92,246,0.28)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.45, ease: EASE_PREMIUM }}
        />
        <motion.path
          d="M190 110 L300 150 L250 270"
          stroke="rgba(79,140,255,0.3)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.55, ease: EASE_PREMIUM }}
        />
        <motion.path
          d="M150 230 L250 270 L90 300"
          stroke="rgba(139,92,246,0.22)"
          strokeWidth="1.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.7, ease: EASE_PREMIUM }}
        />
      </svg>

      {ROLES.map((role) => {
        const Icon = role.icon;
        return (
          <motion.div
            key={role.label}
            className="htt-role-card mvp-glass"
            style={{ left: role.x, top: role.y }}
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.25 + role.delay,
              ease: EASE_PREMIUM,
            }}
          >
            <span className="htt-role-icon">
              <Icon size={14} />
            </span>
            <span>{role.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default memo(TalentOrgVisual);
