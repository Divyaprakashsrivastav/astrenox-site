"use client";

import { memo, useEffect, useRef, useState } from "react";
import FormattedText from "../ui/FormattedText";
import { motion } from "framer-motion";
import { softwareFactorySection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import { EASE_PREMIUM } from "../v2/motion";

function FactoryDiagram() {
  const layers = ["Upstream SDLC", "Agentic Execution", "Enterprise Infrastructure"];
  return (
    <svg viewBox="0 0 320 280" className="w-full max-w-sm mx-auto" aria-hidden="true">
      {layers.map((layer, i) => (
        <g key={layer}>
          <rect
            x={40 + i * 8}
            y={40 + i * 72}
            width={240 - i * 16}
            height="52"
            rx="10"
            fill="rgba(124,58,237,0.1)"
            stroke="rgba(139,92,246,0.3)"
          />
          <text
            x={160}
            y={72 + i * 72}
            textAnchor="middle"
            fill="rgba(250,250,251,0.85)"
            fontSize="11"
          >
            {layer}
          </text>
        </g>
      ))}
      <motion.circle
        cx="160"
        cy="140"
        r="6"
        fill="#4f8cff"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
}

function SoftwareFactorySticky() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    stageRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStage(i);
        },
        { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={softwareFactorySection.label}
        title={softwareFactorySection.title}
        description={softwareFactorySection.intro}
      />

      <div className="products-factory-wrap mt-12">
        <div className="products-factory-sticky">
          <div className="products-glass p-8">
            <p className="products-eyebrow text-center">AI-Native Software Factory</p>
            <FactoryDiagram />
          </div>
        </div>

        <div>
          {softwareFactorySection.sections.map((section, i) => (
            <div
              key={section.number}
              ref={(el) => {
                stageRefs.current[i] = el;
              }}
              className={`products-glass products-factory-stage ${activeStage === i ? "products-factory-stage--active" : ""}`}
            >
              <span className="text-xs font-semibold text-[#4f8cff]">
                {section.number}. {section.title}
              </span>
              <p className="products-body mt-3 text-sm"><FormattedText text={section.intro} /></p>
              <ul className="products-detail-list mt-4">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(SoftwareFactorySticky);
