'use client';

import React, { useState, useEffect } from 'react';
import type { CV } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2, FileText } from 'lucide-react';

export default function CvPdfDownloader({ cv, text }: { cv: CV; text?: string }) {
  const [isClient, setIsClient] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleDownload = async () => {
    if (!cv || isGenerating) return;
    setIsGenerating(true);
    
    try {
      // Importación dinámica para asegurar que solo se ejecute en el cliente
      const { pdf } = await import('@react-pdf/renderer');
      const CVDocument = (await import('./cv-document')).default;

      // Sanitizar datos para el contrato estricto del PDF
      const safeCv = {
        name: String(cv.name || ''),
        title: String(cv.title || ''),
        summary: String(cv.summary || ''),
        contact: {
          phone: { text: String(cv.contact?.phone?.text || '') },
          email: { text: String(cv.contact?.email?.text || '') },
          website: { text: String(cv.contact?.website?.text || '') },
          linkedin: { text: String(cv.contact?.linkedin?.text || '') }
        },
        sections: (cv.sections || []).map(s => ({
          title: String(s.title || ''),
          isTwoColumns: !!s.isTwoColumns,
          items: (s.items || []).map(i => ({
            title: String(i.title || ''),
            subtitle: String(i.subtitle || ''),
            date: String(i.date || ''),
            description: Array.isArray(i.description) 
              ? i.description.map(d => String(d || ''))
              : String(i.description || '')
          }))
        }))
      };

      const doc = <CVDocument cv={safeCv} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${safeCv.name.replace(/ /g, '_')}_CV.pdf`;
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
          Generating...
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