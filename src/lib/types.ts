import type { LucideIcon } from 'lucide-react';

export interface Project {
  id: string; 
  name: string; 
  url: string;
  description: string; 
  thumbnailUrl?: string; 
  dataAiHint?: string;  
  tags?: string[]; 
  videoUrl?: string;
  isCollaborationLogo?: boolean; 
  isFeaturedAi?: boolean; 
  thumbnailIsLogo?: boolean; 
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
  | 'Globe'
  | 'FileText'
  | 'CheckCircle'
  | 'User'
  | 'MapPin';

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
  isTwoColumns?: boolean; 
}

export interface CV {
  slug: string;
  name: string;
  title: string;
  summary: string;
  contact: CVContact;
  sections: CVSection[];
}

// Cover Letter specific types
export interface CoverLetter {
  slug: string;
  recipientName: string;
  companyName: string;
  jobTitle: string;
  jobId?: string;
  date: string;
  content: string[];
}

// Proposal-specific types
export interface ProposalPhase {
  title: string;
  duration: string;
  items: string[];
}

export interface ProposalInvestment {
  concept: string;
  amount: string;
  note?: string;
}

export interface Proposal {
  slug: string;
  clientName: string;
  projectName: string;
  date: string;
  validUntil: string;
  summary: string;
  objectives: string[];
  scope: string[];
  phases: ProposalPhase[];
  investment: ProposalInvestment[];
  currency: string;
  total: string;
}
