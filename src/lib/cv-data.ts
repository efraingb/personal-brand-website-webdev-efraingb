import type { CV } from './types';

export const cvData: CV[] = [
  {
    slug: 'ai-leader',
    name: 'Efraín González Bermúdez',
    title: 'HEAD OF AI | STRATEGIC SOLUTIONS ARCHITECT',
    summary: 'Senior technology leader with 15 years of experience architecting intelligent infrastructure and high-impact digital ecosystems. Specialized in transforming unstructured, document-heavy processes into streamlined AI-native solutions. Proven track record leading R&D for NASDAQ-listed medical firms and global educational leaders. Operates at the intersection of engineering and executive strategy, leveraging a US-based strategic partnership for high-compliance international delivery. MBA candidate in Technology Management.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Strategic%20AI%20Leadership' },
      website: { text: 'EfrainGB.org', url: '/en/cv/ai-leader' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'leadership_ai',
        title: 'AI Leadership & Strategy',
        isTwoColumns: true,
        items: [
          {
            id: 'ai_strategy',
            title: 'Technical Direction',
            description: [
              'Generative AI & LLMs', 'Agent-Based Systems', 'Document Intelligence (NLP/OCR)', 'MLOps & Deployment', 'AI Governance & Ethics', 'Cloud Architecture (GCP/Azure)', 'Technical Standards'
            ]
          },
          {
            id: 'business_strategy',
            title: 'Commercial Influence',
            description: [
              'Product-Led AI Strategy', 'Stakeholder Orchestration', 'Strategic Roadmap Design', 'US Market Alignment', 'Venture-Backed SDLC', 'Technical Mentoring', 'ROI-Driven Innovation'
            ]
          }
        ]
      },
      {
        id: 'professional_experience',
        title: 'Professional Experience',
        items: [
          {
            id: 'exp_menta',
            title: 'CEO & Founder | MentaIA.org',
            date: '2025 - Present',
            description: [
              'Architected a proprietary Generative AI engine for adaptive learning, transforming complex curriculum data into interactive knowledge graphs.',
              'Leading a globally distributed team to build intelligent infrastructure for personalized education at scale.'
            ]
          },
          {
            id: 'exp_progressia',
            title: 'Lead Country Representative | Progressia (Dubai Startup)',
            date: '2025 - Present',
            description: 'Directing the strategic integration of AI-driven financial education solutions, aligning product roadmap with local regulations and international growth objectives.'
          },
          {
            id: 'exp_ulacit',
            title: 'AI Strategy & Web Architecture | ULACIT',
            date: '2025 - 2026',
            description: [
              'Built an AI-powered landing page engine that automated campaign setup and tracking, improving lead conversion efficiency by ~30%.',
              'Architected a multi-site ecosystem integrating e-commerce and centralized CMS for thousands of monthly users.'
            ]
          },
          {
            id: 'exp_enterprise',
            title: 'Senior Solutions Architect | Kutwit',
            date: '2017 - 2025',
            description: [
              'Led full-stack architecture for high-compliance enterprise clients in the USA and LatAm, specializing in systems modernization and technical debt reduction.',
              'Consulted on NASDAQ-level digital transformation projects, ensuring high availability and robust data governance.'
            ]
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
            description: 'Focused on Strategic Governance and Scaling Business Operations.'
          },
          {
            id: 'edu_masters',
            title: "Dual MSc in Big Data & Project Management — ENEB",
            date: '2023 - 2025',
            description: 'Specialization in Data-Driven Strategy and Agile Orchestration.'
          }
        ]
      }
    ]
  },
  {
    slug: 'arquitecto-senior',
    name: 'Efraín González Bermúdez',
    title: 'JEFE DE ARQUITECTURA EMPRESARIAL | ESTRATEGA DE TI',
    summary: 'Profesional senior con 15 años de trayectoria diseñando e implementando ecosistemas digitales, soluciones cloud y marcos de gobernanza tecnológica. Especialista en conectar los objetivos de negocio con la ejecución técnica, liderando iniciativas de transformación digital para organizaciones como Kohl’s, EPA, Establishment Labs y ULACIT. Experto en escalabilidad de soluciones, presupuestos tecnológicos (Capex/Opex) y alineación estratégica de TI. Candidato a MBA en Gerencia de Tecnología y autor de más de 30 publicaciones técnicas.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Oportunidad%20Liderazgo%20TI' },
      website: { text: 'EfrainGB.org', url: '/es/cv/arquitecto-senior' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'competencias_core',
        title: 'Competencias de Liderazgo y Gobierno',
        isTwoColumns: true,
        items: [
          {
            id: 'arquitectura_gobierno',
            title: 'Arquitectura y Gobernanza',
            description: [
              'Diseño de Arquitectura Empresarial', 'Gobernanza de TI (COBIT/TOGAF)', 'Infraestructura Cloud (GCP/Azure)', 'Gestión del Ciclo de Vida (SLCM)', 'Estándares Técnicos y Políticas', 'Estrategia de APIs y Microservicios', 'Ciberseguridad y Continuidad'
            ]
          },
          {
            id: 'liderazgo_negocio',
            title: 'Gestión Estratégica',
            description: [
              'Alineación Negocio-TI (BRM)', 'Gestión de Presupuestos (Capex/Opex)', 'Metodologías Ágiles (Scrum/Agile)', 'Dirección de Proyectos (PMI)', 'Gestión de Stakeholders', 'Business Intelligence', 'Transformación Digital'
            ]
          }
        ]
      },
      {
        id: 'experiencia_profesional',
        title: 'Experiencia Profesional',
        items: [
          {
            id: 'exp_menta',
            title: 'CEO & Fundador | Menta IA',
            date: '2025 - Presente',
            description: [
              'Arquitectura de un motor de IA Generativa propio para educación personalizada.',
              'Dirección estratégica y gobernanza de una plataforma global de EdTech.'
            ]
          },
          {
            id: 'exp_ulacit',
            title: 'Web Master & Estrategia IT | ULACIT',
            date: '2025 - 2026',
            description: [
              'Lideré el gobierno de arquitectura para un ecosistema multi-sitio con e-commerce integrado.',
              'Construcción de un motor de landing pages con IA que mejoró la conversión en un ~30%.',
              'Orquestación de equipos técnicos y proveedores externos para asegurar la continuidad y escalabilidad.'
            ]
          },
          {
            id: 'exp_kutwit',
            title: 'Estratega de Innovación y Tecnología | Kutwit',
            date: '2017 - 2025',
            description: [
              'Diseño de arquitecturas escalables para clientes internacionales en EE.UU. y LatAm.',
              'Consultoría en modernización de sistemas legacy y reducción de deuda técnica para firmas en NASDAQ.',
              'Gobernanza de datos y seguridad en entornos altamente regulados.'
            ]
          }
        ]
      },
      {
        id: 'educacion',
        title: 'Educación Superior',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Gerencia de Tecnología — ULACIT',
            date: '2025 - 2027',
            description: 'Enfoque en Gobernanza Estratégica y Escalabilidad de Operaciones.'
          },
          {
            id: 'edu_master',
            title: 'Máster en Big Data y Dirección de Proyectos — ENEB',
            date: '2023 - 2025',
            description: 'Especialización en Estrategia impulsada por Datos y Orquestación Ágil.'
          }
        ]
      }
    ]
  },
  {
    slug: 'enterprise',
    name: 'Efraín González Bermúdez',
    title: 'ENTERPRISE ARCHITECT | SR. IT SOLUTIONS CONSULTANT',
    summary: 'Senior technology professional with 15 years of experience designing and implementing digital ecosystems, cloud solutions, and strategic IT frameworks. Proven track record leading digital transformation and R&D initiatives for organizations such as Kohl’s, EPA, Establishment Labs, and ULACIT. Strong ability to bridge business objectives with technical execution, with expertise in solution scalability, AI-enabled products, and stakeholder collaboration across teams. MBA candidate in Technology Management and author of 30+ technical publications.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Strategic%20Opportunity' },
      website: { text: 'EfrainGB.org', url: '/en/cv/enterprise' },
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
      website: { text: 'EfrainGB.org', url: '/en/cv/en' },
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
      website: { text: 'EfrainGB.org', url: '/es/cv/es' },
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
          }
        ]
      }
    ]
  }
];
