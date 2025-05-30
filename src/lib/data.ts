import type { Project, LinkItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj1',
    name: 'AI Powered Analytics Dashboard',
    url: 'https://google.com', // Placeholder, use a real or known-to-be-active URL for testing
    description: 'A cutting-edge dashboard leveraging AI to provide deep insights into user data and behavior patterns. Built with modern web technologies for a seamless experience.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'analytics dashboard',
    tags: ['AI', 'React', 'Data Visualization'],
  },
  {
    id: 'proj2',
    name: 'E-commerce Platform Modernization',
    url: 'https://bing.com', // Placeholder
    description: 'Revamped an existing e-commerce site with Next.js for improved performance, scalability, and user experience. Integrated a new design system.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ecommerce website',
    tags: ['Next.js', 'E-commerce', 'UX/UI'],
  },
  {
    id: 'proj3',
    name: 'Project Management Tool',
    url: 'https://thissitedoesnotexist-efrain.com/offline-project', // Intentionally offline for demonstration
    description: 'A conceptual project demonstrating specific backend functionalities and complex state management. Currently offline for scheduled maintenance.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'software interface',
    tags: ['Backend', 'API', 'Conceptual'],
  },
  {
    id: 'proj4',
    name: 'Interactive Learning Module',
    url: 'https://vercel.com', // Placeholder
    description: 'Developed an interactive e-learning module focusing on gamified education. Features real-time progress tracking and adaptive learning paths.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'education learning',
    tags: ['EdTech', 'Gamification', 'React'],
  },
];

export const documentLinksData: LinkItem[] = [
  { 
    name: 'Before Toasters Rule', 
    url: 'https://www.amazon.com/Before-Toasters-Rule-Artificial-Intelligence/dp/B0CSX2B79X', 
    iconName: 'BookOpen', 
    description: "A book exploring the future of AI." 
  },
  { 
    name: 'Practical Computer Science for Everyone', 
    url: 'https://www.amazon.com/Practical-Computer-Science-Everyone-programming/dp/B0D1DRGF55', 
    iconName: 'BookOpen', 
    description: "CS fundamentals made accessible."
  },
  { 
    name: 'LinkedIn Profile', 
    url: 'https://www.linkedin.com/in/hiefraingb', 
    iconName: 'Linkedin', 
    description: "Connect with me on LinkedIn." 
  },
  { 
    name: 'GitHub Profile', 
    url: 'https://github.com/hiefraingb', 
    iconName: 'Github', 
    description: "Explore my open-source projects."
  },
];

export const contactLinksData: LinkItem[] = [
    { name: 'Email', url: 'mailto:hiefraingb@gmail.com', iconName: 'Mail', text: 'hiefraingb@gmail.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hiefraingb', iconName: 'Linkedin', text: 'linkedin.com/in/hiefraingb' },
    { name: 'GitHub', url: 'https://github.com/hiefraingb', iconName: 'Github', text: 'github.com/hiefraingb' },
];

export const navLinksData = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#documents', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
];
