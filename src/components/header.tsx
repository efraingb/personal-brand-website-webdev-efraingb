
// src/components/header.tsx
"use client";

import Link from 'next/link';
// import { navLinksData } from '@/lib/data'; // Now passed as prop
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from '@/components/ui/sheet';
import { Menu, Feather } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';
import type { Dictionary } from '@/lib/i18n';
import type { NavLink } from '@/lib/types';
import LanguageSwitcher from './language-switcher';

interface HeaderProps {
  dict: Dictionary; // Expects dict.header
  navLinks: NavLink[];
  lang: string;
  langSwitcherDict: Dictionary; // Expects dict.languageSwitcher
}

export default function Header({ dict, navLinks, lang, langSwitcherDict }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 sm:px-6 lg:px-8 flex h-16 max-w-screen-2xl items-center justify-between">
        <Link 
          href={`/${lang}#hero`}
          className="flex items-center space-x-3 text-primary hover:text-accent transition-colors active:scale-95 transform duration-75 ease-out"
          onClick={() => isMenuOpen && setIsMenuOpen(false)}
        >
          <Feather className="h-6 w-6" />
          <span className="font-bold text-xl">{dict.logoText || "Efraín G.B."}</span>
        </Link>
        
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/${lang}${link.href}`} // Ensure hash links are prefixed with lang
              className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors active:opacity-75"
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher dict={langSwitcherDict} currentLang={lang} />
        </nav>

        <div className="lg:hidden flex items-center">
          <LanguageSwitcher dict={langSwitcherDict} currentLang={lang} />
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={dict.toggleMenu || "Toggle menu"}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <SheetHeader>
                <SheetTitle className="sr-only">{dict.mobileMenuTitle || "Navigation Menu"}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 pt-8">
              <Link 
                href={`/${lang}#hero`}
                className="flex items-center space-x-3 text-primary mb-4 active:scale-95 transform duration-75 ease-out" 
                onClick={() => setIsMenuOpen(false)}
              >
                <Feather className="h-6 w-6" />
                <span className="font-bold text-xl">{dict.logoText || "Efraín G.B."}</span>
              </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={`/${lang}${link.href}`} // Ensure hash links are prefixed with lang
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
