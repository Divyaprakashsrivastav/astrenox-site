"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import EcosystemBackground from "./EcosystemBackground";
import EcosystemNetworkCanvas from "./EcosystemNetworkCanvas";
import EcosystemPartnerNode from "./EcosystemPartnerNode";
import EcosystemMarquee from "./EcosystemMarquee";
import EcosystemImpactRow from "./EcosystemImpactRow";
import { partnerPosition, ringRevealDelay } from "./ecosystem-layout";
import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

export default function EcosystemNetworkSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [revealStep, setRevealStep] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (!inView) return;
    const steps = [1, 2, 3, 4];
    const timers = steps.map((step, i) =>
      window.setTimeout(() => setRevealStep(step), i * 380)
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [inView]);

  const coreVisible = revealStep >= 1;
  const ringsVisible = [
    revealStep >= 2,
    revealStep >= 3,
    revealStep >= 4,
  ];

  const { partners, connections } = useMemo(() => {
    const list: Array<{
      partner: (typeof homeEnterpriseEcosystem.rings)[number]["partners"][number];
      ringIndex: 1 | 2 | 3;
      x: number;
      y: number;
      svgX: number;
      svgY: number;
      ringDelay: number;
      floatOffset: number;
    }> = [];
    const conns: { id: string; x: number; y: number }[] = [];

    homeEnterpriseEcosystem.rings.forEach((ring) => {
      const ri = ring.ringIndex as 1 | 2 | 3;
      ring.partners.forEach((partner, pi) => {
        const pos = partnerPosition(ri, pi, ring.partners.length);
        list.push({
          partner,
          ringIndex: ri,
          x: pos.x,
          y: pos.y,
          svgX: pos.svgX,
          svgY: pos.svgY,
          ringDelay: ringRevealDelay(ri),
          floatOffset: 2 + (pi % 3),
        });
        conns.push({ id: partner.id, x: pos.svgX, y: pos.svgY });
      });
    });

    return { partners: list, connections: conns };
  }, []);

  return (
    <section ref={ref} className="eco-network-section section-shell relative scroll-mt-28">
      <div className="section-divider" />
      <EcosystemBackground active={inView} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label={homeEnterpriseEcosystem.label}
          title={homeEnterpriseEcosystem.title}
          description={homeEnterpriseEcosystem.description}
        />

        <div className="eco-network-stage">
          <div className="eco-network-orbit">
            <EcosystemNetworkCanvas
              connections={connections}
              hoveredId={hoveredId}
              inView={inView}
              coreVisible={coreVisible}
              ringsVisible={ringsVisible}
              coreLabel={homeEnterpriseEcosystem.coreLabel}
            />

            {partners.map((p) => {
              const ringIdx = p.ringIndex - 1;
              const ringShown = ringsVisible[ringIdx];
              return (
                <EcosystemPartnerNode
                  key={p.partner.id}
                  partner={p.partner}
                  x={p.x}
                  y={p.y}
                  ringDelay={p.ringDelay}
                  inView={ringShown && inView}
                  isHovered={hoveredId === p.partner.id}
                  isDimmed={hoveredId !== null && hoveredId !== p.partner.id}
                  onHover={setHoveredId}
                  floatOffset={p.floatOffset}
                />
              );
            })}

            <motion.div
              className="eco-network-core-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={coreVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eco-network-core-pulse" aria-hidden />
              <span className="eco-network-core-label">{homeEnterpriseEcosystem.coreLabel}</span>
            </motion.div>
          </div>

          <div className="eco-network-legend">
            {homeEnterpriseEcosystem.rings.map((ring, i) => (
              <motion.div
                key={ring.id}
                className="eco-network-legend-item"
                initial={{ opacity: 0, x: -8 }}
                animate={ringsVisible[i] ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: ringRevealDelay(ring.ringIndex as 1 | 2 | 3) }}
              >
                <span className={`eco-network-legend-ring eco-network-legend-ring-${ring.ringIndex}`} />
                <div>
                  <p className="eco-network-legend-title">Ring {ring.ringIndex}</p>
                  <p className="eco-network-legend-sub">{ring.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <EcosystemImpactRow />
        <EcosystemMarquee />
      </div>
    </section>
  );
}
