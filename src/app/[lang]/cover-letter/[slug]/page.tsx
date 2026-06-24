import { notFound } from 'next/navigation';
import { coverLettersData } from '@/lib/cover-letters-data';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import CvPrintButton from '@/components/cv-print-button';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import type { Metadata } from 'next';

interface CoverLetterPageProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateMetadata({ params }: CoverLetterPageProps): Promise<Metadata> {
  const { slug } = await params;
  const letter = coverLettersData.find((l) => l.slug === slug);

  if (!letter) {
    return { title: 'Cover Letter Not Found' };
  }

  return {
    title: `Cover Letter | ${letter.jobTitle} - ${letter.companyName}`,
  };
}

export default async function CoverLetterPage({ params }: CoverLetterPageProps) {
  const { slug, lang } = await params;
  const letter = coverLettersData.find((l) => l.slug === slug);
  const dict = await getDictionary(lang);

  if (!letter) {
    notFound();
  }

  return (
    <div className="bg-white text-slate-900 font-sans print:bg-white min-h-screen">
      <div className="max-w-3xl mx-auto p-8 sm:p-12 lg:p-16 print-container">
        
        {/* Header */}
        <header className="mb-12 border-b pb-8">
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Efraín González Bermúdez</h1>
          <p className="text-lg text-slate-600 font-medium">Enterprise Architect | Sr. IT Consultant</p>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Icon name="MapPin" className="w-4 h-4" /> San José, Costa Rica
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" className="w-4 h-4" /> +506 8693 9737
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" className="w-4 h-4" /> hiefraingb@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Globe" className="w-4 h-4" /> EfrainGB.org
            </div>
          </div>
        </header>

        {/* Date & Recipient */}
        <div className="mb-10 space-y-1">
          <p className="font-medium">{letter.date}</p>
          <div className="pt-6">
            <p className="font-bold">{letter.recipientName}</p>
            <p className="text-slate-600">{letter.companyName}</p>
            {letter.jobId && <p className="text-slate-500 text-sm">Ref: Job ID {letter.jobId}</p>}
          </div>
        </div>

        {/* Body */}
        <main className="space-y-6 text-slate-700 leading-relaxed text-base">
            <p className="font-semibold text-slate-900">Re: Application for {letter.jobTitle}</p>
            {letter.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </main>

        {/* Footer Signature (Print Only) */}
        <footer className="mt-16 pt-8 border-t border-slate-100 hidden print:block">
            <p className="text-sm text-slate-400">Application submitted via EfrainGB.org/en/cv/enterprise</p>
        </footer>

        {/* Floating Controls */}
        <div className="fixed bottom-6 right-6 print-hidden flex gap-3">
            <Button variant="outline" asChild>
                <Link href={`/${lang}/cv/enterprise`}>Back to CV</Link>
            </Button>
            <CvPrintButton text={dict.cv?.saveAsPdf || 'Save as PDF'} />
        </div>
      </div>
    </div>
  );
}
