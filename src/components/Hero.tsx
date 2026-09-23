"use client";

import React from "react";
import { VideoFrame } from "./VideoFrame";
import { ArrowDown, MapPin, Calendar, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Header Eyebrow & Status Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[var(--hair)] mb-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--muted)] flex items-center gap-2">
            <span className="text-[var(--accent)]">[</span>
            <span className="font-semibold text-[var(--ink)]">PORTFOLIO · 2025</span>
            <span className="text-[var(--accent)]">]</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[var(--muted)]">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Cuddalore, Tamil Nadu, India</span>
            </div>

            <div className="hidden sm:inline-block w-px h-3 bg-[var(--hair)]" />

            <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-dot" />
              <span className="font-sans font-medium">Available for freelance work</span>
            </div>
          </div>
        </div>

        {/* Hero Headline & Sub-line */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-display text-[clamp(44px,7.5vw,98px)] font-bold tracking-[-0.03em] leading-[0.98] text-[var(--ink)]"
          >
            Crafting stories that{" "}
            <span className="font-serif italic font-normal tracking-normal text-[var(--accent)]">
              move
            </span>{" "}
            people.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-6 text-lg sm:text-2xl text-[var(--muted)] font-normal max-w-3xl leading-relaxed"
          >
            <strong className="font-semibold text-[var(--ink)]">Suriya K</strong> — Video Editor · Motion Designer · Graphic Designer
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3.5 sm:gap-4 mt-8"
          >
            <a
              href="https://calendly.com/suriyarajk04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill px-6 py-3.5 text-sm font-medium"
            >
              <Calendar className="w-4 h-4 mr-1 opacity-90" />
              <span>Book a call</span>
              <span className="text-base font-normal">→</span>
            </a>

            <a
              href="https://www.instagram.com/suriyaraj.visual"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill-ghost px-5 py-3.5 text-sm font-medium"
            >
              <svg className="w-4 h-4 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <span>@suriyaraj.visual</span>
              <span className="text-xs text-[var(--faint)]">↗</span>
            </a>

            <a
              href="#work"
              className="btn-pill-ghost hidden lg:inline-flex px-4 py-3.5 text-xs text-[var(--muted)] hover:text-[var(--ink)]"
            >
              <ArrowDown className="w-3.5 h-3.5 mr-1" />
              <span>Explore Selected Work</span>
            </a>
          </motion.div>
        </div>

        {/* Hero Showreel Video Embed Preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-14 sm:mt-18"
        >
          <VideoFrame
            youtubeId="KGh7h_AyAK8"
            title="Suriya K — Motion & Video Editing Showreel"
            caption="Reel · 16:9 · showreel loop"
            aspectRatio="16:9"
            autoplay={true}
            priority={true}
          />
        </motion.div>
      </div>
    </section>
  );
};
