"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback, useRef, type MouseEvent } from "react";
import { productsPageHero } from "@/app/content/products-page-content";
import { useReducedMotion } from "../../features/useReducedMotion";

const SATELLITES = [
  { id: "solvoris", label: "Solvoris", angle: -90 },
  { id: "astren", label: "Astren", angle: 0 },
  { id: "akiren", label: "Akiren", angle: 90 },
  { id: "orzora", label: "Orzora", angle: 180 },
] as const;

const CX = 200;
const CY = 200;
const ORBIT_R = 148;
const ORBIT_RADIUS_PCT = 37;

function polarToXY(angleDeg: number, radius: number, cx: number, cy: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + Math.cos(rad) * radius,
    y: cy + Math.sin(rad) * radius,
  };
}

function polarToPercent(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: 50 + Math.cos(rad) * radiusPct,
    top: 50 + Math.sin(rad) * radiusPct,
  };
}

export default function ProductsPageHeroVisual() {
  const reduced = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 50, damping: 20 });
  const springY = useSpring(my, { stiffness: 50, damping: 20 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const handleMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduced || !shellRef.current) return;
      const rect = shellRef.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width - 0.5);
      my.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [reduced, mx, my],
  );

  const handleLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <div
      ref={shellRef}
      className="pp-hero-platform"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-hidden
    >
      <div className="pp-hero-platform-glow" />
      <motion.div
        className="pp-hero-platform-stage"
        style={reduced ? undefined : { x: parallaxX, y: parallaxY }}
      >
        <svg className="pp-hero-platform-svg" viewBox="0 0 400 400" role="presentation">
          <defs>
            <linearGradient id="pp-pipe-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(168,85,247,0)" />
              <stop offset="50%" stopColor="rgba(196,181,253,0.85)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </linearGradient>
          </defs>

          {SATELLITES.map((sat, i) => {
            const end = polarToXY(sat.angle, ORBIT_R, CX, CY);
            return (
              <g key={sat.id}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={end.x}
                  y2={end.y}
                  className="pp-hero-pipe"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
                <circle r="2.5" className="pp-hero-particle" style={{ animationDelay: `${i * 0.4}s` }}>
                  <animateMotion
                    dur={`${2.8 + i * 0.3}s`}
                    repeatCount="indefinite"
                    path={`M ${CX} ${CY} L ${end.x} ${end.y}`}
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        <motion.div
          className="pp-hero-hub"
          animate={reduced ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="pp-hero-hub-ring" />
          <span className="pp-hero-hub-core">
            <span className="pp-hero-hub-label">{productsPageHero.hubLabel}</span>
          </span>
        </motion.div>

        {SATELLITES.map((sat, i) => {
          const pos = polarToPercent(sat.angle, ORBIT_RADIUS_PCT);
          return (
            <motion.div
              key={sat.id}
              className="pp-hero-satellite"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
              animate={
                reduced
                  ? {}
                  : {
                      y: [0, -4 - (i % 3), 0],
                    }
              }
              transition={{
                duration: 4.5 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
              whileHover={reduced ? undefined : { scale: 1.06, rotate: 2 }}
            >
              <span className="pp-hero-satellite-glass">
                <span className="pp-hero-satellite-dot" />
                <span className="pp-hero-satellite-name">{sat.label}</span>
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
