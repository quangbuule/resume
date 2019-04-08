import React from 'react';
import { View } from '@react-pdf/renderer';
import useProfile from './useProfile';
import Section from './Section';
import { Text } from './Typo';

export default function Skills() {
  const profile = useProfile();
  return (
    <Section title="Skills">
      {profile.skills.map(({ name, description }) => (
        <Section.Row key={name}>
          <Section.LeftCol>
            <Text weight="bold">{name}</Text>
          </Section.LeftCol>
          <Section.RightCol>
            <View style={styles.description}>
              {description.map((desc, idx) => (
                <Text key={idx}>- {desc}</Text>
              ))}
            </View>
          </Section.RightCol>
        </Section.Row>
      ))}
    </Section>
  );
}

const styles = {
  description: {},
};
