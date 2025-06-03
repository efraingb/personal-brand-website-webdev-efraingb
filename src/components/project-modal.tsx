
// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { WifiOff, ExternalLink as ExternalLinkIcon, Loader2, Rocket, Info, Sparkles } from "lucide-react"; 
import { Button } from "./ui/button";

interface ProjectModalProps {
  project: Project | null;
  isActive: boolean | null; 
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isActive, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasValidUrl = project.url && project.url.trim() !== '' && project.url !== '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');

  let displayIcon = <Info className="h-10 w-10 text-accent mb-3" />;
  let messageTitle = project.name;
  let messageDescription: React.ReactNode = "Further details about this project can be found by visiting its site if available.";
  let buttonText = "Visit Site";
  let buttonEnabled = true;
  
  if (isActive === true) {
    if (isCloudWorkstation) {
      displayIcon = <Sparkles className="h-10 w-10 text-sky-500 mb-3" />;
      messageTitle = "Active Project (Dev)";
      messageDescription = "This project is active on a development server. Click below to explore it if you have access.";
      buttonText = "Open Dev Link";
    } else {
      displayIcon = <Rocket className="h-10 w-10 text-green-500 mb-3" />;
      messageTitle = "Project Online";
      messageDescription = "This project is live and accessible. Click below to visit the site.";
    }
  } else if (isActive === false) {
    displayIcon = <WifiOff className="h-10 w-10 text-destructive mb-3" />;
    messageTitle = "Project Status";
     if (!hasValidUrl) {
        messageDescription = "This project does not have a direct public URL at the moment, but you can view its details and image below.";
        buttonText = "No Public Link";
        buttonEnabled = false;
    } else {
        messageDescription = (
        <>
            This project at <code className="text-sm bg-muted/70 px-1.5 py-0.5 rounded-sm font-mono shadow-sm">{project.url}</code> currently appears to be offline or inaccessible. You can still attempt to visit the site directly.
        </>
        );
        buttonText = "Attempt to Visit";
    }
  } else { // isActive is null (verifying status)
     displayIcon = <Loader2 className="h-10 w-10 text-primary animate-spin mb-3" />;
     messageTitle = "Verifying Status...";
     messageDescription = "We're currently verifying the live status of this project. This might take a moment.";
     buttonEnabled = false;
     if (!hasValidUrl) { 
        messageTitle = "Project Details";
        messageDescription = "This project does not have a direct public URL, but you can view its image and description.";
        buttonEnabled = false;
        buttonText = "No Public Link";
        displayIcon = <Info className="h-10 w-10 text-muted-foreground mb-3" />;
     }
  }


  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-[90vw] sm:w-[70vw] md:w-[60vw] lg:max-w-xl p-0 flex flex-col bg-card text-card-foreground rounded-lg shadow-2xl max-h-[85vh]">
        <DialogHeader className="p-6 pb-3 border-b border-border/50">
          <DialogTitle className="text-xl sm:text-2xl font-semibold">{project.name}</DialogTitle>
          {project.description && <DialogDescription className="text-sm text-muted-foreground mt-1 leading-relaxed">{project.description}</DialogDescription>}
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto p-6 text-center bg-background">
            <div className="flex flex-col items-center justify-center">
              {displayIcon}
              <h3 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                {messageTitle}
              </h3>
              <div className="text-sm text-foreground/80 mb-5 max-w-md mx-auto leading-relaxed">
                {messageDescription}
              </div>
              
              <div className="relative w-full max-w-md aspect-[16/10] rounded-lg overflow-hidden shadow-xl my-4 border border-border/30 animate-in fade-in-0 zoom-in-95 duration-300 ease-out">
                <Image
                  src={project.thumbnailUrl}
                  alt={`${project.name} thumbnail`}
                  fill
                  className="object-cover"
                  data-ai-hint={project.dataAiHint}
                  sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, 480px"
                />
              </div>

              {hasValidUrl && (
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
               {!hasValidUrl && !buttonEnabled && (
                 <Button 
                    variant="outline" 
                    className="mt-4 shadow-md"
                    disabled={true}
                  >
                    {buttonText}
                </Button>
              )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
