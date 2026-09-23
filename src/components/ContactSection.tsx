"use client";

import React, { useState } from "react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Calendar, Send, CheckCircle2, ArrowRight, Mail, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Wire this form to Formspree, Resend, or your custom Next.js API route (/api/contact).
    // Current behavior: Simulated client-side success response.
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-[var(--hair)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionEyebrow
          number="05"
          category="Contact"
          subtitle="Let's work together"
          rightMeta="OPEN FOR Q2 2025"
        />

        {/* Big Editorial Headline */}
        <div className="max-w-4xl mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-[clamp(36px,6vw,76px)] font-bold tracking-tight text-[var(--ink)] leading-[1.02]"
          >
            Ready to create{" "}
            <span className="font-serif italic font-normal text-[var(--accent)]">
              something wild?
            </span>
          </motion.h2>

          <p className="mt-4 text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl">
            Open for freelance projects, high-volume creator collaborations, and full-time visual design roles.
          </p>
        </div>

        {/* 2-Column Split: Form Left + Calendly Booking Card Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)]">
            <div className="flex items-center justify-between pb-5 border-b border-[var(--hair)] mb-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--ink)] font-semibold">
                Send a Direct Message
              </span>
              <span className="font-mono text-[10px] text-[var(--faint)]">
                EST. REPLY &lt; 24 HRS
              </span>
            </div>

            {status === "success" ? (
              <div className="py-12 text-center flex flex-col items-center justify-center">
                <CheckCircle2 className="w-12 h-12 text-[var(--accent)] mb-4" />
                <h3 className="font-display text-2xl font-bold text-[var(--ink)]">
                  Message Sent Successfully
                </h3>
                <p className="text-sm text-[var(--muted)] mt-2 max-w-sm">
                  Thank you for reaching out! Suriya will review your brief and respond within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-pill-ghost mt-6 text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-wider text-[var(--muted)] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--hair)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--faint)]"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10.5px] uppercase tracking-wider text-[var(--muted)] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--hair)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--faint)]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-wider text-[var(--muted)] mb-1.5">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Motion graphics package / Commercial video editing"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--hair)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--faint)]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10.5px] uppercase tracking-wider text-[var(--muted)] mb-1.5">
                    Project Details &amp; Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your footage, deliverables, references, and expected turnaround..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-[var(--hair)] bg-[var(--paper)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none placeholder:text-[var(--faint)]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-pill w-full sm:w-auto px-8 py-3.5 text-sm font-medium"
                  >
                    {status === "submitting" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send message</span>
                        <span>→</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Calendly Booking Plate */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] space-y-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)] font-semibold pb-3 border-b border-[var(--hair)]">
                Instant Calendar Booking
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mt-5">
                Prefer a direct conversation?
              </h3>

              <p className="text-sm sm:text-base text-[var(--muted)] mt-3 leading-relaxed">
                Skip the back-and-forth email queue. Pick a convenient 30-minute slot directly on my calendar to discuss scope, pricing, and timelines.
              </p>

              <div className="space-y-3 mt-6 pt-5 border-t border-[var(--hair)] font-mono text-xs text-[var(--muted)]">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[var(--accent)]" />
                  <span>30-minute discovery &amp; scoping session</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                  <span>No obligation · Free project quote</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--hair)]">
              <a
                href="https://calendly.com/suriyarajk04/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill-accent w-full justify-center py-3.5 text-sm font-medium"
              >
                <Calendar className="w-4 h-4 mr-1.5" />
                <span>📅 Book a call (Calendly)</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
