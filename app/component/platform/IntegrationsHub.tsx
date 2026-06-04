"use client";

import { motion, useInView } from "framer-motion";
import { useId, useRef } from "react";
import PlatformSection from "./PlatformSection";
import { useReducedMotion } from "../features/useReducedMotion";
import { safeSvgId } from "../features/visuals/motion";
import { intelligencePlatform } from "@/app/content/platform-content";

const CX = 250;
const CY = 250;
const R = 168;

const CONNECTORS = intelligencePlatform.integrations.connectors;

function connectorPosition(index: number, total: number) {
  const angle = -90 + (360 / total) * index;
  const rad = (angle * Math.PI) / 180;
  return {
    x: CX + Math.cos(rad) * R,
    y: CY + Math.sin(rad) * R,
    angle,
  };
}

export default function IntegrationsHub() {
  const s = intelligencePlatform.integrations;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const uid = safeSvgId(useId());

  return (
    <PlatformSection id={s.id} label={s.label} title={s.title} description={s.description}>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="platform-integrations-svg-wrap"
        >
          <svg viewBox="0 0 500 500" className="platform-integrations-svg" aria-hidden>
            <defs>
              <radialGradient id={`${uid}-hub`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#7D2E68" stopOpacity="0" />
              </radialGradient>
              <linearGradient id={`${uid}-flow`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7D2E68" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#7D2E68" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#C97B84" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            <circle cx={CX} cy={CY} r={R + 28} fill={`url(#${uid}-hub)`} />
            {[R - 24, R, R + 24].map((r) => (
              <circle
                key={r}
                cx={CX}
                cy={CY}
                r={r}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="0.75"
                strokeDasharray="5 10"
                opacity={0.45}
              />
            ))}

            {CONNECTORS.map((c, i) => {
              const pos = connectorPosition(i, CONNECTORS.length);
              return (
                <g key={c.id}>
                  <motion.path
                    d={`M ${CX} ${CY} L ${pos.x} ${pos.y}`}
                    fill="none"
                    stroke={`url(#${uid}-flow)`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0.3 }}
                    animate={
                      inView
                        ? {
                            pathLength: 1,
                            opacity: [0.35, 0.85, 0.35],
                          }
                        : {}
                    }
                    transition={{
                      pathLength: { duration: 1, delay: i * 0.08 },
                      opacity: reduced
                        ? { duration: 0 }
                        : { duration: 2.2, delay: i * 0.15, repeat: Infinity },
                    }}
                  />
                  {!reduced && inView ? (
                    <motion.circle
                      r="3"
                      fill={c.accent}
                      animate={{
                        cx: [CX, pos.x],
                        cy: [CY, pos.y],
                      }}
                      transition={{
                        duration: 2.4,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatDelay: 0.6,
                        ease: "easeInOut",
                      }}
                    />
                  ) : null}
                </g>
              );
            })}

            <circle cx={CX} cy={CY} r={52} fill="#fff" stroke="#7D2E68" strokeWidth="1.5" />
            <circle cx={CX} cy={CY} r={44} fill="#7D2E68" fillOpacity="0.08" />
            <text
              x={CX}
              y={CY - 6}
              textAnchor="middle"
              fontSize="9"
              fontWeight="600"
              fill="#7D2E68"
              letterSpacing="0.08em"
            >
              ASTRENOX
            </text>
            <text x={CX} y={CY + 10} textAnchor="middle" fontSize="7" fill="#667085">
              Intelligence
            </text>
          </svg>
        </motion.div>

        <ul className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {CONNECTORS.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="platform-integration-card premium-card p-4 flex items-center gap-3"
            >
              <span className="platform-integration-dot shrink-0" style={{ background: c.accent }} />
              <span className="text-sm font-semibold text-text">{c.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center text-sm text-muted max-w-xl mx-auto">
        Data flows into <strong className="text-text font-medium">{s.hubLabel}</strong>—not
        another vendor silo. Your teams search, graph, and automate from one Astrenox control plane.
      </p>
    </PlatformSection>
  );
}
