import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, ShieldCheck, Clock, FileText, ArrowUpRight } from 'lucide-react';
import { EmailDraftModal } from './EmailDraftModal';

interface SupportPageProps {
  onNavigate: (path: string) => void;
}

export const SupportPage: React.FC<SupportPageProps> = ({ onNavigate }) => {
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
          <span className="font-medium italic text-[#C47D14]">
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

  const containerClass = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className="min-h-screen">
      {/* BAND 1 (charcoal): Page Introduction */}
      <section className="bg-tlb-charcoal text-tlb-text-muted pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className={containerClass}>
          <div className="flex items-center gap-3 mb-6 text-[11px] uppercase font-bold tracking-[0.25em] text-white/90">
            <span>For Account</span>
            <span className="w-1 h-1 rounded-full bg-tlb-yellow" />
            <span>For Privacy</span>
            <span className="w-1 h-1 rounded-full bg-tlb-yellow" />
            <span>For You</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
            We&apos;re Here to <span className="text-tlb-yellow">Help.</span>
          </h1>
          <p className="text-base sm:text-lg text-tlb-text-muted max-w-xl leading-relaxed mb-9">
            Need help with your TLB account? Find the information you need to request account and personal data deletion below.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onNavigate('/delete-account')}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full bg-tlb-yellow text-black hover:bg-tlb-yellow-hover transition-colors shadow-[0_0_24px_rgba(247,181,0,0.25)]"
            >
              <span>Request Deletion</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={mailtoUrl}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-full border border-white/30 text-white hover:border-white transition-colors"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* BAND 2 (ivory): Delete Your Account & How to Request */}
      <section className="bg-tlb-ivory text-tlb-text-dark py-14 sm:py-16">
        <div className={containerClass}>
          <div className="pb-6 border-b border-tlb-border-light">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C47D14] block mb-2">
              ACCOUNT ASSISTANCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tlb-text-dark mb-3">
              Delete Your Account
            </h2>
            <p className="text-sm sm:text-base text-[#4A4A4F] leading-relaxed">
              If you would like to delete your account and associated personal data from The Little Broadway app, you can submit a deletion request to our support team.
            </p>
          </div>

          <div className="pt-8">
            <h3 className="text-xs uppercase font-semibold tracking-[0.18em] text-[#7A7A80] mb-6">
              How to Submit a Deletion Request
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/70 border border-tlb-border-light shadow-xs"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-tlb-amber text-tlb-surface flex items-center justify-center font-bold text-xs shadow-xs">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-tlb-text-dark mb-1.5 font-serif">
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
      </section>

      {/* BAND 3 (charcoal): Contact Support */}
      <section className="bg-tlb-charcoal text-tlb-text-muted py-14 sm:py-16">
        <div className={containerClass}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase font-semibold tracking-[0.2em] text-tlb-amber block mb-2">
                DIRECT ASSISTANCE
              </span>
              <h2 className="font-serif text-2xl font-bold text-white mb-2">
                Need Assistance?
              </h2>
              <p className="text-sm text-[#B8B8BD] mb-4 leading-relaxed">
                Our support team is here to help you with your account deletion request.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-tlb-charcoal-raised border border-tlb-charcoal-border flex items-center justify-between">
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
                    className="p-1.5 rounded hover:bg-[#3A3A3F] text-[#A0A0A5] hover:text-white transition-colors"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-tlb-amber" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="p-3 rounded-lg bg-tlb-charcoal-raised border border-tlb-charcoal-border">
                  <span className="text-[10px] uppercase tracking-wider text-[#8E8E93] block">
                    Required Subject Line
                  </span>
                  <span className="text-white text-xs font-medium">
                    {emailSubject}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <a
                href={mailtoUrl}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold tracking-wider uppercase rounded-full bg-tlb-amber text-tlb-surface hover:bg-tlb-amber-hover active:scale-[0.98] transition-all shadow-md"
              >
                <span>Contact Support</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsDraftModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-medium rounded-full bg-tlb-charcoal-raised text-tlb-text-muted hover:text-white hover:bg-[#3A3A3F] border border-tlb-charcoal-border transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-tlb-amber" />
                <span>Preview Email Draft</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BAND 4 (ivory): Data Deletion and Retention */}
      <section className="bg-tlb-ivory text-tlb-text-dark py-14 sm:py-16">
        <div className={containerClass}>
          <div className="mb-6">
            <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#C47D14] block mb-2">
              TRANSPARENCY &amp; POLICIES
            </span>
            <h2 className="font-serif text-2xl font-bold text-tlb-text-dark mb-2">
              What Happens to Your Data?
            </h2>
            <p className="text-xs sm:text-sm text-[#55555B]">
              Understand how data associated with The Little Broadway app is handled upon an account deletion request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-tlb-border-light">
            <div className="p-5 rounded-xl bg-white/70 border border-tlb-border-light shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#C47D14]" />
                <h3 className="font-serif font-bold text-base text-tlb-text-dark">
                  Data We Delete
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4A4F]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C47D14] font-bold">·</span>
                  <span>Account information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C47D14] font-bold">·</span>
                  <span>Profile information.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C47D14] font-bold">·</span>
                  <span>Other applicable personal data associated with the account.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/70 border border-tlb-border-light shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#7A7A80]" />
                <h3 className="font-serif font-bold text-base text-tlb-text-dark">
                  Data We May Retain
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4A4F]">
                <li className="flex items-start gap-2">
                  <span className="text-[#7A7A80] font-bold">·</span>
                  <span>
                    Information that must be retained to satisfy applicable legal, regulatory, security, or legitimate record-keeping obligations.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-5 space-y-2 text-xs text-[#55555B] leading-relaxed">
            <p>
              &ldquo;Any data retained will be handled in accordance with applicable legal requirements and the relevant privacy policy.&rdquo;
            </p>
            <p className="text-[11px] text-[#7A7A80]">
              *Note: These are prototype placeholders for client and compliance review. Actual application data-handling practices will be confirmed with the legal team prior to production deployment.
            </p>
          </div>
        </div>
      </section>

      {/* BAND 5 (charcoal): Privacy Policy & Dedicated URL */}
      <section className="bg-tlb-charcoal text-tlb-text-muted py-10">
        <div className={`${containerClass} flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-tlb-charcoal-raised text-tlb-amber flex items-center justify-center shrink-0">
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-tlb-amber hover:underline"
            >
              <span>Read our Privacy Policy</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <EmailDraftModal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        emailAddress={supportEmail}
        emailSubject={emailSubject}
      />
    </div>
  );
};
