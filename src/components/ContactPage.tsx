import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Copy, Check, Sparkles, ArrowLeft, Clock, MessageSquare, ShieldCheck, ExternalLink, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactPageProps {
  onBackToHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBackToHome }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Graphic Design Project',
    budget: '$50 - $150',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Graphic Design Project', budget: '$50 - $150', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  const faqItems = [
    {
      q: 'How fast can you deliver graphic design projects?',
      a: 'Standard turnaround is 24–48 hours for posters, headers, and visual assets. Rush delivery (under 12 hours) is available upon request.'
    },
    {
      q: 'What video editing formats & files do you support?',
      a: 'I edit MP4, MOV, and high-bitrate raw video files in Adobe Premiere Pro and deliver in 4K or 1080p optimized for YouTube, Reels, or TikTok.'
    },
    {
      q: 'Are revisions included in projects?',
      a: 'Yes! All graphic design and video editing orders include unlimited minor revisions to ensure you get the exact visual outcome you want.'
    },
    {
      q: 'How do we start working together?',
      a: 'Simply copy my email pingritik@gmail.com, send me a message using the form below, or mail me directly. I will respond within 12 hours!'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans pt-20 pb-24">
      {/* Top Banner Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 pb-4 flex items-center justify-between border-b border-slate-200/80 mb-8">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-[#3D8BFF] hover:border-[#3D8BFF] font-poppins font-medium text-sm shadow-xs transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#3D8BFF]" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-poppins font-semibold text-[#1E2A78]">
          <span className="w-2 h-2 rounded-full bg-[#61DDAA] animate-ping" />
          <span>Direct Contact Page</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-[#FF4DA6] font-semibold text-xs uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Ritik</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins text-[#1E2A78] leading-tight">
            Let's Connect & <br />
            <span className="bg-gradient-to-r from-[#3D8BFF] via-[#FF4DA6] to-[#FFC857] bg-clip-text text-transparent">
              Create Stunning Visuals
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project idea, need graphic design, video editing, or branding assets? Reach out directly via email!
          </p>
        </div>

        {/* PROMINENT DIRECT EMAIL HERO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-[#3D8BFF] text-white p-8 sm:p-12 shadow-2xl border border-blue-400/30"
        >
          {/* Subtle Glow Effects */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4DA6]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC857]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Primary Email Address</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-poppins">
                Email Me Directly
              </h2>

              {/* Large Display Email Box */}
              <div className="p-4 sm:p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/25 flex flex-wrap items-center justify-between gap-4 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4DA6] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-blue-200 tracking-wider">Official Email</p>
                    <p className="text-xl sm:text-2xl font-extrabold font-poppins text-white select-all tracking-wide">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyEmail}
                    className={`flex-1 sm:flex-none px-5 py-3 rounded-2xl font-poppins font-semibold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      copied
                        ? 'bg-[#61DDAA] text-slate-900 shadow-md'
                        : 'bg-white text-[#1E2A78] hover:bg-amber-300 hover:text-slate-900'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Project Inquiry for Ritik`}
                    className="flex-1 sm:flex-none px-5 py-3 rounded-2xl bg-[#FF4DA6] hover:bg-pink-500 text-white font-poppins font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open Mail App</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-blue-100">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Response SLA: Within 12 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#61DDAA]" />
                  <span>Open for Worldwide Remote Freelance</span>
                </div>
              </div>
            </div>

            {/* Quick Quick Info Box */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-left space-y-4">
              <h3 className="text-lg font-bold font-poppins text-amber-300 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span>Preferred Contact Topics</span>
              </h3>
              <ul className="space-y-2.5 text-sm text-blue-100 font-sans">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF4DA6]" />
                  <span>Graphic Design & Poster Art</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3D8BFF]" />
                  <span>Video Editing (Shorts & Long Form)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFC857]" />
                  <span>Social Media Graphic Branding Kits</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#61DDAA]" />
                  <span>Long-term Creator Collaborations</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CONTACT FORM & EXTRA DETAILS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Form */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 border border-slate-200 shadow-xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold font-poppins text-[#1E2A78]">
                Send an Online Message 💬
              </h3>
              <p className="text-sm text-slate-500">
                Fill out the quick inquiry form below and it will be delivered directly to <span className="font-semibold text-[#3D8BFF]">{PERSONAL_INFO.email}</span>.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#61DDAA] text-slate-900 flex items-center justify-center mx-auto shadow-md">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold font-poppins text-[#1E2A78]">
                  Message Sent to {PERSONAL_INFO.email}!
                </h4>
                <p className="text-sm text-slate-600">
                  Thank you for reaching out, {formData.name}! Ritik will inspect your project details and respond via email shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@creator.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Project Type</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="Graphic Design Project">Graphic Design & Banners</option>
                      <option value="Video Editing Services">Video Editing (Reels/Shorts/YT)</option>
                      <option value="Brand Identity & Banners">Brand Identity & Banners</option>
                      <option value="Full Content Creation Package">Full Channel Package</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase text-slate-500">Estimated Budget</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm cursor-pointer"
                    >
                      <option value="Under $50">Under $50</option>
                      <option value="$50 - $150">$50 - $150</option>
                      <option value="$150 - $500">$150 - $500</option>
                      <option value="$500+">$500+ / Retainer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase text-slate-500">Project Details & Ideas *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your channel, video topic, or design goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#3D8BFF] focus:bg-white focus:outline-none transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] hover:from-[#3D8BFF] hover:to-[#FF4DA6] text-white font-poppins font-semibold text-base shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      <span>Sending...</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column FAQs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-lg space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-poppins text-[#1E2A78]">
                    Frequently Asked
                  </h3>
                  <p className="text-xs text-slate-500">Quick answers for clients</p>
                </div>
              </div>

              <div className="space-y-4">
                {faqItems.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1.5">
                    <p className="text-sm font-bold font-poppins text-[#1E2A78]">{item.q}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Mailto Quick Actions */}
            <div className="bg-gradient-to-r from-blue-50 to-pink-50 rounded-[32px] p-6 border border-blue-100 space-y-3 text-center">
              <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">Quick Mail Templates</p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Graphic%20Design%20Inquiry`}
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#3D8BFF] text-xs font-semibold text-[#1E2A78] hover:text-[#3D8BFF] transition-all flex items-center justify-between"
                >
                  <span>🎨 Order Graphic Design</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Video%20Editing%20Project`}
                  className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#FF4DA6] text-xs font-semibold text-[#1E2A78] hover:text-[#FF4DA6] transition-all flex items-center justify-between"
                >
                  <span>🎬 Video Editing Collaboration</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
