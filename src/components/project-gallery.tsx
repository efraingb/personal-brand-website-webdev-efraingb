// src/components/project-gallery.tsx
"use client"; 

import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";
import type { Dictionary } from "@/lib/i18n";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";
import { Badge } from "./ui/badge";

interface ProjectGalleryProps {
  dict: Dictionary; 
  projectsData: Project[];
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
  projectCardDict: Dictionary; 
}

export default function ProjectGallery({ dict, projectsData, onProjectSelect, projectCardDict }: ProjectGalleryProps) {
  const recentIaProjectIds = ['proj-menta-ai'];
  const pastCollaborationsIds = ['collab-ulacit', 'proj-agroia', 'proj-negotia', 'proj-bless', 'proj-imagine-motiva', 'proj-agro-y-mas', 'proj-epa-en-linea', 'proj-kohls', 'collab-crdigital', 'collab-vita', 'collab-poder-judicial', 'collab-libreria-internacional'];

  const recentIaProjects = projectsData
    .filter(project => recentIaProjectIds.includes(project.id))
    .sort((a, b) => recentIaProjectIds.indexOf(a.id) - recentIaProjectIds.indexOf(b.id)); 

  const allPastCollaborations = projectsData
    .filter(project => pastCollaborationsIds.includes(project.id))
    .sort((a, b) => pastCollaborationsIds.indexOf(b.id) - pastCollaborationsIds.indexOf(a.id));
    
  const pastCollaborationsProjectsWithImages = allPastCollaborations.filter(p => p.thumbnailUrl);
  const pastCollaborationsProjectsWithoutImages = allPastCollaborations.filter(p => !p.thumbnailUrl);

  return (
    <section id="projects" className="py-16 md:py-24 bg-background animate-in fade-in-0 slide-in-from-bottom-12 duration-500 ease-out">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        
        {recentIaProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center">
              {dict.recentIaProjectsTitle}
            </h3>
            <div className="w-full md:w-1/2 mx-auto">
              {recentIaProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewProject={onProjectSelect} 
                  dict={projectCardDict} 
                />
              ))}
            </div>
          </div>
        )}

        {pastCollaborationsProjectsWithImages.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
              {dict.impactfulCollaborationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastCollaborationsProjectsWithImages.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewProject={onProjectSelect}
                  dict={projectCardDict} 
                />
              ))}
            </div>
          </div>
        )}

        {pastCollaborationsProjectsWithoutImages.length > 0 && (
            <div className="mb-16">
                <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
                {dict.otherKeyCollaborationsTitle}
                </h3>
                <div className="space-y-4">
                {pastCollaborationsProjectsWithoutImages.map((project) => (
                    <Card key={project.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl">
                        <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex-grow">
                                <CardTitle className="text-xl font-semibold text-primary">{project.name}</CardTitle>
                                {project.tags && (
                                    <div className="flex flex-wrap gap-1 mt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                )}
                                <CardDescription className="mt-3 text-sm text-foreground/80">
                                    {project.description}
                                </CardDescription>
                            </div>
                            <div className="flex-shrink-0 mt-4 sm:mt-0">
                                 <Button 
                                    onClick={() => onProjectSelect(project, false)}
                                    variant="outline"
                                    >
                                    <Eye className="mr-2 h-4 w-4" /> {projectCardDict.viewDetails || "View Details"}
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
                </div>
            </div>
        )}


        {projectsData.length === 0 && (
           <p className="text-center text-lg text-muted-foreground">{dict.noProjects}</p>
        )}
      </div>
    </section>
  );
}
