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
}

export interface LinkItem {
  id: string; 
  name: string; 
  url: string;
  iconName: IconName;
  description?: string; 
  text?: string; 
  buttonText?: string | null; // Allow null for items without buttons
  imageUrl?: string; 
  dataAiHint?: string; 
  isFeatured?: boolean; // For "Antes que las tostadoras..."
  isRecommended?: boolean; // For "IA para Crecer" badge
}

export type IconName = 'BookOpen' | 'Linkedin' | 'Github' | 'Mail' | 'ExternalLink' | 'ServerCrash' | 'CircleDot' | 'Smartphone';

export interface NavLink {
  href: string;
  labelKey: string; 
}
