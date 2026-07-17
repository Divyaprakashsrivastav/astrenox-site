"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export interface PartnerNodeData {
  id: string;
  name: string;
  category: string;
  tooltip: string;
}

interface EcosystemPartnerNodeProps {
  partner: PartnerNodeData;
  x: number;
  y: number;
  ringDelay: number;
  inView: boolean;
  isHovered: boolean;
  isDimmed: boolean;
  onHover: (id: string | null) => void;
  floatOffset: number;
}

function partnerMonogram(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function EcosystemPartnerNode({
  partner,
  x,
  y,
  ringDelay,
  inView,
  isHovered,
  isDimmed,
  onHover,
  floatOffset,
}: EcosystemPartnerNodeProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className="eco-partner-node-wrap"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        inView
          ? {
              opacity: isDimmed ? 0.45 : 1,
              scale: isHovered ? 1.08 : 1,
            }
          : {}
      }
      transition={{ delay: ringDelay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.button
        type="button"
        className={`eco-partner-node ${isHovered ? "eco-partner-node-active" : ""}`}
        onMouseEnter={() => onHover(partner.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(partner.id)}
        onBlur={() => onHover(null)}
        animate={
          !reduced && inView
            ? { y: [0, floatOffset, 0] }
            : {}
        }
        transition={{ duration: 5 + floatOffset, repeat: Infinity, ease: "easeInOut" }}
        aria-label={`${partner.name}: ${partner.category}`}
      >
        <span className="eco-partner-logo">{partnerMonogram(partner.name)}</span>
        <span className="eco-partner-name">{partner.name}</span>
        <span className="eco-partner-category">{partner.category}</span>
      </motion.button>
      <motion.div
        className="eco-partner-tooltip"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 6 }}
        transition={{ duration: 0.25 }}
      >
        {partner.tooltip}
      </motion.div>
    </motion.div>
  );
}
