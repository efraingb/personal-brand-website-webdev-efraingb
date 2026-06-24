// src/app/[lang]/ai-drafting/page.tsx
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/lib/i18n';
import { navLinksData as getRawNavLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wand2, Sparkles, FileText, Layout, Rocket, MessageSquare, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface AiDraftingPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function AiDraftingPage({ params }: AiDraftingPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav?.[link.labelKey] || link.labelKey,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict.languageSwitcher} />
      
      <main className="flex-grow container px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header Preview */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles className="w-3 h-3" /> Backlog de Innovación
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">AI Drafting Room</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Próximamente: Tu centro de mando estratégico donde la IA genera propuestas y adaptaciones basadas en tu ADN profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar / Context */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-dashed border-2">
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <Layout className="w-4 h-4" /> Contexto Maestro
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-xs text-muted-foreground italic">
                    Aquí la IA leerá automáticamente tus versiones maestras para asegurar coherencia total.
                  </p>
                  <div className="p-3 bg-muted rounded-lg flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2"><FileText className="w-3 h-3" /> CV Enterprise (EN)</span>
                    <span className="text-green-500 font-bold uppercase">Listo</span>
                  </div>
                  <div className="p-3 bg-muted rounded-lg flex items-center justify-between text-xs">
                    <span className="flex items-center gap-2"><FileText className="w-3 h-3" /> CV Specialist (ES)</span>
                    <span className="text-green-500 font-bold uppercase">Listo</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <Rocket className="w-24 h-24 rotate-12" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Visión de Equipo</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    Soporte para incluir a tus socios estratégicos de EE.UU. y Dubai en propuestas modulares automáticamente.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Main Workspace / Placeholder */}
            <div className="lg:col-span-2">
              <Card className="min-h-[400px] flex flex-col items-center justify-center p-8 text-center bg-muted/20 border-border">
                <div className="p-4 bg-accent/10 rounded-full mb-6">
                  <Wand2 className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Generador de Documentos</h3>
                <p className="text-muted-foreground mb-8 max-w-md">
                  Pega aquí una descripción de puesto o un resumen de proyecto. La IA redactará una versión inicial optimizada para ATS y humanos.
                </p>
                
                <div className="w-full max-w-md p-4 bg-background border border-border rounded-xl shadow-inner mb-6 opacity-50 cursor-not-allowed">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                    <MessageSquare className="w-4 h-4" /> Escribe o pega el requerimiento...
                  </div>
                  <div className="h-20 bg-muted/50 rounded"></div>
                </div>

                <Button disabled size="lg" className="rounded-xl">
                  Iniciar Redacción Estratégica
                </Button>
                
                <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
                  <ArrowRight className="w-3 h-3" /> Próxima actualización en fase de pruebas internas.
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer dict={dict.footer} />
    </div>
  );
}
