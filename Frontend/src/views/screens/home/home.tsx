import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { getAllWines } from '../../../api/wineService';
import BeerCard from '../../components/card/BeerCard';

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [wines, setWines] = useState([]);

  useEffect(() => {
    getAllWines().then(setWines);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Boas-vindas */}
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTitle}>Bem-vindo à sua Adega Virtual</Text>
        <Text style={styles.welcomeSubtitle}>
          Explore sua coleção de vinhos e descubra novas experiências.
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddBeer')}
        >
          <Text style={styles.addButtonText}>Adicionar Vinho</Text>
        </TouchableOpacity>
      </View>

      {/* Favoritos */}
      <View style={styles.favoritesHeader}>
        <Text style={styles.sectionTitle}>Favoritos</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      {/* Lista dinâmica de vinhos */}
      {wines.map((beer: any) => (
        <TouchableOpacity
          key={beer.id}
          onPress={() => navigation.navigate('BeerDetails', { beer })}
        >
          <BeerCard beer={beer} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },

  welcomeBox: {
    backgroundColor: '#800020',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  welcomeTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  welcomeSubtitle: { color: '#eee', marginVertical: 8 },
  addButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: '#800020',
    fontWeight: 'bold',
  },

  favoritesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  viewAll: { color: '#800020', fontWeight: '600' },

  card: {
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 90,
    borderRadius: 8,
    marginRight: 8,
  },
  star: {
    fontSize: 22,
    color: '#FFD700',
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  cardSub: { fontSize: 14, color: '#666' },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  tag: {
    backgroundColor: '#eee',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    fontSize: 12,
    overflow: 'hidden',
  },
  year: { fontSize: 14, color: '#800020', fontWeight: 'bold' },
  rating: { marginTop: 6, fontSize: 14, color: '#444' },
});
