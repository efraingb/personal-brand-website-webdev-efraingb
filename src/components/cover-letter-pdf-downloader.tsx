'use client';

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
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
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button size="lg" disabled className="shadow-lg min-w-[160px]">
        <FileText className="mr-2 h-5 w-5" />
        {text || 'Download PDF'}
      </Button>
    );
  }

  if (!shouldRender) {
    return (
      <Button 
        size="lg" 
        className="shadow-lg min-w-[160px]" 
        onClick={() => setShouldRender(true)}
      >
        <Download className="mr-2 h-5 w-5" />
        {text || 'Download PDF'}
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CoverLetterDocument letter={letter} />}
      fileName={`Cover_Letter_${(letter.jobTitle || 'Application').replace(/ /g, '_')}.pdf`}
    >
      {({ loading, error }) => (
        <Button size="lg" disabled={loading} className="shadow-lg min-w-[160px]">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Preparing...
            </>
          ) : error ? (
            <>Error in PDF</>
          ) : (
            <>
              <Download className="mr-2 h-5 w-5" />
              {text || 'Download PDF'}
            </>
          )}
        </Button>
      )}
    </PDFDownloadLink>
  );
}