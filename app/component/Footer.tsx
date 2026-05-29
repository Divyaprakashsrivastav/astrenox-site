"use client";

import { motion } from "framer-motion";
import FooterBackground from "./footer/FooterBackground";
import FooterBrandWatermark from "./footer/FooterBrandWatermark";
import FooterNavLink from "./footer/FooterNavLink";
import SocialIcons from "./footer/SocialIcons";

const navLinks = [
  { label: "Capabilities", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px]"
    >
      <FooterBackground />
      <FooterBrandWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pt-20 lg:pt-28 pb-16 lg:pb-20 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-white tracking-[-0.02em] leading-[1.2] max-w-3xl mx-auto">
            Building the future of{" "}
            <span className="text-[#c97b84]">intelligent autonomy</span>.
          </p>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-px w-20 origin-center bg-white/15"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
          }}
          className="pb-16 lg:pb-24 space-y-8 lg:space-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-start">
            <motion.div
              variants={fadeUp}
              className="footer-glass rounded-2xl p-6 lg:p-7 text-center lg:text-left"
            >
              <a href="#" className="group inline-flex flex-col gap-2.5">
                <span className="font-heading text-2xl lg:text-[1.75rem] font-semibold text-white tracking-tight">
                  Astrenox
                </span>
                <span className="h-px w-12 bg-[#c97b84]/50 group-hover:w-16 group-hover:bg-[#c97b84] transition-all duration-400" />
              </a>
              <p className="mt-4 text-xs font-medium tracking-[0.2em] uppercase text-[#a8b0c0]">
                Intelligent autonomous systems
              </p>
            </motion.div>

            <motion.nav
              variants={fadeUp}
              className="footer-glass rounded-2xl px-6 py-5 lg:px-8 lg:py-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3"
              aria-label="Footer"
            >
              {navLinks.map((link, i) => (
                <FooterNavLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  index={i}
                />
              ))}
            </motion.nav>

            <motion.div
              variants={fadeUp}
              className="footer-glass rounded-2xl p-6 lg:p-7 flex flex-col items-center lg:items-end gap-4"
            >
              <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#a8b0c0]">
                Connect
              </p>
              <SocialIcons />
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="footer-glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <p className="text-sm text-[#c4c9d4]">
              &copy; {new Date().getFullYear()} Astrenox. All rights reserved.
            </p>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#8b95a8]">
              Enterprise AI · Aerospace · Robotics
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-[#0f0b14] to-transparent z-[2]"
        aria-hidden
      />
    </footer>
  );
}
