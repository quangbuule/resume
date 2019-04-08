import React from 'react';
import { View } from '@react-pdf/renderer';

export default function HorzRuler() {
  return (
    <View style={styles.root}>
      <View style={styles.line} />
      <View style={styles.dot} />
    </View>
  );
}

const styles = {
  root: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.5,
  },
  dot: {
    width: 12,
    height: 12,
    border: '1pt solid #00000',
    borderRadius: 2,
    opacity: 0.5,
  },
};
