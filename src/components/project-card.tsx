// src/components/project-card.tsx
"use client";

import type { Project } from "@/lib/types";
import { verifyProjectStatus } from "@/ai/flows/verify-project-status";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Wifi, WifiOff, Loader2, AlertTriangle, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project, isActive: boolean | null) => void;
}

const STABLE_PROJECT_IDS = ['proj-imagine-motiva', 'proj-agro-y-mas', 'proj-epa-en-linea', 'proj-kohls'];

export default function ProjectCard({ project, onViewProject }: ProjectCardProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const hasValidUrl = project.url && project.url.trim() !== '' && project.url !== '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');
  const isStablePublicProject = STABLE_PROJECT_IDS.includes(project.id);

  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      if (!hasValidUrl) {
        setIsActive(false);
        setIsLoading(false);
        return;
      }

      if (isCloudWorkstation || isStablePublicProject) {
        setIsActive(true);
        setIsLoading(false);
        return;
      }

      // For other projects, proceed with verification
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
      } catch (error: any) {
        console.error(`Error verifying project ${project.name}:`, error);
        if (isMounted) {
          setIsActive(false);
          if (!error.message?.includes("503")) { // Avoid toasting for common "overloaded" errors
            toast({
              title: "Verification Issue",
              description: `Could not verify status for ${project.name}. Assuming it's offline.`,
              variant: "destructive",
            });
          }
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
  }, [project.id, project.url, project.name, toast, hasValidUrl, isCloudWorkstation, isStablePublicProject]);

  const statusBadge = () => {
    let badgeContent: JSX.Element;
    let tooltipText: string;

    if (!hasValidUrl) {
      badgeContent = <Badge variant="destructive" className="flex items-center gap-1"><WifiOff className="h-3 w-3" /> Offline</Badge>;
      tooltipText = "This project does not have a valid public URL.";
    } else if (isCloudWorkstation) {
      badgeContent = <Badge variant="default" className="bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-1"><Sparkles className="h-3 w-3" /> Online (Dev)</Badge>;
      tooltipText = "This project is active on a development server.";
    } else if (isLoading && !isStablePublicProject) { // only show "Checking..." for non-stable projects
      badgeContent = <Badge variant="secondary" className="flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" /> Checking...</Badge>;
      tooltipText = "Verifying project status...";
    } else if (isActive) {
      badgeContent = <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"><Wifi className="h-3 w-3" /> Online</Badge>;
      tooltipText = "This project is currently online and accessible.";
    } else { // Includes non-stable projects that resolved to offline, or stable projects that somehow got here
      badgeContent = <Badge variant="destructive" className="flex items-center gap-1"><WifiOff className="h-3 w-3" /> Offline</Badge>;
      tooltipText = "This project appears to be offline or inaccessible.";
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{badgeContent}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltipText}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };
  
  const effectiveIsActive = hasValidUrl ? (isCloudWorkstation || isStablePublicProject ? true : isActive) : false;

  return (
    <Card className={cn(
      "flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl group",
      isLoading && !(isCloudWorkstation || isStablePublicProject) && 'opacity-75'
    )}>
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-xl">
        <Image
          src={project.thumbnailUrl}
          alt={`${project.name} thumbnail`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={project.dataAiHint}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
         <div className="absolute top-3 right-3">{statusBadge()}</div>
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
          onClick={() => onViewProject(project, effectiveIsActive)}
          variant="default"
          className="w-full sm:w-auto"
          disabled={isLoading && !isCloudWorkstation && !isStablePublicProject && !hasValidUrl} // Disable if loading AND not a special case AND no valid URL
        >
          <Eye className="mr-2 h-4 w-4" /> View Project
        </Button>
        <Button 
          asChild 
          variant="outline" 
          className="w-full sm:w-auto"
          disabled={!hasValidUrl || (!effectiveIsActive && !(isCloudWorkstation || isStablePublicProject))}
        >
          <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
