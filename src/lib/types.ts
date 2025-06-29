
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

export type IconName = 'BookOpen' | 'Linkedin' | 'Github' | 'Mail' | 'ExternalLink' | 'ServerCrash' | 'CircleDot' | 'Smartphone';

export interface NavLink {
  href: string;
  labelKey: string; 
}
