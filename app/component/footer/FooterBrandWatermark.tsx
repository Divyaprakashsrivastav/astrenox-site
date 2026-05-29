"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FooterBrandWatermark() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -12]);

  return (
    <div ref={ref} className="footer-brand-watermark" aria-hidden>
      <motion.div style={{ y }} className="relative w-full overflow-visible">
        <p className="footer-brand-text">ASTRENOX</p>
      </motion.div>
    </div>
  );
}
