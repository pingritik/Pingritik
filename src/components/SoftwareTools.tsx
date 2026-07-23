import React from 'react';
import { motion } from 'motion/react';
import { Laptop, Sparkles, CheckCircle2 } from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data/portfolioData';

export const SoftwareTools: React.FC = () => {
  return (
    <section id="software" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-600 font-semibold text-xs uppercase tracking-widest">
            <Laptop className="w-3.5 h-3.5" />
            <span>Creative Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Software & <span className="text-[#FF4DA6]">Tools</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Industry-standard design applications, digital painting suites, and developer tools I utilize daily.
          </p>
        </div>

        {/* Software Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFTWARE_TOOLS.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="glass-card rounded-3xl p-6 bg-white border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Row: Software Icon Badge & Proficiency */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-poppins font-extrabold text-2xl border-2 shadow-inner group-hover:scale-110 transition-transform duration-300 ${tool.badgeColor}`}>
                    {tool.icon}
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-semibold uppercase text-slate-400 block font-sans">
                      Proficiency
                    </span>
                    <span className="text-lg font-bold font-poppins text-[#1E2A78]">
                      {tool.proficiency}%
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-500 font-sans mt-0.5">
                    {tool.category}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-sans pt-1">
                  {tool.description}
                </p>
              </div>

              {/* Bottom Progress Bar */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.05 }}
                    className="h-full bg-gradient-to-r from-[#3D8BFF] to-[#FF4DA6] rounded-full"
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
