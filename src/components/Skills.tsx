import React from 'react';
import { motion } from 'motion/react';
import { Palette, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-widest">
            <Palette className="w-3.5 h-3.5" />
            <span>Creative Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Skills & <span className="text-[#3D8BFF]">Proficiencies</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A balanced mix of graphic art, video editing, social media graphics, and visual storytelling.
          </p>
        </div>

        {/* Grid of Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-3xl p-6 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Accent Color Background Flash */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{ backgroundColor: skill.color }}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 font-sans">
                    {skill.category}
                  </span>
                  <span
                    className="text-lg font-bold font-poppins"
                    style={{ color: skill.color }}
                  >
                    {skill.percentage}%
                  </span>
                </div>

                <h3 className="text-lg font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                  {skill.name}
                </h3>

                {/* Animated Progress Bar */}
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/80">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 + index * 0.05 }}
                    className="h-full rounded-full shadow-xs"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
