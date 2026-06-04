"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import LiquidButton from "../ui/LiquidButton";
import PlatformOpsVisual from "./PlatformOpsVisual";
import { intelligencePlatform } from "@/app/content/platform-content";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PlatformHero() {
  const { hero } = intelligencePlatform;

  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden platform-hero">
      <div className="absolute inset-0 mesh-grid opacity-25" aria-hidden />
      <div className="platform-hero-glow platform-hero-glow-a" aria-hidden />
      <div className="platform-hero-glow platform-hero-glow-b" aria-hidden />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
            }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-5">
              <span className="platform-badge">
                <Sparkles size={12} strokeWidth={2} />
                {hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-semibold text-text tracking-tight leading-[1.08]"
            >
              {hero.title}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              {hero.description}
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-6 space-y-2">
              {hero.taglines.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  {line}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-3">
              <LiquidButton href={hero.primaryHref} variant="primary">
                {hero.primaryCta}
                <ArrowRight size={16} strokeWidth={2} />
              </LiquidButton>
              <LiquidButton href={hero.secondaryHref} variant="outline">
                {hero.secondaryCta}
              </LiquidButton>
            </motion.div>

            <motion.p variants={fadeUp} className="mt-6 text-xs text-muted">
              Powers{" "}
              <Link href="/services" className="text-primary hover:underline">
                Astrenox services
              </Link>
              ,{" "}
              <Link href="/projects" className="text-primary hover:underline">
                delivery programs
              </Link>
              , and{" "}
              <Link href="/research" className="text-primary hover:underline">
                research
              </Link>
              —one platform, no bolt-ons.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[320px] lg:min-h-[380px]"
          >
            <PlatformOpsVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
