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
            <motion.li
              key={logo.id}
              className="tech-cloud-item"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
                width: pos.size,
                height: pos.size,
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.02 + i * 0.02,
                ease: EASE_PREMIUM,
              }}
              whileHover={reduced ? undefined : { scale: 1.12, zIndex: 10 }}
            >
              <motion.div
                className="tech-cloud-item-inner"
                animate={
                  reduced
                    ? undefined
                    : {
                        y: [0, -3 - (i % 2), 0],
                      }
                }
                transition={
                  reduced
                    ? undefined
                    : {
                        duration: pos.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: pos.delay,
                      }
                }
              >
                <span className="tech-cloud-item-glow" aria-hidden />
                <TechSvgLogo file={logo.file} name={logo.name} size={pos.size} />
              </motion.div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
