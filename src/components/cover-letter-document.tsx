'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    padding: 60,
    backgroundColor: '#ffffff',
    color: '#1e293b',
  },
  header: {
    marginBottom: 35,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
    paddingBottom: 25,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 10,
    color: '#40A2D8',
    marginTop: 4,
    fontFamily: 'Helvetica-Bold',
  },
  metaInfo: {
    marginTop: 15,
    fontSize: 9,
    color: '#64748b',
    flexDirection: 'row',
    gap: 20,
  },
  date: {
    marginTop: 35,
    marginBottom: 20,
    fontFamily: 'Helvetica-Bold',
  },
  recipient: {
    marginBottom: 30,
  },
  recipientName: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
  },
  companyName: {
    color: '#64748b',
    fontSize: 11,
  },
  jobRef: {
    fontSize: 9,
    color: '#94a3b8',
    marginTop: 4,
  },
  subject: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    marginBottom: 25,
    color: '#003049',
  },
  content: {
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  paragraph: {
    marginBottom: 15,
  }
});

/**
 * CoverLetterDocument - Versión Limpia y Profesional
 * Se eliminó el pie de página promocional para mayor sobriedad corporativa.
 */
const CoverLetterDocument = ({ letter }: { letter: any }) => {
  return (
    <Document title={String(letter?.jobTitle || 'Cover Letter')} author="Efraín González Bermúdez">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>Efraín González Bermúdez</Text>
          <Text style={styles.subtitle}>Enterprise Architect | Senior IT Consultant</Text>
          <View style={styles.metaInfo}>
            <Text>San José, Costa Rica</Text>
            <Text>hiefraingb@gmail.com</Text>
            <Text>+506 8693 9737</Text>
          </View>
        </View>

        <Text style={styles.date}>{String(letter?.date || '')}</Text>

        <View style={styles.recipient}>
          <Text style={styles.recipientName}>{String(letter?.recipientName || '')}</Text>
          <Text style={styles.companyName}>{String(letter?.companyName || '')}</Text>
          {String(letter?.jobId || '') !== '' && (
            <Text style={styles.jobRef}>Ref: Job ID {String(letter?.jobId || '')}</Text>
          )}
        </View>

        <Text style={styles.subject}>Re: Application for {String(letter?.jobTitle || '')}</Text>

        <View style={styles.content}>
          {(letter?.content || []).map((p: any, i: number) => (
            <Text key={`para-${i}`} style={styles.paragraph}>{String(p || '')}</Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CoverLetterDocument;
