"use client";

import "./nav/nav.css";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import {
  navAiServices,
  navDigitalConsulting,
  navProducts,
  navInfrastructureHref,
  navIndustriesHref,
  navContactHref,
  isMegaGroupActive,
  isInfrastructureActive,
  type NavMegaGroup,
  type NavMegaItem,
} from "@/app/content/nav-config";
import NavMegaMenu from "./nav/NavMegaMenu";
import NavMegaBackdrop from "./nav/NavMegaBackdrop";
import NavActiveLink from "./nav/NavActiveLink";
import { useMegaMenuDelay } from "./nav/useMegaMenuDelay";

type MegaKey = "ai" | "digital" | "products";

const LABEL = {
  ai: "AI Services",
  digital: "Digital Consulting & IT Services",
  products: "Products",
  infra: "Infrastructure Solutions",
  industries: "Industries",
  contact: "Contact Us",
} as const;

function routeActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function allItems(group: NavMegaGroup): NavMegaItem[] {
  return [...group.items, ...(group.sections?.flatMap((s) => s.items) ?? [])];
}

function DrawerRow({ item, onNavigate }: { item: NavMegaItem; onNavigate: () => void }) {
  const Icon = item.icon;
  return (
    <Link href={item.href} onClick={onNavigate} className="dock-drawer-card">
      <span className="dock-drawer-card-icon" aria-hidden>
        <Icon size={18} strokeWidth={1.6} />
      </span>
      <span>
        <span className="dock-drawer-card-title">{item.label}</span>
        <span className="dock-drawer-card-desc">{item.description}</span>
      </span>
      <ArrowRight size={14} className="dock-drawer-card-arrow" aria-hidden />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { cancelClose, scheduleClose } = useMegaMenuDelay();

  const [megaOpen, setMegaOpen] = useState<MegaKey | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [accordion, setAccordion] = useState<MegaKey | null>(null);

  const groups: Record<MegaKey, NavMegaGroup> = {
    ai: navAiServices,
    digital: navDigitalConsulting,
    products: navProducts,
  };

  const closeMega = useCallback(() => setMegaOpen(null), []);
  const openMega = useCallback(
    (key: MegaKey) => {
      cancelClose();
      setMegaOpen(key);
    },
    [cancelClose]
  );
  const deferCloseMega = useCallback(() => scheduleClose(closeMega), [scheduleClose, closeMega]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || megaOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, megaOpen]);

  useEffect(() => {
    document.body.classList.toggle("dock-mega-open", Boolean(megaOpen));
    return () => document.body.classList.remove("dock-mega-open");
  }, [megaOpen]);

  useEffect(() => {
    setMegaOpen(null);
    setDrawerOpen(false);
    setAccordion(null);
  }, [pathname]);

  const closeDrawer = () => setDrawerOpen(false);

  const megaBtnClass = (active: boolean, open: boolean) =>
    `dock-link dock-link--mega ${active ? "dock-link--active" : ""} ${open ? "dock-link--mega-open" : ""}`;

  const MegaTrigger = ({ id, label, active }: { id: MegaKey; label: string; active: boolean }) => {
    const open = megaOpen === id;
    return (
      <div
        className="dock-mega-anchor"
        onMouseEnter={() => openMega(id)}
        onMouseLeave={deferCloseMega}
      >
        <button
          type="button"
          className={megaBtnClass(active, open)}
          aria-expanded={open}
          aria-haspopup="menu"
          aria-controls={`dock-mega-${id}`}
        >
          <span className="dock-link-text">{label}</span>
          <ChevronDown size={12} className={`dock-chevron ${open ? "dock-chevron--open" : ""}`} aria-hidden />
          <span className="dock-link-hover-bar" aria-hidden />
          {active && (
            <motion.span
              layoutId="dock-active-bar"
              className="dock-link-active-bar"
              transition={{ type: "spring", stiffness: 400, damping: 34 }}
            />
          )}
        </button>
      </div>
    );
  };

  const Accordion = ({ id, label }: { id: MegaKey; label: string }) => {
    const open = accordion === id;
    const group = groups[id];
    return (
      <div className="dock-drawer-accordion">
        <button
          type="button"
          className="dock-drawer-accordion-btn"
          onClick={() => setAccordion(open ? null : id)}
          aria-expanded={open}
        >
          <span>{label}</span>
          <ChevronDown size={18} className={open ? "rotate-180" : ""} aria-hidden />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="dock-drawer-cards">
                {group.items.map((item) => (
                  <DrawerRow key={item.href} item={item} onNavigate={closeDrawer} />
                ))}
                {group.sections?.map((section) => (
                  <div key={section.title}>
                    <p className="dock-drawer-section-label">{section.title}</p>
                    {section.items.map((item) => (
                      <DrawerRow key={item.href} item={item} onNavigate={closeDrawer} />
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>{megaOpen && <NavMegaBackdrop onClose={closeMega} onHover={cancelClose} />}</AnimatePresence>

      <motion.div
        className="dock-shell"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="dock-header">
          <nav aria-label="Main navigation" className="dock-bar">
            <div className="dock-grid">
              <div className="dock-zone dock-zone--brand">
                <Link href="/" className="dock-brand" aria-label="Astrenox home">
                  Astrenox
                </Link>
              </div>

              <div className="dock-zone dock-zone--menu">
                <div className="dock-menu">
                  <NavActiveLink href="/" active={routeActive(pathname, "/")}>
                    Home
                  </NavActiveLink>
                  <MegaTrigger id="ai" label={LABEL.ai} active={isMegaGroupActive(pathname, navAiServices)} />
                  <MegaTrigger
                    id="digital"
                    label={LABEL.digital}
                    active={isMegaGroupActive(pathname, navDigitalConsulting)}
                  />
                  <MegaTrigger id="products" label={LABEL.products} active={isMegaGroupActive(pathname, navProducts)} />
                  <NavActiveLink href={navInfrastructureHref} active={isInfrastructureActive(pathname)}>
                    {LABEL.infra}
                  </NavActiveLink>
                  <NavActiveLink href={navIndustriesHref} active={routeActive(pathname, navIndustriesHref)}>
                    {LABEL.industries}
                  </NavActiveLink>
                  <NavActiveLink href={navContactHref} active={routeActive(pathname, navContactHref)}>
                    {LABEL.contact}
                  </NavActiveLink>
                </div>
              </div>

              <div className="dock-zone dock-zone--cta">
                <Link href={navContactHref} className="dock-cta" aria-label="Schedule a call with Astrenox">
                  <span>Schedule Call</span>
                  <ArrowRight size={15} strokeWidth={2.25} className="dock-cta-icon" aria-hidden />
                </Link>
                <button
                  type="button"
                  className="dock-burger"
                  aria-label={drawerOpen ? "Close menu" : "Open menu"}
                  aria-expanded={drawerOpen}
                  aria-controls="dock-drawer"
                  onClick={() => setDrawerOpen((v) => !v)}
                >
                  {drawerOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </nav>
        </header>
      </motion.div>

      <AnimatePresence>
        {megaOpen && (
          <div
            className="dock-mega-shell"
            onMouseEnter={cancelClose}
            onMouseLeave={deferCloseMega}
          >
            <div
              className={[
                "dock-mega-float",
                megaOpen === "products" ? "dock-mega-float--narrow" : "",
                megaOpen === "digital" ? "dock-mega-float--catalog" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <NavMegaMenu
                group={groups[megaOpen]}
                menuId={`dock-mega-${megaOpen}`}
                layout={groups[megaOpen].layout ?? (megaOpen === "products" ? "stack" : "grid")}
              />
            </div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="dock-drawer-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              aria-hidden
            />
            <motion.aside
              id="dock-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              className="dock-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dock-drawer-head">
                <span className="dock-drawer-title">Menu</span>
                <button type="button" className="dock-drawer-close" onClick={closeDrawer} aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>
              <div className="dock-drawer-body">
                <NavActiveLink href="/" active={routeActive(pathname, "/")} className="dock-drawer-link" onClick={closeDrawer}>
                  Home
                </NavActiveLink>

                <div className="dock-drawer-mobile">
                  <Accordion id="ai" label={LABEL.ai} />
                  <Accordion id="digital" label={LABEL.digital} />
                  <Accordion id="products" label={LABEL.products} />
                </div>

                <div className="dock-drawer-tablet">
                  {(Object.keys(groups) as MegaKey[]).map((key) => (
                    <div key={key} className="dock-drawer-block">
                      <p className="dock-drawer-block-label">
                        {key === "ai" ? LABEL.ai : key === "digital" ? LABEL.digital : LABEL.products}
                      </p>
                      <div className="dock-drawer-cards">
                        {allItems(groups[key]).map((item) => (
                          <DrawerRow key={item.href} item={item} onNavigate={closeDrawer} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <NavActiveLink
                  href={navInfrastructureHref}
                  active={isInfrastructureActive(pathname)}
                  className="dock-drawer-link"
                  onClick={closeDrawer}
                >
                  {LABEL.infra}
                </NavActiveLink>
                <NavActiveLink
                  href={navIndustriesHref}
                  active={routeActive(pathname, navIndustriesHref)}
                  className="dock-drawer-link"
                  onClick={closeDrawer}
                >
                  {LABEL.industries}
                </NavActiveLink>
                <NavActiveLink
                  href={navContactHref}
                  active={routeActive(pathname, navContactHref)}
                  className="dock-drawer-link"
                  onClick={closeDrawer}
                >
                  {LABEL.contact}
                </NavActiveLink>

                <Link href={navContactHref} onClick={closeDrawer} className="dock-cta dock-cta--drawer">
                  <span>Schedule Call</span>
                  <ArrowRight size={15} strokeWidth={2.25} className="dock-cta-icon" aria-hidden />
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
