"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";
import FeatureCardVisual, { type FeatureVisualId } from "./features/FeatureCardVisual";
import { useReducedMotion } from "./features/useReducedMotion";

type BentoRow = "large" | "medium";
type CardLayout = "stack" | "split";

interface Capability {
  id: FeatureVisualId;
  category: string;
  title: string;
  description: string;
  cta: string;
  ctaHref: string;
  colSpan: string;
  row: BentoRow;
  layout?: CardLayout;
}

const capabilities: Capability[] = [
  {
    id: "ai-systems",
    category: "Neural Systems",
    title: "AI Systems",
    description:
      "Enterprise neural orchestration — inference pipelines, decision layers, and autonomous control at scale.",
    cta: "Explore AI systems",
    ctaHref: "#contact",
    colSpan: "col-span-12 lg:col-span-8",
    row: "large",
  },
  {
    id: "drones",
    category: "Autonomous Flight",
    title: "Autonomous Drones",
    description:
      "Mission-ready UAV stacks with swarm coordination, radar fusion, and real-time path planning.",
    cta: "View drone platform",
    ctaHref: "#projects",
    colSpan: "col-span-12 lg:col-span-4",
    row: "large",
  },
  {
    id: "robotics",
    category: "Industrial Robotics",
    title: "Robotics",
    description:
      "Precision manipulators and field robots with adaptive motion planning and assembly intelligence.",
    cta: "See robotics stack",
    ctaHref: "#process",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium",
  },
  {
    id: "aerospace",
    category: "Space Systems",
    title: "Aerospace Research",
    description:
      "Orbital mechanics, avionics, and propulsion R&D for next-generation autonomous space missions.",
    cta: "Aerospace programs",
    ctaHref: "#research",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium",
  },
  {
    id: "vision",
    category: "Perception",
    title: "Computer Vision",
    description:
      "Real-time object detection, tracking, and scene understanding for navigation and surveillance.",
    cta: "Vision capabilities",
    ctaHref: "#services",
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    row: "medium",
  },
  {
    id: "research",
    category: "R&D Pipeline",
    title: "Research & Development",
    description:
      "From lab prototype to production — structured experiments, validation, and deployment pipelines.",
    cta: "R&D approach",
    ctaHref: "#research",
    colSpan: "col-span-12 lg:col-span-6",
    row: "medium",
    layout: "split",
  },
  {
    id: "analytics",
    category: "Operational Intelligence",
    title: "Predictive Analytics",
    description:
      "Forecasting engines and mission telemetry that turn sensor data into decisive operational insight.",
    cta: "Analytics platform",
    ctaHref: "#contact",
    colSpan: "col-span-12 lg:col-span-6",
    row: "medium",
    layout: "split",
  },
];

function FeatureCard({ capability }: { capability: Capability }) {
  const reducedMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const lift = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 280, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 280, damping: 24 });
  const springLift = useSpring(lift, { stiffness: 320, damping: 28 });
  const transform = useMotionTemplate`perspective(1200px) rotateX(${springX}deg) rotateY(${springY}deg) translateY(${springLift}px)`;

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(x * (hovered ? 4 : 0));
    rotateX.set(-y * (hovered ? 4 : 0));
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const layout = capability.layout ?? "stack";

  return (
    <motion.article
      variants={staggerItem}
      style={reducedMotion ? undefined : { transform }}
      data-row={capability.row}
      data-layout={layout}
      onMouseEnter={() => {
        setHovered(true);
        lift.set(-4);
      }}
      onMouseLeave={() => {
        setHovered(false);
        lift.set(0);
        resetTilt();
      }}
      onMouseMove={handleMove}
      className={`feature-capability-card bento-card ${capability.colSpan} ${hovered ? "is-hovered" : ""}`}
    >
      <div className="feature-card-border-glow" aria-hidden />

      <FeatureCardVisual
        visualId={capability.id}
        active={hovered}
        reducedMotion={reducedMotion}
      />

      <div className="feature-card-copy">
        <span className="feature-card-category">{capability.category}</span>
        <h3 className="feature-card-title">{capability.title}</h3>
        <p className="feature-card-description">{capability.description}</p>
        <Link href={capability.ctaHref} className="feature-card-cta group">
          <span>{capability.cta}</span>
          <ArrowRight
            size={14}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Features() {
  return (
    <section id="services" className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Capabilities"
          title={
            <>
              One platform.{" "}
              <span className="text-highlight-primary">Seven</span> live modules.
            </>
          }
          description="Each capability ships as a production-ready system — neural, aerial, robotic, and orbital intelligence built for enterprise missions."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="capabilities-bento"
        >
          {capabilities.map((capability) => (
            <FeatureCard key={capability.id} capability={capability} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
