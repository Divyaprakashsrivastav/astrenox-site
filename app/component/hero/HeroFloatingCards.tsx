"use client";

import { motion } from "framer-motion";
import { Bot, LineChart, Zap } from "lucide-react";

const cards = [
  {
    icon: Zap,
    label: "Velocity",
    value: "25% faster",
    className: "top-[10%] left-0 lg:left-[-2%]",
    delay: 0.5,
    duration: 5,
  },
  {
    icon: Bot,
    label: "Automations",
    value: "30% resolution",
    className: "top-[20%] right-0",
    delay: 0.65,
    duration: 5.5,
  },
  {
    icon: LineChart,
    label: "Transformation",
    value: "20% launch",
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
              className="hero-float-card"
            >
              <Icon size={14} className="text-primary" strokeWidth={2} />
              <div>
                <p className="text-[10px] font-medium text-muted uppercase tracking-wide">
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
