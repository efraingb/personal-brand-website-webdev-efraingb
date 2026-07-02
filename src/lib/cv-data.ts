import type { CV } from './types';

export const cvData: CV[] = [
  {
    slug: 'ai-leader',
    name: 'Efraín González Bermúdez',
    title: 'HEAD OF AI | STRATEGIC SOLUTIONS ARCHITECT',
    summary: 'Senior technology professional with 15 years of experience designing and implementing digital ecosystems, cloud solutions, and strategic IT frameworks. Proven track record leading digital transformation and R&D initiatives for organizations such as Kohl’s, EPA, Establishment Labs, and ULACIT. Specialized in bridging business objectives with technical execution, with deep expertise in solution scalability, AI-enabled products, and high-level stakeholder collaboration. MBA candidate in Technology Management.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Strategic%20AI%20Leadership' },
      website: { text: 'EfrainGB.org', url: '/en/cv/ai-leader' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'professional_experience',
        title: 'Professional Experience',
        items: [
          {
            id: 'exp_progressia',
            title: 'Lead Country Representative | Progressia (Dubai Startup)',
            date: '2025 - Present',
            description: [
              'Directing the strategic integration and deployment of AI-driven financial education solutions for the Costa Rican market.',
              'Aligning product roadmap, content, and technology with local regulations and international growth objectives.',
              'Managing high-level partnerships and stakeholder orchestration for market expansion.'
            ]
          },
          {
            id: 'exp_ulacit',
            title: 'AI Strategy & Web Architecture | ULACIT',
            date: '2025 - 2026',
            description: [
              'Architected an AI-powered landing page engine that automated campaign setup and tracking, improving lead conversion efficiency by ~30%.',
              'Built a multi-site institutional web ecosystem integrating e-commerce and centralized CMS for thousands of monthly users.',
              'Defined technical standards for AI implementation across digital student-facing services.'
            ]
          },
          {
            id: 'exp_enterprise',
            title: 'Senior Solutions Architect | Kutwit',
            date: '2017 - 2025',
            description: [
              'Led full-stack architecture for high-compliance enterprise clients in the USA and LatAm, specializing in systems modernization and technical debt reduction.',
              'Architected scalable cloud infrastructures for retail leaders (Kohl’s) and medical tech firms (Establishment Labs), ensuring high availability and robust data governance.',
              'Consulted on NASDAQ-level digital transformation projects, focusing on document intelligence and search orchestration.'
            ]
          }
        ]
      },
      {
        id: 'education',
        title: 'University Education',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA in Technology Management — ULACIT',
            date: '2025 - 2027',
            description: 'Focus on Strategic IT Governance and Scaling Business Operations.'
          },
          {
            id: 'edu_masters',
            title: "Dual MSc in Big Data & Project Management — ENEB",
            date: '2023 - 2025',
            description: 'Specialization in Data-Driven Strategy, Advanced Analytics, and Agile Orchestration.'
          },
          {
            id: 'edu_bachelors',
            title: 'BSc in Computer Science / Systems Engineering',
            date: 'Completed',
            description: 'Solid foundation in algorithms, software engineering, and systems architecture.'
          }
        ]
      },
      {
        id: 'certifications',
        title: 'Certifications & Specialized Training',
        isTwoColumns: true,
        items: [
          {
            id: 'cert_ai_cloud',
            title: 'AI & Cloud Computing',
            description: [
              'Google Cloud Professional Data Engineer',
              'Machine Learning Specialization (Stanford)',
              'Azure AI Engineer Associate (Candidate)',
              'Advanced NLP & LLM Architecture'
            ]
          },
          {
            id: 'cert_mgmt',
            title: 'Management & Governance',
            description: [
              'Scrum Master Certified (SMC)',
              'Project Management Professional (PMP) Training',
              'ITIL 4 Foundation',
              'Data Governance & Privacy Standards'
            ]
          }
        ]
      },
      {
        id: 'research_innovation',
        title: 'R&D and Selected Projects',
        items: [
          {
            id: 'exp_menta',
            title: 'Founder & Architect | MentaIA (Research Lab)',
            date: '2024 - Present',
            description: [
              'Independent R&D focused on adaptive learning engines using Generative AI.',
              'Developed proprietary knowledge graph architectures to transform unstructured curriculum data into interactive learning paths.'
            ]
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
        id: 'experiencia_profesional',
        title: 'Experiencia Profesional',
        items: [
          {
            id: 'exp_progressia',
            title: 'Representante País | Progressia (Startup de Dubai)',
            date: '2025 - Presente',
            description: [
              'Dirección de la integración estratégica y despliegue de soluciones de educación financiera impulsadas por IA para el mercado costarricense.',
              'Alineación de la hoja de ruta del producto con regulaciones locales y objetivos de crecimiento internacional.',
              'Gestión de alianzas estratégicas y relaciones con stakeholders clave.'
            ]
          },
          {
            id: 'exp_ulacit',
            title: 'Web Master & Estrategia IT | ULACIT',
            date: '2025 - 2026',
            description: [
              'Lideré el gobierno de arquitectura para un ecosistema multi-sitio con e-commerce integrado para miles de usuarios.',
              'Arquitectura de un motor de landing pages con IA que mejoró la conversión en un ~30%.',
              'Orquestación de equipos técnicos y proveedores externos para asegurar la continuidad y escalabilidad.'
            ]
          },
          {
            id: 'exp_kutwit',
            title: 'Estratega de Innovación y Tecnología | Kutwit',
            date: '2017 - 2025',
            description: [
              'Diseño de arquitecturas escalables y gobierno de TI para clientes internacionales en EE.UU. y LatAm.',
              'Consultoría en modernización de sistemas legacy y reducción de deuda técnica para firmas en NASDAQ.',
              'Gestión de presupuestos tecnológicos (Capex/Opex) y alineación con objetivos de negocio.'
            ]
          }
        ]
      },
      {
        id: 'educacion',
        title: 'Formación Académica',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Gerencia de Tecnología — ULACIT',
            date: '2025 - 2027',
            description: 'Enfoque en Gobernanza Estratégica, Gestión de Riesgos y Escalabilidad.'
          },
          {
            id: 'edu_master',
            title: 'Máster en Big Data y Dirección de Proyectos — ENEB',
            date: '2023 - 2025',
            description: 'Especialización en Estrategia impulsada por Datos y Marcos de Trabajo Ágiles.'
          },
          {
            id: 'edu_licenciatura',
            title: 'Licenciatura en Ingeniería de Sistemas / Computación',
            date: 'Completado',
            description: 'Formación integral en ingeniería de software, bases de datos y redes.'
          }
        ]
      },
      {
        id: 'certificaciones',
        title: 'Certificaciones y Conocimientos Específicos',
        isTwoColumns: true,
        items: [
          {
            id: 'cert_gobierno',
            title: 'Gobierno y Marcos de Trabajo',
            description: [
              'TOGAF 9 Certified (Arquitectura Empresarial)',
              'COBIT 2019 Foundation & Governance',
              'ITIL 4 Specialist',
              'Gestión de Proyectos (PMI/Scrum)'
            ]
          },
          {
            id: 'cert_tecnologia',
            title: 'Tecnología y Datos',
            description: [
              'Microsoft Certified: Azure Solutions Architect',
              'DAMA-DMBOK (Gobierno de Datos)',
              'Ciberseguridad ISO 27001',
              'Especialista en IA y Analítica (Puntaje 10/10)'
            ]
          }
        ]
      },
      {
        id: 'innovacion_investigacion',
        title: 'Proyectos de Innovación e I+D',
        items: [
          {
            id: 'exp_menta',
            title: 'Arquitecto Fundador | Menta IA (Laboratorio de I+D)',
            date: '2024 - Presente',
            description: [
              'Investigación independiente en arquitecturas de IA Generativa para la educación personalizada.',
              'Diseño de flujos de trabajo inteligentes para la automatización de contenidos pedagógicos.'
            ]
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
