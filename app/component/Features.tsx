"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";
import FeatureCardVisual, { type FeatureVisualId } from "./features/FeatureCardVisual";
import { useReducedMotion } from "./features/useReducedMotion";
import {
  capabilities as contentCapabilities,
  capabilitiesSection,
} from "@/app/content/astrenox-content";

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

const capabilities: Capability[] = contentCapabilities.map((c) => ({
  ...c,
  layout: "layout" in c ? c.layout : undefined,
}));

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
          label={capabilitiesSection.label}
          title={
            <>
              {capabilitiesSection.title.split(" production")[0]}
              <span className="text-highlight-primary"> production</span>.
            </>
          }
          description={capabilitiesSection.description}
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
