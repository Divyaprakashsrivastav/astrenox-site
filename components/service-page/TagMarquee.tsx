"use client";

import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";

function TagMarquee({ tags, label = "Topic tags" }: { tags: string[]; label?: string }) {
  const reduced = useReducedMotion();
  const track = useMemo(() => [...tags, ...tags], [tags]);

  if (tags.length === 0) return null;

  if (reduced) {
    return (
      <div className="mvp-tag-marquee-zone">
        <div className="mvp-pills mvp-tag-marquee-static" role="list" aria-label={label}>
          {tags.map((tag) => (
            <span key={tag} role="listitem" className="mvp-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="mvp-tag-marquee-zone"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: EASE_PREMIUM }}
    >
      <div className="mvp-tag-marquee" aria-label={label}>
        <ul className="mvp-tag-marquee-track">
          {track.map((tag, i) => (
            <li key={`${tag}-${i}`} className="mvp-tag-marquee-item">
              <span className="mvp-pill">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default memo(TagMarquee);
