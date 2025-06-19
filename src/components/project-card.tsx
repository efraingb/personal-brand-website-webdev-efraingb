
// src/components/project-card.tsx
"use client";

import type { Project } from "@/lib/types";
import { verifyProjectStatus } from "@/ai/flows/verify-project-status";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Wifi, WifiOff, Loader2, Sparkles, PlayCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";

interface ProjectCardProps {
  project: Project;
  onViewProject: (project: Project, isActive: boolean | null) => void;
  dict: Dictionary; // Expects dict.projectCard
}

const STABLE_PROJECT_IDS = ['proj-imagine-motiva', 'proj-agro-y-mas', 'proj-epa-en-linea', 'proj-kohls', 'proj-agroia'];

export default function ProjectCard({ project, onViewProject, dict }: ProjectCardProps) {
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { toast } = useToast();

  const hasValidUrl = project.url && project.url.trim() !== '' && project.url !== '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');
  const isStablePublicProject = STABLE_PROJECT_IDS.includes(project.id);
  const isCollaborationLogoCard = project.isCollaborationLogo === true;
  
  const thumbnailUrlIsValid = typeof project.thumbnailUrl === 'string' && project.thumbnailUrl.trim() !== '';


  useEffect(() => {
    let isMounted = true;
    async function checkStatus() {
      if (!hasValidUrl || isCollaborationLogoCard) { 
        setIsActive(isCollaborationLogoCard ? true : false); 
        setIsLoading(false);
        return;
      }

      if (isCloudWorkstation || isStablePublicProject) {
        setIsActive(true);
        setIsLoading(false);
        return;
      }

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
          if (error.name !== 'AbortError' && !error.message?.includes("503")) { 
            toast({
              title: dict.verificationIssueTitle || "Verification Issue",
              description: (dict.verificationIssueDescription || "Could not verify status for {projectName}. It might be temporarily offline.").replace('{projectName}', project.name),
              variant: "destructive",
              duration: 5000,
            });
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }
    
    if (thumbnailUrlIsValid && hasValidUrl && !isCollaborationLogoCard && !isStablePublicProject && !isCloudWorkstation) {
      checkStatus();
    } else if (isCollaborationLogoCard || !thumbnailUrlIsValid) {
      setIsLoading(false);
      setIsActive(hasValidUrl && !isCollaborationLogoCard); 
    } else { 
      setIsLoading(false);
      setIsActive(true);
    }
    
    return () => {
      isMounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id, project.url, project.name, toast, hasValidUrl, isCloudWorkstation, isStablePublicProject, isCollaborationLogoCard, thumbnailUrlIsValid]);


  const statusBadge = () => {
    if (isCollaborationLogoCard || !thumbnailUrlIsValid) return null; 

    let badgeContent: JSX.Element;
    let tooltipText: string;

    if (!hasValidUrl) {
      badgeContent = <Badge variant="destructive" className="flex items-center gap-1"><WifiOff className="h-3 w-3" />{dict.statusOffline || "Offline"}</Badge>;
      tooltipText = dict.statusOfflineNoUrlTooltip || "This project does not have a valid public URL.";
    } else if (isCloudWorkstation) {
      badgeContent = <Badge variant="default" className="bg-sky-500 hover:bg-sky-600 text-white flex items-center gap-1"><Sparkles className="h-3 w-3" />{dict.statusOnlineDev || "Online (Dev)"}</Badge>;
      tooltipText = dict.statusOnlineDevTooltip || "This project is active on a development server.";
    } else if (isLoading && !isStablePublicProject) {
      badgeContent = <Badge variant="secondary" className="flex items-center gap-1"><Loader2 className="h-3 w-3 animate-spin" />{dict.statusChecking || "Checking..."}</Badge>;
      tooltipText = dict.statusCheckingTooltip || "Verifying project status...";
    } else if (isActive) {
      badgeContent = <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-1"><Wifi className="h-3 w-3" />{dict.statusOnline || "Online"}</Badge>;
      tooltipText = dict.statusOnlineTooltip || "This project is currently online and accessible.";
    } else { 
      badgeContent = <Badge variant="destructive" className="flex items-center gap-1"><WifiOff className="h-3 w-3" />{dict.statusOffline || "Offline"}</Badge>;
      tooltipText = dict.statusOfflineTooltip || "This project appears to be offline or inaccessible.";
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
  
  const effectiveIsActive = hasValidUrl ? (isCloudWorkstation || isStablePublicProject || isCollaborationLogoCard ? true : isActive) : false;
  
  return (
    <Card className={cn(
      "flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 rounded-xl group",
      isLoading && !(isCloudWorkstation || isStablePublicProject || isCollaborationLogoCard || !thumbnailUrlIsValid) && 'opacity-75 transition-opacity duration-300'
    )}>
      {thumbnailUrlIsValid && (
        <div className={cn(
            "relative w-full aspect-[16/10] overflow-hidden rounded-t-xl",
            (isCollaborationLogoCard && thumbnailUrlIsValid) && "bg-card flex items-center justify-center p-4" 
          )}>
          <Image
            src={project.thumbnailUrl} 
            alt={`${project.name} thumbnail`}
            fill
            className={cn(
              "transition-transform duration-500 group-hover:scale-105",
              isCollaborationLogoCard ? "object-contain" : "object-cover"
            )}
            data-ai-hint={project.dataAiHint}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
           {!isCollaborationLogoCard && <div className="absolute top-3 right-3">{statusBadge()}</div>}
        </div>
      )}
      <CardHeader className="pt-4">
        <div className="flex justify-between items-start">
          <div className="flex-grow mr-2">
            <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
            {project.isFeaturedAi && (
              <Badge variant="default" className="mt-1 bg-teal-500 hover:bg-teal-600 text-white text-xs">
                <Sparkles className="mr-1 h-3 w-3" />
                {dict.featuredAiBadgeText || "Featured AI"}
              </Badge>
            )}
          </div>
          {project.videoUrl && !isCollaborationLogoCard && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <PlayCircle className="h-6 w-6 text-accent cursor-pointer flex-shrink-0" onClick={() => onViewProject(project, effectiveIsActive)} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{dict.viewVideoDemo || "View Video Demo"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
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
      {!isCollaborationLogoCard && ( 
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 p-4 bg-muted/30">
          <Button 
            onClick={() => onViewProject(project, effectiveIsActive)}
            variant="default"
            className="w-full sm:w-auto"
            disabled={isLoading && !(isCloudWorkstation || isStablePublicProject || !thumbnailUrlIsValid)}
          >
            <Eye className="mr-2 h-4 w-4" /> {dict.viewProject || "View Project"}
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="w-full sm:w-auto"
            disabled={!hasValidUrl || (!effectiveIsActive && !(isCloudWorkstation || isStablePublicProject))}
          >
            <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> {dict.visitSite || "Visit Site"}
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
