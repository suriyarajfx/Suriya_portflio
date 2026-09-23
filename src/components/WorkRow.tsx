"use client";

import React from "react";
import { motion } from "framer-motion";

interface WorkRowProps {
  number: string;
  category: string;
  description: string;
  tags?: string[];
  children: React.ReactNode;
  alternate?: boolean; // If true, media appears on the left on desktop
}

export const WorkRow: React.FC<WorkRowProps> = ({
  number,
  category,
  description,
  tags,
  children,
  alternate = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="py-14 sm:py-20 border-b border-[var(--hair)] last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start ${
          alternate ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
        }`}
      >
        {/* Info Column */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-bold mb-3">
              <span>{number}</span>
              <span className="text-[var(--hair)]">/</span>
              <span className="text-[var(--faint)]">CATEGORY</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)]">
              {category}
            </h3>

            <p className="mt-3.5 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-[var(--hair)] bg-[var(--card-bg)] text-[var(--muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Media Column */}
        <div className="lg:col-span-8 w-full">{children}</div>
      </div>
    </motion.div>
  );
};
