"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FooterBackground from "./footer/FooterBackground";
import FooterBrandWatermark from "./footer/FooterBrandWatermark";
import FooterNavLink from "./footer/FooterNavLink";
import SocialIcons from "./footer/SocialIcons";
import { footer } from "@/app/content/astrenox-content";
import { footerQuickLinks } from "@/app/content/site-pages";

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
    <footer className="relative overflow-hidden min-h-[275px] lg:min-h-[310px]">
      <FooterBackground />
      <FooterBrandWatermark />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pt-10 lg:pt-12 pb-8 lg:pb-10 text-center"
        >
          <p className="font-heading text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold text-white tracking-[-0.02em] leading-[1.2] max-w-3xl mx-auto">
            {footer.headline}{" "}
            <span className="text-[#c97b84]">{footer.headlineAccent}</span>
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
          className="pb-8 lg:pb-10 space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.div variants={fadeUp} className="footer-glass rounded-2xl p-6 lg:p-7">
              <Link href="/" className="group inline-flex flex-col gap-2.5">
                <span className="font-heading text-2xl font-semibold text-white tracking-tight">
                  Astrenox
                </span>
                <span className="h-px w-12 bg-[#c97b84]/50 group-hover:w-16 group-hover:bg-[#c97b84] transition-all duration-400" />
              </Link>
              <p className="mt-4 text-sm text-[#a8b0c0] leading-relaxed">{footer.description}</p>
              <SocialIcons />
            </motion.div>

            <motion.div variants={fadeUp} className="footer-glass rounded-2xl p-6 lg:p-7">
              <h4 className="text-sm font-semibold text-white mb-4">Quick links</h4>
              <ul className="space-y-2 text-sm text-[#a8b0c0] max-h-64 overflow-y-auto scrollbar-hide">
                {footerQuickLinks.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="footer-glass rounded-2xl p-6 lg:p-7">
              <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-[#a8b0c0]">
                <li>
                  <a
                    href="https://maps.google.com/?q=Noida%20UP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {footer.address}
                  </a>
                </li>
                <li>{footer.addressAlt}</li>
                <li>
                  <a href={`tel:${footer.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {footer.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.contactEmail}`} className="hover:text-white text-[#c97b84]">
                    {footer.contactEmail}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${footer.partnerEmail}`} className="hover:text-white">
                    {footer.partnerEmail}
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.nav
              variants={fadeUp}
              className="footer-glass rounded-2xl p-6 lg:p-7 flex flex-col gap-3"
              aria-label="Footer shortcuts"
            >
              <h4 className="text-sm font-semibold text-white mb-1">Explore</h4>
              {footerQuickLinks.slice(0, 6).map((link, i) => (
                <FooterNavLink key={link.label} href={link.href} label={link.label} index={i} />
              ))}
            </motion.nav>
          </div>

          <motion.div
            variants={fadeUp}
            className="footer-glass rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-sm text-[#c4c9d4]">
              &copy; {new Date().getFullYear()} Astrenox. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-[#8b95a8]">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/legal" className="hover:text-white transition-colors">
                Legal
              </Link>
            </div>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-[#8b95a8]">
              {footer.legal}
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
