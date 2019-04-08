import React from 'react';
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';
import useProfile from './useProfile';
import Section from './Section';
import { Text } from './Typo';

export default function Education() {
  const profile = useProfile();
  return (
    <Section title="Education">
      {profile.education.map(
        ({ timeRange, university, title, description }) => (
          <Section.Row key={university}>
            <Section.LeftCol>
              <Text>{timeRange}</Text>
              <Text weight="bold">{university}</Text>
            </Section.LeftCol>
            <Section.RightCol>
              <Text weight="bold">{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </Section.RightCol>
          </Section.Row>
        )
      )}
    </Section>
  );
}

const styles = {
  description: {
    marginTop: 8,
  },
};
