// src/components/hero-section.tsx
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import type { Dictionary } from '@/lib/i18n';

interface HeroSectionProps {
  dict: Dictionary; // Expects dict.hero
}

export default function HeroSection({ dict }: HeroSectionProps) {
  return (
    <section id="hero" className="relative py-16 md:py-28 min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(var(--foreground)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      
      <div className="container relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block animate-in fade-in slide-in-from-top-4 duration-1000">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
              {dict.mainTitle}
            </h1>
          </div>
          
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground/90 tracking-tight">
              {dict.subtitle}
            </p>
            <p className="mt-4 text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              {dict.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in zoom-in-95 duration-1000 delay-500">
            <Button asChild size="lg" className="h-12 px-8 text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95 bg-primary text-primary-foreground">
              <Link href="#projects">
                {dict.viewMyWork} <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-8 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 border-primary/20 hover:bg-secondary/10">
              <Link href="#contact">
                {dict.getInTouch}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
