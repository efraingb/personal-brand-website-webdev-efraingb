// src/components/documents-section.tsx
import { documentLinksData } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons"; // Assuming Icon component is in @/components/icons
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DocumentsSection() {
  return (
    <section id="documents" className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Resources & Profiles
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore books I recommend and find my professional profiles online.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documentLinksData.map((item) => (
            <Card key={item.name} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name={item.iconName} className="h-8 w-8 text-accent" />
                  <CardTitle className="text-xl font-semibold text-primary">{item.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                {item.description && (
                  <CardDescription className="text-sm text-foreground/80 leading-relaxed">
                    {item.description}
                  </CardDescription>
                )}
              </CardContent>
              <CardContent className="pt-0"> {/* Use CardContent for padding consistency for the button */}
                <Button asChild variant="outline" className="w-full">
                  <Link href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.iconName === 'BookOpen' ? 'View on Amazon' : 'Visit Profile'}
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
