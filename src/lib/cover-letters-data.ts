import type { CoverLetter } from './types';

export const coverLettersData: CoverLetter[] = [
  {
    slug: 'kaiser-1713',
    recipientName: 'Hiring Committee',
    companyName: 'Kaiser Permanente / Risant Health',
    jobTitle: 'Enterprise Architecture Manager',
    jobId: '1713',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    content: [
      "Dear Hiring Committee,",
      "I am writing to express my strong interest in the Enterprise Architecture Manager position (Job ID: 1713) at Kaiser Permanente / Risant Health. With over 15 years of experience in systems architecture, technical governance, and strategic IT leadership, I have specialized in transforming complex business requirements into resilient, high-scale digital ecosystems.",
      "In my most recent leadership roles, including my work with the regional expansion of AI-driven platforms and my tenure at ULACIT, I have orchestrated multi-site institutional architectures that prioritize data integrity, scalability, and seamless integration. My experience managing cross-functional technical teams and external vendors aligns directly with Risant Health's mission to optimize value-based care through architectural excellence.",
      "As an MBA candidate in Technology Management with a dual-master focus in Big Data and Project Management, I approach Enterprise Architecture as a strategic driver of organizational efficiency. I am particularly adept at implementing IT governance frameworks and leveraging cloud infrastructure (GCP/Firebase) to reduce technical debt and accelerate digital maturity.",
      "I am confident that my unique blend of deep technical mastery and strategic vision will allow me to contribute significantly to the Risant Health roadmap. I look forward to the opportunity to discuss how my background in global architectural orchestration can support Kaiser Permanente's continued innovation.",
      "Sincerely,",
      "Efraín González Bermúdez"
    ]
  }
];
