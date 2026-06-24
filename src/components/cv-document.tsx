'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
import type { CV, CVItem } from '@/lib/types';

// Registramos fuentes estándar para asegurar que el PDF sea siempre vectorial y seleccionable
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    padding: 45,
    backgroundColor: '#ffffff',
    color: '#1a202c',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 15,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 12,
    marginTop: 4,
    color: '#40A2D8',
    fontFamily: 'Helvetica-Bold',
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    fontSize: 9,
    color: '#64748b',
    gap: 12,
  },
  summary: {
    marginBottom: 20,
    lineHeight: 1.5,
    textAlign: 'justify',
    color: '#334155',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
    borderBottomWidth: 2,
    borderBottomColor: '#40A2D8',
    paddingBottom: 3,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  item: {
    marginBottom: 12,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 3,
  },
  itemTitleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '80%',
  },
  itemTitle: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },
  itemSubtitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Oblique',
    color: '#64748b',
  },
  itemDate: {
    fontSize: 9,
    fontFamily: 'Helvetica',
    color: '#94a3b8',
  },
  descriptionItem: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 8,
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: '#40A2D8',
  },
  descriptionText: {
    flex: 1,
    fontSize: 9.5,
    lineHeight: 1.4,
    color: '#475569',
  },
  twoColumnContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  column: {
    flex: 1,
  },
  skillItem: {
    marginBottom: 8,
  },
  skillTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
    marginBottom: 2,
  },
  skillDesc: {
    fontSize: 9,
    color: '#64748b',
  }
});

const CVDescription = ({ text }: { text: string | string[] }) => {
  if (Array.isArray(text)) {
    return (
      <View>
        {text.map((item, index) => (
          <View key={index} style={styles.descriptionItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.descriptionText}>{item}</Text>
          </View>
        ))}
      </View>
    );
  }
  return <Text style={styles.descriptionText}>{text}</Text>;
};

const CVDocument = ({ cv }: { cv: CV }) => (
  <Document title={`${cv.name} - CV`} author={cv.name} creator="EfrainGB.org">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>{cv.name}</Text>
        <Text style={styles.title}>{cv.title}</Text>
        <View style={styles.contactInfo}>
          {cv.contact.phone && <Text>{cv.contact.phone.text}</Text>}
          {cv.contact.email && <Text>{cv.contact.email.text}</Text>}
          {cv.contact.website && <Text>{cv.contact.website.text}</Text>}
          {cv.contact.linkedin && <Text>{cv.contact.linkedin.text}</Text>}
        </View>
      </View>

      <Text style={styles.summary}>{cv.summary}</Text>

      {cv.sections.map((section) => (
        <View key={section.id} style={styles.section} wrap={false}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          
          {section.isTwoColumns ? (
            <View style={styles.twoColumnContainer}>
              <View style={styles.column}>
                {section.items.filter((_, i) => i % 2 === 0).map(item => (
                  <View key={item.id} style={styles.skillItem}>
                    <Text style={styles.skillTitle}>{item.title}</Text>
                    <Text style={styles.skillDesc}>
                      {Array.isArray(item.description) ? item.description.join(' · ') : item.description}
                    </Text>
                  </View>
                ))}
              </View>
              <View style={styles.column}>
                {section.items.filter((_, i) => i % 2 !== 0).map(item => (
                  <View key={item.id} style={styles.skillItem}>
                    <Text style={styles.skillTitle}>{item.title}</Text>
                    <Text style={styles.skillDesc}>
                      {Array.isArray(item.description) ? item.description.join(' · ') : item.description}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          ) : (
            <View>
              {section.items.map((item) => (
                <View key={item.id} style={styles.item} wrap={false}>
                  <View style={styles.itemHeader}>
                    <View style={styles.itemTitleContainer}>
                      <Text style={styles.itemTitle}>{item.title}</Text>
                      {item.subtitle && <Text style={styles.itemSubtitle}> | {item.subtitle}</Text>}
                    </View>
                    {item.date && <Text style={styles.itemDate}>{item.date}</Text>}
                  </View>
                  <CVDescription text={item.description} />
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </Page>
  </Document>
);

export default CVDocument;
