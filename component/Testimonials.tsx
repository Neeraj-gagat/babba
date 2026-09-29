import React, { useState } from 'react';
import { CheckCircle2, Eye, X, Compass, Globe, GraduationCap, Plane } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  category: string;
  pathway: string;
  image: string;
  description: string;
  feedback: string;
  details: string[];
}

export const Testimonials: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<TestimonialItem | null>(null);

  const visaStories: TestimonialItem[] = [
    {
      id: 'student-visa',
      name: 'Simranjeet K.',
      category: 'Student Visa Pathway',
      pathway: 'Higher Education & Study Permit',
      image: '/img3.JPEG',
      description: 'Secured student visa documentation guidance for international university intake.',
      feedback: 'The team in Sector 17C thoroughly examined my academic transcripts, organized the financial proofs clearly, and kept me informed at every stage of the student permit filing.',
      details: [
        'Academic profile review and course prerequisites verification',
        'Financial documentation structuring and affidavit guidance',
        'Submission tracking and checklist verification'
      ]
    },
    {
      id: 'skilled-visa',
      name: 'Harpreet & Aman S.',
      category: 'Skilled Work & Migration',
      pathway: 'International Employment Visa',
      image: '/img2.JPEG',
      description: 'Assisted with employment-based immigration paperwork and regulatory document structuring.',
      feedback: 'Navigating work permit requirements can be overwhelming, but Babba International Group broke down the criteria methodically. Their transparent communication gave us peace of mind.',
      details: [
        'Comprehensive professional work experience documentation review',
        'Cross-jurisdictional criteria and qualification alignment',
        'Accurate application assembly without delays'
      ]
    },
    {
      id: 'visitor-visa',
      name: 'Gurvinder P.',
      category: 'Visitor & Travel Visa',
      pathway: 'International Tourist & Family Visit',
      image: '/img1.JPEG',
      description: 'Structured visitor visa application with verified itinerary and purpose of travel records.',
      feedback: 'I needed guidance for a family visit abroad. They took time to review my travel purpose and ties to India so the file was presented clearly and truthfully to authorities.',
      details: [
        'Itinerary compilation and accommodation verification',
        'Financial self-sufficiency documentation audit',
        'Clear statement of purpose guidance'
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-950 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            CLIENT EXPERIENCES & APPROVALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Client Visa Journeys
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Real individuals who consulted Babba International Group India for their immigration, study, and travel visa aspirations.
          </p>
        </div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visaStories.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-900/90 rounded-2xl border border-slate-800 hover:border-amber-400/40 overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay & Zoom Trigger */}
                <div 
                  className="relative aspect-[4/3] overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActivePhoto(item)}
                >
                  <img
                    src={item.image}
                    alt={`${item.name} celebrating visa approval with Babba International Group India`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                  
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-medium text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.category}</span>
                  </div>

                  {/* View Details hover indicator */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-900/80 backdrop-blur-md text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs">
                    <Eye className="w-3.5 h-3.5 text-amber-400" />
                    <span>View Journey</span>
                  </div>

                  {/* Name banner */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="text-base font-semibold">{item.name}</h3>
                    <p className="text-xs text-slate-300">{item.pathway}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-slate-300 italic mb-4 leading-relaxed line-clamp-3">
                    &ldquo;{item.feedback}&rdquo;
                  </p>

                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {item.details.slice(0, 2).map((det, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{det}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setActivePhoto(item)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-xs font-semibold text-slate-200 hover:text-white transition-colors border border-slate-700/80 flex items-center justify-center gap-2"
                >
                  <span>Read Consultation Summary</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Disclaimer reminder */}
        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          Every application outcome is determined independently by sovereign immigration departments based on personal eligibility and statutory criteria.
        </div>

      </div>

      {/* Lightbox / Journey Detail Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden text-slate-200">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative h-64 sm:h-full bg-slate-950">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent sm:hidden" />
              </div>

              <div className="p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-1">
                    {activePhoto.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {activePhoto.name}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 font-mono">
                    {activePhoto.pathway}
                  </p>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 italic mb-5 leading-relaxed">
                    &ldquo;{activePhoto.feedback}&rdquo;
                  </div>

                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Consultancy Scope Provided:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-400">
                    {activePhoto.details.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Chandigarh Sector 17C Office
                  </span>
                  <button
                    onClick={() => setActivePhoto(null)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
