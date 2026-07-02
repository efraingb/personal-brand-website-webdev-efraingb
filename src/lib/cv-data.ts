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
            id: 'exp_enterprise',
            title: 'Senior Solutions Architect | Kutwit',
            date: '2017 - 2025',
            description: [
              'Led full-stack architecture for high-compliance enterprise clients (Kohl’s, Establishment Labs, EPA), specializing in systems modernization.',
              'Architected scalable cloud infrastructures (GCP/Firebase) and defined technical standards for multi-site institutional ecosystems.',
              'Consulted on NASDAQ-level digital transformation projects, focusing on document intelligence and search orchestration.'
            ]
          },
          {
            id: 'exp_smgroup',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Managed software development and digital strategies, significantly improving the User Experience (UX) of public and education platforms.',
              'Led cross-functional teams in the delivery of complex web architectures.'
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
            title: 'MBA in Technology Management — ULACIT',
            date: '2025 - 2027',
            description: 'Focus on Strategic IT Governance and Scaling Business Operations.'
          },
          {
            id: 'edu_eneb',
            title: "MSc in Big Data & MSc in Project Management — ENEB",
            date: '2023 - 2025',
            description: 'Specialization in Data-Driven Strategy and Agile Orchestration.'
          },
          {
            id: 'edu_ircu_msc',
            title: 'MSc in Web Design & Development — IRCU',
            date: '2019',
            description: 'Advanced studies in systems architecture and digital product design.'
          },
          {
            id: 'edu_ircu_bsc',
            title: 'BSc in Web Design & Development — IRCU',
            date: '2017',
            description: 'Solid foundation in algorithms, software engineering, and systems architecture.'
          }
        ]
      },
      {
        id: 'certifications',
        title: 'Certifications & Training',
        isTwoColumns: true,
        items: [
          {
            id: 'cert_ai',
            title: 'AI & Data',
            description: ['Google Cloud Data Engineer', 'Stanford Machine Learning', 'Big Data Analytics', 'Advanced NLP']
          },
          {
            id: 'cert_gov',
            title: 'Governance',
            description: ['Agile/Scrum', 'Project Management', 'IT Governance', 'Business Intelligence']
          }
        ]
      },
      {
        id: 'research',
        title: 'R&D and Innovation',
        items: [
          {
            id: 'exp_ircu_vpt',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Led digital transformation and online education initiatives, designing technical curricula and delivery frameworks.'
          },
          {
            id: 'exp_menta',
            title: 'Founder & Architect | MentaIA.org (Research Lab)',
            date: 'Present',
            description: 'Independent R&D focused on adaptive learning engines using Generative AI and document intelligence.'
          }
        ]
      }
    ]
  },
  {
    slug: 'arquitecto-senior',
    name: 'Efraín González Bermúdez',
    title: 'JEFE DE ARQUITECTURA EMPRESARIAL | ESTRATEGA DE TI',
    summary: 'Profesional senior con 15 años de trayectoria diseñando e implementando ecosistemas digitales, soluciones cloud y marcos de gobernanza tecnológica. Trayectoria liderando transformación digital e I+D para organizaciones como Kohl’s, EPA, Establishment Labs y ULACIT. Experto en conectar objetivos de negocio con ejecución técnica y gestión de presupuestos tecnológicos. Candidato a MBA en Gerencia de Tecnología y autor de más de 30 publicaciones técnicas.',
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
              'Dirección de la integración estratégica y despliegue de soluciones de educación financiera impulsadas por IA.',
              'Alineación del roadmap con regulaciones locales y objetivos de crecimiento internacional.'
            ]
          },
          {
            id: 'exp_kutwit',
            title: 'Estratega de Innovación y Tecnología | Kutwit',
            date: '2017 - 2025',
            description: [
              'Diseño de arquitecturas escalables y gobierno de TI para clientes como Kohl’s, EPA y Establishment Labs.',
              'Gestión del ciclo de vida técnico y reducción de deuda técnica en plataformas de alta disponibilidad.'
            ]
          },
          {
            id: 'exp_smgroup',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Gestión de desarrollo de software y estrategias digitales, mejorando significativamente la UX en plataformas públicas y educativas.'
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
            description: 'Enfoque en Gobernanza Estratégica y Escalabilidad de Operaciones.'
          },
          {
            id: 'edu_eneb',
            title: 'Máster en Big Data y Máster en Dirección de Proyectos — ENEB',
            date: '2023 - 2025',
            description: 'Especialización en Estrategia impulsada por Datos y Marcos Ágiles.'
          },
          {
            id: 'edu_ircu_msc',
            title: 'Máster en Diseño y Desarrollo Web — IRCU',
            date: '2019',
            description: 'Estudios avanzados en arquitectura de sistemas y diseño de productos digitales.'
          },
          {
            id: 'edu_ircu_lic',
            title: 'Licenciatura en Diseño y Desarrollo Web — IRCU',
            date: '2017',
            description: 'Fundamentos sólidos en ingeniería de software y arquitectura de sistemas.'
          }
        ]
      },
      {
        id: 'certificaciones',
        title: 'Certificaciones y Marcos de Trabajo',
        isTwoColumns: true,
        items: [
          {
            id: 'cert_gobierno',
            title: 'Gobierno y Proyectos',
            description: ['TOGAF', 'COBIT', 'ITIL 4', 'Scrum Master', 'PMP Training', 'Gobernanza de Datos']
          },
          {
            id: 'cert_tech',
            title: 'Tecnología',
            description: ['Azure Architect', 'Data Analytics', 'ISO 27001 Foundation', 'IA Builder']
          }
        ]
      },
      {
        id: 'investigacion',
        title: 'Liderazgo e Investigación',
        items: [
          {
            id: 'exp_ircu_vpt',
            title: 'Vicerrector de Tecnología | IRCU',
            date: '2019 - 2021',
            description: 'Liderazgo de transformación digital e iniciativas de educación en línea a nivel institucional.'
          },
          {
            id: 'exp_menta',
            title: 'Arquitecto Fundador | MentaIA.org (I+D)',
            date: 'Presente',
            description: 'Investigación independiente en motores de aprendizaje adaptativo y arquitecturas de IA Generativa.'
          }
        ]
      }
    ]
  },
  {
    slug: 'innovation',
    name: 'Efraín González Bermúdez',
    title: 'INNOVATION SPECIALIST',
    summary: 'Technology professional and professor with 15 years of experience in R&D, software development, and digital strategy. Proven track record leading digital transformation for organizations such as Kohl’s, EPA, Establishment Labs, ULACIT and CostaRica.org (+30% sales lift). Expertise in bridging technical execution with strategic innovation, authoring 30+ articles and two books on computing and AI. Currently an MBA candidate in Technology Management, focusing on scaling innovation and startup ecosystems.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com' },
      website: { text: 'EfrainGB.org', url: '/en/cv/innovation' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
      {
        id: 'skills',
        title: 'Skills',
        isTwoColumns: true,
        items: [
          {
            id: 'skill_mgmt',
            title: 'Project & Innovation Management',
            description: ['R&D Lifecycle', 'Agile/Scrum', 'Strategic Planning', 'Stakeholder Coordination', 'Business Intelligence', 'Change Management']
          },
          {
            id: 'skill_tech',
            title: 'Technical Architecture',
            description: ['AI Development', 'Web UX', 'Cloud Infrastructure', 'SQL', 'React', 'Next.js', 'Git', 'Odoo']
          }
        ]
      },
      {
        id: 'experience',
        title: 'Experience',
        items: [
          {
            id: 'exp_progressia',
            title: 'Lead Country Representative | Progressia (Dubai-based Startup)',
            date: '2025 - Present',
            description: 'Leading the strategic integration and deployment of AI-powered solutions for the Costa Rican market.'
          },
          {
            id: 'exp_kutwit',
            title: 'Innovation & Technology Strategist | Kutwit',
            date: '2017 - 2025',
            description: 'Leading the technical lifecycle and digital strategy for software solutions, driving long-term growth and operational efficiency.'
          },
          {
            id: 'exp_ircu',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Led digital transformation & online education initiatives. Curriculum Design & Delivery (Technical Topics).'
          },
          {
            id: 'exp_sm',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: 'Managed software development and digital strategies, improving UX of public & education platforms.'
          }
        ]
      },
      {
        id: 'education',
        title: 'Education',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Technology Management emphasis — ULACIT',
            date: '2025 - 2027',
            description: 'In progress.'
          },
          {
            id: 'edu_eneb',
            title: 'MSc in Big Data & MSc in Project Management — ENEB',
            date: '2023 - 2025',
            description: ''
          },
          {
            id: 'edu_ircu',
            title: 'MSc (2019) & BSc (2017) in Web Design & Dev — IRCU',
            date: '2017 - 2019',
            description: ''
          }
        ]
      }
    ]
  }
];
