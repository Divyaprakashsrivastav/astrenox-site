"use client";

import { useRef, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { FlagshipProduct } from "@/app/content/products/flagship-products-content";
import { EASE_PREMIUM } from "../v2/motion";
import ProductPageVisual from "./page/ProductPageVisual";
import "./page/flagship-product.css";

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.58, delay, ease: EASE_PREMIUM }}
    >
      {children}
    </motion.div>
  );
}

const VISUAL_MAP: Record<string, "brain" | "platform" | "workflow" | "enterprise" | "rfx"> = {
  solvoris: "brain",
  astren: "workflow",
  akiren: "platform",
  orzora: "rfx",
};

export default function FlagshipProductPageClient({ product }: { product: FlagshipProduct }) {
  const visual = VISUAL_MAP[product.id] ?? "brain";

  return (
    <div className="fp-page">
      <div className="fp-ambient" aria-hidden />

      <section className="fp-hero" aria-labelledby="fp-title">
        <div className="fp-hero-grid">
          <motion.div
            className="fp-hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE_PREMIUM }}
          >
            <p className="fp-label">{product.tagline}</p>
            <h1 id="fp-title" className="fp-title">
              {product.name}
            </h1>
            <p className="fp-desc"><FormattedText text={product.description} /></p>
            <div className="fp-actions">
              <Link href={product.cta.href} className="fp-btn fp-btn--primary">
                {product.cta.label}
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="fp-hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE_PREMIUM }}
          >
            <ProductPageVisual visual={visual} active />
          </motion.div>
        </div>
      </section>

      <section className="fp-highlights" aria-labelledby="fp-highlights-title">
        <div className="fp-container">
          <Reveal>
            <h2 id="fp-highlights-title" className="fp-section-title">
              Key Capabilities
            </h2>
          </Reveal>
          <ul className="fp-highlight-list">
            {product.highlights.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="fp-highlight-item">
                  <span className="fp-check" aria-hidden>
                    <Check size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="fp-cta">
        <Reveal className="fp-cta-inner">
          <h2 className="fp-cta-title">Ready to explore {product.name}?</h2>
          <p className="fp-cta-desc"><FormattedText text={product.description} /></p>
          <Link href={product.cta.href} className="fp-btn fp-btn--primary">
            {product.cta.label}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
