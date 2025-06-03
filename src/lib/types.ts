
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  url: string; // Keep as string, ProjectCard will handle empty or '#'
  description: string;
  thumbnailUrl: string;
  dataAiHint: string;
  tags?: string[];
  videoUrl?: string; // New field for video walkthrough URL
}

export interface LinkItem {
  name: string;
  url: string;
  iconName: IconName;
  description?: string;
  text?: string; // For contact section display text
  buttonText?: string; // For documents section button text
}

export type IconName = 'BookOpen' | 'Linkedin' | 'Github' | 'Mail' | 'ExternalLink' | 'ServerCrash' | 'CircleDot';
