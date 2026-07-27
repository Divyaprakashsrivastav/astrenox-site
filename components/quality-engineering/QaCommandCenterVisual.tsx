"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationActiveRef } from "../features/useAnimationActiveRef";

/** Stage names drawn from document testing concepts only. */
const PIPE_STAGES = [
  "Functional",
  "API",
  "Load",
  "DAST",
  "Regression",
  "CI/CD",
] as const;

const COVERAGE = [
  { label: "Functional", value: 90 },
  { label: "API", value: 86 },
  { label: "Load", value: 78 },
  { label: "Regression", value: 84 },
] as const;

function QaCommandCenterVisual() {
  const rootRef = useRef<HTMLDivElement>(null);
  const activeRef = useAnimationActiveRef(rootRef);
  const [stage, setStage] = useState(0);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!activeRef.current) return;
      setStage((s) => (s + 1) % PIPE_STAGES.length);
      setPulse((p) => (p + 7) % 100);
    }, 1300);
    return () => window.clearInterval(id);
  }, [activeRef]);

  return (
    <div ref={rootRef} className="qe-dash" aria-hidden>
      <div className="qe-dash-scan" />
      <div className="qe-dash-grid" />

      <div className="qe-dash-top">
        <div className="qe-ring">
          <svg viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="32" className="qe-ring-track" />
            <motion.circle
              cx="40"
              cy="40"
              r="32"
              className="qe-ring-fill"
              strokeDasharray="201"
              animate={{ strokeDashoffset: 201 - (201 * (70 + pulse / 5)) / 100 }}
              transition={{ duration: 0.8 }}
            />
          </svg>
          <span className="qe-ring-core" />
        </div>
        <div className="qe-status-stack">
          {PIPE_STAGES.map((name, i) => (
            <div
              key={name}
              className={`qe-status-pill ${i === stage ? "is-active" : i < stage ? "is-done" : ""}`}
            >
              <span className="qe-status-dot" />
              {name}
            </div>
          ))}
        </div>
      </div>

      <div className="qe-pipeline">
        {PIPE_STAGES.map((name, i) => (
          <div
            key={name}
            className={`qe-pipe-stage ${i <= stage ? "is-pass" : ""} ${i === stage ? "is-active" : ""}`}
          >
            <span className="qe-pipe-bar" />
            <span className="qe-pipe-name">{name}</span>
          </div>
        ))}
      </div>

      <div className="qe-mid">
        <div className="qe-coverage">
          {COVERAGE.map((c, i) => (
            <div key={c.label} className="qe-cov-row">
              <span>{c.label}</span>
              <div className="qe-cov-track">
                <motion.div
                  className="qe-cov-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${c.value}%` }}
                  transition={{ duration: 1.15, delay: 0.25 + i * 0.08, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="qe-matrix">
          <div className="qe-matrix-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={`qe-matrix-cell ${i % 7 === 0 ? "is-warn" : "is-ok"}`}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2.2,
                  delay: (i % 8) * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
          <div className="qe-matrix-bars">
            {[72, 88, 64, 91].map((h, i) => (
              <motion.span
                key={i}
                className="qe-matrix-bar"
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.9, delay: 0.4 + i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(QaCommandCenterVisual);
