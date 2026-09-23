"use client";

import React from "react";
import { SectionEyebrow } from "./SectionEyebrow";
import { WorkRow } from "./WorkRow";
import { VideoFrame } from "./VideoFrame";
import { ExternalLink, Film, Sparkles } from "lucide-react";

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-24 sm:py-36 border-t border-[var(--hair)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow
          number="03"
          category="Selected Work"
          subtitle="10 projects, four disciplines"
          rightMeta="CURATED 2024–2025"
        />

        {/* Section Intro & Quick Link Chips (Ladybug Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--hair)]">
          <div>
            <h2 className="font-display text-[clamp(32px,5vw,56px)] font-bold tracking-tight text-[var(--ink)]">
              Crafted with intent &amp; rhythm.
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--muted)] max-w-xl">
              Each discipline explores distinct dynamics — from frame-by-frame motion kinetics to commercial pacing and strategic brand identity.
            </p>
          </div>

          {/* Quick link chips */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://vimeo.com/user255453743"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--hair)] bg-[var(--card-bg)] text-xs font-mono text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <span>🎬 Vimeo — View all works</span>
              <span className="text-[10px]">→</span>
            </a>

            <a
              href="https://x.com/SuriyaRajKA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--hair)] bg-[var(--card-bg)] text-xs font-mono text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <span>𝕏 @SuriyaRajKA</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>
        </div>

        {/* 01 — MOTION GRAPHIC */}
        <WorkRow
          number="01"
          category="Motion Graphic"
          description="High-impact visual effects, title sequences, 3D typography, and custom dynamic animations tailored for digital brands and creator intros."
          tags={["After Effects", "Kinetic Type", "Visual Systems", "3D Motion"]}
          alternate={false}
        >
          <div className="space-y-6">
            {/* Main Feature */}
            <VideoFrame
              youtubeId="KGh7h_AyAK8"
              title="CLYORO · Motion Graphic"
              caption="Clip · 16:9 · motion graphic"
              aspectRatio="16:9"
            />

            {/* Supporting 2 Slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <VideoFrame
                youtubeId="UQMbysuuvvc"
                title="Motion Graphic · 02"
                caption="Clip · 16:9 · motion graphic"
                aspectRatio="16:9"
              />
              <VideoFrame
                vimeoEmbedUrl="https://player.vimeo.com/video/1228864565?title=0&byline=0&portrait=0&badge=0&autopause=0&vimeo_logo=0&logo=0&sidedock=0&pip=0&dnt=1"
                title="Peak_Sale_v4"
                caption="Clip · 16:9 · motion graphic"
                aspectRatio="16:9"
              />
            </div>
          </div>
        </WorkRow>

        {/* 02 — VIDEO EDIT */}
        <WorkRow
          number="02"
          category="Video Edit"
          description="High-retention pacing, narrative flow, rhythm-synced cuts, sound design, and color grade treatments designed for engagement and creator reels."
          tags={["Premiere Pro", "Pacing", "Sound Design", "Color Grading"]}
          alternate={true}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <VideoFrame
              youtubeId="qRI3oK7Jrsc"
              title="Video Edit · 01"
              caption="Clip · 9:16 · edit"
              aspectRatio="9:16"
            />
            <VideoFrame
              vimeoEmbedUrl="https://player.vimeo.com/video/1229461675?title=0&byline=0&portrait=0&badge=0&autopause=0&vimeo_logo=0&logo=0&sidedock=0&pip=0&dnt=1"
              title="Peaksale"
              caption="Clip · 9:16 · edit"
              aspectRatio="9:16"
            />
            <VideoFrame
              vimeoEmbedUrl="https://player.vimeo.com/video/1228851755?title=0&byline=0&portrait=0&badge=0&autopause=0&vimeo_logo=0&logo=0&sidedock=0&pip=0&dnt=1"
              title="credit_card_rating_v2"
              caption="Clip · 9:16 · edit"
              aspectRatio="9:16"
            />
          </div>
        </WorkRow>

        {/* 03 — COMMERCIAL & PROMO EDITS */}
        <WorkRow
          number="03"
          category="Commercial & Promo Edits"
          description="Commercial product promos, brand teasers, and long-form narrative edits with cinematic sound design, b-roll layering, and retention optimization."
          tags={["Commercials", "Long-Form", "Retention", "Sound FX"]}
          alternate={false}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <VideoFrame
              vimeoEmbedUrl="https://player.vimeo.com/video/1228848532?title=0&byline=0&portrait=0&badge=0&autopause=0&vimeo_logo=0&logo=0&sidedock=0&pip=0&dnt=1"
              title="Mechanic_out_v3"
              caption="Clip · 16:9 · promo edit"
              aspectRatio="16:9"
            />
            <VideoFrame
              driveEmbedUrl="https://drive.google.com/file/d/1_0FoU3ir7DAn6w8w32RPaQZ_lioKsUcj/preview"
              title="Promo Edit · 01"
              placeholderLabel="[ PROMO EDIT · 01 ]"
              placeholderSub="Long-form storytelling"
              caption="Clip · 16:9 · promo edit"
              aspectRatio="16:9"
            />
          </div>
        </WorkRow>

        {/* 04 — LOGO DESIGN & BRAND IDENTITY */}
        <WorkRow
          number="04"
          category="Logo Design"
          description="Distinctive marks, brand systems, and typography treatments built for modern brands, venture initiatives, and high-growth creative startups."
          tags={["Brand Identity", "Vector", "Typography", "Case Studies"]}
          alternate={true}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* TWO99 Case Study Card */}
            <a
              href="https://www.behance.net/gallery/232610335/TWO99-Rebranding-Identity-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--ink)]/40 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--hair)] bg-black/90 flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <div className="font-display text-4xl font-extrabold tracking-tighter text-white">
                    TWO99<span className="text-[var(--accent)]">.</span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Rebranding &amp; Identity Design
                  </p>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-mono text-xs uppercase tracking-wider backdrop-blur-xs">
                  <span>View on Behance</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    TWO99 · Brand Identity
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Tech-forward AI design studio identity &amp; guidelines
                  </p>
                </div>
                <span className="font-mono text-xs text-[var(--accent)]">↗</span>
              </div>

              <div className="mt-3 pt-3 border-t border-[var(--hair)] font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--faint)]">
                Case Study · 4:3 · brand identity
              </div>
            </a>

            {/* Hatch Point Case Study Card */}
            <a
              href="https://www.behance.net/gallery/232610335/TWO99-Rebranding-Identity-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-6 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] hover:border-[var(--ink)]/40 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[var(--hair)] bg-zinc-900 flex items-center justify-center p-6 text-center">
                <div className="space-y-2">
                  <div className="font-display text-3xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[var(--accent)] inline-block" />
                    <span>Hatch Point</span>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
                    Incubator &amp; Venture Identity
                  </p>
                </div>

                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-mono text-xs uppercase tracking-wider backdrop-blur-xs">
                  <span>View on Behance</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-lg text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                    Hatch Point · Brand Identity
                  </h4>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    Minimalist geometric visual identity and digital asset kit
                  </p>
                </div>
                <span className="font-mono text-xs text-[var(--accent)]">↗</span>
              </div>

              <div className="mt-3 pt-3 border-t border-[var(--hair)] font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--faint)]">
                Case Study · 4:3 · brand identity
              </div>
            </a>
          </div>
        </WorkRow>
      </div>
    </section>
  );
};
