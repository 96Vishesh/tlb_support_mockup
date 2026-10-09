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

  return (
    <div className="min-h-screen bg-[#0F1013] text-[#D0D0D0] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compliance Notice Banner */}
        <div className="mb-8 p-4 rounded-xl bg-[#16171C] border border-[#2B2C32] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#F5A623]/15 text-[#F5A623] flex items-center justify-center shrink-0">
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
              className="text-xs text-[#F5A623] hover:underline flex items-center gap-1 font-medium"
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

        {/* Compliance Checklist Accordion */}
        {showComplianceDrawer && (
          <div className="mb-10 p-6 rounded-2xl bg-[#111215] border border-[#343434] animate-in fade-in duration-200">
            <h3 className="font-serif font-bold text-lg text-white mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#F5A623]" />
              <span>Google Play Account Deletion Checklist</span>
            </h3>
            <p className="text-xs text-[#8E8E93] mb-4">
              Review how this page meets the Google Play Store requirement for initiating app account deletion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {compliancePoints.map((pt) => (
                <div key={pt.title} className="p-3.5 rounded-lg bg-[#16171C] border border-[#26272C] text-xs">
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

        {/* Primary Page Header */}
        <header className="mb-10 pb-8 border-b border-[#26272C]">
          <span className="text-xs uppercase font-semibold tracking-[0.2em] text-[#F5A623] block mb-2">
            THE LITTLE BROADWAY APP
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
            Account &amp; Personal Data Deletion Request
          </h1>
          <p className="text-sm sm:text-base text-[#B8B8BD] leading-relaxed max-w-2xl">
            This public page provides users of <strong className="text-white">The Little Broadway</strong> mobile application (developed by The Little Broadway) with the official method to request permanent deletion of their account and associated personal data.
          </p>
        </header>

        {/* Instructions Block */}
        <div className="bg-[#111215] border border-[#343434] rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-white mb-6">
            Step-by-Step Deletion Instructions
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5">
                01
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">Contact Our Support Team</h3>
                <p className="text-sm text-[#A0A0A5] mt-1">
                  Send an email to <span className="font-mono text-white underline decoration-dotted">{supportEmail}</span> from your registered email client.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5">
                02
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">Identify Your Account</h3>
                <p className="text-sm text-[#A0A0A5] mt-1">
                  Clearly provide the email address associated with your TLB account so our team can locate your profile and verify your ownership.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5">
                03
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">Confirm Your Request</h3>
                <p className="text-sm text-[#A0A0A5] mt-1">
                  Set the subject line as <span className="italic text-[#F5A623]">&ldquo;{emailSubject}&rdquo;</span> and include a statement requesting that your account and personal records be deleted.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] flex items-center justify-center font-serif font-bold text-xs shrink-0 mt-0.5">
                04
              </div>
              <div>
                <h3 className="font-serif font-semibold text-white text-base">Request Processing &amp; Timeline</h3>
                <p className="text-sm text-[#A0A0A5] mt-1">
                  Your request will be acknowledged and fulfilled within <strong className="text-white">{processingTime}</strong>, subject to verification and applicable statutory retention rules.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Action Card */}
        <div className="bg-[#141519] border border-[#343434] rounded-2xl p-6 sm:p-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#F5A623] block mb-1">
              SUPPORT CONTACT
            </span>
            <h3 className="font-serif font-bold text-xl text-white">
              Ready to submit your request?
            </h3>
            <p className="text-xs text-[#8E8E93] mt-1">
              Click below to launch your email client with the deletion template pre-filled.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs">
              <span className="font-mono text-white bg-[#0F1013] px-2.5 py-1 rounded border border-[#2B2C32]">
                {supportEmail}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="text-xs text-[#8E8E93] hover:text-white flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#F5A623]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={mailtoUrl}
              className="px-6 py-3 rounded-full bg-[#F5A623] text-[#111215] font-semibold text-xs tracking-wider uppercase hover:bg-[#e5981a] transition-all flex items-center justify-center gap-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsDraftModalOpen(true)}
              className="px-5 py-2 rounded-full bg-[#202127] text-white hover:bg-[#2A2B32] text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Preview Draft Template</span>
            </button>
          </div>
        </div>

        {/* Data Scope Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-[#111215] border border-[#26272C]">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
              <h4 className="font-serif font-bold text-white text-base">Data We Delete</h4>
            </div>
            <ul className="text-xs text-[#A0A0A5] space-y-2">
              <li>· Account registration credentials and authentication identifiers</li>
              <li>· User profile information, avatars, and contact settings</li>
              <li>· User preferences and activity records linked to the account</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-[#111215] border border-[#26272C]">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#8E8E93]" />
              <h4 className="font-serif font-bold text-white text-base">Data We May Retain</h4>
            </div>
            <p className="text-xs text-[#A0A0A5] leading-relaxed">
              Information that must be retained to satisfy applicable legal, regulatory, security, fraud-prevention, or legitimate record-keeping obligations. Any retained data is handled strictly under applicable statutory rules.
            </p>
          </div>
        </div>

        {/* Footer Backlink */}
        <div className="text-center pt-4">
          <a
            href="https://thelittlebroadway.com/privacy-policy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#F5A623] hover:underline font-medium"
          >
            <span>Read The Little Broadway Privacy Policy</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      <EmailDraftModal
        isOpen={isDraftModalOpen}
        onClose={() => setIsDraftModalOpen(false)}
        emailAddress={supportEmail}
        emailSubject={emailSubject}
      />
    </div>
  );
};
