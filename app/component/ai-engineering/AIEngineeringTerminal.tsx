"use client";

import { memo, useEffect, useState } from "react";

const LINES = [
  "$ astrenox deploy --env production",
  "→ Building container image...",
  "→ Running eval suite (Langfuse)...",
  "→ API gateway connected",
  "→ Vector index synced (Pinecone)",
  "→ Agent orchestration online",
  "✓ Build successful",
  "✓ Inference ready",
];

function AIEngineeringTerminal() {
  const [visible, setVisible] = useState<string[]>([]);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(LINES);
      return;
    }

    let lineIdx = 0;
    let charIdx = 0;
    const interval = setInterval(() => {
      if (lineIdx >= LINES.length) {
        clearInterval(interval);
        return;
      }
      const line = LINES[lineIdx];
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
    }, 28);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

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
          <p key={i} className={line.startsWith("✓") ? "aie-terminal-ok" : undefined}>
            {line}
          </p>
        ))}
        {visible.length < LINES.length && (
          <span className={`aie-terminal-cursor ${cursor ? "is-on" : ""}`}>▋</span>
        )}
      </div>
    </div>
  );
}

export default memo(AIEngineeringTerminal);
