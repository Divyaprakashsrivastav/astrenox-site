"use client";

import { motion } from "framer-motion";
import { Cpu, Radar, Shield } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    label: "Neural Core",
    value: "Active",
    className: "top-[10%] left-0 lg:left-[-2%]",
    delay: 0.5,
    duration: 5,
  },
  {
    icon: Radar,
    label: "Autonomy",
    value: "99.2%",
    className: "top-[20%] right-0",
    delay: 0.65,
    duration: 5.5,
  },
  {
    icon: Shield,
    label: "Mission Ready",
    value: "Verified",
    className: "bottom-[14%] left-[6%]",
    delay: 0.8,
    duration: 6,
  },
];

export default function HeroFloatingCards() {
  return (
    <>
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay, duration: 0.5 }}
            className={`absolute z-20 ${card.className}`}
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: card.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="premium-card px-3.5 py-2.5 flex items-center gap-2.5 min-w-[132px]"
            >
              <div className="w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center shrink-0">
                <Icon size={13} className="text-primary" strokeWidth={2} />
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-wide text-muted">
                  {card.label}
                </p>
                <p className="text-xs font-semibold text-text">{card.value}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}
