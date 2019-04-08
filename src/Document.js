import React from 'react';
import Color from 'color';
import { Page, View, Document } from '@react-pdf/renderer';
import usePrimaryColor from './usePrimaryColor';
import Contact from './Contact';
import Skills from './Skills';
import Experience from './Experience';
import Contributions from './Contributions';
import References from './References';
import { Text } from './Typo';

export default function Doc() {
  const primaryColor = usePrimaryColor();
  const bgColor = new Color(primaryColor).lighten(5).hex();
  console.log(bgColor);

  return (
    <Document>
      <Page size="A4" style={{ ...styles.page, backgroundColor: bgColor }}>
        <View
          fixed
          style={{ ...styles.header, backgroundColor: primaryColor }}
        />
        <View style={styles.container}>
          <Contact />
        </View>
        <View style={styles.container}>
          <Skills />
        </View>
        <View style={styles.container}>
          <Experience />
        </View>
        <View style={styles.container}>
          <Contributions />
        </View>
        <View style={styles.container}>
          <References />
        </View>

        <View fixed style={{ ...styles.footer, backgroundColor: primaryColor }}>
          <Text style={styles.footerText}>
            This document is generated using React -
            https://github.com/quangbuule/resume
          </Text>
        </View>
      </Page>
    </Document>
  );
}

const styles = {
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    fontSize: 10,
    lineHeight: 1.5,
    paddingBottom: 24 + 24,
  },

  header: {
    height: 10,
    marginBottom: 24,
  },

  container: {
    marginBottom: 24,
    paddingLeft: 48,
    paddingRight: 48,
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 24,
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    color: '#ffffff',
  },

  footerText: { opacity: 0.5, fontSize: 8 },
};
