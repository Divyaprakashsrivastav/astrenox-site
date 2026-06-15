"use client";

/**
 * Neural Spine
 *
 * A fixed right-side SVG that visualises the user's journey through the
 * Astrenox homepage as a glowing neural network.
 *
 * - Spine path: multi-segment S-curve connecting 9 section nodes
 * - Progressive fill: stroke-dashoffset driven by scroll progress
 * - Traveling pulse: bright dot that rides the leading edge
 * - Nodes: activate (glow) as each section enters the viewport
 * - Branches: faint dashed lines extend left from key nodes
 * - Click a node to smooth-scroll to that section
 */

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./features/useReducedMotion";

// ─── Geometry ────────────────────────────────────────────
// ViewBox: 0 0 48 1000
// The SVG is stretched (preserveAspectRatio="none") to fill a
// 48px × 100vh container, so node y-positions map linearly to
// viewport fractions. CX is the horizontal spine centre.

const W = 48;
const CX = 24;

// y positions in the 0–1000 viewBox (≈ viewport %)
const NODE_YS = [42, 152, 272, 392, 512, 632, 752, 862, 960] as const;

// Build a gentle S-curve path between consecutive nodes.
// Control points alternate left/right so the spine weaves organically.
function buildSpinePath(): string {
  const parts: string[] = [`M ${CX} ${NODE_YS[0]}`];
  for (let i = 0; i < NODE_YS.length - 1; i++) {
    const y1 = NODE_YS[i];
    const y2 = NODE_YS[i + 1];
    const mid = (y1 + y2) / 2;
    const b = i % 2 === 0 ? -10 : 10; // alternate bend direction
    parts.push(
      `C ${CX + b} ${mid - 6}, ${CX - b} ${mid + 6}, ${CX} ${y2}`
    );
  }
  return parts.join(" ");
}

const SPINE_D = buildSpinePath();

// ─── Section nodes ────────────────────────────────────────
// `sectionId` must match the id="" on the corresponding section.
// `scrollAt`  is the normalised scroll progress (0–1) at which
//              this node should activate — calibrated to the page order.

const NODES = [
  { sectionId: "hero",             label: "Intelligence Core",  scrollAt: 0.000 },
  { sectionId: "capabilities",     label: "Enterprise AI",      scrollAt: 0.100 },
  { sectionId: "methodology",      label: "Methodology",        scrollAt: 0.215 },
  { sectionId: "flywheel",         label: "Defensibility",      scrollAt: 0.335 },
  { sectionId: "control-plane",    label: "Control Plane",      scrollAt: 0.455 },
  { sectionId: "operating-system", label: "Operating System",   scrollAt: 0.570 },
  { sectionId: "technology",       label: "Tech Ecosystem",     scrollAt: 0.685 },
  { sectionId: "projects",         label: "Deployments",        scrollAt: 0.800 },
  { sectionId: "metrics",          label: "Astrenox Core",      scrollAt: 0.920 },
] as const;

// Nodes from which faint branch lines extend left (network feel)
const BRANCH_NODES = [1, 3, 5, 7] as const;

// ─── Helpers ─────────────────────────────────────────────

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ─── Component ───────────────────────────────────────────

