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
          'Docs-as-Code: La documentación crítica debe vivir junto al código. Gestionada mediante Pull Requests e integrada en pipelines de CI/CD.',
          'Puente entre Legado y Nube: Un modelo híbrido robusto asegura que el conocimiento permanezca intacto durante la transición.',
          'Cumplimiento por Diseño: La trazabilidad y la auditabilidad no son opcionales; son la línea base.'
        ]
      },
      {
        type: 'quote',
        text: 'La salud operativa no se mide por el volumen de manuales escritos, sino por el "Change-to-doc lag" y la capacidad de respuesta ante auditorías.'
      },
      {
        type: 'paragraph',
        text: 'Un líder moderno de tecnología no es solo un gestor de sistemas, es un arquitecto del conocimiento. Su función es asegurar que la documentación técnica sirva como un conductor central del control operativo.'
      }
    ]
  },
  {
    slug: 'deuda-tecnica-era-ia-2025',
    title: 'Deuda Técnica 2.0: Gestionando el Riesgo en la Era de la IA',
    description: 'Cómo la explosión de código generado por IA está creando un nuevo tipo de pasivo tecnológico y cómo los líderes deben enfrentarlo.',
    date: '2 de marzo, 2025',
    category: 'Liderazgo & Ingeniería',
    author: 'Efraín González Bermúdez',
    readTime: '7 min',
    content: [
      {
        type: 'paragraph',
        text: 'Estamos viviendo la mayor explosión de productividad en la historia del software gracias a los LLMs. Sin embargo, esta velocidad tiene un costo oculto: una nueva generación de deuda técnica que llamo "Deuda de Entropía Generativa".'
      },
      {
        type: 'heading',
        level: 2,
        text: '1. La Alucinación de la Productividad'
      },
      {
        type: 'paragraph',
        text: 'El hecho de que un desarrollador pueda generar mil líneas de código en segundos no significa que esas líneas sean correctas, seguras o mantenibles. El riesgo reside en la pérdida de contexto: la IA propone soluciones locales, pero a menudo ignora las implicaciones sistémicas globales.'
      },
      {
        type: 'list',
        items: [
          'Acoplamiento invisible entre componentes generados.',
          'Degradación de la coherencia arquitectónica.',
          'Propagación de patrones de seguridad obsoletos.'
        ]
      },
      {
        type: 'heading',
        level: 2,
        text: '2. Estrategias de Gobernanza para el Ingeniero Aumentado'
      },
      {
        type: 'paragraph',
        text: 'Para evitar que la IA convierta nuestras arquitecturas en trampas de legado instantáneas, debemos implementar controles de calidad asistidos también por máquinas, pero gobernados por humanos.'
      },
      {
        type: 'quote',
        text: 'El rol del arquitecto ha pasado de ser el que dibuja el plano a ser el que valida la integridad estructural de una construcción que se levanta sola.'
      },
      {
        type: 'table',
        headers: ['Métrica', 'Era Pre-IA', 'Era IA (2025+)'],
        rows: [
          ['Velocidad de Despliegue', 'Limitada por el humano', 'Limitada por el Pipeline de QA'],
          ['Costo de Mantenimiento', 'Proporcional a la complejidad', 'Exponencial si no hay gobernanza'],
          ['Rol del Desarrollador', 'Creador de sintaxis', 'Curador de arquitectura y lógica']
        ]
      },
      {
        type: 'paragraph',
        text: 'La verdadera ventaja competitiva no será quién genera más código con IA, sino quién logra mantener una arquitectura limpia y resiliente mientras lo hace.'
      }
    ]
  }
];
