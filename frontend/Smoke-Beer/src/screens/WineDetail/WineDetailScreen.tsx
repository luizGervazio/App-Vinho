import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function WineDetailScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Vinho</Text>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.value}>Vinho Exemplo</Text>
      <Text style={styles.label}>Safra:</Text>
      <Text style={styles.value}>2020</Text>
      <Text style={styles.label}>Tipo:</Text>
      <Text style={styles.value}>Tinto</Text>
    </View>
  );
}
