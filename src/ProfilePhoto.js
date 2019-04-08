import React from 'react';
import { View, Image } from '@react-pdf/renderer';
import profilePhoto from './profilePhoto.jpg';

export default function ProfilePhoto() {
  return (
    <View style={styles.root}>
      <Image style={styles.image} src={profilePhoto} />
    </View>
  );
}

const styles = {
  root: {
    width: 128,
    height: 128,
  },

  image: {
    borderRadius: 4,
  },
};
