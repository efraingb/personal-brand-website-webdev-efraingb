// src/components/project-card.tsx
"use client";

import type { Project } from "@/lib/types";
import { verifyProjectStatus } from "@/ai/flows/verify-project-status";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Wifi, WifiOff, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project, isActive: boolean | null) => void;
}

export default function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      if (!project.url) {
        setIsActive(false);
        setIsLoading(false);
        return;
      }
      try {
        setIsLoading(true);
        // Ensure URL has a scheme
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
          setIsActive(false); // Assume offline on error
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
  }, [project.url, project.name, toast]);

  const statusBadge = () => {
    if (isLoading) {
      return <Badge variant="secondary" className="flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" /> Checking...</Badge>;
    }
    return isActive ? (
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
          onClick={() => onViewProject(project, isActive)} 
          variant="default"
          className="w-full sm:w-auto"
          disabled={isLoading}
        >
          <Eye className="mr-2 h-4 w-4" /> View Project
        </Button>
        <Button 
          asChild 
          variant="outline" 
          className="w-full sm:w-auto"
          disabled={isLoading || !isActive} // Disable if loading or if project is offline
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
