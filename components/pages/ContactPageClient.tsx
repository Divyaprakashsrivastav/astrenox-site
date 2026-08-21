"use client";

import "./contact-page.css";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { contactPage } from "@/app/content/site-pages";
import ContactForm from "@/components/pages/ContactForm";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateLabel(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function buildMonthCells(view: Date) {
  const year = view.getFullYear();
  const month = view.getMonth();
  const first = new Date(year, month, 1);
  const startPad = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: Array<Date | null> = [];

  for (let i = 0; i < startPad; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function isSelectable(day: Date, today: Date) {
  const d = startOfDay(day);
  if (d < today) return false;
  const weekday = d.getDay();
  return weekday !== 0 && weekday !== 6;
}

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const cells = useMemo(() => buildMonthCells(view), [view]);
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ||
    "https://calendly.com/prajwal-astrentech/30min";

  useEffect(() => {
    const intent = searchParams.get("intent");
    const target =
      intent === "rfp" ? "rfp" : intent === "scoping" || intent === "diagnostic" ? "scoping" : null;
    if (!target) return;
    const el = document.getElementById(target);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [searchParams]);

  function shiftMonth(delta: number) {
    setView((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  }

  function confirmBooking() {
    if (!selectedDay || !selectedSlot) return;

    const subject = encodeURIComponent("Architecture Scoping, 30-minute session");
    const body = encodeURIComponent(
      `I'd like to book a 30-minute architecture scoping session.\n\nPreferred date: ${formatDateLabel(selectedDay)}\nPreferred time: ${selectedSlot} IST\n\nInfrastructure challenges / context:\n`
    );
    window.location.href = `mailto:prajwal@astrentech.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="cp-page">
      <section id="rfp" className="cp-section scroll-mt-28">
        <div className="cp-inner">
          <div className="cp-copy">
            <h2 className="cp-section-title">{contactPage.inbound.title}</h2>

            <ul className="cp-channels">
              {contactPage.channels.map((channel) => {
                const external = channel.href.startsWith("http");
                return (
                  <li key={channel.label}>
                    <span className="cp-channel-label">{channel.label}</span>
                    <a
                      href={channel.href}
                      className="cp-channel-value"
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                    >
                      {channel.label === "Number" ? (
                        <Phone size={14} aria-hidden />
                      ) : channel.label === "Calendly" ? (
                        <CalendarDays size={14} aria-hidden />
                      ) : (
                        <Mail size={14} aria-hidden />
                      )}
                      {channel.value}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="cp-hq">
              <p className="cp-channel-label">{contactPage.headquarters.title}</p>
              <p className="cp-hq-line">
                <MapPin size={14} aria-hidden />
                {contactPage.headquarters.address}
              </p>
              <p className="cp-hq-line">
                <Clock size={14} aria-hidden />
                {contactPage.headquarters.hours}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="scoping" className="cp-section cp-section--alt scroll-mt-28">
        <div className="cp-inner cp-split">
          <div className="cp-form-card">
            <ContactForm
              variant="premium"
              defaultInquiry="Submit Technical Requirements Specs"
            />
          </div>

          <div className="cp-calendar-card">
            {calendlyUrl ? (
              <div className="cp-calendly-wrap">
                <h3 className="cp-cal-embed-title">Book a Consultation</h3>
                <iframe
                  title="Book a consultation with Calendly"
                  src={
                    calendlyUrl.includes("calendly.com")
                      ? `${calendlyUrl.replace(/\/$/, "")}?hide_gdpr_banner=1&background_color=08060f&text_color=f4f4f5&primary_color=7c3aed`
                      : calendlyUrl
                  }
                  className="cp-calendly-frame"
                  loading="lazy"
                />
                <p className="cp-cal-note">
                  Opens the Astrenox calendar portal to finalize your booking.
                </p>
              </div>
            ) : (
              <>
                <div className="cp-cal-header">
                  <button
                    type="button"
                    className="cp-cal-nav"
                    onClick={() => shiftMonth(-1)}
                    aria-label="Previous month"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <h3>
                    {MONTHS[view.getMonth()]} {view.getFullYear()}
                  </h3>
                  <button
                    type="button"
                    className="cp-cal-nav"
                    onClick={() => shiftMonth(1)}
                    aria-label="Next month"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="cp-cal-weekdays" aria-hidden>
                  {WEEKDAYS.map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>

                <div className="cp-cal-grid" role="grid" aria-label="Scoping calendar">
                  {cells.map((day, index) => {
                    if (!day) {
                      return <span key={`empty-${index}`} className="cp-cal-day is-empty" />;
                    }

                    const selectable = isSelectable(day, today);
                    const selected = selectedDay ? sameDay(day, selectedDay) : false;
                    const isToday = sameDay(day, today);

                    return (
                      <button
                        key={day.toISOString()}
                        type="button"
                        role="gridcell"
                        disabled={!selectable}
                        className={[
                          "cp-cal-day",
                          selectable ? "is-available" : "is-disabled",
                          selected ? "is-selected" : "",
                          isToday ? "is-today" : "",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => {
                          setSelectedDay(day);
                          setSelectedSlot(null);
                        }}
                      >
                        {day.getDate()}
                      </button>
                    );
                  })}
                </div>

                <div className="cp-slots">
                  <p className="cp-slots-label">Available times (IST)</p>
                  <div className="cp-slots-grid">
                    {contactPage.timeSlots.map((slot) => {
                      const enabled = Boolean(selectedDay);
                      const active = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          disabled={!enabled}
                          className={`cp-slot${active ? " is-selected" : ""}`}
                          onClick={() => setSelectedSlot(slot)}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="button"
                  className="cp-btn-primary cp-btn-confirm"
                  disabled={!selectedDay || !selectedSlot}
                  onClick={confirmBooking}
                >
                  Confirm scoping session
                  <ArrowRight size={16} aria-hidden />
                </button>
                <p className="cp-cal-note">
                  Opens a prefilled email to prajwal@astrentech.com with your preferred slot.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
