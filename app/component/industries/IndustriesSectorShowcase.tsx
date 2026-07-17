"use client";

import { motion } from "framer-motion";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useState } from "react";
import { industriesContent } from "@/app/content/industries-content";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesSectorPanel from "./IndustriesSectorPanel";
import "../home/industries-sector.css";
import "./industries-page.css";

const SECTOR_ICONS: LucideIcon[] = [Landmark, Truck, HeartPulse, ShoppingBag, Factory];

export default function IndustriesSectorShowcase() {
  const { sectors } = industriesContent;
  type SectorId = (typeof sectors)[number]["id"];
  const [activeId, setActiveId] = useState<SectorId>(sectors[0].id);

  const activeIndex = sectors.findIndex((sector) => sector.id === activeId);
  const activeSector = sectors[activeIndex >= 0 ? activeIndex : 0];
  const activeIcon = SECTOR_ICONS[activeIndex >= 0 ? activeIndex : 0] ?? Landmark;

  const selectSector = useCallback((id: SectorId) => {
    setActiveId(id);
  }, []);

  return (
    <section className="ind-page-showcase" aria-labelledby="ind-sectors-title">
      <motion.div
        className="mvp-section-header ind-page-sectors-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: EASE_PREMIUM }}
      >
        <p className="mvp-eyebrow">Industry Verticals</p>
        <h2 id="ind-sectors-title" className="mvp-section-title">
          Deep expertise across critical sectors
        </h2>
      </motion.div>

      <div className="ind-showcase ind-page-showcase-grid">
        <nav className="ind-showcase-nav" aria-label="Industry sectors">
          <ul className="ind-nav-list">
            {sectors.map((sector, i) => {
              const isActive = sector.id === activeId;
              const Icon = SECTOR_ICONS[i] ?? Landmark;

              return (
                <li key={sector.id} className="ind-nav-item">
                  <button
                    type="button"
                    className={`ind-nav-btn${isActive ? " is-active" : ""}`}
                    onMouseEnter={() => selectSector(sector.id)}
                    onFocus={() => selectSector(sector.id)}
                    onClick={() => selectSector(sector.id)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="ind-nav-indicator" aria-hidden />
                    <span className="ind-nav-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="ind-nav-icon" aria-hidden>
                      <Icon size={16} strokeWidth={1.75} />
                    </span>
                    <span className="ind-nav-label">{sector.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <IndustriesSectorPanel
          sector={activeSector}
          icon={activeIcon}
          index={activeIndex >= 0 ? activeIndex : 0}
        />
      </div>
    </section>
  );
}
