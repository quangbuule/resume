import React from 'react';
import { View } from '@react-pdf/renderer';
import useProfile from './useProfile';
import ProfilePhoto from './ProfilePhoto';

import { Text } from './Typo';

export default function Contact() {
  const profile = useProfile();
  return (
    <View style={styles.root}>
      <ProfilePhoto />
      <View style={styles.container0}>
        <Text weight="light" style={styles.name}>
          {profile.name}
        </Text>
        <Text style={styles.title}>{profile.title}</Text>
        <View style={styles.container1}>
          <View style={styles.dl}>
            <Text style={styles.dt} weight="bold">
              P
            </Text>
            <Text style={styles.dd}>+6 481 942 012</Text>
          </View>
          <View style={styles.dl}>
            <Text style={styles.dt} weight="bold">
              E
            </Text>
            <Text style={styles.dd}>quangbuule@gmail.com</Text>
          </View>
          <View style={styles.dl}>
            <Text style={styles.dt} weight="bold">
              G
            </Text>
            <Text style={styles.dd}>github.com/quangbuule</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = {
  root: {
    flexDirection: 'row',
  },
  container0: {
    height: 128,
    marginLeft: 24,
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Roboto',
  },

  container1: {
    marginTop: 'auto',
  },
  dl: {
    flexDirection: 'row',
  },
  dt: {
    width: 20,
  },
  dd: {
    flex: 1,
  },
};
