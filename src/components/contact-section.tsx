// src/components/contact-section.tsx
import { contactLinksData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <Card className="p-6 sm:p-8 shadow-xl rounded-xl">
            <CardContent className="p-0">
              <ul className="space-y-6">
                {contactLinksData.map((item) => (
                  <li key={item.name}>
                    <Button asChild variant="default" size="lg" className="w-full text-base shadow-md hover:shadow-lg transition-all duration-150 ease-in-out active:scale-95 transform">
                      <Link href={item.url} target={item.url.startsWith('mailto:') ? '_self' : '_blank'} rel="noopener noreferrer" className="flex items-center justify-center">
                        <Icon name={item.iconName} className="mr-3 h-5 w-5" />
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
          Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
}
