"use client";

import { AnimatePresence, motion, useMotionTemplate, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useCallback, useRef, type MouseEvent } from "react";
import { EASE_PREMIUM } from "../v2/motion";
import { useReducedMotion } from "../features/useReducedMotion";
import ServicePanelAmbient from "./ServicePanelAmbient";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  outcome: string;
  href: string;
};

type ServiceShowcasePanelProps = {
  service: ServiceItem;
  icon: LucideIcon;
  index: number;
};

export default function ServiceShowcasePanel({
  service,
  icon: Icon,
  index,
}: ServiceShowcasePanelProps) {
  const reduced = useReducedMotion();
  const shellRef = useRef<HTMLDivElement>(null);
  const parallaxX = useSpring(0, { stiffness: 120, damping: 22 });
  const parallaxY = useSpring(0, { stiffness: 120, damping: 22 });
  const panelShift = useMotionTemplate`translate(${parallaxX}px, ${parallaxY}px)`;

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduced || !shellRef.current) return;
      const rect = shellRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      parallaxX.set(x * 6);
      parallaxY.set(y * 4);
    },
    [reduced, parallaxX, parallaxY],
  );

  const handleMouseLeave = useCallback(() => {
    parallaxX.set(0);
    parallaxY.set(0);
  }, [parallaxX, parallaxY]);

  return (
    <motion.div
      ref={shellRef}
      className="svc-showcase-panel-shell"
      initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: EASE_PREMIUM }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={service.id}
          className="svc-showcase-panel"
          style={reduced ? undefined : { transform: panelShift }}
          initial={{ opacity: 0, x: reduced ? 0 : 32, filter: reduced ? "none" : "blur(6px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, x: reduced ? 0 : -18, filter: reduced ? "none" : "blur(4px)" }}
          transition={{ duration: 0.44, ease: EASE_PREMIUM }}
          layout
        >
          <span className="svc-panel-border" aria-hidden />
          <ServicePanelAmbient />

          <motion.div
            className="svc-panel-float"
            animate={reduced ? {} : { y: [0, -4, 0] }}
            transition={{
              duration: 5.5,
              repeat: reduced ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="svc-panel-scroll">
              <motion.div
                className="svc-panel-icon-row"
                initial={{ opacity: 0, y: reduced ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05, ease: EASE_PREMIUM }}
              >
                <motion.div
                  className="svc-panel-icon"
                  whileHover={reduced ? {} : { rotate: 6, scale: 1.04 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                >
                  <Icon size={30} strokeWidth={1.6} aria-hidden />
                </motion.div>
                <motion.span
                  className="svc-panel-index"
                  key={`num-${service.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.span>
              </motion.div>

              <motion.h3
                className="svc-panel-title"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.08, ease: EASE_PREMIUM }}
              >
                {service.title}
              </motion.h3>

              <motion.div
                className="svc-panel-block"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.12, ease: EASE_PREMIUM }}
              >
                <p className="svc-panel-desc">{service.description}</p>
              </motion.div>

              <motion.div
                className="svc-panel-block svc-panel-block--outcome"
                initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.16, ease: EASE_PREMIUM }}
              >
                <p className="svc-panel-outcome">{service.outcome}</p>
              </motion.div>

              <motion.div
                className="svc-panel-cta-wrap"
                initial={{ opacity: 0, y: reduced ? 0 : 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: EASE_PREMIUM }}
              >
                <Link href={service.href} className="svc-panel-cta" data-cursor-hover>
                  Explore capability
                  <span className="svc-panel-cta-arrow" aria-hidden>
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
