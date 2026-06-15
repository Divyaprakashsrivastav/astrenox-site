"use client";

import {
  motion,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  Bot,
  Users,
  Monitor,
  Box,
  Cloud,
  Code2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { useCallback, useRef, type CSSProperties, type MouseEvent } from "react";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { homeServices } from "@/app/content/homepage-content";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";

const icons: LucideIcon[] = [Sparkles, Bot, Users, Monitor, Box, Cloud, Code2];

const FLOAT_DURS = [7, 8.5, 6.5, 9, 7.5, 8, 9.5];

function ServiceCard({
  service,
  index,
  Icon,
  reduced,
}: {
  service: (typeof homeServices.items)[number];
  index: number;
  Icon: LucideIcon;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLElement>(null);
  const rotateX = useSpring(0, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 22 });
  const lift = useSpring(0, { stiffness: 200, damping: 24 });
  const scale = useSpring(1, { stiffness: 200, damping: 24 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${lift}px) scale(${scale})`;

  const handleMouseEnter = useCallback(() => {
    if (reduced) return;
    lift.set(-10);
    scale.set(1.02);
  }, [reduced, lift, scale]);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * 4);
      rotateX.set(-y * 4);
    },
    [reduced, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
    scale.set(1);
  }, [rotateX, rotateY, lift, scale]);

  const floatStyle = {
    "--svc-float-delay": `${(index * 0.67) % 3}s`,
    "--svc-float-dur": `${FLOAT_DURS[index % FLOAT_DURS.length]}s`,
  } as CSSProperties;

  return (
    <motion.div
      className="svc-flow-wrap"
      style={floatStyle}
      initial={{ opacity: 0, y: 44, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE_PREMIUM }}
    >
      <motion.article
        ref={cardRef}
        className="svc-flow-card"
        style={reduced ? undefined : { transform }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor-hover
      >
        <span className="svc-flow-accent" aria-hidden />
        <div className="svc-flow-particles" aria-hidden>
          <span />
          <span />
        </div>
        <Link href={service.href} className="svc-flow-link">
          <div className="svc-flow-icon">
            <Icon size={26} strokeWidth={1.75} />
          </div>
          <h3 className="svc-flow-title">{service.title}</h3>
          <p className="svc-flow-desc">{service.description}</p>
          <p className="svc-flow-outcome">{service.outcome}</p>
          <span className="svc-flow-cta">
            Explore capability <ArrowRight size={14} />
          </span>
        </Link>
      </motion.article>
    </motion.div>
  );
}

export default function HomeServices() {
  const reduced = useReducedMotion();

  return (
    <DesignSection id="services" flow border={false} ambient={false}>
      <DesignHeader
        flow
        label={homeServices.label}
        title={homeServices.title}
        description={homeServices.description}
      />

      <div className="svc-flow-grid">
        {homeServices.items.map((service, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              Icon={Icon}
              reduced={reduced}
            />
          );
        })}
      </div>
    </DesignSection>
  );
}
