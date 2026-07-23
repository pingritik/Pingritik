import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#61DDAA] font-semibold text-xs uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Work <span className="text-[#3D8BFF]">Experience</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hands-on experience creating eye-catching graphics, editing videos, and designing promotional brand assets.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="glass-card rounded-[32px] p-6 sm:p-8 bg-white border border-slate-200/80 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Corner Accent Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 via-pink-100/30 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* Header Row */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#FF4DA6] uppercase tracking-widest font-sans">
                      {exp.company}
                    </span>
                    <h3 className="text-2xl font-bold font-poppins text-[#1E2A78]">
                      {exp.position}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 font-poppins text-xs font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#3D8BFF]" />
                      {exp.duration}
                    </span>
                    <span className="px-3 py-1.5 rounded-full bg-blue-50 text-[#3D8BFF] text-xs font-bold">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase text-slate-400 font-sans tracking-wide">
                    Responsibilities & Achievements:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#3D8BFF] shrink-0 mt-2" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies / Tools Badges */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase text-slate-400 font-sans mr-1">
                    Tech & Tools:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-medium font-sans"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
