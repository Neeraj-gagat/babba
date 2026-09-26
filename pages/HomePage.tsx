"use client"

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from '../component/Navbar';
import { Hero } from '../component/Hero';
import { About } from '../component/About';
import { Services } from '../component/Services';
import { WhyUs } from '../component/WhyUs';
import { Contact } from '../component/Contact';
import { Footer } from '../component/Footer';
import { LegalModal, LegalModalType } from '../component/LegalModal';

export default function App() {
  const [selectedService, setSelectedService] = useState('Immigration Consultancy');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  const handleBookConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500/20 selection:text-amber-200">
      {/* Sticky Clean Navbar */}
      <Navbar onBookClick={handleBookConsultation} />

      {/* Main Single Page Sections in Strict Order */}
      <main className="flex-grow">
        {/* SECTION 1 — HERO */}
        <Hero 
          onBookClick={handleBookConsultation} 
          onExploreClick={handleExploreServices} 
        />

        {/* SECTION 2 — ABOUT + GOALS */}
        <About />

        {/* SECTION 3 — SERVICES */}
        <Services onSelectService={handleSelectService} />

        {/* SECTION 4 — WHY CHOOSE US + PROCESS */}
        <WhyUs />

        {/* SECTION 5 — CONTACT / CTA */}
        <Contact 
          selectedService={selectedService} 
        />
      </main>

      {/* SECTION 6 — FOOTER */}
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Legal Dialog Modal */}
      <LegalModal
        type={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
