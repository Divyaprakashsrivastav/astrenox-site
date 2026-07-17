"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";

const HERO_LINES = [
  "Initializing Runtime...",
  "Loading LLM...",
  "Connecting APIs...",
  "Deploying Services...",
  "Inference Ready ✓",
];

const SECTION_LINES = [
  "$ astrenox deploy --env production",
  "→ Building container image...",
  "→ Running eval suite (Langfuse)...",
  "→ API gateway connected",
  "→ Vector index synced (Pinecone)",
  "→ Agent orchestration online",
  "✓ Build successful",
  "✓ Inference ready",
];

type Props = {
  variant?: "hero" | "section";
};

function AIEngineeringTerminal({ variant = "section" }: Props) {
  const lines = variant === "hero" ? HERO_LINES : SECTION_LINES;
  const [visible, setVisible] = useState<string[]>([]);
  const done = visible.length >= lines.length && visible[lines.length - 1] === lines[lines.length - 1];

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lineIdx = 0;
    let charIdx = 0;
    let interval: ReturnType<typeof setInterval> | null = null;

    const start = window.setTimeout(() => {
      setVisible(reduced ? lines : []);
      if (reduced) return;

      interval = setInterval(() => {
        if (lineIdx >= lines.length) {
          if (interval) clearInterval(interval);
          return;
        }
        const line = lines[lineIdx];
        charIdx += 1;
        setVisible((prev) => {
          const next = [...prev];
          next[lineIdx] = line.slice(0, charIdx);
          return next;
        });
        if (charIdx >= line.length) {
          lineIdx += 1;
          charIdx = 0;
        }
      }, variant === "hero" ? 32 : 28);
    }, 0);

    return () => {
      window.clearTimeout(start);
      if (interval) clearInterval(interval);
    };
  }, [lines, variant]);

  const isOk = (line: string) => line.includes("✓") || line.startsWith("✓");

  if (variant === "hero") {
    return (
      <motion.div
        className="aie-hero-terminal-wrap"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15, ease: EASE_PREMIUM }}
      >
        <div className="aie-hero-terminal-glow" aria-hidden />
        <div className="aie-terminal aie-terminal--hero">
          <div className="aie-terminal-chrome">
            <span />
            <span />
            <span />
            <p>production — deploy console</p>
          </div>
          <div className="aie-terminal-body aie-terminal-body--hero">
            {visible.map((line, i) => (
              <p key={i} className={isOk(line) ? "aie-terminal-ok" : undefined}>
                {line}
              </p>
            ))}
            {!done && (
              <span className="aie-terminal-cursor">▋</span>
            )}
          </div>
          <div className="aie-terminal-status" aria-hidden>
            <span className="aie-terminal-status-dot" />
            Live
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="aie-terminal" aria-hidden>
      <div className="aie-terminal-chrome">
        <span />
        <span />
        <span />
        <p>astrenox-engineering — deploy</p>
      </div>
      <div className="aie-terminal-body">
        {visible.map((line, i) => (
          <p key={i} className={isOk(line) ? "aie-terminal-ok" : undefined}>
            {line}
          </p>
        ))}
        {!done && <span className="aie-terminal-cursor">▋</span>}
      </div>
    </div>
  );
}

export default memo(AIEngineeringTerminal);
