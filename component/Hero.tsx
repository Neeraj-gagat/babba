import React from 'react';
import { ArrowRight, Compass, MapPin, Globe } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Dark & Elegant Gradient Overlay */}
      <div className="absolute inset-0 z-0">

        <img
          src="/hero_international_journey_1790412029825.jpg"
          alt="International departures lounge and aircraft representing global travel"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Measured scrims: deep navy to dark slate overlay for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      {/* Decorative subtle ambient grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle location & division trust kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4 sm:mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>YOUR JOURNEY. OUR GUIDANCE.</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400 normal-case font-normal flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Chandigarh, Sector 17C
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
            Your Gateway to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-amber-200">
              Global Opportunities
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            Professional immigration and international consultancy services designed to help you take the next step toward your global ambitions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onBookClick}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg text-sm sm:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/25 transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm sm:text-base font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer backdrop-blur-sm"
            >
              <span>Explore Our Services</span>
            </button>
          </div>

          {/* Clean trust indicators / destinations focal anchor */}
          <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>International Pathways & Visas</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Strategic Profile Evaluation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Office Consultations in Chandigarh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
