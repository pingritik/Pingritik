import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Tools', href: '#software' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onNavigateToPortfolio?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToContact?: () => void;
  onNavigateToServices?: () => void;
  currentView?: 'home' | 'portfolio' | 'contact' | 'services';
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToPortfolio,
  onNavigateToHome,
  onNavigateToContact,
  onNavigateToServices,
  currentView = 'home'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0);

      setIsScrolled(currentScroll > 40);

      // Section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = currentScroll + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#contact' && onNavigateToContact) {
      onNavigateToContact();
      return;
    }

    if (href === '#services' && onNavigateToServices) {
      onNavigateToServices();
      return;
    }

    if ((href === '#projects' || href === '#gallery') && onNavigateToPortfolio) {
      onNavigateToPortfolio();
      return;
    }

    if (currentView !== 'home' && onNavigateToHome) {
      onNavigateToHome();
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-[#3D8BFF] via-[#FF4DA6] to-[#FFC857] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`px-4 sm:px-8 py-3 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg shadow-slate-900/5 py-3 border-b border-slate-200/60'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2 text-xl font-bold font-poppins text-[#1E2A78]"
          >
            <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3D8BFF] to-[#FF4DA6] text-white flex items-center justify-center font-extrabold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              R
            </span>
            <span className="flex flex-col">
              <span className="leading-tight text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                Ritik
              </span>
              <span className="text-[10px] font-normal tracking-wider uppercase text-slate-500 font-sans">
                Creative Portfolio
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-[#1E2A78] font-semibold'
                      : 'text-slate-600 hover:text-[#3D8BFF]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-blue-50 border border-blue-200 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] text-white font-medium text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 border border-slate-200 text-slate-700 hover:text-[#3D8BFF] focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block px-4 py-3 rounded-2xl text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-[#1E2A78] font-semibold border border-blue-200'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-[#3D8BFF]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] text-white font-medium shadow-md shadow-blue-600/20"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
