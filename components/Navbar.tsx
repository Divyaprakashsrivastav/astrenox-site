"use client";

import "./nav/nav.css";
import { memo, useCallback, useEffect, useRef, useState, useSyncExternalStore, type PointerEvent } from "react";
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

const OPEN_DELAY_MS = 70;
const CLOSE_DELAY_MS = 180;

/** Server + first client hydrate both return false; after hydrate returns true. */
const subscribeNoop = () => () => {};
function useIsClient() {
  return useSyncExternalStore(subscribeNoop, () => true, () => false);
}

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

const DesktopMegaLayer = memo(function DesktopMegaLayer({
  activeKey,
  onPanelEnter,
  onPanelLeave,
}: {
  activeKey: MegaKey | null;
  onPanelEnter: () => void;
  onPanelLeave: () => void;
}) {
  if (!activeKey) return null;

  const group = GROUPS[activeKey];
  const layout =
    group.layout ?? (activeKey === "products" || activeKey === "infra" ? "stack" : "grid");

  return (
    <div className="dock-mega-layer is-open" aria-hidden={false}>
      <div
        className="dock-mega-shell is-open"
        onPointerEnter={onPanelEnter}
        onPointerLeave={onPanelLeave}
      >
        <div
          className={[
            "dock-mega-float",
            activeKey === "products" || activeKey === "infra" ? "dock-mega-float--narrow" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <NavMegaMenu
            group={group}
            menuId={`dock-mega-${activeKey}`}
            layout={layout}
            panelVariant={activeKey === "infra" ? "infra" : undefined}
          />
        </div>
      </div>
    </div>
  );
});

function DesktopMenu({ pathname }: { pathname: string }) {
  const [megaOpen, setMegaOpen] = useState<MegaKey | null>(null);
  // Portal mounts only after hydrate so SSR HTML matches the first client render.
  const portalReady = useIsClient();
  const megaOpenRef = useRef<MegaKey | null>(null);
  const suppressHoverRef = useRef(false);
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

  const setMega = useCallback((key: MegaKey | null) => {
    megaOpenRef.current = key;
    setMegaOpen(key);
  }, []);

  const openMegaNow = useCallback(
    (key: MegaKey) => {
      suppressHoverRef.current = false;
      cancelHoverTimers();
      setMega(key);
    },
    [cancelHoverTimers, setMega]
  );

  const scheduleOpen = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") return;
      if (suppressHoverRef.current) return;

      const key = event.currentTarget.dataset.mega as MegaKey;
      clearCloseTimer();
      clearOpenTimer();

      if (megaOpenRef.current === key) return;

      // Instant switch when another mega is already open
      if (megaOpenRef.current) {
        setMega(key);
        return;
      }

      openTimerRef.current = setTimeout(() => {
        setMega(key);
        openTimerRef.current = null;
      }, OPEN_DELAY_MS);
    },
    [clearCloseTimer, clearOpenTimer, setMega]
  );

  const scheduleClose = useCallback(() => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setMega(null);
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  }, [clearCloseTimer, clearOpenTimer, setMega]);

  const onTriggerLeave = useCallback(() => {
    suppressHoverRef.current = false;
    scheduleClose();
  }, [scheduleClose]);

  const closeMega = useCallback(() => {
    suppressHoverRef.current = false;
    cancelHoverTimers();
    setMega(null);
  }, [cancelHoverTimers, setMega]);

  const toggleMega = useCallback(
    (key: MegaKey) => {
      cancelHoverTimers();
      if (megaOpenRef.current === key) {
        // Click-close while still hovering should not immediately reopen
        suppressHoverRef.current = true;
        setMega(null);
        return;
      }
      suppressHoverRef.current = false;
      setMega(key);
    },
    [cancelHoverTimers, setMega]
  );

  useEffect(() => {
    document.body.classList.toggle("dock-mega-open", Boolean(megaOpen));
    return () => document.body.classList.remove("dock-mega-open");
  }, [megaOpen]);

  useEffect(() => {
    if (!megaOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMega();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [megaOpen, closeMega]);

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
          onPointerLeave={onTriggerLeave}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="digital"
          label={LABEL.digital}
          active={isMegaGroupActive(pathname, navDigitalConsulting)}
          open={megaOpen === "digital"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={onTriggerLeave}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="products"
          label={LABEL.products}
          active={isMegaGroupActive(pathname, navProducts)}
          open={megaOpen === "products"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={onTriggerLeave}
          onFocus={openMegaNow}
          onClick={toggleMega}
        />
        <MegaTrigger
          id="infra"
          label={LABEL.infra}
          active={isInfrastructureActive(pathname)}
          open={megaOpen === "infra"}
          onPointerEnter={scheduleOpen}
          onPointerLeave={onTriggerLeave}
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

      {portalReady &&
        createPortal(
          <>
            <NavMegaBackdrop open={Boolean(megaOpen)} onClose={closeMega} />
            <DesktopMegaLayer
              activeKey={megaOpen}
              onPanelEnter={cancelHoverTimers}
              onPanelLeave={scheduleClose}
            />
          </>,
          document.body
        )}
    </>
  );
}

function MobileDropdownLink({
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
      className={`dock-dd-link${active ? " dock-dd-link--active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
}

function MobileDropdown({
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
        className={`dock-dd-scrim${open ? " is-open" : ""}`}
        onClick={onClose}
        aria-hidden
      />
      <div
        id="dock-mobile-dropdown"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`dock-dd${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="dock-dd-body">
          <NavActiveLink href="/" active={routeActive(pathname, "/")} className="dock-dd-top" onClick={onClose}>
            Home
          </NavActiveLink>

          {MEGA_KEYS.map((key) => {
            const expanded = accordion === key;
            const group = GROUPS[key];
            const panelId = `dock-dd-panel-${key}`;
            return (
              <div key={key} className={`dock-dd-item${expanded ? " is-open" : ""}`}>
                <button
                  type="button"
                  className="dock-dd-trigger"
                  onClick={() => onAccordion(key)}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                >
                  <span>{LABEL[key]}</span>
                  <ChevronDown size={16} className="dock-dd-chevron" aria-hidden />
                </button>
                <div id={panelId} className="dock-dd-panel" role="region">
                  <div className="dock-dd-panel-inner">
                    {group.items.map((item) => (
                      <MobileDropdownLink
                        key={item.href}
                        item={item}
                        onNavigate={onClose}
                        active={routeActive(pathname, item.href)}
                      />
                    ))}
                    {group.sections?.map((section) => (
                      <div key={section.title} className="dock-dd-section">
                        <p className="dock-dd-section-label">{section.title}</p>
                        {section.items.map((item) => (
                          <MobileDropdownLink
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
            );
          })}

          <NavActiveLink
            href={navIndustriesHref}
            active={routeActive(pathname, navIndustriesHref)}
            className="dock-dd-top"
            onClick={onClose}
          >
            {LABEL.industries}
          </NavActiveLink>
          <NavActiveLink
            href={navContactHref}
            active={routeActive(pathname, navContactHref)}
            className="dock-dd-top"
            onClick={onClose}
          >
            {LABEL.contact}
          </NavActiveLink>

          <Link href={navContactHref} onClick={onClose} className="dock-cta dock-cta--drawer">
            <span>Schedule Call</span>
            <ArrowRight size={15} strokeWidth={2.25} className="dock-cta-icon" aria-hidden />
          </Link>
        </div>
      </div>
    </>
  );
}

function MobileNavControls({
  open,
  onToggle,
}: {
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <>
      <Link href={navContactHref} className="dock-cta" aria-label="Schedule a call with Astrenox">
        <span>Schedule Call</span>
        <ArrowRight size={15} strokeWidth={2.25} className="dock-cta-icon" aria-hidden />
      </Link>
      <button
        type="button"
        className="dock-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="dock-mobile-dropdown"
        onClick={onToggle}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [accordion, setAccordion] = useState<MegaKey | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setAccordion(null);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((current) => {
      if (current) setAccordion(null);
      return !current;
    });
  }, []);

  const toggleAccordion = useCallback((key: MegaKey) => {
    setAccordion((current) => (current === key ? null : key));
  }, []);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  return (
    <div className="dock-shell">
      <header className="dock-header">
        <nav aria-label="Main navigation" className="dock-bar">
          <div className="dock-grid">
            <div className="dock-zone dock-zone--brand">
              <AstrenoxLogo variant="nav" height={36} />
            </div>

            <div className="dock-zone dock-zone--menu">
              <DesktopMenu key={pathname} pathname={pathname} />
            </div>

            <div className="dock-zone dock-zone--cta">
              <MobileNavControls open={menuOpen} onToggle={toggleMenu} />
            </div>
          </div>
        </nav>

        <MobileDropdown
          pathname={pathname}
          open={menuOpen}
          accordion={accordion}
          onClose={closeMenu}
          onAccordion={toggleAccordion}
        />
      </header>
    </div>
  );
}
