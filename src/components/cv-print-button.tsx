// src/components/cv-print-button.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

interface CvPrintButtonProps {
  text: string;
}

export default function CvPrintButton({ text }: CvPrintButtonProps) {
  return (
    <Button size="lg" className="shadow-lg" onClick={() => window.print()}>
      <Printer className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
}
