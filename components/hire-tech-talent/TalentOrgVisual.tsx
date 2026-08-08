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
import { useReducedMotion } from "../features/useReducedMotion";

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

const PATHS = [
  "M80 50 L190 110 L290 50",
  "M190 110 L60 160 L150 230",
  "M190 110 L300 150 L250 270",
  "M150 230 L250 270 L90 300",
] as const;

function TalentOrgVisual() {
  const reduced = useReducedMotion();

  return (
    <div className="htt-visual" aria-hidden>
      <motion.div
        className="htt-visual-glow"
        animate={
          reduced
            ? undefined
            : { opacity: [0.55, 0.95, 0.55], scale: [0.96, 1.06, 0.96] }
        }
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orbit rings around the skill-match hub */}
      <div className="htt-visual-orbits">
        {[0, 1, 2].map((ring) => (
          <motion.span
            key={ring}
            className={`htt-orbit htt-orbit--${ring + 1}`}
            animate={reduced ? undefined : { rotate: ring % 2 ? -360 : 360 }}
            transition={{
              duration: 28 + ring * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="htt-orbit-dot" />
          </motion.span>
        ))}
      </div>

      <svg className="htt-visual-lines" viewBox="0 0 400 360" fill="none">
        {PATHS.map((d, i) => (
          <g key={d}>
            <motion.path
              d={d}
              stroke={
                i % 2
                  ? "rgba(79,140,255,0.32)"
                  : "rgba(139,92,246,0.34)"
              }
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.35,
                delay: 0.28 + i * 0.12,
                ease: EASE_PREMIUM,
              }}
            />
            {!reduced ? (
              <motion.circle
                r="2.8"
                fill="rgba(196,181,253,0.95)"
                filter="url(#htt-pulse-glow)"
              >
                <animateMotion
                  dur={`${3.8 + i * 0.55}s`}
                  repeatCount="indefinite"
                  path={d}
                />
              </motion.circle>
            ) : null}
          </g>
        ))}

        <defs>
          <filter id="htt-pulse-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft radar sweep */}
        {!reduced ? (
          <motion.circle
            cx="190"
            cy="150"
            r="70"
            fill="none"
            stroke="rgba(167,139,250,0.22)"
            strokeWidth="1"
            initial={{ scale: 0.55, opacity: 0.55 }}
            animate={{ scale: [0.55, 1.25, 0.55], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeOut" }}
            style={{ transformOrigin: "190px 150px" }}
          />
        ) : null}
      </svg>

      {/* Hub pulse at Skill Match */}
      <motion.span
        className="htt-hub-pulse"
        animate={
          reduced
            ? undefined
            : { scale: [1, 1.35, 1], opacity: [0.35, 0.08, 0.35] }
        }
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {ROLES.map((role, index) => {
        const Icon = role.icon;
        return (
          <motion.div
            key={role.label}
            className="htt-role-card mvp-glass"
            style={{ left: role.x, top: role.y }}
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={
              reduced
                ? { opacity: 1, y: 0, scale: 1 }
                : {
                    opacity: 1,
                    y: [0, index % 2 ? -6 : -4, 0],
                    scale: 1,
                  }
            }
            transition={
              reduced
                ? {
                    duration: 0.5,
                    delay: 0.2 + role.delay,
                    ease: EASE_PREMIUM,
                  }
                : {
                    opacity: {
                      duration: 0.55,
                      delay: 0.22 + role.delay,
                      ease: EASE_PREMIUM,
                    },
                    scale: {
                      duration: 0.55,
                      delay: 0.22 + role.delay,
                      ease: EASE_PREMIUM,
                    },
                    y: {
                      duration: 4.2 + (index % 3) * 0.55,
                      delay: 0.9 + role.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
            whileHover={reduced ? undefined : { scale: 1.06, y: -2 }}
          >
            <motion.span
              className="htt-role-icon"
              animate={
                reduced
                  ? undefined
                  : { boxShadow: ["0 0 0 rgba(139,92,246,0)", "0 0 14px rgba(139,92,246,0.35)", "0 0 0 rgba(139,92,246,0)"] }
              }
              transition={{
                duration: 3.2,
                delay: index * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon size={14} />
            </motion.span>
            <span>{role.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default memo(TalentOrgVisual);
