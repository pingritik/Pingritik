/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { SoftwareTools } from './components/SoftwareTools';
import { Experience } from './components/Experience';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioPage } from './components/PortfolioPage';
import { ContactPage } from './components/ContactPage';
import { ServicesPage } from './components/ServicesPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'portfolio' | 'contact' | 'services'>('home');

  const goToPortfolio = () => {
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToServices = () => {
    setCurrentView('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans selection:bg-[#3D8BFF] selection:text-white antialiased">
      <Navbar
        currentView={currentView}
        onNavigateToPortfolio={goToPortfolio}
        onNavigateToHome={goToHome}
        onNavigateToContact={goToContact}
        onNavigateToServices={goToServices}
      />
      <main>
        {currentView === 'contact' && (
          <ContactPage onBackToHome={goToHome} />
        )}

        {currentView === 'services' && (
          <ServicesPage onBackToHome={goToHome} onContactClick={goToContact} />
        )}

        {currentView === 'portfolio' && (
          <PortfolioPage onBackToHome={goToHome} onContactClick={goToContact} />
        )}

        {currentView === 'home' && (
          <>
            <Hero onViewPortfolioClick={goToPortfolio} onContactClick={goToContact} />
            <About />
            <Skills />
            <SoftwareTools />
            <Experience />
            <FeaturedProjects onViewAllClick={goToPortfolio} />
            <Services />
            <Gallery onViewAllClick={goToPortfolio} />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

