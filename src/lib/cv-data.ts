import type { CV } from './types';

export const cvData: CV[] = [
  {
    slug: 'ai-leader',
    name: 'Efraín González Bermúdez',
    title: 'STRATEGIC SOLUTIONS ARCHITECT | HEAD OF AI',
    summary: 'Senior technology professional with 15 years of experience designing and implementing digital ecosystems, cloud solutions, and security architecture frameworks. Proven track record leading digital transformation and R&D for organizations such as Kohl’s, EPA, and ULACIT. Expert in bridging business objectives with technical execution, with deep expertise in hybrid cloud governance (GCP/Azure), AI-enabled product scalability, and security compliance (CIS/NIST standards). MSc in Big Data & MSc in Project Management.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Architect%20Lead%20Inquiry' },
      website: { text: 'EfrainGB.org', url: '/?mode=ai' },
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
              'Aligning product roadmap, security standards, and technology with local regulations and international growth objectives.'
            ]
          },
          {
            id: 'exp_enterprise',
            title: 'Senior Solutions Architect | Kutwit',
            date: '2017 - 2025',
            description: [
              'Led technical lifecycle and digital strategy for enterprise clients (Kohl’s, Establishment Labs, EPA).',
              'Architected scalable cloud infrastructures (GCP/Firebase/Azure) and defined security governance standards for multi-site institutional ecosystems.',
              'Consulted on high-level digital transformation, focusing on document intelligence and search automation.'
            ]
          },
          {
            id: 'exp_smgroup',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Managed software development and digital strategies, improving User Experience (UX) of public and education platforms.',
              'Led cross-functional teams in the delivery of complex web architectures.'
            ]
          },
          {
            id: 'exp_legacy',
            title: 'Content Manager & Web Developer',
            date: '2011 - 2013',
            description: [
              'Optimized 300+ US-based websites at Capilleira (2013) ensuring technical performance and content integrity.',
              'Fostered digital growth through strategic content management at DCC (2011).'
            ]
          }
        ]
      },
      {
        id: 'skills_and_training',
        title: 'Architecture & Governance Expertise',
        isTwoColumns: true,
        items: [
          {
            id: 'skill_ai_dev',
            title: 'Solutions & Security Architecture',
            description: ['Security Architecture · Hybrid Cloud (GCP/Azure) · Access Control & Data Protection · CIS Benchmarks · NIST Compliance · API Strategy']
          },
          {
            id: 'skill_strategy',
            title: 'Strategy & Engineering',
            description: ['AI & ML Implementation · Next.js · React · Python · Agile Orchestration · Technical Writing · Strategic IT Planning']
          },
          {
            id: 'skill_inst',
            title: 'Partner Institutions',
            description: ['INCAE · ULACIT · UNA · IBITEC · Platzi · Marketing 4 Ecommerce · CTP Calle Blancos']
          },
          {
            id: 'skill_certs',
            title: 'Specialized Training',
            description: ['Big Data · Project Management · Cloud Security · Fintech · Google Analytics · Digital Journalism']
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
            description: 'Solid foundation in software engineering and systems architecture.'
          }
        ]
      },
      {
        id: 'innovation_rd',
        title: 'Research & Innovation',
        items: [
          {
            id: 'exp_ircu_vpt',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Led digital transformation and online education initiatives, designing technical curricula and delivery frameworks.'
          },
          {
            id: 'exp_menta',
            title: 'Founder & Architect | MentaIA.org (R&D Lab)',
            date: 'Present',
            description: 'Research and development of AI-powered personalized education architectures (Generative AI & Adaptive Learning).'
          }
        ]
      }
    ]
  },
  {
    slug: 'arquitecto-senior',
    name: 'Efraín González Bermúdez',
    title: 'JEFE DE ARQUITECTURA EMPRESARIAL | CONSULTOR ESTRATÉGICO TI',
    summary: 'Profesional senior con 15 años de trayectoria en diseño de ecosistemas digitales y gobernanza de TI. Experto en alinear tecnología con objetivos de negocio mediante el desarrollo de requerimientos complejos, análisis de inversión (ROI/TCO) y liderazgo de equipos técnicos en entornos regulados. Trayectoria con clientes globales como Kohl’s y EPA. Candidato a MBA en Gerencia de Tecnología.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Consulta%20Estrat%C3%A9gica%20TI' },
      website: { text: 'EfrainGB.org', url: '/es?mode=enterprise' },
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
              'Gestión de presupuestos (Capex/Opex), análisis de TCO y reducción de deuda técnica en plataformas críticas.',
              'Liderazgo en la traducción de necesidades de negocio a arquitecturas técnicas robustas.'
            ]
          },
          {
            id: 'exp_smgroup',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Gestión de desarrollo de software y estrategias digitales, mejorando significativamente la UX en plataformas públicas y educativas.'
            ]
          },
          {
            id: 'exp_legacy_es',
            title: 'Gestor de Contenido y Desarrollador Web',
            date: '2011 - 2013',
            description: [
              'Optimización de sitios web de alto tráfico en EE.UU. (Capilleira) y gestión de crecimiento digital (DCC).'
            ]
          }
        ]
      },
      {
        id: 'habilidades_formacion',
        title: 'Gobernanza y Estrategia de Negocio',
        isTwoColumns: true,
        items: [
          {
            id: 'skill_gov',
            title: 'Gobierno y Arquitectura',
            description: ['Arquitectura Empresarial · Marcos TOGAF/COBIT · Análisis ROI/TCO · Gestión de Requerimientos (SMART) · Mejora de Procesos']
          },
          {
            id: 'skill_tech',
            title: 'Infraestructura y Cumplimiento',
            description: ['Nube Híbrida (Azure/GCP) · Seguridad de Datos · Continuidad de Negocio · DevOps · Estrategia de APIs']
          },
          {
            id: 'skill_inst_es',
            title: 'Instituciones de Formación',
            description: ['INCAE · ULACIT · UNA · IBITEC · CTP Calle Blancos · CNC']
          },
          {
            id: 'skill_certs_es',
            title: 'Especializaciones',
            description: ['Máster Big Data · Dirección de Proyectos · Gestión Estratégica · Fintech · Marketing Digital']
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
            description: 'Ingeniería de software y arquitectura de sistemas.'
          }
        ]
      },
      {
        id: 'liderazgo_investigacion',
        title: 'Investigación e Innovación',
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
      website: { text: 'EfrainGB.org', url: '/' },
      linkedin: { text: 'linkedin.com/in/efraingb', url: 'https://www.linkedin.com/in/efraingb/' },
    },
    sections: [
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
            id: 'exp_sm',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: 'Managed software development and digital strategies, improving UX of public & education platforms.'
          },
          {
            id: 'exp_capilleira',
            title: 'Content Manager & Web Developer',
            date: '2011 - 2013',
            description: 'Troubleshot and optimized 300 US Websites at Capilleira (2013) and fostered digital growth at DCC (2011).'
          }
        ]
      },
      {
        id: 'leadership',
        title: 'Social & Educational Leadership',
        items: [
          {
            id: 'exp_ircu_vpt',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Led digital transformation & online education initiatives. Curriculum Design & Delivery (Technical Topics).'
          },
          {
            id: 'exp_communities',
            title: 'Strategic Community Engagement',
            date: '2010 - Present',
            description: 'Professor & Speaker at CyberU, EDUCATEC, Saint Thomas & CRDigital. Focus on youth and digital services.'
          }
        ]
      },
      {
        id: 'skills_and_training_base',
        title: 'Professional Training & Certifications',
        isTwoColumns: true,
        items: [
          {
            id: 'skill_tech_base',
            title: 'Technical Stack',
            description: ['AI · JavaScript · PHP · MySQL · Blockchain · Fintech · Cloud · UX Design · Odoo']
          },
          {
            id: 'skill_biz_base',
            title: 'Business & Management',
            description: ['Agile/Scrum · Strategic Planning · Negotiation · Digital Marketing · Sales · Journalism']
          },
          {
            id: 'skill_inst_base',
            title: 'Partner Institutions',
            description: ['INCAE · ULACIT · UNA · CTP Calle Blancos · CNC · UPI · IBITEC · Platzi · Udemy']
          },
          {
            id: 'skill_res_base',
            title: 'Key Results',
            description: ['30+ Technical Articles · 2 Books on AI/Computing · +30% Sales Lift (CostaRica.org)']
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
            description: 'Focus on scaling innovation and startup ecosystems.'
          },
          {
            id: 'edu_eneb',
            title: 'MSc in Big Data & MSc in Project Management — ENEB',
            date: '2023 - 2025',
            description: 'Specialization in Data-Driven Strategy and Agile Orchestration.'
          },
          {
            id: 'edu_ircu_msc',
            title: 'MSc in Web Design & Dev — IRCU',
            date: '2019',
            description: 'Advanced systems architecture.'
          },
          {
            id: 'edu_ircu_bsc',
            title: 'BSc in Web Design & Dev — IRCU',
            date: '2017',
            description: 'Foundations of software engineering.'
          }
        ]
      },
      {
        id: 'innovation_init',
        title: 'R&D Initiative',
        items: [
          {
            id: 'exp_menta',
            title: 'Founder | MentaIA.org',
            date: 'Present',
            description: 'Research and development of an AI-powered personalized education platform.'
          }
        ]
      }
    ]
  }
];
