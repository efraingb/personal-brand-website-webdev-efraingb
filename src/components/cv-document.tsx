// src/components/cv-document.tsx
'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link } from '@react-pdf/renderer';
import type { CV, CVItem } from '@/lib/types';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    padding: 40,
    backgroundColor: '#fff',
    color: '#000',
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    borderBottom: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 12,
    marginTop: 2,
    fontFamily: 'Helvetica-Oblique',
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
    fontSize: 9,
  },
  contactItem: {
    marginHorizontal: 8,
    textDecoration: 'none',
    color: '#000',
  },
  summary: {
    textAlign: 'center',
    marginVertical: 15,
    fontFamily: 'Helvetica',
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    borderBottom: 1,
    borderBottomColor: '#000',
    paddingBottom: 2,
    marginBottom: 8,
  },
  item: {
    marginBottom: 10,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 2,
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    maxWidth: '80%',
  },
  itemSubtitle: {
    fontFamily: 'Helvetica-Oblique',
  },
  itemDate: {
    fontSize: 9,
    fontFamily: 'Helvetica',
  },
  description: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  descriptionList: {
    paddingLeft: 10,
  },
  descriptionListItem: {
    flexDirection: 'row',
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
    lineHeight: 1.3,
  },
  listItemText: {
    flex: 1,
    fontSize: 10,
    lineHeight: 1.3,
  },
  twoColumnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    width: '50%',
  },
  skillItem: {
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
  },
  skillDescription: {
    fontSize: 10,
  }
});

const Description = ({ text }: { text: string | string[] }) => {
  if (Array.isArray(text)) {
    return (
      <View style={styles.descriptionList}>
        {text.map((item, index) => (
          <View key={index} style={styles.descriptionListItem}>
            <Text style={styles.bulletPoint}>• </Text>
            <Text style={styles.listItemText}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }
  return <Text style={styles.description}>{text}</Text>;
};

const CVDocument = ({ cv }: { cv: CV }) => (
  <Document
    title={`${cv.name} CV`}
    author={cv.name}
    subject={`CV of ${cv.name}`}
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{cv.name}</Text>
        <Text style={styles.title}>{cv.title}</Text>
        <View style={styles.contactInfo}>
          {cv.contact.phone && <Link style={styles.contactItem} src={cv.contact.phone.url}>{cv.contact.phone.text}</Link>}
          {cv.contact.email && <Link style={styles.contactItem} src={cv.contact.email.url}>{cv.contact.email.text}</Link>}
          {cv.contact.website && <Link style={styles.contactItem} src={cv.contact.website.url}>{cv.contact.website.text}</Link>}
          {cv.contact.linkedin && <Link style={styles.contactItem} src={cv.contact.linkedin.url}>{cv.contact.linkedin.text}</Link>}
        </View>
      </View>

      <Text style={styles.summary}>{cv.summary}</Text>

      {cv.sections.map((section) => (
        <View key={section.id} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.isTwoColumns ? (
            <View style={styles.twoColumnContainer}>
              {/* This assumes skills are split into two columns somehow. The data has two items. */}
              <View style={styles.column}>
                {section.items.filter((_, i) => i % 2 === 0).map(item => (
                  <View key={item.id} style={styles.skillItem}>
                    <Text style={styles.skillTitle}>{item.title}</Text>
                    <Text style={styles.skillDescription}>{Array.isArray(item.description) ? item.description.join(' · ') : item.description}</Text>
                  </View>
                ))}
              </View>
               <View style={styles.column}>
                {section.items.filter((_, i) => i % 2 !== 0).map(item => (
                  <View key={item.id} style={styles.skillItem}>
                    <Text style={styles.skillTitle}>{item.title}</Text>
                    <Text style={styles.skillDescription}>{Array.isArray(item.description) ? item.description.join(' · ') : item.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            section.items.map((item: CVItem) => (
              <View key={item.id} style={styles.item}>
                <View style={styles.itemHeader}>
                  <Text style={styles.itemTitle}>
                    {item.title}
                    {item.titleLink && <Link src={item.titleLink.url}> {item.titleLink.text}</Link>}
                    {item.subtitle && <Text style={styles.itemSubtitle}> | {item.subtitle}</Text>}
                  </Text>
                  {item.date && <Text style={styles.itemDate}>{item.date}</Text>}
                </View>
                <Description text={item.description} />
              </View>
            ))
          )}
        </View>
      ))}
    </Page>
  </Document>
);

export default CVDocument;
