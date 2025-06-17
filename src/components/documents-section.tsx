
// src/components/documents-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types'; // Ensure LinkItem is imported

interface DocumentsSectionProps {
  dict: Dictionary; // Expects dict.documentsSection
  documentLinksData: LinkItem[]; // Translated data
}

export default function DocumentsSection({ dict, documentLinksData }: DocumentsSectionProps) {
  return (
    <section id="documents" className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {documentLinksData.map((item) => (
            <Card 
              key={item.id} 
              className="group flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl w-full md:w-[calc(50%_-_1rem)] max-w-lg"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name={item.iconName} className="h-8 w-8 text-accent" />
                  {/* Item name is translated from item.name which holds the key */}
                  <CardTitle className="text-xl font-semibold text-primary">{item.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Item description is translated from item.description which holds the key */}
                {item.description && (
                  <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </CardDescription>
                )}
              </CardContent>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    {/* Item buttonText is translated from item.buttonText which holds the key */}
                    {item.buttonText || (item.iconName === 'BookOpen' ? dict.defaultViewDetails : dict.defaultVisitProfile)}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
