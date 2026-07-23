import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Sparkles, Heart, Compass, Dribbble, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-pink-600 font-semibold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            About <span className="text-[#FF4DA6]">Me!</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Passion, playfulness, and design precision wrapped into every creative endeavor.
          </p>
        </div>

        {/* Main Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[36px] p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200/80 relative overflow-hidden bg-white/90"
        >
          {/* Subtle Decorative Background Shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-100/40 via-pink-100/30 to-transparent rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Side: Profile Meta & Quick Links */}
            <div className="lg:col-span-5 space-y-6">
              {/* Title & Nickname Tag */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-poppins font-bold text-[#1E2A78]">
                  <span>A.K.A</span>
                  <span className="text-[#FF4DA6]">{PERSONAL_INFO.nickname} 🎸</span>
                </div>
                <h3 className="text-3xl font-extrabold font-poppins text-[#1E2A78]">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-base font-semibold text-[#3D8BFF]">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Contact Information Quick Links */}
              <div className="w-full space-y-3 text-sm text-slate-600 bg-slate-50/80 p-5 rounded-2xl border border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-[#3D8BFF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#3D8BFF] transition-colors truncate font-medium">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-[#FFC857] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Icon Grid */}
              <div className="flex items-center gap-3 pt-1">
                {[
                  { name: 'Behance', href: PERSONAL_INFO.socials.behance, icon: Sparkles, color: 'hover:bg-blue-600 hover:text-white' },
                  { name: 'Dribbble', href: PERSONAL_INFO.socials.dribbble, icon: Dribbble, color: 'hover:bg-pink-600 hover:text-white' },
                  { name: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, color: 'hover:bg-blue-700 hover:text-white' }
                ].map((s) => {
                  const IconComponent = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center border border-slate-200 transition-all duration-300 shadow-xs hover:scale-110 active:scale-95 ${s.color}`}
                      title={s.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

            </div>

            {/* Right Side: Detailed Bio, Philosophy & Mission */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#1E2A78] leading-snug">
                  Graphic Designer & <span className="text-[#3D8BFF]">Video</span> <span className="text-[#FF4DA6]">Editor</span>
                </h3>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans whitespace-pre-line">
                  {PERSONAL_INFO.fullBio}
                </p>
              </div>

              {/* Philosophy & Mission Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#3D8BFF] font-bold font-poppins text-base">
                    <Heart className="w-5 h-5 text-[#FF4DA6] fill-current" />
                    <span>Creative Philosophy</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    "{PERSONAL_INFO.philosophy}"
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
                  <div className="flex items-center gap-2 text-[#1E2A78] font-bold font-poppins text-base">
                    <Compass className="w-5 h-5 text-[#FFC857]" />
                    <span>Mission Statement</span>
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    "{PERSONAL_INFO.mission}"
                  </p>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
