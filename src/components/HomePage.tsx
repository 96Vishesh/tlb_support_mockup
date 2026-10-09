import React from 'react';
import { ArrowRight, Sparkles, Smartphone, Shield, HelpCircle } from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0F1013] text-[#D0D0D0] min-h-screen">
      {/* Prototype Review Callout Bar */}
      <section className="bg-gradient-to-r from-[#17181E] via-[#1C1E26] to-[#17181E] border-b border-[#2C2D34] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5A623] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5A623]"></span>
            </span>
            <span className="text-white font-medium">
              Client Review Prototype:
            </span>
            <span className="text-[#A0A0A5]">
              New <strong className="text-[#F5A623]">&ldquo;Support&rdquo;</strong> navigation item added to navbar
            </span>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/support')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F5A623]/15 text-[#F5A623] border border-[#F5A623]/30 hover:bg-[#F5A623] hover:text-[#111215] font-semibold transition-all group"
          >
            <span>Review Support Page</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-[#202127]">
        {/* Subtle background ambient lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#F5A623]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            {/* Editorial label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-[1px] w-6 bg-[#F5A623]" />
              <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#F5A623]">
                THE LITTLE BROADWAY
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.08] mb-6">
              Extraordinary <span className="text-[#F5A623]">Productions.</span> Unforgettable Culture.
            </h1>

            {/* Body */}
            <p className="text-base sm:text-xl text-[#B8B8BD] leading-relaxed mb-10 max-w-2xl font-normal">
              From theatrical stages to prestigious international experiences like IJKS 2026, The Little Broadway curates immersive entertainment and cultural milestones.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="px-6 py-3.5 rounded-full bg-[#F5A623] text-[#111215] font-semibold text-xs tracking-wider uppercase hover:bg-[#e5981a] active:scale-[0.98] transition-all flex items-center gap-2 shadow-lg"
              >
                <span>Explore Support &amp; App Deletion</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('/delete-account')}
                className="px-6 py-3.5 rounded-full bg-[#181920] border border-[#343434] text-white hover:border-[#F5A623]/50 font-medium text-xs tracking-wider uppercase transition-colors"
              >
                <span>Direct Deletion URL</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillar Highlights */}
      <section className="py-20 bg-[#0B0C0E] border-b border-[#202127]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623] block mb-2">
                WHAT WE DO
              </span>
              <h2 className="font-serif text-3xl font-bold text-white">
                Core Initiatives &amp; Platforms
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#8E8E93] max-w-md">
              Connecting audiences with signature arts, exhibitions, and digital mobile services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: IJKS 2026 */}
            <div className="p-7 rounded-2xl bg-[#111215] border border-[#2B2C32] hover:border-[#F5A623]/40 transition-colors">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#F5A623] block mb-3">
                01 · Flagship Event
              </span>
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                IJKS 2026
              </h3>
              <p className="text-xs sm:text-sm text-[#9C9CA2] leading-relaxed">
                Indonesia Japan Koi Show 2026 — an internationally acclaimed exhibition uniting global participants, cultural showcases, and heritage.
              </p>
            </div>

            {/* Card 2: TLB Signature */}
            <div className="p-7 rounded-2xl bg-[#111215] border border-[#2B2C32] hover:border-[#F5A623]/40 transition-colors">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#F5A623] block mb-3">
                02 · Theatrical Arts
              </span>
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                TLB Signature
              </h3>
              <p className="text-xs sm:text-sm text-[#9C9CA2] leading-relaxed">
                Original theatrical productions and artistic programming that celebrate community stories and broadway-caliber execution.
              </p>
            </div>

            {/* Card 3: The TLB App */}
            <div className="p-7 rounded-2xl bg-[#111215] border border-[#2B2C32] hover:border-[#F5A623]/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#F5A623]">
                  03 · Digital Ecosystem
                </span>
                <Smartphone className="w-4 h-4 text-[#F5A623]" />
              </div>
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                The TLB Mobile App
              </h3>
              <p className="text-xs sm:text-sm text-[#9C9CA2] leading-relaxed mb-4">
                Your portal to ticket bookings, exclusive member updates, and community access.
              </p>
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="text-xs text-[#F5A623] hover:underline flex items-center gap-1 font-semibold"
              >
                <span>App Support &amp; Account Deletion</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Account Deletion Teaser Section */}
      <section className="py-16 bg-[#111215]/60 border-b border-[#202127]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#16171E] to-[#121318] border border-[#343434] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-wider font-semibold text-[#F5A623]">
                <Shield className="w-4 h-4" />
                <span>USER PRIVACY &amp; DATA FREEDOM</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Managing Your TLB App Account
              </h2>
              <p className="text-sm text-[#A0A0A5] leading-relaxed">
                We believe in full transparency and control over your personal data. Review the newly implemented Support page for complete account deletion instructions and processing timelines.
              </p>
            </div>

            <div className="shrink-0 flex flex-col gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('/support')}
                className="px-6 py-3 rounded-full bg-[#F5A623] text-[#111215] font-semibold text-xs tracking-wider uppercase hover:bg-[#e5981a] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Go to Support Page</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('/delete-account')}
                className="px-6 py-3 rounded-full bg-[#1A1B22] border border-[#343434] text-white hover:text-[#F5A623] text-xs font-medium transition-colors text-center"
              >
                Direct Google Play URL
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
