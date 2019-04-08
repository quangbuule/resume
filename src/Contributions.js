import React from 'react';
import { View, Image } from '@react-pdf/renderer';
import useProfile from './useProfile';
import Section from './Section';
import { Text } from './Typo';

export default function Contributions() {
  const profile = useProfile();
  return (
    <Section title="Contributions">
      {profile.contributions.map(({ name, description }) => (
        <Section.Row key={name}>
          <Section.LeftCol>
            <Text weight="bold">{name}</Text>
          </Section.LeftCol>
          <Section.RightCol>
            <View style={styles.description}>
              {description.map((desc, idx) => {
                if (desc.image) {
                  return <Image src={desc.image} style={styles.image} />;
                }

                return <Text key={idx}>{desc}</Text>;
              })}
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
