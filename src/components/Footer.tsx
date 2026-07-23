import React from 'react';
import { ArrowUp, Sparkles, Heart, Dribbble, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const FOOTER_NAV = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Software', href: '#software' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1E2A78] text-white pt-16 pb-8 relative overflow-hidden border-t border-slate-800">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D8BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#FF4DA6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-blue-900/60">
          
          {/* Brand Logo & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#3D8BFF] to-[#FF4DA6] text-white flex items-center justify-center font-poppins font-extrabold text-lg shadow-md">
                R
              </span>
              <span className="text-2xl font-bold font-poppins text-white">
                Ritik
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-md font-sans">
              Graphic Designer & Video Editor creating visuals that leave a lasting impression.
            </p>
          </div>

          {/* Quick Back-to-Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-semibold text-sm transition-all duration-300 cursor-pointer shadow-md"
            aria-label="Back to top"
          >
            <span>Back To Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

        {/* Navigation & Social Row */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-blue-900/60">
          
          {/* Footer Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-300">
            {FOOTER_NAV.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="hover:text-[#6FC7FF] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { name: 'Behance', href: PERSONAL_INFO.socials.behance, icon: Sparkles },
              { name: 'Dribbble', href: PERSONAL_INFO.socials.dribbble, icon: Dribbble },
              { name: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: Linkedin }
            ].map((s) => {
              const IconComponent = s.icon;
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-900/40 hover:bg-[#3D8BFF] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-blue-800/50"
                  title={s.name}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-sans gap-2">
          <p>© 2025 Ritik. Designed with passion & playful creativity.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF4DA6] fill-current" />
            <span>for Awwwards & Behance</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
