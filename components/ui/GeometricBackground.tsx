"use client";

import { motion } from "framer-motion";

export default function GeometricBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 right-[10%] w-72 h-72 rounded-full bg-primary/8 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[8%] w-56 h-56 rounded-full bg-primary/6 blur-3xl"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,720px)] h-[min(90vw,720px)]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-border/80"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dashed border-primary/20"
        />
        <div className="absolute inset-16 rounded-full border border-border/50" />
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden>
        <defs>
          <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.75" fill="#6FA3B8" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
