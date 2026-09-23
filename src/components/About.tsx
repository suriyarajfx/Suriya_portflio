"use client";

import React from "react";
import { SectionEyebrow } from "./SectionEyebrow";
import { motion } from "framer-motion";
import { Layers, Film, PenTool, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const stats = [
    { value: "3+", label: "Years Exp.", sub: "Crafting visual media" },
    { value: "50+", label: "Projects", sub: "Delivered on schedule" },
    { value: "10+", label: "Clients", sub: "Brands & global creators" },
  ];

  const pillars = [
    {
      icon: Film,
      title: "Video Editing",
      desc: "Story-driven rhythm, sound pacing, and precise cinematic cuts in Premiere Pro.",
    },
    {
      icon: Layers,
      title: "Motion Design",
      desc: "Dynamic kinetic typography, 2D/3D brand graphics, and seamless visual effects.",
    },
    {
      icon: PenTool,
      title: "Brand Identity",
      desc: "Clean, modern visual systems and identity design for modern tech and ventures.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 border-t border-[var(--hair)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow
          number="01"
          category="About"
          subtitle="One editor, three crafts"
          rightMeta="CUDDALORE · INDIA"
        />

        {/* Editorial Text & Brand Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="font-display text-[clamp(28px,4.5vw,52px)] font-bold tracking-tight text-[var(--ink)] leading-[1.12]">
              Turning raw footage and ideas into{" "}
              <span className="font-serif italic font-normal text-[var(--accent)]">
                cinematic stories
              </span>
              .
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-lg text-[var(--muted)] leading-relaxed">
              <p>
                I&apos;m a video editor, motion designer, and graphic designer based in
                Cuddalore, India — turning raw footage and ideas into cinematic stories.
                I work with brands and creators in <strong>After Effects</strong> and{" "}
                <strong>Premiere Pro</strong>, bringing precision and energy to every frame.
              </p>
              <p>
                Currently building <strong className="text-[var(--ink)]">TWO99</strong>, a
                tech-forward, AI-integrated design brand bridging generative intelligence with
                bespoke editorial aesthetics.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[var(--hair)]">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-[var(--accent)]">
                      <Icon className="w-4 h-4" />
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--ink)] font-semibold">
                        {pillar.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Stats Block - Ladybug Style Big Numerals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col justify-between p-7 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)]"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--faint)] pb-4 border-b border-[var(--hair)]">
              Track Record & Volume
            </div>

            <div className="divide-y divide-[var(--hair)] my-2">
              {stats.map((stat, idx) => (
                <div key={idx} className="py-5 first:pt-4 last:pb-2">
                  <div className="font-display text-[clamp(42px,5.5vw,68px)] font-extrabold tracking-tighter text-[var(--ink)] leading-none flex items-baseline">
                    <span>{stat.value}</span>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--ink)] font-semibold">
                      {stat.label}
                    </span>
                    <span className="text-xs text-[var(--muted)]">{stat.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[var(--hair)] flex items-center justify-between text-[11px] font-mono text-[var(--faint)]">
              <span>ACTIVE FREELANCER</span>
              <span className="text-[var(--accent)]">● HIGH CAPACITY</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
