"use client";

import "./services-section.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { homeServices } from "@/app/content/homepage-content";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { EASE_PREMIUM } from "../v2/motion";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const listRef = useRef<HTMLUListElement>(null);
  const inView = useInView(listRef, { once: true, margin: "-8%" });

  return (
    <DesignSection id="services" flow border={false} ambient={false}>
      <div className="services-section">
        <DesignHeader
          flow
          label={homeServices.label}
          title={homeServices.title}
          description={homeServices.description.trim() || undefined}
        />

        <ul ref={listRef} className="services-section-list">
          {homeServices.items.map((service, i) => (
            <motion.li
              key={service.id}
              className="services-section-item"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.55,
                delay: 0.04 + i * 0.05,
                ease: EASE_PREMIUM,
              }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </DesignSection>
  );
}
