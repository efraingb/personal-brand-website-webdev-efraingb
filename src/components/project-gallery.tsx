// src/components/project-gallery.tsx
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";

interface ProjectGalleryProps {
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
}

export default function ProjectGallery({ onProjectSelect }: ProjectGalleryProps) {
  // Define IDs for categorization
  const recentInnovationsIds = ['proj-quiz-ai', 'proj-negotia', 'proj-agroia', 'proj-bless'];
  const pastCollaborationsIds = ['proj-imagine-motiva']; // Assuming AgroIA was moved to recent or not part of "past"

  const recentInnovationsProjects = projectsData
    .filter(project => recentInnovationsIds.includes(project.id))
    .sort((a, b) => recentInnovationsIds.indexOf(a.id) - recentInnovationsIds.indexOf(b.id)); 

  const pastCollaborationsProjects = projectsData
    .filter(project => pastCollaborationsIds.includes(project.id))
    .sort((a, b) => pastCollaborationsIds.indexOf(a.id) - pastCollaborationsIds.indexOf(b.id));


  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"> {/* Added max-w-6xl mx-auto */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development.
            Each one represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        {recentInnovationsProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-8 text-center sm:text-left">
              Proyectos Destacados con IA y Plataformas Recientes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Reduced lg:grid-cols-3 to md:grid-cols-2 for potentially larger cards */}
              {recentInnovationsProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewProject={onProjectSelect} 
                />
              ))}
            </div>
          </div>
        )}

        {pastCollaborationsProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-8 text-center sm:text-left">
              Colaboraciones Anteriores de Impacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Reduced lg:grid-cols-3 to md:grid-cols-2 */}
              {pastCollaborationsProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onViewProject={onProjectSelect} 
                />
              ))}
            </div>
          </div>
        )}

        {projectsData.length === 0 && (
           <p className="text-center text-lg text-muted-foreground">No projects to display at the moment. Check back soon!</p>
        )}
      </div>
    </section>
  );
}
