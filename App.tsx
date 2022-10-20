import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import type { RandomImagesJSON, RandomImagesJSON2 } from './types';

const data = require('./random-images.json') as RandomImagesJSON[];
const data2 = require('./random-images-2.json') as RandomImagesJSON2[];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 24 }}>My Instagram</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
