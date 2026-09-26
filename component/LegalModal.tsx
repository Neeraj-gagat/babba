import React from 'react';
import { X, ShieldAlert, FileText, Lock } from 'lucide-react';

export type LegalModalType = 'privacy' | 'terms' | 'disclaimer' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-slate-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'disclaimer' && (
          <div>
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <ShieldAlert className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Professional Legal Disclaimer</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <p className="p-4 rounded-xl bg-slate-950 border border-amber-500/20 text-amber-200 font-medium">
                «Immigration and visa outcomes depend on individual circumstances and decisions made by the relevant authorities. Information provided on this website is for general informational purposes and does not constitute a guarantee of any immigration or visa outcome.»
              </p>
              <p>
                Babba International Group India is an independent immigration and international consultancy located in Sector 17C, Chandigarh, India. We offer consultation, profile assessment, and administrative documentation assistance.
              </p>
              <p>
                Neither this website nor our consultations constitute legal counsel. Official decisions on visa grant, study permits, work authorisations, or immigration statuses rest exclusively with sovereign government immigration authorities, embassies, and consulates.
              </p>
              <p>
                We do not issue visas or guarantee approvals under any circumstance.
              </p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div>
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <Lock className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Privacy Policy</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <p>
                At Babba International Group India, we respect your privacy. This policy outlines how we handle personal details shared when contacting our Chandigarh office.
              </p>
              <h4 className="text-sm font-semibold text-white">Information We Collect</h4>
              <p>
                We only collect information voluntarily submitted through our enquiry form or direct phone calls, including your name, telephone number, email address, and service interest.
              </p>
              <h4 className="text-sm font-semibold text-white">Use of Information</h4>
              <p>
                Information provided is solely utilized to contact you, respond to your inquiries, schedule in-person or remote consultations, and provide immigration guidance. We never sell, lease, or distribute client data to third parties.
              </p>
              <h4 className="text-sm font-semibold text-white">Contact & Retention</h4>
              <p>
                To request modification or deletion of your contact data, you may reach out directly to our Chandigarh office at +91 98156 23129.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div>
            <div className="flex items-center gap-3 text-amber-400 mb-4">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white">Terms & Conditions</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-4">
              <p>
                By utilizing this website or engaging services with Babba International Group India, you acknowledge and agree to the following terms:
              </p>
              <h4 className="text-sm font-semibold text-white">Scope of Consultancy</h4>
              <p>
                Services provided comprise procedural assistance, document organization, and information dissemination regarding international immigration and educational pathways.
              </p>
              <h4 className="text-sm font-semibold text-white">Applicant Responsibility</h4>
              <p>
                Clients are solely responsible for ensuring the veracity, authenticity, and completeness of all personal records and background documentation provided.
              </p>
              <h4 className="text-sm font-semibold text-white">Jurisdiction</h4>
              <p>
                Any formal disputes arising from advisory engagements are subject to the exclusive jurisdiction of the competent courts in Chandigarh, India.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-800 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
