import React from 'react';
import { TLBLogo } from './TLBLogo';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0B0C0E] border-t border-[#26272C] text-[#8E8E93] text-xs py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1E1F24]">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <TLBLogo onClick={() => onNavigate('/')} />
            <span className="hidden sm:inline text-[#343434]">|</span>
            <span className="text-xs text-[#A0A0A5]">
              The Little Broadway App &amp; Digital Experiences
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            <button
              onClick={() => onNavigate('/')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('/support')}
              className="text-[#F5A623] hover:underline transition-colors"
            >
              Support &amp; Account Deletion
            </button>
            <a
              href="https://thelittlebroadway.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:support@thelittlebroadway.com"
              className="hover:text-white transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6C6C72]">
          <p>© 2026 The Little Broadway. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Developer: <span className="text-[#A0A0A5]">The Little Broadway</span> · App: <span className="text-[#A0A0A5]">The TLB App</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
