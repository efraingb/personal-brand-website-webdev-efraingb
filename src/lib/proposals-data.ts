import type { Proposal } from './types';

export const proposalsData: Proposal[] = [
  {
    slug: 'edtech-menta-demo',
    clientName: 'Socio Estratégico',
    projectName: 'Implementación de Ecosistema de Tutoría con IA',
    date: '20 de febrero, 2025',
    validUntil: '20 de marzo, 2025',
    summary: 'Propuesta estratégica para la implementación de un motor de tutoría personalizado basado en la arquitectura de Menta IA, diseñado para escalar el aprendizaje y la retención mediante IA Generativa.',
    objectives: [
      'Escalar la educación personalizada mediante agentes de IA.',
      'Optimizar costos operativos mediante automatización inteligente.',
      'Implementar analítica pedagógica en tiempo real.'
    ],
    scope: [
      'Desarrollo de Agentes de IA personalizados.',
      'Configuración de infraestructura cloud (Firebase & Google Cloud).',
      'Integración con sistemas LMS existentes.',
      'Capacitación técnica para el equipo administrativo.'
    ],
    phases: [
      {
        title: 'Fase 1: Arquitectura y Descubrimiento',
        duration: '2 semanas',
        items: ['Análisis de requerimientos', 'Diseño de arquitectura cloud', 'Preparación de datasets']
      },
      {
        title: 'Fase 2: Desarrollo e Implementación',
        duration: '6 semanas',
        items: ['Entrenamiento del motor de IA', 'Integraciones vía API', 'Personalización de interfaz']
      },
      {
        title: 'Fase 3: Optimización y Lanzamiento',
        duration: '2 semanas',
        items: ['Pruebas de usuario (UAT)', 'Despliegue final', 'Capacitación']
      }
    ],
    investment: [
      { concept: 'Diseño Estratégico y Arquitectura', amount: '2,500' },
      { concept: 'Desarrollo de Motor de IA Custom', amount: '7,500' },
      { concept: 'Infraestructura y Soporte Anual', amount: '1,500' }
    ],
    currency: 'USD',
    total: '11,500'
  }
];
