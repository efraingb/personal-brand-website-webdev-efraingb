'use client';

import React, { useState, useEffect } from 'react';
import type { CoverLetter } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';

export default function CoverLetterPdfDownloader({ letter, text }: { letter: CoverLetter; text?: string }) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (!letter || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const { pdf } = await import('@react-pdf/renderer');
      const CoverLetterDocument = (await import('./cover-letter-document')).default;

      // Sanitizar datos para el contrato estricto del PDF
      const safeLetter = {
        jobTitle: String(letter.jobTitle || ''),
        date: String(letter.date || ''),
        recipientName: String(letter.recipientName || ''),
        companyName: String(letter.companyName || ''),
        jobId: String(letter.jobId || ''),
        content: (letter.content || []).map(p => String(p || ''))
      };

      const doc = <CoverLetterDocument letter={safeLetter} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Cover_Letter_${safeLetter.jobTitle.replace(/ /g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isClient) {
    return (
      <Button size="lg" disabled className="shadow-lg min-w-[160px]">
        <FileText className="mr-2 h-5 w-5" />
        {text || 'Download PDF'}
      </Button>
    );
  }

  return (
    <Button 
      size="lg" 
      className="shadow-lg min-w-[160px]" 
      onClick={handleDownload}
      disabled={isGenerating}
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="mr-2 h-5 w-5" />
          {text || 'Download PDF'}
        </>
      )}
    </Button>
  );
}