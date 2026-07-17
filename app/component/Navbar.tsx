"use client";

import "./nav/nav.css";
import { memo, useCallback, useEffect, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import AstrenoxLogo from "./brand/AstrenoxLogo";
import {
  navAiServices,
  navDigitalConsulting,
  navProducts,
  navInfrastructure,
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

type MegaKey = "ai" | "digital" | "products" | "infra";

const OPEN_DELAY_MS = 90;
const CLOSE_DELAY_MS = 140;

const LABEL = {
  ai: "AI Services",
  digital: "Digital Consulting & IT Services",
  products: "Products",
  infra: "Infrastructure Solutions",
  industries: "Industries",
  contact: "Contact Us",
} as const;

const GROUPS: Record<MegaKey, NavMegaGroup> = {
  ai: navAiServices,
  digital: navDigitalConsulting,
  products: navProducts,
  infra: navInfrastructure,
};

const MEGA_KEYS = Object.keys(GROUPS) as MegaKey[];

function routeActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function allItems(group: NavMegaGroup): NavMegaItem[] {
  return [...group.items, ...(group.sections?.flatMap((section) => section.items) ?? [])];
}

type MegaTriggerProps = {
  id: MegaKey;
  label: string;
  active: boolean;
  open: boolean;
  onPointerEnter: (event: PointerEvent<HTMLDivElement>) => void;
  onPointerLeave: () => void;
  onFocus: (id: MegaKey) => void;
  onClick: (id: MegaKey) => void;
};

const MegaTrigger = memo(function MegaTrigger({
  id,
  label,
  active,
  open,
  onPointerEnter,
  onPointerLeave,
  onFocus,
  onClick,
}: MegaTriggerProps) {
  return (
    <div
      className="dock-mega-anchor"
      data-mega={id}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <button
        type="button"
        className={`dock-link dock-link--mega ${active ? "dock-link--active" : ""} ${
          open ? "dock-link--mega-open" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={`dock-mega-${id}`}
        onFocus={() => onFocus(id)}
        onClick={() => onClick(id)}
      >
        <span className="dock-link-text">{label}</span>
        <ChevronDown
          size={12}
          className={`dock-chevron ${open ? "dock-chevron--open" : ""}`}
          aria-hidden
        />
        <span className="dock-link-hover-bar" aria-hidden />
        {active && <span className="dock-link-active-bar" aria-hidden />}
      </button>
    </div>
  );
});

const DrawerRow = memo(function DrawerRow({
  item,
  onNavigate,
  active,
}: {
  item: NavMegaItem;
  onNavigate: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`dock-drawer-card${active ? " dock-drawer-card--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <span className="dock-drawer-card-copy">
        <span className="dock-drawer-card-title">{item.label}</span>
        <span className="dock-drawer-card-desc">{item.description}</span>
      </span>
      <span className="dock-drawer-card-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
});

const DesktopMegaLayer = memo(function DesktopMegaLayer({
  activeKey,
  onPointerEnter,
  onPointerLeave,
}: {
  activeKey: MegaKey | null;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}) {
  return (
    <div
      className={`dock-mega-layer${activeKey ? " is-open" : ""}`}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      {MEGA_KEYS.map((key) => {
        const group = GROUPS[key];
        const layout =
          group.layout ?? (key === "products" || key === "infra" ? "stack" : "grid");
        return (
          <div
            key={key}
            className={[
              "dock-mega-shell",
              activeKey === key ? "is-open" : "",
            ].join(" ")}
            aria-hidden={activeKey !== key}
          >
            <div
              className={[
                "dock-mega-float",
                key === "products" || key === "infra" ? "dock-mega-float--narrow" : "",
                key === "digital" ? "dock-mega-float--catalog" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <NavMegaMenu
                group={group}
                menuId={`dock-mega-${key}`}
                layout={layout}
                panelVariant={key === "infra" ? "infra" : undefined}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
});

function DesktopMenu({ pathname }: { pathname: string }) {
  const [megaOpen, setMegaOpen] = useState<MegaKey | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearOpenTimer = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
  }, []);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const cancelHoverTimers = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
  }, [clearOpenTimer, clearCloseTimer]);

  const openMegaNow = useCallback(
    (key: MegaKey) => {
      cancelHoverTimers();
      setMegaOpen((current) => (current === key ? current : key));
    },
    [cancelHoverTimers]
  );

  const scheduleOpen = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") return;
      const key = event.currentTarget.dataset.mega as MegaKey;
      clearCloseTimer();
      clearOpenTimer();
      openTimerRef.current = setTimeout(() => {
        setMegaOpen((current) => (current === key ? current : key));
        openTimerRef.current = null;
      }, OPEN_DELAY_MS);
    },
    [clearCloseTimer, clearOpenTimer]
  );

  const scheduleClose = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setMegaOpen(null);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer, clearOpenTimer]);

  const closeMega = useCallback(() => {
    cancelHoverTimers();
    setMegaOpen(null);
  }, [cancelHoverTimers]);

  const toggleMega = useCallback(
    (key: MegaKey) => {
      cancelHoverTimers();
      setMegaOpen((current) => (current === key ? null : key));
    },
    [cancelHoverTimers]
  );

  useEffect(() => {
    document.body.classList.toggle("dock-mega-open", Boolean(megaOpen));
    return () => document.body.classList.remove("dock-mega-open");
  }, [megaOpen]);

  useEffect(() => cancelHoverTimers, [cancelHoverTimers]);

  return (
    <>
      <div className="dock-menu">
        <NavActiveLink href="/" active={routeActive(pathname, "/")}>
          Home
        </NavActiveLink>
        <MegaTrigger
          id="ai"
          label={LABEL.ai}
          active={isMegaGroupActive(pathname, navAiServices)}
          open={megaOpen === "ai"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={scheduleClose}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="digital"
          label={LABEL.digital}
          active={isMegaGroupActive(pathname, navDigitalConsulting)}
          open={megaOpen === "digital"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={scheduleClose}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="products"
          label={LABEL.products}
          active={isMegaGroupActive(pathname, navProducts)}
          open={megaOpen === "products"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={scheduleClose}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="infra"
          label={LABEL.infra}
          active={isInfrastructureActive(pathname)}
          open={megaOpen === "infra"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={scheduleClose}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <NavActiveLink href={navIndustriesHref} active={routeActive(pathname, navIndustriesHref)}>
          {LABEL.industries}
        </NavActiveLink>
        <NavActiveLink href={navContactHref} active={routeActive(pathname, navContactHref)}>
          {LABEL.contact}
        </NavActiveLink>
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <>
            <NavMegaBackdrop
              open={Boolean(megaOpen)}
              onClose={closeMega}
              onPointerEnter={clearCloseTimer}
            />
            <DesktopMegaLayer
              activeKey={megaOpen}
              onPointerEnter={cancelHoverTimers}
              onPointerLeave={scheduleClose}
            />
          </>,
          document.body
        )}
    </>
  );
}

function MobileDrawer({
  pathname,
  open,
  accordion,
  onClose,
  onAccordion,
}: {
  pathname: string;
  open: boolean;
  accordion: MegaKey | null;
  onClose: () => void;
  onAccordion: (key: MegaKey) => void;
}) {
  return (
    <>
      <div
        className={`dock-drawer-scrim${open ? " is-open" : ""}`}
        onClick={onClose}
        aria-hidden
      />
      <aside
        id="dock-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`dock-drawer${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="dock-drawer-head">
          <AstrenoxLogo variant="drawer" onClick={onClose} />
          <button type="button" className="dock-drawer-close" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <div className="dock-drawer-body">
          <NavActiveLink href="/" active={routeActive(pathname, "/")} className="dock-drawer-link" onClick={onClose}>
            Home
          </NavActiveLink>

          <div className="dock-drawer-mobile">
            {MEGA_KEYS.map((key) => {
              const expanded = accordion === key;
              const group = GROUPS[key];
              return (
                <div key={key} className={`dock-drawer-accordion${expanded ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="dock-drawer-accordion-btn"
                    onClick={() => onAccordion(key)}
                    aria-expanded={expanded}
                  >
                    <span>{LABEL[key]}</span>
                    <ChevronDown size={18} className={expanded ? "rotate-180" : ""} aria-hidden />
                  </button>
                  <div className="dock-drawer-accordion-panel">
                    <div>
                      <div className="dock-drawer-cards">
                        {group.items.map((item) => (
                          <DrawerRow
                            key={item.href}
                            item={item}
                            onNavigate={onClose}
                            active={routeActive(pathname, item.href)}
                          />
                        ))}
                        {group.sections?.map((section) => (
                          <div key={section.title}>
                            <p className="dock-drawer-section-label">{section.title}</p>
                            {section.items.map((item) => (
                              <DrawerRow
                                key={item.href}
                                item={item}
                                onNavigate={onClose}
                                active={routeActive(pathname, item.href)}
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="dock-drawer-tablet">
            {MEGA_KEYS.map((key) => (
              <div key={key} className="dock-drawer-block">
                <p className="dock-drawer-block-label">{LABEL[key]}</p>
                <div className="dock-drawer-cards">
                  {allItems(GROUPS[key]).map((item) => (
                    <DrawerRow
                      key={item.href}
                      item={item}
                      onNavigate={onClose}
                      active={routeActive(pathname, item.href)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <NavActiveLink
            href={navIndustriesHref}
            active={routeActive(pathname, navIndustriesHref)}
            className="dock-drawer-link"
            onClick={onClose}
          >
            {LABEL.industries}
          </NavActiveLink>
          <NavActiveLink
            href={navContactHref}
            active={routeActive(pathname, navContactHref)}
            className="dock-drawer-link"
            onClick={onClose}
          >
            {LABEL.contact}
          </NavActiveLink>

          <Link href={navContactHref} onClick={onClose} className="dock-cta dock-cta--drawer">
            <span>Schedule Call</span>
            <ArrowRight size={15} strokeWidth={2.25} className="dock-cta-icon" aria-hidden />
          </Link>
        </div>
      </aside>
    </>
  );
}

function MobileNavControls({ pathname }: { pathname: string }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerReady, setDrawerReady] = useState(false);
  const [accordion, setAccordion] = useState<MegaKey | null>(null);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);
  const toggleDrawer = useCallback(() => {
    setDrawerReady(true);
    setDrawerOpen((current) => !current);
  }, []);
  const toggleAccordion = useCallback((key: MegaKey) => {
    setAccordion((current) => (current === key ? null : key));
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
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
        onClick={toggleDrawer}
      >
        {drawerOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {drawerReady && (
        <MobileDrawer
          pathname={pathname}
          open={drawerOpen}
          accordion={accordion}
          onClose={closeDrawer}
          onAccordion={toggleAccordion}
        />
      )}
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="dock-shell">
      <header className="dock-header">
        <nav aria-label="Main navigation" className="dock-bar">
          <div className="dock-grid">
            <div className="dock-zone dock-zone--brand">
              <AstrenoxLogo variant="nav" height={40} />
            </div>

            <div className="dock-zone dock-zone--menu">
              <DesktopMenu key={pathname} pathname={pathname} />
            </div>

            <div className="dock-zone dock-zone--cta">
              <MobileNavControls key={pathname} pathname={pathname} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