export default function NeuralSpine() {
  const reduced = useReducedMotion();
  const spinePathRef = useRef<SVGPathElement>(null);
  const [pathLen, setPathLen] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const { scrollYProgress } = useScroll();
  // Spring-smooth the raw scroll progress so fill and nodes ease in/out
  const smoothed = useSpring(scrollYProgress, { stiffness: 78, damping: 24 });

  // Measure the path length once the SVG is in the DOM
  useEffect(() => {
    if (spinePathRef.current) {
      const len = Math.ceil(spinePathRef.current.getTotalLength());
      setPathLen(len);
    }
  }, []);

  // Activate nodes as scroll progresses
  useMotionValueEvent(smoothed, "change", (v) => {
    let idx = 0;
    for (let i = NODES.length - 1; i >= 0; i--) {
      if (v >= NODES[i].scrollAt - 0.005) {
        idx = i;
        break;
      }
    }
    setActiveIdx(idx);
  });

  // ── Animation values ──────────────────────────────────
  // Fallback to a large number before pathLen is measured so
  // the hooks are always called with valid ranges.
  const safeLen = pathLen || 900;

  // Progressive fill: offset goes from safeLen → 0 as scroll goes 0 → 1
  const fillOffset = useTransform(smoothed, [0, 1], [safeLen, 0]);

  // Traveling pulse dot: a 12px dash riding the fill frontier
  const pulseOffset = useTransform(
    smoothed,
    [0, 1],
    [safeLen - 12, -12]
  );
  // Apply a spring to the pulse for a satisfying lag
  const springPulse = useSpring(pulseOffset, { stiffness: 62, damping: 20 });

  // ── Reduce-motion fallback ─────────────────────────────
  if (reduced) return null;

  return (
    <div className="neural-spine" aria-label="Page journey navigator">
      <svg
        viewBox={`0 0 ${W} 1000`}
        className="neural-spine-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        overflow="visible"
        aria-hidden
      >
        <defs>
          {/* Glow for the fill line */}
          <filter id="ns-fill-glow" x="-60%" y="-5%" width="220%" height="110%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow for the moving pulse dot */}
          <filter id="ns-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Node glow */}
          <filter id="ns-node-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ring-pulse glow */}
          <filter id="ns-ring-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Branch lines — faint dashed horizontals ── */}
        {BRANCH_NODES.map((ni) => (
          <line
            key={`branch-${ni}`}
            x1={CX}
            y1={NODE_YS[ni]}
            x2={-220}
            y2={NODE_YS[ni]}
            stroke={ni <= activeIdx ? "rgba(111,44,145,0.13)" : "rgba(111,44,145,0.05)"}
            strokeWidth="0.7"
            strokeDasharray="4 9"
          />
        ))}

        {/* ── Ghost (dim full-path always visible) ── */}
        <path
          d={SPINE_D}
          fill="none"
          stroke="rgba(111,44,145,0.09)"
          strokeWidth="1.2"
        />

        {/* ── Progressive fill ── */}
        {pathLen > 0 && (
          <motion.path
            d={SPINE_D}
            fill="none"
            stroke="rgba(111,44,145,0.55)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray={pathLen}
            style={{ strokeDashoffset: fillOffset }}
            filter="url(#ns-fill-glow)"
          />
        )}

        {/* ── Traveling pulse dot ── */}
        {pathLen > 0 && (
          <motion.path
            d={SPINE_D}
            fill="none"
            stroke="#9b5de5"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`12 ${pathLen}`}
            style={{ strokeDashoffset: springPulse }}
            filter="url(#ns-pulse-glow)"
          />
        )}

        {/* ── Nodes ── */}
        {NODES.map((node, i) => {
          const y = NODE_YS[i];
          const isActive = i <= activeIdx;
          const isCurrent = i === activeIdx;
          const isHovered = hovered === i;

          return (
            <g
              key={node.sectionId}
              style={{ cursor: "pointer", pointerEvents: "all" }}
              onClick={() => scrollToSection(node.sectionId)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              role="button"
              aria-label={`Navigate to ${node.label}`}
            >
              {/* Expanding pulse ring on currently-active node */}
              {isCurrent && (
                <motion.circle
                  cx={CX}
                  cy={y}
                  r={9}
                  fill="none"
                  stroke="rgba(111,44,145,0.25)"
                  strokeWidth="1"
                  filter="url(#ns-ring-glow)"
                  animate={{ r: [8, 15, 8], opacity: [0.3, 0.72, 0.3] }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              {/* Secondary ring for all active nodes */}
              {isActive && (
                <circle
                  cx={CX}
                  cy={y}
                  r={7}
                  fill="none"
                  stroke="rgba(111,44,145,0.14)"
                  strokeWidth="0.75"
                />
              )}

              {/* Core dot */}
              <circle
                cx={CX}
                cy={y}
                r={isActive ? 4.5 : isHovered ? 4 : 2.8}
                fill={
                  isActive
                    ? "#6f2c91"
                    : isHovered
                    ? "rgba(111,44,145,0.6)"
                    : "rgba(190,170,200,0.35)"
                }
                stroke={isActive ? "none" : "rgba(111,44,145,0.22)"}
                strokeWidth="1"
                filter={isActive ? "url(#ns-node-glow)" : undefined}
              />

              {/* Label chip — slides in from right on hover */}
              {isHovered && (
                <g>
                  {/* Pill background */}
                  <rect
                    x={CX - 76}
                    y={y - 9}
                    width={66}
                    height={18}
                    rx={4}
                    fill="rgba(255,255,255,0.92)"
                    stroke="rgba(111,44,145,0.18)"
                    strokeWidth="0.6"
                  />
                  <text
                    x={CX - 43}
                    y={y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="7.2"
                    fontWeight="600"
                    letterSpacing="0.06em"
                    fontFamily="var(--font-body, system-ui)"
                    fill={isActive ? "#6f2c91" : "rgba(111,44,145,0.6)"}
                  >
                    {node.label}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Invisible path for measuring — same d, opacity 0 */}
        <path
          ref={spinePathRef}
          d={SPINE_D}
          fill="none"
          stroke="none"
          opacity={0}
          aria-hidden
        />
      </svg>
    </div>
  );
}
