"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Brain, Eye, Rocket, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Fragment, useState } from "react";
import DesignSection from "../design/DesignSection";
import { FadeUp } from "../design/FadeUp";
import { useReducedMotion } from "../features/useReducedMotion";
import { homeOperatingSystem } from "@/app/content/homepage-content";
import { MOTION } from "../motion/home-motion";

const LAYER_ICONS: Record<string, LucideIcon> = {
  perception: Eye,
  intelligence: Brain,
  orchestration: Workflow,
  execution: Rocket,
};

const CARD_TRANSITION = {
  duration: 0.34,
  ease: MOTION.lineReveal.ease,
};

function FlowConnector({
  index,
  reduced,
}: {
  index: number;
  reduced: boolean;
}) {
  const pulseTransition = {
    duration: 3.8,
    repeat: Infinity,
    ease: "linear" as const,
    delay: index * 0.55,
  };

  return (
    <div className="os-flow-connector" aria-hidden>
      <span className="os-flow-connector-line" />
      {!reduced && (
        <>
          <motion.span
            className="os-flow-connector-pulse os-flow-connector-pulse--horizontal"
            animate={{ left: ["0%", "calc(100% - 5px)"] }}
            transition={pulseTransition}
          />
          <motion.span
            className="os-flow-connector-pulse os-flow-connector-pulse--vertical"
            animate={{ top: ["0%", "calc(100% - 5px)"] }}
            transition={pulseTransition}
          />
        </>
      )}
    </div>
  );
}

export default function OperatingSystemSection() {
  const reduced = useReducedMotion();
  const { layers } = homeOperatingSystem;
  const [activeId, setActiveId] = useState<string | null>(null);

  const setActive = (id: string | null) => {
    if (!reduced) setActiveId(id);
  };

  return (
    <DesignSection
      id={homeOperatingSystem.id}
      className="os-flow-section ax-section-compact"
    >
      <FadeUp className="os-flow-header">
        <p className="ax-label">{homeOperatingSystem.label}</p>
        <h2 className="ax-title">{homeOperatingSystem.title}</h2>
      </FadeUp>

      <div className="os-flow-track">
        {layers.map((layer, index) => {
          const Icon = LAYER_ICONS[layer.id] ?? Eye;
          const isActive = activeId === layer.id;
          const isLast = index === layers.length - 1;

          return (
            <Fragment key={layer.id}>
              <motion.article
                className="os-flow-card"
                data-active={isActive || undefined}
                onHoverStart={() => setActive(layer.id)}
                onHoverEnd={() => setActive(null)}
                onFocus={() => setActive(layer.id)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setActive(null);
                  }
                }}
                tabIndex={0}
                data-cursor-hover
                animate={
                  reduced
                    ? undefined
                    : {
                        flexGrow: isActive ? 1.28 : activeId ? 0.92 : 1,
                      }
                }
                transition={CARD_TRANSITION}
                whileHover={reduced ? undefined : { y: -4 }}
              >
                <div className="os-flow-card-icon" aria-hidden>
                  <Icon size={18} strokeWidth={1.75} />
                </div>
                <div className="os-flow-card-body">
                  <h3 className="os-flow-card-title">{layer.title}</h3>
                  <p className="os-flow-card-desc">{layer.description}</p>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.ul
                        className="os-flow-capabilities"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={CARD_TRANSITION}
                      >
                        {layer.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
              {!isLast && <FlowConnector index={index} reduced={reduced} />}
            </Fragment>
          );
        })}
      </div>
    </DesignSection>
  );
}
