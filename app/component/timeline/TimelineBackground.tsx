"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface TimelineBackgroundProps {
  progress: MotionValue<number>;
}

export default function TimelineBackground({ progress }: TimelineBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], [0, 28]);
  const spotlight = useTransform(progress, [0, 0.5, 1], [0.5, 0.75, 0.5]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-px bg-border/80" />

      <motion.div
        style={{ opacity: spotlight }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_8%,rgba(255,255,255,0.95),transparent_55%)]"
      />
      <motion.div
        style={{ opacity: spotlight }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_55%_35%_at_50%_0%,rgba(125,46,104,0.05),transparent_62%)]"
      />
      <motion.div
        style={{ opacity: spotlight }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_85%_95%,rgba(201,123,132,0.035),transparent_50%)]"
      />

      <motion.div style={{ y: gridY }} className="absolute inset-[-15%] opacity-[0.55]">
        <div className="absolute inset-0 mesh-grid" />
      </motion.div>

      <motion.div
        animate={{ backgroundPosition: ["0px 0px", "72px 72px"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(229,231,235,0.65) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(229,231,235,0.65) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}
