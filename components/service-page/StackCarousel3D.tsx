"use client";

import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { ServiceIconName } from "@/app/content/service-pages/types";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import Carousel3D from "../ui/Carousel3D";
import { SERVICE_ICONS } from "./service-icons";
import FormattedText from "../ui/FormattedText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: EASE_PREMIUM },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export type StackCarouselItem = {
  title?: string;
  description: string;
  icon?: ServiceIconName;
  photo?: string;
};

function FacePhoto({ src, className = "carousel3d-face-photo" }: { src: string; className?: string }) {
  return (
    <div className={className} aria-hidden>
      <img src={src} alt="" className="carousel3d-face-photo-img" loading="lazy" />
    </div>
  );
}

function useMinWidth(minWidth: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [minWidth]);

  return matches;
}

function StackGrid({ items, compact }: { items: StackCarouselItem[]; compact?: boolean }) {
  return (
    <motion.div
      className={`mvp-cap-grid mvp-deliverables-grid${compact ? " svc-stack-grid--compact" : ""}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {items.map((item, i) => {
        const Icon = item.icon ? SERVICE_ICONS[item.icon] : null;
        return (
          <motion.article
            key={item.title ?? item.description.slice(0, 48)}
            className={`mvp-glass-card mvp-cap-card mvp-deliverable-card${item.photo ? " mvp-deliverable-card--split" : ""}`}
            custom={i}
            variants={fadeUp}
          >
            {item.photo ? (
              <div className="stack-card-split">
                <FacePhoto src={item.photo} className="stack-card-photo" />
                <div className="stack-card-split-copy">
                  {Icon && (
                    <div className="mvp-feature-icon">
                      <Icon size={20} aria-hidden />
                    </div>
                  )}
                  {item.title ? <h3>{item.title}</h3> : null}
                  <p>
                    <FormattedText text={item.description} />
                  </p>
                </div>
              </div>
            ) : (
              <>
                {Icon && (
                  <div className="mvp-feature-icon">
                    <Icon size={20} aria-hidden />
                  </div>
                )}
                {item.title ? <h3>{item.title}</h3> : null}
                <p>
                  <FormattedText text={item.description} />
                </p>
              </>
            )}
          </motion.article>
        );
      })}
    </motion.div>
  );
}

function StackCarousel3D({
  items,
  variant = "default",
}: {
  items: StackCarouselItem[];
  variant?: "default" | "compact" | "grid" | "prose";
}) {
  const reducedMotion = useReducedMotion();
  const isDesktop = useMinWidth(768);
  const compact = variant === "compact" || variant === "grid" || variant === "prose";
  const showCarousel = variant !== "grid" && variant !== "prose" && isDesktop && !reducedMotion;
  const hasPhotos = items.some((item) => Boolean(item.photo));

  if (!showCarousel) {
    return <StackGrid items={items} compact={compact} />;
  }

  const radius = items.length <= 4 ? 260 : items.length <= 6 ? 300 : 340;

  const faces = items.map((item) => {
    const Icon = item.icon ? SERVICE_ICONS[item.icon] : null;
    return {
      id: item.title ?? item.description.slice(0, 48),
      content: item.photo ? (
        <div className="carousel3d-face-layout carousel3d-face-layout--split">
          <FacePhoto src={item.photo} />
          <div className="carousel3d-face-copy">
            {Icon ? (
              <div className="carousel3d-face-icon">
                <Icon size={14} aria-hidden />
              </div>
            ) : null}
            {item.title ? (
              <h3 className="carousel3d-face-title">{item.title}</h3>
            ) : null}
            <p className="carousel3d-face-desc">
              <FormattedText text={item.description} />
            </p>
          </div>
        </div>
      ) : (
        <div className="carousel3d-face-layout">
          <div className="carousel3d-face-copy">
            {Icon ? (
              <div className="carousel3d-face-icon">
                <Icon size={14} aria-hidden />
              </div>
            ) : null}
            {item.title ? (
              <h3 className="carousel3d-face-title">{item.title}</h3>
            ) : null}
            <p className="carousel3d-face-desc">
              <FormattedText text={item.description} />
            </p>
          </div>
        </div>
      ),
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE_PREMIUM }}
    >
      <Carousel3D
        faces={faces}
        radius={radius}
        duration={60}
        className={[
          compact ? "carousel3d-wrap--compact" : "",
          hasPhotos ? "carousel3d-wrap--photos carousel3d-wrap--split" : "",
        ]
          .filter(Boolean)
          .join(" ") || undefined}
      />
    </motion.div>
  );
}

export default memo(StackCarousel3D);
