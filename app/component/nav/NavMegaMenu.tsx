"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NavMegaGroup, NavMegaItem, NavMegaLayout } from "@/app/content/nav-config";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const panelMotion = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: EASE, staggerChildren: 0.032, delayChildren: 0.04 },
  },
  exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.22, ease: EASE } },
};

const cardMotion = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: EASE } },
};

type NavMegaMenuProps = {
  group: NavMegaGroup;
  menuId: string;
  layout?: NavMegaLayout;
  onNavigate?: () => void;
};

function MegaCard({
  item,
  onNavigate,
  compact,
  featured,
}: {
  item: NavMegaItem;
  onNavigate?: () => void;
  compact?: boolean;
  featured?: boolean;
}) {
  const Icon = item.icon;
  return (
    <motion.div variants={cardMotion} className={featured ? "dock-mega-featured-wrap" : undefined}>
      <Link
        href={item.href}
        role="menuitem"
        className={[
          "dock-mega-card",
          compact ? "dock-mega-card--compact" : "",
          featured ? "dock-mega-card--featured" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={onNavigate}
      >
        <span className="dock-mega-card-icon" aria-hidden>
          <Icon size={20} strokeWidth={1.65} />
        </span>
        <span className="dock-mega-card-copy">
          <span className="dock-mega-card-title">{item.label}</span>
          <span className="dock-mega-card-desc">{item.description}</span>
        </span>
        <ArrowRight size={15} strokeWidth={2} className="dock-mega-card-arrow" aria-hidden />
      </Link>
    </motion.div>
  );
}

export default function NavMegaMenu({
  group,
  menuId,
  layout = "grid",
  onNavigate,
}: NavMegaMenuProps) {
  const stack = layout === "stack";
  const catalog = layout === "catalog";
  const catalogGridItems = catalog ? group.items.slice(0, -1) : [];
  const catalogFeatured = catalog && group.items.length > 0 ? group.items[group.items.length - 1] : null;

  return (
    <motion.div
      id={menuId}
      role="menu"
      aria-label={group.label}
      className={[
        "dock-mega-panel",
        stack ? "dock-mega-panel--stack" : "",
        catalog ? "dock-mega-panel--catalog" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      variants={panelMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {catalog ? (
        <div className="dock-mega-catalog">
          <div className="dock-mega-grid dock-mega-grid--catalog">
            {catalogGridItems.map((item) => (
              <MegaCard key={item.href} item={item} onNavigate={onNavigate} />
            ))}
          </div>
          {catalogFeatured && (
            <MegaCard item={catalogFeatured} onNavigate={onNavigate} featured />
          )}
        </div>
      ) : (
        group.items.length > 0 && (
          <div className={`dock-mega-grid ${stack ? "dock-mega-grid--single" : ""}`}>
            {group.items.map((item) => (
              <MegaCard key={item.href} item={item} onNavigate={onNavigate} compact={stack} />
            ))}
          </div>
        )
      )}
      {group.sections?.map((section) => (
        <div key={section.title} className="dock-mega-section">
          <motion.p className="dock-mega-section-label" variants={cardMotion}>
            {section.title}
          </motion.p>
          <div className="dock-mega-grid dock-mega-grid--single">
            {section.items.map((item) => (
              <MegaCard key={item.href} item={item} onNavigate={onNavigate} compact />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
