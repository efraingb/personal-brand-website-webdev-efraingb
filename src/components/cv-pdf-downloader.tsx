'use client';

import React, { useState, useEffect } from 'react';
import { pdf } from '@react-pdf/renderer';
import CVDocument from './cv-document';
import type { CV } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';

interface CvPdfDownloaderProps {
  cv: CV;
  text?: string;
}

export default function CvPdfDownloader({ cv, text }: CvPdfDownloaderProps) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (!cv || isGenerating) return;
    setIsGenerating(true);
    
    try {
      // Generación programática del PDF como Blob
      // Usamos el componente como un elemento de React puro
      const doc = <CVDocument cv={cv} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${String(cv.name || 'CV').replace(/ /g, '_')}_CV.pdf`;
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
        {text || 'Save as PDF'}
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
          {text || 'Save as PDF'}
        </>
      )}
    </Button>
  );
}