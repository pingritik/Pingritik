import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Sparkles, Heart, Palette, Code, Star, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const TYPING_TITLES = [
  'Graphic Designer 🎨',
  'Video Editor 🎬',
  'Visual Storyteller 🌟',
  'Content Creator ✨',
];

interface HeroProps {
  onViewPortfolioClick?: () => void;
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPortfolioClick, onContactClick }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetTitle = TYPING_TITLES[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(targetTitle.substring(0, displayedText.length + 1));
        if (displayedText.length === targetTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(targetTitle.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % TYPING_TITLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 md:py-32 overflow-hidden flex items-center justify-center">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#6FC7FF]/20 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#FF4DA6]/15 rounded-full blur-3xl pointer-events-none animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-10 right-1/3 w-80 h-80 bg-[#FFC857]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 w-full relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Top Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-blue-100 shadow-sm text-sm font-medium text-[#1E2A78]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#61DDAA] animate-ping" />
            <span className="text-[#3D8BFF] font-semibold">Available for Freelance & Full-time</span>
            <Sparkles className="w-4 h-4 text-[#FFC857]" />
          </div>

          {/* Main Greeting & Name */}
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl font-poppins font-medium text-slate-600">
              Hey! I'm <span className="text-[#FF4DA6] font-bold inline-block hover:scale-105 transition-transform cursor-pointer">Ritik</span> 👋
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-poppins text-[#1E2A78] leading-[1.15] tracking-tight">
              Brings Out Visual <br />
              <span className="bg-gradient-to-r from-[#3D8BFF] via-[#FF4DA6] to-[#FFC857] bg-clip-text text-transparent">
                Ideas To Life
              </span>
            </h1>

            {/* Typing Effect Subtitle */}
            <div className="h-10 text-xl sm:text-2xl font-poppins font-semibold text-slate-700 flex items-center justify-center gap-1 pt-2">
              <span>I am a </span>
              <span className="text-[#3D8BFF] border-b-2 border-[#3D8BFF] pb-0.5">
                {displayedText}
              </span>
              <span className="animate-pulse text-[#3D8BFF]">|</span>
            </div>
          </div>

          {/* Short Introduction */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            {PERSONAL_INFO.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onViewPortfolioClick) {
                  onViewPortfolioClick();
                } else {
                  scrollTo('#projects');
                }
              }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] text-white font-poppins font-semibold text-lg shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>View Portfolio</span>
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                if (onContactClick) {
                  onContactClick();
                } else {
                  scrollTo('#contact');
                }
              }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#3D8BFF] text-slate-800 font-poppins font-semibold text-lg shadow-sm hover:shadow-md hover:text-[#3D8BFF] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Compass className="w-5 h-5 text-[#FF4DA6]" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Key Specialization Badges Row */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 text-center shadow-xs hover:border-[#3D8BFF]/40 transition-colors">
              <p className="text-2xl font-bold font-poppins text-[#1E2A78]">1 Year</p>
              <p className="text-xs text-slate-500 font-medium">Experience</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 text-center shadow-xs hover:border-[#FF4DA6]/40 transition-colors">
              <p className="text-2xl font-bold font-poppins text-[#FF4DA6]">Graphic</p>
              <p className="text-xs text-slate-500 font-medium">Design 🎨</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 text-center shadow-xs hover:border-[#3D8BFF]/40 transition-colors">
              <p className="text-2xl font-bold font-poppins text-[#3D8BFF]">Creative</p>
              <p className="text-xs text-slate-500 font-medium">Video Editing 🎬</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 text-center shadow-xs hover:border-[#FFC857]/40 transition-colors">
              <p className="text-2xl font-bold font-poppins text-[#1E2A78]">Content</p>
              <p className="text-xs text-slate-500 font-medium font-poppins">Creator ✨</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
