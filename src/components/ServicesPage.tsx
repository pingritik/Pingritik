import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle2, Clock, Send, Zap, Video, Image, Layers, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO, SERVICES_DATA } from '../data/portfolioData';

interface ServicesPageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBackToHome, onContactClick }) => {
  const packages = [
    {
      title: 'Graphic Banner & Poster Design',
      price: '$25 - $50',
      tag: 'Most Popular',
      description: 'Custom promotional posters, graphic banners, and social media headers with striking typography and color grading.',
      features: [
        'High Contrast Visual Hook & Color Grading',
        'Custom Text Effects & Typography',
        'Photo Manipulation & Polish',
        '24 to 48 Hour Fast Turnaround',
        'Unlimited Revisions'
      ],
      color: 'from-[#3D8BFF] to-[#1E2A78]'
    },
    {
      title: 'Video Editing (Shorts / Reels / YouTube)',
      price: '$50 - $120',
      tag: 'High Retention',
      description: 'Engaging video editing with pacing, sound design, subtitles, cuts, and visual pop.',
      features: [
        'Fast-Paced Cutting & Story Pacing',
        'Sound FX, B-Roll & Transitions',
        'Dynamic On-Screen Captions & Pop-ups',
        'Color Correction & Audio Polish',
        'Delivered in 4K or 1080p 60fps'
      ],
      color: 'from-[#FF4DA6] to-[#9B51E0]'
    },
    {
      title: 'Channel Branding & Graphic Kit',
      price: '$80 - $180',
      tag: 'Complete Setup',
      description: 'Full channel banner, social media covers, logo icon, and graphic asset template kit.',
      features: [
        'Custom Channel Header / Banner',
        'Matching Social Media Banners',
        'Editable Graphic Asset Template Kit',
        'Color Palette & Font Identity Guide',
        'Source Files Included (.PSD)'
      ],
      color: 'from-[#FFC857] to-[#FF4DA6]'
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

        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#1E2A78] hover:bg-[#3D8BFF] text-white font-poppins font-medium text-sm shadow-md transition-all cursor-pointer"
        >
          <Send className="w-4 h-4 text-amber-300" />
          <span>Contact Me Directly</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Services & Packages</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins text-[#1E2A78] leading-tight">
            Creative Solutions <br />
            <span className="bg-gradient-to-r from-[#3D8BFF] via-[#FF4DA6] to-[#FFC857] bg-clip-text text-transparent">
              Tailored For Content Creators
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            High-impact graphic design, video editing, and visual assets crafted to elevate your brand and audience engagement.
          </p>
        </div>

        {/* SERVICE PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden flex flex-col justify-between group hover:border-[#3D8BFF] transition-all"
            >
              <div className="p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-slate-100 text-[#1E2A78] text-xs font-bold uppercase tracking-wider">
                    {pkg.tag}
                  </span>
                  <span className="text-2xl font-extrabold font-poppins text-[#1E2A78]">
                    {pkg.price}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <p className="text-xs font-bold uppercase text-slate-400">What's Included:</p>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#61DDAA] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <button
                  onClick={onContactClick}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] hover:from-[#3D8BFF] hover:to-[#FF4DA6] text-white font-poppins font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Order This Package</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* WORKFLOW / CREATION PROCESS */}
        <div className="bg-white rounded-[36px] p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold font-poppins text-[#1E2A78]">
              How the Creative Process Works
            </h2>
            <p className="text-slate-500 text-sm">
              Simple 4-step workflow from initial request to final high-resolution delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Send Idea or Assets', desc: 'Email your project brief, brand logos, or design ideas to pingritik@gmail.com.' },
              { step: '02', title: 'Concept & Framing', desc: 'I design typography, layout composition, and visual hierarchy.' },
              { step: '03', title: 'Polish & Color Grade', desc: 'Adding glow, lighting FX, sound cuts, and vibrant visual polish.' },
              { step: '04', title: 'Final Delivery', desc: 'Receive ready-to-use high-res files with unlimited revisions.' }
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                <span className="text-3xl font-extrabold font-poppins text-[#3D8BFF] opacity-80">{s.step}</span>
                <h4 className="text-base font-bold font-poppins text-[#1E2A78]">{s.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EMAIL CALLOUT FOOTER */}
        <div className="p-8 sm:p-10 rounded-[32px] bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] text-white text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold font-poppins">
            Need a Custom Request or Retainer?
          </h2>
          <p className="text-blue-100 text-sm max-w-xl mx-auto">
            Email Ritik directly at <span className="font-bold underline text-amber-300">pingritik@gmail.com</span> for custom YouTube packages, monthly channel retainers, or tight deadlines.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onContactClick}
              className="px-8 py-3.5 rounded-2xl bg-white text-[#1E2A78] hover:bg-amber-300 font-poppins font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Contact Me Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
