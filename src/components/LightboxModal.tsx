import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onLike: (id: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onLike }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-4xl w-full bg-white rounded-[32px] overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            aria-label="Close image"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left: Graphic Design Vector Artwork Box (No Photos) */}
          <div className="md:w-2/3 bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-slate-900 text-white p-8 sm:p-12 flex flex-col justify-between min-h-[300px] md:min-h-[450px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3D8BFF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#FF4DA6]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold text-amber-300 border border-white/20">
                {item.category}
              </span>
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>

            <div className="relative z-10 space-y-3 my-auto py-8">
              <span className="text-xs uppercase font-bold tracking-widest text-blue-200 block">Graphic Design & Visual Concept</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-poppins text-white leading-tight">
                {item.title}
              </h2>
              <p className="text-sm text-blue-100 max-w-lg font-sans leading-relaxed">
                {item.caption}
              </p>
            </div>

            <div className="relative z-10 text-xs font-medium text-slate-300">
              Vector Graphic & Clean Typographic Composition
            </div>
          </div>

          {/* Right: Artwork Details & Caption */}
          <div className="md:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-white space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-[#FF4DA6] font-semibold text-xs uppercase tracking-wider">
                <Tag className="w-3.5 h-3.5" />
                <span>{item.category}</span>
              </div>

              <h3 className="text-2xl font-bold font-poppins text-[#1E2A78]">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 font-sans leading-relaxed">
                {item.caption}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onLike(item.id)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-pink-50 hover:bg-pink-100 text-[#FF4DA6] font-poppins font-bold text-sm transition-all cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current" />
                <span>{item.likes} Likes</span>
              </button>

              <span className="text-xs font-semibold text-slate-400">Digital Artwork</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
