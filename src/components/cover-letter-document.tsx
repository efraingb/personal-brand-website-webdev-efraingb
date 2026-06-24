'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import type { CoverLetter } from '@/lib/types';

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
    color: '#64748b',
    marginTop: 4,
    fontFamily: 'Helvetica-Bold',
  },
  metaInfo: {
    marginTop: 15,
    fontSize: 9,
    color: '#94a3b8',
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
  },
  footer: {
    marginTop: 50,
    fontSize: 9,
    color: '#cbd5e1',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 15,
  }
});

const CoverLetterDocument = ({ letter }: { letter: CoverLetter }) => (
  <Document title={`Cover Letter - ${letter.jobTitle}`} author="Efraín González Bermúdez" creator="EfrainGB.org">
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Efraín González Bermúdez</Text>
        <Text style={styles.subtitle}>Enterprise Architect | Sr. IT Consultant</Text>
        <View style={styles.metaInfo}>
          <Text>San José, Costa Rica</Text>
          <Text>hiefraingb@gmail.com</Text>
          <Text>+506 8693 9737</Text>
        </View>
      </View>

      <Text style={styles.date}>{letter.date}</Text>

      <View style={styles.recipient}>
        <Text style={styles.recipientName}>{letter.recipientName}</Text>
        <Text style={styles.companyName}>{letter.companyName}</Text>
        {letter.jobId && <Text style={styles.jobRef}>Ref: Job ID {letter.jobId}</Text>}
      </View>

      <Text style={styles.subject}>Re: Application for {letter.jobTitle}</Text>

      <View style={styles.content}>
        {letter.content.map((p, i) => (
          <Text key={i} style={styles.paragraph}>{p}</Text>
        ))}
      </View>

      <Text style={styles.footer}>Document generated via EfrainGB.org/en/cv/enterprise</Text>
    </Page>
  </Document>
);

export default CoverLetterDocument;
