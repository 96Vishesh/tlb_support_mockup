import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, ShieldCheck, Clock, FileText, ArrowUpRight } from 'lucide-react';
import { EmailDraftModal } from './EmailDraftModal';

interface SupportPageProps {
  onNavigate: (path: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
  // Allow toggling between Dark Editorial (default) and Warm Ivory Panel (matching screenshot)
  const [styleVariant, setStyleVariant] = useState<'dark' | 'ivory'>('dark');
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const supportEmail = 'support@thelittlebroadway.com';
  const emailSubject = 'Account Deletion Request';
  const processingTime = '30 days'; // [CONFIRMED_PROCESSING_TIME] placeholder

  const mailtoUrl = `mailto:${encodeURIComponent(supportEmail)}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(
    'Hello The Little Broadway Support Team,\n\nI would like to request the permanent deletion of my account and associated personal data from The Little Broadway app.\n\nRegistered Email Address: \nFull Name: \n\nThank you.'
  )}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(supportEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const steps = [
    {
      number: '01',
      title: 'Contact Our Team',
      description: (
        <>
          Send an email to{' '}
          <span className="font-mono text-xs font-semibold underline decoration-dotted">
            {supportEmail}
          </span>{' '}
          to request deletion of your account.
        </>
      ),
    },
    {
      number: '02',
      title: 'Identify Your Account',
      description:
        'Include the email address associated with your TLB account so the support team can identify your account and verify the request.',
    },
    {
      number: '03',
      title: 'Confirm Your Request',
      description: (
        <>
          Use the subject line{' '}
          <span className="font-medium italic text-[#F5A623]">
            &ldquo;{emailSubject}&rdquo;
          </span>{' '}
          and clearly state that you want your account and associated personal data deleted.
        </>
      ),
    },
    {
      number: '04',
      title: 'Request Processing',
      description: `Your request will be reviewed and processed within ${processingTime}, subject to any required verification and applicable legal obligations.`,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1013] text-[#D0D0D0] py-10 sm:py-16">
      {/* Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visual Direction Switcher (Client Review Feature) */}
        <div className="mb-8 p-3 rounded-xl bg-[#141519] border border-[#2B2C32] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5A623]" />
            <span className="font-medium text-white">Client Design Review Direction:</span>
            <span className="text-[#8E8E93]">
              {styleVariant === 'dark' ? 'Dark Editorial (Homepage Style)' : 'Warm Ivory Panel (What We Do Style)'}
            </span>
          </div>

          <div className="flex items-center bg-[#0F1013] p-1 rounded-lg border border-[#2B2C32]">
            <button
              type="button"
              onClick={() => setStyleVariant('dark')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                styleVariant === 'dark'
                  ? 'bg-[#26272C] text-white shadow-sm font-semibold'
                  : 'text-[#8E8E93] hover:text-white'
              }`}
            >
              Dark Editorial
            </button>
            <button
              type="button"
              onClick={() => setStyleVariant('ivory')}
              className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                styleVariant === 'ivory'
                  ? 'bg-[#F8F4EC] text-[#191919] shadow-sm font-semibold'
                  : 'text-[#8E8E93] hover:text-white'
              }`}
            >
              Warm Ivory Panel
            </button>
          </div>
        </div>

        {/* SECTION 1: Page Introduction */}
        <section className="mb-12">
          {/* Small uppercase amber label */}
          <div className="inline-block mb-3">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623]">
              SUPPORT
            </span>
          </div>

          {/* Main Heading with "Help." in TLB amber */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            We&apos;re Here to <span className="text-[#F5A623]">Help.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#D0D0D0] max-w-2xl leading-relaxed">
            Need help with your TLB account? Find the information you need to request account and personal data deletion below.
          </p>
        </section>

        {/* SECTION 2 & 3: Account Deletion & How to Request Deletion */}
        {styleVariant === 'dark' ? (
          /* DARK EDITORIAL STYLE (Matches TLB Homepage reference) */
          <div className="bg-[#111215] border border-[#343434] rounded-2xl p-6 sm:p-10 mb-10 transition-all shadow-xl">
            {/* Section 2 Heading */}
            <div className="pb-6 border-b border-[#26272C]">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623] block mb-2">
                ACCOUNT ASSISTANCE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Delete Your Account
              </h2>
              <p className="text-sm sm:text-base text-[#B8B8BD] leading-relaxed">
                If you would like to delete your account and associated personal data from The Little Broadway app, you can submit a deletion request to our support team.
              </p>
            </div>

            {/* Section 3: How to Request Deletion */}
            <div className="pt-8">
              <h3 className="text-xs uppercase font-semibold tracking-[0.18em] text-[#A0A0A5] mb-6">
                How to Submit a Deletion Request
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#16171C] border border-[#2A2B31] transition-colors"
                  >
                    {/* Amber Number Marker */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-serif font-bold text-xs">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white mb-1.5 font-serif">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#A0A0A5] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* WARM IVORY EDITORIAL STYLE (Matches TLB "What We Do" section reference in image.png) */
          <div className="bg-[#F8F4EC] text-[#191919] border border-[#E4DED3] rounded-2xl p-6 sm:p-10 mb-10 transition-all shadow-xl">
            {/* Section 2 Heading */}
            <div className="pb-6 border-b border-[#E4DED3]">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C47D14] block mb-2">
                ACCOUNT ASSISTANCE
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#191919] mb-3">
                Delete Your Account
              </h2>
              <p className="text-sm sm:text-base text-[#4A4A4F] leading-relaxed">
                If you would like to delete your account and associated personal data from The Little Broadway app, you can submit a deletion request to our support team.
              </p>
            </div>

            {/* Section 3: How to Request Deletion */}
            <div className="pt-8">
              <h3 className="text-xs uppercase font-semibold tracking-[0.18em] text-[#7A7A80] mb-6">
                How to Submit a Deletion Request
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-[#E4DED3] transition-colors shadow-xs"
                  >
                    {/* Amber Circle Marker */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#F5A623] text-[#111215] flex items-center justify-center font-bold text-xs shadow-xs">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-[#191919] mb-1.5 font-serif">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#55555B] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: Contact Support Area */}
        <section className="bg-[#111215] border border-[#343434] rounded-2xl p-6 sm:p-8 mb-10 shadow-lg">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623] block mb-2">
                DIRECT ASSISTANCE
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Need Assistance?
              </h2>
              <p className="text-sm text-[#B8B8BD] mb-4 leading-relaxed">
                Our support team is here to help you with your account deletion request.
              </p>

              {/* Display: Email & Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#16171C] border border-[#2B2C32] flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8E93] block">
                      Support Email
                    </span>
                    <span className="font-mono text-white text-xs font-medium">
                      {supportEmail}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-[#26272C] text-[#A0A0A5] hover:text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#F5A623]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-[#16171C] border border-[#2B2C32]">
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8E93] block">
                    Required Subject Line
                  </span>
                  <span className="text-white text-xs font-medium">
                    {emailSubject}
                  </span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-[#F5A623] text-[#111215] hover:bg-[#e5981a] active:scale-[0.98] transition-all shadow-md"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsDraftModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-medium rounded-full bg-[#1A1B20] text-[#D0D0D0] hover:text-white hover:bg-[#25262E] border border-[#343434] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
                <span>Preview Email Draft</span>
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 5: Data Deletion and Retention */}
        <section className="bg-[#111215] border border-[#343434] rounded-2xl p-6 sm:p-8 mb-10 shadow-lg">
          <div className="mb-6">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623] block mb-2">
              TRANSPARENCY &amp; POLICIES
            </span>
            <h2 className="font-serif text-2xl font-bold text-white mb-2">
              What Happens to Your Data?
            </h2>
            <p className="text-xs sm:text-sm text-[#8E8E93]">
              Understand how data associated with The Little Broadway app is handled upon an account deletion request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-[#26272C]">
            {/* Data We Delete */}
            <div className="p-5 rounded-xl bg-[#16171C] border border-[#2B2C32]">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
                <h3 className="font-serif font-bold text-base text-white">
                  Data We Delete
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B8BD]">
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] font-bold">·</span>
                  <span>Account information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] font-bold">·</span>
                  <span>Profile information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F5A623] font-bold">·</span>
                  <span>Other applicable personal data associated with the account.</span>
                </li>
              </ul>
            </div>

            {/* Data We May Retain */}
            <div className="p-5 rounded-xl bg-[#16171C] border border-[#2B2C32]">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#A0A0A5]" />
                <h3 className="font-serif font-bold text-base text-white">
                  Data We May Retain
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#B8B8BD]">
                <li className="flex items-start gap-2">
                  <span className="text-[#A0A0A5] font-bold">·</span>
                  <span>
                    Information that must be retained to satisfy applicable legal, regulatory, security, or legitimate record-keeping obligations.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Clarification & Policy Disclaimers */}
          <div className="pt-5 space-y-2 text-xs text-[#8E8E93] leading-relaxed">
            <p>
              &ldquo;Any data retained will be handled in accordance with applicable legal requirements and the relevant privacy policy.&rdquo;
            </p>
            <p className="text-[11px] text-[#6C6C72]">
              *Note: These are prototype placeholders for client and compliance review. Actual application data-handling practices will be confirmed with the legal team prior to production deployment.
            </p>
          </div>
        </section>

        {/* SECTION 6: Privacy Policy & Dedicated URL Section */}
        <section className="p-6 rounded-2xl bg-[#141519] border border-[#2A2B31] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1F2026] text-[#F5A623] flex items-center justify-center shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-semibold text-sm sm:text-base text-white">
                Privacy Policy &amp; Terms
              </h3>
              <p className="text-xs text-[#8E8E93]">
                Learn more about our comprehensive data collection and privacy practices.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => onNavigate('/delete-account')}
              className="text-xs text-[#A0A0A5] hover:text-white underline decoration-dotted transition-colors"
            >
              View /delete-account URL
            </button>

            <a
              href="https://thelittlebroadway.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F5A623] hover:underline"
            >
              <span>Read our Privacy Policy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

      </div>

      {/* Email Draft Preview Modal */}
      <EmailDraftModal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        emailAddress={supportEmail}
        emailSubject={emailSubject}
      />
    </div>
  );
};
