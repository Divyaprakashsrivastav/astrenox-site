"use client";

import "./industries-sector.css";
import {
  motion,
  useInView,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useCallback, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Truck,
  GraduationCap,
  Shield,
  Briefcase,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { homeIndustries } from "@/app/content/homepage-content";
import { useReducedMotion } from "../features/useReducedMotion";
import { EASE_PREMIUM } from "../v2/motion";
import IndustriesAmbient from "./IndustriesAmbient";

const icons: LucideIcon[] = [
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Building2,
  Truck,
  GraduationCap,
  Shield,
  Briefcase,
  Cpu,
];

const FLOAT_DURATIONS = [6, 7, 8, 9, 10, 6.5, 7.5, 8.5, 9.5, 7];

interface IndustryCardProps {
  industry: (typeof homeIndustries.items)[number];
  index: number;
  Icon: LucideIcon;
  reduced: boolean;
}

function IndustryCard({ industry, index, Icon, reduced }: IndustryCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [hovered, setHovered] = useState(false);
  const rotateX = useSpring(0, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 180, damping: 22 });
  const lift = useSpring(0, { stiffness: 200, damping: 24 });
  const scale = useSpring(1, { stiffness: 200, damping: 24 });
  const glowX = useSpring(50, { stiffness: 120, damping: 20 });
  const glowY = useSpring(50, { stiffness: 120, damping: 20 });

  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${lift}px) scale(${scale})`;
  const glowBg = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(168,85,247,0.14) 0%, transparent 52%)`;

  const handleMouseEnter = useCallback(() => {
    if (reduced) return;
    setHovered(true);
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
      glowX.set(((e.clientX - rect.left) / rect.width) * 100);
      glowY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [reduced, rotateX, rotateY, glowX, glowY]
  );

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
    scale.set(1);
    glowX.set(50);
    glowY.set(50);
  }, [rotateX, rotateY, lift, scale, glowX, glowY]);

  const floatStyle = {
    "--float-delay": `${(index * 0.73) % 3}s`,
    "--float-duration": `${FLOAT_DURATIONS[index % FLOAT_DURATIONS.length]}s`,
  } as CSSProperties;

  return (
    <motion.div
      className="ind-float-wrap"
      style={floatStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE_PREMIUM }}
    >
      <motion.article
        ref={cardRef}
        className="ind-holo-card"
        style={reduced ? undefined : { transform }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        data-cursor-hover
      >
        <span className="ind-neon-ring" aria-hidden />
        <motion.div
          className="ind-holo-cursor-glow"
          style={reduced ? undefined : { background: glowBg, opacity: hovered ? 1 : 0 }}
          aria-hidden
        />
        <div className="ind-holo-content">
          <div className="ind-holo-icon">
            <Icon size={24} strokeWidth={1.75} />
          </div>
          <h3 className="ind-holo-title">{industry.title}</h3>
          <p className="ind-holo-desc">{industry.description}</p>
          <p className="ind-holo-cases-label">Solution Areas &amp; Use Cases</p>
          <ul className="ind-holo-chips">
            {industry.useCases.map((uc) => (
              <li key={uc} className="ind-holo-chip">
                {uc}
              </li>
            ))}
          </ul>
        </div>
      </motion.article>
    </motion.div>
  );
}

export default function HomeIndustries() {
  const reduced = useReducedMotion();
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-10%" });

  return (
    <section id="industries" className="ind-section scroll-mt-28">
      <IndustriesAmbient />

      <div className="ind-inner">
        <motion.header
          className="ind-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="ind-eyebrow">{homeIndustries.label}</p>
          <h2 className="ind-title">{homeIndustries.title}</h2>
          <p className="ind-description">{homeIndustries.description}</p>
        </motion.header>

        <div className="ind-sectors-grid">
          {homeIndustries.items.map((industry, i) => {
            const Icon = icons[i] ?? Factory;
            return (
              <IndustryCard
                key={industry.id}
                industry={industry}
                index={i}
                Icon={Icon}
                reduced={reduced}
              />
            );
          })}
        </div>

        <motion.div
          ref={ctaRef}
          className="ind-cta-wrap"
          initial={{ opacity: 0, y: 24 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.65, delay: 0.2, ease: EASE_PREMIUM }}
        >
          <Link href="/services/industries" className="ind-cta" data-cursor-hover>
            Explore Industry Solutions
            <span className="ind-cta-arrow" aria-hidden>
              <ArrowRight size={18} strokeWidth={2} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
