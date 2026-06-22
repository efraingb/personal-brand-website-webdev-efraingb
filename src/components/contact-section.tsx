
// src/components/contact-section.tsx
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types';
import ContactForm from "./contact-form";

interface ContactSectionProps {
  dict: any; // Expects dict.contactSection
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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column: Form (The Lead Capture Engine) */}
          <div className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-lg">
                <MessageSquare className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary">{dict.formTitle || "Project Inquiry"}</h3>
            </div>
            <ContactForm dict={dict.form || {}} />
          </div>

          {/* Right Column: Services & Direct Channels */}
          <div className="space-y-12 order-1 lg:order-2">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6 flex items-center gap-2">
                {dict.servicesTitle}
                <ArrowRight className="w-5 h-5 text-accent" />
              </h3>
              <ul className="space-y-4 mb-8">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-foreground/90 group">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg">{service}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground italic border-l-4 border-accent/20 pl-4">
                {dict.lookingForward}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">{dict.directLinksTitle || "Direct Channels"}</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactLinksData.map((item) => (
                  <Button 
                    key={item.id}
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="w-full text-sm shadow-sm hover:shadow-md transition-all active:scale-[0.98] rounded-xl border-accent/10"
                  >
                    <Link href={item.url} target={item.url.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center justify-center">
                      <Icon name={item.iconName} className="mr-3 h-4 w-4 text-accent" />
                      <span>{item.text || item.name}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
