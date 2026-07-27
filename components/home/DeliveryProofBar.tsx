"use client";

import { motion } from "framer-motion";
import FormattedText from "../ui/FormattedText";
import { deliveryProof } from "@/app/content/astrenox-content";

export default function DeliveryProofBar() {
  return (
    <section className="relative py-8 bg-background border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {deliveryProof.map((item) => (
            <li key={item.title} className="premium-card p-6 text-center">
              <h3 className="font-heading font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-muted"><FormattedText text={item.description} /></p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
