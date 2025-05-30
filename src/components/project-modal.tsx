// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { WifiOff, AlertTriangle, ExternalLink as ExternalLinkIcon, Loader2, Sparkles, Info } from "lucide-react"; 
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project | null;
  isActive: boolean | null; 
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isActive, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isConceptualOrNoUrl = !project.url || project.url.trim() === '' || project.url === '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');
  const showIframe = isActive === true && !isConceptualOrNoUrl && !isCloudWorkstation;
  const showFallback = !showIframe; 

  let fallbackIcon = <Info className="h-12 w-12 text-accent mb-4" />;
  let fallbackTitle = "Project Details";
  let fallbackDescription = "Further details for this project are shown below.";

  if (isCloudWorkstation) {
    fallbackIcon = <Sparkles className="h-12 w-12 text-accent mb-4" />;
    fallbackTitle = "Cloud Workspace Project";
    fallbackDescription = "This project runs in a dedicated cloud workspace. For the best experience, please open it directly using the button below.";
  } else if (isConceptualOrNoUrl) {
    fallbackIcon = <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />;
    fallbackTitle = "Conceptual Project";
    fallbackDescription = "This project is a conceptual piece or a visual showcase. The thumbnail provides a glimpse of its design. For more details, please refer to external links if available.";
  } else if (isActive === null) {
    fallbackIcon = <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />;
    fallbackTitle = "Verifying Status...";
    fallbackDescription = "Just a moment, we're checking the live status of this project. This may take a few seconds.";
  } else if (isActive === false) {
    fallbackIcon = <WifiOff className="h-12 w-12 text-destructive mb-4" />;
    fallbackTitle = "Project Offline";
    fallbackDescription = (
      <>
        We couldn't load a live preview as this project at{' '}
        <code className="text-sm bg-muted/70 px-1.5 py-0.5 rounded-sm font-mono shadow-sm">
          {project.url}
        </code>{' '}
        seems to be offline or inaccessible right now. You can try visiting the site directly.
      </>
    );
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] h-[80vh] p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl">
        <DialogHeader className="p-6 pb-2 border-b border-border/50">
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
          {project.description && <DialogDescription className="text-sm text-muted-foreground mt-1">{project.description}</DialogDescription>}
        </DialogHeader>
        
        <div className="flex-grow overflow-auto">
          {showIframe && (
            <iframe
              src={project.url}
              title={project.name}
              className="w-full h-full border-0 rounded-b-md shadow-inner bg-white" // Added bg-white and rounded-b-md
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          )}

          {showFallback && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30 p-6 sm:p-8 text-center rounded-b-md">
              {fallbackIcon}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-3">
                {fallbackTitle}
              </h3>
              <div className="text-sm sm:text-base text-foreground/80 mb-6 max-w-md mx-auto leading-relaxed">
                {fallbackDescription}
              </div>
              
              <div className="relative w-full max-w-xs sm:max-w-md aspect-[16/10] rounded-lg overflow-hidden shadow-xl my-4">
                <Image
                  src={project.thumbnailUrl}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                  data-ai-hint={project.dataAiHint}
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 480px"
                />
              </div>

              {(project.url && project.url !== '#') && (isCloudWorkstation || isActive === false || isConceptualOrNoUrl) ? (
                 <Button variant="default" asChild className="mt-6 shadow-md hover:shadow-lg transition-shadow">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {isCloudWorkstation ? "Open Project Workspace" : isConceptualOrNoUrl ? "View Details (If Available)" : "Attempt to Visit Site"} 
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
