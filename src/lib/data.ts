import type { Project, LinkItem } from './types';

export const projectsData: Project[] = [
  {
    id: 'proj-quiz-ai',
    name: 'Creador de Quizzes con IA',
    url: 'https://9000-idx-studio-1746296464496.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'Herramienta inteligente para generar cuestionarios y evaluaciones personalizadas mediante IA, facilitando la creación de contenido educativo y de capacitación.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai quiz generator',
    tags: ['AI', 'EdTech', 'Firebase', 'Generative AI'],
  },
  {
    id: 'proj-negotia',
    name: 'NEGOTIA',
    url: 'https://9000-idx-studio-1745689952822.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev/',
    description: 'Deal Smarter, Not Harder. Plataforma de negociación asistida por IA diseñada para facilitar acuerdos beneficiosos para todas las partes (Win-Win Outcomes).',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'ai negotiation platform',
    tags: ['AI', 'Negotiation', 'SaaS', 'B2B'],
  },
  {
    id: 'proj-bless',
    name: 'Bless Contigo',
    url: 'https://9000-firebase-studio-1747186834705.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev/',
    description: 'Plataforma comunitaria diseñada para conectar y ofrecer recursos de apoyo, fomentando la colaboración y el bienestar colectivo.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'community platform',
    tags: ['Community', 'Platform', 'Firebase', 'Social Impact'],
  },
  {
    id: 'proj-imagine-motiva',
    name: 'Imagine Motiva (Establishment Labs)',
    url: '', // Empty URL for conceptual project, "Visit Site" will be disabled
    description: 'Colaboración en el desarrollo de soluciones digitales innovadoras para Establishment Labs, una empresa global de tecnología médica, enfocadas en mejorar la experiencia del usuario y la eficiencia operativa.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'medtech solution',
    tags: ['MedTech', 'UX/UI', 'Digital Transformation', 'Enterprise'],
  },
  {
    id: 'proj-agroia',
    name: 'Agroia',
    url: 'https://9000-idx-studio-1745949441464.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'Plataforma digital inteligente para el sector agrícola, utilizando IA para conectar productores con mercados, optimizar recursos y facilitar el acceso a tecnologías avanzadas.',
    thumbnailUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'agritech platform',
    tags: ['AgriTech', 'AI', 'E-commerce', 'Platform', 'Firebase'],
  },
];

export const documentLinksData: LinkItem[] = [
  {
    name: 'Antes que las Tostadoras Gobiernen',
    url: 'https://www.amazon.com/Antes-que-las-Tostadoras-Gobiernen-ebook/dp/B0DQJ8Q55K/',
    iconName: 'BookOpen',
    description: "Un libro que explora el futuro de la IA (Edición en español).",
    buttonText: 'Ver en Amazon'
  },
  {
    name: 'Practical Computer Science for Everyone',
    url: 'https://drive.google.com/file/d/14_sPGzT-GH9JNqfYperRCmHJ12LNBnGB/view',
    iconName: 'BookOpen',
    description: "CS fundamentals made accessible (Free download - English).",
    buttonText: 'Descargar Gratis'
  },
  {
    name: 'LinkedIn Profile',
    url: 'https://www.linkedin.com/in/efraingb/',
    iconName: 'Linkedin',
    description: "Conéctate conmigo en LinkedIn.",
    buttonText: 'Visit Profile'
  },
  {
    name: 'GitHub Profile',
    url: 'https://github.com/efraingbdev/',
    iconName: 'Github',
    description: "Explora mis proyectos de código abierto.",
    buttonText: 'Visit Profile'
  },
];

export const contactLinksData: LinkItem[] = [
    { name: 'Email', url: 'mailto:hiefraingb@gmail.com', iconName: 'Mail', text: 'hiefraingb@gmail.com' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/efraingb/', iconName: 'Linkedin', text: 'linkedin.com/in/efraingb' },
    { name: 'GitHub', url: 'https://github.com/efraingbdev/', iconName: 'Github', text: 'github.com/efraingbdev' },
];

export const navLinksData = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#documents', label: 'Resources' },
  { href: '#contact', label: 'Contact' },
];
