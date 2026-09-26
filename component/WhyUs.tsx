import React from 'react';
import { UserCheck, ShieldCheck, MessageSquare, HeartHandshake, ArrowRight } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      title: 'Personalized Approach',
      description: 'Understand your individual goals and requirements.',
      icon: UserCheck,
    },
    {
      title: 'Professional Guidance',
      description: 'Receive structured assistance throughout the relevant stages.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Communication',
      description: 'Clear information about requirements and processes.',
      icon: MessageSquare,
    },
    {
      title: 'Client-Focused Support',
      description: 'A service approach centered around your individual needs.',
      icon: HeartHandshake,
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      detail: 'Discussion of your background, international goals, and questions.'
    },
    {
      step: '02',
      title: 'Profile Review',
      detail: 'Objective assessment of available pathways and applicable criteria.'
    },
    {
      step: '03',
      title: 'Documentation',
      detail: 'Assistance organizing and structuring required supporting records.'
    },
    {
      step: '04',
      title: 'Application Guidance',
      detail: 'Structured support through each phase of the formal application.'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            WHY BABBA INTERNATIONAL GROUP INDIA
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            A Clearer Path to Your International Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Navigating immigration and international opportunities requires methodical attention, realistic planning, and transparent advice.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Subsection */}
        <div className="pt-10 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
            <div>
              <div className="text-xs font-semibold tracking-wider uppercase text-slate-400 mb-1">
                OUR STRUCTURED WORKFLOW
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                How We Guide You
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-2 md:mt-0">
              Clear, step-by-step facilitation from initial inquiry to final submission.
            </p>
          </div>

          {/* Compact Horizontal Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 relative">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className="relative p-5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between group hover:border-amber-400/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                      STEP {item.step}
                    </span>
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-slate-600 group-hover:text-amber-400/70 transition-colors" />
                    )}
                  </div>
                  <h4 className="text-base font-semibold text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
