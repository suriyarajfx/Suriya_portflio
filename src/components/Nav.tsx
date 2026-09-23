"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sun, Moon } from "lucide-react";

export const Nav: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Read theme from DOM / storage on mount
    const currentTheme = document.documentElement.getAttribute("data-theme") as
      | "light"
      | "dark"
      | null;
    if (currentTheme) {
      setTheme(currentTheme);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("suriya.theme", nextTheme);
    } catch (e) {}
  };

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Tools", href: "#tools" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3.5 bg-[var(--veil)] backdrop-blur-md border-b border-[var(--hair)] shadow-xs"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Left: Wordmark / Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]"
          >
            <span>suriya</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] group-hover:scale-125 transition-transform duration-200" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--nav-ink)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[var(--accent)] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + Pill CTA */}
          <div className="flex items-center gap-3.5 sm:gap-5">
            {/* Theme Toggle Button - Ladybug Rotating Split Disc */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark theme"
              className="relative w-8 h-8 rounded-full border border-[var(--hair)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors duration-200"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              <div
                className={`w-3.5 h-3.5 rounded-full border border-current transition-transform duration-500 overflow-hidden ${
                  theme === "dark" ? "rotate-180" : "rotate-0"
                }`}
                style={{
                  background:
                    "linear-gradient(90deg, currentColor 50%, transparent 50%)",
                }}
              />
            </button>

            {/* CTA Button */}
            <a
              href="https://calendly.com/suriyarajk04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill hidden sm:inline-flex text-xs md:text-sm py-2 px-4.5"
            >
              <span>Book a call</span>
              <span className="text-[13px]">→</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[var(--ink)] rounded-md border border-[var(--hair)] bg-[var(--card-bg)]"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[var(--paper)] flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6">
            <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--faint)] pb-2 border-b border-[var(--hair)]">
              Navigation
            </div>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-3xl font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[var(--faint)]">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-6 border-t border-[var(--hair)]">
            <a
              href="https://calendly.com/suriyarajk04/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill w-full justify-center py-3.5 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Book a 30-min call</span>
              <span>→</span>
            </a>

            <div className="flex items-center justify-between text-xs font-mono text-[var(--muted)] pt-2">
              <span>CUDDALORE, TN, INDIA</span>
              <span>UTC +5:30</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
