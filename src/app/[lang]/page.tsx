// src/app/[lang]/page.tsx
import React from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import Footer from '@/components/footer';
import type { Project, LinkItem, CredentialColumn } from '@/lib/types'; 
import { Toaster } from "@/components/ui/toaster";
import { getDictionary, Dictionary } from '@/lib/i18n';
import { projectsData as getRawProjectsData, documentLinksData as getRawDocumentLinksData, contactLinksData as getRawContactLinksData, navLinksData as getRawNavLinksData, credentialsData as getRawCredentialsData } from '@/lib/data';
import PageClientWrapper from '@/components/page-client-wrapper';

interface HomePageProps {
  params: Promise<{
    lang: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Helper function to translate project data
const translateProject = (project: Project, dict: Dictionary): Project => {
  return {
    ...project,
    name: dict.projectsData?.[`${project.id}_name`] || project.name,
    description: dict.projectsData?.[`${project.id}_description`] || project.description,
  };
};

const translateCredentialColumns = (columns: CredentialColumn[], dict: Dictionary): CredentialColumn[] => {
  return columns.map(column => ({
    ...column,
    title: dict.credentialsSection?.[column.title] || column.title,
    credentials: column.credentials.map(cred => ({
      ...cred,
      text: dict.credentialsSection?.[cred.text] || cred.text,
    })),
  }));
};

export default async function Home(props: HomePageProps) {
  // Await params and searchParams as required by Next.js 15
  const params = await props.params;
  const searchParams = await props.searchParams;
  const lang = params.lang;
  const dict = await getDictionary(lang);
  
  const mode = searchParams.mode as string | undefined;

  // Select Hero Dictionary based on mode
  let heroDict = { ...dict.hero };
  if (mode && dict.hero[mode]) {
    heroDict.subtitle = dict.hero[mode].subtitle;
    heroDict.description = dict.hero[mode].description;
  }

  // Translate dynamic data
  const translatedProjectsData = getRawProjectsData.map(p => translateProject(p, dict));
  
  const translatedDocumentLinksData: LinkItem[] = getRawDocumentLinksData.map(link => ({
    ...link,
    name: dict.documentLinksData?.[`${link.id}_name`] || link.name,
    description: dict.documentLinksData?.[`${link.id}_description`] || link.description,
    buttonText: dict.documentLinksData?.[`${link.id}_buttonText`] || link.buttonText,
  }));

  const translatedContactLinksData: LinkItem[] = getRawContactLinksData.map(link => ({
    ...link,
    name: dict.contactLinksData?.[`${link.id}_name`] || link.name,
    text: dict.contactLinksData?.[`${link.id}_text`] || link.text,
  }));
  
  const translatedNavLinksData = getRawNavLinksData.map(link => ({
    ...link,
    label: dict.nav?.[link.labelKey] || link.labelKey,
  }));

  const translatedCredentialsData = translateCredentialColumns(getRawCredentialsData, dict);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header dict={dict.header} navLinks={translatedNavLinksData} lang={lang} langSwitcherDict={dict.languageSwitcher} />
      <main className="flex-grow">
        <HeroSection dict={heroDict} />
        <PageClientWrapper
          projectsData={translatedProjectsData}
          projectGalleryDict={dict.projectGallery}
          projectCardDict={dict.projectCard}
          projectModalDict={dict.projectModal}
          documentsSectionDict={dict.documentsSection}
          documentLinksData={translatedDocumentLinksData}
          contactSectionDict={dict.contactSection}
          contactLinksData={translatedContactLinksData}
          credentialsSectionDict={dict.credentialsSection}
          credentialColumnsData={translatedCredentialsData}
        />
      </main>
      <Footer dict={dict.footer} />
      <Toaster />
    </div>
  );
}