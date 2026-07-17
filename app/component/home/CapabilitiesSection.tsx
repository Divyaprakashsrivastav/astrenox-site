"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/app/component/ui/3d-card";
import { homeServices } from "@/app/content/homepage-content";

/* ─── SVG Visuals ──────────────────────────────────────────────── */

function NeuralNetworkVisual() {
  return (
    <div
      className="cap3d-visual"
      style={{ background: "rgba(139,61,125,0.15)" }}
    >
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Static background connections */}
        <path d="M35 40 L95 30" stroke="rgba(139,61,125,0.18)" strokeWidth="1" />
        <path d="M35 40 L95 110" stroke="rgba(139,61,125,0.13)" strokeWidth="1" />
        <path d="M35 70 L95 30" stroke="rgba(139,61,125,0.13)" strokeWidth="1" />
        <path d="M35 70 L95 110" stroke="rgba(139,61,125,0.18)" strokeWidth="1" />
        <path d="M35 100 L95 70" stroke="rgba(139,61,125,0.13)" strokeWidth="1" />
        <path d="M35 100 L95 110" stroke="rgba(139,61,125,0.18)" strokeWidth="1" />
        <path d="M105 30 L165 90" stroke="rgba(139,61,125,0.13)" strokeWidth="1" />
        <path d="M105 110 L165 50" stroke="rgba(139,61,125,0.13)" strokeWidth="1" />
        {/* Animated signal paths (stroke-dashoffset traveling pulse) */}
        <path
          d="M35 40 L95 70 L165 50"
          stroke="rgba(183,110,157,0.85)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="cap3d-neural-sig cap3d-neural-sig-1"
        />
        <path
          d="M35 100 L95 30 L165 90"
          stroke="rgba(139,61,125,0.75)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="cap3d-neural-sig cap3d-neural-sig-2"
        />
        <path
          d="M35 70 L95 110 L165 70"
          stroke="rgba(183,110,157,0.65)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="cap3d-neural-sig cap3d-neural-sig-3"
        />
        {/* Layer 1 nodes */}
        <circle cx="30" cy="40" r="5" fill="rgba(139,61,125,0.45)" />
        <circle cx="30" cy="70" r="5" fill="rgba(139,61,125,0.45)" />
        <circle cx="30" cy="100" r="5" fill="rgba(139,61,125,0.45)" />
        {/* Layer 2 nodes */}
        <circle cx="100" cy="30" r="5" fill="rgba(139,61,125,0.55)" />
        <circle cx="100" cy="70" r="5" fill="rgba(139,61,125,0.55)" />
        <circle cx="100" cy="110" r="5" fill="rgba(139,61,125,0.55)" />
        {/* Layer 3 nodes */}
        <circle cx="170" cy="50" r="5" fill="rgba(139,61,125,0.45)" />
        <circle cx="170" cy="90" r="5" fill="rgba(139,61,125,0.45)" />
      </svg>
    </div>
  );
}

function RadarVisual() {
  return (
    <div
      className="cap3d-visual"
      style={{ background: "rgba(139,61,125,0.10)" }}
    >
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Concentric circles */}
        <circle cx="100" cy="70" r="55" stroke="rgba(139,61,125,0.22)" strokeWidth="1" />
        <circle cx="100" cy="70" r="40" stroke="rgba(139,61,125,0.28)" strokeWidth="1" />
        <circle cx="100" cy="70" r="25" stroke="rgba(139,61,125,0.33)" strokeWidth="1" />
        <circle cx="100" cy="70" r="10" stroke="rgba(139,61,125,0.48)" strokeWidth="1" />
        {/* Cross hairs */}
        <line x1="100" y1="10" x2="100" y2="130" stroke="rgba(139,61,125,0.10)" strokeWidth="0.75" />
        <line x1="40" y1="70" x2="160" y2="70" stroke="rgba(139,61,125,0.10)" strokeWidth="0.75" />
        {/* Rotating sweep arm */}
        <g className="cap3d-radar-sweep">
          <line
            x1="100" y1="70" x2="100" y2="15"
            stroke="rgba(139,61,125,0.72)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="100" y1="70" x2="100" y2="15"
            stroke="rgba(183,110,157,0.22)"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </g>
        {/* Center dot */}
        <circle cx="100" cy="70" r="3.5" fill="rgba(139,61,125,0.8)" />
        {/* Contact blips */}
        <circle cx="125" cy="42" r="2.5" fill="rgba(183,110,157,0.75)" className="cap3d-radar-blip" />
        <circle cx="72" cy="55" r="2" fill="rgba(139,61,125,0.65)" className="cap3d-radar-blip2" />
        <circle cx="136" cy="82" r="2" fill="rgba(183,110,157,0.55)" className="cap3d-radar-blip3" />
      </svg>
    </div>
  );
}

