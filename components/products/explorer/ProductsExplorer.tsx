"use client";

import { memo, useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { productsCatalog } from "@/app/content/products-catalog";
import NavCard from "./NavCard";
import ShowcasePanel from "./ShowcasePanel";

function ProductsExplorer() {
  const [activeId, setActiveId] = useState(productsCatalog[0].id);
  const navRef = useRef<HTMLDivElement>(null);

  const activeItem = productsCatalog.find((p) => p.id === activeId) ?? productsCatalog[0];

  const selectItem = useCallback((id: string) => {
    setActiveId(id);
    const nav = navRef.current;
    const el = nav?.querySelector(`[data-product-id="${id}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  return (
    <section id="product-explorer" className="products-explorer" aria-label="Product catalog explorer">
      <aside className="products-explorer-nav-col" aria-label="Product navigation">
        <div className="products-explorer-nav-sticky">
          <p className="products-explorer-nav-label">Products</p>
          <div ref={navRef} className="products-explorer-nav-scroll">
            {productsCatalog.map((item) => (
              <div
                key={item.id}
                data-product-id={item.id}
                className="products-explorer-nav-item"
              >
                <NavCard
                  item={item}
                  active={activeId === item.id}
                  onSelect={() => selectItem(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </aside>

      <div className="products-explorer-showcase-col">
        <div className="products-explorer-showcase-sticky">
          <ShowcasePanel item={activeItem} />
        </div>
      </div>

      <div className="products-explorer-mobile-nav" aria-label="Product navigation mobile">
        <div className="products-explorer-mobile-scroll">
          {productsCatalog.map((item) => (
            <motion.button
              key={item.id}
              type="button"
              className={`products-explorer-mobile-pill ${activeId === item.id ? "products-explorer-mobile-pill--active" : ""}`}
              onClick={() => selectItem(item.id)}
              whileTap={{ scale: 0.96 }}
            >
              {item.title}
            </motion.button>
          ))}
        </div>
        <div className="products-explorer-mobile-showcase">
          <ShowcasePanel item={activeItem} />
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsExplorer);
