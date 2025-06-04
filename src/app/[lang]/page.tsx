// src/app/[lang]/page.tsx
import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ProjectGallery from '@/components/project-gallery';
import DocumentsSection from '@/components/documents-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import ProjectModal from '@/components/project-modal'; // This is a client component, state remains client-side
import type { Project } from '@/lib/types'; // Keep types
import { Toaster } from "@/components/ui/toaster"; // Toaster can remain client-side
import { getDictionary, Dictionary } from '@/lib/i18n';
import { projectsData as getRawProjectsData, documentLinksData as getRawDocumentLinksData, contactLinksData as getRawContactLinksData, navLinksData as getRawNavLinksData } from '@/lib/data'; // Import raw data getters

interface HomePageProps {
  params: {
    lang: string;
  };
}

// Helper function to translate project data
const translateProject = (project: Project, dict: Dictionary): Project => {
  return {
    ...project,
    name: dict.projectsData[`${project.id}_name`] || project.name,
    description: dict.projectsData[`${project.id}_description`] || project.description,
    // Tags are not translated in this iteration
  };
};


export default async function Home({ params }: HomePageProps) {
  const dict = await getDictionary(params.lang);

  // Translate dynamic data
  const translatedProjectsData = getRawProjectsData.map(p => translateProject(p, dict));
  
  const translatedDocumentLinksData = getRawDocumentLinksData.map(link => ({
    ...link,
    name: dict.documentLinksData[`${link.id}_name`] || link.name,
    description: dict.documentLinksData[`${link.id}_description`] || link.description,
    buttonText: dict.documentLinksData[`${link.id}_buttonText`] || link.buttonText,
  }));

  const translatedContactLinksData = getRawContactLinksData.map(link => ({
    ...link,
    name: dict.contactLinksData[`${link.id}_name`] || link.name,
    text: dict.contactLinksData[`${link.id}_text`] || link.text,
  }));
  
  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav[link.labelKey] || link.labelKey, // labelKey defined in data.ts
  }));


  // Note: State for ProjectModal (selectedProject, etc.) must be handled client-side.
  // We'll wrap the part of the page that needs this state in a client component.
  // For now, page.tsx itself becomes a Server Component.
  // The client-side logic for modal handling will be in a new wrapper or directly in a client version of ProjectGallery.
  // For simplicity in this refactor, modal state logic will be moved into a client component wrapper.

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={params.lang} langSwitcherDict={dict.languageSwitcher} />
      <main className="flex-grow">
        <HeroSection dict={dict.hero} />
        {/* ProjectGallery and Modal handling needs to be client-side if it manages modal state */}
        {/* For now, pass translated data. Modal interaction will require a client component. */}
        <PageClientWrapper
          projectsData={translatedProjectsData}
          projectGalleryDict={dict.projectGallery}
          projectCardDict={dict.projectCard}
          projectModalDict={dict.projectModal}
          documentsSectionDict={dict.documentsSection}
          documentLinksData={translatedDocumentLinksData}
          contactSectionDict={dict.contactSection}
          contactLinksData={translatedContactLinksData}
        />
      </main>
      <Footer dict={dict.footer} />
      <Toaster /> {/* Toaster is fine as it's globally available */}
    </div>
  );
}

// Create a new client component to handle client-side state for the modal
// src/app/[lang]/page-client-wrapper.tsx (or similar name)
// This is a simplified example; ProjectModal itself is already a client component.
// The main challenge is how ProjectGallery (server) triggers ProjectModal (client).
// We can pass data down and have ProjectGallery items call a function passed from this wrapper.

interface PageClientWrapperProps {
  projectsData: Project[];
  projectGalleryDict: Dictionary;
  projectCardDict: Dictionary;
  projectModalDict: Dictionary;
  documentsSectionDict: Dictionary;
  documentLinksData: any[]; // Adjust type
  contactSectionDict: Dictionary;
  contactLinksData: any[]; // Adjust type
}

function PageClientWrapper({ 
  projectsData, 
  projectGalleryDict, 
  projectCardDict, 
  projectModalDict,
  documentsSectionDict,
  documentLinksData,
  contactSectionDict,
  contactLinksData
}: PageClientWrapperProps) {
  // This component remains as a placeholder for where client logic would go.
  // The actual modal state is managed within ProjectGallery and ProjectModal (client components)
  // So, we can directly render them here.
  // The key is that ProjectGallery will receive translated projectsData.
  
  // For the modal to work, ProjectGallery needs to be a client component, or the modal trigger logic
  // needs to be carefully handled. Since ProjectCard (which triggers the modal) is client-side, this should work
  // if ProjectGallery passes down translated data to ProjectCard.

  // The original page.tsx was client, so this wrapper can be client as well.
  // Let's make this wrapper client and move the original Home state here.
  'use client';
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);
  const [currentProjectIsActive, setCurrentProjectIsActive] = React.useState<boolean | null>(null);

  const handleOpenProjectModal = (project: Project, isActive: boolean | null) => {
    setSelectedProject(project);
    setCurrentProjectIsActive(isActive);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
      setCurrentProjectIsActive(null);
    }, 300);
  };
  
  return (
    <>
      <ProjectGallery 
        dict={projectGalleryDict} 
        projectsData={projectsData} 
        onProjectSelect={handleOpenProjectModal} 
        projectCardDict={projectCardDict}
      />
      <DocumentsSection 
        dict={documentsSectionDict} 
        documentLinksData={documentLinksData} 
      />
      <ContactSection 
        dict={contactSectionDict} 
        contactLinksData={contactLinksData}
      />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isActive={currentProjectIsActive}
          isOpen={isProjectModalOpen}
          onClose={handleCloseProjectModal}
          dict={projectModalDict}
        />
      )}
    </>
  );
}
