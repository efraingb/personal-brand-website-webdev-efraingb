'use client';

import React from 'react';
import type { Project, LinkItem, Credential, CredentialColumn } from '@/lib/types';
import type { Dictionary } from '@/lib/i18n';
import ProjectGallery from '@/components/project-gallery';
import DocumentsSection from '@/components/documents-section';
import ContactSection from '@/components/contact-section';
import ProjectModal from '@/components/project-modal';
import CredentialsSection from '@/components/credentials-section';

interface PageClientWrapperProps {
  projectsData: Project[];
  projectGalleryDict: Dictionary;
  projectCardDict: Dictionary;
  projectModalDict: Dictionary;
  documentsSectionDict: Dictionary;
  documentLinksData: LinkItem[];
  contactSectionDict: Dictionary;
  contactLinksData: LinkItem[];
  credentialsSectionDict: Dictionary;
  credentialColumnsData: CredentialColumn[];
}

export default function PageClientWrapper({
  projectsData,
  projectGalleryDict,
  projectCardDict,
  projectModalDict,
  documentsSectionDict,
  documentLinksData,
  contactSectionDict,
  contactLinksData,
  credentialsSectionDict,
  credentialColumnsData,
}: PageClientWrapperProps) {
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
    }, 300); // Corresponds to modal animation duration
  };

  return (
    <>
      <CredentialsSection 
        dict={credentialsSectionDict} 
        columns={credentialColumnsData} 
      />
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
