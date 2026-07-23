import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layout, Palette, Globe, Film, BookOpen, Layers, Send, ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sparkles,
  Layout,
  Palette,
  Globe,
  Film,
  BookOpen,
  Layers
};

export const Services: React.FC = () => {
  const handleServiceSelect = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to prefill subject
      window.dispatchEvent(new CustomEvent('prefillSubject', { detail: serviceTitle }));
    }
  };

  return (
    <section id="services" className="py-24 relative bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#FFC857] font-semibold text-xs uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Creative Solutions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Services <span className="text-[#3D8BFF]">& Offerings</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-impact visual communication, product design, and digital artwork tailored to your brand vision.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = ICON_MAP[service.icon] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-[32px] p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background Color Accent glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                <div className="space-y-5 relative z-10">
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-sm group-hover:scale-110 transition-transform duration-300 ${service.accentBg}`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans mt-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Included Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <p className="text-xs font-bold uppercase text-slate-400 font-sans tracking-wide">
                      What's Included:
                    </p>
                    <ul className="space-y-1.5">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-sans font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3D8BFF]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Inquiry CTA Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => handleServiceSelect(service.title)}
                    className="w-full py-3 rounded-2xl bg-slate-50 hover:bg-[#1E2A78] hover:text-white border border-slate-200 text-[#1E2A78] font-poppins font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                  >
                    <span>Request Inquiry</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
