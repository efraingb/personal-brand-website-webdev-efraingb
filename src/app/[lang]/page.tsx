// src/app/[lang]/page.tsx
import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import type { Project, LinkItem } from '@/lib/types'; // Added LinkItem
import { Toaster } from "@/components/ui/toaster";
import { getDictionary, Dictionary } from '@/lib/i18n';
import { projectsData as getRawProjectsData, documentLinksData as getRawDocumentLinksData, contactLinksData as getRawContactLinksData, navLinksData as getRawNavLinksData } from '@/lib/data';
import PageClientWrapper from '@/components/page-client-wrapper'; // Import the new client wrapper

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
  
  const translatedDocumentLinksData: LinkItem[] = getRawDocumentLinksData.map(link => ({
    ...link,
    name: dict.documentLinksData[`${link.id}_name`] || link.name,
    description: dict.documentLinksData[`${link.id}_description`] || link.description,
    buttonText: dict.documentLinksData[`${link.id}_buttonText`] || link.buttonText,
  }));

  const translatedContactLinksData: LinkItem[] = getRawContactLinksData.map(link => ({
    ...link,
    name: dict.contactLinksData[`${link.id}_name`] || link.name,
    text: dict.contactLinksData[`${link.id}_text`] || link.text,
  }));
  
  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav[link.labelKey] || link.labelKey, // labelKey defined in data.ts
  }));

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={params.lang} langSwitcherDict={dict.languageSwitcher} />
      <main className="flex-grow">
        <HeroSection dict={dict.hero} />
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
      <Toaster />
    </div>
  );
}

// PageClientWrapperProps interface and PageClientWrapper function are now moved to a separate file.
