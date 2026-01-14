// src/app/[lang]/layout.tsx
import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '../globals.css';
import { getDictionary, Dictionary } from '@/lib/i18n';

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    lang: string;
  };
}

export async function generateMetadata({ params }: RootLayoutProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang);
  return {
    title: dict.layout.title,
    description: dict.layout.description,
  };
}

export const viewport: Viewport = {
  themeColor: [ // Example, adjust as needed
    { media: '(prefers-color-scheme: light)', color: '#D4E7F2' }, 
    { media: '(prefers-color-scheme: dark)', color: '#003049' },
  ],
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return (
    <html lang={params.lang} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
