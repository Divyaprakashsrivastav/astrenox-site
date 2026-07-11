"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Building2,
  Check,
  ChevronDown,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import { useCallback, useId, useRef, useState } from "react";
import { contactPage } from "@/app/content/site-pages";
import { site } from "@/app/content/astrenox-content";
import { EASE_PREMIUM } from "../v2/motion";

export default function HomeContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formId = useId();

  const autoGrow = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const inquiry = data.get("inquiry");
    const message = data.get("message");
    const subject = encodeURIComponent(`[${inquiry}] ${company} — Astrenox inquiry`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInquiry: ${inquiry}\n\n${message}`,
    );

    window.setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setSubmitting(false);
      setSubmitted(true);
    }, 420);
  }

  return (
    <div className="cta-form-shell">
      <span className="cta-form-glow" aria-hidden />
      <span className="cta-form-border" aria-hidden />

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="cta-form-success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE_PREMIUM }}
          >
            <span className="cta-form-success-glow" aria-hidden />
            <motion.span
              className="cta-form-success-icon"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.08, ease: EASE_PREMIUM }}
            >
              <Check size={28} strokeWidth={2.5} aria-hidden />
            </motion.span>
            <p className="cta-form-success-title">Message Sent</p>
            <p className="cta-form-success-desc">
              Your email client is opening with your message.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id={formId}
            onSubmit={handleSubmit}
            className="cta-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="cta-form-grid cta-form-grid--2">
              <div className="cta-field">
                <div className="cta-input-wrap">
                  <User className="cta-input-icon" size={17} strokeWidth={1.75} aria-hidden />
                  <input
                    id={`${formId}-name`}
                    name="name"
                    required
                    placeholder=" "
                    autoComplete="name"
                    className="cta-input"
                  />
                  <label htmlFor={`${formId}-name`} className="cta-float-label">
                    Full Name
                  </label>
                  <span className="cta-input-ring" aria-hidden />
                </div>
              </div>

              <div className="cta-field">
                <div className="cta-input-wrap">
                  <Mail className="cta-input-icon" size={17} strokeWidth={1.75} aria-hidden />
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    autoComplete="email"
                    className="cta-input"
                  />
                  <label htmlFor={`${formId}-email`} className="cta-float-label">
                    Work Email
                  </label>
                  <span className="cta-input-ring" aria-hidden />
                </div>
              </div>
            </div>

            <div className="cta-field">
              <div className="cta-input-wrap">
                <Building2 className="cta-input-icon" size={17} strokeWidth={1.75} aria-hidden />
                <input
                  id={`${formId}-company`}
                  name="company"
                  placeholder=" "
                  autoComplete="organization"
                  className="cta-input"
                />
                <label htmlFor={`${formId}-company`} className="cta-float-label">
                  Company
                </label>
                <span className="cta-input-ring" aria-hidden />
              </div>
            </div>

            <div className="cta-field">
              <div className="cta-input-wrap cta-input-wrap--select">
                <ChevronDown className="cta-select-chevron" size={17} strokeWidth={1.75} aria-hidden />
                <select
                  id={`${formId}-inquiry`}
                  name="inquiry"
                  required
                  defaultValue=""
                  className="cta-input cta-select"
                >
                  <option value="" disabled>
                    Inquiry Type
                  </option>
                  {contactPage.inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <label htmlFor={`${formId}-inquiry`} className="cta-float-label cta-float-label--select">
                  Inquiry Type
                </label>
                <span className="cta-input-ring" aria-hidden />
              </div>
            </div>

            <div className="cta-field">
              <div className="cta-input-wrap cta-input-wrap--textarea">
                <MessageSquare className="cta-input-icon cta-input-icon--textarea" size={17} strokeWidth={1.75} aria-hidden />
                <textarea
                  ref={textareaRef}
                  id={`${formId}-message`}
                  name="message"
                  required
                  placeholder=" "
                  rows={4}
                  className="cta-input cta-textarea"
                  onInput={(e) => autoGrow(e.currentTarget)}
                />
                <label htmlFor={`${formId}-message`} className="cta-float-label">
                  Your Message
                </label>
                <span className="cta-input-ring" aria-hidden />
              </div>
            </div>

            <motion.button
              type="submit"
              className="cta-form-submit"
              disabled={submitting}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.32, ease: EASE_PREMIUM }}
            >
              <span>{submitting ? "Sending…" : "Send Message"}</span>
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
