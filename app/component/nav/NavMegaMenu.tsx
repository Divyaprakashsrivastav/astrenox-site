"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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
  panelVariant?: "infra";
};

function isItemActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function MegaCard({
  item,
  onNavigate,
  compact,
  featured,
  active,
}: {
  item: NavMegaItem;
  onNavigate?: () => void;
  compact?: boolean;
  featured?: boolean;
  active?: boolean;
}) {
  return (
    <motion.div variants={cardMotion} className={featured ? "dock-mega-featured-wrap" : undefined}>
      <Link
        href={item.href}
        role="menuitem"
        className={[
          "dock-mega-card",
          compact ? "dock-mega-card--compact" : "",
          featured ? "dock-mega-card--featured" : "",
          active ? "dock-mega-card--active" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
      >
        <span className="dock-mega-card-copy">
          <span className="dock-mega-card-title">{item.label}</span>
          <span className="dock-mega-card-desc">{item.description}</span>
        </span>
        <span className="dock-mega-card-arrow" aria-hidden>
          →
        </span>
      </Link>
    </motion.div>
  );
}

export default function NavMegaMenu({
  group,
  menuId,
  layout = "grid",
  onNavigate,
  panelVariant,
}: NavMegaMenuProps) {
  const pathname = usePathname();
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
        panelVariant === "infra" ? "dock-mega-panel--infra" : "",
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
              <MegaCard
                key={item.href}
                item={item}
                onNavigate={onNavigate}
                active={isItemActive(pathname, item.href)}
              />
            ))}
          </div>
          {catalogFeatured && (
            <MegaCard
              item={catalogFeatured}
              onNavigate={onNavigate}
              featured
              active={isItemActive(pathname, catalogFeatured.href)}
            />
          )}
        </div>
      ) : (
        group.items.length > 0 && (
          <div className={`dock-mega-grid ${stack ? "dock-mega-grid--single" : ""}`}>
            {group.items.map((item) => (
              <MegaCard
                key={item.href}
                item={item}
                onNavigate={onNavigate}
                compact={stack}
                active={isItemActive(pathname, item.href)}
              />
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
              <MegaCard
                key={item.href}
                item={item}
                onNavigate={onNavigate}
                compact
                active={isItemActive(pathname, item.href)}
              />
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
