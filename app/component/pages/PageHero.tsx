"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import LiquidButton from "../ui/LiquidButton";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: "Request a consult", href: "/contact" },
  secondaryCta = { label: "Explore services", href: "/services" },
}: PageHeroProps) {
  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden hero-gradient">
      <div className="absolute inset-0 mesh-grid opacity-30" aria-hidden />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-muted mb-6">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-semibold text-text tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            {description}
          </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <LiquidButton href={primaryCta.href} variant="primary">
              {primaryCta.label}
              <ArrowRight size={16} strokeWidth={2} />
            </LiquidButton>
            {secondaryCta ? (
              <LiquidButton href={secondaryCta.href} variant="outline">
                {secondaryCta.label}
              </LiquidButton>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
