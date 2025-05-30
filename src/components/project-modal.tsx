// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { ServerCrash, WifiOff, AlertTriangle, ExternalLink as ExternalLinkIcon, Terminal } from "lucide-react"; 
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

  // Determine if we should show the iframe or the fallback content
  const showIframe = isActive === true && !isConceptualOrNoUrl && !isCloudWorkstation;
  const showFallback = !showIframe; // Covers conceptual, offline, loading, or cloud workstation

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] h-[80vh] p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{project.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex-grow overflow-hidden p-6 pt-2">
          {showIframe && (
            <iframe
              src={project.url}
              title={project.name}
              className="w-full h-full border-0 rounded-md shadow-inner"
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Added sandbox for security, adjust as needed
            />
          )}

          {showFallback && (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 rounded-md p-4 text-center">
              {/* Icon Selection */}
              {isCloudWorkstation ? (
                <Terminal className="h-16 w-16 text-sky-500 mb-4" />
              ) : isConceptualOrNoUrl ? (
                <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
              ) : isActive === null ? ( // Loading state
                 <svg className="animate-spin h-10 w-10 text-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
              ) : ( // Offline state
                <WifiOff className="h-16 w-16 text-destructive mb-4" />
              )}

              {/* Title Selection */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isCloudWorkstation 
                  ? "Development Environment" 
                  : isConceptualOrNoUrl 
                  ? "Conceptual Project" 
                  : isActive === null 
                  ? "Checking Status..."
                  : "Project Offline"}
              </h3>

              {/* Description Selection */}
              <p className="text-muted-foreground mb-4">
                {isCloudWorkstation
                  ? "Live preview in this modal is not available for development environments. You can open it directly using the 'Visit Site' button on the project card or below."
                  : isConceptualOrNoUrl
                  ? "This is a conceptual project or does not have a live demo URL."
                  : isActive === null
                  ? "Attempting to verify project status. This may take a moment."
                  : `This project at <code class="text-sm bg-muted px-1 py-0.5 rounded">${project.url}</code> appears to be currently offline or inaccessible.`
                }
              </p>
              
              <div className="relative w-full max-w-md aspect-video rounded-md overflow-hidden shadow-lg">
                <Image
                  src={project.thumbnailUrl}
                  alt={`${project.name} thumbnail`}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={project.dataAiHint}
                />
              </div>

              {/* Button for Cloud Workstation or Offline projects with a URL */}
              {(isCloudWorkstation && project.url && project.url !== '#') || (!isConceptualOrNoUrl && project.url && isActive === false) ? (
                 <Button variant="outline" asChild className="mt-6">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {isCloudWorkstation ? "Open Dev Environment" : "Attempt to Visit Site"}
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
