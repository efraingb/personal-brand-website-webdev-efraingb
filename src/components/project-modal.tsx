
// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { WifiOff, AlertTriangle, ExternalLink as ExternalLinkIcon, Loader2, Rocket, Info, ServerCrash } from "lucide-react"; 
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

  let displayIcon = <Info className="h-10 w-10 text-accent mb-3" />;
  let messageTitle = project.name;
  let messageDescription: React.ReactNode = project.description;
  let buttonText = "Visit Site";
  let buttonEnabled = true;
  let showImage = true; // By default, show the image

  if (isConceptualOrNoUrl) {
    displayIcon = <AlertTriangle className="h-10 w-10 text-amber-500 mb-3" />;
    messageTitle = "Conceptual Project";
    messageDescription = "This project is a conceptual piece or a visual showcase. The thumbnail provides a glimpse of its design and potential.";
    buttonText = "Details (If Available)"; 
    buttonEnabled = false; 
    
    if (project.url && project.url.trim() !== '#') {
        buttonEnabled = true; 
    }
  } else if (isActive === true) {
    if (isCloudWorkstation) {
      displayIcon = <Rocket className="h-10 w-10 text-accent mb-3" />;
      messageTitle = "Active Project";
      messageDescription = "This project is currently active. Click the button below to explore it live.";
      buttonText = "Open Project";
    } else {
      displayIcon = <Rocket className="h-10 w-10 text-green-500 mb-3" />;
      messageTitle = "Project Online";
      messageDescription = "This project is live and accessible. Click below to visit the site.";
    }
  } else if (isActive === false) {
    // This 'false' can come from:
    // 1. Genkit verification returned false (truly offline or inaccessible)
    // 2. ProjectCard determined it's conceptual/no URL and passed false
    // 3. Genkit verification failed due to an error (e.g., 503), and ProjectCard passed false.
    
    // The isConceptualOrNoUrl case is already handled above.
    // So, if we are here, it's deemed offline or verification failed for a non-conceptual project.
    displayIcon = <WifiOff className="h-10 w-10 text-destructive mb-3" />;
    messageTitle = "Project Offline or Inaccessible";
    messageDescription = (
      <>
        This project at <code className="text-sm bg-muted/70 px-1.5 py-0.5 rounded-sm font-mono shadow-sm">{project.url}</code> currently appears to be offline or inaccessible. You can still try visiting the site directly.
      </>
    );
    buttonText = "Attempt to Visit";
  } else { // isActive is null (initial state for projects that are checked from ProjectCard, and View Project was clicked before it resolved)
     displayIcon = <Loader2 className="h-10 w-10 text-primary animate-spin mb-3" />;
     messageTitle = "Verifying Status...";
     messageDescription = "Just a moment, we're checking the live status of this project.";
     buttonEnabled = false;
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[90vw] sm:w-[70vw] md:w-[60vw] lg:max-w-xl p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl max-h-[85vh]">
        <DialogHeader className="p-6 pb-3 border-b border-border/50">
          <DialogTitle className="text-xl sm:text-2xl font-semibold">{project.name}</DialogTitle>
          {project.description && <DialogDescription className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.description}</DialogDescription>}
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto p-6 text-center">
            <div className="flex flex-col items-center justify-center">
              {displayIcon}
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                {messageTitle}
              </h3>
              <div className="text-sm text-foreground/80 mb-5 max-w-md mx-auto leading-relaxed">
                {messageDescription}
              </div>
              
              {showImage && (
                <div className="relative w-full max-w-md aspect-[16/10] rounded-lg overflow-hidden shadow-xl my-4 border border-border/30">
                  <Image
                    src={project.thumbnailUrl}
                    alt={`${project.name} thumbnail`}
                    fill
                    className="object-cover"
                    data-ai-hint={project.dataAiHint}
                    sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 480px"
                  />
                </div>
              )}

              {!isConceptualOrNoUrl && project.url && project.url.trim() !== '#' && (
                 <Button 
                    variant="default" 
                    asChild 
                    className="mt-4 shadow-md hover:shadow-lg transition-shadow"
                    disabled={!buttonEnabled}
                  >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
               {isConceptualOrNoUrl && project.url && project.url.trim() !== '#' && ( // For conceptual projects that might have a link
                 <Button 
                    variant="outline" 
                    asChild 
                    className="mt-4 shadow-md hover:shadow-lg transition-shadow"
                    disabled={!buttonEnabled} 
                  >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                    <ExternalLinkIcon className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

