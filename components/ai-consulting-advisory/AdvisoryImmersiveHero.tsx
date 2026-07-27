"use client";

import { memo, useCallback, useEffect, useMemo, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServicePageContent } from "@/app/content/service-pages/types";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import "../mvp-studio/mvp-studio.css";
import "../service-page/service-page-extra.css";

type EcosystemNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
  fade?: boolean;
};

const CORE = { x: 74, y: 46 };

const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: "strategy", label: "Strategy", x: 62, y: 26, driftX: 6, driftY: -8, duration: 11, delay: 0 },
  { id: "governance", label: "Governance", x: 88, y: 22, driftX: -5, driftY: 7, duration: 13, delay: 0.4 },
  { id: "architecture", label: "Architecture", x: 92, y: 40, driftX: -7, driftY: 5, duration: 12, delay: 0.8 },
  { id: "security", label: "Security", x: 90, y: 58, driftX: -4, driftY: -6, duration: 14, delay: 1.2 },
  { id: "transformation", label: "Transformation", x: 80, y: 72, driftX: 5, driftY: -5, duration: 10, delay: 0.2 },
  { id: "innovation", label: "Innovation", x: 58, y: 66, driftX: 8, driftY: 6, duration: 15, delay: 1.6, fade: true },
  { id: "compliance", label: "Compliance", x: 50, y: 48, driftX: 4, driftY: -7, duration: 11.5, delay: 0.6, fade: true },
  { id: "operations", label: "Operations", x: 66, y: 54, driftX: -6, driftY: 4, duration: 12.5, delay: 1.0 },
  { id: "risk", label: "Risk", x: 84, y: 74, driftX: 3, driftY: -8, duration: 13.5, delay: 1.8, fade: true },
  { id: "data", label: "Data", x: 54, y: 34, driftX: 7, driftY: 5, duration: 10.5, delay: 0.3 },
  { id: "business", label: "Business", x: 68, y: 38, driftX: -5, driftY: 6, duration: 14.5, delay: 1.4 },
  { id: "technology", label: "Technology", x: 86, y: 50, driftX: 4, driftY: -4, duration: 11.8, delay: 0.9 },
];

