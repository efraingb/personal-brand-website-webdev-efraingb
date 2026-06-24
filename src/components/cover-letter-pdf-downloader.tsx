'use client';

import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import CoverLetterDocument from './cover-letter-document';
import type { CoverLetter } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';

interface CoverLetterPdfDownloaderProps {
  letter: CoverLetter;
  text?: string;
}

export default function CoverLetterPdfDownloader({ letter, text }: CoverLetterPdfDownloaderProps) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (!letter || isGenerating) return;
    setIsGenerating(true);
    
    try {
      const doc = <CoverLetterDocument letter={letter} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Cover_Letter_${String(letter.jobTitle || 'Application').replace(/ /g, '_')}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
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
          Preparing...
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