function RoboticArmVisual() {
  return (
    <div
      className="cap3d-visual"
      style={{ background: "rgba(139,61,125,0.12)" }}
    >
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Floor line */}
        <line x1="30" y1="126" x2="170" y2="126" stroke="rgba(139,61,125,0.14)" strokeWidth="1" />
        {/* Base plate */}
        <rect x="87" y="116" width="26" height="10" rx="2" fill="rgba(139,61,125,0.38)" />
        {/* Segment 1 */}
        <g className="cap3d-arm-seg1">
          <rect x="97" y="86" width="7" height="30" rx="3.5" fill="rgba(139,61,125,0.42)" />
          <circle cx="100.5" cy="86" r="5.5" fill="rgba(183,110,157,0.48)" />
          {/* Segment 2 */}
          <g className="cap3d-arm-seg2">
            <rect x="97" y="58" width="7" height="28" rx="3.5" fill="rgba(139,61,125,0.50)" />
            <circle cx="100.5" cy="58" r="5" fill="rgba(183,110,157,0.52)" />
            {/* Segment 3 */}
            <g className="cap3d-arm-seg3">
              <rect x="98.5" y="36" width="4" height="22" rx="2" fill="rgba(139,61,125,0.55)" />
              <rect x="92" y="25" width="8" height="11" rx="1.5" fill="rgba(139,61,125,0.40)" />
              <rect x="101" y="25" width="8" height="11" rx="1.5" fill="rgba(139,61,125,0.40)" />
              <circle cx="100.5" cy="26" r="3.5" fill="rgba(183,110,157,0.72)" />
            </g>
          </g>
        </g>
        {/* Tick marks on floor */}
        <line x1="55" y1="126" x2="55" y2="120" stroke="rgba(139,61,125,0.12)" strokeWidth="1" />
        <line x1="145" y1="126" x2="145" y2="120" stroke="rgba(139,61,125,0.12)" strokeWidth="1" />
      </svg>
    </div>
  );
}

function OrbitVisual() {
  return (
    <div
      className="cap3d-visual"
      style={{ background: "rgba(139,61,125,0.08)" }}
    >
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Orbit paths */}
        <ellipse cx="100" cy="70" rx="60" ry="22" stroke="rgba(139,61,125,0.18)" strokeWidth="1" />
        <circle cx="100" cy="70" r="38" stroke="rgba(139,61,125,0.14)" strokeWidth="1" strokeDasharray="4 5" />
        <circle cx="100" cy="70" r="22" stroke="rgba(139,61,125,0.22)" strokeWidth="1" />
        {/* Central body */}
        <circle cx="100" cy="70" r="9" fill="rgba(139,61,125,0.35)" />
        <circle cx="100" cy="70" r="5.5" fill="rgba(139,61,125,0.58)" />
        <circle cx="100" cy="70" r="2.5" fill="rgba(183,110,157,0.8)" />
        {/* Orbiting dot 1, outermost ellipse */}
        <g className="cap3d-orbit-dot1">
          <circle cx="160" cy="70" r="4.5" fill="rgba(183,110,157,0.82)" />
        </g>
        {/* Orbiting dot 2, circular orbit */}
        <g className="cap3d-orbit-dot2">
          <circle cx="100" cy="32" r="3.5" fill="rgba(139,61,125,0.72)" />
        </g>
        {/* Orbiting dot 3, inner circular orbit */}
        <g className="cap3d-orbit-dot3">
          <circle cx="122" cy="70" r="3" fill="rgba(183,110,157,0.60)" />
        </g>
      </svg>
    </div>
  );
}

/* ─── Card data ────────────────────────────────────────────────── */

const capCards = [
  {
    id: "enterprise-ai" as const,
    title: "Enterprise AI",
    description:
      "Multi-agent orchestration, knowledge graphs, and governed AI systems.",
    tags: ["Knowledge Graphs", "Agent Routing", "Model Governance"],
    Visual: NeuralNetworkVisual,
  },
  {
    id: "drones" as const,
    title: "Autonomous Drones",
    description:
      "Mission routing, fleet telemetry, and real-time aerial autonomy.",
    tags: ["Fleet Telemetry", "Mission Routing", "Real-time Control"],
    Visual: RadarVisual,
  },
  {
    id: "robotics" as const,
    title: "Robotics",
    description:
      "Closed-loop manipulation, warehouse agents, and industrial automation.",
    tags: ["Closed-loop Control", "Warehouse AI", "Industrial Ops"],
    Visual: RoboticArmVisual,
  },
  {
    id: "aerospace" as const,
    title: "Aerospace Intelligence",
    description:
      "Predictive maintenance and mission-critical systems for aerospace.",
    tags: ["Predictive Maintenance", "Mission Systems", "Fault Detection"],
    Visual: OrbitVisual,
  },
] as const;

/* ─── Section ──────────────────────────────────────────────────── */

export default function CapabilitiesSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <DesignSection id="capabilities" ambient="alt">
      <DesignHeader
        label={homeServices.label}
        title={homeServices.title}
        description={homeServices.description}
      />

      <div ref={gridRef} className="cap3d-grid">
        {capCards.map((cap, i) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: (i + 1) * 0.1, ease: "easeOut" }}
            className="w-full"
          >
            <CardContainer containerClassName="w-full" className="w-full">
              <CardBody className="cap3d-card-body">
                {/* Visual area lifts highest */}
                <CardItem translateZ={40} className="w-full">
                  <cap.Visual />
                </CardItem>

                <div className="cap3d-content">
                  <CardItem translateZ={30} className="w-full">
                    <h3 className="cap3d-title">{cap.title}</h3>
                  </CardItem>

                  <CardItem translateZ={20} className="w-full">
                    <p className="cap3d-desc">{cap.description}</p>
                  </CardItem>

                  <CardItem translateZ={20} className="w-full">
                    <div className="cap3d-tags">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="cap3d-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </DesignSection>
  );
}
