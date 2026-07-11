"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { homeTechnology } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import { TECH_ECOSYSTEM_LOGOS } from "./technology-ecosystem-config";
import TechEcosystemAmbient from "./TechEcosystemAmbient";
import TechLogoCloud from "./TechLogoCloud";
import TechEcosystemStats from "./TechEcosystemStats";
import TechCategoryExplorer from "./TechCategoryExplorer";
import "./technology-ecosystem.css";

type CategoryId = (typeof homeTechnology.categories)[number]["id"];

export default function TechnologyEcosystem() {
  const [active, setActive] = useState<CategoryId>(homeTechnology.categories[0].id);
  const descriptionParagraphs = homeTechnology.description.split("\n\n").filter(Boolean);
  const sectionRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 45, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 18 });
  const parallaxX = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="tech-ecosystem-section scroll-mt-28"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TechEcosystemAmbient />

      <motion.div
        className="tech-eco-inner"
        style={{ x: parallaxX, y: parallaxY }}
      >
        <motion.header
          className="tech-eco-hero"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.65, ease: EASE_PREMIUM }}
        >
          <p className="tech-eco-eyebrow">{homeTechnology.label}</p>
          <h2 className="tech-eco-title">{homeTechnology.title}</h2>
          <div className="tech-eco-description">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="tech-eco-description-p">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.header>

        <TechLogoCloud logos={TECH_ECOSYSTEM_LOGOS} />
        <TechEcosystemStats />
        <TechCategoryExplorer active={active} onChange={setActive} />
      </motion.div>
    </section>
  );
}
