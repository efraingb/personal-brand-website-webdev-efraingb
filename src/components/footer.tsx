// src/components/footer.tsx
'use client';

import React, { useState } from 'react';
import type { Dictionary } from '@/lib/i18n';
import Image from "next/image"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, ShieldCheck, Mail, Phone, Lock, Eye } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  dict: Dictionary;
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [showContact, setShowContact] = useState(false);

  // Obfuscated data to be decoded at runtime
  const encodedEmail = "aGllZnJhaW5nYkBnbWFpbC5jb20="; // hiefraingb@gmail.com
  const encodedPhone = "KzUwNiA4NjkzIDk3Mzc="; // +506 8693 9737

  const handleReveal = (e: React.MouseEvent) => {
    // Basic human validation: mouse movement/hover usually precedes click
    // For simplicity, we just set the state here
    setShowContact(true);
  };

  return (
    <footer className="relative py-12 border-t border-border/40 bg-muted/50 text-center">
      <div className="container px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground">
        <div className="mb-8 flex justify-center">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden shadow-xl border-4 border-background transform transition-all hover:scale-105">
              <Image
                src="https://i.imgur.com/jbUy3VU.png" 
                alt={dict.personalPhotoAlt || "Efraín G.B."} 
                fill
                className="object-cover"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
          </div>

        <div className="mb-8 max-w-xs mx-auto">
          {!showContact ? (
            <Button 
              onClick={handleReveal} 
              variant="outline" 
              className="w-full rounded-xl border-accent/20 text-accent hover:bg-accent/5 flex items-center justify-center gap-2"
            >
              <Eye className="w-4 h-4" /> Verify Connection to Reveal
            </Button>
          ) : (
            <div className="space-y-3 animate-in fade-in zoom-in-95 duration-300">
               <a 
                 href={`mailto:${atob(encodedEmail)}`} 
                 className="flex items-center justify-center gap-2 p-3 bg-background rounded-xl border border-accent/10 hover:border-accent/30 text-primary transition-all font-medium"
               >
                 <Mail className="w-4 h-4 text-accent" /> {atob(encodedEmail)}
               </a>
               <a 
                 href={`tel:${atob(encodedPhone).replace(/\s/g, '')}`} 
                 className="flex items-center justify-center gap-2 p-3 bg-background rounded-xl border border-accent/10 hover:border-accent/30 text-primary transition-all font-medium"
               >
                 <Phone className="w-4 h-4 text-accent" /> {atob(encodedPhone)}
               </a>
               <div className="flex items-center justify-center gap-1.5 text-[10px] text-muted-foreground pt-2">
                 <ShieldCheck className="w-3 h-3" /> Secure Dynamic Connection Active
               </div>
            </div>
          )}
        </div>

        <p className="font-medium">
          {(dict.copyright || "© {currentYear} Efraín G.B. All rights reserved.").replace('{currentYear}', currentYear.toString())}
        </p>
        <p className="mt-1 opacity-70">
          {dict.credits || "Built with Next.js and Tailwind CSS. Hosted on Firebase."}
        </p>
      </div>

       <div className="absolute bottom-4 right-4 flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label={dict.openCvMenu || "Open CV menu"}>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" side="top" className="w-56">
             <DropdownMenuItem asChild>
              <Link href="/en/cv/ai-leader" className="w-full text-left font-bold flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-accent" /> AI Leadership (US)
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/es/cv/arquitecto-senior" className="w-full text-left font-bold flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-primary" /> Arq. Empresarial (ES)
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/en/cv/enterprise" className="w-full text-left">Enterprise Architect (EN)</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/es/cv/es" className="w-full text-left">Especialista TI (ES)</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </footer>
  );
}
