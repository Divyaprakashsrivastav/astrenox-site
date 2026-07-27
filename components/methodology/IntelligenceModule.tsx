"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface IntelligenceModuleProps {
  title: string;
  description: string;
  index: number;
  visible: boolean;
}

export default function IntelligenceModule({
  title,
  description,
  index,
  visible,
}: IntelligenceModuleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.96 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0.35, y: 4, scale: 0.98 }
      }
      transition={{ delay: index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="journey-module"
    >
      <div className="journey-module-icon">
        <Sparkles size={10} strokeWidth={2} />
      </div>
      <div>
        <p className="journey-module-title">{title}</p>
        <p className="journey-module-desc">{description}</p>
      </div>
    </motion.div>
  );
}
