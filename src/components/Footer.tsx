"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 sm:py-24 border-t border-[var(--hair)] bg-[var(--paper)] text-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-[var(--hair)]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2 font-display text-3xl font-extrabold tracking-tight text-[var(--ink)]">
              <span>SRK</span>
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
            </div>

            <p className="text-sm sm:text-base text-[var(--muted)] max-w-sm leading-relaxed">
              Video Editor &amp; Motion Designer crafting stories that move people. Based in Cuddalore, Tamil Nadu, India.
            </p>

            <div className="pt-2 flex items-center gap-3 font-mono text-[11px] text-[var(--faint)]">
              <span>EST. 2022</span>
              <span>·</span>
              <span>TWO99 LABS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-4">
              Index
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-[var(--nav-ink)]">
              <li>
                <a href="#work" className="hover:text-[var(--accent)] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[var(--accent)] transition-colors">
                  About &amp; Experience
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[var(--accent)] transition-colors">
                  Tools &amp; Stack
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[var(--accent)] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent)] transition-colors">
                  Contact &amp; Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Channels */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--faint)] mb-4">
              Connect
            </div>
            <ul className="space-y-2.5 text-sm font-medium text-[var(--nav-ink)] font-mono text-xs">
              <li>
                <a
                  href="https://instagram.com/suriyaraj.visual"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/SuriyaRajKA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                >
                  <span>X / Twitter</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vimeo.com/user255453743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                >
                  <span>Vimeo</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/suriyarajk04/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                >
                  <span>Calendly</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--faint)]">
          <div>© 2025 Suriya Raj K · All rights reserved</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[var(--ink)] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
