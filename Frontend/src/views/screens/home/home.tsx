import React from 'react';
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


export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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

      {/* Card mockado */}
      <TouchableOpacity
  onPress={() =>
    navigation.navigate('BeerDetails', {
            beer: {
                id: 'mock1',
                name: 'Château Margaux',
                type: 'Tinto',
                year: '2015',
                country: 'França',
                region: 'Bordeaux',
                grapes: 'Cabernet Sauvignon, Merlot, Petit Verdot, Cabernet Franc',
                alcohol: '13.5%',
                price: 'R$ 950,00',
                rating: 4.9,
                description:
                'Um vinho Premier Cru Classé de Bordeaux, conhecido por sua elegância e complexidade.',
                notes:
                'Aromas de frutas negras, violetas e cedro, com taninos sedosos e final persistente.',
                pairing: ['Carnes vermelhas', 'Cordeiro', 'Queijos maduros'],
            },
            })
        }
        >
        <View style={styles.card}>
            <View style={styles.cardTop}>
            <Image
                source={{
                uri: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Chateau_Margaux.jpg',
                }}
                style={styles.image}
            />
            <Text style={styles.star}>⭐</Text>
            </View>
            <Text style={styles.cardTitle}>Château Margaux</Text>
            <Text style={styles.cardSub}>Bordeaux, França</Text>
            <View style={styles.cardDetails}>
            <Text style={styles.tag}>Tinto</Text>
            <Text style={styles.year}>2015</Text>
            </View>
            <Text style={styles.rating}>⭐ 4.9</Text>
        </View>
        </TouchableOpacity>
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
