"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LiquidButton from "../ui/LiquidButton";
import PlatformOpsVisual from "./PlatformOpsVisual";
import FormattedText from "../ui/FormattedText";
import { intelligencePlatform } from "@/app/content/platform-content";
import { isActionableCtaHref } from "@/lib/cta";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PlatformHero() {
  const { hero } = intelligencePlatform;

  return (
    <section className="relative bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12 lg:pt-28 lg:pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.07 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold tracking-[0.16em] uppercase text-muted mb-4"
            >
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-heading text-[clamp(2rem,4.2vw,3.25rem)] font-semibold text-text tracking-tight leading-[1.08]"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base sm:text-lg text-muted max-w-xl leading-relaxed"
            >
              <FormattedText text={hero.description} />
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-5 space-y-2">
              {hero.taglines.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                  <FormattedText text={line} />
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-7 flex flex-col sm:flex-row gap-3">
              <LiquidButton href={hero.primaryHref} variant="primary">
                {hero.primaryCta}
                <ArrowRight size={16} strokeWidth={2} />
              </LiquidButton>
              {hero.secondaryCta && isActionableCtaHref(hero.secondaryHref) ? (
                <LiquidButton href={hero.secondaryHref} variant="outline">
                  {hero.secondaryCta}
                </LiquidButton>
              ) : null}
            </motion.div>

            <motion.p variants={fadeUp} className="mt-5 text-xs text-muted">
              Powers{" "}
              <Link href="/services/ai-consulting-advisory" className="text-primary hover:underline">
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
              , one platform, no bolt-ons.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <PlatformOpsVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
