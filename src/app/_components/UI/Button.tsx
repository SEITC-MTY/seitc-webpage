"use client";
import React from "react";

const ChevronDownIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const GradientButton = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="inline-flex items-center gap-3
                 rounded-2xl px-8 py-4
                 font-semibold text-white text-xl
                 bg-gradient-to-r from-[#0C2748] via-[#0C3A6A] to-[#0B89D0]
                 shadow-[0_10px_30px_rgba(14,113,200,.35)]
                 hover:brightness-110 transition-all"
    >
      {children}
      {/* Icon Down */}
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </a>
  );
  
  export const GlassButton = ({ href = "#", children }: { href?: string; children: React.ReactNode }) => (
    <a
      href={href}
      className="inline-flex items-center gap-3
                 rounded-2xl px-8 py-4
                 font-semibold text-white text-xl
                 bg-white/5 backdrop-blur-md border border-white/10
                 shadow-[inset_0_1px_0_rgba(255,255,255,.25)]
                 hover:bg-white/10 transition-all"
    >
      {children}
      {/* Arrow Right */}
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
  
