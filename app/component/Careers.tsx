"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/FadeIn";
import {
  careerCategories,
  careerHighlights,
  careersSection,
  site,
} from "@/app/content/astrenox-content";

export default function Careers() {
  return (
    <section id="careers" className="section-shell relative bg-background">
      <div className="section-divider" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-8"
      >
        <SectionHeader
          label={careersSection.label}
          title={
            <>
              Hire elite AI & engineering talent,{" "}
              <span className="text-highlight-primary">on-demand</span>
            </>
          }
          description={careersSection.description}
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
        >
          {careerCategories.map((cat) => (
            <motion.li
              key={cat.title}
              variants={staggerItem}
              className="premium-card p-6"
            >
              <h3 className="font-heading font-semibold text-text">{cat.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{cat.roles}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {careerHighlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              className="glass-card p-5"
            >
              <p className="text-sm font-semibold text-text">{item.title}</p>
              <p className="mt-1 text-xs text-muted leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href={`mailto:${site.email}?subject=Talent%20inquiry`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ x: 3 }}
          className="glass-card p-6 flex items-center justify-between group cursor-pointer glow-border max-w-xl mx-auto"
        >
          <div>
            <h3 className="font-heading font-semibold text-text group-hover:text-primary transition-colors">
              Request a shortlist
            </h3>
            <p className="text-sm text-muted mt-1">{site.email}</p>
          </div>
          <ArrowRight
            size={18}
            strokeWidth={1.5}
            className="text-muted group-hover:text-primary transition-all group-hover:translate-x-0.5 shrink-0"
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
