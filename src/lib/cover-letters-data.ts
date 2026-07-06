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
  },
  {
    slug: 'kaiser-1565',
    recipientName: 'Shivani M. Gharat / Recruitment Team',
    companyName: 'Kaiser Permanente',
    jobTitle: 'Architect Lead',
    jobId: '1565',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    content: [
      "Dear Recruitment Team,",
      "I am writing to express my interest in the Architect Lead position (Job ID: 1565) at Kaiser Permanente, as referred by Alexandre Lozada. With 15 years of IT experience and a strong background in security architecture and cloud governance, I am eager to contribute to Kaiser Permanente’s mission of providing secure, high-quality healthcare solutions.",
      "In my recent roles, I have specialized in designing resilient cloud architectures (Azure and GCP) while ensuring strict adherence to security benchmarks (CIS, NIST). I have a deep understanding of application domains and I am experienced in establishing architectural standards that balance innovation with production reliability.",
      "My approach to security architecture is data-driven and outcome-oriented. I have successfully led cross-functional teams through complex digital transformations, navigating regulated frameworks such as ISO 27000. I am particularly interested in how Kaiser Permanente leverages cloud networking and data protection to secure critical healthcare data.",
      "I am confident that my technical leadership and my ability to communicate complex findings to both executive and technical audiences will make me a valuable asset to your architecture team. Thank you for your time and consideration.",
      "Sincerely,",
      "Efraín González Bermúdez"
    ]
  }
];
