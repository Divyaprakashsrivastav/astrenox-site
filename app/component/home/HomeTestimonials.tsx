"use client";

import "./testimonials-showcase.css";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Building2,
  HardHat,
  FileSearch,
  Factory,
  Truck,
  Briefcase,
  Check,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useRef, useState, type TouchEvent } from "react";
import { homeTestimonials } from "@/app/content/homepage-content";
import FormattedText from "../ui/FormattedText";
import { EASE_PREMIUM } from "../v2/motion";
import TestimonialsAmbient from "./TestimonialsAmbient";
import TestimonialShowcasePanel from "./TestimonialShowcasePanel";

const TRUST_BADGES = [
  "Enterprise Delivery",
  "Confidential Engagement",
  "Long-term Partnership",
  "Verified Impact",
] as const;

const icons: LucideIcon[] = [
  HeartPulse,
  Building2,
  HardHat,
  FileSearch,
  Factory,
  Truck,
  Briefcase,
];

function testimonialKey(item: (typeof homeTestimonials.items)[number]) {
  return `${item.author}-${item.role}`;
}

export default function HomeTestimonials() {
  const [activeKey, setActiveKey] = useState(() =>
    testimonialKey(homeTestimonials.items[0]),
  );
  const touchStartX = useRef(0);

  const activeIndex = homeTestimonials.items.findIndex(
    (item) => testimonialKey(item) === activeKey,
  );
  const activeItem =
    homeTestimonials.items[activeIndex >= 0 ? activeIndex : 0];

  const goToRelative = useCallback(
    (delta: number) => {
      const idx = homeTestimonials.items.findIndex(
        (item) => testimonialKey(item) === activeKey,
      );
      const next =
        (idx + delta + homeTestimonials.items.length) %
        homeTestimonials.items.length;
      setActiveKey(testimonialKey(homeTestimonials.items[next]));
    },
    [activeKey],
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

  const description = homeTestimonials.description.trim();

  return (
    <section id="testimonials" className="tst-section scroll-mt-28">
      <TestimonialsAmbient />

      <div className="tst-inner">
        <motion.header
          className="tst-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="tst-eyebrow">{homeTestimonials.label}</p>
          <h2 className="tst-title">{homeTestimonials.title}</h2>
          {description ? (
            <p className="tst-description">
              <FormattedText text={description} />
            </p>
          ) : null}
        </motion.header>

        <motion.ul
          className="tst-trust-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE_PREMIUM }}
          aria-label="Engagement trust indicators"
        >
          {TRUST_BADGES.map((badge, i) => (
            <motion.li
              key={badge}
              className="tst-trust-badge"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: 0.05 + i * 0.06, ease: EASE_PREMIUM }}
              whileHover={{ y: -2 }}
            >
              <Check className="tst-trust-icon" size={13} strokeWidth={2.5} aria-hidden />
              {badge}
            </motion.li>
          ))}
        </motion.ul>

        <div
          className="tst-showcase"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.nav
            className="tst-showcase-nav"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: EASE_PREMIUM }}
            aria-label="Client testimonials"
          >
            <ul className="tst-nav-list">
              {homeTestimonials.items.map((item, i) => {
                const key = testimonialKey(item);
                const isActive = key === activeKey;
                const Icon = icons[i] ?? HeartPulse;

                return (
                  <li key={key} className="tst-nav-item">
                    <button
                      type="button"
                      className={`tst-nav-btn${isActive ? " is-active" : ""}`}
                      onClick={() => setActiveKey(key)}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="tst-nav-indicator"
                          className="tst-nav-indicator"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <span className="tst-nav-icon" aria-hidden>
                        <Icon size={18} strokeWidth={1.75} />
                      </span>
                      <span className="tst-nav-text">
                        <span className="tst-nav-industry">{item.projectType}</span>
                        <span className="tst-nav-role">{item.role}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.nav>

          <TestimonialShowcasePanel
            item={activeItem}
            panelKey={activeKey}
          />
        </div>
      </div>
    </section>
  );
}
