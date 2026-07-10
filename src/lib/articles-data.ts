import type { Article } from './types';

export const articlesData: Article[] = [
  {
    slug: 'fin-del-clic-nacimiento-geo',
    title: 'El Fin del Clic y el Nacimiento del GEO',
    description: 'El framework académico para dominar la era de los motores de respuesta generativos.',
    date: '24 de febrero, 2025',
    category: 'IA Estratégica',
    author: 'Efraín González Bermúdez',
    readTime: '8 min',
    content: [
      {
        type: 'paragraph',
        text: 'El paradigma del Search Engine Optimization (SEO) tradicional está experimentando una obsolescencia estructural irreversible. El modelo clásico de recuperación de información de Google, basado en el ordenamiento lineal de hipervínculos indexados, está siendo suplantado por sistemas de síntesis conversacional conocidos como Generative Engines (GEs).'
      },
      {
        type: 'heading',
        level: 2,
        text: '1. El Marco Teórico del GEO: Entropía e Information Gain'
      },
      {
        type: 'paragraph',
        text: 'El SEO tradicional manipulaba la densidad de palabras clave. El GEO opera bajo una lógica de optimización de caja negra. Los LLMs evalúan las fuentes de datos a través de funciones de recompensa probabilísticas. El núcleo de este algoritmo se rige por la Métrica de Ganancia de Información (Information Gain).'
      },
      {
        type: 'quote',
        text: 'Si tu contenido repite exactamente lo mismo que el resto de la web, la ganancia de información tiende a cero. Las IAs descartan la redundancia para economizar el costo de procesamiento por token.'
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Los Cuatro Pilares del Posicionamiento en LLMs'
      },
      {
        type: 'list',
        items: [
          'Identidad y Grafos de Entidades: La marca debe ser una entidad clara en el grafo de conocimiento.',
          'Extractabilidad (Readability): Estructura Answer-First para reducir fricción sintáctica.',
          'Evidencia: Inclusión de datos duros, patentes y metodologías validadas.',
          'Consenso (Co-Citation): Validación externa en redes de confianza como LinkedIn o Reddit.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Comparativa Estratégica: SEO vs GEO'
      },
      {
        type: 'table',
        headers: ['Dimensión', 'SEO Tradicional', 'GEO / AI Optimization'],
        rows: [
          ['Unidad de Optimización', 'Palabras clave e hipervínculos', 'Intenciones y entidades semánticas'],
          ['Métrica Primaria', 'Clics y Posición SERP', 'Citation Share / Recommendation'],
          ['Valor de Conversión', 'Tráfico de baja intención', 'Tráfico pre-calificado (4.4x mayor conv.)']
        ]
      },
      {
        type: 'paragraph',
        text: 'El posicionamiento orgánico dentro de los LLMs requiere una reingeniería profunda del código, de la narrativa de marca y de las relaciones públicas digitales.'
      }
    ]
  },
  {
    slug: 'seguridad-por-diseno-cloud-architecture',
    title: 'Seguridad por Diseño: El Nuevo Estándar de la Arquitectura Cloud',
    description: 'Por qué la infraestructura moderna requiere un enfoque basado en Zero Trust y cumplimiento normativo desde el código.',
    date: '26 de febrero, 2025',
    category: 'Arquitectura Enterprise',
    author: 'Efraín González Bermúdez',
    readTime: '10 min',
    content: [
      {
        type: 'paragraph',
        text: 'En el actual panorama de amenazas digitales, la seguridad ya no puede ser una capa añadida al final del ciclo de desarrollo. La "Seguridad por Diseño" (Security by Design) es ahora el imperativo categórico para cualquier Arquitecto de Soluciones que maneje datos institucionales sensibles.'
      },
      {
        type: 'heading',
        level: 2,
        text: '1. El Framework Zero Trust: Nunca Confiar, Siempre Verificar'
      },
      {
        type: 'paragraph',
        text: 'El modelo tradicional de "castillo y foso" ha muerto. En entornos de nube híbrida, el perímetro es dinámico. Implementar una arquitectura Zero Trust significa que cada solicitud de acceso, sin importar de dónde provenga, debe ser autenticada, autorizada y cifrada.'
      },
      {
        type: 'list',
        items: [
          'Micro-segmentación de red para aislar cargas de trabajo críticas.',
          'Principio de Menor Privilegio (PoLP) aplicado a cada identidad.',
          'Monitoreo adaptativo basado en el comportamiento del usuario.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Cumplimiento como Código (NIST & CIS)'
      },
      {
        type: 'paragraph',
        text: 'La adopción de marcos como el NIST 800-series o los benchmarks de CIS no debe ser una tarea manual de auditoría. La arquitectura moderna integra el cumplimiento dentro del pipeline de CI/CD, asegurando que ninguna infraestructura sea desplegada si no cumple con los estándares de endurecimiento (hardening) definidos.'
      },
      {
        type: 'quote',
        text: 'La deuda técnica en seguridad es el interés más caro que una empresa puede pagar. Un error en la configuración de IAM hoy es una brecha de datos mañana.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Análisis de Valor: TCO vs Resiliencia'
      },
      {
        type: 'table',
        headers: ['Componente', 'Arquitectura Tradicional', 'Arquitectura Resiliente'],
        rows: [
          ['Gestión de Identidad', 'Basada en perímetros fijos', 'Basada en identidades federadas y MFA'],
          ['Hardening', 'Reactivo post-incidente', 'Proactivo vía infraestructura como código'],
          ['Escalabilidad', 'Limitada por silos de hardware', 'Elástica con gobernanza centralizada']
        ]
      },
      {
        type: 'paragraph',
        text: 'Para las organizaciones que cotizan en mercados exigentes o manejan datos de salud y finanzas, la arquitectura no es solo una cuestión de ingeniería, es una cuestión de confianza y viabilidad de negocio.'
      }
    ]
  },
  {
    slug: 'gobernanza-conocimiento-it-enterprise',
    title: 'Gobernanza del Conocimiento: El Activo Invisible de la Arquitectura Enterprise',
    description: 'La documentación técnica no es solo "contenido"; es la diferencia estructural entre una arquitectura escalable y una trampa de legado.',
    date: '28 de febrero, 2025',
    category: 'Gestión Estratégica',
    author: 'Efraín González Bermúdez',
    readTime: '6 min',
    content: [
      {
        type: 'paragraph',
        text: 'En entornos altamente regulados y de gran escala, tratar el conocimiento técnico como una tarea secundaria es un riesgo operativo masivo. La documentación debe ser gobernada como un activo crítico, con ciclos de vida definidos, controles de acceso y trazabilidad absoluta.'
      },
      {
        type: 'heading',
        level: 2,
        text: '1. Los Pilares de la Gobernanza del Conocimiento'
      },
      {
        type: 'paragraph',
        text: 'Para que la información sirva como motor de resiliencia y no como un repositorio estático de datos obsoletos, la arquitectura de conocimiento debe basarse en tres principios fundamentales:'
      },
      {
        type: 'list',
        items: [
          'Docs-as-Code: La documentación crítica debe vivir junto al código. Gestionada mediante Pull Requests e integrada en pipelines de CI/CD. Si no puedes auditar quién cambió qué y por qué, tu conocimiento no está gobernado.',
          'Puente entre Legado y Nube: Mientras la nube exige velocidad, los sistemas legados exigen orden y recuperación de conocimiento tribal. Un modelo híbrido robusto asegura que el conocimiento permanezca intacto durante la transición.',
          'Cumplimiento por Diseño: Bajo marcos estrictos de protección de datos, el mapeo de flujos sensibles debe imponer el principio de menor privilegio. La trazabilidad y la auditabilidad no son opcionales; son la línea base.'
        ]
      },
      {
        type: 'quote',
        text: 'La salud operativa no se mide por el volumen de manuales escritos, sino por el "Change-to-doc lag" y la capacidad de respuesta ante auditorías.'
      },
      {
        type: 'heading',
        level: 2,
        text: '2. El Rol del Arquitecto del Conocimiento'
      },
      {
        type: 'paragraph',
        text: 'Un líder moderno de tecnología no es solo un gestor de sistemas, es un arquitecto del conocimiento. Su función es asegurar que la documentación técnica sirva como un conductor central del control operativo, el cumplimiento normativo y la resiliencia del negocio ante cambios disruptivos.'
      }
    ]
  }
];