const MESH_LINKS: [string, string][] = [
  ["strategy", "governance"],
  ["governance", "architecture"],
  ["architecture", "technology"],
  ["technology", "security"],
  ["security", "transformation"],
  ["data", "strategy"],
  ["business", "operations"],
  ["operations", "innovation"],
  ["compliance", "risk"],
  ["innovation", "transformation"],
];

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 19 + 5) % 100}%`,
  top: `${(i * 27 + 9) % 100}%`,
  size: 1 + (i % 2),
  delay: (i % 9) * 0.35,
  duration: 7 + (i % 6) * 1.4,
}));

const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_PREMIUM } },
};

function nodeById(id: string) {
  return ECOSYSTEM_NODES.find((n) => n.id === id)!;
}

type AdvisoryImmersiveHeroProps = {
  hero: ServicePageContent["hero"];
};

function AdvisoryImmersiveHero({ hero }: AdvisoryImmersiveHeroProps) {
  const titleLines = hero.title.split("\n");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [burst, setBurst] = useState(0);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 48, damping: 26 });
  const sy = useSpring(my, { stiffness: 48, damping: 26 });
  const parallaxX = useSpring(0, { stiffness: 40, damping: 22 });
  const parallaxY = useSpring(0, { stiffness: 40, damping: 22 });
  const [light, setLight] = useState({ x: 50, y: 40 });

  const allLinks = useMemo(() => {
    const toCore = ECOSYSTEM_NODES.map((n) => ({ from: CORE, to: { x: n.x, y: n.y }, id: `core-${n.id}` }));
    const mesh = MESH_LINKS.map(([a, b]) => {
      const na = nodeById(a);
      const nb = nodeById(b);
      return { from: { x: na.x, y: na.y }, to: { x: nb.x, y: nb.y }, id: `${a}-${b}` };
    });
    return [...toCore, ...mesh];
  }, []);

  useEffect(() => {
    const ux = sx.on("change", (v) => {
      setLight((p) => ({ ...p, x: v * 100 }));
      parallaxX.set((v - 0.5) * 12);
    });
    const uy = sy.on("change", (v) => {
      setLight((p) => ({ ...p, y: v * 100 }));
      parallaxY.set((v - 0.5) * 10);
    });
    return () => {
      ux();
      uy();
    };
  }, [sx, sy, parallaxX, parallaxY]);

  useEffect(() => {
    const burstId = window.setInterval(() => setBurst((v) => v + 1), 5200);
    return () => window.clearInterval(burstId);
  }, []);

  const onMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mx.set((e.clientX - rect.left) / rect.width);
      my.set((e.clientY - rect.top) / rect.height);
    },
    [mx, my]
  );

  return (
    <section
      className="adv-immersive-hero"
      aria-labelledby="service-hero-title"
      onMouseMove={onMove}
    >
      <div className="adv-immersive-layers" aria-hidden>
        <div className="adv-immersive-nebula" />
        <motion.div
          className="adv-immersive-nebula adv-immersive-nebula--secondary"
          style={{ x: parallaxX, y: parallaxY }}
        />
        <div className="adv-immersive-fog" />

        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="adv-immersive-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -18 - (p.id % 5) * 6, 0],
              x: [0, (p.id % 2 === 0 ? 8 : -8), 0],
              opacity: [0.08, 0.45, 0.08],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}

        <div
          className="adv-immersive-mouse-light"
          style={{
            background: `radial-gradient(circle at ${light.x}% ${light.y}%, rgba(139, 92, 246, 0.14), transparent 42%)`,
          }}
        />

        <svg className="adv-immersive-network" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="adv-mesh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.18" />
            </linearGradient>
            <radialGradient id="adv-core-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5f3ff" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#a78bfa" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
            </radialGradient>
          </defs>

          {allLinks.map((link, i) => {
            const active =
              activeId &&
              (link.id.includes(activeId) ||
                link.id === `core-${activeId}`);
            return (
              <g key={link.id}>
                <motion.line
                  x1={link.from.x}
                  y1={link.from.y}
                  x2={link.to.x}
                  y2={link.to.y}
                  stroke="url(#adv-mesh-grad)"
                  strokeWidth={active ? 0.08 : 0.045}
                  vectorEffect="non-scaling-stroke"
                  animate={{ opacity: active ? [0.35, 0.7, 0.35] : [0.12, 0.28, 0.12] }}
                  transition={{
                    duration: 3.5 + (i % 4) * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 7) * 0.2,
                  }}
                />
                <motion.circle
                  r="0.18"
                  fill="#67e8f9"
                  animate={{
                    cx: [link.from.x, link.to.x],
                    cy: [link.from.y, link.to.y],
                    opacity: [0, active ? 0.85 : 0.4, 0],
                  }}
                  transition={{
                    duration: 4 + (i % 5) * 0.8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: (i % 9) * 0.45,
                  }}
                />
              </g>
            );
          })}

          <motion.ellipse
            cx={CORE.x}
            cy={CORE.y}
            rx="5.5"
            ry="4.2"
            fill="url(#adv-core-radial)"
            animate={{ rx: [5, 6.2, 5], ry: [3.8, 4.8, 3.8], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.ellipse
            cx={CORE.x}
            cy={CORE.y}
            rx="9"
            ry="7"
            fill="none"
            stroke="rgba(167, 139, 250, 0.25)"
            strokeWidth="0.06"
            animate={{ rx: [8, 10.5, 8], ry: [6.5, 8.5, 6.5], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {burst % 2 === 0 && (
            <motion.circle
              key={burst}
              cx={CORE.x}
              cy={CORE.y}
              r="4"
              fill="none"
              stroke="rgba(103, 232, 249, 0.35)"
              strokeWidth="0.08"
              initial={{ r: 4, opacity: 0.6 }}
              animate={{ r: 18, opacity: 0 }}
              transition={{ duration: 2.8, ease: "easeOut" }}
            />
          )}
        </svg>

        <div className="adv-immersive-core-glow" style={{ left: `${CORE.x}%`, top: `${CORE.y}%` }} />

        {ECOSYSTEM_NODES.map((node) => (
          <motion.div
            key={node.id}
            className="adv-immersive-node"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            animate={{
              x: [0, node.driftX, -node.driftX * 0.5, 0],
              y: [0, node.driftY, -node.driftY * 0.6, 0],
              opacity: node.fade ? [0.35, 0.85, 0.5, 0.35] : [0.55, 0.95, 0.65, 0.55],
            }}
            transition={{
              duration: node.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.delay,
            }}
            onMouseEnter={() => setActiveId(node.id)}
            onMouseLeave={() => setActiveId(null)}
          >
            <span className="adv-immersive-node-dot" />
            <span className="adv-immersive-node-label">{node.label}</span>
          </motion.div>
        ))}

        <div className="adv-immersive-readability" />
        <div className="adv-immersive-vignette" />
      </div>

      <div className="mvp-inner adv-immersive-content">
        <motion.div
          className="mvp-hero-copy adv-immersive-copy"
          variants={STAGGER}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="mvp-hero-label" variants={fadeUp}>
            {hero.label}
          </motion.p>

          <motion.h1 id="service-hero-title" className="mvp-hero-headline" variants={fadeUp}>
            {titleLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {hero.subtitle ? (
            <motion.p className="mvp-hero-subtitle" variants={fadeUp}>
              <FormattedText text={hero.subtitle} />
            </motion.p>
          ) : null}

          {hero.primaryCta && hero.primaryHref ? (
            <motion.div className="mvp-hero-ctas" variants={fadeUp}>
              <Link href={hero.primaryHref} className="mvp-btn-primary">
                {hero.primaryCta}
                <ArrowRight size={16} aria-hidden />
              </Link>
              {hero.secondaryCta && hero.secondaryHref ? (
                <Link href={hero.secondaryHref} className="mvp-btn-secondary">
                  {hero.secondaryCta}
                </Link>
              ) : null}
            </motion.div>
          ) : null}

          {hero.trustLine ? (
            <motion.p className="mvp-hero-trust" variants={fadeUp}>
              <FormattedText text={hero.trustLine} />
            </motion.p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(AdvisoryImmersiveHero);
