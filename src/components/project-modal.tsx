// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { ServerCrash, WifiOff, AlertTriangle, ExternalLink as ExternalLinkIcon } from "lucide-react"; // Added AlertTriangle and imported ExternalLinkIcon from lucide
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project | null;
  isActive: boolean | null; // For live projects: true if online, false if offline. For conceptual: usually false.
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isActive, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const isConceptualOrNoUrl = !project.url || project.url.trim() === '' || project.url === '#';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] h-[80vh] p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-semibold">{project.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{project.description}</DialogDescription>
        </DialogHeader>
        
        <div className="flex-grow overflow-hidden p-6 pt-2">
          {isActive === null && !isConceptualOrNoUrl && ( // Loading state only if not conceptual and status is unknown
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 rounded-md">
              <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="mt-4 text-muted-foreground">Checking project status...</p>
            </div>
          )}
          {isActive === true && !isConceptualOrNoUrl && ( // Live project is online
            <iframe
              src={project.url}
              title={project.name}
              className="w-full h-full border-0 rounded-md shadow-inner"
              allowFullScreen
            />
          )}
          {(isActive === false || isConceptualOrNoUrl) && ( // Live project offline OR conceptual project
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted/50 rounded-md p-4 text-center">
              {isConceptualOrNoUrl ? (
                <AlertTriangle className="h-16 w-16 text-amber-500 mb-4" />
              ) : (
                <WifiOff className="h-16 w-16 text-destructive mb-4" />
              )}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {isConceptualOrNoUrl ? "Conceptual Project" : "Project Offline"}
              </h3>
              <p className="text-muted-foreground mb-4">
                {isConceptualOrNoUrl 
                  ? "This is a conceptual project or does not have a live demo URL." 
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
              {!isConceptualOrNoUrl && project.url && ( // Show "Attempt to visit" only if it was supposed to be online
                 <Button variant="link" asChild className="mt-4">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    Attempt to visit site anyway <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
