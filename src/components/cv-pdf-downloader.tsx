'use client';

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './cv-document';
import type { CV } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';

interface CvPdfDownloaderProps {
  cv: CV;
  text?: string;
}

export default function CvPdfDownloader({ cv, text }: CvPdfDownloaderProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Button size="lg" disabled className="shadow-lg min-w-[160px]">
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
        Preparing...
      </Button>
    );
  }

  return (
    <PDFDownloadLink
      document={<CVDocument cv={cv} />}
      fileName={`${cv.name.replace(/ /g, '_')}_CV.pdf`}
    >
      {({ loading }) => (
        <Button size="lg" disabled={loading} className="shadow-lg min-w-[160px]">
          {loading ? (
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
      )}
    </PDFDownloadLink>
  );
}
