
// src/components/documents-section.tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Dictionary } from '@/lib/i18n';
import type { LinkItem } from '@/lib/types';
import { cn } from "@/lib/utils";

interface DocumentsSectionProps {
  dict: Dictionary;
  documentLinksData: LinkItem[];
}

export default function DocumentsSection({ dict, documentLinksData }: DocumentsSectionProps) {
  return (
    <section id="documents" className="py-16 md:py-24 bg-secondary/20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {documentLinksData.map((item) => (
            <Card
              key={item.id}
              className={cn(
                "group flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl",
                item.isFeatured
                  ? "w-full md:w-3/4 lg:w-2/3 xl:max-w-3xl 2xl:max-w-xl mx-auto"  // Featured book: adjusted 2xl max-width
                  : "w-full md:w-[calc(50%_-_1rem)] max-w-lg" // Other items
              )}
            >
              <CardHeader className={cn(item.isFeatured && "md:flex-row md:items-start md:gap-6")}>
                {item.imageUrl && (
                  <div className={cn(
                    "relative flex-shrink-0 rounded-md overflow-hidden shadow-md mx-auto md:mx-0",
                    item.isFeatured
                      ? "h-64 w-48 sm:h-72 sm:aspect-[2/3]" // Larger image for featured book
                      : "h-24 w-24 sm:h-28 sm:w-28" // Default size for other items like smaller book covers or profile icons
                  )}>
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                      data-ai-hint={item.dataAiHint || "document image"}
                      sizes={item.isFeatured ? "(max-width: 640px) 192px, (max-width: 768px) 192px, 256px" : "(max-width: 640px) 96px, 112px"}
                    />
                  </div>
                )}
                <div className={cn("flex-grow", item.isFeatured ? "mt-4 md:mt-0 text-center md:text-left" : "mt-4 text-center sm:text-left")}> {/* Adjusted mt for non-featured */}
                  <div className={cn(
                      "flex items-center gap-3 mb-1",
                      item.isFeatured ? "justify-center md:justify-start" : "justify-center sm:justify-start" // Center on mobile for non-featured
                    )}>
                      {!item.imageUrl && <Icon name={item.iconName} className="h-6 w-6 text-accent" />}
                       <CardTitle className={cn(
                         "font-semibold text-primary",
                         item.isFeatured ? "text-2xl sm:text-3xl" : "text-xl"
                       )}>{item.name}</CardTitle>
                      {item.isRecommended && (
                        <Badge variant="default" className="bg-amber-500 hover:bg-amber-600 text-white">
                          <Star className="mr-1 h-3 w-3 fill-white" /> {dict.recommendedBadge || "Recommended"}
                        </Badge>
                      )}
                  </div>
                   {item.description && (
                    <CardDescription className={cn(
                        "text-foreground/80 leading-relaxed",
                        item.isFeatured ? "text-base mt-2" : "text-sm mt-1" // Adjusted mt for non-featured
                      )}>
                      {item.description}
                    </CardDescription>
                  )}
                </div>
              </CardHeader>
              <CardContent className={cn(
                  "flex-grow pt-0", // Simplified padding, rely on header for top space
                  item.isFeatured && item.description ? "pb-0 md:pb-6" : "pb-6" // Ensure bottom padding unless it's for the button only
                )}
              >
                {/* This description is only for featured items on mobile, as header stacks vertically */}
                {item.isFeatured && item.description && (
                  <div className="md:hidden">
                     <CardDescription className="text-sm text-foreground/80 leading-relaxed mt-2">
                        {item.description}
                      </CardDescription>
                  </div>
                )}
              </CardContent>
              {item.buttonText && (
                <CardContent className="pt-4 mt-auto">
                  <Button asChild variant={item.isRecommended ? "default" : "outline"} className={cn(
                      "w-full group-hover:border-accent group-hover:text-accent transition-colors",
                      item.isRecommended && "bg-accent hover:bg-accent/90 text-accent-foreground"
                    )}>
                    <Link href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.buttonText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
