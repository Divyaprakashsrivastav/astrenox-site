"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroButtonsProps {
  primaryCta: string;
  primaryHref: string;
  secondaryCta: string;
  secondaryHref: string;
}

export default function HeroButtons({
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
}: HeroButtonsProps) {
  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Link href={primaryHref} className="hero-btn hero-btn-primary group">
        {primaryCta}
        <ArrowRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
      <Link href={secondaryHref} className="hero-btn hero-btn-ghost group">
        {secondaryCta}
        <ArrowRight
          size={16}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:translate-x-0.5 opacity-70"
        />
      </Link>
    </motion.div>
  );
}
