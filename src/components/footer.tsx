
// src/components/footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 border-t border-border/40 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p className="animate-in fade-in duration-700 ease-out">&copy; {currentYear} Efraín G.B. All rights reserved.</p>
        <p className="mt-1 animate-in fade-in duration-700 ease-out delay-150">Built with Next.js and Tailwind CSS. Hosted on Firebase.</p>
      </div>
    </footer>
  );
}
