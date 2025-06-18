// src/components/footer.tsx
import type { Dictionary } from '@/lib/i18n';
import Image from "next/image"; 

interface FooterProps {
  dict: Dictionary; // Expects dict.footer
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-muted/50 text-center">
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
    </footer>
  );
}
