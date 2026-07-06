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
      const { pdf } = await import('@react-pdf/renderer');
      const CVDocument = (await import('./cv-document')).default;

      const sanitizeData = (cvData: CV) => {
        const contactArr = [
          cvData.contact?.phone?.text,
          cvData.contact?.email?.text,
          cvData.contact?.website?.text,
          cvData.contact?.linkedin?.text
        ].filter(Boolean);

        return {
          name: String(cvData.name || ''),
          title: String(cvData.title || ''),
          summary: String(cvData.summary || ''),
          contactText: contactArr.join('  |  '),
          sections: (cvData.sections || []).map(s => {
            const isTwoCols = !!s.isTwoColumns;
            const items = (s.items || []).map(i => ({
              title: String(i.title || ''),
              subtitle: String(i.subtitle || ''),
              date: String(i.date || ''),
              descriptions: Array.isArray(i.description) 
                ? i.description.map(d => String(d || ''))
                : [String(i.description || '')],
              descriptionText: Array.isArray(i.description) 
                ? i.description.join(' · ')
                : String(i.description || '')
            }));

            if (isTwoCols) {
              return {
                title: String(s.title || ''),
                isTwoColumns: true,
                col1: items.filter((_, idx) => idx % 2 === 0),
                col2: items.filter((_, idx) => idx % 2 !== 0)
              };
            }

            return {
              title: String(s.title || ''),
              isTwoColumns: false,
              items
            };
          })
        };
      };

      const safeCv = sanitizeData(cv);
      const doc = <CVDocument cv={safeCv} />;
      const blob = await pdf(doc).toBlob();
      
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      
      // Filename: CV_Efrain_Gonzalez_Title.pdf (Sanitized)
      const sanitizedTitle = safeCv.title.split('|')[0].trim().replace(/ /g, '_').replace(/[^a-zA-Z0-9_]/g, '');
      link.download = `CV_Efrain_Gonzalez_${sanitizedTitle}.pdf`;
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('CRITICAL PDF ERROR:', error);
      alert('Error generating PDF.');
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
