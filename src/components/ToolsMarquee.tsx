"use client";

import React from "react";
import { SectionEyebrow } from "./SectionEyebrow";

export const ToolsMarquee: React.FC = () => {
  const tools = [
    "After Effects",
    "Premiere Pro",
    "Illustrator",
    "Color Grade AI",
    "Video Veo 3",
    "Kling AI",
    "Runway ML",
    "Photoshop",
    "DaVinci Resolve",
    "Topaz Video AI",
  ];

  return (
    <section id="tools" className="py-20 sm:py-28 border-t border-[var(--hair)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow
          number="02"
          category="Tools"
          subtitle="What I cut and build with"
          rightMeta="STACK · PRODUCTION"
        />
      </div>

      {/* High-Contrast Full-Width Marquee Band */}
      <div className="mt-8 py-7 sm:py-10 bg-[var(--sheet)] text-[var(--sheet-ink)] overflow-hidden border-y border-[var(--hair)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First run */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14">
            {tools.map((tool, i) => (
              <div key={`t1-${i}`} className="flex items-center gap-8 sm:gap-14">
                <span className="font-display text-[clamp(24px,3.6vw,44px)] font-bold tracking-tight hover:text-[var(--accent)] transition-colors cursor-default">
                  {tool}
                </span>
                <span className="text-[var(--accent)] text-lg sm:text-2xl font-mono">
                  ·
                </span>
              </div>
            ))}
          </div>

          {/* Second duplicate run for continuous loop */}
          <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14" aria-hidden="true">
            {tools.map((tool, i) => (
              <div key={`t2-${i}`} className="flex items-center gap-8 sm:gap-14">
                <span className="font-display text-[clamp(24px,3.6vw,44px)] font-bold tracking-tight hover:text-[var(--accent)] transition-colors cursor-default">
                  {tool}
                </span>
                <span className="text-[var(--accent)] text-lg sm:text-2xl font-mono">
                  ·
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sub-label explaining workflow */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-6 flex flex-wrap items-center justify-between text-[11px] font-mono uppercase tracking-[0.16em] text-[var(--faint)]">
        <span>Combining industry-standard NLEs with bleeding-edge generative AI</span>
        <span>4K · 60FPS · CINEMATIC LOGS</span>
      </div>
    </section>
  );
};
