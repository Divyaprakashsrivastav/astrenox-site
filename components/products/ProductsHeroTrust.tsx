"use client";

import { memo, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { productsHeroTrust } from "@/app/content/products-hero";
import { useReducedMotion } from "../features/useReducedMotion";

function AnimatedValue({
  from,
  to,
  decimals,
  suffix,
}: {
  from: number;
  to: number;
  decimals: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : from);

  useEffect(() => {
    if (!inView || reduced) {
      setValue(to);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, from, to]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

function ProductsHeroTrust() {
  return (
    <div className="products-hero-trust" role="list" aria-label="Platform trust indicators">
      {productsHeroTrust.map((item, i) => (
        <motion.div
          key={item.id}
          className="products-hero-trust-item"
          role="listitem"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="products-hero-trust-value">
            {item.animate ? (
              <AnimatedValue {...item.animate} />
            ) : (
              item.display
            )}
          </span>
          <span className="products-hero-trust-label">{item.label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default memo(ProductsHeroTrust);
