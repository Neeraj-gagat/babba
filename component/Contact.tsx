import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Clock 
} from 'lucide-react';
import { servicesData } from './Services';

interface ContactProps {
  selectedService: string;
  onClearSelectedService?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'Immigration Consultancy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Keep form service in sync if user selected from Services section
  React.useEffect(() => {
    if (selectedService) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please complete all required fields (Name, Phone, Email).');
      return;
    }

    setSubmitting(true);
    // Simulate swift professional submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: 'Immigration Consultancy',
      message: '',
    });
  };

  const googleMapsDirectionsUrl = "https://www.google.com/maps/search/?api=1&query=SCO+125-126+Sector+17C+Chandigarh+160017";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section CTA Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            START YOUR CONSULTATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Ready to Explore Your Global Opportunities?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Talk to our team and take the first step toward planning your international journey.
          </p>

          {/* Quick Dual Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#enquiry-form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md shadow-amber-500/10 cursor-pointer"
            >
              <span>Book a Consultation</span>
            </a>
            <a
              href="tel:+919815623129"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white bg-slate-900 border border-slate-700 hover:border-amber-400/50 hover:bg-slate-800 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +91 98156 23129</span>
            </a>
          </div>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Office Details & Chandigarh Location */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office Info Card */}
            <div className="p-7 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
                <Building2 className="w-4 h-4" />
                <span>Visit Our Office</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Babba International Group India
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-mono">
                SECTOR - 17C, SCO 125-126, 3rd FLOOR,<br />
                CHANDIGARH, 160017, INDIA
              </p>

              <div className="space-y-4 pt-5 border-t border-slate-800 text-sm">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Direct Contact
                  </span>
                  <a
                    href="tel:+919815623129"
                    className="text-base sm:text-lg font-semibold text-amber-300 hover:text-amber-200 flex items-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 98156 23129</span>
                  </a>
                </div>

                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
                    Consultation Hours
                  </span>
                  <div className="flex items-center gap-2 text-slate-300 text-xs">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span>Monday – Saturday: 9:30 AM – 6:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-6 pt-5 border-t border-slate-800">
                <a
                  href={googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700/80 hover:border-slate-600 text-xs font-semibold tracking-wide transition-colors"
                >
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Get Directions to Chandigarh Office</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
                </a>
              </div>
            </div>

            {/* Visual Location Accent Card */}
            <div className="rounded-2xl overflow-hidden border border-slate-800/90 relative aspect-[16/9]">
              <img
                src="/chandigarh_city_architecture_1790412061997.jpg"
                alt="Chandigarh Sector 17 commercial district architecture and green boulevard"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-300">
                <span className="font-semibold text-white block mb-0.5">Sector 17C Commercial District</span>
                <span className="text-slate-400">Centrally situated in Chandigarh&apos;s primary commercial center</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div id="enquiry-form" className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to <span className="font-medium text-white">Babba International Group India</span>. Our team in Chandigarh will review your details and contact you via phone or email shortly.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-white mb-1">
                      Send an Enquiry
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out the form below and our advisors will respond to your query.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Gurpreet Singh"
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Phone & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Phone Number <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98156 XXXXX"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourname@example.com"
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Interested Service */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-400 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.title} className="bg-slate-950 text-white">
                          {svc.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details regarding your educational background, travel purpose, or destination preferences..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700/80 focus:border-amber-400 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                  >
                    {submitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center pt-1">
                    Your contact information will only be used to respond to your specific consultancy enquiry.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
