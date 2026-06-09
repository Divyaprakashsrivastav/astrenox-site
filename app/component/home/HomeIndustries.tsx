"use client";

import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Truck,
  GraduationCap,
  Shield,
  Briefcase,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Stagger, StaggerItem } from "../design/FadeUp";
import { homeIndustries } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";

const icons: LucideIcon[] = [
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Truck,
  GraduationCap,
  Shield,
  Briefcase,
  Cpu,
];

export default function HomeIndustries() {
  return (
    <DesignSection id="industries" className="ax-section-surface">
      <DesignHeader
        label={homeIndustries.label}
        title={homeIndustries.title}
        description={homeIndustries.description}
      />

      <Stagger className="ind-grid">
        {homeIndustries.items.map((industry, i) => {
          const Icon = icons[i] ?? Factory;
          return (
            <StaggerItem key={industry.id}>
              <motion.article
                className="ind-card"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                data-cursor-hover
              >
                <div className="ind-card-glow" aria-hidden />
                <div className="ind-card-icon">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="ind-card-title">{industry.title}</h3>
                <p className="ind-card-desc">{industry.description}</p>
                <ul className="ind-card-cases">
                  {industry.useCases.slice(0, 2).map((uc) => (
                    <li key={uc}>{uc}</li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          );
        })}
      </Stagger>
    </DesignSection>
  );
}
