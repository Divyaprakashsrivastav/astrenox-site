import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/app/component/layout/SiteLayout";
import PageHero from "@/app/component/pages/PageHero";
import PageCTA from "@/app/component/pages/PageCTA";
import Features from "@/app/component/Features";
import { servicesHub, serviceLinks } from "@/app/content/site-pages";

export const metadata: Metadata = {
  title: "Services | Astrenox",
  description: servicesHub.hero.description,
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={servicesHub.hero.eyebrow}
        title={servicesHub.hero.title}
        description={servicesHub.hero.description}
      />

      <section className="section-shell relative bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceLinks.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="premium-card p-8 group hover:border-primary/25 transition-colors block"
              >
                <h3 className="font-heading text-xl font-semibold text-text group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Features />
      <PageCTA />
    </SiteLayout>
  );
}
