import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import type { PlaceholderMeta } from "@/app/content/placeholder-pages";

export default function PlaceholderPage({ title, description, section }: PlaceholderMeta) {
  return (
    <SiteLayout>
      <section className="nav-placeholder">
        <div className="nav-placeholder-inner">
          <p className="nav-placeholder-eyebrow">{section}</p>
          <h1 className="nav-placeholder-title">{title}</h1>
          <p className="nav-placeholder-body">{description}</p>
          <div className="nav-placeholder-actions">
            <Link href="/contact" className="nav-cta inline-flex items-center gap-2">
              Contact us
              <ArrowRight size={14} aria-hidden />
            </Link>
            <Link href="/" className="nav-placeholder-link">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
