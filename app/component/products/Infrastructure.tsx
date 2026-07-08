"use client";

import { memo } from "react";
import {
  Cloud,
  Network,
  Globe2,
  Building,
  Server,
  Car,
} from "lucide-react";
import { infrastructureSection } from "@/app/content/products-content";
import ProductsSectionShell from "./ProductsSectionShell";
import ProductsAccordion from "./ProductsAccordion";

const ICONS: Record<string, typeof Cloud> = {
  cloud: Cloud,
  network: Network,
  gcc: Globe2,
  bms: Building,
  "datacenter-managed": Server,
  "datacenter-enterprise": Server,
  parking: Car,
};

function Infrastructure() {
  return (
    <section className="products-section products-inner">
      <ProductsSectionShell
        eyebrow={infrastructureSection.label}
        title={infrastructureSection.title}
      />

      <div className="mt-12 flex flex-col gap-8">
        {infrastructureSection.panels.map((panel) => {
          const Icon = ICONS[panel.id] ?? Cloud;
          return (
            <article key={panel.id} className="products-glass products-infra-block">
              <div className="products-infra-block-header">
                <div className="products-infra-icon">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="products-card-title">{panel.title}</h3>
                  <p className="products-body mt-2 text-sm">{panel.description}</p>
                </div>
              </div>

              <div className="mt-6">
                <ProductsAccordion
                  allowMultiple
                  items={panel.subsections.map((subsection) => ({
                    id: `${panel.id}-${subsection.title}`,
                    title: subsection.title,
                    content: (
                      <>
                        <p className="products-body text-sm">{subsection.intro}</p>
                        {subsection.bullets.length > 0 && (
                          <ul className="products-detail-list mt-4">
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet} className="text-sm">
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ),
                  }))}
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Infrastructure);
