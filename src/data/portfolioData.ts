import {
  Skill,
  SoftwareTool,
  EducationItem,
  ExperienceItem,
  Project,
  Service,
  Testimonial,
  GalleryItem
} from '../types';

import heroIllustration from '../assets/images/hero_illustration_1784805630505.jpg';
import profileAvatar from '../assets/images/profile_avatar_1784805644675.jpg';
import ritikAvatar from '../assets/images/ritik_profile_avatar_1784809224282.jpg';
import projectSeaStory from '../assets/images/project_sea_story_1784805657170.jpg';
import projectUiDashboard from '../assets/images/project_ui_dashboard_1784805669482.jpg';

import thumbRuleSeven from '../assets/images/thumb_rule_seven_1784828131977.jpg';
import thumbDesertArmy from '../assets/images/thumb_desert_army_1784828154980.jpg';
import thumbWallHeads from '../assets/images/thumb_wall_heads_1784828165750.jpg';
import thumbChestDupe from '../assets/images/thumb_chest_dupe_1784828184838.jpg';
import thumbDay100 from '../assets/images/thumb_day_100_1784828196562.jpg';
import thumbFansOnly from '../assets/images/thumb_fans_only_1784828325631.jpg';
import thumbGrowthChart from '../assets/images/thumb_growth_chart_1784828352370.jpg';

export const PERSONAL_INFO = {
  name: 'Ritik',
  nickname: 'Ritik',
  title: 'Graphic Designer & Video Editor',
  shortBio: 'Graphic Designer and Video Editor with a strong interest in creating visuals that leave a lasting impression.',
  fullBio: `Hey, I’m Ritik — a passionate Graphic Designer and Video Editor with a strong interest in creating visuals that leave a lasting impression. I enjoy turning creative ideas into eye-catching designs and bringing visual concepts to life.

I’m currently a student, continuously learning new skills, exploring modern design trends, and building my portfolio through personal projects. Every project helps me improve my creativity, attention to detail, and problem-solving abilities.

I believe great design is more than just looking good—it’s about communicating ideas, telling stories, and creating meaningful experiences. My goal is to create work that is both visually appealing and impactful.

My mission is simple: Learn. Practice. Take Action. Grow. With every project, I strive to become a better designer, creator, and professional while delivering high-quality work that stands out.`,
  philosophy: 'Learn. Practice. Take Action. Grow.',
  mission: 'To create work that is both visually appealing and impactful while continuously evolving as a designer and creator.',
  email: 'pingritik@gmail.com',
  phone: '+1 (809) 555-0192',
  location: 'Remote Worldwide & Student Creator',
  avatarUrl: ritikAvatar,
  heroImageUrl: ritikAvatar,
  socials: {
    behance: 'https://behance.net',
    dribbble: 'https://dribbble.com',
    linkedin: 'https://linkedin.com'
  }
};

export const SKILLS_DATA: Skill[] = [
  { id: '1', name: 'Graphic Design', category: 'Graphic Art', percentage: 95, color: '#3D8BFF' },
  { id: '2', name: 'Video Editing', category: 'Video Production', percentage: 92, color: '#FF4DA6' },
  { id: '3', name: 'Social Media Graphics & Banners', category: 'Digital Content', percentage: 95, color: '#FFC857' },
  { id: '4', name: 'Branding & Visual Identity', category: 'Creative Strategy', percentage: 90, color: '#61DDAA' },
  { id: '5', name: 'Creative Thinking & Storytelling', category: 'Content Strategy', percentage: 94, color: '#9B51E0' }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  { id: '1', name: 'Adobe Photoshop', category: 'Graphic Design & Photo Manipulation', icon: 'Ps', proficiency: 98, description: 'Photo manipulation, poster composition, color grading, and visual graphics.', badgeColor: 'bg-[#001E36] text-[#31A8FF] border-[#31A8FF]/30' },
  { id: '2', name: 'Premiere Pro', category: 'Video Editing', icon: 'Pr', proficiency: 92, description: 'Video cutting, pacing, sound sync, transitions, and story-driven video editing.', badgeColor: 'bg-[#00005C] text-[#9999FF] border-[#9999FF]/30' },
  { id: '3', name: 'Adobe InDesign', category: 'Editorial & Book Layouts', icon: 'Id', proficiency: 88, description: 'Magazines, print typography grids, posters & editorial design.', badgeColor: 'bg-[#2B0018] text-[#FF3366] border-[#FF3366]/30' },
  { id: '4', name: 'Figma', category: 'Visual Layouts & Graphics', icon: 'Fi', proficiency: 90, description: 'Graphic layouts, social media kit design, and mood boards.', badgeColor: 'bg-[#1E1E1E] text-[#F24E1E] border-[#F24E1E]/30' },
  { id: '5', name: 'Procreate', category: 'Digital Sketching & Concepts', icon: 'Pc', proficiency: 95, description: 'iPad sketching, custom text effects, and graphic concept art.', badgeColor: 'bg-[#1C1C1E] text-[#A259FF] border-[#A259FF]/30' },
  { id: '6', name: 'VS Code', category: 'Code & Personal Projects', icon: 'Vs', proficiency: 82, description: 'HTML, CSS, TypeScript, and web layout exploration.', badgeColor: 'bg-[#00223E] text-[#007ACC] border-[#007ACC]/30' }
];

