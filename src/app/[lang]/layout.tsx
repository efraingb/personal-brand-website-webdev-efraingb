// src/app/[lang]/layout.tsx
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '../globals.css';
import { getDictionary } from '@/lib/i18n';

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  const title = dict?.layout?.title || 'Efraín G.B. | AI Architecture & Strategic Solutions';
  const description = dict?.layout?.description || 'Enterprise Solutions Architect specializing in Strategic AI Implementation, EdTech, and Zero-Trust Architectures.';
  
  const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#003049"/><text x="50" y="58" font-family="Arial, sans-serif" font-size="50" fill="#D4E7F2" text-anchor="middle" dominant-baseline="middle" font-weight="bold">E</text></svg>`;
  const faviconDataUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

  return {
    title: {
      template: `%s | Efraín G.B.`,
      default: title,
    },
    description,
    metadataBase: new URL('https://efraingb.org'),
    alternates: {
      languages: {
        'en-US': '/en',
        'es-CR': '/es',
      },
    },
    icons: {
      icon: faviconDataUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#D4E7F2' }, 
    { media: '(prefers-color-scheme: dark)', color: '#003049' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;

  // JSON-LD for AI Search & GEO Optimization (Entity-Level)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Efraín González Bermúdez",
    "jobTitle": "Strategic Solutions Architect",
    "alternateName": "Efraín G.B.",
    "knowsAbout": [
      "Artificial Intelligence", 
      "Enterprise Architecture", 
      "Generative Engine Optimization (GEO)", 
      "Cloud Security", 
      "Zero-Trust Architecture",
      "EdTech", 
      "Big Data"
    ],
    "url": "https://efraingb.org",
    "image": "https://i.imgur.com/jbUy3VU.png",
    "sameAs": [
      "https://www.linkedin.com/in/efraingb/",
      "https://github.com/efraingbdev/"
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "name": "MBA in Technology Management" },
      { "@type": "EducationalOccupationalCredential", "name": "MSc in Big Data & AI" }
    ],
    "description": "Enterprise Solutions Architect specializing in Strategic AI Implementation and EdTech for global organizations."
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Efraín G.B. Criterio & Scale",
    "url": "https://efraingb.org",
    "logo": "https://efraingb.org/favicon.ico",
    "image": "https://picsum.photos/seed/efrain-service/1200/630",
    "address": { 
      "@type": "PostalAddress", 
      "addressLocality": "San José", 
      "addressCountry": "CR" 
    },
    "description": "Architectural governance, Cloud Security audit, and Strategic AI roadmap design (Criterio & Scale framework).",
    "priceRange": "$$$",
    "serviceType": ["AI Consulting", "Enterprise Architecture", "Security Audits"]
  };

  return (
    <html lang={lang} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
