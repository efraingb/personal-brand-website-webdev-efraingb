
// src/components/footer.tsx
import type { Dictionary } from '@/lib/i18n';

interface FooterProps {
  dict: Dictionary; // Expects dict.footer
}

export default function Footer({ dict }: FooterProps) {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
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
