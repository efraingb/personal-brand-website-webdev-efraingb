// src/app/[lang]/articles/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { articlesData } from '@/lib/articles-data';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/lib/i18n';
import { navLinksData as getRawNavLinksData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import type { Metadata } from 'next';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug, lang } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  const dict = await getDictionary(lang);

  if (!article) notFound();

  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav?.[link.labelKey] || link.labelKey,
  }));

  // Article JSON-LD for Search Engines
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Person",
      "name": "Efraín G.B."
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict.languageSwitcher} />
      
      <main className="flex-grow py-12 md:py-20">
        <article className="container max-w-3xl px-4">
          <Link href={`/${lang}/articles`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver a Artículos
          </Link>

          <header className="mb-12">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20 border-none mb-6 px-4 py-1">
              {article.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary mb-8 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                   <User className="w-4 h-4" />
                </div>
                <span className="font-medium text-foreground">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {article.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {article.readTime} de lectura
              </div>
            </div>
          </header>

          <div className="prose prose-slate prose-lg max-w-none dark:prose-invert">
            {article.content.map((block, i) => {
              switch (block.type) {
                case 'paragraph':
                  return <p key={i} className="text-lg leading-relaxed text-foreground/80 mb-6">{block.text}</p>;
                case 'heading':
                  const Tag = block.level === 1 ? 'h1' : block.level === 2 ? 'h2' : 'h3';
                  return (
                    <Tag key={i} className="text-2xl md:text-3xl font-bold text-primary mt-12 mb-6 scroll-m-20">
                      {block.text}
                    </Tag>
                  );
                case 'list':
                  return (
                    <ul key={i} className="space-y-4 my-8">
                      {block.items?.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-foreground/80">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                case 'quote':
                  return (
                    <blockquote key={i} className="border-l-4 border-accent bg-accent/5 p-8 my-10 rounded-r-2xl italic text-xl text-primary font-medium">
                      "{block.text}"
                    </blockquote>
                  );
                case 'table':
                  return (
                    <div key={i} className="my-10 overflow-hidden border border-border rounded-2xl bg-card">
                      <Table>
                        <TableHeader className="bg-muted/50">
                          <TableRow>
                            {block.headers?.map((h, j) => (
                              <TableHead key={j} className="font-bold text-primary uppercase text-xs tracking-wider">{h}</TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {block.rows?.map((row, j) => (
                            <TableRow key={j}>
                              {row.map((cell, k) => (
                                <TableCell key={k} className={k === 0 ? "font-bold text-primary" : ""}>{cell}</TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>

          <footer className="mt-20 pt-10 border-t border-border">
             <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Share2 className="w-32 h-32 rotate-12" />
                </div>
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-4">¿Te interesa el framework Criterio & Scale?</h3>
                   <p className="text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
                     Ayudo a organizaciones a optimizar su infraestructura digital para ser citadas y recomendadas por modelos de IA avanzados.
                   </p>
                   <Button asChild variant="secondary" className="rounded-xl">
                      <Link href={`/${lang}/solutions#contact-solutions`}>Solicitar Auditoría de Citabilidad</Link>
                   </Button>
                </div>
             </div>
          </footer>
        </article>
      </main>

      <Footer dict={dict.footer} />
    </div>
  );
}
