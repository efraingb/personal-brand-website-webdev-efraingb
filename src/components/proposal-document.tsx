'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    padding: 50,
    backgroundColor: '#ffffff',
    color: '#1a202c',
  },
  header: {
    marginBottom: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#003049',
    paddingBottom: 20,
  },
  proposalLabel: {
    fontSize: 9,
    color: '#40A2D8',
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  projectName: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
  },
  metaBlock: {
    width: '30%',
  },
  metaLabel: {
    fontSize: 8,
    color: '#94a3b8',
    textTransform: 'uppercase',
    marginBottom: 3,
  },
  metaValue: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
    marginBottom: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#40A2D8',
    paddingLeft: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 5,
  },
  bullet: {
    width: 12,
    color: '#40A2D8',
  },
  bulletText: {
    flex: 1,
    lineHeight: 1.4,
  },
  phaseItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f8fafc',
    borderRadius: 4,
  },
  phaseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  phaseTitle: {
    fontFamily: 'Helvetica-Bold',
    color: '#003049',
  },
  phaseDuration: {
    fontSize: 9,
    color: '#40A2D8',
  },
  investmentBox: {
    marginTop: 10,
    backgroundColor: '#003049',
    padding: 20,
    borderRadius: 8,
    color: '#ffffff',
  },
  invRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: 'rgba(255,255,255,0.3)',
  },
  totalLabel: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
  },
  totalValue: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
  }
});

const ProposalDocument = ({ proposal }: { proposal: any }) => {
  return (
    <Document title={String(proposal?.projectName || 'Proposal')} author="Efraín González Bermúdez">
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.proposalLabel}>Project Proposal</Text>
          <Text style={styles.projectName}>{String(proposal?.projectName || '')}</Text>
          
          <View style={styles.metaContainer}>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>Client</Text>
              <Text style={styles.metaValue}>{String(proposal?.clientName || '')}</Text>
            </View>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>Date</Text>
              <Text style={styles.metaValue}>{String(proposal?.date || '')}</Text>
            </View>
            <View style={styles.metaBlock}>
              <Text style={styles.metaLabel}>Valid Until</Text>
              <Text style={styles.metaValue}>{String(proposal?.validUntil || '')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Strategic Objectives</Text>
          {(proposal?.objectives || []).map((obj: any, i: number) => (
            <View key={i} style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{String(obj || '')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Project Scope</Text>
          {(proposal?.scope || []).map((item: any, i: number) => (
            <View key={i} style={styles.bulletItem}>
              <Text style={styles.bullet}>✓</Text>
              <Text style={styles.bulletText}>{String(item || '')}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Plan & Roadmap</Text>
          {(proposal?.phases || []).map((phase: any, i: number) => (
            <View key={i} style={styles.phaseItem}>
              <View style={styles.phaseHeader}>
                <Text style={styles.phaseTitle}>{String(phase.title || '')}</Text>
                <Text style={styles.phaseDuration}>{String(phase.duration || '')}</Text>
              </View>
              {(phase.items || []).map((item: any, j: number) => (
                <Text key={j} style={{ fontSize: 8, color: '#64748b' }}>• {String(item || '')}</Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Investment Summary</Text>
          <View style={styles.investmentBox}>
            {(proposal?.investment || []).map((inv: any, i: number) => (
              <View key={i} style={styles.invRow}>
                <Text>{String(inv.concept || '')}</Text>
                <Text>{String(proposal.currency || '$')} {String(inv.amount || '0')}</Text>
              </View>
            ))}
            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Investment</Text>
              <Text style={styles.totalValue}>{String(proposal.currency || '$')} {String(proposal.total || '0')}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ProposalDocument;
