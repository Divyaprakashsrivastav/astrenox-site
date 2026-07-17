"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import FormattedText from "../../ui/FormattedText";
import { EASE_PREMIUM } from "../../v2/motion";

const EASE = EASE_PREMIUM;

type ExpandableBlockProps = {
  teaser?: ReactNode;
  children: ReactNode;
  expandLabel?: string;
  collapseLabel?: string;
  defaultOpen?: boolean;
  className?: string;
};

/** Teaser visible by default; full content revealed on interaction. */
export function ExpandableBlock({
  teaser,
  children,
  expandLabel = "Read more",
  collapseLabel = "Show less",
  defaultOpen = false,
  className = "",
}: ExpandableBlockProps) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className={`hp-disclosure ${className}`.trim()}>
      {teaser ? <div className="hp-disclosure-teaser">{teaser}</div> : null}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="hp-disclosure-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <motion.div
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: 4 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        type="button"
        className="hp-disclosure-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? collapseLabel : expandLabel}
        <ChevronDown size={16} className={open ? "is-open" : ""} aria-hidden />
      </button>
    </div>
  );
}

type ParagraphExpandProps = {
  paragraphs: readonly string[];
  visibleCount?: number;
  className?: string;
  paragraphClassName?: string;
};

/** Splits document paragraphs — first N visible, rest behind expand. All text preserved. */
export function ParagraphExpand({
  paragraphs,
  visibleCount = 1,
  className = "",
  paragraphClassName = "",
}: ParagraphExpandProps) {
  if (paragraphs.length <= visibleCount) {
    return (
      <div className={className}>
        {paragraphs.map((p) => (
          <p key={p} className={paragraphClassName}>
            <FormattedText text={p} />
          </p>
        ))}
      </div>
    );
  }

  const visible = paragraphs.slice(0, visibleCount);
  const hidden = paragraphs.slice(visibleCount);

  return (
    <ExpandableBlock
      className={className}
      expandLabel="Continue reading"
      collapseLabel="Show less"
      teaser={
        <>
          {visible.map((p) => (
            <p key={p} className={paragraphClassName}>
              <FormattedText text={p} />
            </p>
          ))}
        </>
      }
    >
      {hidden.map((p) => (
        <p key={p} className={paragraphClassName}>
          <FormattedText text={p} />
        </p>
      ))}
    </ExpandableBlock>
  );
}

type AccordionItemProps = {
  id: string;
  title: ReactNode;
  summary?: ReactNode;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
  index: number;
};

export function AccordionItem({
  id,
  title,
  summary,
  children,
  open,
  onToggle,
  index,
}: AccordionItemProps) {
  const panelId = `${id}-panel`;

  return (
    <motion.div
      className={`hp-accordion-item ${open ? "is-open" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.45, delay: index * 0.04, ease: EASE }}
    >
      <button
        type="button"
        className="hp-accordion-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="hp-accordion-trigger-text">
          <span className="hp-accordion-title">{title}</span>
          {summary && !open ? (
            <span className="hp-accordion-summary">{summary}</span>
          ) : null}
        </span>
        <ChevronDown size={18} className={open ? "is-open" : ""} aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="hp-accordion-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <div className="hp-accordion-panel-inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type TabPanelProps<T extends string> = {
  tabs: readonly { id: T; label: string }[];
  active: T;
  onChange: (id: T) => void;
  children: ReactNode;
  ariaLabel: string;
};

export function TabPanel<T extends string>({
  tabs,
  active,
  onChange,
  children,
  ariaLabel,
}: TabPanelProps<T>) {
  return (
    <div className="hp-tabs">
      <div className="hp-tabs-list" role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`hp-tab ${active === tab.id ? "is-active" : ""}`}
            onClick={() => onChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          className="hp-tab-panel"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

type ExpandCardProps = {
  id: string;
  icon?: ReactNode;
  title: ReactNode;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
  index: number;
  className?: string;
};

/** Click-to-expand card — title and icon visible; body revealed on interaction. */
export function ExpandCard({
  id,
  icon,
  title,
  children,
  open,
  onToggle,
  index,
  className = "",
}: ExpandCardProps) {
  const panelId = `${id}-panel`;

  return (
    <motion.div
      className={`hp-expand-card ${open ? "is-open" : ""} ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: EASE }}
    >
      <button
        type="button"
        className="hp-expand-card-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {icon ? <span className="hp-expand-card-icon">{icon}</span> : null}
        <span className="hp-expand-card-title">{title}</span>
        <ChevronDown size={18} className={open ? "is-open" : ""} aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="hp-expand-card-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.42, ease: EASE }}
          >
            <motion.div
              className="hp-expand-card-inner"
              initial={{ y: 8 }}
              animate={{ y: 0 }}
              exit={{ y: 4 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
