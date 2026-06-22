import type { Proposal } from './types';

export const proposalsData: Proposal[] = [
  {
    slug: 'edtech-menta-demo',
    clientName: 'Strategic Partner',
    projectName: 'AI Tutoring Ecosystem Implementation',
    date: 'February 20, 2025',
    validUntil: 'March 20, 2025',
    summary: 'Strategic proposal for the implementation of a custom AI-driven tutoring engine based on the Menta IA architecture, designed to scale personalized learning for thousands of users.',
    objectives: [
      'Scale personalized education through Generative AI.',
      'Reduce infrastructure costs while increasing student engagement.',
      'Implement real-time pedagogical tracking and analytics.'
    ],
    scope: [
      'Custom AI Agent development.',
      'Cloud infrastructure setup (Firebase & Google Cloud).',
      'Integration with existing LMS systems.',
      'Technical training for administrative staff.'
    ],
    phases: [
      {
        title: 'Phase 1: Architecture & Discovery',
        duration: '2 weeks',
        items: ['Initial requirement analysis', 'Infrastructure blueprint', 'Dataset preparation']
      },
      {
        title: 'Phase 2: Core Development',
        duration: '6 weeks',
        items: ['AI Engine training', 'API Integrations', 'Frontend customization']
      },
      {
        title: 'Phase 3: Quality & Launch',
        duration: '2 weeks',
        items: ['UAT testing', 'Final deployment', 'Staff training']
      }
    ],
    investment: [
      { concept: 'Strategic Design & Architecture', amount: '2,500' },
      { concept: 'Custom AI Engine Development', amount: '7,500' },
      { concept: 'Infrastructure & Support (Annual)', amount: '1,500' }
    ],
    currency: 'USD',
    total: '11,500'
  }
];
