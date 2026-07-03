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
      "I am writing to express my strong interest in the Enterprise Architecture Manager position (Job ID: 1713) at Kaiser Permanente / Risant Health. With 15 years of experience designing and implementing complex digital systems, I have specialized in bridging business objectives with technical execution.",
      "In my tenure leading technical strategy for organizations such as ULACIT and high-growth startups, I have built multi-site institutional ecosystems that prioritize security, scalability, and data-driven results. My expertise in architectural governance and cloud infrastructure aligns directly with Risant Health's mission to optimize value-based care through technical excellence.",
      "As an MBA candidate in Technology Management with a solid foundation in Big Data and Project Management, I approach Enterprise Architecture as a strategic driver of efficiency. I am adept at defining technical standards and managing technical debt to ensure long-term sustainability and operational growth.",
      "I am confident that my background in architectural design and my strategic vision will allow me to contribute significantly to your roadmap. I look forward to the opportunity to discuss how my experience can support Kaiser Permanente's continued innovation.",
      "Sincerely,",
      "Efraín González Bermúdez"
    ]
  }
];
