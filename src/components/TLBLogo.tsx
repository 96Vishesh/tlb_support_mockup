import React from 'react';

export const TLBLogo: React.FC<{ className?: string; onClick?: () => void }> = ({ className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex flex-col items-center justify-center bg-black px-3 pt-2 pb-1.5 cursor-pointer select-none ${className}`}
      role="button"
      tabIndex={0}
      aria-label="The Little Broadway"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <span className="font-sans font-extrabold lowercase text-[34px] leading-[0.9] tracking-tighter text-tlb-yellow">
        tlb
      </span>
      <span className="text-[6px] font-semibold leading-none mt-1 text-tlb-yellow">
        The Little Broadway
      </span>
    </div>
  );
};
