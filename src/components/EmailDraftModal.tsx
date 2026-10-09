import React, { useState } from 'react';
import { X, Copy, Check, Mail, ExternalLink } from 'lucide-react';

interface EmailDraftModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailAddress?: string;
  emailSubject?: string;
}

export const EmailDraftModal: React.FC<EmailDraftModalProps> = ({
  isOpen,
  onClose,
  emailAddress = 'support@thelittlebroadway.com',
  emailSubject = 'Account Deletion Request',
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const emailBody = `Hello The Little Broadway Support Team,

I would like to request the permanent deletion of my account and all associated personal data from The Little Broadway app.

Account Details:
- Registered Email Address: [Enter your TLB account email here]
- Full Name: [Enter your name]

Please confirm once the deletion request has been processed.

Thank you.`;

  const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `To: ${emailAddress}\nSubject: ${emailSubject}\n\n${emailBody}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#141519] border border-[#343434] rounded-2xl shadow-2xl p-6 sm:p-7 text-left text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#26272C]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#F5A623]/15 text-[#F5A623] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Contact Support Draft
              </h3>
              <p className="text-xs text-[#A0A0A5]">
                Prefilled deletion request for TLB Support
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8E8E93] hover:text-white hover:bg-[#202127] rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-3.5 text-xs">
          <div>
            <span className="text-[#8E8E93] uppercase tracking-wider text-[10px] font-semibold block mb-1">
              Recipient
            </span>
            <div className="p-2.5 rounded-lg bg-[#0F1013] border border-[#2E2F35] font-mono text-white text-[13px] flex items-center justify-between">
              <span>{emailAddress}</span>
              <span className="text-[10px] text-[#F5A623] font-sans font-medium uppercase tracking-wider">
                Support Desk
              </span>
            </div>
          </div>

          <div>
            <span className="text-[#8E8E93] uppercase tracking-wider text-[10px] font-semibold block mb-1">
              Subject Line
            </span>
            <div className="p-2.5 rounded-lg bg-[#0F1013] border border-[#2E2F35] text-white font-medium text-[13px]">
              {emailSubject}
            </div>
          </div>

          <div>
            <span className="text-[#8E8E93] uppercase tracking-wider text-[10px] font-semibold block mb-1">
              Suggested Message Body
            </span>
            <pre className="p-3 rounded-lg bg-[#0F1013] border border-[#2E2F35] text-[#D0D0D0] whitespace-pre-wrap font-sans text-xs leading-relaxed max-h-48 overflow-y-auto">
              {emailBody}
            </pre>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <a
            href={mailtoLink}
            onClick={() => {
              setTimeout(onClose, 500);
            }}
            className="w-full sm:flex-1 py-3 px-4 rounded-full bg-[#F5A623] text-[#111215] font-semibold text-xs tracking-wide uppercase hover:bg-[#e5981a] transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Launch Email App</span>
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto py-3 px-5 rounded-full bg-[#202127] border border-[#343434] text-white font-medium text-xs hover:bg-[#2A2B32] transition-colors flex items-center justify-center gap-2"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-[#F5A623]" />
                <span className="text-[#F5A623]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Template</span>
              </>
            )}
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] text-[#6E6E75]">
          Tip: You can also email us directly from your webmail client (Gmail, Outlook, etc.) using the details above.
        </p>
      </div>
    </div>
  );
};
