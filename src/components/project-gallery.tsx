
// src/components/project-gallery.tsx
"use client"; 

import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";
import type { Dictionary } from "@/lib/i18n";

interface ProjectGalleryProps {
  dict: Dictionary; 
  projectsData: Project[];
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
  projectCardDict: Dictionary; 
}

export default function ProjectGallery({ dict, projectsData, onProjectSelect, projectCardDict }: ProjectGalleryProps) {
  const recentIaProjectIds = ['proj-quiz-ai', 'proj-negotia', 'proj-agroia', 'proj-bless'];
  const pastCollaborationsIds = ['proj-imagine-motiva', 'proj-agro-y-mas', 'proj-epa-en-linea', 'proj-kohls', 'collab-crdigital', 'collab-vita'];

  const recentIaProjects = projectsData
    .filter(project => recentIaProjectIds.includes(project.id))
    .sort((a, b) => recentIaProjectIds.indexOf(a.id) - recentIaProjectIds.indexOf(b.id)); 

  const pastCollaborationsProjects = projectsData
    .filter(project => pastCollaborationsIds.includes(project.id))
    .sort((a, b) => pastCollaborationsIds.indexOf(a.id) - pastCollaborationsIds.indexOf(b.id));

  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
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
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
              {dict.recentIaProjectsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        {pastCollaborationsProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
              {dict.impactfulCollaborationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastCollaborationsProjects.map((project) => (
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

        {projectsData.length === 0 && (
           <p className="text-center text-lg text-muted-foreground">{dict.noProjects}</p>
        )}
      </div>
    </section>
  );
}
