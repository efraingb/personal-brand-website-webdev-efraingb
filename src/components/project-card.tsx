// src/components/project-card.tsx
"use client";

import type { Project } from "@/lib/types";
import { verifyProjectStatus } from "@/ai/flows/verify-project-status";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Wifi, WifiOff, Loader2, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project, isActive: boolean | null) => void;
}

export default function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const isConceptualOrNoUrl = !project.url || project.url.trim() === '' || project.url === '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');

  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      if (isConceptualOrNoUrl) {
        setIsActive(false);
        setIsLoading(false);
        return;
      }

      if (isCloudWorkstation) {
        // For cloud workstation URLs, assume online and skip server-side check.
        // Efraín can access these, so they should appear online on the card.
        setIsActive(true);
        setIsLoading(false);
        return;
      }

      // For other URLs, proceed with verification
      try {
        setIsLoading(true);
        let fullUrl = project.url;
        if (!/^https?:\/\//i.test(fullUrl)) {
          fullUrl = `https://` + fullUrl;
        }
        
        const result = await verifyProjectStatus({ url: fullUrl });
        if (isMounted) {
          setIsActive(result.isActive);
        }
      } catch (error) {
        console.error(`Error verifying project ${project.name}:`, error);
        if (isMounted) {
          setIsActive(false);
          toast({
            title: "Verification Error",
            description: `Could not verify status for ${project.name}. Assuming it's offline.`,
            variant: "destructive",
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    checkStatus();
    return () => {
      isMounted = false;
    };
  }, [project.url, project.name, toast, isConceptualOrNoUrl, isCloudWorkstation]);

  const statusBadge = () => {
    if (isConceptualOrNoUrl) {
      return <Badge variant="outline" className="flex items-center gap-1 border-amber-500 text-amber-700"><AlertTriangle className="h-3 w-3" /> Conceptual</Badge>;
    }
    // For cloud workstation, isActive is set to true directly in useEffect
    if (isLoading && !isCloudWorkstation) { // Only show loading if not a cloud workstation (which is handled instantly)
      return <Badge variant="secondary" className="flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" /> Checking...</Badge>;
    }
    return isActive ? ( // This will be true for cloud workstations
      <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1">
        <Wifi className="h-3 w-3" /> Online
      </Badge>
    ) : (
      <Badge variant="destructive" className="flex items-center gap-1">
        <WifiOff className="h-3 w-3" /> Offline
      </Badge>
    );
  };

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl">
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.thumbnailUrl}
          alt={`${project.name} thumbnail`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
        />
         <div className="absolute top-2 right-2">{statusBadge()}</div>
      </div>
      <CardHeader className="pt-4">
        <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
            ))}
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4 bg-muted/30">
        <Button 
          onClick={() => onViewProject(project, isConceptualOrNoUrl ? false : isActive)}
          variant="default"
          className="w-full sm:w-auto"
          disabled={isLoading && !isConceptualOrNoUrl && !isCloudWorkstation}
        >
          <Eye className="mr-2 h-4 w-4" /> View Project
        </Button>
        <Button 
          asChild 
          variant="outline" 
          className="w-full sm:w-auto"
          // For conceptual projects, button is disabled.
          // For cloud workstations, isActive is true, isLoading is false, so button is enabled.
          // For others, depends on isLoading and isActive.
          disabled={isConceptualOrNoUrl || (isLoading && !isCloudWorkstation) || (!isActive && !isCloudWorkstation)}
        >
          <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
