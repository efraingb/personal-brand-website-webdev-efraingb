
// src/components/contact-section.tsx
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types';

interface ContactSectionProps {
  dict: Dictionary; // Expects dict.contactSection
  contactLinksData: LinkItem[]; // Translated data
}

export default function ContactSection({ dict, contactLinksData }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background animate-in fade-in-0 slide-in-from-bottom-12 duration-500 ease-out delay-450">
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
        
        <div className="max-w-lg mx-auto">
          <Card className="p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl">
            <CardContent className="p-0">
              <ul className="space-y-6">
                {contactLinksData.map((item) => (
                  <li key={item.id}>
                    <Button asChild variant="default" size="lg" className="w-full text-base shadow-md hover:shadow-lg transition-all duration-150 ease-in-out active:scale-95 transform">
                      <Link href={item.url} target={item.url.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center justify-center">
                        <Icon name={item.iconName} className="mr-3 h-5 w-5" />
                        {/* Item text is translated from item.text or item.name if text is not present */}
                        <span>{item.text || item.name}</span>
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          {dict.lookingForward}
        </p>
      </div>
    </section>
  );
}
