"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE_PREMIUM } from "../v2/motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}
