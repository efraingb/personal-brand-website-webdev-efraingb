
import type { Project, LinkItem } from './types';

export const projectsData: Project[] = [
  // Proyectos IA Recientes y Destacados
  {
    id: 'proj-quiz-ai',
    name: 'Creador de Quizzes con IA',
    url: 'https://9000-idx-studio-1746296464496.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'Herramienta inteligente para generar cuestionarios y evaluaciones personalizadas mediante IA, facilitando la creación de contenido educativo y de capacitación.',
    thumbnailUrl: 'https://i.imgur.com/0NciRLC.png',
    dataAiHint: 'ai quiz generator',
    tags: ['AI', 'EdTech', 'Firebase', 'Generative AI'],
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
  },
  {
    id: 'proj-negotia',
    name: 'NEGOTIA',
    url: 'https://9000-idx-studio-1745689952822.cluster-ux5mmlia3zhhask7riihruxydo.cloudworkstations.dev/',
    description: 'Deal Smarter, Not Harder. Plataforma de negociación asistida por IA diseñada para facilitar acuerdos beneficiosos para todas las partes (Win-Win Outcomes).',
    thumbnailUrl: 'https://i.imgur.com/wIwB6qu.png',
    dataAiHint: 'ai negotiation platform',
    tags: ['AI', 'Negotiation', 'SaaS', 'B2B'],
    videoUrl: 'https://vimeo.com/123456789', // Placeholder
  },
  {
    id: 'proj-bless',
    name: 'Bless Contigo',
    url: 'https://9000-firebase-studio-1747186834705.cluster-hf4yr35cmnbd4vhbxvfvc6cp5q.cloudworkstations.dev/',
    description: 'Plataforma comunitaria diseñada para conectar y ofrecer recursos de apoyo, fomentando la colaboración y el bienestar colectivo.',
    thumbnailUrl: 'https://i.imgur.com/2GnmZm2.png',
    dataAiHint: 'community platform',
    tags: ['Community', 'Platform', 'Firebase', 'Social Impact'],
    // No videoUrl for this one to test fallback
  },
  {
    id: 'proj-agroia',
    name: 'Agroia',
    url: 'https://9000-idx-studio-1745949441464.cluster-pgviq6mvsncnqxx6kr7pbz65v6.cloudworkstations.dev/',
    description: 'Plataforma digital inteligente para el sector agrícola, utilizando IA para conectar productores con mercados, optimizar recursos y facilitar el acceso a tecnologías avanzadas.',
    thumbnailUrl: 'https://i.imgur.com/h53YbVW.png',
    dataAiHint: 'agritech platform',
    tags: ['AgriTech', 'AI', 'E-commerce', 'Platform', 'Firebase'],
    videoUrl: 'https://www.youtube.com/watch?v=anotherVideoExample', // Placeholder
  },

  // Colaboraciones de Impacto
  {
    id: 'proj-imagine-motiva',
    name: 'Imagine Motiva (Establishment Labs)',
    url: 'https://motiva.health/motivaImagine/',
    description: 'Colaboración en el desarrollo de soluciones digitales innovadoras para Establishment Labs, una empresa global de tecnología médica, enfocadas en la visualización avanzada y personalización de implantes mamarios.',
    thumbnailUrl: 'https://i.imgur.com/8m70722.png',
    dataAiHint: 'medtech visualization',
    tags: ['MedTech', 'UX/UI', '3D Visualization', 'Enterprise', 'Collaboration'],
  },
  {
    id: 'proj-agro-y-mas',
    name: 'Agro Y Más',
    url: 'https://agroymas.com/',
    description: 'Colaboración en la plataforma digital para el sector agrícola, enfocada en conectar a productores con información relevante, mercados y soluciones financieras.',
    thumbnailUrl: 'https://i.imgur.com/McB2HN9.png',
    dataAiHint: 'agritech news finance',
    tags: ['AgriTech', 'Platform', 'FinTech', 'Content', 'Collaboration'],
  },
  {
    id: 'proj-epa-en-linea',
    name: 'EPA en Línea (Costa Rica)',
    url: 'https://cr.epaenlinea.com',
    description: 'Colaboración en la plataforma de e-commerce para Ferretería EPA en Costa Rica, una importante cadena de ferreterías, enfocada en mejorar la experiencia de compra en línea para sus clientes.',
    thumbnailUrl: 'https://i.imgur.com/XNbjFzv.png',
    dataAiHint: 'hardware ecommerce retail',
    tags: ['E-commerce', 'Retail', 'Web Development', 'Collaboration'],
  },
  {
    id: 'proj-kohls',
    name: "Kohl's E-commerce",
    url: 'https://www.kohls.com',
    description: 'Colaboración relacionada con la plataforma de e-commerce de Kohl’s, una destacada cadena de tiendas departamentales en Estados Unidos.',
    thumbnailUrl: 'https://i.imgur.com/Ud4Q2jt.png',
    dataAiHint: 'department store ecommerce',
    tags: ['E-commerce', 'Retail', 'Enterprise', 'Collaboration'],
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
