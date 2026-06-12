"use client";

import { motion } from "framer-motion";
import { useRef, type MouseEvent, type ReactNode } from "react";
import { MOTION } from "../motion/home-motion";

interface CapabilityCardProps {
  title: string;
  description: string;
  metrics: readonly { value: string; label: string }[];
  visual: ReactNode;
  active: boolean;
  reduced: boolean;
  onEnter: () => void;
  onLeave: () => void;
}

export default function CapabilityCard({
  title,
  description,
  metrics,
  visual,
  active,
  reduced,
  onEnter,
  onLeave,
}: CapabilityCardProps) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--cap-spot-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--cap-spot-y", `${e.clientY - rect.top}px`);
  };

  const resetSpot = () => {
    ref.current?.style.setProperty("--cap-spot-x", "50%");
    ref.current?.style.setProperty("--cap-spot-y", "50%");
  };

  return (
    <motion.article
      ref={ref}
      className={`ax-cap-card ax-cap-card-premium${active ? " is-active" : ""}`}
      onMouseEnter={onEnter}
      onMouseLeave={() => {
        onLeave();
        resetSpot();
      }}
      onMouseMove={onMove}
      whileHover={reduced ? { y: -4 } : { y: -8 }}
      transition={{ duration: 0.32, ease: MOTION.lineReveal.ease }}
      data-cursor-hover
    >
      <div className="ax-cap-spotlight" aria-hidden />
      <div className="ax-cap-visual ax-cap-visual-premium">{visual}</div>
      <div className="ax-cap-body">
        <h3 className="ax-cap-title">{title}</h3>
        <p className="ax-cap-desc">{description}</p>
        <div className="ax-cap-metrics">
          {metrics.map((m) => (
            <div key={m.label} className="ax-cap-metric">
              <span className="ax-cap-metric-value">{m.value}</span>
              <span className="ax-cap-metric-label">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
