import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/Routes';

type BeerDetailsRouteProp = RouteProp<RootStackParamList, 'BeerDetails'>;

export default function BeerDetailsScreen() {
  const route = useRoute<BeerDetailsRouteProp>();
  const { beer } = route.params;

  return (
    <ScrollView style={styles.container }contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>{beer.name}</Text>
      <Text style={styles.subTitle}>
        {beer.type} • {beer.year} • {beer.country}
      </Text>

      {beer.rating !== undefined && (
        <Text style={styles.rating}>⭐ {beer.rating}</Text>
      )}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>País</Text>
        <Text>{beer.country || '—'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Região</Text>
        <Text>{beer.region || '—'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Uvas</Text>
        <Text>{beer.grapes || '—'}</Text>
      </View>

      <View style={styles.sectionRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>Álcool</Text>
          <Text>{beer.alcohol || '—'}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.sectionTitle}>Preço</Text>
          <Text>{beer.price || '—'}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text>{beer.description || 'Sem descrição.'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notas de Degustação</Text>
        <Text>{beer.notes || '—'}</Text>
      </View>

      {beer.pairing && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Harmonização</Text>
          {beer.pairing.map((item, index) => (
            <Text key={index}>• {item}</Text>
          ))}
        </View>
      )}

      {/* Botões de Ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonTextWhite}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  subTitle: { fontSize: 16, color: '#666', marginBottom: 8 },
  rating: { fontSize: 16, color: '#888', marginBottom: 16 },

  section: { marginBottom: 16 },
  sectionRow: { flexDirection: 'row', gap: 12, marginBottom: 16 },
  sectionTitle: { fontWeight: 'bold', color: '#800020', marginBottom: 4 },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 24,
  },
  editButton: {
    backgroundColor: '#800020',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  deleteButton: {
    borderWidth: 1,
    borderColor: '#800020',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#800020',
    fontWeight: 'bold',
  },
    scrollContent: {
    paddingBottom: 80, // ou mais, se necessário para garantir espaço pro botão
  },  

});
