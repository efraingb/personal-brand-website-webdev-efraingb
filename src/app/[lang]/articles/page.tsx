import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/lib/i18n';
import { navLinksData as getRawNavLinksData } from '@/lib/data';
import { articlesData } from '@/lib/articles-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

interface ArticlesPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav?.[link.labelKey] || link.labelKey,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict.languageSwitcher} />
      
      <main className="flex-grow container px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary mb-4">
              {dict.nav?.booksAndResources || 'Knowledge Base'}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Exploraciones estratégicas sobre IA, arquitectura de sistemas y el futuro de la economía digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articlesData.map((article) => (
              <Card key={article.slug} className="group hover:border-accent/50 transition-all hover:shadow-2xl overflow-hidden rounded-3xl border-border">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 border-none px-3 py-1">
                      {article.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <CardDescription className="text-base text-muted-foreground mb-6 line-clamp-3">
                    {article.description}
                  </CardDescription>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <Button asChild variant="ghost" className="group/btn text-accent hover:text-accent hover:bg-accent/10 p-0 h-auto">
                      <Link href={`/${lang}/articles/${article.slug}`} className="flex items-center gap-2">
                        Leer Artículo <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-secondary/10 border border-border text-center">
             <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
             <h3 className="text-2xl font-bold text-primary mb-2">¿Buscas algo más práctico?</h3>
             <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
               He escrito libros y guías descargables para ayudarte a implementar estas tecnologías hoy mismo.
             </p>
             <Button asChild className="rounded-xl">
               <Link href="#documents">Explorar Mis Libros</Link>
             </Button>
          </div>
        </div>
      </main>

      <Footer dict={dict.footer} />
    </div>
  );
}
