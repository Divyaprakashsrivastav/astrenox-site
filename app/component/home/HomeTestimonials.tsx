"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import DesignSection, { DesignHeader } from "../design/DesignSection";
import { Badge } from "../ui/primitives/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/primitives/carousel";
import { homeTestimonials } from "@/app/content/homepage-content";
import { useReducedMotion } from "../features/useReducedMotion";

export default function HomeTestimonials() {
  const reduced = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api || reduced || paused) return;
    intervalRef.current = setInterval(scrollNext, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [api, reduced, paused, scrollNext]);

  return (
    <DesignSection id="testimonials" flow border={false} ambient={false}>
      <DesignHeader
        flow
        label={homeTestimonials.label}
        title={homeTestimonials.title}
        description={homeTestimonials.description}
        align="center"
      />

      <div
        className="testimonial-carousel-wrap"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Carousel opts={{ align: "start", loop: true }} setApi={setApi}>
          <CarouselContent>
            {homeTestimonials.items.map((item) => (
              <CarouselItem key={item.author + item.role} className="md:basis-1/2 lg:basis-1/2">
                <motion.article
                  className="testimonial-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  data-cursor-hover
                >
                  <blockquote className="testimonial-quote">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <footer className="testimonial-footer">
                    <div>
                      <p className="testimonial-author">{item.author}</p>
                      <p className="testimonial-role">{item.role}</p>
                    </div>
                    <div className="testimonial-badges">
                      <Badge variant="primary">{item.projectType}</Badge>
                      <Badge variant="default">{item.outcome}</Badge>
                    </div>
                  </footer>
                </motion.article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </DesignSection>
  );
}
