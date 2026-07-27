"use client";

import "./home-products.css";
import FormattedText from "../ui/FormattedText";
import "../products/page/products-page.css";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { EASE_PREMIUM } from "../v2/motion";
import ProductPageVisual from "../products/page/ProductPageVisual";

const PRODUCTS = [
  {
    id: "solvoris",
    name: "Solvoris",
    tagline: "Company brain and personal assistant",
    description:
      "Solvoris brings company knowledge, conversations, documents, and contextual memory into one intelligent assistant. It helps teams find reliable answers, understand past decisions, manage priorities, and act with greater speed and clarity.",
    visual: "brain" as const,
    image: "/images/products/solvoris.jpg",
  },
  {
    id: "astren",
    name: "Astren",
    tagline: "AI adoption and transformation engine",
    description:
      "Astren helps organisations assess AI readiness, identify high-value opportunities, and create a practical roadmap for adoption. It aligns business goals, technology, data, people, and governance to move AI initiatives from planning to measurable execution.",
    visual: "workflow" as const,
    image: "/images/products/astren.jpg",
  },
  {
    id: "akiren",
    name: "Akiren",
    tagline: "AI-native company OS",
    description:
      "Akiren connects workflows, business systems, data, teams, and AI agents in one operating environment. It enables companies to build, manage, govern, and scale agents that support daily operations and execute work across departments.",
    visual: "platform" as const,
    image: "/images/products/akiren.jpg",
  },
  {
    id: "orzora",
    name: "Orzora",
    tagline: "Dealdesk and custom RFx pipeline",
    description:
      "Orzora brings documents, opportunities, tenders, proposals, and team collaboration into one AI-powered workspace. It helps teams qualify opportunities, analyse requirements, prepare responses, coordinate approvals, and manage the complete RFx process.",
    visual: "rfx" as const,
    image: "/images/products/orzora.jpg",
  },
] as const;

function ProductCardMedia({
  name,
  image,
  visual,
}: {
  name: string;
  image: string;
  visual: "brain" | "workflow" | "platform" | "rfx";
}) {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <div className="hp-card-media">
      {!photoFailed ? (
        <Image
          src={image}
          alt={`${name} product preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="hp-card-photo"
          onError={() => setPhotoFailed(true)}
        />
      ) : null}
      {photoFailed ? (
        <div className="hp-card-media-fallback" aria-hidden>
          <ProductPageVisual visual={visual} active />
        </div>
      ) : null}
    </div>
  );
}

export default function HomeProducts() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section id="products" className="hp-section scroll-mt-28">
      <div className="hp-inner">
        <motion.header
          ref={headerRef}
          className="hp-header"
          initial={{ opacity: 0, y: 28 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ duration: 0.7, ease: EASE_PREMIUM }}
        >
          <p className="hp-eyebrow">Our Products</p>
          <h2 className="hp-title">AI Platforms Built for Every Stage of Growth</h2>
          <p className="hp-description">
            A suite of practical AI products designed to strengthen knowledge, guide
            transformation, improve operations, and accelerate deal execution.
          </p>
        </motion.header>

        <div className="hp-grid">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_PREMIUM }}
            >
              <Link href={`/products/${product.id}`} className="hp-card">
                <ProductCardMedia
                  name={product.name}
                  image={product.image}
                  visual={product.visual}
                />
                <div className="hp-card-body">
                  <h3 className="hp-card-name">{product.name}</h3>
                  <p className="hp-card-tagline">{product.tagline}</p>
                  <p className="hp-card-desc"><FormattedText text={product.description} /></p>
                </div>
                <span className="hp-card-cta">
                  Explore {product.name}
                  <ArrowRight size={16} aria-hidden />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
