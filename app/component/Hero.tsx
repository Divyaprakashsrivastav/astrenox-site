"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import GradientBlobs from "./ui/GradientBlobs";
import GeometricBackground from "./ui/GeometricBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 grid-background opacity-60" />
      <GradientBlobs />
      <GeometricBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-36 pb-28 lg:pt-44 lg:pb-36"
      >
        <motion.div variants={fadeUp} transition={{ delay: 0.15 }} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border bg-surface/80 text-xs font-medium text-muted mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Enterprise autonomous intelligence
        </motion.div>

        <motion.h1
          variants={fadeUp}
          transition={{ delay: 0.25 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold text-text tracking-tight leading-[1.08]"
        >
          Building{" "}
          <span className="font-editorial text-primary">intelligent</span>
          <br />
          autonomous systems
        </motion.h1>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.35 }}
          className="mt-6 font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-muted/90 tracking-tight"
        >
          for the{" "}
          <span className="font-editorial text-text">future-ready</span> enterprise
        </motion.p>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.45 }}
          className="mt-8 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed"
        >
          AI-powered innovation across drones, aerospace, robotics, and intelligent
          software — engineered for mission-critical scale.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.55 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#services" className="btn-dark group">
            Explore Platform
            <ArrowRight
              size={16}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </a>
          <a href="#contact" className="btn-outline group">
            <Calendar size={16} strokeWidth={1.5} />
            Book a Call
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-primary/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
