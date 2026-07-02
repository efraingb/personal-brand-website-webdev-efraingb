// src/components/footer.tsx
import type { Dictionary } from '@/lib/i18n';
import Image from "next/image"; 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FileText, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";


interface FooterProps {
  dict: Dictionary; // Expects dict.footer
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative py-8 border-t border-border/40 bg-muted/50 text-center">
      <div className="container px-4 sm:px-6 lg:px-8 text-sm text-muted-foreground">
        <div className="mb-6 flex justify-center">
            <div className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden shadow-xl border-4 border-background transform transition-all hover:scale-105">
              <Image
                src="https://i.imgur.com/jbUy3VU.png" 
                alt={dict.personalPhotoAlt || "Efraín G.B. - Personal Photo"} 
                fill
                className="object-cover"
                data-ai-hint="portrait person"
                sizes="(max-width: 640px) 96px, 128px"
              />
            </div>
          </div>
        <p className="animate-in fade-in duration-700 ease-out">
          {(dict.copyright || "© {currentYear} Efraín G.B. All rights reserved.").replace('{currentYear}', currentYear.toString())}
        </p>
        <p className="mt-1 animate-in fade-in duration-700 ease-out delay-150">
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
