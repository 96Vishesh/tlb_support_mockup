import React, { useState } from 'react';
import { TLBLogo } from './TLBLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const existingNavLinks = [
    { label: 'IJKS 2026', path: '/#ijks-2026' },
    { label: 'About Us', path: '/#about-us' },
    { label: 'What We Do', path: '/#what-we-do' },
    { label: 'TLB Signature', path: '/#tlb-signature' },
    { label: 'Experiences', path: '/#experiences' },
    { label: 'Collaborate With Us', path: '/#collaborate' },
    { label: 'The TLB App', path: '/#tlb-app' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const isSupportActive = currentPath === '/support' || currentPath === '/delete-account';

  return (
    <header className="sticky top-0 z-40 bg-[#0F1013]/95 backdrop-blur-md border-b border-[#343434]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo Zone */}
          <div className="shrink-0">
            <TLBLogo onClick={() => handleLinkClick('/')} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-[13px] font-medium tracking-wide">
            {existingNavLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`whitespace-nowrap transition-colors duration-150 py-1 ${
                  currentPath === link.path
                    ? 'text-white font-semibold'
                    : 'text-[#C5C5C7] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* NEW Support Navigation Link - Placed immediately before Let's Connect */}
            <div className="relative flex items-center">
              <button
                type="button"
                onClick={() => handleLinkClick('/support')}
                className={`group relative whitespace-nowrap px-2.5 py-1 transition-colors duration-150 rounded ${
                  isSupportActive
                    ? 'text-[#F5A623] font-semibold'
                    : 'text-[#C5C5C7] hover:text-[#F5A623]'
                }`}
              >
                <span>Support</span>
                {/* Active indicator bar */}
                {isSupportActive && (
                  <span className="absolute -bottom-2 left-2.5 right-2.5 h-[2px] bg-[#F5A623] rounded-full" />
                )}
                {/* Subtle "New" marker for prototype preview */}
                <span className="ml-1.5 text-[9px] uppercase tracking-wider text-[#F5A623] bg-[#F5A623]/10 border border-[#F5A623]/30 px-1 py-0.2 rounded font-mono">
                  New
                </span>
              </button>
            </div>
          </nav>

          {/* Primary CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop "Let's Connect" Button */}
            <button
              type="button"
              onClick={() => handleLinkClick('/#connect')}
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#F5A623] text-[#111215] hover:bg-[#e5981a] active:scale-[0.98] transition-all duration-150 shadow-sm"
            >
              Let&apos;s Connect
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 text-[#D0D0D0] hover:text-white hover:bg-[#1A1B20] rounded-lg border border-[#343434] transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#111215] border-b border-[#343434] px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {existingNavLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => handleLinkClick(link.path)}
                className={`text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  currentPath === link.path
                    ? 'bg-[#1D1E24] text-white font-semibold'
                    : 'text-[#C5C5C7] hover:bg-[#1D1E24] hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Support item in Mobile Menu */}
            <button
              type="button"
              onClick={() => handleLinkClick('/support')}
              className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-colors mt-1 ${
                isSupportActive
                  ? 'bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30'
                  : 'text-[#F5A623] hover:bg-[#1D1E24]'
              }`}
            >
              <span>Support & Account Deletion</span>
              <span className="text-[10px] uppercase tracking-wider bg-[#F5A623] text-[#111215] px-1.5 py-0.5 rounded font-mono font-bold">
                New
              </span>
            </button>

            {/* Mobile "Let's Connect" Button */}
            <div className="pt-4 mt-2 border-t border-[#26272C]">
              <button
                type="button"
                onClick={() => handleLinkClick('/#connect')}
                className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase rounded-full bg-[#F5A623] text-[#111215] hover:bg-[#e5981a] transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
