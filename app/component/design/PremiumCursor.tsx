"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { useReducedMotion } from "../features/useReducedMotion";

export default function PremiumCursor() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const ringX = useSpring(0, { stiffness: 120, damping: 18 });
  const ringY = useSpring(0, { stiffness: 120, damping: 18 });

  useEffect(() => {
    if (reduced) {
      setReady(false);
      return;
    }

    const fine = window.matchMedia("(pointer: fine)");
    if (!fine.matches) {
      setReady(false);
      return;
    }

    setReady(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseover", onOver);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseover", onOver);
    };
  }, [reduced, ringX, ringY]);

  if (!ready) return null;

  return (
    <>
      <motion.div
        className="ax-cursor-dot"
        style={{ left: pos.x, top: pos.y }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
        aria-hidden={true}
      />
      <motion.div
        className="ax-cursor-ring"
        style={{ x: ringX, y: ringY }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.2 }}
        aria-hidden={true}
      />
    </>
  );
}
