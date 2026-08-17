"use client";

import { AnimatePresence, motion } from "framer-motion";
import { homeTechnology } from "@/app/content/homepage-content";
import { EASE_PREMIUM } from "../v2/motion";
import TechCategoryContent from "./TechCategoryContent";

type CategoryId = (typeof homeTechnology.categories)[number]["id"];

type TechCategoryExplorerProps = {
  active: CategoryId;
  onChange: (id: CategoryId) => void;
};

export default function TechCategoryExplorer({ active, onChange }: TechCategoryExplorerProps) {
  const activeCategory =
    homeTechnology.categories.find((c) => c.id === active) ?? homeTechnology.categories[0];

  return (
    <div className="tech-eco-explorer">
      {/* Mobile / tablet segmented tabs */}
      <div className="tech-eco-tabs" role="tablist" aria-label="Technology ecosystem categories">
        <span className="tech-eco-tabs-track" aria-hidden />
        {homeTechnology.categories.map((category) => {
          const isActive = category.id === active;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`tech-eco-tab${isActive ? " is-active" : ""}`}
              onClick={() => onChange(category.id)}
            >
              {isActive ? (
                <motion.span
                  layoutId="tech-eco-tab-pill"
                  className="tech-eco-tab-indicator"
                  transition={{ duration: 0.38, ease: EASE_PREMIUM }}
                />
              ) : null}
              <span className="tech-eco-tab-label">{category.title}</span>
            </button>
          );
        })}
      </div>

      <div className="tech-eco-split">
        {/* Desktop sticky side nav */}
        <nav className="tech-eco-side-nav" aria-label="Category navigation">
          <ul className="tech-eco-side-list">
            {homeTechnology.categories.map((category) => {
              const isActive = category.id === active;
              return (
                <li key={category.id}>
                  <button
                    type="button"
                    className={`tech-eco-side-btn${isActive ? " is-active" : ""}`}
                    onClick={() => onChange(category.id)}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span className="tech-eco-side-indicator" aria-hidden />
                    <span className="tech-eco-side-label">{category.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Content card */}
        <div className="tech-eco-content-shell">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeCategory.id}
              className="tech-eco-content-card"
              initial={{ opacity: 0, x: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -16, filter: "blur(4px)" }}
              transition={{ duration: 0.42, ease: EASE_PREMIUM }}
            >
              <span className="tech-eco-card-border" aria-hidden />
              <div className="tech-eco-card-scroll">
                <h3 className="tech-eco-content-title">{activeCategory.title}</h3>
                <TechCategoryContent
                  items={activeCategory.items}
                  categoryKey={activeCategory.id}
                />
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
