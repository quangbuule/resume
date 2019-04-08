import React from 'react';
import { View } from '@react-pdf/renderer';
import useProfile from './useProfile';
import Section from './Section';
import { Text } from './Typo';

export default function Experience() {
  const profile = useProfile();
  return (
    <Section title="Experience">
      {profile.experience.map(
        ({ timeRange, organization, title, description }) => (
          <Section.Row key={organization}>
            <Section.LeftCol>
              <Text>{timeRange}</Text>
              <Text weight="bold">{organization}</Text>
            </Section.LeftCol>
            <Section.RightCol>
              <Text weight="bold">{title}</Text>
              <View style={styles.description}>
                {description.map((desc, idx) => (
                  <Text key={idx}>- {desc}</Text>
                ))}
              </View>
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
