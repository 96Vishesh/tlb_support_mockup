import React from 'react';
import { Eye, ShieldCheck, Home, HelpCircle, ExternalLink } from 'lucide-react';

interface PrototypeBarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const PrototypeBar: React.FC<PrototypeBarProps> = ({ currentPath, onNavigate }) => {
  return (
    <aside aria-label="Client review prototype switcher" className="bg-black border-b border-[#25262B] text-xs text-[#8E8E93] py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Prototype Label */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          <span className="font-semibold text-white tracking-wide">
            TLB Prototype Review
          </span>
          <span className="text-[#55555B] hidden sm:inline">|</span>
          <span className="text-[#A0A0A5] hidden sm:inline">
            Feature: Support Navigation &amp; Account Deletion
          </span>
        </div>

        {/* Quick View Navigation */}
        <div className="flex items-center gap-1.5 bg-[#141519] p-1 rounded-lg border border-[#2B2C32]">
          <button
            type="button"
            onClick={() => onNavigate('/')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              currentPath === '/'
                ? 'bg-[#26272C] text-white font-semibold'
                : 'text-[#8E8E93] hover:text-white'
            }`}
          >
            <Home className="w-3 h-3" />
            <span>Homepage</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/support')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              currentPath === '/support'
                ? 'bg-[#F5A623] text-[#111215] font-semibold'
                : 'text-[#8E8E93] hover:text-[#F5A623]'
            }`}
          >
            <HelpCircle className="w-3 h-3" />
            <span>/support</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/delete-account')}
            className={`flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
              currentPath === '/delete-account'
                ? 'bg-[#26272C] text-white font-semibold'
                : 'text-[#8E8E93] hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>/delete-account</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
