import type { CV } from './types';

export const cvData: CV[] = [
  {
    slug: 'enterprise',
    name: 'Efraín González Bermúdez',
    title: 'ENTERPRISE ARCHITECT | SR. IT CONSULTANT',
    summary: 'Senior technology professional with 15 years of experience architecting complex digital ecosystems, cloud solutions, and strategic IT frameworks. Proven track record leading digital transformation and R&D for organizations such as Kohl’s, EPA, Establishment Labs, and ULACIT. Expert in bridging the gap between business objectives and technical execution, specialized in solution scalability, AI implementation, and high-level stakeholder orchestration. MBA candidate in Technology Management with 30+ technical publications.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Strategic%20Opportunity' },
      website: { text: 'EfrainGB.org', url: '/en?mode=enterprise' },
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
            title: 'Technical Architecture',
            description: [
              'Enterprise Solution Design', 'Cloud Infrastructure (GCP/Firebase)', 'Full-Stack Development (Next.js/React)', 'AI Implementation & R&D', 'Database Orchestration (SQL/NoSQL)', 'API Strategy', 'Technical Governance'
            ]
          },
          {
            id: 'strategy',
            title: 'Strategic Leadership',
            description: [
              'IT Consulting', 'Stakeholder Management', 'Agile/Scrum Methodologies', 'Change Management', 'Project Lifecycle Management', 'Business Intelligence'
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
            date: '2026 - Present',
            description: 'Leading the strategic integration and deployment of AI-powered financial education solutions for the Costa Rican market, orchestrating partnerships and local ecosystem growth.'
          },
          {
            id: 'exp_ulacit',
            title: 'Web Master & IT Strategy | ULACIT',
            date: '2025 - 2026',
            description: [
              'Architected a multi-site institutional ecosystem integrating e-commerce and centralized CMS on WordPress.',
              'Engineered an AI-powered landing page engine to automate marketing operations and enhance lead capture efficiency by 30%.',
              'Managed cross-functional technical teams and external vendors to ensure high availability and strategic alignment.'
            ]
          },
          {
            id: 'exp_kutwit',
            title: 'Innovation & Technology Strategist | Kutwit',
            date: '2017 - 2026',
            description: [
              'Led the full technical lifecycle and digital strategy for diverse enterprise clients, driving long-term growth and operational efficiency.',
              'Designed scalable software solutions and digital marketing infrastructures for international markets (USA, LatAm).',
              'Provided strategic consulting on systems modernization and technical debt reduction.'
            ]
          },
          {
            id: 'exp_sm',
            title: 'Tech Lead | SM Group',
            date: '2015 - 2017',
            description: [
              'Managed software development and digital strategies for high-impact public and educational sector platforms.',
              'Significantly improved User Experience (UX) and performance metrics through data-driven optimization.'
            ]
          },
          {
            id: 'exp_early',
            title: 'Web Developer & Content Manager | Capilleira & DCC',
            date: '2011 - 2013',
            description: 'Troubleshot and optimized 300+ US-based websites, establishing foundational expertise in system reliability and SEO/UX performance.'
          }
        ]
      },
      {
        id: 'leadership_edu',
        title: 'Leadership & R&D',
        items: [
          {
            id: 'leader_ircu',
            title: 'Vice-rector of Technology | IRCU',
            date: '2019 - 2021',
            description: 'Directed digital transformation initiatives and institutional IT strategy, overseeing curriculum design for technical programs.'
          },
          {
            id: 'leader_menta',
            title: 'R&D Initiative: MentaIA.org',
            date: '2025 - Present',
            description: 'Researching and developing an AI-powered personalized education platform exploring adaptive learning architectures.'
          }
        ]
      },
      {
        id: 'education',
        title: 'Education & Training',
        items: [
          {
            id: 'edu_mba',
            title: 'MBA, Technology Management emphasis — ULACIT',
            date: '2025 - 2027',
            description: 'Advanced studies in strategic IT governance and business scaling.'
          },
          {
            id: 'edu_masters',
            title: "MSc in 'Big Data & BI' & MSc in 'Project Management' — ENEB",
            date: '2023 - 2025',
            description: ''
          },
          {
            id: 'edu_spec',
            title: 'Specialized Training in JS, PHP, AI, Blockchain, and Agile — Multiple Institutions',
            date: '2011 - Present',
            description: 'Continuous development in modern stack and strategic negotiation.'
          }
        ]
      }
    ]
  },
  {
    slug: 'en',
    name: 'Efraín González Bermúdez',
    title: 'ANALYST & IT SPECIALIST | PROFESSOR',
    summary: 'Technology professional and professor with 15 years of experience in software development and digital strategy, working with organizations such as Kohl’s, EPA, Establishment Labs, public sector institutions, ULACIT and CostaRica.org (+30% sales lift). I have combined this technical work with teaching and community initiatives in technology and entrepreneurship, authoring 30+ articles and two books on computing and AI. Currently an MBA candidate in Technology Management, with ongoing involvement in startup and innovation ecosystems in Costa Rica and beyond.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Job%20Opportunity&body=Hello%20Efra%C3%ADn,' },
      website: { text: 'EfrainGB.org', url: '/en?mode=ai' },
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
              'Web UX', 'WordPress', 'HTML', 'CSS', 'Odoo', 'Bootstrap', 'React', 'Next.js', 'SQL', 'Git', 'Agile', 'IA dev', 'Visual Studio Code', 'Firebase Studio & Storage', 'Blockchain Fundamentals', 'Adobe tools'
            ]
          },
          {
            id: 'leadership',
            title: 'Leadership',
            description: [
              'Project Management', 'Public Speaking', 'Technical Writing', 'Community Building'
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
            title: 'Lead Country Representative | Progressia (Dubai)',
            date: '2024 - Present',
            description: 'Leading strategic expansion and partnerships for a Dubai-based AI startup focused on financial education. Driving community engagement and growth initiatives in the Costa Rican market.'
          },
          {
            id: 'exp_roles',
            title: 'Roles in digital industry',
            subtitle: 'Web Master: ULACIT',
            date: 'June 2025 - January 2026',
            description: 'Led institutional WordPress website launch and managed the full marketing web ecosystem (multiple sites + e-commerce, overseeing hundreds of tasks) for Marketing & Growth Department; developed and deployed my AI-powered landing page platform to accelerate creation and measurement; coordinated stakeholders and external support.'
          },
          {
            id: 'exp_consultant',
            title: 'Consultant & Senior Developer',
            date: '2017 - Present',
            description: 'Applied software development and digital strategy to drive growth, leading the technical lifecycle of solutions for startups and enterprise clients, including a multi‑year role with external agency Kutwit as well as my own initiatives and direct clients.'
          },
          {
            id: 'exp_lead',
            title: 'Tech Lead: Grupo SM',
            date: '2015 - 2017',
            description: 'Managed software development and digital strategies, significantly improving the User Experience (UX) of public & education platforms.'
          },
          {
            id: 'exp_content',
            title: 'Content Manager & Web Developer',
            date: '2011 - 2013',
            description: 'Troubleshot and optimized 300 US Websites at Capilleira (2013) and fostered digital growth through content management at DCC (2011).'
          }
        ]
      },
      {
        id: 'social_leadership',
        title: 'Social & Educational Leadership',
        items: [
          {
            id: 'leadership_rector',
            title: 'Vice-rector of Technology: IRCU',
            date: '2019 - 2021',
            description: 'Led digital transformation & online education initiatives. Curriculum Design & Delivery (Technical Topics), Workshop Facilitation.'
          },
          {
            id: 'leadership_community',
            title: 'Strategic Community Engagement: Various Organizations',
            date: '2010 - Present',
            description: 'Youth, Digital & Social Services. Professor & Speaker at CyberU, EDUCATEC, Saint Thomas & CRDigital.'
          },
          {
            id: 'leadership_founder',
            title: 'Founder of ',
            titleLink: { text: 'MentaIA.org', url: 'https://mentaia.org/' },
            date: 'February 2025 - Present',
            description: 'AI-powered personalized education platform.'
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
            description: 'Strong foundation in IT and continuous professional development:'
          },
          {
            id: 'edu_msc_eneb',
            title: "Master in 'Big Data & Business Intelligence' and Master in 'Project Management': ENEB",
            date: '2023 - 2025',
            description: ''
          },
          {
            id: 'edu_msc_ircu',
            title: "Maestría (2019) & Licenciatura (2017) in Web Design & Dev: International Redeemed Christian University (IRCU)",
            date: '',
            description: ''
          },
           {
            id: 'edu_diverse',
            title: "Diverse programs and training in:",
            date: '2011 - Present',
            description: 'JavaScript, PHP, MySQL, Blockchain, Fintech, Business Administration and Acceleration, Negotiation, AI, Leadership, Digital Marketing, Design, Google Analytics, Digital Journalist, Sales, etc / Institutions such as UNA, CTP Calle Blancos, INCAE, ULACIT, Udemy, Platzi, Marketing 4 Ecommerce, IBITEC, UPI & CNC'
          }
        ]
      }
    ]
  },
  {
    slug: 'es',
    name: 'Efraín González Bermúdez',
    title: 'ANALISTA TECNOLÓGICO | PROFESOR',
    summary: 'Profesional en tecnología y docencia con 15 años de experiencia en desarrollo de software y estrategia digital. Colaboración con organizaciones como Kohl’s, EPA, Establishment Labs, instituciones del sector público, ULACIT y CostaRica.org (+30% incremento en ventas). Integración de desarrollo tecnológico con educación e iniciativas comunitarias en emprendimiento. Autor de más de 30 artículos y dos libros sobre computación e inteligencia artificial. Cursando una Maestría en Administración con énfasis en Tecnología, con participación activa en ecosistemas de startups e innovación en Costa Rica y ámbito internacional.',
    contact: {
      phone: { text: '+506 8693 9737', url: 'tel:+50686939737' },
      email: { text: 'hiefraingb@gmail.com', url: 'mailto:hiefraingb@gmail.com?subject=Oportunidad%20Laboral&body=Hola%20Efra%C3%ADn,' },
      website: { text: 'EfrainGB.org', url: '/es?mode=ai' },
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
              'Web UX', 'WordPress', 'HTML', 'CSS', 'Odoo', 'Bootstrap', 'React', 'Next.js', 'SQL', 'Git', 'Agile', 'desarrollo con IA', 'Visual Studio Code', 'Firebase Studio & Storage', 'fundamentos de Blockchain', 'herramientas Adobe'
            ]
          },
          {
            id: 'habilidades_liderazgo',
            title: 'Liderazgo',
            description: [
              'Gestión de proyectos', 'Oratoria', 'Redacción técnica', 'Construcción de comunidad'
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
            title: 'Lead Country Representative | Progressia (Dubai)',
            date: '2024 - Presente',
            description: 'Liderazgo de expansión estratégica y alianzas para una startup de IA con sede en Dubai enfocada en educación financiera. Impulso de iniciativas de crecimiento y vinculación comunitaria en el mercado costarricense.'
          },
          {
            id: 'exp_digital',
            title: 'Industria Digital',
            subtitle: 'Webmaster | ULACIT',
            date: 'Junio 2025 - Enero 2026',
            description: [
              'Lanzamiento del sitio institucional en WordPress.',
              'Gestión integral del ecosistema de marketing web (múltiples sitios + e-commerce).',
              'Supervisión de cientos de tareas para el Departamento de Mercadeo y Crecimiento.',
              'Desarrollo e implementación de plataforma de landing pages impulsada por IA para optimización de creación y medición.',
              'Coordinación de stakeholders y soporte externo.'
            ]
          },
          {
            id: 'exp_consultor',
            title: 'Consultor y Desarrollador Senior',
            date: '2017 - Presente',
            description: [
              'Desarrollo de software y estrategia digital orientados a crecimiento.',
              'Liderazgo del ciclo técnico completo de soluciones para startups y clientes empresariales.',
              'Rol multianual con agencia externa Kutwit, además de iniciativas propias y clientes directos.'
            ]
          },
          {
            id: 'exp_lead',
            title: 'Tech Lead | Grupo SM',
            date: '2015 - 2017',
            description: [
                'Gestión de desarrollo de software y estrategias digitales.',
                'Optimización significativa de la experiencia de usuario (UX) en plataformas públicas y educativas.'
            ]
          },
          {
            id: 'exp_content',
            title: 'Content Manager & Desarrollador Web | Capilleira / DCC',
            date: '2011 - 2013',
            description: [
                'Diagnóstico y optimización de 300 sitios web en EE. UU. (Capilleira).',
                'Impulso de crecimiento digital mediante gestión estratégica de contenidos (DCC).'
            ]
          }
        ]
      },
       {
        id: 'liderazgo_social',
        title: 'Liderazgo Social y Educativo',
        items: [
          {
            id: 'liderazgo_vicerrector',
            title: 'Vicerrector de Tecnología | IRCU',
            date: '2019 - 2021',
            description: [
                'Dirección de iniciativas de transformación digital y educación en línea.',
                'Diseño curricular en áreas técnicas y facilitación de talleres especializados.'
            ]
          },
          {
            id: 'liderazgo_comunidad',
            title: 'Vinculación Comunitaria Estratégica | Varias organizaciones',
            date: '2010 - Presente',
            description: [
                'Desarrollo de iniciativas en juventud, servicios digitales y acción social.',
                'Docencia y conferencias en CyberU, EDUCATEC, Saint Thomas y CRDigital.'
            ]
          },
          {
            id: 'liderazgo_founder',
            title: 'Fundador | ',
            titleLink: { text: 'MentaIA.org', url: 'https://mentaia.org/' },
            date: 'Febrero 2025 - Presente',
            description: ['Creación y dirección de plataforma de educación personalizada impulsada por IA.']
          }
        ]
      },
      {
        id: 'educacion',
        title: 'Educación',
        items: [
          {
            id: 'edu_mba',
            title: 'Maestría en Administración de Empresas con énfasis en Gerencia de Tecnología — ULACIT',
            date: '2025 - 2027',
            description: ''
          },
          {
            id: 'edu_msc_eneb',
            title: 'Máster en Big Data & Business Intelligence y Máster en Project Management — ENEB',
            date: '2023 - 2025',
            description: ''
          },
          {
            id: 'edu_msc_ircu',
            title: 'Maestría (2019) y Licenciatura (2017) en Diseño y Desarrollo Web — International Redeemed Christian University (IRCU)',
            date: '',
            description: ''
          },
           {
            id: 'edu_diverse',
            title: 'Formación complementaria en:',
            date: '2011 - Presente',
            description: 'JavaScript, PHP, MySQL, Blockchain, Fintech, administración y aceleración de negocios, negociación, inteligencia artificial, liderazgo, marketing digital, diseño, Google Analytics, periodismo digital y ventas.\nInstituciones: UNA, CTP Calle Blancos, INCAE, ULACIT, Udemy, Platzi, Marketing 4 Ecommerce, IBITEC, UPI y CNC.'
          }
        ]
      }
    ]
  }
];
