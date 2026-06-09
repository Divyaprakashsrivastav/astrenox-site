"use client";

import { motion } from "framer-motion";
import type { EcosystemLayer } from "./ecosystem-data";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface EcosystemLayerCardProps {
  layer: EcosystemLayer;
  active: boolean;
  dimmed: boolean;
  index: number;
  onHover: (id: string | null) => void;
  mobile?: boolean;
  revealed?: boolean;
}

function LayerIcon({ layer, active }: { layer: EcosystemLayer; active: boolean }) {
  const Icon = layer.icon;

  if (layer.id === "enterprise") {
    return (
      <span className={`tech-eco-icon tech-eco-icon--enterprise ${active ? "is-active" : ""}`}>
        <Icon size={14} strokeWidth={2} className="text-primary shrink-0 relative z-[1]" />
        <svg viewBox="0 0 16 8" className="tech-eco-enterprise-path" aria-hidden>
          <motion.path
            d="M1 6 L5 2 L9 5 L15 1"
            fill="none"
            stroke="#7D2E68"
            strokeWidth="1"
            strokeLinecap="round"
            initial={{ pathLength: 0.3 }}
            animate={{ pathLength: active ? 1 : 0.3 }}
            transition={{ duration: 0.65, ease: EASE_OUT }}
          />
        </svg>
      </span>
    );
  }

  if (layer.id === "data") {
    return (
      <span className={`tech-eco-icon tech-eco-icon--data ${active ? "is-active" : ""}`}>
        <span className="tech-eco-data-layer tech-eco-data-layer--1" />
        <span className="tech-eco-data-layer tech-eco-data-layer--2" />
        <Icon size={14} strokeWidth={2} className="text-primary shrink-0 relative z-[1]" />
      </span>
    );
  }

  if (layer.id === "devops") {
    return (
      <span className={`tech-eco-icon tech-eco-icon--devops ${active ? "is-active" : ""}`}>
        <span className="tech-eco-devops-node tech-eco-devops-node--a" />
        <span className="tech-eco-devops-node tech-eco-devops-node--b" />
        <Icon size={14} strokeWidth={2} className="text-primary shrink-0 relative z-[1]" />
      </span>
    );
  }

  return (
    <span className={`tech-eco-icon tech-eco-icon--${layer.id} ${active ? "is-active" : ""}`}>
      <Icon size={14} strokeWidth={2} className="text-primary shrink-0" />
    </span>
  );
}

export default function EcosystemLayerCard({
  layer,
  active,
  dimmed,
  index,
  onHover,
  mobile = false,
  revealed = false,
}: EcosystemLayerCardProps) {
  return (
    <motion.div
      className={`tech-eco-layer ${mobile ? "tech-eco-layer-mobile" : ""} ${active ? "is-active" : ""} ${dimmed ? "is-dimmed" : ""}`}
      onMouseEnter={() => onHover(layer.id)}
      onMouseLeave={() => onHover(null)}
      tabIndex={0}
      role="group"
      aria-label={layer.title}
      initial={{ opacity: 0, y: 10 }}
      animate={revealed ? { opacity: dimmed ? 0.55 : 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.5, delay: 0.42 + index * 0.12, ease: EASE_OUT }}
      whileHover={mobile ? undefined : { y: -8 }}
    >
      <motion.div
        className="tech-eco-layer-inner"
        animate={
          active
            ? {
                boxShadow: "0 12px 32px rgba(17,17,17,0.08), 0 0 24px rgba(125,46,104,0.1)",
                borderColor: "rgba(125, 46, 104, 0.35)",
              }
            : {
                boxShadow: "0 2px 8px rgba(17,17,17,0.03)",
                borderColor: "rgba(229, 231, 235, 1)",
              }
        }
        transition={{ duration: 0.3, ease: EASE_OUT }}
      >
        <div className="flex items-center gap-2 mb-2">
          <LayerIcon layer={layer} active={active} />
          <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-text">
            {layer.title}
          </h4>
        </div>
        <p className="text-xs text-muted leading-relaxed">{layer.description}</p>
      </motion.div>
    </motion.div>
  );
}
