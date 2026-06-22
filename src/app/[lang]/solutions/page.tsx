// src/app/[lang]/solutions/page.tsx
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/lib/i18n';
import { navLinksData as getRawNavLinksData, contactLinksData as getRawContactLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, Brain, GraduationCap, Zap, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';
import type { Metadata } from 'next';

interface SolutionsPageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: SolutionsPageProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: `${dict.solutionsPage?.heroTitle} | Efraín G.B.`,
    description: dict.solutionsPage?.heroSubtitle,
  };
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const solDict = dict.solutionsPage;

  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav?.[link.labelKey] || link.labelKey,
  }));

  const translatedContactLinksData = getRawContactLinksData.map(link => ({
    ...link,
    name: dict.contactLinksData?.[`${link.id}_name`] || link.name,
    text: dict.contactLinksData?.[`${link.id}_text`] || link.text,
  }));

  const clientTypes = [
    { title: solDict.clientType1, desc: solDict.clientDesc1, icon: Users },
    { title: solDict.clientType2, desc: solDict.clientDesc2, icon: GraduationCap },
    { title: solDict.clientType3, desc: solDict.clientDesc3, icon: TrendingUp },
  ];

  const services = [
    { title: solDict.service1Title, desc: solDict.service1Desc, icon: Brain },
    { title: solDict.service2Title, desc: solDict.service2Desc, icon: Zap },
    { title: solDict.service3Title, desc: solDict.service3Desc, icon: TrendingUp },
    { title: solDict.service4Title, desc: solDict.service4Desc, icon: GraduationCap },
  ];

  const methodSteps = [
    { title: solDict.method1, icon: ShieldCheck },
    { title: solDict.method2, icon: Zap },
    { title: solDict.method3, icon: TrendingUp },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict.languageSwitcher} />
      
      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
           <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]"></div>
           <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
                {solDict.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                {solDict.heroSubtitle}
              </p>
              <Button asChild size="lg" className="h-14 px-10 text-lg bg-white text-primary hover:bg-accent hover:text-white transition-all shadow-2xl animate-in zoom-in-95 duration-700 delay-500">
                <Link href="#contact-solutions">{solDict.heroCta}</Link>
              </Button>
           </div>
        </section>

        {/* AUDIENCE SECTION */}
        <section className="py-20 bg-secondary/5">
          <div className="container px-4">
             <h2 className="text-3xl font-bold text-center mb-16 text-primary">{solDict.whoIsThisFor}</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {clientTypes.map((client, i) => (
                  <Card key={i} className="border-none shadow-xl bg-background/60 backdrop-blur-sm">
                    <CardHeader className="flex flex-col items-center text-center">
                      <div className="p-3 bg-accent/10 rounded-2xl mb-4">
                        <client.icon className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle className="text-xl">{client.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-muted-foreground leading-relaxed">
                      {client.desc}
                    </CardContent>
                  </Card>
                ))}
             </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-background">
          <div className="container px-4">
             <h2 className="text-3xl font-bold text-center mb-16 text-primary">{solDict.servicesTitle}</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {services.map((service, i) => (
                  <div key={i} className="group p-8 rounded-3xl border border-border bg-card hover:border-accent/50 transition-all hover:shadow-2xl">
                     <div className="flex items-start gap-5">
                        <div className="p-3 bg-primary/5 rounded-xl text-accent group-hover:scale-110 transition-transform">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* THE METHOD */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4">
             <h2 className="text-3xl font-bold text-center mb-16">{solDict.methodTitle}</h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
                {methodSteps.map((step, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center">
                       <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 text-accent">
                          <step.icon className="w-8 h-8" />
                       </div>
                       <span className="font-semibold text-lg">{step.title}</span>
                    </div>
                    {i < methodSteps.length - 1 && (
                      <ArrowRight className="hidden md:block h-8 w-8 text-accent opacity-50" />
                    )}
                  </React.Fragment>
                ))}
             </div>
          </div>
        </section>

        {/* FINAL CTA & CONTACT FORM */}
        <section id="contact-solutions" className="py-24 bg-background">
           <div className="container px-4 max-w-4xl mx-auto">
              <div className="text-center mb-16">
                 <h2 className="text-4xl font-bold text-primary mb-4">{solDict.finalCtaTitle}</h2>
                 <p className="text-xl text-muted-foreground">{solDict.finalCtaDesc}</p>
              </div>
              <div className="max-w-2xl mx-auto">
                 <ContactForm dict={dict.contactSection?.form || {}} />
              </div>
           </div>
        </section>
      </main>

      <Footer dict={dict.footer} />
    </div>
  );
}
