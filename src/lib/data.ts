
// src/lib/data.ts
import type { Project, LinkItem, NavLink, CredentialColumn } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj-menta-ai',
    name: 'proj-menta-ai_name',
    url: 'https://mentaia.org/',
    description: 'proj-menta-ai_description',
    thumbnailUrl: 'https://i.imgur.com/7ALZDkT.png',
    dataAiHint: 'ai quiz menta',
    tags: ['CEO & Founder', 'EdTech', 'Generative AI', 'Growth'],
    videoUrl: 'https://www.youtube.com/shorts/gGhuAib5n20',
    thumbnailIsLogo: true,
    isFeaturedAi: true, 
  },
  {
    id: 'proj-progressia',
    name: 'proj-progressia_name',
    url: 'https://www.progressia.me/learn?ref=pioneros-tiquicia',
    description: 'proj-progressia_description',
    thumbnailUrl: '', 
    dataAiHint: 'fintech ai progressia',
    tags: ['Country Lead', 'Dubai Startup', 'FinTech', 'Strategy'],
    isCollaborationLogo: true, 
  },
  {
    id: 'proj-bless',
    name: 'proj-bless_name',
    url: 'https://bless.efraingb.org/',
    description: 'proj-bless_description',
    thumbnailUrl: 'https://i.imgur.com/lQZr47s.png',
    dataAiHint: 'community logo bless',
    tags: ['Digital Orchestration', 'Social Impact', 'Firebase'],
    videoUrl: 'https://www.youtube.com/shorts/t3nXM-hHEaQ',
  },
  {
    id: 'collab-ulacit',
    name: 'collab-ulacit_name',
    url: 'https://www.ulacit.ac.cr/',
    description: 'collab-ulacit_description',
    thumbnailUrl: '',
    dataAiHint: 'university logo ulacit',
    tags: ['AI Strategy', 'EdTech', 'Landing Engine'],
    isCollaborationLogo: true, // Elevamos a tarjeta grande por importancia
  },
  {
    id: 'proj-imagine-motiva',
    name: 'proj-imagine-motiva_name',
    url: 'https://motiva.health/motivaImagine/',
    description: 'proj-imagine-motiva_description',
    thumbnailUrl: 'https://i.imgur.com/8m70722.png',
    dataAiHint: 'medtech visualization',
    tags: ['MedTech', 'NASDAQ', 'UX/UI'],
  },
  {
    id: 'proj-epa-en-linea',
    name: 'proj-epa-en-linea_name',
    url: 'https://cr.epaenlinea.com',
    description: 'proj-epa-en-linea_description',
    thumbnailUrl: 'https://i.imgur.com/XNbjFzv.png',
    dataAiHint: 'hardware ecommerce retail',
    tags: ['E-commerce', 'Retail', 'Scale'],
  },
  {
    id: 'proj-kohls',
    name: 'proj-kohls_name',
    url: 'https://www.kohls.com',
    description: 'proj-kohls_description',
    thumbnailUrl: 'https://i.imgur.com/Ud4Q2jt.png',
    dataAiHint: 'department store ecommerce',
    tags: ['E-commerce', 'Enterprise', 'USA'],
  },
  {
    id: 'proj-agro-y-mas',
    name: 'proj-agro-y-mas_name',
    url: 'https://agroymas.com/',
    description: 'proj-agro-y-mas_description',
    thumbnailUrl: 'https://i.imgur.com/McB2HN9.png',
    dataAiHint: 'agritech news finance',
    tags: ['AgriTech', 'FinTech', 'Content'],
  },
  {
    id: 'proj-agroia',
    name: 'proj-agroia_name',
    url: '#',
    description: 'proj-agroia_description',
    thumbnailUrl: 'https://i.imgur.com/h53YbVW.png',
    dataAiHint: 'agritech platform',
    tags: ['Concept Lab', 'AI Prototype'],
    videoUrl: 'https://www.youtube.com/shorts/BvDAXjkxc3M',
  },
  {
    id: 'proj-negotia',
    name: 'proj-negotia_name',
    url: '#',
    description: 'proj-negotia_description',
    thumbnailUrl: 'https://i.imgur.com/wIwB6qu.png',
    dataAiHint: 'ai negotiation platform',
    tags: ['Concept Lab', 'AI Simulator'],
    videoUrl: 'https://www.youtube.com/shorts/W5yZ03meojo',
  },
  {
    id: 'collab-crdigital',
    name: 'collab-crdigital_name',
    url: '#',
    description: 'collab-crdigital_description',
    thumbnailUrl: 'https://i.imgur.com/cU0e19I.png',
    dataAiHint: 'community logo CRDigital',
    tags: ['Community', 'Tech Talent'],
    isCollaborationLogo: true,
  },
  {
    id: 'collab-vita',
    name: 'collab-vita_name',
    url: '#',
    description: 'collab-vita_description',
    thumbnailUrl: 'https://i.imgur.com/6VbVVsL.png',
    dataAiHint: 'startup logo Vita',
    tags: ['Web 4.0', 'Dubai Startup'],
    isCollaborationLogo: true,
  },
  {
    id: 'collab-poder-judicial',
    name: 'collab-poder-judicial_name',
    url: '#',
    description: 'collab-poder-judicial_description',
    thumbnailUrl: '',
    dataAiHint: 'government logo',
    tags: ['Consulting', 'GovTech'],
  },
  {
    id: 'collab-libreria-internacional',
    name: 'collab-libreria-internacional_name',
    url: '#',
    description: 'collab-libreria-internacional_description',
    thumbnailUrl: '',
    dataAiHint: 'bookstore logo',
    tags: ['Retail', 'Strategy'],
  }
];

