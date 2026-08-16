"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  AppWindow,
  Braces,
  Database,
  Network,
  type LucideIcon,
} from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import TechSvgLogo from "../home/TechSvgLogo";

type StackChip = {
  label: string;
  file?: string;
};

type StackLayer = {
  id: string;
  title: string;
  Icon: LucideIcon;
  chips: readonly StackChip[];
  tone: "cyan" | "blue" | "violet" | "magenta" | "aqua";
};

const LAYERS: readonly StackLayer[] = [
  {
    id: "frontend",
    title: "Frontend & Interface Layer",
    Icon: AppWindow,
    tone: "cyan",
    chips: [
      { label: "Next.js", file: "nextjs.svg" },
      { label: "React", file: "react.svg" },
    ],
  },
  {
    id: "backend",
    title: "Backend & API Layer",
    Icon: Braces,
    tone: "blue",
    chips: [
      { label: "Python", file: "python.svg" },
      { label: "Node.js", file: "nodejs.svg" },
      { label: "APIs" },
    ],
  },
  {
    id: "orchestration",
    title: "Orchestration & Platforms",
    Icon: Network,
    tone: "violet",
    chips: [
      { label: "LangGraph", file: "langgraph.svg" },
      { label: "LangChain", file: "langchain.svg" },
      { label: "LlamaIndex", file: "llamaindex.svg" },
      { label: "n8n", file: "n8n.svg" },
      { label: "Vertex AI", file: "google-vertex-ai.svg" },
      { label: "AWS Bedrock", file: "amazonaws.svg" },
    ],
  },
  {
    id: "vector",
    title: "Vector & Semantic Infrastructure",
    Icon: Database,
    tone: "magenta",
    chips: [
      { label: "Pinecone", file: "pinecone.svg" },
      { label: "Qdrant", file: "qdrant.svg" },
      { label: "Semantic Routing" },
    ],
  },
  {
    id: "mlops",
    title: "Observability & MLOps",
    Icon: Activity,
    tone: "aqua",
    chips: [
      { label: "Telemetry" },
      { label: "Evaluations" },
      { label: "Prompt Versioning" },
      { label: "CI/CD", file: "githubactions.svg" },
    ],
  },
];

function Chip({ chip }: { chip: StackChip }) {
  return (
    <span className="aie-iso-chip">
      {chip.file ? <TechSvgLogo file={chip.file} name={chip.label} size={14} /> : null}
      {chip.label}
    </span>
  );
}

function Plate({
  layer,
  index,
}: {
  layer: StackLayer;
  index: number;
}) {
  const { Icon } = layer;
  return (
    <motion.article
      className={`aie-iso-plate aie-iso-plate--${layer.tone}`}
      initial={{ opacity: 0, y: 18, rotateX: 18 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 8 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_PREMIUM }}
    >
      <div className="aie-iso-plate-edge" aria-hidden />
      <div className="aie-iso-plate-face">
        <span className="aie-iso-icon">
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <div className="aie-iso-copy">
          <h3>
            <span>{index + 1}.</span> {layer.title}
          </h3>
          <div className="aie-iso-chips">
            {layer.chips.map((chip) => (
              <Chip key={chip.label} chip={chip} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function AIEngineeringStackVisual() {
  return (
    <div className="aie-stack-visual" aria-hidden>
      <div className="aie-iso-scene">
        <div className="aie-iso-circuit" />
        <div className="aie-iso-rail" />
        {LAYERS.map((layer, index) => (
          <Plate key={layer.id} layer={layer} index={index} />
        ))}
      </div>
    </div>
  );
}

export default memo(AIEngineeringStackVisual);
