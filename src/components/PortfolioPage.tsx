import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  Sparkles, 
  Search, 
  Grid, 
  Images, 
  Film, 
  Palette, 
  Layers, 
  ExternalLink, 
  ZoomIn, 
  Heart, 
  Send,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { PROJECTS_DATA, GALLERY_DATA, PERSONAL_INFO } from '../data/portfolioData';
import { Project, GalleryItem } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { LightboxModal } from './LightboxModal';

interface PortfolioPageProps {
  onBackToHome: () => void;
  onContactClick: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackToHome, onContactClick }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'projects' | 'gallery'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(GALLERY_DATA);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Graphic Design', 'Video & Motion', 'Branding'];

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesQuery = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Filtered gallery items
  const filteredGallery = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesQuery = searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesQuery;
    });
  }, [galleryItems, searchQuery]);

  const handleLike = (id: string) => {
    setGalleryItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
    if (selectedGalleryItem && selectedGalleryItem.id === id) {
      setSelectedGalleryItem((prev) => (prev ? { ...prev, likes: prev.likes + 1 } : null));
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 font-sans pt-20 pb-16">
      
      {/* Top Sticky Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#3D8BFF] text-slate-700 hover:text-white font-poppins font-semibold text-sm transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-slate-600 font-poppins uppercase tracking-wider">
              Ritik's Projects & Gallery Page
            </span>
          </div>

          <button
            onClick={onContactClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1E2A78] to-[#3D8BFF] text-white font-poppins font-semibold text-sm shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-white to-[#FAFAFA] pt-12 pb-16 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 text-[#3D8BFF] font-semibold text-xs uppercase tracking-widest shadow-2xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Projects & Gallery Page</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold font-poppins text-[#1E2A78] tracking-tight mb-4"
          >
            Projects & <span className="text-[#3D8BFF]">Creative Gallery</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A full showcase of graphic design projects, cinematic video edits, promotional posters, and artistic visual concepts created by Ritik.
          </motion.p>

          {/* Search & Main Filter Controls */}
          <div className="mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 bg-white p-3 rounded-2xl border border-slate-200 shadow-lg">
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search graphic design, video edits, posters..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#3D8BFF]"
              />
            </div>

            {/* View Tabs */}
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl w-full sm:w-auto justify-center">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-lg font-poppins font-medium text-xs transition-all cursor-pointer ${
                  activeTab === 'all'
                    ? 'bg-white text-[#1E2A78] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Works
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg font-poppins font-medium text-xs transition-all cursor-pointer ${
                  activeTab === 'projects'
                    ? 'bg-white text-[#1E2A78] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Projects ({PROJECTS_DATA.length})
              </button>
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-lg font-poppins font-medium text-xs transition-all cursor-pointer ${
                  activeTab === 'gallery'
                    ? 'bg-white text-[#1E2A78] shadow-2xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Gallery ({galleryItems.length})
              </button>
            </div>
          </div>

          {/* Category Pills for Projects */}
          {(activeTab === 'all' || activeTab === 'projects') && (
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-poppins font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#1E2A78] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12 space-y-20">
        
        {/* Section 1: Featured & Filtered Projects */}
        {(activeTab === 'all' || activeTab === 'projects') && (
          <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#3D8BFF] flex items-center justify-center font-bold">
                  <Grid className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-poppins text-[#1E2A78]">
                    Client & Personal Projects
                  </h2>
                  <p className="text-xs text-slate-500">
                    Graphic Design Projects, Video Editing Reels, and Brand Identity
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-poppins">
                {filteredProjects.length} Projects
              </span>
            </div>

            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <p className="text-slate-500 font-medium">No projects match your current filters or search term.</p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="px-4 py-2 bg-[#3D8BFF] text-white text-xs font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="glass-card rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Project Graphic Header (No Photos) */}
                    <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#1E2A78] via-[#2A3B9E] to-[#3D8BFF] text-white p-5 flex flex-col justify-between">
                      <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-lg" />
                      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold font-poppins px-3 py-1 rounded-full border border-white/20">
                          {project.category}
                        </span>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                      </div>

                      <div className="relative z-10 space-y-0.5">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200">Graphic Portfolio Project</span>
                        <h4 className="text-base font-extrabold font-poppins text-white line-clamp-1">
                          {project.title}
                        </h4>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold font-poppins text-[#1E2A78] group-hover:text-[#3D8BFF] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-medium text-[11px]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        {project.caseStudy ? (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-[#3D8BFF] text-white font-poppins font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>View Case Details</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>View Full Preview</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Section 2: Visual Gallery Showcase */}
        {(activeTab === 'all' || activeTab === 'gallery') && (
          <section className="space-y-8 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#FF4DA6] flex items-center justify-center font-bold">
                  <Images className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-poppins text-[#1E2A78]">
                    Visual Art & Concept Gallery
                  </h2>
                  <p className="text-xs text-slate-500">
                    Pinterest-style masonry wall of graphics, concept art, and visual experiments
                  </p>
                </div>
              </div>

              <span className="text-xs font-semibold px-3 py-1 bg-slate-100 rounded-full text-slate-600 font-poppins">
                {filteredGallery.length} Visuals
              </span>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="break-inside-avoid glass-card rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative group cursor-pointer"
                  onClick={() => setSelectedGalleryItem(item)}
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
                      <h4 className="font-poppins font-bold text-base text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-blue-100 line-clamp-2">{item.caption}</p>
                    </div>
                  </div>

                  {/* Caption Footer */}
                  <div className="p-4 flex items-center justify-between border-t border-slate-100">
                    <div>
                      <h4 className="font-poppins font-semibold text-sm text-slate-800">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-slate-500">{item.category}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLike(item.id);
                      }}
                      className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#FF4DA6] transition-colors px-2.5 py-1 rounded-full hover:bg-pink-50"
                    >
                      <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500" />
                      <span>{item.likes}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Banner CTA */}
        <section className="glass-card rounded-[36px] bg-gradient-to-br from-[#1E2A78] to-[#3D8BFF] text-white p-8 sm:p-12 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-4xl font-extrabold font-poppins">
              Ready to create eye-catching visuals for your channel or brand?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Let's build graphic design assets, cinematic video edits, or promotional posters that stand out from the crowd.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onContactClick}
                className="px-8 py-4 rounded-2xl bg-white text-[#1E2A78] font-poppins font-extrabold text-base shadow-lg hover:bg-blue-50 transition-all cursor-pointer"
              >
                Send A Project Message 🚀
              </button>
              <button
                onClick={onBackToHome}
                className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-poppins font-semibold text-base transition-all cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Lightbox Modal */}
      {selectedGalleryItem && (
        <LightboxModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          onLike={handleLike}
        />
      )}

    </div>
  );
};
