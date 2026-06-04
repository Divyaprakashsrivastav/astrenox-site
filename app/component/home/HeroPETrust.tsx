"use client";

import { motion } from "framer-motion";
import { peLogos, heroMetrics, hero } from "@/app/content/astrenox-content";
import LiquidButton from "../ui/LiquidButton";

export default function HeroPETrust() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.55 }}
      className="mt-8 space-y-5"
    >
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted mb-3">
          Trusted by top Private Equity firms
        </p>
        <ul className="flex flex-wrap gap-3">
          {peLogos.map((name) => (
            <li
              key={name}
              className="px-4 py-2 rounded-full border border-border text-xs font-medium text-muted bg-card/60"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-3 gap-3 max-w-md">
        {heroMetrics.map((m) => (
          <div key={m.label} className="glass-card p-4 text-center">
            <p className="font-heading text-lg font-semibold text-primary">{m.value}</p>
            <p className="mt-1 text-[10px] text-muted leading-snug">{m.label}</p>
          </div>
        ))}
      </div>

      <LiquidButton href={hero.requestAccessHref} variant="outline" className="!text-sm">
        {hero.requestAccessCta}
      </LiquidButton>
    </motion.div>
  );
}
