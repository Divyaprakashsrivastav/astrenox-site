"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StorySection, { StoryReveal } from "../system/StorySection";
import { homeOperatingSystem } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

export default function OperatingSystemSection() {
  const [active, setActive] = useState(0);
  const layer = homeOperatingSystem.layers[active];

  return (
    <StorySection
      id={homeOperatingSystem.id}
      label={homeOperatingSystem.label}
      title={homeOperatingSystem.title}
      description={homeOperatingSystem.description}
    >
      <div className="os-section-layout">
        <StoryReveal className="os-layer-list">
          {homeOperatingSystem.layers.map((l, i) => (
            <button
              key={l.id}
              type="button"
              onClick={() => setActive(i)}
              className={`os-layer-tab ${i === active ? "is-active" : ""}`}
            >
              <span className="os-layer-index">0{i + 1}</span>
              <span className="os-layer-name">{l.title}</span>
            </button>
          ))}
        </StoryReveal>

        <StoryReveal delay={0.1} className="os-diagram-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            >
              <div className="os-diagram-canvas">
                <svg viewBox="0 0 400 220" className="w-full h-full" aria-hidden>
                  {[0, 1, 2, 3].map((row) => (
                    <g key={row}>
                      <rect
                        x={40 + row * 12}
                        y={30 + row * 40}
                        width={320 - row * 24}
                        height={36}
                        rx="6"
                        fill={row === active ? "rgba(125,46,104,0.08)" : "rgba(248,248,250,0.9)"}
                        stroke={row === active ? "#7D2E68" : "#E5E7EB"}
                        strokeWidth="1"
                      />
                      {row === active && (
                        <motion.circle
                          r="3"
                          fill="#7D2E68"
                          animate={{ cx: [60, 340], cy: [48 + active * 40, 48 + active * 40] }}
                          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </g>
                  ))}
                  <line x1="200" y1="30" x2="200" y2="190" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-text mt-4">{layer.title}</h3>
              <p className="text-sm text-muted mt-2 leading-relaxed">{layer.description}</p>
              <ul className="flex flex-wrap gap-2 mt-4">
                {layer.items.map((item) => (
                  <li key={item} className="os-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </StoryReveal>
      </div>
    </StorySection>
  );
}
