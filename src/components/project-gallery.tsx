// src/components/project-gallery.tsx
import { projectsData } from "@/lib/data";
import type { Project } from "@/lib/types";
import ProjectCard from "./project-card";

interface ProjectGalleryProps {
  onProjectSelect: (project: Project, isActive: boolean | null) => void;
}

export default function ProjectGallery({ onProjectSelect }: ProjectGalleryProps) {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development.
            Each one represents a unique challenge and learning opportunity.
          </p>
        </div>
        
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onViewProject={onProjectSelect} 
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-lg text-muted-foreground">No projects to display at the moment. Check back soon!</p>
        )}
      </div>
    </section>
  );
}
