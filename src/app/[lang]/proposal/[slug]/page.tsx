import { notFound } from 'next/navigation';
import { proposalsData } from '@/lib/proposals-data';
import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, FileText, Calendar, Wallet } from 'lucide-react';
import ProposalPdfDownloader from '@/components/proposal-pdf-downloader';
import type { Metadata } from 'next';

interface ProposalPageProps {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
}

export async function generateMetadata({ params }: ProposalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const proposal = proposalsData.find((p) => p.slug === slug);
  if (!proposal) return { title: 'Proposal Not Found' };
  return {
    title: `Proposal | ${proposal.projectName} - ${proposal.clientName}`,
    description: proposal.summary,
  };
}

export default async function ProposalPage({ params }: ProposalPageProps) {
  const { slug, lang } = await params;
  const proposal = proposalsData.find((p) => p.slug === slug);
  const dict = await getDictionary(lang);

  if (!proposal) notFound();

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <header className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container px-4 h-16 flex items-center justify-between">
          <Link href={`/${lang}`} className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {dict.proposalPage?.backHome || 'Back to Home'}
          </Link>
          <ProposalPdfDownloader proposal={proposal} text={dict.proposalPage?.downloadPdf || 'Download PDF'} />
        </div>
      </header>

      <main className="container max-w-4xl px-4 pt-12">
        {/* Intro */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-4">
            {dict.proposalPage?.projectProposal || 'Project Proposal'}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{proposal.projectName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {proposal.summary}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-background/60 backdrop-blur">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center">
                <FileText className="mr-2 h-3 w-3" /> {dict.proposalPage?.clientLabel || 'Client'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="font-semibold text-primary">{proposal.clientName}</p>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center">
                <Calendar className="mr-2 h-3 w-3" /> {dict.proposalPage?.dateLabel || 'Date'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="font-semibold text-primary">{proposal.date}</p>
            </CardContent>
          </Card>
          <Card className="bg-background/60 backdrop-blur">
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-xs font-bold uppercase text-muted-foreground tracking-wider flex items-center">
                <Wallet className="mr-2 h-3 w-3" /> {dict.proposalPage?.validUntilLabel || 'Valid Until'}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="font-semibold text-primary">{proposal.validUntil}</p>
            </CardContent>
          </Card>
        </div>

        <section className="space-y-12">
          {/* Objectives */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
              <CheckCircle2 className="mr-3 h-6 w-6 text-accent" /> {dict.proposalPage?.objectivesTitle || 'Strategic Objectives'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {proposal.objectives.map((obj, i) => (
                <div key={i} className="p-4 rounded-xl bg-background border border-border shadow-sm">
                  <p className="text-foreground/80">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scope */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">{dict.proposalPage?.scopeTitle || 'Project Scope'}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {proposal.scope.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle2 className="h-3 w-3 text-green-500" />
                  </div>
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phases */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">{dict.proposalPage?.roadmapTitle || 'Roadmap & Phases'}</h2>
            <div className="space-y-6">
              {proposal.phases.map((phase, i) => (
                <div key={i} className="relative pl-8 border-l-2 border-accent/30 pb-4 last:pb-0">
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]"></div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-bold text-primary">{phase.title}</h3>
                    <span className="text-xs font-mono bg-accent/10 text-accent px-2 py-0.5 rounded">{phase.duration}</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {phase.items.map((pi, j) => <li key={j}>• {pi}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Investment */}
          <div className="pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-primary mb-6">{dict.proposalPage?.investmentTitle || 'Investment Summary'}</h2>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 shadow-2xl">
              <div className="space-y-4 mb-8">
                {proposal.investment.map((inv, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-primary-foreground/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-primary-foreground/70">{inv.concept}</span>
                    <span className="font-mono text-lg">{proposal.currency} {inv.amount}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-primary-foreground/30">
                <span className="text-xl font-bold">{dict.proposalPage?.totalLabel || 'Total Investment'}</span>
                <span className="text-3xl font-bold">{proposal.currency} {proposal.total}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center italic">
              {dict.proposalPage?.termsNote || '* Prices are subject to final agreement and scope definition.'}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
