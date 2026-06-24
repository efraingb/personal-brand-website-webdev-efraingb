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
      "I am writing to express my strong interest in the Enterprise Architecture Manager position (Job ID: 1713) at Kaiser Permanente / Risant Health. With 15 years of experience in technical architecture, software development, and strategic IT leadership, I have consistently focused on bridging the gap between business objectives and technical execution in complex organizational environments.",
      "Throughout my career, I have orchestrated large-scale digital ecosystems for institutions such as ULACIT and worked with international platforms like Kohl's and Establishment Labs. My recent work has been centered on the strategic implementation of AI-powered solutions, where I have led the development of proprietary landing engines and educational architectures that prioritize scalability and governance.",
      "As an MBA candidate in Technology Management with a dual-master focus in Big Data and Project Management, I approach Enterprise Architecture not just as a technical challenge, but as a strategic asset. I am particularly drawn to Kaiser Permanente's commitment to innovation and health excellence, and I am confident that my experience in cloud infrastructure (GCP/Firebase), cross-functional team leadership, and IT governance will allow me to contribute significantly to Risant Health's mission.",
      "I am eager to bring my unique blend of technical mastery and strategic vision to your team. Thank you for your time and consideration. I look forward to the possibility of discussing how my background aligns with your current and future architecture goals.",
      "Sincerely,",
      "Efraín González Bermúdez"
    ]
  }
];
