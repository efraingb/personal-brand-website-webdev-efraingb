
import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string; // Used for generating translation keys like `${id}_name`
  name: string; // This will now hold the translation key, e.g., "projectX_name"
  url: string;
  description: string; // This will now hold the translation key, e.g., "projectX_description"
  thumbnailUrl: string;
  dataAiHint: string;
  tags?: string[]; // Tags are not translated in this iteration
  videoUrl?: string;
}

export interface LinkItem {
  id: string; // Added ID for key generation
  name: string; // Translation key, e.g., "documentY_name" or "contactZ_name"
  url: string;
  iconName: IconName;
  description?: string; // Translation key, e.g., "documentY_description"
  text?: string; // Translation key for contact items, e.g., "contactZ_text"
  buttonText?: string; // Translation key, e.g., "documentY_buttonText"
  imageUrl?: string; // For images like book covers
  dataAiHint?: string; // For AI hint on imageUrl
}

export type IconName = 'BookOpen' | 'Linkedin' | 'Github' | 'Mail' | 'ExternalLink' | 'ServerCrash' | 'CircleDot' | 'Smartphone';

export interface NavLink {
  href: string;
  labelKey: string; // e.g., "home", "projects" which maps to dict.nav.home
}
