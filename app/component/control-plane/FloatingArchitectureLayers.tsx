"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useMemo, useRef, useState, type MouseEvent } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM, useMouseParallax } from "../v2/motion";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

const LAYERS = [
  {
    id: "models",
    label: "AI Models",
    detail: "Frontier LLMs, embeddings, and governed model routing.",
    slot: "top",
    parallax: 10,
    delay: 0.12,
  },
  {
    id: "data",
    label: "Data Layer",
    detail: "Knowledge graphs, vector stores, and enterprise pipelines.",
    slot: "left",
    parallax: 14,
    delay: 0.18,
  },
  {
    id: "core",
    label: "ASTRENOX CORE",
    detail: "Unified orchestration for policy, memory, and execution.",
    slot: "center",
    parallax: 6,
    delay: 0.08,
  },
  {
    id: "cloud",
    label: "Cloud Layer",
    detail: "Multi-cloud fabric with workload placement and scale.",
    slot: "right",
    parallax: 14,
    delay: 0.22,
  },
  {
    id: "agents",
    label: "Agents",
    detail: "Autonomous fleets operating under audit and guardrails.",
    slot: "bottom",
    parallax: 10,
    delay: 0.16,
  },
] as const;

interface FloatingArchitectureLayersProps {
  active: boolean;
}

interface GlassLayerCardProps {
  id: string;
  label: string;
  detail: string;
  slot: (typeof LAYERS)[number]["slot"];
  parallax: number;
  delay: number;
  active: boolean;
  mx: ReturnType<typeof useMotionValue<number>>;
  my: ReturnType<typeof useMotionValue<number>>;
  reduced: boolean;
}

function GlassLayerCard({
  id,
  label,
  detail,
  slot,
  parallax,
  delay,
  active,
  mx,
  my,
  reduced,
}: GlassLayerCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);

  const offsetX = useTransform(mx, [-0.5, 0.5], slot === "left" ? [-parallax, parallax * 0.35] : slot === "right" ? [-parallax * 0.35, parallax] : [-parallax * 0.5, parallax * 0.5]);
  const offsetY = useTransform(my, [-0.5, 0.5], slot === "top" ? [-parallax, parallax * 0.35] : slot === "bottom" ? [-parallax * 0.35, parallax] : [-parallax * 0.5, parallax * 0.5]);
  const springX = useSpring(offsetX, { stiffness: 100, damping: 22 });
  const springY = useSpring(offsetY, { stiffness: 100, damping: 22 });
  const transform = useMotionTemplate`translate3d(${springX}px, ${springY}px, 0)`;
  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${spotX}% ${spotY}%, rgba(255,255,255,0.55) 0%, transparent 65%)`;

  const onCardMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const onCardLeave = () => {
    spotX.set(50);
    spotY.set(50);
    setHovered(false);
  };

  const isCore = slot === "center";

  return (
    <motion.div
      ref={cardRef}
      className={`cp-arch-card cp-arch-card--${slot}`}
      data-layer={id}
      style={reduced ? undefined : { transform }}
      initial={{ opacity: 0, y: slot === "top" ? -18 : slot === "bottom" ? 18 : 0, x: slot === "left" ? -18 : slot === "right" ? 18 : 0, filter: "blur(6px)" }}
      animate={
        active
          ? {
              opacity: 1,
              y: 0,
              x: 0,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{ duration: 0.7, delay, ease: EASE_OUT }}
      onMouseMove={onCardMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onCardLeave}
      whileHover={reduced ? undefined : { scale: isCore ? 1.02 : 1.035, y: isCore ? -2 : -4 }}
    >
      <motion.div
        className="cp-arch-card-glass"
        animate={
          hovered && !reduced
            ? {
                boxShadow: isCore
                  ? "0 28px 64px rgba(125, 46, 104, 0.14), 0 0 0 1px rgba(201, 123, 132, 0.22)"
                  : "0 20px 48px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(201, 123, 132, 0.18)",
              }
            : {
                boxShadow: isCore
                  ? "0 24px 56px rgba(17, 17, 17, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.05)"
                  : "0 16px 40px rgba(17, 17, 17, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              }
        }
        transition={{ duration: 0.35, ease: EASE_PREMIUM }}
      >
        <motion.div className="cp-arch-card-spotlight" style={{ background: spotlight }} aria-hidden />
        <div className="cp-arch-card-sheen" aria-hidden />
        <div className="cp-arch-card-body">
          {isCore ? (
            <>
              <span className="cp-arch-core-mark">Core</span>
              <h3 className="cp-arch-core-title">{label}</h3>
              <p className="cp-arch-core-detail">{detail}</p>
            </>
          ) : (
            <>
              <h3 className="cp-arch-layer-title">{label}</h3>
              <p className="cp-arch-layer-detail">{detail}</p>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FloatingArchitectureLayers({ active }: FloatingArchitectureLayersProps) {
  const reduced = useReducedMotion();
  const { ref, onMove, onLeave } = useMouseParallax(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    onMove(e);
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    onLeave();
    mx.set(0);
    my.set(0);
  };

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: 8 + ((i * 37) % 84),
        y: 6 + ((i * 53) % 88),
        size: 1 + (i % 3) * 0.5,
        duration: 7 + (i % 5) * 1.4,
        delay: (i % 7) * 0.6,
      })),
    []
  );

  return (
    <div
      ref={ref}
      className="cp-arch"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-label="Astrenox architecture layers"
    >
      <div className="cp-arch-bg" aria-hidden>
        <div className="cp-arch-mesh" />
        <div className="cp-arch-mesh cp-arch-mesh--alt" />
        <div className="cp-arch-rays" />
        <div className="cp-arch-rays cp-arch-rays--alt" />
        <div className="cp-arch-reflection" />
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="cp-arch-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={
              reduced
                ? { opacity: 0.25 }
                : {
                    y: [0, -18, 0],
                    opacity: [0.12, 0.42, 0.12],
                  }
            }
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="cp-arch-stage">
        {LAYERS.map((layer) => (
          <GlassLayerCard
            key={layer.id}
            {...layer}
            active={active}
            mx={mx}
            my={my}
            reduced={reduced}
          />
        ))}
      </div>
    </div>
  );
}
