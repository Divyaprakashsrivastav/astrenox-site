"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";
import type { NavMegaGroup, NavMegaItem, NavMegaLayout } from "@/app/content/nav-config";

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

const MegaCard = memo(function MegaCard({
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
  const card = (
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
  );

  if (!featured) return card;

  return <div className="dock-mega-featured-wrap">{card}</div>;
});

function NavMegaMenu({
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
    <div
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
          <p className="dock-mega-section-label">{section.title}</p>
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
    </div>
  );
}

export default memo(NavMegaMenu);
