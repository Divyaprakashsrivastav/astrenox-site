"use client";

import { memo, useCallback, useState } from "react";
import Image from "next/image";
import type { ServiceIconName } from "@/app/content/service-pages/types";
import { SERVICE_ICONS } from "./service-icons";
import CapabilitiesShowcasePanel, {
  type CapabilityShowcaseItem,
} from "./CapabilitiesShowcasePanel";
import FormattedText, { toCopyLines } from "../ui/FormattedText";
import "../home/industries-sector.css";
import "./capabilities-showcase.css";

type CapabilitiesShowcaseProps = {
  items: CapabilityShowcaseItem[];
  icons: ServiceIconName[];
  navLabel?: string;
  compact?: boolean;
  variant?: "nav" | "grid";
};

function CapabilitiesShowcase({
  items,
  icons,
  navLabel = "Capabilities",
  compact = false,
  variant = "nav",
}: CapabilitiesShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeIndex = activeIndex >= 0 && activeIndex < items.length ? activeIndex : 0;
  const activeItem = items[safeIndex];
  const ActiveIcon = SERVICE_ICONS[icons[safeIndex] ?? icons[0]];

  const selectItem = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const hasMedia = items.some((item) => Boolean(item.image));

  if (!activeItem) return null;

  if (variant === "grid") {
    return (
      <div className="svc-cap-simple-grid">
        {items.map((item) => {
          const body = (item.paragraphs ?? (item.description ? [item.description] : [])).flatMap(
            toCopyLines,
          );

          return (
            <div key={item.title} className="mvp-glass-card svc-cap-simple-card">
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  width={1600}
                  height={900}
                  className="svc-cap-simple-img"
                  sizes="(max-width: 767px) 92vw, 40vw"
                />
              ) : null}
              <h3 className="svc-cap-simple-title">{item.title}</h3>
              {body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="svc-cap-simple-copy">
                  <FormattedText text={paragraph} />
                </p>
              ))}
              {item.enables && item.enables.length > 0 ? (
                <ul className="svc-cap-simple-list">
                  {item.enables.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className={`ind-showcase svc-cap-showcase${compact ? " svc-cap-showcase--compact" : ""}${hasMedia ? " svc-cap-showcase--media" : ""}`}
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
