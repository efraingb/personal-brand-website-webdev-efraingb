
// src/components/header.tsx
"use client";

import Link from 'next/link';
import { navLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 max-w-screen-2xl items-center justify-between">
        <Link 
          href="#hero" 
          className="flex items-center space-x-3 text-primary hover:text-accent transition-colors active:scale-95 transform duration-75 ease-out"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          <Feather className="h-6 w-6" />
          <span className="font-bold text-xl">Efraín G.B.</span>
        </Link>
        
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors active:opacity-75"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="lg:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-8">
              <Link 
                href="#hero" 
                className="flex items-center space-x-3 text-primary mb-4 active:scale-95 transform duration-75 ease-out" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Feather className="h-6 w-6" />
                <span className="font-bold text-xl">Efraín G.B.</span>
              </Link>
                {navLinksData.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-2 py-1 text-lg font-medium text-foreground hover:text-accent rounded-md transition-all",
                      "active:bg-accent/10 active:text-accent" 
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
