import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  name: string;
  url: string;
  description: string;
  thumbnailUrl: string;
  dataAiHint: string;
  tags?: string[];
}

export interface LinkItem {
  name: string;
  url: string;
  iconName: IconName;
  description?: string;
  text?: string;
}

export type IconName = 'BookOpen' | 'Linkedin' | 'Github' | 'Mail' | 'ExternalLink' | 'ServerCrash' | 'CircleDot';
