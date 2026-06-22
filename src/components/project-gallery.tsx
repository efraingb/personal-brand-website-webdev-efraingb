
// src/components/project-gallery.tsx
"use client"; 

import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";
import type { Dictionary } from "@/lib/i18n";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Eye } from "lucide-react";

interface ProjectGalleryProps {
  dict: Dictionary; 
  projectsData: Project[];
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
  projectCardDict: Dictionary; 
}

export default function ProjectGallery({ dict, projectsData, onProjectSelect, projectCardDict }: ProjectGalleryProps) {
  // 1. Proyectos Principales (Tu Top 3 de alta importancia)
  const mainActiveProjectIds = ['proj-menta-ai', 'proj-progressia', 'proj-bless'];
  
  // 2. Laboratorio de IA (Conceptos potentes)
  const aiLabProjectIds = ['proj-agroia', 'proj-negotia'];

  // 3. Colaboraciones Estratégicas (Marcas e Instituciones)
  const collaborationIds = [
    'collab-ulacit', 
    'proj-imagine-motiva', 
    'proj-agro-y-mas', 
    'proj-epa-en-linea', 
    'proj-kohls', 
    'collab-crdigital', 
    'collab-vita', 
    'collab-poder-judicial', 
    'collab-libreria-internacional'
  ];

  const mainActiveProjects = projectsData
    .filter(project => mainActiveProjectIds.includes(project.id))
    .sort((a, b) => mainActiveProjectIds.indexOf(a.id) - mainActiveProjectIds.indexOf(b.id));

  const aiLabProjects = projectsData
    .filter(project => aiLabProjectIds.includes(project.id))
    .sort((a, b) => aiLabProjectIds.indexOf(a.id) - aiLabProjectIds.indexOf(b.id));

  const collaborations = projectsData
    .filter(project => collaborationIds.includes(project.id))
    .sort((a, b) => collaborationIds.indexOf(a.id) - collaborationIds.indexOf(b.id));
    
  // CRÍTICO: Solo mostrar en tarjetas grandes si tienen imagen real para no romper la estética comercial
  const collabsWithImages = collaborations.filter(p => !!p.thumbnailUrl && p.thumbnailUrl.trim() !== '');
  const collabsTextOnly = collaborations.filter(p => !p.thumbnailUrl || p.thumbnailUrl.trim() === '');

  return (
    <section id="projects" className="py-16 md:py-24 bg-background animate-in fade-in-0 slide-in-from-bottom-12 duration-500 ease-out">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {dict.title}
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            {dict.description}
          </p>
        </div>
        
        {/* SECCIÓN 1: PROYECTOS PRINCIPALES Y ACTIVOS */}
        {mainActiveProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center border-b pb-4">
              {dict.mainActiveProjectsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainActiveProjects.map((project) => (
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

        {/* SECCIÓN 2: LABORATORIO DE IA Y CONCEPTOS */}
        {aiLabProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center border-b pb-4">
              {dict.aiLabTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {aiLabProjects.map((project) => (
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

        {/* SECCIÓN 3: COLABORACIONES ESTRATÉGICAS CON IMAGEN */}
        {collabsWithImages.length > 0 && (
          <div className="mb-20">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center border-b pb-4">
              {dict.strategicCollaborationsTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collabsWithImages.map((project) => (
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

        {/* SECCIÓN 4: OTRAS COLABORACIONES E IMPACTO (TEXTO - ESTILO SUTIL) */}
        {collabsTextOnly.length > 0 && (
            <div className="mb-16">
                <h3 className="text-2xl font-semibold tracking-tight text-primary/70 mb-8 text-center sm:text-left">
                  {dict.otherImpactTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {collabsTextOnly.map((project) => (
                    <Card key={project.id} className="shadow-sm hover:shadow-md transition-shadow duration-300 rounded-xl border-dashed bg-muted/20">
                        <div className="p-4 flex justify-between items-center gap-4">
                            <div className="flex-grow">
                                <CardTitle className="text-lg font-semibold text-primary">{project.name}</CardTitle>
                                <CardDescription className="mt-1 text-xs text-foreground/70 line-clamp-1">
                                    {project.description}
                                </CardDescription>
                            </div>
                            <Button 
                                onClick={() => onProjectSelect(project, !!project.url && project.url !== '#')}
                                variant="ghost"
                                size="sm"
                                >
                                <Eye className="h-4 w-4" />
                            </Button>
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
