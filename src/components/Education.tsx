import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 font-semibold text-xs uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Education & <span className="text-[#FFC857]">Honors</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Foundational training in digital art, multimedia systems, and design theory.
          </p>
        </div>

        {/* Vertical Animated Timeline */}
        <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Badge */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 rounded-2xl bg-white border-2 border-[#3D8BFF] text-[#3D8BFF] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#3D8BFF] group-hover:text-white transition-all duration-300">
                {item.icon === 'GraduationCap' ? (
                  <GraduationCap className="w-5 h-5" />
                ) : (
                  <Award className="w-5 h-5" />
                )}
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3D8BFF] font-sans">
                      {item.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-poppins text-[#1E2A78]">
                      {item.degree}
                    </h3>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E2A78] text-xs font-bold font-poppins">
                    {item.duration}
                  </span>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">
                    Key Achievements:
                  </p>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-sans">
                        <CheckCircle className="w-4 h-4 text-[#61DDAA] shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
