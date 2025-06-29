
// src/components/project-modal.tsx
"use client";

import type { Project } from "@/lib/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import Image from "next/image";
import { WifiOff, ExternalLink as ExternalLinkIcon, Loader2, Rocket, Info, Sparkles, Film, Clock, MessageSquare } from "lucide-react"; 
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { Dictionary } from "@/lib/i18n";
import Link from "next/link";

interface ProjectModalProps {
  project: Project | null;
  isActive: boolean | null; 
  isOpen: boolean;
  onClose: () => void;
  dict: Dictionary; // Expects dict.projectModal
}

interface VideoIdResult {
  id: string;
  platform: 'youtube' | 'vimeo';
}

function extractVideoId(url: string): VideoIdResult | null {
  let videoId: string | null = null;
  let platform: 'youtube' | 'vimeo' | null = null;

  // Check for YouTube Shorts format first
  let match = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (match && match[1]) {
    videoId = match[1];
    platform = 'youtube';
  } else {
    // Standard YouTube URL formats
    match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i);
    if (match && match[2] && match[2].length === 11) {
      videoId = match[2];
      platform = 'youtube';
    } else {
      // Vimeo URL format
      match = url.match(/vimeo\.com\/(?:video\/|)(\d+)/);
      if (match && match[1]) {
        videoId = match[1];
        platform = 'vimeo';
      }
    }
  }

  if (videoId && platform) {
    return { id: videoId, platform: platform as 'youtube' | 'vimeo' };
  }
  return null;
}


