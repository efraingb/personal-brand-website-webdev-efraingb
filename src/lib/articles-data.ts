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
        text: 'El posicionamiento orgánico dentro de los LLMs requiere una reingeniería profunda del código, de la narrativa de marca y de las relaciones públicas digitales. Aquellas organizaciones que logren dominar la inyección de entidades y el Information Gain se consolidarán como las respuestas por defecto.'
      }
    ]
  }
];
