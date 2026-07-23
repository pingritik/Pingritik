import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Award, Clock, User, Layers } from 'lucide-react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  if (!project || !project.caseStudy) return null;

  const cs = project.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
        
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[36px] shadow-2xl border border-slate-200 overflow-y-auto z-10 p-6 sm:p-10 space-y-8"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="space-y-3 pt-2 pr-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Case Study — {project.category}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins text-[#1E2A78]">
              {project.title}
            </h2>
          </div>

          {/* Key Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200/80">
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase font-sans block">Client</span>
              <span className="text-sm font-bold font-poppins text-[#1E2A78]">{cs.client}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase font-sans block">Role</span>
              <span className="text-sm font-bold font-poppins text-[#3D8BFF]">{cs.role}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase font-sans block">Duration</span>
              <span className="text-sm font-bold font-poppins text-[#FF4DA6]">{cs.duration}</span>
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase font-sans block">Category</span>
              <span className="text-sm font-bold font-poppins text-[#FFC857]">{project.category}</span>
            </div>
          </div>

          {/* Graphic Design Hero Banner in Case Study (No Photos) */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-[#3D8BFF] text-white p-8 relative flex flex-col justify-between min-h-[180px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
            <div className="relative z-10 space-y-2">
              <span className="px-3 py-1 rounded-full bg-white/20 text-white font-poppins text-xs font-bold border border-white/20">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins">{project.title}</h2>
              <p className="text-sm text-blue-100 max-w-xl font-sans">{cs.overview}</p>
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
              <h3 className="text-lg font-bold font-poppins text-[#1E2A78] flex items-center gap-2">
                <span>🎯 The Challenge</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {cs.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200/80 space-y-2">
              <h3 className="text-lg font-bold font-poppins text-[#1E2A78] flex items-center gap-2">
                <span>💡 The Solution</span>
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                {cs.solution}
              </p>
            </div>
          </div>

          {/* Key Features & Impact Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h3 className="text-lg font-bold font-poppins text-[#1E2A78]">Key Deliverables</h3>
              <ul className="space-y-2">
                {cs.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#3D8BFF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold font-poppins text-[#1E2A78]">Impact & Outcomes</h3>
              <ul className="space-y-2">
                {cs.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-sans">
                    <Award className="w-4 h-4 text-[#FF4DA6] shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Visual Highlights inside Case Study (No Photos) */}
          {cs.keyFeatures && cs.keyFeatures.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-bold font-poppins text-[#1E2A78]">Design Concepts & Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="rounded-2xl p-5 bg-gradient-to-br from-slate-900 via-slate-800 to-[#1E2A78] text-white border border-slate-700 shadow-sm flex flex-col justify-between min-h-[110px]">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-blue-300 tracking-wider">Concept {idx + 1}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                    <p className="text-sm font-semibold font-poppins text-white">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer CTA Buttons */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.map((t) => (
                <span key={t} className="px-3 py-1 rounded-xl bg-slate-100 text-slate-600 text-xs font-semibold">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#3D8BFF] hover:bg-blue-600 text-white font-poppins font-semibold text-sm shadow-md transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins font-semibold text-sm transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Code Repository</span>
                </a>
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
