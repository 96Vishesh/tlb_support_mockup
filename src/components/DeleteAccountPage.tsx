import React, { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, ShieldCheck, Clock, ExternalLink, CheckCircle2, Info } from 'lucide-react';
import { EmailDraftModal } from './EmailDraftModal';

interface DeleteAccountPageProps {
  onNavigate: (path: string) => void;
}

export const DeleteAccountPage: React.FC<DeleteAccountPageProps> = ({ onNavigate }) => {
  const [isDraftModalOpen, setIsDraftModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showComplianceDrawer, setShowComplianceDrawer] = useState(false);

  const supportEmail = 'support@thelittlebroadway.com';
  const emailSubject = 'Account Deletion Request';
  const processingTime = '30 days';

  const mailtoUrl = `mailto:${encodeURIComponent(supportEmail)}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(
    'Hello The Little Broadway Support Team,\n\nI would like to request the permanent deletion of my account and associated personal data from The Little Broadway app.\n\nRegistered Email Address: \nFull Name: \n\nThank you.'
  )}`;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(supportEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const compliancePoints = [
    {
      title: 'Publicly Accessible Without Login',
      status: 'Compliant',
      detail: 'This page is accessible directly via https://thelittlebroadway.com/delete-account with no authentication barrier.',
    },
    {
      title: 'Clearly Identifies App & Developer',
      status: 'Compliant',
      detail: 'App: The Little Broadway App · Developer: The Little Broadway (thelittlebroadway.com)',
    },
    {
      title: 'Submitting Deletion Request',
      status: 'Compliant',
      detail: 'Explicit 4-step instructions provided with required email subject, parameters, and identifier.',
    },
    {
      title: 'Prominent Contact Method',
      status: 'Compliant',
      detail: 'Interactive Contact Support button initiating mailto: with prefilled recipient and subject line.',
    },
    {
      title: 'Data Deletion & Retention Scope',
      status: 'Compliant',
      detail: 'Transparently enumerates data categories deleted (account info, profile) and legal retention exceptions.',
    },
    {
      title: 'Defined Processing Timeframe',
      status: 'Compliant',
      detail: `Explicitly states processing within ${processingTime} upon verification.`,
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Contact Our Support Team',
      body: (
        <>
          Send an email to <span className="font-mono text-tlb-text-dark underline decoration-dotted">{supportEmail}</span> from your registered email client.
        </>
      ),
    },
    {
      number: '02',
      title: 'Identify Your Account',
      body: 'Clearly provide the email address associated with your TLB account so our team can locate your profile and verify your ownership.',
    },
    {
      number: '03',
      title: 'Confirm Your Request',
      body: (
        <>
          Set the subject line as <span className="italic text-[#C47D14]">&ldquo;{emailSubject}&rdquo;</span> and include a statement requesting that your account and personal records be deleted.
        </>
      ),
    },
    {
      number: '04',
      title: 'Request Processing & Timeline',
      body: (
        <>
          Your request will be acknowledged and fulfilled within <strong className="text-tlb-text-dark">{processingTime}</strong>, subject to verification and applicable statutory retention rules.
        </>
      ),
    },
  ];

  const containerClass = 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className="min-h-screen">
      {/* BAND 1 (charcoal): Compliance banner + page header */}
      <section className="bg-tlb-charcoal text-tlb-text-muted py-10 sm:py-14">
        <div className={containerClass}>
          <div className="mb-8 p-4 rounded-xl bg-tlb-charcoal-raised border border-tlb-charcoal-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-tlb-amber/15 text-tlb-amber flex items-center justify-center shrink-0">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-white">
                    URL: https://thelittlebroadway.com/delete-account
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                    Google Play Ready
                  </span>
                </div>
                <p className="text-xs text-[#8E8E93] mt-0.5">
                  Formatted for Google Play Data Safety requirement (User Data deletion URL).
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setShowComplianceDrawer(!showComplianceDrawer)}
                className="text-xs text-tlb-amber hover:underline flex items-center gap-1 font-medium"
              >
                <span>{showComplianceDrawer ? 'Hide Compliance Audit' : 'Audit Checklist'}</span>
              </button>
              <button
                onClick={() => onNavigate('/support')}
                className="text-xs text-[#8E8E93] hover:text-white transition-colors"
              >
                ← Back to Support
              </button>
            </div>
          </div>

          {showComplianceDrawer && (
            <div className="mb-10 p-6 rounded-2xl bg-tlb-charcoal-raised border border-tlb-charcoal-border animate-in fade-in duration-200">
              <h3 className="font-serif font-bold text-lg text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tlb-amber" />
                <span>Google Play Account Deletion Checklist</span>
              </h3>
              <p className="text-xs text-[#8E8E93] mb-4">
                Review how this page meets the Google Play Store requirement for initiating app account deletion.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {compliancePoints.map((pt) => (
                  <div key={pt.title} className="p-3.5 rounded-lg bg-tlb-charcoal border border-tlb-charcoal-border text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white">{pt.title}</span>
                      <span className="text-[10px] text-emerald-400 font-mono font-medium">✓ {pt.status}</span>
                    </div>
                    <p className="text-[#8E8E93] text-[11px] leading-relaxed">{pt.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <header>
            <span className="text-[11px] uppercase font-bold tracking-[0.25em] text-white/90 block mb-4">
              THE LITTLE BROADWAY <span className="text-tlb-yellow">·</span> APP
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5">
              Account &amp; Personal Data Deletion Request
            </h1>
            <p className="text-sm sm:text-base text-[#B8B8BD] leading-relaxed max-w-2xl">
              This public page provides users of <strong className="text-white">The Little Broadway</strong> mobile application (developed by The Little Broadway) with the official method to request permanent deletion of their account and associated personal data.
            </p>
          </header>
        </div>
      </section>

      {/* BAND 2 (ivory): Step-by-step instructions */}
      <section className="bg-tlb-ivory text-tlb-text-dark py-14 sm:py-16">
        <div className={containerClass}>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-tlb-text-dark mb-6">
            Step-by-Step Deletion Instructions
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-tlb-amber text-tlb-surface flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-tlb-text-dark text-base">{step.title}</h3>
                  <p className="text-sm text-[#55555B] mt-1">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAND 3 (charcoal): Contact action */}
      <section className="bg-tlb-charcoal text-tlb-text-muted py-12 sm:py-14">
        <div className={`${containerClass} flex flex-col sm:flex-row items-center justify-between gap-6`}>
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-tlb-amber block mb-1">
              SUPPORT CONTACT
            </span>
            <h3 className="font-serif font-bold text-xl text-white">
              Ready to submit your request?
            </h3>
            <p className="text-xs text-[#8E8E93] mt-1">
              Click below to launch your email client with the deletion template pre-filled.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="font-mono text-white bg-tlb-charcoal-raised px-2.5 py-1 rounded border border-tlb-charcoal-border">
                {supportEmail}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-[#8E8E93] hover:text-white flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-tlb-amber" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={mailtoUrl}
              className="px-6 py-3 rounded-full bg-tlb-amber text-tlb-surface font-semibold text-xs tracking-wider uppercase hover:bg-tlb-amber-hover transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsDraftModalOpen(true)}
              className="px-5 py-2 rounded-full bg-tlb-charcoal-raised border border-tlb-charcoal-border text-white hover:bg-[#3A3A3F] text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-tlb-amber" />
              <span>Preview Draft Template</span>
            </button>
          </div>
        </div>
      </section>

      {/* BAND 4 (ivory): Data scope + privacy link */}
      <section className="bg-tlb-ivory text-tlb-text-dark py-14 sm:py-16">
        <div className={containerClass}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-white/70 border border-tlb-border-light shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#C47D14]" />
                <h4 className="font-serif font-bold text-tlb-text-dark text-base">Data We Delete</h4>
              </div>
              <ul className="text-xs text-[#4A4A4F] space-y-2">
                <li>· Account registration credentials and authentication identifiers</li>
                <li>· User profile information, avatars, and contact settings</li>
                <li>· User preferences and activity records linked to the account</li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-white/70 border border-tlb-border-light shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-[#7A7A80]" />
                <h4 className="font-serif font-bold text-tlb-text-dark text-base">Data We May Retain</h4>
              </div>
              <p className="text-xs text-[#4A4A4F] leading-relaxed">
                Information that must be retained to satisfy applicable legal, regulatory, security, fraud-prevention, or legitimate record-keeping obligations. Any retained data is handled strictly under applicable statutory rules.
              </p>
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href="https://thelittlebroadway.com/privacy-policy"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-[#C47D14] hover:underline font-medium"
            >
              <span>Read The Little Broadway Privacy Policy</span>
              <ExternalLink className="w-3.5 h-3.5" />
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