export const EDUCATION_DATA: EducationItem[] = [];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    company: 'Freelance & Content Creator',
    position: 'Graphic Designer & Video Editor',
    duration: '2024 — Present',
    location: 'Remote',
    type: 'Freelance / Personal Projects',
    responsibilities: [
      'Create brand graphics, promo posters, social media kits, and visual assets with clean color grading.',
      'Edit engaging short-form and long-form video content with smooth cuts, sound effects, and visual pop.',
      'Design brand graphics, social media banners, and visual identities for creators and personal projects.'
    ],
    technologies: ['Photoshop', 'Premiere Pro', 'Figma', 'Procreate']
  },
  {
    id: '2',
    company: 'WonderWave Media',
    position: 'Graphic & Video Content Specialist',
    duration: '2023 — 2024',
    location: 'Remote',
    type: 'Contract',
    responsibilities: [
      'Designed promo posters, digital banners, and social video teasers.',
      'Collaborated with content creators to transform raw video footage into polished, eye-catching visual stories.',
      'Managed asset production and promo graphic iterations for social media channels.'
    ],
    technologies: ['Photoshop', 'Premiere Pro', 'InDesign']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'growth-analytics-graphic',
    title: 'Minimalist Growth Chart & Dark Mode Graphic Design',
    category: 'Graphic Design',
    description: 'Clean neon green upward trending line graph for finance, stock market, and channel analytics graphics.',
    image: thumbGrowthChart,
    tags: ['Graphic Design', 'Analytics Art', 'Minimalist', 'Neon FX'],
    demoUrl: 'https://behance.net',
    featured: true,
    caseStudy: {
      overview: 'Minimalist financial and performance metric line chart designed for clean presentations.',
      client: 'Analytics & Tech Creators',
      role: 'Graphic Designer',
      duration: '1 Day',
      challenge: 'Communicating continuous growth and progress with maximum visual clarity.',
      solution: 'Used subtle horizontal dark grid lines with a high-contrast glowing neon accent path.',
      keyFeatures: [
        'High contrast neon glow path',
        'Clean dark mode background grid',
        'Sleek vector geometry'
      ],
      results: [
        'Featured in finance visual showcases',
        'Adopted as channel banner asset'
      ],
      galleryImages: [
        thumbGrowthChart
      ]
    }
  },
  {
    id: 'bloom-branding',
    title: 'Bloom Visuals — Brand Identity & Posters',
    category: 'Branding',
    description: 'Complete brand identity, custom logo mark, promotional posters, and social media graphics for an artisanal brand.',
    image: projectSeaStory,
    tags: ['Brand Identity', 'Graphic Design', 'Poster Design', 'Photoshop'],
    demoUrl: 'https://behance.net',
    featured: true,
    caseStudy: {
      overview: 'Warm, eye-catching brand visuals and poster layouts created to leave a lasting impression.',
      client: 'Bloom Artisanal',
      role: 'Graphic & Brand Designer',
      duration: '4 Weeks',
      challenge: 'Designing a distinctive visual identity that communicates warmth and creativity.',
      solution: 'Created custom graphic elements, warm color palettes, and bold typography rules.',
      keyFeatures: [
        'Custom logo mark & social media banner pack',
        'Promotional posters and event graphics',
        'Complete visual style guide'
      ],
      results: [
        'Brand launch saw 3x target opening engagement',
        'Featured in graphic design showcase collections'
      ],
      galleryImages: [
        projectSeaStory
      ]
    }
  },
  {
    id: 'video-editing-reel',
    title: 'Cinematic Video Editing & Social Reel Cuts',
    category: 'Video & Motion',
    description: 'Dynamic short-form and long-form video editing with tight pacing, sound sync, visual effects, and caption animation.',
    image: projectUiDashboard,
    tags: ['Premiere Pro', 'Video Editing', 'Pacing', 'Sound Design'],
    demoUrl: 'https://vimeo.com',
    featured: true,
    caseStudy: {
      overview: 'Engaging video edit showcasing seamless cuts, audio enhancement, motion overlays, and color grading.',
      client: 'Vibe Media & Content Creators',
      role: 'Video Editor',
      duration: '2 Months',
      challenge: 'Maintaining high viewer retention through tight pacing, visual cuts, and rhythmic audio beats.',
      solution: 'Utilized Premiere Pro multi-track cutting, custom sound effects, and animated caption overlays.',
      keyFeatures: [
        'Rhythmic sound design and audio sync',
        'Dynamic zoom cuts & transition effects',
        'Animated captions and subtitle pop'
      ],
      results: [
        'Achieved 70%+ average audience retention',
        'Over 1M total views generated across client reels'
      ],
      galleryImages: [
        projectUiDashboard
      ]
    }
  },
  {
    id: 'graphic-poster-art',
    title: 'Creative Poster Design & Digital Art',
    category: 'Graphic Design',
    description: 'A series of creative promotional posters, magazine cover art, and digital visual compositions.',
    image: projectSeaStory,
    tags: ['Graphic Design', 'Photoshop', 'Poster Art', 'Typography'],
    demoUrl: 'https://behance.net',
    featured: true
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: '1',
    title: 'Graphic Banner & Social Media Kits',
    description: 'Eye-catching channel banners, social media header kits, promotional posters, and visual brand assets that leave a lasting impression.',
    icon: 'Sparkles',
    features: ['Social Media Header Kits', 'Promotional Poster Layouts', 'Custom Typography & Grading', 'Clean Brand Vector Assets'],
    color: '#FF4DA6',
    accentBg: 'bg-pink-50 border-pink-200 text-pink-600'
  },
  {
    id: '2',
    title: 'Video Editing & Content Creation',
    description: 'Editing short-form and long-form video content with tight pacing, sound sync, color correction, cuts, and engaging captions.',
    icon: 'Film',
    features: ['YouTube & Reel Editing', 'Pacing & Sound Design', 'Color Correction & Grading', 'Engaging Captions & Effects'],
    color: '#3D8BFF',
    accentBg: 'bg-blue-50 border-blue-200 text-blue-600'
  },
  {
    id: '3',
    title: 'Graphic Design & Visuals',
    description: 'Crafting poster art, social media kits, promotional banners, flyers, and simple generic graphics that leave a lasting impression.',
    icon: 'Palette',
    features: ['Social Media Banners & Kits', 'Promotional Poster Design', 'Photoshop Visual Composites', 'Brand Assets & Graphics'],
    color: '#FFC857',
    accentBg: 'bg-amber-50 border-amber-200 text-amber-600'
  },
  {
    id: '4',
    title: 'Logo & Brand Identity',
    description: 'Building memorable brand identities, custom typography marks, color palettes, and brand guidelines.',
    icon: 'Globe',
    features: ['Custom Logo Design', 'Color & Typography Systems', 'Brand Strategy & Guidelines', 'Social Media Templates'],
    color: '#61DDAA',
    accentBg: 'bg-emerald-50 border-emerald-200 text-emerald-600'
  },
  {
    id: '5',
    title: 'Motion Graphics & Reels',
    description: 'Adding life to graphics with smooth 2D motion design, animated text overlays, and video intros/outros.',
    icon: 'Film',
    features: ['Logo Animations', 'YouTube Intros & Outros', 'Social Media Motion Reels', 'Animated Text & Captions'],
    color: '#9B51E0',
    accentBg: 'bg-purple-50 border-purple-200 text-purple-600'
  },
  {
    id: '6',
    title: 'Editorial & Print Layouts',
    description: 'Professional magazine layout grids, books, flyers, posters, and print typography composition.',
    icon: 'BookOpen',
    features: ['Magazine & Book Layouts', 'Print Prepress Composition', 'Typography Grids', 'Event & Promo Posters'],
    color: '#1E2A78',
    accentBg: 'bg-indigo-50 border-indigo-200 text-indigo-600'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Neon Green Channel Growth Chart',
    category: 'Graphic Design',
    image: thumbGrowthChart,
    aspectRatio: 'wide',
    caption: 'Sleek dark mode graphic design for channel growth and stock analytics.',
    likes: 425
  },
  {
    id: 'g2',
    title: 'Bloom Visual Brand & Poster System',
    category: 'Branding',
    image: projectSeaStory,
    aspectRatio: 'tall',
    caption: 'Warm visual identity with custom typography and promotional graphics.',
    likes: 389
  },
  {
    id: 'g3',
    title: 'Cinematic Motion & Video Timeline Layout',
    category: 'Video & Motion',
    image: projectUiDashboard,
    aspectRatio: 'wide',
    caption: 'Fast-paced timeline editing layout with color correction and sound sync.',
    likes: 512
  },
  {
    id: 'g4',
    title: 'Editorial Poster Art & Typography',
    category: 'Graphic Design',
    image: projectSeaStory,
    aspectRatio: 'tall',
    caption: 'High-contrast typography grid layout for event posters and digital art.',
    likes: 310
  }
];
