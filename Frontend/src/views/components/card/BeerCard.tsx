import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Beer } from '../../../models/beer/Beer';

interface Props {
  beer: Beer;
}

export default function BeerCard({ beer }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{beer.name}</Text>
      <Text>{beer.type} • {beer.year}</Text>
      {beer.rating && <Text>Nota: {beer.rating}/5</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
