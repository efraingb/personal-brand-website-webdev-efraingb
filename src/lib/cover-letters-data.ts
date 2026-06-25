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
      "I am writing to express my strong interest in the Enterprise Architecture Manager position (Job ID: 1713) at Kaiser Permanente / Risant Health. With 15 years of experience in systems architecture and strategic IT leadership, I have specialized in transforming business requirements into resilient and scalable digital solutions.",
      "In my recent work with institutional architectures at ULACIT and the regional expansion of AI-driven platforms, I have focused on building digital ecosystems that prioritize data integrity and seamless integration. My experience leading technical teams and collaborating with stakeholders aligns with Risant Health's mission to optimize value-based care through architectural excellence.",
      "As an MBA candidate in Technology Management with a focus on Big Data and Project Management, I approach Enterprise Architecture as a strategic driver of efficiency. I am adept at implementing IT standards and leveraging cloud infrastructure to reduce technical debt and accelerate digital maturity.",
      "I am confident that my background in architectural design and strategic vision will allow me to contribute significantly to your roadmap. I look forward to the opportunity to discuss how my experience can support Kaiser Permanente's continued innovation.",
      "Sincerely,",
      "Efraín González Bermúdez"
    ]
  }
];