export default function ProjectModal({ project, isActive, isOpen, onClose, dict }: ProjectModalProps) {
  if (!project) return null;

  const aiToolIdsWithSpecialSchedule: string[] = [];
  const isSpecialAiTool = aiToolIdsWithSpecialSchedule.includes(project.id);

  const hasValidUrl = project.url && project.url.trim() !== '' && project.url !== '#';
  const isCloudWorkstation = project.url?.includes('cloudworkstations.dev');
  
  const hasVideo = project.videoUrl && project.videoUrl.trim() !== '';
  let embedUrl = '';
  if (hasVideo) {
    const videoDetails = extractVideoId(project.videoUrl!);
    if (videoDetails?.platform === 'youtube') {
      embedUrl = `https://www.youtube.com/embed/${videoDetails.id}`;
    } else if (videoDetails?.platform === 'vimeo') {
      embedUrl = `https://player.vimeo.com/video/${videoDetails.id}`;
    }
  }

  let displayIcon = <Info className="h-10 w-10 text-accent mb-3" />;
  let messageTitle = project.name + (hasVideo ? ` - ${dict.videoDemoTitleSuffix || "Video Demo"}` : ` - ${dict.defaultTitleSuffix || "Details"}`);
  let messageDescription: React.ReactNode = dict.defaultDescription;
  let mainButton: React.ReactNode = null;
  
  if (isSpecialAiTool && isActive !== true) { // Adjusted condition for special AI tools: if it's special AND NOT confirmed active
    displayIcon = <Clock className="h-10 w-10 text-amber-500 mb-3" />;
    messageTitle = `${project.name} - ${dict.iaToolOfflineTitle || "AI Tool Access Request"}`;
    messageDescription = (
      <>
        <p>{dict.iaToolOfflineDescription || "This AI tool has specific availability. Contact to request access."}</p>
        {hasVideo && <p className="mt-2 text-sm text-foreground/70">{dict.videoOfflineDescriptionAlternative || "You can also watch the video demo below."}</p>}
      </>
    );
    mainButton = (
      <Button asChild variant="default" className="mt-4 shadow-md hover:shadow-lg transition-shadow" onClick={onClose}>
        <Link href="#contact">
          {dict.buttonRequestAccess || "Request Access"}
          <MessageSquare className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    );
  } else { 
    // This block handles non-special AI tools or AI tools that are confirmed online
    if (isActive === true) {
      if (isCloudWorkstation) {
        displayIcon = <Sparkles className="h-10 w-10 text-sky-500 mb-3" />;
        messageTitle = `${project.name} - ${dict.statusActiveDevTitle || "Active Project (Dev)"}`;
        messageDescription = dict.statusActiveDevDescription;
      } else if (hasVideo) {
        displayIcon = <Film className="h-10 w-10 text-accent mb-3" />;
        messageTitle = project.name + ` - ${dict.videoDemoTitleSuffix || "Video Demo"}`;
        messageDescription = dict.videoDemoDescription;
      } else {
        displayIcon = <Rocket className="h-10 w-10 text-green-500 mb-3" />;
        messageTitle = `${project.name} - ${dict.statusOnlineTitle || "Project Online"}`;
        messageDescription = dict.statusOnlineDescription;
      }

      if (hasValidUrl) {
         mainButton = (
          <Button variant="default" asChild className="mt-4 shadow-md hover:shadow-lg transition-shadow">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {isCloudWorkstation ? (dict.buttonOpenDevLink || "Open Dev Link") : (dict.buttonVisitSite || "Visit Site")}
              <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        );
      }
    } else if (isActive === false) { 
      displayIcon = hasVideo ? <Film className="h-10 w-10 text-accent mb-3" /> : <WifiOff className="h-10 w-10 text-destructive mb-3" />;
      messageTitle = project.name + (hasVideo ? ` - ${dict.videoDemoTitleSuffix || "Video Demo"}` : ` - ${dict.statusOfflineTitle || "Project Status"}`);
      
      if (!hasValidUrl) {
        messageDescription = hasVideo ? dict.videoOfflineDescription : dict.statusOfflineNoUrlDescription;
        mainButton = ( <Button variant="outline" className="mt-4 shadow-md" disabled={true}> {dict.buttonNoPublicLink || "No Public Link"} </Button> );
      } else {
        messageDescription = hasVideo ? dict.videoOfflineDescription : (dict.statusOfflineDescription || "Offline").replace('{projectUrl}', project.url);
        mainButton = (
          <Button variant="default" asChild className="mt-4 shadow-md hover:shadow-lg transition-shadow">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {dict.buttonAttemptVisit || "Attempt to Visit"} <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        );
      }
    } else { // isActive is null (verifying or no URL for non-special AI tool)
      if (hasVideo && !hasValidUrl) { // Has video, no URL, not special AI tool
        displayIcon = <Film className="h-10 w-10 text-accent mb-3" />;
        messageTitle = project.name + ` - ${dict.videoDemoTitleSuffix || "Video Demo"}`;
        messageDescription = dict.statusVerifyingVideoDescription; // Or specific "video only" message
        mainButton = ( <Button variant="outline" className="mt-4 shadow-md" disabled={true}> {dict.buttonNoPublicLink || "No Public Link"} </Button> );
      } else if (!hasValidUrl && !hasVideo) { // No URL, no Video, not special AI tool
        displayIcon = <Info className="h-10 w-10 text-muted-foreground mb-3" />;
        messageTitle = `${project.name} - ${dict.statusNoUrlTitle || "Project Details"}`;
        messageDescription = dict.statusNoUrlDescriptionModal;
        mainButton = ( <Button variant="outline" className="mt-4 shadow-md" disabled={true}> {dict.buttonNoPublicLink || "No Public Link"} </Button> );
      } else { // Has URL (and possibly video), isActive is null (verifying)
        displayIcon = hasVideo ? <Film className="h-10 w-10 text-accent mb-3" /> : <Loader2 className="h-10 w-10 text-primary animate-spin mb-3" />;
        messageTitle = project.name + (hasVideo ? ` - ${dict.videoDemoTitleSuffix || "Video Demo"}` : ` - ${dict.statusVerifyingTitle || "Verifying Status..."}`);
        messageDescription = hasVideo ? dict.statusVerifyingVideoDescription : dict.statusVerifyingDescription;
        mainButton = (
          <Button variant="outline" className="mt-4 shadow-md" disabled={true}>
            {dict.buttonVisitSite || "Visit Site"}
          </Button>
        );
      }
    }
  }

  // Fallback button if no other logic set it and it's not a special AI tool
  if (!mainButton && !(isSpecialAiTool && isActive !== true)) {
    if (hasValidUrl) {
      mainButton = (
        <Button variant="default" asChild className="mt-4 shadow-md hover:shadow-lg transition-shadow" disabled={isActive === null && !isCloudWorkstation && project.id !== 'proj-agroia'}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {isCloudWorkstation ? (dict.buttonOpenDevLink || "Open Dev Link") : (dict.buttonVisitSite || "Visit Site")}
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      );
    } else {
       mainButton = (
        <Button variant="outline" className="mt-4 shadow-md" disabled={true}>
          {dict.buttonNoPublicLink || "No Public Link"}
        </Button>
      );
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
              
              {hasVideo && embedUrl ? (
                <div className={cn(
                  "relative w-full max-w-md rounded-lg overflow-hidden shadow-xl my-4 border border-border/30 animate-in fade-in-0 zoom-in-95 duration-300 ease-out",
                  project.videoUrl?.includes("/shorts/") ? "aspect-[9/16]" : "aspect-video"
                )}>
                  <iframe
                    src={embedUrl}
                    title={`${project.name} video walkthrough`}
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                project.thumbnailUrl && // Ensure thumbnailUrl exists before rendering Image
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
              )}
              {mainButton}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
