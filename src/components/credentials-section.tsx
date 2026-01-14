// src/components/credentials-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/icons";
import { CheckCircle2 } from "lucide-react";
import type { Dictionary } from '@/lib/i18n';
import type { CredentialColumn } from '@/lib/types';
import { cn } from "@/lib/utils";

interface CredentialsSectionProps {
  dict: Dictionary; // Expects dict.credentialsSection
  columns: CredentialColumn[];
}

export default function CredentialsSection({ dict, columns }: CredentialsSectionProps) {
  return (
    <section id="credentials" className="py-16 md:py-24 bg-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {columns.map((column) => (
            <Card key={column.id} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
              <CardHeader className="flex flex-col items-center text-center p-6">
                <div className="p-3 bg-accent/10 rounded-full mb-4">
                    <Icon name={column.iconName} className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold text-primary">{column.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <ul className="space-y-4">
                  {column.credentials.map((item) => (
                    <li key={item.id} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
