"use client";

import "./industries-sector.css";
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
import { useCallback, useState } from "react";
import { homeIndustries } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesAmbient from "./IndustriesAmbient";
import IndustryShowcasePanel from "./IndustryShowcasePanel";

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
  type IndustryId = (typeof homeIndustries.items)[number]["id"];
  const [activeId, setActiveId] = useState<IndustryId>(homeIndustries.items[0].id);
  const descriptionParagraphs = homeIndustries.description.split("\n\n").filter(Boolean);

  const activeIndex = homeIndustries.items.findIndex((item) => item.id === activeId);
  const activeIndustry = homeIndustries.items[activeIndex >= 0 ? activeIndex : 0];
  const activeIcon = icons[activeIndex >= 0 ? activeIndex : 0] ?? Factory;

  const selectIndustry = useCallback((id: IndustryId) => {
    setActiveId(id);
  }, []);

  return (
    <section id="industries" className="ind-section scroll-mt-28">
      <IndustriesAmbient />

      <div className="ind-inner">
        <motion.header
          className="ind-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="ind-eyebrow">{homeIndustries.label}</p>
          <h2 className="ind-title">{homeIndustries.title}</h2>
          <div className="ind-description">
            {descriptionParagraphs.map((paragraph) => (
              <p key={paragraph} className="ind-description-p">
                <FormattedText text={paragraph} />
              </p>
            ))}
          </div>
        </motion.header>

        <div className="ind-showcase">
          <nav className="ind-showcase-nav" aria-label="Industries">
            <ul className="ind-nav-list">
              {homeIndustries.items.map((industry, i) => {
                const isActive = industry.id === activeId;
                const Icon = icons[i] ?? Factory;

                return (
                  <li key={industry.id} className="ind-nav-item">
                    <button
                      type="button"
                      className={`ind-nav-btn${isActive ? " is-active" : ""}`}
                      onMouseEnter={() => selectIndustry(industry.id)}
                      onFocus={() => selectIndustry(industry.id)}
                      onClick={() => selectIndustry(industry.id)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="ind-nav-indicator" aria-hidden />
                      <span className="ind-nav-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="ind-nav-icon" aria-hidden>
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      <span className="ind-nav-label">{industry.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <IndustryShowcasePanel
            industry={activeIndustry}
            icon={activeIcon}
            index={activeIndex >= 0 ? activeIndex : 0}
          />
        </div>
      </div>
    </section>
  );
}
