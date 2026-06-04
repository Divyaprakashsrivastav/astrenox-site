"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { emailCapture } from "@/app/content/astrenox-content";
import { site } from "@/app/content/astrenox-content";

export default function EmailCaptureSection() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`Consultation request from: ${email}`);
    window.location.href = `mailto:${site.email}?subject=Consultation%20request&body=${body}`;
  }

  return (
    <section className="section-shell relative bg-background">
      <div className="section-divider" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="premium-card card-pad lg:card-pad-lg"
        >
          <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-text tracking-tight">
            {emailCapture.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{emailCapture.subtitle}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {emailCapture.pillars.map((p) => (
              <div key={p.title} className="glass-card p-5">
                <h3 className="text-sm font-semibold text-text">{p.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={emailCapture.placeholder}
              className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              className="px-8 py-3 text-sm font-medium text-white bg-primary hover:bg-[#6a2859] rounded-full transition-colors"
            >
              {emailCapture.cta}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
