// src/app/cv/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { cvData } from '@/lib/cv-data';
import type { CVItem, CV } from '@/lib/types';
import { Icon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import CvPrintButton from '@/components/cv-print-button';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';

interface CVPageProps {
  params: {
    slug: string;
    lang: string;
  };
}

const CVDescription = ({ description }: { description: string | string[] }) => {
  if (Array.isArray(description)) {
    return (
      <ul className="list-disc list-outside space-y-1 pl-5">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className="whitespace-pre-wrap">{description}</p>;
};

const CVSkillItem = ({ item }: { item: CVItem }) => (
    <div>
        <h4 className="font-semibold text-primary">{item.title}</h4>
        {Array.isArray(item.description) ? (
            <p className="text-sm">{item.description.join(' · ')}</p>
        ) : (
            <p className="text-sm">{item.description}</p>
        )
        }
    </div>
);


export default async function CVPage({ params }: CVPageProps) {
  const cv = cvData.find((cv) => cv.slug === params.slug);
  const dict = await getDictionary(params.lang);

  if (!cv) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground font-sans print:bg-white">
      <div className="max-w-4xl mx-auto p-4 sm:p-8 lg:p-12 print-container">
        
        {/* CV Header */}
        <header className="flex flex-col items-center text-center mb-8 print:mb-6 border-b border-border pb-6 print:pb-4">
          <h1 className="text-4xl font-bold text-primary tracking-tight">{cv.name}</h1>
          <h2 className="text-lg font-medium text-accent mt-1">{cv.title}</h2>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm text-muted-foreground">
            {cv.contact.phone && <a href={cv.contact.phone.url} className="hover:text-primary flex items-center gap-1.5"><Icon name="Phone" className="w-3 h-3"/>{cv.contact.phone.text}</a>}
            {cv.contact.email && <a href={cv.contact.email.url} className="hover:text-primary flex items-center gap-1.5"><Icon name="Mail" className="w-3 h-3"/>{cv.contact.email.text}</a>}
            {cv.contact.website && <Link href={`/${params.lang}`} className="hover:text-primary flex items-center gap-1.5"><Icon name="Globe" className="w-3 h-3"/>{cv.contact.website.text}</Link>}
            {cv.contact.linkedin && <a href={cv.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-1.5"><Icon name="Linkedin" className="w-3 h-3"/>{cv.contact.linkedin.text}</a>}
          </div>
        </header>

        {/* Floating Print Button */}
        <div className="fixed bottom-6 right-6 print-hidden">
            <CvPrintButton text={dict.cv?.saveAsPdf || 'Save as PDF'} />
        </div>


        {/* Main Content */}
        <main>
          {/* Summary */}
          <section className="mb-8 print:mb-6">
            <p className="text-center text-foreground/80 leading-relaxed">{cv.summary}</p>
          </section>

          {/* Sections */}
          {cv.sections.map((section) => (
            <section key={section.id} className="mb-6 print:mb-5">
              <h3 className="text-xl font-bold text-primary border-b-2 border-accent/50 pb-1 mb-3 print:text-lg">{section.title}</h3>
              {section.isTwoColumns ? (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {section.items.map(item => <CVSkillItem key={item.id} item={item} />)}
                 </div>
              ) : (
                <div className="space-y-4">
                    {section.items.map((item) => (
                    <div key={item.id}>
                        <div className="flex justify-between items-baseline">
                        <h4 className="text-base font-semibold text-foreground">
                          {item.title}
                          {item.titleLink && (
                            <a href={item.titleLink.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
                              {item.titleLink.text}
                            </a>
                          )}
                          {item.subtitle && <span className="text-muted-foreground font-normal"> | {item.subtitle}</span>}
                        </h4>
                        {item.date && <p className="text-sm text-muted-foreground font-mono whitespace-nowrap">{item.date}</p>}
                        </div>
                        {item.description && (
                            <div className="text-sm text-foreground/80 mt-1">
                               <CVDescription description={item.description} />
                            </div>
                        )}
                    </div>
                    ))}
                </div>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
