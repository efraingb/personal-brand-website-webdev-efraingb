// src/components/language-switcher.tsx
"use client";

import { usePathname, useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from 'lucide-react';
import type { Dictionary } from '@/lib/i18n';

interface LanguageSwitcherProps {
  dict: Dictionary; // For "English", "Español" labels
  currentLang: string;
}

export default function LanguageSwitcher({ dict, currentLang }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname(); // e.g., /en/about or /es/about or /en

  const locales = [
    { code: 'en', name: dict.english || 'English' },
    { code: 'es', name: dict.spanish || 'Español' },
  ];

  const switchLanguage = (newLocale: string) => {
    if (currentLang === newLocale) return;

    // pathname is guaranteed by middleware to be /<currentLang> or /<currentLang>/...
    // Remove the current locale prefix
    const pathWithoutLocale = pathname.startsWith(`/${currentLang}/`)
      ? pathname.substring(`/${currentLang}/`.length)
      : (pathname === `/${currentLang}` ? '' : pathname); // Handles if pathname is just /en or something unexpected

    let newPath = `/${newLocale}`;
    if (pathWithoutLocale && pathWithoutLocale !== '/') { // Check if there's more than just the root
        newPath += `/${pathWithoutLocale}`;
    } else if (pathWithoutLocale === '/' && newLocale) { // Handles root properly
        newPath = `/${newLocale}`;
    }


    // Simplified path construction:
    // If current path is /en, new is /es.
    // If current path is /en/foo, new is /es/foo.
    let finalNewPath = '';
    if (pathname === `/${currentLang}`) {
      finalNewPath = `/${newLocale}`;
    } else {
      finalNewPath = pathname.replace(`/${currentLang}`, `/${newLocale}`);
    }
    
    router.push(finalNewPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={dict.changeLanguage || "Change language"}>
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale.code}
            onClick={() => switchLanguage(locale.code)}
            disabled={currentLang === locale.code}
          >
            {locale.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
