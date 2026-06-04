"use client";

import { useState } from "react";
import { contactPage } from "@/app/content/site-pages";
import { site } from "@/app/content/astrenox-content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const inquiry = data.get("inquiry");
    const message = data.get("message");
    const subject = encodeURIComponent(`[${inquiry}] ${company} — Astrenox inquiry`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInquiry: ${inquiry}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="premium-card card-pad lg:card-pad-lg space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-medium text-muted uppercase tracking-wide">
            Full Name
          </span>
          <input
            name="name"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-muted uppercase tracking-wide">
            Work Email
          </span>
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-xs font-medium text-muted uppercase tracking-wide">
          Company
        </span>
        <input
          name="company"
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </label>
      <label className="block">
        <span className="text-xs font-medium text-muted uppercase tracking-wide">
          Inquiry Type
        </span>
        <select
          name="inquiry"
          required
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30"
        >
          {contactPage.inquiryTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label className="block">
        <span className="text-xs font-medium text-muted uppercase tracking-wide">
          Your Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
        />
      </label>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-[#6a2859] rounded-full transition-colors shadow-sm"
      >
        {submitted ? "Opening your email client…" : "Send Message"}
      </button>
    </form>
  );
}
