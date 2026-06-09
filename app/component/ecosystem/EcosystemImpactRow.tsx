"use client";

import { motion } from "framer-motion";
import { Cloud, Lock, Sparkles, Zap } from "lucide-react";
import { homeEnterpriseEcosystem } from "@/app/content/homepage-content";

const icons = [Cloud, Lock, Sparkles, Zap];

export default function EcosystemImpactRow() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-6">
      {homeEnterpriseEcosystem.businessImpact.map((item, i) => {
        const Icon = icons[i] ?? Sparkles;
        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -3 }}
            className="eco-impact-card"
          >
            <div className="eco-impact-icon">
              <Icon size={16} strokeWidth={2} />
            </div>
            <h4 className="eco-impact-title">{item.title}</h4>
            <p className="eco-impact-desc">{item.description}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
