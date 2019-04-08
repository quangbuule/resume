import React from 'react';
import { View } from '@react-pdf/renderer';
import { Text, Heading } from './Typo';
import HorzRuler from './HorzRuler';

export default function References({ title, children }) {
  return (
    <View>
      <View style={styles.root}>
        <Heading style={styles.label}>References</Heading>
        <HorzRuler />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftCol}>
          <Text weight="bold">Outfit</Text>
        </View>
        <View style={styles.rightCol}>
          <Text weight="bold">Nguyen Manh Quoc Anh</Text>
          <Text>nmqanh@gmail.com (‭+61 498 496 028‬)</Text>
        </View>
      </View>
    </View>
  );
}
const styles = {
  root: {
    flexDirection: 'row',
  },

  label: {
    width: 128,
    marginRight: 24,
  },

  leftCol: {
    borderLeftWidth: 4,
    borderLeftStyle: 'solid',
    paddingLeft: 12,
    width: 128,
  },

  rightCol: {
    flex: 1,
    marginLeft: 24,
  },
};
