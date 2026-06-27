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

const translateProject = (project: Project, dict: Dictionary): Project => {
  const projectsDict = dict?.projectsData || {};
  return {
    ...project,
    name: projectsDict[`${project.id}_name`] || project.name,
    description: projectsDict[`${project.id}_description`] || project.description,
  };
};

const translateCredentialColumns = (columns: CredentialColumn[], dict: Dictionary): CredentialColumn[] => {
  const credsDict = dict?.credentialsSection || {};
  return columns.map(column => ({
    ...column,
    title: credsDict[column.title] || column.title,
    credentials: (column.credentials || []).map(cred => ({
      ...cred,
      text: credsDict[cred.text] || cred.text,
    })),
  }));
};

export default async function Home(props: HomePageProps) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const lang = params.lang || 'en';
  const dict = await getDictionary(lang);
  
  if (!dict) return null;

  const modeParam = searchParams.mode;
  const mode = Array.isArray(modeParam) ? modeParam[0] : modeParam;

  const heroBase = dict.hero || {};
  let heroDict = { ...heroBase };
  
  // Strict safety check for mode-based hero content
  if (mode && typeof mode === 'string' && heroBase[mode] && typeof heroBase[mode] === 'object') {
    heroDict.subtitle = heroBase[mode].subtitle || heroDict.subtitle;
    heroDict.description = heroBase[mode].description || heroDict.description;
  }

  const translatedProjectsData = (getRawProjectsData || []).map(p => translateProject(p, dict));
  
  const docLinksDict = dict.documentLinksData || {};
  const translatedDocumentLinksData: LinkItem[] = (getRawDocumentLinksData || []).map(link => ({
    ...link,
    name: docLinksDict[`${link.id}_name`] || link.name,
    description: docLinksDict[`${link.id}_description`] || link.description,
    buttonText: docLinksDict[`${link.id}_buttonText`] || link.buttonText,
  }));

  const contactLinksDict = dict.contactLinksData || {};
  const translatedContactLinksData: LinkItem[] = (getRawContactLinksData || []).map(link => ({
    ...link,
    name: contactLinksDict[`${link.id}_name`] || link.name,
    text: contactLinksDict[`${link.id}_text`] || link.text,
  }));
  
  const navDict = dict.nav || {};
  const translatedNavLinksData = (getRawNavLinksData || []).map(link => ({
    ...link,
    label: navDict[link.labelKey] || link.labelKey,
  }));

  const translatedCredentialsData = translateCredentialColumns(getRawCredentialsData || [], dict);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <Header 
        dict={dict.header || {}} 
        navLinks={translatedNavLinksData} 
        lang={lang} 
        langSwitcherDict={dict.languageSwitcher || {}} 
      />
      <main className="flex-grow">
        <HeroSection dict={heroDict} />
        <PageClientWrapper
          projectsData={translatedProjectsData}
          projectGalleryDict={dict.projectGallery || {}}
          projectCardDict={dict.projectCard || {}}
          projectModalDict={dict.projectModal || {}}
          documentsSectionDict={dict.documentsSection || {}}
          documentLinksData={translatedDocumentLinksData}
          contactSectionDict={dict.contactSection || {}}
          contactLinksData={translatedContactLinksData}
          credentialsSectionDict={dict.credentialsSection || {}}
          credentialColumnsData={translatedCredentialsData}
        />
      </main>
      <Footer dict={dict.footer || {}} />
      <Toaster />
    </div>
  );
}