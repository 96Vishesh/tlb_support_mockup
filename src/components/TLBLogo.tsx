import React from 'react';

export const TLBLogo: React.FC<{ className?: string; onClick?: () => void }> = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer group select-none ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      {/* Monogram Emblem */}
      <div className="relative w-9 h-9 rounded-lg bg-[#15161A] border border-[#343434] group-hover:border-[#F5A623] transition-colors flex items-center justify-center overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/15 to-transparent opacity-80" />
        <span className="relative font-serif font-bold text-base text-white tracking-tighter group-hover:text-[#F5A623] transition-colors">
          TLB
        </span>
      </div>

      {/* Brand Wordmark */}
      <div className="flex flex-col">
        <span className="font-serif font-bold text-sm sm:text-base tracking-[0.18em] text-white uppercase group-hover:text-white/95 leading-tight">
          The Little Broadway
        </span>
        <span className="text-[9px] uppercase tracking-[0.25em] text-[#F5A623] font-medium leading-none mt-0.5">
          Productions & Culture
        </span>
      </div>
    </div>
  );
};
