import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { LegalModalType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Left Column: Brand & Short Description */}
          <div className="md:col-span-5 space-y-4">
            <div className='items-center flex gap-4'>
                <img className='rounded-full  w-15 h-15  ' src="/logo.png" alt="logo" />
                <h3 className="text-xl font-bold text-white tracking-tight">
              Babba International Group India
            </h3>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional immigration and international consultancy services based in Chandigarh.
            </p>
            <div className="pt-2 text-xs text-slate-500">
              Assisting individuals with educational, travel, and international immigration pathways.
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Office Location & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-wider text-slate-200 font-semibold">
              Chandigarh Office
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-snug text-slate-300">
                  SECTOR - 17C, SCO 125-126, 3rd FLOOR,<br />
                  CHANDIGARH, 160017, INDIA
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href="tel:+919815623129"
                  className="text-slate-300 hover:text-amber-400 font-semibold transition-colors"
                >
                  +91 98156 23129
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Text */}
        <div className="py-6 border-b border-slate-800/80">
          <p className="text-xs text-slate-400 leading-relaxed italic text-center max-w-4xl mx-auto">
            «Immigration and visa outcomes depend on individual circumstances and decisions made by the relevant authorities. Information provided on this website is for general informational purposes and does not constitute a guarantee of any immigration or visa outcome.»
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Babba International Group India. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-slate-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-slate-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
