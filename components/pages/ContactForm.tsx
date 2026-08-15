"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useId, useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { CheckCircle2, FileText, Upload, X } from "lucide-react";
import { contactPage } from "@/app/content/site-pages";
import { site } from "@/app/content/astrenox-content";

interface ContactFormProps {
  variant?: "default" | "premium";
  defaultInquiry?: string;
}

const FILE_ACCEPT =
  ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.zip,.png,.jpg,.jpeg,.webp";
const MAX_FILE_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 5;

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ContactForm({
  variant = "default",
  defaultInquiry,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formId = useId();
  const isPremium = variant === "premium";

  function addFiles(incoming: FileList | File[]) {
    const next = [...files];
    let error: string | null = null;

    for (const file of Array.from(incoming)) {
      if (file.size > MAX_FILE_BYTES) {
        error = "Each file must be 10 MB or smaller.";
        continue;
      }
      if (next.some((existing) => existing.name === file.name && existing.size === file.size)) {
        continue;
      }
      if (next.length >= MAX_FILES) {
        error = "You can attach up to 5 files.";
        break;
      }
      next.push(file);
    }

    setFileError(error);
    setFiles(next.slice(0, MAX_FILES));
  }

  function removeFile(name: string, size: number) {
    setFiles((current) => current.filter((file) => !(file.name === name && file.size === size)));
    setFileError(null);
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) addFiles(event.target.files);
    event.target.value = "";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    if (event.dataTransfer.files.length) addFiles(event.dataTransfer.files);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const company = data.get("company");
    const inquiry = data.get("inquiry");
    const message = data.get("message");
    const attachments =
      files.length > 0
        ? `\n\nAttachments to include:\n${files
            .map((file) => `- ${file.name} (${formatFileSize(file.size)})`)
            .join("\n")}\n\nPlease attach the files listed above.`
        : "";
    const subject = encodeURIComponent(`[${inquiry}] ${company}, Astrenox inquiry`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInquiry: ${inquiry}\n\n${message}${attachments}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (isPremium) {
    return (
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            className="contact-form-premium contact-form-success"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          >
            <CheckCircle2 size={32} className="contact-form-success-icon" aria-hidden />
            <p className="contact-form-success-title">Request prepared</p>
            <p className="contact-form-success-desc">
              {files.length > 0
                ? "Your email client is opening. Please attach the files you selected."
                : "Your email client is opening with your message."}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            id={formId}
            onSubmit={handleSubmit}
            className="contact-form-premium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="contact-form-row">
              <label className="contact-form-field" htmlFor={`${formId}-name`}>
                <span className="contact-form-label">Full Name</span>
                <input
                  id={`${formId}-name`}
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="contact-form-input"
                />
              </label>
              <label className="contact-form-field" htmlFor={`${formId}-email`}>
                <span className="contact-form-label">Work Email</span>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="contact-form-input"
                />
              </label>
            </div>

            <label className="contact-form-field" htmlFor={`${formId}-company`}>
              <span className="contact-form-label">Company</span>
              <input
                id={`${formId}-company`}
                name="company"
                autoComplete="organization"
                placeholder="Organization"
                className="contact-form-input"
              />
            </label>

            <label className="contact-form-field" htmlFor={`${formId}-inquiry`}>
              <span className="contact-form-label">Inquiry Type</span>
              <select
                id={`${formId}-inquiry`}
                name="inquiry"
                required
                defaultValue={defaultInquiry ?? contactPage.inquiryTypes[1]}
                className="contact-form-input contact-form-select"
              >
                {contactPage.inquiryTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact-form-field" htmlFor={`${formId}-message`}>
              <span className="contact-form-label">Your Message</span>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={5}
                placeholder="Share project docs, technical specs, timeline, and goals…"
                className="contact-form-input contact-form-textarea"
              />
            </label>

            <div className="contact-form-field">
              <span className="contact-form-label" id={`${formId}-files-label`}>
                Attach files
              </span>
              <input
                ref={fileInputRef}
                id={`${formId}-files`}
                type="file"
                name="attachments"
                multiple
                accept={FILE_ACCEPT}
                className="contact-form-file-input"
                onChange={handleFileChange}
                aria-labelledby={`${formId}-files-label`}
              />
              <div
                className={`contact-form-dropzone${isDragging ? " is-dragging" : ""}`}
                onDragOver={(event) => {
                  event.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
              >
                <button
                  type="button"
                  className="contact-form-dropzone-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload size={16} aria-hidden />
                  <span>Upload specs, decks, or diagrams</span>
                </button>
                <p className="contact-form-dropzone-hint">
                  PDF, Office, images, or ZIP · up to 10 MB each
                </p>
              </div>
              {files.length > 0 ? (
                <ul className="contact-form-file-list">
                  {files.map((file) => (
                    <li key={`${file.name}-${file.size}`} className="contact-form-file-item">
                      <FileText size={14} aria-hidden />
                      <span className="contact-form-file-name">{file.name}</span>
                      <span className="contact-form-file-size">{formatFileSize(file.size)}</span>
                      <button
                        type="button"
                        className="contact-form-file-remove"
                        onClick={() => removeFile(file.name, file.size)}
                        aria-label={`Remove ${file.name}`}
                      >
                        <X size={14} aria-hidden />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
              {fileError ? <p className="contact-form-file-error">{fileError}</p> : null}
            </div>

            <button type="submit" className="contact-form-submit">
              Send Message
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-text focus:outline-none focus:ring-2 focus:ring-primary/30";
  const labelClass = "text-xs font-medium text-muted uppercase tracking-wide";

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="premium-card card-pad contact-form-success"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
        >
          <CheckCircle2 size={32} className="text-emerald-500 mb-3" />
          <p className="font-heading text-lg font-semibold">Request prepared</p>
          <p className="text-sm text-muted mt-2">Your email client is opening with your message.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="premium-card card-pad lg:card-pad-lg space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className={labelClass}>Full Name</span>
              <input name="name" required className={inputClass} />
            </label>
            <label className="block">
              <span className={labelClass}>Work Email</span>
              <input name="email" type="email" required className={inputClass} />
            </label>
          </div>
          <label className="block">
            <span className={labelClass}>Company</span>
            <input name="company" className={inputClass} />
          </label>
          <label className="block">
            <span className={labelClass}>Inquiry Type</span>
            <select name="inquiry" required className={inputClass} defaultValue={defaultInquiry}>
              {contactPage.inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelClass}>Your Message</span>
            <textarea name="message" required rows={5} className={`${inputClass} resize-y`} />
          </label>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-primary hover:bg-[#6a2859] rounded-full transition-colors shadow-sm"
          >
            Send Message
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
