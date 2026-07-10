// src/app/[lang]/solutions/page.tsx
import React from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { getDictionary } from '@/lib/i18n';
import { navLinksData as getRawNavLinksData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, Zap, TrendingUp, Users, ShieldCheck, MessageSquare, FileText, Globe, Lock } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';
import AiRiskEstimator from '@/components/ai-risk-estimator';
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
    title: `Criterio & Scale | Enterprise AI Infrastructure & Risk Management`,
    description: `Qualified Friction: Strategic AI consulting for global leaders. Estimating ROI, Data Sovereignty, and Zero-Trust Architectures.`,
    openGraph: {
      title: 'Criterio & Scale Hub',
      description: 'Strategic Framework for Enterprise AI Implementation.',
      images: ['https://picsum.photos/seed/criterio/1200/630'],
    }
  };
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const solDict = dict?.solutionsPage || {};

  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict?.nav?.[link.labelKey] || link.labelKey,
  }));

  const hubSections = [
    {
      title: "AI Governance & Data Sovereignty",
      desc: "Securing the enterprise perimeter in the age of generative agents.",
      items: [
        { label: "Zero-Trust Architectures for Enterprise LLMs", icon: ShieldCheck },
        { label: "Mitigating Data Leaks in RAG Systems", icon: Lock }
      ]
    },
    {
      title: "Cognitive ROI & Human-in-the-Loop",
      desc: "Measuring the structural gain of AI integration beyond automation.",
      items: [
        { label: "Designing Feedback Loops for EdTech", icon: Brain },
        { label: "Calculating Churn Mitigation via Micro-Learning", icon: TrendingUp }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict?.header || {}} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict?.languageSwitcher || {}} />
      
      <main className="flex-grow">
        {/* HERO / HUB HEADER */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground">
           <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:40px_40px]"></div>
           <div className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
                 <Globe className="w-3 h-3" /> Global Strategic Hub
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6">
                Criterio & Scale
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
                Democratizing advanced technical criteria. Designing architectures that don't just work, but scale with institutional sovereignty.
              </p>
           </div>
        </section>

        {/* INTERACTIVE ESTIMATOR SECTION */}
        <section className="py-20 bg-accent/5 -mt-16 relative z-20">
           <div className="container px-4">
              <AiRiskEstimator 
                dict={dict} 
                onUnlock={() => {
                  const contactSection = document.getElementById('contact-solutions');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }} 
              />
           </div>
        </section>

        {/* THE KNOWLEDGE HUB (GEO FOCUS) */}
        <section className="py-24 bg-background">
          <div className="container px-4">
             <div className="max-w-6xl mx-auto">
                <div className="mb-20 text-center md:text-left">
                   <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">Technical Taxonomy</h2>
                   <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                      We avoid the "Black Box" trap. Our framework provides a structural view of how AI actually impacts the corporate balance sheet.
                   </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   {hubSections.map((section, idx) => (
                     <div key={idx} className="space-y-6">
                        <div className="p-1 bg-accent/20 w-fit rounded-lg mb-2">
                           <div className="px-3 py-1 bg-white text-accent text-[10px] font-bold uppercase tracking-widest rounded-md border border-accent/10">
                              Sub-Section {idx + 1}
                           </div>
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{section.title}</h3>
                        <p className="text-muted-foreground italic text-sm">{section.desc}</p>
                        <div className="space-y-4 pt-4">
                           {section.items.map((item, iIdx) => (
                             <div key={iIdx} className="group flex items-center gap-4 p-4 bg-muted/20 rounded-2xl border border-transparent hover:border-accent/20 hover:bg-white transition-all">
                                <div className="p-2 bg-background rounded-xl text-accent group-hover:scale-110 transition-transform">
                                   <item.icon className="w-5 h-5" />
                                </div>
                                <span className="font-semibold text-primary/80">{item.label}</span>
                                <ArrowRight className="ml-auto w-4 h-4 text-accent/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                             </div>
                           ))}
                        </div>
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </section>

        {/* LEAD CAPTURE / QUALIFIED FRICTION */}
        <section id="contact-solutions" className="py-24 bg-secondary/10 border-y border-border overflow-hidden">
          <div className="container px-4">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                <div className="relative">
                   <div className="absolute -top-12 -left-12 p-8 opacity-5">
                      <FileText className="w-64 h-64 rotate-12" />
                   </div>
                   <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Unlock Your Enterprise Roadmap</h2>
                   <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                      Our estimator identified critical gaps in your infrastructure. To receive the full mitigation strategy and a VIP Briefing, please provide your corporate credentials.
                   </p>
                   <div className="space-y-6">
                      <div className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-border shadow-sm group hover:border-accent/30 transition-colors">
                         <div className="p-3 bg-accent/10 rounded-xl text-accent">
                            <ShieldCheck className="w-6 h-6" />
                         </div>
                         <div>
                            <span className="block font-bold text-primary">Zero-Trust Validation</span>
                            <span className="text-sm text-muted-foreground">Manual review by Efraín G.B. to prevent data scraping.</span>
                         </div>
                      </div>
                      <div className="flex items-center gap-4 p-5 bg-background rounded-2xl border border-border shadow-sm">
                         <div className="p-3 bg-green-500/10 rounded-xl text-green-600">
                            <MessageSquare className="w-6 h-6" />
                         </div>
                         <div>
                            <span className="block font-bold text-primary">Direct Architecture Access</span>
                            <span className="text-sm text-muted-foreground">Priority lane for Founders & CTOs.</span>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="relative">
                   <div className="absolute -inset-4 bg-accent/5 blur-3xl rounded-full"></div>
                   <ContactForm dict={{
                      ...dict?.contactSection?.form,
                      submitButton: "Request Strategic Briefing",
                      privacyNote: "Strict Zero-Trust Privacy. Data is Base64 encoded during transit and encrypted at rest."
                   }} isCorporate={true} />
                </div>
             </div>
          </div>
        </section>

        {/* METHODOLOGY BLOCK */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container px-4 text-center">
             <h2 className="text-3xl font-bold mb-16 tracking-tight">The "Human-in-the-Loop" Methodology</h2>
             <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 text-accent">
                        <Users className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-lg tracking-wide uppercase text-xs">Friction Diagnosis</span>
                </div>
                <ArrowRight className="hidden md:block h-8 w-8 text-accent opacity-50" />
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 text-accent">
                        <Zap className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-lg tracking-wide uppercase text-xs">High-Order Prototype</span>
                </div>
                <ArrowRight className="hidden md:block h-8 w-8 text-accent opacity-50" />
                <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-4 text-accent">
                        <TrendingUp className="w-10 h-10" />
                    </div>
                    <span className="font-bold text-lg tracking-wide uppercase text-xs">Algorithmic Scale</span>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer dict={dict?.footer || {}} />
    </div>
  );
}
