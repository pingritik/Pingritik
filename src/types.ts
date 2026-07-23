export interface Skill {
  id: string;
  name: string;
  category: string;
  percentage: number;
  color: string;
  iconName?: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  category: string;
  icon: string;
  proficiency: number; // 0 - 100
  description: string;
  badgeColor: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  icon: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  type: string;
}

export interface CaseStudyData {
  overview: string;
  client: string;
  role: string;
  duration: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
  galleryImages: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Video & Motion' | 'Branding' | 'Illustration' | 'Animation' | string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  caseStudy?: CaseStudyData;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: string;
  accentBg: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: 'square' | 'tall' | 'wide';
  caption: string;
  likes: number;
}
