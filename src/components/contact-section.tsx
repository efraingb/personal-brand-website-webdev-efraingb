
// src/components/contact-section.tsx
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types';

interface ContactSectionProps {
  dict: Dictionary; // Expects dict.contactSection
  contactLinksData: LinkItem[]; // Translated data
}

export default function ContactSection({ dict, contactLinksData }: ContactSectionProps) {
  const services = [
    dict.service1,
    dict.service2,
    dict.service3,
    dict.service4,
  ].filter(Boolean);

  return (
    <section id="contact" className="py-16 md:py-24 bg-background animate-in fade-in-0 slide-in-from-bottom-12 duration-500 ease-out delay-450">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Services/Value Proposition Block */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-4">{dict.servicesTitle}</h3>
            <ul className="space-y-4">
              {services.map((service, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/90">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-lg">{service}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground italic pt-4">
              {dict.lookingForward}
            </p>
          </div>

          {/* Contact Links Card */}
          <Card className="p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out border-accent/20 rounded-2xl bg-muted/5">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 gap-4">
                {contactLinksData.map((item) => (
                  <Button 
                    key={item.id}
                    asChild 
                    variant="default" 
                    size="lg" 
                    className="w-full text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <Link href={item.url} target={item.url.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center justify-center">
                      <Icon name={item.iconName} className="mr-3 h-5 w-5" />
                      <span>{item.text || item.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
