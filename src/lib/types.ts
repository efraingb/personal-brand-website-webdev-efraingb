
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string; 
  name: string; 
  url: string;
  description: string; 
  thumbnailUrl: string;
  dataAiHint: string;
  tags?: string[]; 
  videoUrl?: string;
  isCollaborationLogo?: boolean; // Optional flag for logo projects
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

