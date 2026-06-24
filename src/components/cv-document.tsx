'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

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

const CVDocument = ({ cv }: { cv: any }) => {
  // Garantizar que todos los datos sean strings para evitar el error hasOwnProperty
  const safeName = String(cv?.name || '');
  const safeTitle = String(cv?.title || '');
  const safeSummary = String(cv?.summary || '');
  const safePhone = String(cv?.contact?.phone?.text || '');
  const safeEmail = String(cv?.contact?.email?.text || '');
  const safeWebsite = String(cv?.contact?.website?.text || '');
  const safeLinkedin = String(cv?.contact?.linkedin?.text || '');
  const safeSections = Array.isArray(cv?.sections) ? cv.sections : [];

  return (
    <Document title={safeName} author="EfrainGB.org">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{safeName}</Text>
          <Text style={styles.title}>{safeTitle}</Text>
          <View style={styles.contactInfo}>
            {safePhone !== '' && <Text>{safePhone}</Text>}
            {safeEmail !== '' && <Text>{safeEmail}</Text>}
            {safeWebsite !== '' && <Text>{safeWebsite}</Text>}
            {safeLinkedin !== '' && <Text>{safeLinkedin}</Text>}
          </View>
        </View>

        <Text style={styles.summary}>{safeSummary}</Text>

        {safeSections.map((section: any, sIdx: number) => (
          <View key={`section-${sIdx}`} style={styles.section} wrap={false}>
            <Text style={styles.sectionTitle}>{String(section.title || '')}</Text>
            
            {section.isTwoColumns ? (
              <View style={styles.twoColumnContainer}>
                <View style={styles.column}>
                  {(section.items || []).filter((_: any, i: number) => i % 2 === 0).map((item: any, iIdx: number) => (
                    <View key={`item-left-${iIdx}`} style={styles.skillItem}>
                      <Text style={styles.skillTitle}>{String(item.title || '')}</Text>
                      <Text style={styles.skillDesc}>
                        {Array.isArray(item.description) 
                          ? String(item.description.join(' · ')) 
                          : String(item.description || '')}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.column}>
                  {(section.items || []).filter((_: any, i: number) => i % 2 !== 0).map((item: any, iIdx: number) => (
                    <View key={`item-right-${iIdx}`} style={styles.skillItem}>
                      <Text style={styles.skillTitle}>{String(item.title || '')}</Text>
                      <Text style={styles.skillDesc}>
                        {Array.isArray(item.description) 
                          ? String(item.description.join(' · ')) 
                          : String(item.description || '')}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            ) : (
              <View>
                {(section.items || []).map((item: any, iIdx: number) => (
                  <View key={`item-${iIdx}`} style={styles.item} wrap={false}>
                    <View style={styles.itemHeader}>
                      <View style={styles.itemTitleContainer}>
                        <Text style={styles.itemTitle}>{String(item.title || '')}</Text>
                        {item.subtitle && <Text style={styles.itemSubtitle}> | {String(item.subtitle || '')}</Text>}
                      </View>
                      {item.date && <Text style={styles.itemDate}>{String(item.date || '')}</Text>}
                    </View>
                    
                    {item.description && (
                      <View>
                        {Array.isArray(item.description) ? (
                          item.description.map((desc: any, dIdx: number) => (
                            <View key={`desc-${dIdx}`} style={styles.descriptionItem}>
                              <Text style={styles.bullet}>•</Text>
                              <Text style={styles.descriptionText}>{String(desc || '')}</Text>
                            </View>
                          ))
                        ) : (
                          <View style={styles.descriptionItem}>
                            <Text style={styles.descriptionText}>{String(item.description || '')}</Text>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default CVDocument;