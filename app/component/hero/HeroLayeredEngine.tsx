"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { MOTION } from "../motion/home-motion";

const CARDS = [
  { id: "models", label: "AI Models", x: 10, y: 12, depth: 0.55, drift: 7.2 },
  { id: "vision", label: "Vision", x: 62, y: 8, depth: 0.85, drift: 6.4 },
  { id: "drones", label: "Drones", x: 80, y: 34, depth: 0.7, drift: 7.8 },
  { id: "agents", label: "Agents", x: 6, y: 46, depth: 0.45, drift: 6.8 },
  { id: "enterprise", label: "Enterprise", x: 18, y: 74, depth: 0.6, drift: 7.5 },
  { id: "cloud", label: "Cloud", x: 76, y: 70, depth: 0.8, drift: 6.2 },
  { id: "automation", label: "Automation", x: 46, y: 80, depth: 0.5, drift: 8 },
] as const;

const ROUTES: [string, string][] = [
  ["models", "agents"],
  ["agents", "cloud"],
  ["cloud", "automation"],
  ["automation", "enterprise"],
  ["enterprise", "vision"],
  ["vision", "drones"],
  ["drones", "models"],
];

function cardCenter(id: string) {
  const c = CARDS.find((card) => card.id === id)!;
  return { x: c.x + 9, y: c.y + 4 };
}

function routePath(from: string, to: string) {
  const a = cardCenter(from);
  const b = cardCenter(to);
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const bend = 6;
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
}

function EngineCard({
  card,
  mx,
  my,
  reduced,
}: {
  card: (typeof CARDS)[number];
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  reduced: boolean;
}) {
  const px = useSpring(
    useTransform(mx, [-0.5, 0.5], [-MOTION.parallax.max * card.depth, MOTION.parallax.max * card.depth]),
    { stiffness: 90, damping: 22 },
  );
  const py = useSpring(
    useTransform(my, [-0.5, 0.5], [-MOTION.parallax.max * card.depth, MOTION.parallax.max * card.depth]),
    { stiffness: 90, damping: 22 },
  );

  return (
    <motion.div
      className="hero-engine-card-wrap"
      style={{ left: `${card.x}%`, top: `${card.y}%`, x: px, y: py }}
    >
      <motion.div
        className="hero-engine-card"
        animate={
          reduced
            ? undefined
            : {
                y: [
                  -MOTION.cardDrift.distance,
                  MOTION.cardDrift.distance,
                  -MOTION.cardDrift.distance,
                ],
              }
        }
        transition={
          reduced
            ? undefined
            : { duration: card.drift, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <span>{card.label}</span>
      </motion.div>
    </motion.div>
  );
}

export default function HeroLayeredEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [routeIdx, setRouteIdx] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const meshX = useSpring(useTransform(mx, [-0.5, 0.5], [-MOTION.parallax.max, MOTION.parallax.max]), {
    stiffness: 80,
    damping: 24,
  });
  const meshY = useSpring(useTransform(my, [-0.5, 0.5], [-MOTION.parallax.max, MOTION.parallax.max]), {
    stiffness: 80,
    damping: 24,
  });

  const flowX = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 24 });
  const flowY = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 24 });

  const activeRoute = ROUTES[routeIdx % ROUTES.length];
  const activePath = useMemo(
    () => routePath(activeRoute[0], activeRoute[1]),
    [activeRoute],
  );

  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setRouteIdx((i) => i + 1), 3200);
    return () => clearInterval(timer);
  }, [reduced]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div
      ref={ref}
      className="hero-engine"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      aria-label="Living intelligence engine"
    >
      <div className="hero-engine-frame">
        {/* Layer 1 — gradient mesh */}
        <motion.div className="hero-engine-mesh" style={{ x: meshX, y: meshY }} aria-hidden>
          <div className="hero-engine-blob hero-engine-blob--1" />
          <div className="hero-engine-blob hero-engine-blob--2" />
          <div className="hero-engine-blob hero-engine-blob--3" />
        </motion.div>

        {/* Layer 3 — intelligence flow */}
        <motion.svg
          className="hero-engine-flows"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ x: flowX, y: flowY }}
          aria-hidden
        >
          <defs>
            <linearGradient id="heroFlowGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(177,70,131,0.05)" />
              <stop offset="50%" stopColor="rgba(210,124,168,0.75)" />
              <stop offset="100%" stopColor="rgba(177,70,131,0.05)" />
            </linearGradient>
          </defs>

          {ROUTES.map(([from, to], i) => {
            const d = routePath(from, to);
            const isActive = i === routeIdx % ROUTES.length;
            return (
              <path
                key={`${from}-${to}`}
                d={d}
                className={`hero-engine-route${isActive ? " is-active" : ""}`}
              />
            );
          })}

          {!reduced && (
            <>
              <path id="hero-active-route" d={activePath} fill="none" stroke="none" />
              <circle r="0.55" className="hero-engine-packet">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href="#hero-active-route" />
                </animateMotion>
              </circle>
            </>
          )}
        </motion.svg>

        <div className="hero-engine-core" aria-hidden>
          <span>ASTRENOX</span>
        </div>

        {/* Layer 2 — floating glass cards */}
        {CARDS.map((card) => (
          <EngineCard key={card.id} card={card} mx={mx} my={my} reduced={reduced} />
        ))}
      </div>
    </div>
  );
}
