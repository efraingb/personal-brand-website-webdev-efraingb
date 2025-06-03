
// src/components/project-gallery.tsx
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";

interface ProjectGalleryProps {
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
}

export default function ProjectGallery({ onProjectSelect }: ProjectGalleryProps) {
  // Define IDs for categorization
  const recentIaProjectIds = ['proj-quiz-ai', 'proj-negotia', 'proj-agroia', 'proj-bless'];
  const pastCollaborationsIds = ['proj-imagine-motiva', 'proj-agro-y-mas', 'proj-epa-en-linea', 'proj-kohls'];

  const recentIaProjects = projectsData
    .filter(project => recentIaProjectIds.includes(project.id))
    .sort((a, b) => recentIaProjectIds.indexOf(a.id) - recentIaProjectIds.indexOf(b.id)); 

  const pastCollaborationsProjects = projectsData
    .filter(project => pastCollaborationsIds.includes(project.id))
    // You might want a different sorting for collaborations, e.g., by recency if you add a date, or just keep as is.
    .sort((a, b) => pastCollaborationsIds.indexOf(a.id) - pastCollaborationsIds.indexOf(b.id));


  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"> {/* Changed max-w-6xl to max-w-5xl */}
        <div className="text-center mb-10"> {/* Adjusted bottom margin */}
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            My Projects
          </h2>
          <div className="mt-3 mb-8 h-1 w-24 bg-accent rounded-full mx-auto"></div>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development.
            Each one represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        {recentIaProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
              Proyectos IA Recientes y Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentIaProjects.map((project) => (
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
          <div className="mb-16"> {/* Added bottom margin for spacing before next section or footer */}
            <h3 className="text-3xl font-semibold tracking-tight text-primary mb-10 text-center sm:text-left">
              Colaboraciones de Impacto
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
