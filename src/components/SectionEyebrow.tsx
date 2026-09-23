"use client";

import React from "react";

interface SectionEyebrowProps {
  number: string;
  category: string;
  subtitle?: string;
  rightMeta?: string | React.ReactNode;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  number,
  category,
  subtitle,
  rightMeta,
  className = "",
}) => {
  return (
    <div
      className={`w-full flex items-baseline justify-between pb-3.5 border-b border-[var(--hair)] mb-10 md:mb-14 ${className}`}
    >
      <div className="flex items-baseline gap-3 text-[11px] uppercase tracking-[0.2em] font-mono text-[var(--faint)]">
        <span className="font-bold text-[var(--accent)]">{number}</span>
        <span>—</span>
        <span className="text-[var(--ink)] font-semibold">{category}</span>
        {subtitle && (
          <>
            <span className="hidden sm:inline text-[var(--hair)]">/</span>
            <span className="hidden sm:inline text-[var(--muted)] normal-case tracking-normal text-xs font-sans">
              {subtitle}
            </span>
          </>
        )}
      </div>

      {rightMeta && (
        <div className="text-[10.5px] uppercase tracking-[0.16em] font-mono text-[var(--faint)]">
          {rightMeta}
        </div>
      )}
    </div>
  );
};
