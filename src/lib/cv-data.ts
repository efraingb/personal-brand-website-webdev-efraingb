import type { CV } from './types';

export const cvData: CV[] = [
  {
    slug: 'enterprise',
    name: 'Efraín González Bermúdez',
    title: 'ENTERPRISE ARCHITECT | SR. IT SOLUTIONS CONSULTANT',
    summary: 'Senior technology professional with 15 years of experience designing and implementing digital ecosystems, cloud solutions, and strategic IT frameworks. Proven track record leading digital transformation and R&D initiatives for organizations such as Kohl’s, EPA, Establishment Labs, and ULACIT. Strong ability to bridge business objectives with technical execution, with expertise in solution scalability, AI-enabled products, and stakeholder collaboration across teams. MBA candidate in Technology Management and author of 30+ technical publications.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Strategic%20Opportunity' },
      website: { text: 'EfrainGB.org', url: '?mode=enterprise' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'core_competencies',
        title: 'Core Competencies',
        isTwoColumns: true,
        items: [
          {
            id: 'architecture',
            title: 'Technical Architecture & Governance',
            description: [
              'Enterprise Solution Design', 'Cloud Infrastructure (GCP/Firebase)', 'Full-Stack Web (Next.js/React)', 'AI Implementation & R&D', 'Database Design (SQL/NoSQL)', 'API Strategy & Microservices', 'Technical Standards & Governance'
            ]
          },
          {
            id: 'strategy',
            title: 'Strategic Leadership',
            description: [
              'IT Consulting', 'Stakeholder Management', 'Agile/Scrum', 'Change Management', 'Project Lifecycle (SDLC)', 'Business Intelligence', 'Data-driven decision making'
            ]
          }
        ]
      },
      {
        id: 'professional_experience',
        title: 'Professional Experience',
        items: [
          {
            id: 'exp_progressia',
            title: 'Lead Country Representative | Progressia (Dubai Startup)',
            date: '2025 - Present',
            description: 'Leading the strategic integration and deployment of AI-driven financial education solutions for the Costa Rican market, aligning partnerships, content, and technology with local regulations and growth objectives.'
          },
          {
            id: 'exp_ulacit',
            title: 'Web Master & IT Strategy | ULACIT',
            date: '2025 - 2026',
            description: [
              'Architected a multi-site institutional web ecosystem integrating e-commerce and centralized WordPress CMS.',
              'Built an AI-powered landing page engine that automated campaign setup and tracking, improving lead conversion efficiency by ~30%.',
              'Coordinated cross-functional technical teams and external vendors to ensure high availability and strategic IT alignment.'
            ]
          },
          {
            id: 'exp_kutwit',
            title: 'Innovation & Technology Strategist | Kutwit',
            date: '2017 - 2025',
            description: [
              'Led the full technical lifecycle and digital strategy for enterprise clients, optimizing operational efficiency and system reliability.',
              'Designed scalable cloud infrastructures and software architectures for international markets (USA, LatAm).',
              'Consulted on systems modernization, legacy migration, and technical debt reduction for large-scale platforms.'
            ]
          },
          {
            id: 'exp_sm',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Managed software development life cycles for high-impact public sector and educational platforms.',
              'Spearheaded performance optimization and UX improvements, resulting in increased user engagement and system stability.'
            ]
          },
          {
            id: 'exp_early',
            title: 'Web Developer & Content Manager | Capilleira & DCC',
            date: '2011 - 2013',
            description: 'Established foundational expertise in system reliability by optimizing over 300 US-based web platforms.'
          }
        ]
      },
      {
        id: 'leadership_edu',
        title: 'Leadership & R&D Initiatives',
        items: [
          {
            id: 'leader_menta',
            title: 'Founder & R&D Lead: MentaIA.org',
            date: '2025 - Present',
            description: 'Leading research and development for an AI-powered personalized education architecture, focusing on generative AI applications in adaptive learning.'
          },
          {
            id: 'leader_ircu',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Directed institutional digital transformation and IT governance, overseeing the modernization of online education infrastructures.'
          }
        ]
      },
      {
        id: 'education',
        title: 'Education & Training',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Technology Management — ULACIT',
            date: '2025 - 2027',
            description: 'Focus on strategic IT governance, business scaling, and organizational leadership.'
          },
          {
            id: 'edu_masters',
            title: "MSc in 'Big Data & BI' & MSc in 'Project Management' — ENEB",
            date: '2023 - 2025',
            description: 'Dual-master focus on data-driven strategy and project orchestration.'
          }
        ]
      }
    ]
  },
  {
    slug: 'en',
    name: 'Efraín González Bermúdez',
    title: 'ANALYST & IT SPECIALIST | PROFESSOR',
    summary: 'Technology professional and professor with 15 years of experience in software development and digital strategy. Proven track record working with organizations such as Kohl’s, EPA, Establishment Labs, and ULACIT. Specialized in combining technical execution with educational innovation. MBA candidate in Technology Management and author of multiple technical publications on computing and AI.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Job%20Opportunity' },
      website: { text: 'EfrainGB.org', url: '?mode=ai' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'skills',
        title: 'Skills',
        isTwoColumns: true,
        items: [
          {
            id: 'tech',
            title: 'Technical Development',
            description: [
              'Web UX', 'WordPress', 'React', 'Next.js', 'SQL', 'Git', 'Agile', 'AI Implementation', 'Firebase', 'Cloud Infrastructure', 'Technical Writing'
            ]
          },
          {
            id: 'leadership',
            title: 'Leadership',
            description: [
              'Project Management', 'Public Speaking', 'Community Building', 'Technical Mentoring'
            ]
          }
        ]
      },
      {
        id: 'experience',
        title: 'Experience',
        items: [
          {
            id: 'exp_progressia',
            title: 'Country Representative | Progressia (Dubai)',
            date: '2025 - Present',
            description: 'Leading strategic expansion and partnerships for an AI startup focused on financial education in the Costa Rican market.'
          },
          {
            id: 'exp_roles',
            title: 'Web Master | ULACIT',
            date: '2025 - 2026',
            description: 'Managed the full marketing web ecosystem, including e-commerce and multi-site architectures. Developed an AI-powered landing page platform to optimize digital operations.'
          },
          {
            id: 'exp_consultant',
            title: 'Consultant & Senior Developer',
            date: '2017 - Present',
            description: 'Leading the technical lifecycle of solutions for startups and enterprise clients, focusing on digital strategy and operational growth.'
          },
          {
            id: 'exp_lead',
            title: 'Tech Lead | Grupo SM',
            date: '2015 - 2017',
            description: 'Managed software development and digital strategies, improving User Experience (UX) for public and education platforms.'
          }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Technology Management — ULACIT',
            date: '2025 - 2027',
            description: ''
          },
          {
            id: 'edu_masters',
            title: "MSc in Big Data & MSc in Project Management — ENEB",
            date: '2023 - 2025',
            description: ''
          }
        ]
      }
    ]
  },
  {
    slug: 'es',
    name: 'Efraín González Bermúdez',
    title: 'ANALISTA TECNOLÓGICO | PROFESOR',
    summary: 'Profesional en tecnología con 15 años de experiencia en diseño de ecosistemas digitales, soluciones cloud y marcos estratégicos de TI. Trayectoria liderando iniciativas de transformación digital e I+D para organizaciones como Kohl’s, EPA, Establishment Labs y ULACIT. Experto en conectar objetivos de negocio con ejecución técnica, con enfoque en escalabilidad, productos basados en IA y colaboración con stakeholders. Candidato a MBA en Gerencia de Tecnología.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Oportunidad%20Laboral' },
      website: { text: 'EfrainGB.org', url: '?mode=ai' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'habilidades',
        title: 'Habilidades',
        isTwoColumns: true,
        items: [
          {
            id: 'habilidades_tech',
            title: 'Desarrollo Técnico',
            description: [
              'Web UX', 'WordPress', 'React', 'Next.js', 'SQL', 'Git', 'Agile', 'Implementación de IA', 'Firebase', 'Infraestructura Cloud'
            ]
          },
          {
            id: 'habilidades_liderazgo',
            title: 'Liderazgo',
            description: [
              'Gestión de Proyectos', 'Oratoria', 'Redacción Técnica', 'Mentoría Técnica'
            ]
          }
        ]
      },
      {
        id: 'experiencia',
        title: 'Experiencia',
        items: [
          {
            id: 'exp_progressia',
            title: 'Representante País | Progressia (Dubai)',
            date: '2025 - Presente',
            description: 'Liderando la expansión estratégica y alianzas de una startup de IA enfocada en educación financiera en el mercado costarricense.'
          },
          {
            id: 'exp_digital',
            title: 'Webmaster | ULACIT',
            date: '2025 - 2026',
            description: 'Dirección del ecosistema web de marketing, incluyendo e-commerce y arquitecturas multi-sitio. Desarrollo de motor de landing pages con IA para optimizar conversiones.'
          },
          {
            id: 'exp_consultor',
            title: 'Consultor y Desarrollador Senior',
            date: '2017 - Presente',
            description: 'Gestión del ciclo técnico de soluciones para startups y clientes corporativos, con enfoque en estrategia digital.'
          }
        ]
      },
      {
        id: 'educacion',
        title: 'Educación',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Gerencia de Tecnología — ULACIT',
            date: '2025 - 2027',
            description: ''
          },
          {
            id: 'edu_masters',
            title: 'Máster en Big Data y Máster en Dirección de Proyectos — ENEB',
            date: '2023 - 2025',
            description: ''
          }
        ]
      }
    ]
  }
];
