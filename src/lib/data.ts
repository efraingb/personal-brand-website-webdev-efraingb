
import type { Project, LinkItem, NavLink } from './types'; // Added NavLink

// --- PROJECTS ---
// Note: 'name' and 'description' are now keys for translation.
// The actual translation will happen in the component using the dictionary.
// e.g., dict.projectsData[`${project.id}_name`]
export const projectsData: Project[] = [
  {
    id: 'proj-quiz-ai',
    name: 'proj-quiz-ai_name', // Key for translation
    url: 'https://9000-idx-studio-1746296464496.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'proj-quiz-ai_description', // Key for translation
    thumbnailUrl: 'https://i.imgur.com/0NciRLC.png',
    dataAiHint: 'ai quiz generator',
    tags: ['AI', 'EdTech', 'Firebase', 'Generative AI'],
    videoUrl: 'https://www.youtube.com/shorts/gGhuAib5n20',
  },
  {
    id: 'proj-negotia',
    name: 'proj-negotia_name',
    url: 'https://9000-idx-studio-1745689952822.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev/',
    description: 'proj-negotia_description',
    thumbnailUrl: 'https://i.imgur.com/wIwB6qu.png',
    dataAiHint: 'ai negotiation platform',
    tags: ['AI', 'Negotiation', 'SaaS', 'B2B'],
    videoUrl: 'https://www.youtube.com/shorts/W5yZ03meojo',
  },
  {
    id: 'proj-bless',
    name: 'proj-bless_name',
    url: 'https://9000-firebase-studio-1747186834705.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev/',
    description: 'proj-bless_description',
    thumbnailUrl: 'https://i.imgur.com/2GnmZm2.png',
    dataAiHint: 'community platform',
    tags: ['Community', 'Platform', 'Firebase', 'Social Impact'],
    videoUrl: 'https://www.youtube.com/shorts/t3nXM-hHEaQ',
  },
  {
    id: 'proj-agroia',
    name: 'proj-agroia_name',
    url: 'https://9000-idx-studio-1745949441464.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'proj-agroia_description',
    thumbnailUrl: 'https://i.imgur.com/h53YbVW.png',
    dataAiHint: 'agritech platform',
    tags: ['AgriTech', 'AI', 'E-commerce', 'Platform', 'Firebase'],
    videoUrl: 'https://www.youtube.com/shorts/BvDAXjkxc3M',
  },
  {
    id: 'proj-imagine-motiva',
    name: 'proj-imagine-motiva_name',
    url: 'https://motiva.health/motivaImagine/',
    description: 'proj-imagine-motiva_description',
    thumbnailUrl: 'https://i.imgur.com/8m70722.png',
    dataAiHint: 'medtech visualization',
    tags: ['MedTech', 'UX/UI', '3D Visualization', 'Enterprise', 'Collaboration'],
  },
  {
    id: 'proj-agro-y-mas',
    name: 'proj-agro-y-mas_name',
    url: 'https://agroymas.com/',
    description: 'proj-agro-y-mas_description',
    thumbnailUrl: 'https://i.imgur.com/McB2HN9.png',
    dataAiHint: 'agritech news finance',
    tags: ['AgriTech', 'Platform', 'FinTech', 'Content', 'Collaboration'],
  },
  {
    id: 'proj-epa-en-linea',
    name: 'proj-epa-en-linea_name',
    url: 'https://cr.epaenlinea.com',
    description: 'proj-epa-en-linea_description',
    thumbnailUrl: 'https://i.imgur.com/XNbjFzv.png',
    dataAiHint: 'hardware ecommerce retail',
    tags: ['E-commerce', 'Retail', 'Web Development', 'Collaboration'],
  },
  {
    id: 'proj-kohls',
    name: 'proj-kohls_name',
    url: 'https://www.kohls.com',
    description: 'proj-kohls_description',
    thumbnailUrl: 'https://i.imgur.com/Ud4Q2jt.png',
    dataAiHint: 'department store ecommerce',
    tags: ['E-commerce', 'Retail', 'Enterprise', 'Collaboration'],
  },
];

// --- DOCUMENT LINKS ---
// 'name', 'description', 'buttonText' are keys for translation.
export const documentLinksData: LinkItem[] = [
  {
    id: 'bookAntesTostadoras', // Added ID for key generation
    name: 'bookAntesTostadoras_name',
    url: 'https://www.amazon.com/Antes-que-las-Tostadoras-Gobiernen-ebook/dp/B0DQJ8Q55K/',
    iconName: 'BookOpen',
    description: 'bookAntesTostadoras_description',
    buttonText: 'bookAntesTostadoras_buttonText'
  },
  {
    id: 'bookPracticalCS',
    name: 'bookPracticalCS_name',
    url: 'https://drive.google.com/file/d/14_sPGzT-GH9JNqfYperRCmHJ12LNBnGB/view',
    iconName: 'BookOpen',
    description: 'bookPracticalCS_description',
    buttonText: 'bookPracticalCS_buttonText'
  },
  {
    id: 'profileLinkedIn',
    name: 'profileLinkedIn_name',
    url: 'https://www.linkedin.com/in/efraingb/',
    iconName: 'Linkedin',
    description: 'profileLinkedIn_description',
    buttonText: 'profileLinkedIn_buttonText'
  },
  {
    id: 'profileGitHub',
    name: 'profileGitHub_name',
    url: 'https://github.com/efraingbdev/',
    iconName: 'Github',
    description: 'profileGitHub_description',
    buttonText: 'profileGitHub_buttonText'
  },
];

// --- CONTACT LINKS ---
// 'name' and 'text' are keys for translation.
export const contactLinksData: LinkItem[] = [
    { id: 'email', name: 'email_name', url: 'mailto:hiefraingb@gmail.com', iconName: 'Mail', text: 'email_text' },
    { id: 'linkedin', name: 'linkedin_name', url: 'https://www.linkedin.com/in/efraingb/', iconName: 'Linkedin', text: 'linkedin_text' },
    { id: 'github', name: 'github_name', url: 'https://github.com/efraingbdev/', iconName: 'Github', text: 'github_text' },
];

// --- NAV LINKS ---
// 'label' becomes 'labelKey' for translation.
export const navLinksData: NavLink[] = [
  { href: '#hero', labelKey: 'home' },
  { href: '#projects', labelKey: 'projects' },
  { href: '#documents', labelKey: 'resources' },
  { href: '#contact', labelKey: 'contact' },
];
