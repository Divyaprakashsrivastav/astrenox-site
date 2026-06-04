"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import {
  primaryNav,
  navServices,
  navSolutions,
} from "@/app/content/site-pages";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = (href: string) =>
    `px-3 py-2 text-[13px] font-medium rounded-full transition-colors ${
      pathname === href ? "text-text bg-background/80" : "text-muted hover:text-text"
    }`;

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
      >
        <nav
          className={`nav-float max-w-5xl mx-auto h-11 px-2 sm:px-3 flex items-center justify-between transition-all duration-400 ${
            scrolled ? "nav-float-scrolled" : ""
          }`}
        >
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-text pl-3 sm:pl-4 hover:text-primary transition-colors"
          >
            Astrenox
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("services")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-muted hover:text-text rounded-full"
              >
                Services
                <ChevronDown size={14} className={openDropdown === "services" ? "rotate-180" : ""} />
              </button>
              {openDropdown === "services" ? (
                <div className="absolute top-full left-0 mt-1 w-56 premium-card py-2 shadow-lg">
                  <Link href="/services" className="block px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wide">
                    All services
                  </Link>
                  {navServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-text hover:bg-background/80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("solutions")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-[13px] font-medium text-muted hover:text-text rounded-full"
              >
                Solutions
                <ChevronDown size={14} className={openDropdown === "solutions" ? "rotate-180" : ""} />
              </button>
              {openDropdown === "solutions" ? (
                <div className="absolute top-full left-0 mt-1 w-48 premium-card py-2 shadow-lg">
                  {navSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-muted hover:text-text hover:bg-background/80"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {primaryNav.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 pr-1 sm:pr-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-white bg-primary hover:bg-[#6a2859] rounded-full transition-colors shadow-sm"
            >
              Book a call
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-text hover:bg-background transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-text/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              className="absolute top-[3.25rem] left-4 right-4 nav-float p-5 bg-card max-h-[75vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 text-base font-medium text-text">
                  Home
                </Link>
                <p className="pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted">Services</p>
                <Link href="/services" onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted pl-2">
                  All services
                </Link>
                {navServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-muted pl-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="pt-2 text-[10px] font-semibold uppercase tracking-widest text-muted">Solutions</p>
                {navSolutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-muted pl-2"
                  >
                    {item.label}
                  </Link>
                ))}
                {primaryNav.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-base font-medium text-text"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-primary rounded-full"
                >
                  Book a call
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
