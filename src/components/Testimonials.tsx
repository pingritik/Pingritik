import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquareHeart } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-100/30 via-blue-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#FF4DA6] font-semibold text-xs uppercase tracking-widest">
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Client Praise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Kind Words & <span className="text-[#FF4DA6]">Testimonials</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Feedback from art directors, publishers, founders, and creative directors I have collaborated with.
          </p>
        </div>

        {/* Testimonial Card Slider */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoplay(false)}
          onMouseLeave={() => setIsAutoplay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, scale: 0.96, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-[36px] p-8 sm:p-12 bg-white/95 border border-slate-200 shadow-xl text-center space-y-6 relative overflow-hidden"
            >
              <Quote className="w-16 h-16 text-blue-100 mx-auto -mb-8 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex items-center justify-center gap-1 text-[#FFC857]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-2xl font-serif italic text-slate-800 leading-relaxed max-w-2xl mx-auto font-sans">
                "{current.content}"
              </p>

              {/* Client Info */}
              <div className="flex flex-col items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3D8BFF] to-[#FF4DA6] text-white font-poppins font-bold text-xl flex items-center justify-center border-2 border-white shadow-md">
                  {current.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-lg font-bold font-poppins text-[#1E2A78]">
                    {current.name}
                  </h4>
                  <p className="text-xs font-semibold text-[#3D8BFF] font-sans">
                    {current.position} — <span className="text-slate-600">{current.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Controls & Pagination Indicators */}
          <div className="flex items-center justify-between mt-8 max-w-md mx-auto">
            <button
              onClick={handlePrev}
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#3D8BFF] hover:border-[#3D8BFF] shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrentIndex(i);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? 'w-8 bg-[#3D8BFF]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#3D8BFF] hover:border-[#3D8BFF] shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
