"use client";

import { motion } from "framer-motion";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import { homeTechnology } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

export default function TechnologyEcosystem() {
  return (
    <DesignSection id="technology" flow border={false} ambient={false} className="tech-grid-section">
      <DesignHeader
        flow
        label={homeTechnology.label}
        title={homeTechnology.title}
        description={homeTechnology.description}
      />

      <div>
        <Stagger className="tech-category-grid">
          {homeTechnology.categories.map((category) => (
            <StaggerItem key={category.id}>
              <motion.article
                className="tech-category-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                <h3 className="tech-category-title">{category.title}</h3>
                <ul className="tech-category-list">
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </DesignSection>
  );
}
