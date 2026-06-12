"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { homeHero } from "@/app/content/homepage-content";

const EASE_OUT: [number, number, number, number] = [0, 0, 0.2, 1];

interface HeroKpisProps {
  className?: string;
}

export default function HeroKpis({ className = "" }: HeroKpisProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  return (
    <motion.div
      ref={ref}
      className={`hero-kpi-row hero-kpi-row--compact ${className}`.trim()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
      }}
    >
      {homeHero.kpis.map((kpi) => (
        <motion.div
          key={kpi.label}
          variants={{
            hidden: { opacity: 0, y: 6 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: EASE_OUT },
            },
          }}
          className="hero-kpi-item"
        >
          <p className="hero-kpi-value tabular-nums">
            <AnimatedCounter
              value={kpi.value}
              suffix={kpi.suffix}
              decimals={"decimals" in kpi ? kpi.decimals : 0}
              duration={1.4}
              immediate={isInView}
            />
          </p>
          <p className="hero-kpi-label">{kpi.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
