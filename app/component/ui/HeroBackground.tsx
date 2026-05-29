"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ParticleField from "./ParticleField";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ opacity }} className="absolute inset-0">
        <div className="absolute inset-0 mesh-grid opacity-25" />

        <motion.div
          style={{
            y: y1,
            background:
              "radial-gradient(circle, rgba(125,46,104,0.22) 0%, rgba(37,19,81,0.15) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -right-[20%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full opacity-35"
        />

        <motion.div
          style={{
            y: y2,
            background:
              "radial-gradient(circle, rgba(201,123,132,0.12) 0%, rgba(125,46,104,0.1) 45%, transparent 70%)",
          }}
          animate={{
            scale: [1.05, 1, 1.05],
            x: [0, 20, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] -left-[25%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full"
        />

        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[50vw] h-[40vh] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(125,46,104,0.12) 0%, transparent 70%)",
          }}
        />

        <ParticleField count={35} />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37,19,81,0.4) 0%, transparent 55%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
