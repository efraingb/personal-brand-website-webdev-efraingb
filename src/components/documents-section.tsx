
// src/components/documents-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image"; // Import Image
import { ExternalLink } from "lucide-react";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types'; 

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
                <div className="flex items-start gap-4">
                  {item.imageUrl && (
                    <div className="relative h-24 w-16 flex-shrink-0 rounded-md overflow-hidden shadow-md">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.name} // item.name is already a translation key
                        fill 
                        className="object-cover" 
                        data-ai-hint={item.dataAiHint || "document image"}
                        sizes="64px"
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                     {/* Original icon and title structure (can be kept or adapted) */}
                    <div className="flex items-center gap-3 mb-1">
                        <Icon name={item.iconName} className="h-6 w-6 text-accent" />
                        <CardTitle className="text-xl font-semibold text-primary">{item.name}</CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow pt-2"> {/* Adjusted padding if image is in header */}
                {item.description && (
                  <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </CardDescription>
                )}
              </CardContent>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
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
