"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";
import TechSvgLogo from "./TechSvgLogo";
import { getLogoCloudLayout } from "./tech-logo-cloud-layout";
import type { TechLogoDef } from "./technology-ecosystem-config";

type TechLogoCloudProps = {
  logos: readonly TechLogoDef[];
};

export default function TechLogoCloud({ logos }: TechLogoCloudProps) {
  const reduced = useReducedMotion();
  const layout = useMemo(() => getLogoCloudLayout(logos.length), [logos.length]);

  return (
    <div className="tech-cloud" aria-label="Technology partners">
      <div className="tech-cloud-glow" aria-hidden />
      <div className="tech-cloud-ring tech-cloud-ring--a" aria-hidden />
      <div className="tech-cloud-ring tech-cloud-ring--b" aria-hidden />

      <ul className="tech-cloud-logos">
        {logos.map((logo, i) => {
          const pos = layout[i];
          return (
            // Keep layout styles on a plain <li> so Framer Motion cannot
            // rewrite left/top/width during hydration (triggers nextjs-portal errors).
            <li
              key={logo.id}
              className="tech-cloud-item"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: `${pos.size}px`,
                height: `${pos.size}px`,
              }}
            >
              <motion.div
                className="tech-cloud-item-inner"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={reduced ? undefined : { scale: 1.12, zIndex: 10 }}
                animate={
                  reduced
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1, y: [0, -3 - (i % 2), 0] }
                }
                transition={
                  reduced
                    ? {
                        duration: 0.5,
                        delay: 0.02 + i * 0.02,
                        ease: EASE_PREMIUM,
                      }
                    : {
                        opacity: {
                          duration: 0.5,
                          delay: 0.02 + i * 0.02,
                          ease: EASE_PREMIUM,
                        },
                        scale: {
                          duration: 0.5,
                          delay: 0.02 + i * 0.02,
                          ease: EASE_PREMIUM,
                        },
                        y: {
                          duration: pos.duration,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: pos.delay,
                        },
                      }
                }
              >
                <span className="tech-cloud-item-glow" aria-hidden />
                <TechSvgLogo file={logo.file} name={logo.name} size={pos.size} />
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
