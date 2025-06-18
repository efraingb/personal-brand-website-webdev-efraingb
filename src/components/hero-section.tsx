// src/components/hero-section.tsx
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from '@/lib/i18n';

interface HeroSectionProps {
  dict: Dictionary; // Expects dict.hero
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section id="hero" className="relative py-16 md:py-28 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/20">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            {dict.mainTitle}
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-medium text-foreground/90">
            {dict.subtitle}
          </p>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
            {dict.description}
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#projects">
                {dict.viewMyWork} <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-shadow">
              <Link href="#contact">{dict.getInTouch}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
