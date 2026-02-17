// src/components/cv-pdf-downloader.tsx
'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import CVDocument from './cv-document';
import type { CV } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface CvPdfDownloaderProps {
    cv: CV;
}

export default function CvPdfDownloader({ cv }: CvPdfDownloaderProps) {
    return (
        <PDFDownloadLink
            document={<CVDocument cv={cv} />}
            fileName={`${cv.name.replace(/ /g, '_')}_CV.pdf`}
        >
            {({ loading }) => (
                <Button size="lg" disabled={loading} className="shadow-lg">
                    <Download className="mr-2 h-5 w-5" />
                    {loading ? 'Generating PDF...' : 'Save as PDF'}
                </Button>
            )}
        </PDFDownloadLink>
    );
}
