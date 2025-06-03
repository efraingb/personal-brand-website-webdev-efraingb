// src/components/header.tsx
"use client";

import Link from 'next/link';
import { navLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react';
import React from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="#hero" className="flex items-center space-x-2 text-primary hover:text-accent transition-colors">
          <Feather className="h-6 w-6" />
          <span className="font-bold text-xl">Efraín G.B.</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader className="sr-only">
                <SheetTitle>Menú de Navegación</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-8">
              <Link href="#hero" className="flex items-center space-x-2 text-primary mb-4" onClick={() => setIsMenuOpen(false)}>
                <Feather className="h-6 w-6" />
                <span className="font-bold text-xl">Efraín G.B.</span>
              </Link>
                {navLinksData.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-2 py-1 text-lg font-medium text-foreground hover:text-accent transition-colors"
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
