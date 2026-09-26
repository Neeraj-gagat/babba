import React from 'react';
import { UserCheck, Compass, Globe2, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Representation with Fallback Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-black/40 bg-slate-800">
              <img
                src="/about_consultation_office_1790412049245.jpg"
                alt="Consultation desk with global map and international documentation in Chandigarh office"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4]"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle inner card highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />
              
              {/* Quiet location highlight card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0 mt-0.5">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs uppercase tracking-wider text-amber-400 font-semibold mb-0.5">
                      Chandigarh Advisory Center
                    </h2>
                    <p className="text-xs text-slate-300">
                      Sector 17C, SCO 125-126, 3rd Floor · In-person & remote consultations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle background decoration accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Introduction & Our Goals */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Label */}
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
              ABOUT BABBA INTERNATIONAL GROUP INDIA
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6 [text-wrap:balance]">
              Helping You Move Forward With Confidence
            </h2>

            {/* Concise Introduction */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-10 font-normal">
              At Babba International Group India, we understand that planning an international move is an important decision. Our approach is centered around understanding each client&apos;s goals, providing clear guidance, and helping them navigate the relevant process with confidence.
            </p>

            {/* Our Goals Subsection */}
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <span>Our Core Goals</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Goal 1 */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    Personalized Guidance
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Understanding individual goals and providing relevant assistance tailored to your circumstances.
                  </p>
                </div>

                {/* Goal 2 */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    Clear Process
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Making requirements and procedures straightforward and easier to understand at every step.
                  </p>
                </div>

                {/* Goal 3 */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">
                    Global Opportunities
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Helping clients systematically explore suitable international migration, study, and travel opportunities.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