export const documentLinksData: LinkItem[] = [
  {
    id: 'bookAntesTostadoras',
    name: 'bookAntesTostadoras_name',
    url: 'https://www.amazon.com/Antes-que-las-Tostadoras-Gobiernen-ebook/dp/B0DQJ8Q55K/',
    iconName: 'BookOpen',
    description: 'bookAntesTostadoras_description',
    buttonText: 'bookAntesTostadoras_buttonText',
    imageUrl: 'https://i.imgur.com/UPyjS5R.png',
    dataAiHint: 'book cover art',
    isFeatured: true,
  },
  {
    id: 'bookIaParaCrecer',
    name: 'bookIaParaCrecer_name',
    url: 'https://hotmart.com/es/marketplace/productos/ia-para-crecer-optimiza-con-odoo-innova-con-blockchain-y-vende-con-marketing-digital/G100133293T?fbclid=IwY2xjawK4YDFleHRuA2FlbQIxMABicmlkETFhaW02MERiUFphV01qWlJxAR6lr0Hy9XltTLi6236HX98TzZAdhaN8Ey9MueYC2ea0Uwzibr_dpD4wEqYJlw_aem_o2R-nGjNY8EM8T0FEMh-Zg',
    iconName: 'BookOpen',
    description: 'bookIaParaCrecer_description',
    buttonText: 'bookIaParaCrecer_buttonText',
    isRecommended: true,
  },
  {
    id: 'bookPracticalCS',
    name: 'bookPracticalCS_name',
    url: 'https://drive.google.com/file/d/14_sPGzT-GH9JNqfYperRCmHJ12LNBnGB/view',
    iconName: 'BookOpen',
    description: 'bookPracticalCS_description',
    buttonText: 'bookPracticalCS_buttonText',
  },
  {
    id: 'profileLinkedIn',
    name: 'profileLinkedIn_name',
    url: 'https://www.linkedin.com/in/efraingb/',
    iconName: 'Linkedin',
    description: 'profileLinkedIn_description',
    buttonText: 'profileLinkedIn_buttonText',
  },
  {
    id: 'profileGitHub',
    name: 'profileGitHub_name',
    url: 'https://github.com/efraingbdev/',
    iconName: 'Github',
    description: 'profileGitHub_description',
    buttonText: 'profileGitHub_buttonText',
  }
];

export const contactLinksData: LinkItem[] = [
    { id: 'email', name: 'email_name', url: 'mailto:hiefraingb@gmail.com', iconName: 'Mail', text: 'email_text' },
    { id: 'linkedin', name: 'linkedin_name', url: 'https://www.linkedin.com/in/efraingb/', iconName: 'Linkedin', text: 'linkedin_text' },
    { id: 'github', name: 'github_name', url: 'https://github.com/efraingbdev/', iconName: 'Github', text: 'github_text' },
    {
      id: 'whatsapp',
      name: 'whatsapp_name',
      url: 'https://wa.me/50672618900',
      iconName: 'Smartphone',
      text: 'whatsapp_text'
    }
];

export const navLinksData: NavLink[] = [
  { href: '#hero', labelKey: 'home' },
  { href: '#projects', labelKey: 'projects' },
  { href: '#credentials', labelKey: 'credentials' },
  { href: '#documents', labelKey: 'booksAndResources' },
  { href: '#contact', labelKey: 'contact' },
];

export const credentialsData: CredentialColumn[] = [
  {
    id: 'education',
    title: 'credentials_education_title',
    iconName: 'GraduationCap',
    credentials: [
      { id: 'cred_mba_tech', text: 'credentials_education_mba_tech' },
      { id: 'cred_master_pm', text: 'credentials_education_master_pm' },
      { id: 'cred_master_big_data', text: 'credentials_education_master_big_data' },
      { id: 'cred_spec_analytics', text: 'credentials_education_spec_analytics' },
      { id: 'cred_certs', text: 'credentials_education_certs' },
    ],
  },
  {
    id: 'experience',
    title: 'credentials_experience_title',
    iconName: 'Briefcase',
    credentials: [
      { id: 'cred_exp_fullstack', text: 'credentials_experience_fullstack' },
      { id: 'cred_exp_growth', text: 'credentials_experience_growth' },
      { id: 'cred_exp_leadership', text: 'credentials_experience_leadership' },
      { id: 'cred_exp_mentoring', text: 'credentials_experience_mentoring' },
    ],
  },
  {
    id: 'results',
    title: 'credentials_results_title',
    iconName: 'BarChart3',
    credentials: [
      { id: 'cred_res_revenue', text: 'credentials_results_revenue' },
      { id: 'cred_res_nasdaq', text: 'credentials_results_nasdaq' },
      { id: 'cred_res_clients', text: 'credentials_results_clients' },
    ],
  },
];
