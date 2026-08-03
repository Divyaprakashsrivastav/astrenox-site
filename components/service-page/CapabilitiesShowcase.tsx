"use client";

import { memo, useCallback, useState } from "react";
import type { ServiceIconName } from "@/app/content/service-pages/types";
import { SERVICE_ICONS } from "./service-icons";
import CapabilitiesShowcasePanel, {
  type CapabilityShowcaseItem,
} from "./CapabilitiesShowcasePanel";
import "../home/industries-sector.css";
import "./capabilities-showcase.css";

type CapabilitiesShowcaseProps = {
  items: CapabilityShowcaseItem[];
  icons: ServiceIconName[];
  navLabel?: string;
  compact?: boolean;
};

function CapabilitiesShowcase({
  items,
  icons,
  navLabel = "Capabilities",
  compact = false,
}: CapabilitiesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = activeIndex >= 0 && activeIndex < items.length ? activeIndex : 0;
  const activeItem = items[safeIndex];
  const ActiveIcon = SERVICE_ICONS[icons[safeIndex] ?? icons[0]];

  const selectItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (!activeItem) return null;

  return (
    <div
      className={`ind-showcase svc-cap-showcase${compact ? " svc-cap-showcase--compact" : ""}`}
    >
      <nav className="ind-showcase-nav" aria-label={navLabel}>
        <ul className="ind-nav-list">
          {items.map((item, i) => {
            const isActive = i === safeIndex;
            const Icon = SERVICE_ICONS[icons[i]];

            return (
              <li key={item.title} className="ind-nav-item">
                <button
                  type="button"
                  className={`ind-nav-btn${isActive ? " is-active" : ""}`}
                  onMouseEnter={() => selectItem(i)}
                  onFocus={() => selectItem(i)}
                  onClick={() => selectItem(i)}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span className="ind-nav-indicator" aria-hidden />
                  <span className="ind-nav-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="ind-nav-icon" aria-hidden>
                    <Icon size={16} strokeWidth={1.75} />
                  </span>
                  <span className="ind-nav-label">{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <CapabilitiesShowcasePanel item={activeItem} icon={ActiveIcon} index={safeIndex} />
    </div>
  );
}

export default memo(CapabilitiesShowcase);
