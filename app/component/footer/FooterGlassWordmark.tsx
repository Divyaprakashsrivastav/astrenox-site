"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

const WORD = "ASTRENOX";

const FLOAT_PARTICLES = [
  { left: "8%", top: "22%", delay: 0, dur: 11 },
  { left: "22%", top: "68%", delay: 1.2, dur: 13 },
  { left: "78%", top: "30%", delay: 0.6, dur: 10 },
  { left: "88%", top: "62%", delay: 2, dur: 12 },
  { left: "48%", top: "12%", delay: 1.8, dur: 14 },
  { left: "62%", top: "78%", delay: 0.4, dur: 11 },
  { left: "34%", top: "44%", delay: 2.4, dur: 15 },
  { left: "92%", top: "48%", delay: 1, dur: 12 },
] as const;

export default function FooterGlassWordmark() {
  const reduced = useReducedMotion();

  return (
    <div className="ft-wordmark" aria-hidden>
      <motion.div
        className="ft-wordmark-fog"
        animate={reduced ? {} : { opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ft-wordmark-bloom"
        animate={reduced ? {} : { opacity: [0.45, 0.75, 0.45], scale: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ft-wordmark-radial"
        animate={reduced ? {} : { opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="ft-wordmark-stage">
        <div className="ft-wordmark-stack">
          <span className="ft-wordmark-sizer">{WORD}</span>
          <span className="ft-wordmark-glass-pane" aria-hidden />

          <span className="ft-wm ft-wm--shadow">{WORD}</span>
          <span className="ft-wm ft-wm--depth">{WORD}</span>
          <span className="ft-wm ft-wm--bevel">{WORD}</span>
          <span className="ft-wm ft-wm--fill">{WORD}</span>
          <span className="ft-wm ft-wm--edge">{WORD}</span>
          <span className="ft-wm ft-wm--inner">{WORD}</span>
          <span className="ft-wm ft-wm--specular">{WORD}</span>

          {!reduced && <span className="ft-wordmark-sweep" />}
        </div>

        {!reduced &&
          FLOAT_PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="ft-wordmark-particle"
              style={{ left: p.left, top: p.top }}
              animate={{ y: [0, -14, 0], opacity: [0.15, 0.5, 0.15] }}
              transition={{
                duration: p.dur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
      </div>
    </div>
  );
}
