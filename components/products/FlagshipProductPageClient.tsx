"use client";

import { useRef, useState, type ReactNode } from "react";
import FormattedText from "../ui/FormattedText";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { FlagshipCard, FlagshipProduct } from "@/app/content/products/flagship-products-content";
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

function ProductHeroPhoto({
  name,
  image,
  visual,
}: {
  name: string;
  image: string;
  visual: "brain" | "platform" | "workflow" | "enterprise" | "rfx";
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  if (photoFailed) {
    return <ProductPageVisual visual={visual} active />;
  }

  return (
    <div className="fp-hero-photo-frame">
      <img
        src={image}
        alt={`${name} product preview`}
        className="fp-hero-photo"
        onError={() => setPhotoFailed(true)}
      />
    </div>
  );
}

function CardSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items: readonly FlagshipCard[];
}) {
  const titleId = `${id}-title`;
  return (
    <section className="fp-section" aria-labelledby={titleId}>
      <div className="fp-container">
        <Reveal>
          <h2 id={titleId} className="fp-section-title">
            {title}
          </h2>
        </Reveal>
        <div className="fp-card-grid">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <article className="fp-text-card">
                <h3 className="fp-text-card-title">{item.title}</h3>
                <p className="fp-text-card-body">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
          </motion.div>
          <motion.div
            className="fp-hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE_PREMIUM }}
          >
            <ProductHeroPhoto name={product.name} image={product.image} visual={visual} />
          </motion.div>
        </div>
      </section>

      <CardSection id="fp-brief" title="Product Brief" items={product.brief} />
      <CardSection id="fp-features" title="Key Features" items={product.features} />

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
