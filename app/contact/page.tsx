import type { Metadata } from "next";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import ContactForm from "@/app/component/pages/ContactForm";
import FAQSection from "@/app/component/FAQSection";
import { contactPage } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Contact | Astrenox",
  description: contactPage.hero.description,
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={contactPage.hero.title}
        description={contactPage.hero.description}
        primaryCta={{ label: "Send a message", href: "#form" }}
        secondaryCta={{ label: "View services", href: "/services" }}
      />

      <section id="form" className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-heading text-xl font-semibold text-text">
                Direct channels
              </h2>
              <ul className="space-y-4">
                {contactPage.channels.map((ch) => (
                  <li key={ch.label} className="premium-card p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                      {ch.label}
                    </p>
                    {ch.href ? (
                      <a
                        href={ch.href}
                        className="mt-1 block text-sm font-medium text-primary hover:underline"
                      >
                        {ch.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-text">{ch.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </SiteLayout>
  );
}
