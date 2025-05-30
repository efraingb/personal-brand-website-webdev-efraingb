// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { WifiOff, AlertTriangle, ExternalLink as ExternalLinkIcon, Loader2 } from "lucide-react"; 
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] h-[80vh] p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl">
        <DialogHeader className="p-6 pb-2 border-b border-border/50">
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
          {project.description && <DialogDescription className="text-sm text-muted-foreground mt-1">{project.description}</DialogDescription>}
        </DialogHeader>
        
        <div className="flex-grow overflow-auto p-6"> {/* Changed overflow-hidden to overflow-auto for fallback content */}
          {showIframe && (
            <iframe
              src={project.url}
              title={project.name}
              className="w-full h-full border-0 rounded-md shadow-inner bg-white" // Added bg-white for iframe
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          )}

          {showFallback && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-background rounded-lg p-6 text-center">
              {/* Icon Selection */}
              {isCloudWorkstation ? null : // No specific icon for cloud workstation in this view, message is key
                isConceptualOrNoUrl ? (
                  <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
                ) : isActive === null ? ( 
                  <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                ) : ( // Offline state (isActive === false)
                  <WifiOff className="h-12 w-12 text-destructive mb-4" />
                )
              }

              {/* Title Selection */}
              <h3 className="text-xl font-semibold text-primary mb-3 mt-2">
                {isCloudWorkstation 
                  ? "External Project Link"
                  : isConceptualOrNoUrl 
                  ? "Conceptual Project" 
                  : isActive === null 
                  ? "Verifying Status..."
                  : "Project Offline"}
              </h3>

              {/* Description Selection */}
              <div className="text-foreground/80 mb-6 max-w-md mx-auto">
                {isCloudWorkstation ? (
                  <p>This project is best viewed directly in its own environment. Please use the button below to open it.</p>
                ) : isConceptualOrNoUrl ? (
                  <p>This project is currently conceptual or does not have a live demo. The thumbnail provides a glimpse of its design.</p>
                ) : isActive === null ? (
                  <p>We're currently checking the status of this project. This may take a moment.</p>
                ) : (
                  <p>
                    The project at{' '}
                    <code className="text-sm bg-muted/70 px-1.5 py-0.5 rounded-sm font-mono shadow-sm">
                      {project.url}
                    </code>{' '}
                    appears to be offline. You can try visiting the site directly.
                  </p>
                )}
              </div>
              
              <div className="relative w-full max-w-xs sm:max-w-sm aspect-[16/10] rounded-lg overflow-hidden shadow-xl my-4">
                <Image
                  src={project.thumbnailUrl}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                  data-ai-hint={project.dataAiHint}
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 400px"
                />
              </div>

              {/* Button for Cloud Workstation or Offline/Conceptual projects with a URL */}
              {(project.url && project.url !== '#') && (isCloudWorkstation || isActive === false || isConceptualOrNoUrl) ? (
                 <Button variant="default" asChild className="mt-6 shadow-md hover:shadow-lg">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {isCloudWorkstation ? "Open Project" : isConceptualOrNoUrl ? "View Details (External)" : "Attempt to Visit Site"} 
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
