'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CoverLetterDocument from './cover-letter-document';
import type { CoverLetter } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';

interface CoverLetterPdfDownloaderProps {
  letter: CoverLetter;
  text?: string;
}

export default function CoverLetterPdfDownloader({ letter, text }: CoverLetterPdfDownloaderProps) {
  return (
    <PDFDownloadLink
      document={<CoverLetterDocument letter={letter} />}
      fileName={`Cover_Letter_${letter.jobTitle.replace(/ /g, '_')}.pdf`}
    >
      {({ loading }) => (
        <Button size="lg" disabled={loading} className="shadow-lg min-w-[160px]">
          {loading ? (
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
      )}
    </PDFDownloadLink>
  );
}