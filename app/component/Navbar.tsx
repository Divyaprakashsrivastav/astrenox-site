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

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `nav-link px-3 py-2 text-[13px] font-medium rounded-full transition-all duration-300 ${
      isActive(href) ? "nav-link--active" : "nav-link--idle"
    }`;

  const dropdownBtnClass =
    "nav-link nav-link--idle flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-full transition-all duration-300";

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="nav-header"
      >
        <nav
          className={`nav-float flex items-center justify-between h-12 px-2 sm:px-3 transition-all duration-400 ${
            scrolled ? "nav-float-scrolled" : ""
          }`}
        >
          <Link
            href="/"
            className="nav-logo font-heading text-lg font-semibold pl-3 sm:pl-4 transition-colors duration-300"
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
              <button type="button" className={dropdownBtnClass}>
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "services" ? (
                <div className="nav-dropdown absolute top-full left-0 mt-2 w-56 py-2">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#c084fc]"
                  >
                    All services
                  </Link>
                  {navServices.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-dropdown-link block px-4 py-2 text-sm"
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
              <button type="button" className={dropdownBtnClass}>
                Solutions
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    openDropdown === "solutions" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "solutions" ? (
                <div className="nav-dropdown absolute top-full left-0 mt-2 w-48 py-2">
                  {navSolutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="nav-dropdown-link block px-4 py-2 text-sm"
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
            <Link href="/contact" className="nav-cta hidden sm:inline-flex items-center gap-2">
              Book a call
              <ArrowRight size={14} strokeWidth={2} />
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="nav-mobile-toggle lg:hidden p-2 rounded-full transition-colors duration-300"
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
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              className="nav-mobile-panel absolute top-[4.5rem] left-1/2 -translate-x-1/2 w-[92%] max-w-lg p-5 max-h-[75vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-white"
                >
                  Home
                </Link>
                <p className="pt-2 text-[10px] font-semibold uppercase tracking-widest text-white/45">
                  Services
                </p>
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-sm text-white/70 pl-2"
                >
                  All services
                </Link>
                {navServices.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-white/70 pl-2"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="pt-2 text-[10px] font-semibold uppercase tracking-widest text-white/45">
                  Solutions
                </p>
                {navSolutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-2 text-sm text-white/70 pl-2"
                  >
                    {item.label}
                  </Link>
                ))}
                {primaryNav.slice(1).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 text-base font-medium text-white"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="nav-cta mt-4 inline-flex items-center justify-center gap-2 py-3"
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
