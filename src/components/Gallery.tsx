import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Images, Heart, ZoomIn } from 'lucide-react';
import { GALLERY_DATA } from '../data/portfolioData';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

interface GalleryProps {
  onViewAllClick?: () => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onViewAllClick }) => {
  const [items, setItems] = useState<GalleryItem[]>(GALLERY_DATA);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleLike = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
    if (selectedItem && selectedItem.id === id) {
      setSelectedItem((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }
  };

  return (
    <section id="gallery" className="py-24 relative bg-slate-50/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-widest">
            <Images className="w-3.5 h-3.5" />
            <span>Creative Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Artistic <span className="text-[#3D8BFF]">Showcase</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A Pinterest-style grid of visual sketches, illustrations, character art, and design experiments.
          </p>
        </div>

        {/* Pinterest Style Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="break-inside-avoid glass-card rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              {/* Graphic Design Vector Display (No Photos) */}
              <div className="relative p-6 bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-[#FF4DA6] text-white min-h-[160px] flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-md" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:10px_10px] opacity-30" />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-white/20">
                    {item.category}
                  </span>
                  <span className="p-1.5 rounded-full bg-white/20 text-white">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="relative z-10 space-y-1 pt-4">
                  <h3 className="text-base font-extrabold font-poppins text-white leading-snug">{item.title}</h3>
                  <p className="text-xs text-blue-100 line-clamp-2">{item.caption}</p>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-4 flex items-center justify-between text-xs font-semibold text-slate-600 bg-white">
                <span className="font-poppins">{item.title}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLike(item.id);
                  }}
                  className="flex items-center gap-1 text-slate-500 hover:text-[#FF4DA6] transition-colors cursor-pointer"
                >
                  <Heart className="w-3.5 h-3.5 fill-current text-pink-400" />
                  <span>{item.likes}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Gallery Page Button */}
        {onViewAllClick && (
          <div className="text-center pt-10">
            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#FF4DA6] hover:bg-[#1E2A78] text-white font-poppins font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>View Full Gallery Page</span>
              <Images className="w-5 h-5 text-pink-200" />
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        <LightboxModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onLike={handleLike}
        />

      </div>
    </section>
  );
};
