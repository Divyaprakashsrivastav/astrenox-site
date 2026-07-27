"use client";

import { memo } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import { missionCriticalSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

const ORBIT_POSITIONS = [
  { x: "50%", y: "4%", transform: "translate(-50%, 0)" },
  { x: "92%", y: "35%", transform: "translate(-50%, -50%)" },
  { x: "78%", y: "82%", transform: "translate(-50%, -50%)" },
  { x: "22%", y: "82%", transform: "translate(-50%, -50%)" },
];

function MissionCriticalAI() {
  const reduced = useReducedMotion();
  const items = missionCriticalSection.methodology.items;

  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={missionCriticalSection.label}
        title={missionCriticalSection.title}
        description={missionCriticalSection.description}
        centered
      />

      <motion.div
        className="products-glass p-8 mt-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: EASE_PREMIUM }}
      >
        <h3 className="products-card-title">{missionCriticalSection.methodology.title}</h3>
        <p className="products-body mt-4"><FormattedText text={missionCriticalSection.methodology.intro} /></p>
      </motion.div>

      <div className="products-orbital mt-12">
        <div className={`products-orbital-ring ${reduced ? "" : "products-orbit-spin"}`} />
        <div className="products-orbital-core">{missionCriticalSection.methodology.title}</div>
        {items.slice(0, 4).map((item, i) => {
          const label = item.split(":")[0];
          return (
            <motion.div
              key={item}
              className="products-orbital-node"
              style={{
                left: ORBIT_POSITIONS[i].x,
                top: ORBIT_POSITIONS[i].y,
                transform: ORBIT_POSITIONS[i].transform,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              {label}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {items.map((item) => (
          <motion.div
            key={item}
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
            className="products-glass p-5"
          >
            <p className="products-body text-sm">{item}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default memo(MissionCriticalAI);
