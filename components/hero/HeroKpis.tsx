"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedCounter from "../ui/AnimatedCounter";
import { homeHero } from "@/app/content/homepage-content";

export default function HeroKpis() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -5% 0px" });

  if (!("kpis" in homeHero) || !homeHero.kpis?.length) {
    return null;
  }

  return (
    <div ref={ref} className="hero-kpi-grid">
      {homeHero.kpis.map((kpi) => (
        <div key={kpi.label} className="hero-kpi-card">
          <p className="hero-kpi-card-value tabular-nums">
            <AnimatedCounter
              value={kpi.value}
              suffix={kpi.suffix}
              decimals={"decimals" in kpi ? kpi.decimals : 0}
              duration={1.4}
              immediate={isInView}
            />
          </p>
          <p className="hero-kpi-card-label">{kpi.label}</p>
        </div>
      ))}
    </div>
  );
}
