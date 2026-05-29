"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import HeroAINetwork from "./hero/HeroAINetwork";
import HeroFloatingCards from "./hero/HeroFloatingCards";
import LiquidButton from "./ui/LiquidButton";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] flex items-center overflow-hidden hero-gradient"
    >
      <div
        className="hero-glow w-[480px] h-[360px] -top-24 right-0"
        style={{ background: "rgba(201, 123, 132, 0.08)" }}
        aria-hidden
      />
      <div
        className="hero-glow w-[400px] h-[320px] bottom-0 left-[-8%]"
        style={{ background: "rgba(125, 46, 104, 0.06)" }}
        aria-hidden
      />
      <div className="absolute inset-0 mesh-grid opacity-40" aria-hidden />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.18em] uppercase text-muted mb-6"
            >
              Astrenox · Intelligent Autonomous Systems
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold text-text tracking-tight leading-[1.1]"
            >
              ASTRENOX builds{" "}
              <span className="text-highlight-primary">intelligent</span>{" "}
              autonomous systems.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base sm:text-lg text-muted max-w-lg leading-relaxed"
            >
              Enterprise-grade AI for drones, aerospace, robotics, and computer
              vision — trusted by teams who ship mission-critical technology.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col sm:flex-row items-start gap-3"
            >
              <LiquidButton href="#services" variant="primary">
                Explore capabilities
                <ArrowRight size={16} strokeWidth={2} />
              </LiquidButton>
              <LiquidButton href="#contact" variant="outline">
                Talk to our team
              </LiquidButton>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[340px] lg:min-h-[400px] flex items-center justify-center"
          >
            <HeroFloatingCards />
            <HeroAINetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
