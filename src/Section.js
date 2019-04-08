import React from 'react';
import { View } from '@react-pdf/renderer';
import { Heading } from './Typo';
import usePrimaryColor from './usePrimaryColor';
import HorzRuler from './HorzRuler';

export default function Section({ title, children }) {
  return (
    <View>
      <View style={styles.header}>
        <Heading style={styles.headerText}>{title}</Heading>
        <HorzRuler />
      </View>
      <View>{children}</View>
    </View>
  );
}

export const Row = (Section.Row = function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
});

export const LeftCol = (Section.LeftCol = function LeftCol({ children }) {
  const primaryColor = usePrimaryColor();

  return (
    <View style={{ ...styles.leftCol, borderLeftColor: primaryColor }}>
      {children}
    </View>
  );
});

export const RightCol = (Section.RightCol = function RightCol({ children }) {
  return <View style={styles.rightCol}>{children}</View>;
});

const styles = {
  header: {
    flexDirection: 'row',
  },

  headerText: {
    width: 128,
    marginRight: 24,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 12,
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
