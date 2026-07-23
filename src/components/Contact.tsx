import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Sparkles, CheckCircle2, Instagram, Dribbble, Linkedin, Github, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({ ...prev, subject: `Inquiry for ${customEvent.detail}` }));
      }
    };
    window.addEventListener('prefillSubject', handlePrefill);
    return () => window.removeEventListener('prefillSubject', handlePrefill);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-[#3D8BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF4DA6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-widest">
            <Send className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-poppins text-[#1E2A78]">
            Let's Start A <span className="text-[#3D8BFF]">Project Together!</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind, need book illustration, or want to discuss design systems? Send a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-[36px] p-8 sm:p-10 bg-white border border-slate-200 shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-bold font-poppins text-[#1E2A78]">
              Send Me A Message 💌
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <CheckCircle2 className="w-12 h-12 text-[#61DDAA] mx-auto" />
                <h4 className="text-xl font-bold font-poppins text-[#1E2A78]">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 font-sans">
                  Thank you for reaching out, {formData.name || 'friend'}! I will get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">
                    Subject / Service Interest
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm font-sans cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Inquiry for Illustration & Storybooks">Illustration & Storybook Art</option>
                    <option value="Inquiry for UI/UX & Web Design">UI/UX & Web Design</option>
                    <option value="Inquiry for Logo Design">Logo & Brand Identity</option>
                    <option value="Inquiry for Motion Graphics">Motion Graphics & Reels</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-slate-500 font-sans tracking-wide">
                    Project Details & Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a bit about your idea, scope, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] hover:from-[#3D8BFF] hover:to-[#FF4DA6] text-white font-poppins font-semibold text-base shadow-lg shadow-blue-600/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Side: Contact Info & Interactive Map Mock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Cards */}
            <div className="glass-card rounded-[32px] p-8 bg-white border border-slate-200 shadow-lg space-y-6">
              <h3 className="text-xl font-bold font-poppins text-[#1E2A78]">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50/60 hover:bg-blue-100/80 transition-colors border border-blue-100 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#3D8BFF] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-bold uppercase text-slate-400 font-sans">Email Me</p>
                    <p className="text-sm font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors truncate">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFC857] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400 font-sans">Base Location</p>
                    <p className="text-sm font-bold font-poppins text-[#1E2A78]">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-xs font-bold uppercase text-slate-400 font-sans mb-3">
                  Connect On Socials:
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { name: 'Behance', href: PERSONAL_INFO.socials.behance, icon: Sparkles },
                    { name: 'Dribbble', href: PERSONAL_INFO.socials.dribbble, icon: Dribbble },
                    { name: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin, icon: Linkedin }
                  ].map((s) => {
                    const IconComponent = s.icon;
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 hover:bg-[#3D8BFF] hover:text-white flex items-center justify-center transition-all shadow-xs"
                        title={s.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Interactive Location Map Graphic Box */}
            <div className="glass-card rounded-[32px] overflow-hidden bg-gradient-to-br from-[#1E2A78] via-slate-900 to-[#2A3B9E] border border-slate-800 shadow-xl relative h-56 group">
              <div className="absolute inset-0 bg-[radial-gradient(#3D8BFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#6FC7FF]">
                    Location Pin
                  </span>
                  <h4 className="text-base font-bold font-poppins">Remote / Worldwide</h4>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FF4DA6] flex items-center justify-center animate-bounce shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
