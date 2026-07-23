import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Sparkles, FolderKanban, Eye } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';

const CATEGORIES = ['All', 'Graphic Design', 'Video & Motion', 'Branding'] as const;

interface FeaturedProjectsProps {
  onViewAllClick?: () => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onViewAllClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#FF4DA6] font-semibold text-xs uppercase tracking-widest">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Featured <span className="text-[#FF4DA6]">Projects</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A selection of graphic design projects, video edits, brand visual identities, and creative graphics.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-poppins font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#1E2A78] text-white shadow-md shadow-indigo-900/20 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-[#3D8BFF] hover:text-[#3D8BFF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Animated Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-[32px] bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group hover:-translate-y-2"
              >
                {/* Graphic Vector Design Card Header (No Photos) */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-[#3D8BFF] text-white p-6 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
                  {/* Geometric Vector Pattern */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#FF4DA6]/20 rounded-full blur-xl pointer-events-none" />
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                  {/* Top Category Badge & Icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-poppins font-bold text-xs border border-white/30">
                      {project.category}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md flex items-center justify-center text-amber-300 border border-white/20">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Center Graphic Badge */}
                  <div className="relative z-10 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 block">Graphic Visual Project</span>
                    <h4 className="text-lg font-extrabold font-poppins text-white line-clamp-1 drop-shadow-xs">
                      {project.title}
                    </h4>
                  </div>

                  {/* Gradient Hover Actions */}
                  <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 gap-3 z-20">
                    {project.caseStudy && (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="px-4 py-2.5 rounded-2xl bg-white text-slate-900 font-poppins font-bold text-xs shadow-lg hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-4 h-4 text-[#3D8BFF]" />
                        <span>Case Study</span>
                      </button>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-2xl bg-[#3D8BFF] text-white shadow-lg hover:scale-105 transition-transform cursor-pointer"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-xl bg-slate-100 border border-slate-200/60 text-slate-600 text-[11px] font-medium font-sans"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons Footer */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                    {project.caseStudy ? (
                      <button
                        onClick={() => setSelectedCaseStudy(project)}
                        className="text-xs font-bold font-poppins text-[#3D8BFF] hover:text-[#1E2A78] flex items-center gap-1 group/btn cursor-pointer"
                      >
                        <span>Read Case Study</span>
                        <Sparkles className="w-3.5 h-3.5 text-[#FFC857] group-hover/btn:rotate-12 transition-transform" />
                      </button>
                    ) : (
                      <span className="text-xs font-semibold text-slate-400">Personal Project</span>
                    )}

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl text-slate-500 hover:text-[#3D8BFF] hover:bg-blue-50 transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Page Button */}
        {onViewAllClick && (
          <div className="text-center pt-10">
            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#1E2A78] hover:bg-[#3D8BFF] text-white font-poppins font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>Explore All Projects & Gallery Page</span>
              <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
            </button>
          </div>
        )}

        {/* Case Study Popup Modal */}
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />

      </div>
    </section>
  );
};
