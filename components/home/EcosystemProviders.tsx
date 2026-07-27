"use client";

import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { staggerContainer, staggerItem } from "../ui/FadeIn";
import { ecosystemProviders } from "@/app/content/astrenox-content";

export default function EcosystemProviders() {
  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {ecosystemProviders.map((provider) => (
            <motion.article
              key={provider.id}
              variants={staggerItem}
              className="premium-card p-7"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-heading text-lg font-semibold text-primary mb-5">
                {provider.name.charAt(0)}
              </div>
              <h3 className="font-heading text-lg font-semibold text-text">{provider.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed"><FormattedText text={provider.description} /></p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
