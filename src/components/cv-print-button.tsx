// src/components/cv-print-button.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import type { CV } from '@/lib/types';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';

const CvPdfDownloader = dynamic(() => import('./cv-pdf-downloader'), {
  ssr: false,
  loading: () => (
    <Button size="lg" disabled className="shadow-lg">
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </Button>
  ),
});

interface CvPrintButtonProps {
    cv: CV;
}

export default function CvPrintButton({ cv }: CvPrintButtonProps) {
    return <CvPdfDownloader cv={cv} />;
}
