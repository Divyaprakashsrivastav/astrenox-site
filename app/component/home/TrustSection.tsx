"use client";

import "./ecosystem-alliances.css";
import {
  motion,
  useInView,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { useCallback, useRef, type MouseEvent } from "react";
import { homeEnterpriseEcosystem, homeMetrics, homeTestimonials } from "@/app/content/homepage-content";
import { useReducedMotion } from "../features/useReducedMotion";
import AnimatedCounter from "../ui/AnimatedCounter";
import { EASE_PREMIUM } from "../v2/motion";
import { ExpandableBlock, ParagraphExpand } from "./disclosure/HomeDisclosure";
import TechSvgLogo from "./TechSvgLogo";
import { VENDOR_MARQUEE_LOGOS } from "./vendor-marquee-logos";

const PROOF_STATS = homeMetrics.stats.slice(0, 3);
const featured = homeTestimonials.items[0];

function MetricCard({
  stat,
  index,
  inView,
  reduced,
}: {
  stat: (typeof PROOF_STATS)[number];
  index: number;
  inView: boolean;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 24 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 24 });
  const transform = useMotionTemplate`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      rotateY.set(x * 8);
      rotateX.set(-y * 6);
    },
    [reduced, rotateX, rotateY]
  );

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <motion.div
      ref={cardRef}
      className="eco-metric-card"
      style={reduced ? undefined : { transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.12, ease: EASE_PREMIUM }}
      whileHover={reduced ? undefined : { y: -6 }}
      data-cursor-hover
    >
      <p className="eco-metric-value">
        {"display" in stat ? (
          stat.display
        ) : (
          <AnimatedCounter
            value={stat.value}
            suffix={stat.suffix}
            decimals={"decimals" in stat ? stat.decimals : 0}
            immediate={inView}
          />
        )}
      </p>
      <p className="eco-metric-label">{stat.label}</p>
    </motion.div>
  );
}

function TestimonialCard({
  inView,
  reduced,
}: {
  inView: boolean;
  reduced: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shineX = useSpring(50, { stiffness: 120, damping: 20 });
  const shineY = useSpring(50, { stiffness: 120, damping: 20 });
  const shineBg = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.1) 0%, transparent 55%)`;

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (reduced || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      shineX.set(((e.clientX - rect.left) / rect.width) * 100);
      shineY.set(((e.clientY - rect.top) / rect.height) * 100);
    },
    [reduced, shineX, shineY]
  );

  return (
    <motion.figure
      ref={cardRef}
      className="eco-testimonial"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.65, delay: 0.45, ease: EASE_PREMIUM }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <motion.div
        className="eco-testimonial-shine"
        style={reduced ? undefined : { background: shineBg }}
        aria-hidden
      />
      <div className="eco-testimonial-grid">
        <blockquote>
          <svg className="eco-quote-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-5.637 5.541-6.932C9.214 5.55 10.83 5 12.5 5c.5 0 1 .063 1.5.19V8.05c-.5-.127-1-.19-1.5-.19-1.1 0-2.2.35-3.1 1.05-.9.7-1.4 1.65-1.4 2.75 0 .9.35 1.6 1.05 2.1.7.5 1.6.75 2.7.75h.15v3.05H9.5c-1.5 0-2.8-.5-3.917-1.429zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-5.637 5.541-6.932C19.214 5.55 20.83 5 22.5 5c.5 0 1 .063 1.5.19V8.05c-.5-.127-1-.19-1.5-.19-1.1 0-2.2.35-3.1 1.05-.9.7-1.4 1.65-1.4 2.75 0 .9.35 1.6 1.05 2.1.7.5 1.6.75 2.7.75h.15v3.05h-3.35c-1.5 0-2.8-.5-3.917-1.429z" />
          </svg>
          <p className="eco-quote-text">&ldquo;{featured.quote}&rdquo;</p>
        </blockquote>
        <figcaption className="eco-testimonial-meta">
          <div className="eco-avatar-placeholder" aria-hidden />
          <div className="eco-company-placeholder" aria-hidden />
          <p className="eco-testimonial-author">{featured.author}</p>
          <p className="eco-testimonial-role">{featured.role}</p>
        </figcaption>
      </div>
    </motion.figure>
  );
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-10%" });
  const reduced = useReducedMotion();
  const marqueeTrack = [
    ...homeEnterpriseEcosystem.marquee,
    ...homeEnterpriseEcosystem.marquee,
  ];

  return (
    <section id="trust" className="eco-section scroll-mt-28">
      <div className="eco-inner">
        <motion.header
          className="eco-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: EASE_PREMIUM }}
        >
          <p className="eco-eyebrow">{homeEnterpriseEcosystem.label}</p>
          <h2 className="eco-title">{homeEnterpriseEcosystem.title}</h2>
          <div className="eco-description">
            <ParagraphExpand
              paragraphs={[homeEnterpriseEcosystem.description]}
              visibleCount={1}
              paragraphClassName="eco-description-p"
            />
          </div>
        </motion.header>

        <div ref={sectionRef} className="eco-logos-zone">
          <div className="eco-marquee" aria-label="Partner ecosystem">
            <ul className="eco-marquee-track">
              {marqueeTrack.map((label, i) => {
                const logo = VENDOR_MARQUEE_LOGOS[label];
                return (
                  <motion.li
                    key={`${label}-${i}`}
                    className="eco-logo-item"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                    transition={{
                      duration: 0.5,
                      delay: Math.min(i * 0.04, 0.5),
                      ease: EASE_PREMIUM,
                    }}
                    data-cursor-hover
                  >
                    <span className="eco-logo-glow" aria-hidden />
                    <TechSvgLogo file={logo.file} name={label} size={48} />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        <ExpandableBlock
          expandLabel="View ecosystem proof points"
          collapseLabel="Hide ecosystem proof points"
          className="eco-proof-disclosure"
        >
          <div className="eco-metrics">
            <div className="eco-stats-glow" aria-hidden="true" />
            {PROOF_STATS.map((stat, index) => (
              <MetricCard
                key={stat.label}
                stat={stat}
                index={index}
                inView={inView}
                reduced={reduced}
              />
            ))}
          </div>

          <TestimonialCard inView={inView} reduced={reduced} />
        </ExpandableBlock>
      </div>
    </section>
  );
}
