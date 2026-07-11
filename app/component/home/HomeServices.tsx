"use client";

import "./services-showcase.css";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Users,
  Monitor,
  Box,
  Cloud,
  Code2,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useRef, useState, type TouchEvent } from "react";
import { homeServices } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import ServicesAmbient from "./ServicesAmbient";
import ServiceShowcasePanel from "./ServiceShowcasePanel";

const icons: LucideIcon[] = [Sparkles, Bot, Users, Monitor, Box, Cloud, Code2];

export default function HomeServices() {
  type ServiceId = (typeof homeServices.items)[number]["id"];
  const [activeId, setActiveId] = useState<ServiceId>(homeServices.items[0].id);
  const touchStartX = useRef(0);

  const activeIndex = homeServices.items.findIndex((item) => item.id === activeId);
  const activeService = homeServices.items[activeIndex >= 0 ? activeIndex : 0];
  const activeIcon = icons[activeIndex >= 0 ? activeIndex : 0] ?? Sparkles;

  const selectService = useCallback((id: ServiceId) => {
    setActiveId(id);
  }, []);

  const goToRelative = useCallback(
    (delta: number) => {
      const idx = homeServices.items.findIndex((item) => item.id === activeId);
      const next =
        (idx + delta + homeServices.items.length) % homeServices.items.length;
      setActiveId(homeServices.items[next].id);
    },
    [activeId],
  );

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      const diff = e.changedTouches[0].clientX - touchStartX.current;
      if (Math.abs(diff) < 48) return;
      goToRelative(diff < 0 ? 1 : -1);
    },
    [goToRelative],
  );

  const description = homeServices.description.trim();

  return (
    <section id="services" className="svc-section scroll-mt-28">
      <ServicesAmbient />

      <div className="svc-inner">
        <motion.header
          className="svc-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="svc-eyebrow">{homeServices.label}</p>
          <h2 className="svc-title">{homeServices.title}</h2>
          {description ? <p className="svc-description">{description}</p> : null}
        </motion.header>

        <div className="svc-showcase">
          <motion.nav
            className="svc-showcase-nav"
            aria-label="Services"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          >
            <ul className="svc-nav-list">
              {homeServices.items.map((service, i) => {
                const isActive = service.id === activeId;
                const Icon = icons[i] ?? Sparkles;

                return (
                  <motion.li
                    key={service.id}
                    className="svc-nav-item"
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.04 + i * 0.05,
                      ease: EASE_PREMIUM,
                    }}
                  >
                    <button
                      type="button"
                      className={`svc-nav-btn${isActive ? " is-active" : ""}`}
                      onMouseEnter={() => selectService(service.id)}
                      onFocus={() => selectService(service.id)}
                      onClick={() => selectService(service.id)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <span className="svc-nav-indicator" aria-hidden />
                      <span className="svc-nav-num">{String(i + 1).padStart(2, "0")}</span>
                      <span className="svc-nav-icon" aria-hidden>
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                      <span className="svc-nav-label">{service.title}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>

          <div
            className="svc-panel-area"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <ServiceShowcasePanel
              service={activeService}
              icon={activeIcon}
              index={activeIndex >= 0 ? activeIndex : 0}
            />
            <div className="svc-swipe-hint" aria-hidden>
              Swipe to explore services
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
