'use client';

import React, { useState, useEffect } from 'react';
import type { Proposal } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';

export default function ProposalPdfDownloader({ proposal, text }: { proposal: Proposal; text?: string }) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (!proposal || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const { pdf } = await import('@react-pdf/renderer');
      const ProposalDocument = (await import('./proposal-document')).default;

      // Sanitizar datos - Convertir todo a strings
      const safeProposal = {
        projectName: String(proposal.projectName || ''),
        clientName: String(proposal.clientName || ''),
        date: String(proposal.date || ''),
        validUntil: String(proposal.validUntil || ''),
        currency: String(proposal.currency || 'USD'),
        total: String(proposal.total || '0'),
        objectives: (proposal.objectives || []).map(o => String(o || '')),
        scope: (proposal.scope || []).map(s => String(s || '')),
        investment: (proposal.investment || []).map(inv => ({
          concept: String(inv.concept || ''),
          amount: String(inv.amount || '')
        })),
        phases: (proposal.phases || []).map(p => ({
          title: String(p.title || ''),
          duration: String(p.duration || ''),
          items: (p.items || []).map(i => String(i || ''))
        }))
      };

      const doc = <ProposalDocument proposal={safeProposal} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Proposal_${safeProposal.projectName.replace(/ /g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating Proposal PDF:', error);
      alert('Error generating PDF.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isClient) return null;

  return (
    <Button 
      size="sm" 
      className="shadow-md" 
      onClick={handleDownload}
      disabled={isGenerating}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          {text || 'Download PDF'}
        </>
      )}
    </Button>
  );
}
