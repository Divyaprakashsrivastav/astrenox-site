"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { NavMegaGroup, NavMegaItem } from "@/app/content/nav-config";

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
  layout?: "grid" | "stack";
  onNavigate?: () => void;
};

function MegaCard({
  item,
  onNavigate,
  compact,
}: {
  item: NavMegaItem;
  onNavigate?: () => void;
  compact?: boolean;
}) {
  const Icon = item.icon;
  return (
    <motion.div variants={cardMotion}>
      <Link
        href={item.href}
        role="menuitem"
        className={`dock-mega-card ${compact ? "dock-mega-card--compact" : ""}`}
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

  return (
    <motion.div
      id={menuId}
      role="menu"
      aria-label={group.label}
      className={`dock-mega-panel ${stack ? "dock-mega-panel--stack" : ""}`}
      variants={panelMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {group.items.length > 0 && (
        <div className={`dock-mega-grid ${stack ? "dock-mega-grid--single" : ""}`}>
          {group.items.map((item) => (
            <MegaCard key={item.href} item={item} onNavigate={onNavigate} compact={stack} />
          ))}
        </div>
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
