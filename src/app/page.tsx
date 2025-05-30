// src/app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectGallery from '@/components/project-gallery';
import DocumentsSection from '@/components/documents-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ProjectModal from '@/components/project-modal';
import type { Project } from '@/lib/types';
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [currentProjectIsActive, setCurrentProjectIsActive] = useState<boolean | null>(null);

  // This effect ensures smooth scrolling works across browsers, especially for hash links.
  useEffect(() => {
    // Applying it directly to html might be overridden by Next.js or other global styles.
    // It's generally better handled by CSS in globals.css, but this is a fallback.
    // The 'scroll-behavior: smooth;' is already in globals.css under html tag.
  }, []);

  const handleOpenProjectModal = (project: Project, isActive: boolean | null) => {
    setSelectedProject(project);
    setCurrentProjectIsActive(isActive);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    // Delay clearing project to allow modal to animate out
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentProjectIsActive(null);
    }, 300); // Adjust delay to match modal animation duration
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectGallery onProjectSelect={handleOpenProjectModal} />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
      {selectedProject && ( // Conditionally render modal only when a project is selected
        <ProjectModal
          project={selectedProject}
          isActive={currentProjectIsActive}
          isOpen={isProjectModalOpen}
          onClose={handleCloseProjectModal}
        />
      )}
      <Toaster />
    </div>
  );
}
