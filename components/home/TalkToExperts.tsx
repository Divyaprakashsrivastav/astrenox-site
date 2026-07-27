"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { talkToExperts } from "@/app/content/astrenox-content";

export default function TalkToExperts() {
  return (
    <section className="relative py-6 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <Link
          href={talkToExperts.href}
          className="inline-flex items-center gap-2 font-heading text-lg sm:text-xl font-semibold text-text hover:text-primary transition-colors group"
        >
          {talkToExperts.title}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
            strokeWidth={2}
          />
        </Link>
      </div>
    </section>
  );
}
