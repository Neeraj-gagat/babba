import React from 'react';
import { 
  Globe, 
  FileCheck2, 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Files, 
  ArrowUpRight 
} from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const servicesData = [
  {
    id: 'immigration-consultancy',
    title: 'Immigration Consultancy',
    description: 'Professional guidance for individuals exploring immigration pathways.',
    icon: Globe,
    details: 'Structured assessment of immigration streams, eligibility criteria, and regulatory considerations for long-term residency options.'
  },
  {
    id: 'visa-assistance',
    title: 'Visa Assistance',
    description: 'Support with understanding visa requirements and application processes.',
    icon: FileCheck2,
    details: 'Step-by-step guidance on application forms, supporting checklist alignment, and submission protocol verification.'
  },
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    description: 'Guidance for students exploring international education opportunities.',
    icon: GraduationCap,
    details: 'Assistance identifying programs, student visa formalities, academic intake timelines, and prerequisite documentation.'
  },
  {
    id: 'work-abroad',
    title: 'Work Abroad',
    description: 'Assistance for individuals exploring international employment opportunities.',
    icon: Briefcase,
    details: 'Guidance regarding international employment pathways, work permits, and occupational qualification requirements.'
  },
  {
    id: 'visitor-travel-visas',
    title: 'Visitor & Travel Visas',
    description: 'Guidance for short-term international travel and visitor visa processes.',
    icon: Plane,
    details: 'Clarity on itinerary documentation, purpose of travel declarations, and tourist or visitor visa guidelines.'
  },
  {
    id: 'documentation-assistance',
    title: 'Documentation Assistance',
    description: 'Support with organizing and preparing relevant documentation.',
    icon: Files,
    details: 'Thorough review of paperwork organization, formatting, translations, and chronological profile records.'
  }
];

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            WHAT WE DO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Guidance for Your International Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Focused advisory services designed to give you clarity and direction through every stage of your international ambitions.
          </p>
        </div>

        {/* 3 x 2 Grid on Desktop, 1 Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onSelectService(service.title)}
                className="group relative p-7 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectService(service.title);
                  }
                }}
              >
                <div>
                  {/* Icon & Action indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center transition-colors group-hover:bg-amber-400 group-hover:text-slate-950">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="p-2 rounded-lg text-slate-500 group-hover:text-amber-400 transition-colors">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Bottom subtle detail & click prompt */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-400 transition-colors">
                  <span>Inquire for this service</span>
                  <span className="text-amber-400/80 font-medium">Select →</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
