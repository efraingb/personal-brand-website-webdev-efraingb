
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string; 
  name: string; 
  url: string;
  description: string; 
  thumbnailUrl?: string; // Made optional for projects without images
  dataAiHint?: string;  // Made optional
  tags?: string[]; 
  videoUrl?: string;
  isCollaborationLogo?: boolean; 
  isFeaturedAi?: boolean; // New property to highlight specific AI projects
  thumbnailIsLogo?: boolean; // New property to handle logo-like thumbnails
}

export interface LinkItem {
  id: string; 
  name: string; 
  url: string;
  iconName: IconName;
  description?: string; 
  text?: string; 
  buttonText?: string | null; 
  imageUrl?: string; 
  dataAiHint?: string; 
  isFeatured?: boolean; 
  isRecommended?: boolean; 
}

export type IconName = 
  | 'BookOpen' 
  | 'Linkedin' 
  | 'Github' 
  | 'Mail' 
  | 'ExternalLink' 
  | 'ServerCrash' 
  | 'CircleDot' 
  | 'Smartphone'
  | 'GraduationCap'
  | 'Briefcase'
  | 'BarChart3'
  | 'Phone'
  | 'Globe';

export interface NavLink {
  href: string;
  labelKey: string; 
}

export interface Credential {
  id: string;
  text: string;
}

export interface CredentialColumn {
  id: string;
  title: string;
  iconName: IconName;
  credentials: Credential[];
}

// CV-specific types
export interface CVContact {
  phone?: { text: string; url: string; };
  email?: { text: string; url: string; };
  website?: { text: string; url: string; };
  linkedin?: { text: string; url: string; };
}

export interface CVItem {
  id: string;
  title: string;
  titleLink?: { text: string; url: string; };
  subtitle?: string;
  date?: string;
  description: string | string[];
}

export interface CVSection {
  id: string;
  title: string;
  items: CVItem[];
  isTwoColumns?: boolean; // For skills section
}

export interface CV {
  slug: string;
  name: string;
  title: string;
  summary: string;
  contact: CVContact;
  sections: CVSection[];
}
