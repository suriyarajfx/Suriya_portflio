"use client";

import React from "react";
import { SectionEyebrow } from "./SectionEyebrow";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        "Suriya delivered exactly what we envisioned. The motion graphics were clean, cinematic, and on-brand. Highly recommend for any creative project.",
      author: "Deepan",
      role: "Founder · PeakSales",
      category: "Motion Graphics",
    },
    {
      quote:
        "The video editing was outstanding — smooth transitions, great colour grading, and delivered ahead of schedule. Will definitely work again.",
      author: "Rs. Venkateswaran",
      role: "Content Creator",
      category: "Video Editing",
    },
    {
      quote:
        "Our logo came out better than expected. Suriya understood the brief perfectly and brought a fresh, modern perspective to the design.",
      author: "Karthik S.",
      role: "CEO · Tech Startup",
      category: "Brand Design",
    },
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-36 border-t border-[var(--hair)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow
          number="04"
          category="Testimonials"
          subtitle="Client reviews"
          rightMeta="VERIFIED FEEDBACK"
        />

        <div className="mb-12 max-w-2xl">
          <h2 className="font-display text-[clamp(28px,4.5vw,48px)] font-bold tracking-tight text-[var(--ink)]">
            Trusted by creators &amp; founders.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--muted)]">
            Consistent craft, communicative iteration loops, and reliable turnaround.
          </p>
        </div>

        {/* 3 Flat Bordered Cards - Ladybug Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] relative hover:border-[var(--ink)]/30 transition-colors duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[var(--hair)]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent)] font-semibold">
                    0{idx + 1} · {rev.category}
                  </span>
                  <Quote className="w-4 h-4 text-[var(--faint)]" />
                </div>

                <p className="mt-5 text-base sm:text-lg text-[var(--ink)] leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[var(--hair)]">
                <div className="font-display font-semibold text-base text-[var(--ink)]">
                  {rev.author}
                </div>
                <div className="font-mono text-xs text-[var(--muted)] mt-0.5">
                  {rev.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
