"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

interface CardItem {
  title: string;
  description: string;
}

export function CardGridSection({
  label,
  title,
  description,
  items,
  columns = 2,
}: {
  label?: string;
  title: string;
  description?: string;
  items: readonly CardItem[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 3
      ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      : "grid grid-cols-1 md:grid-cols-2 gap-4";

  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label={label} title={title} description={description} />
        <div className={gridClass}>
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="premium-card p-6"
            >
              <h3 className="font-heading text-lg font-semibold text-text mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BulletListSection({
  label,
  title,
  description,
  items,
}: {
  label?: string;
  title: string;
  description?: string;
  items: readonly string[];
}) {
  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader label={label} title={title} description={description} />
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {items.map((item) => (
            <li key={item} className="glass-card px-5 py-4 text-sm text-muted leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
