import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../routes/Routes';

type EditBeerRouteProp = RouteProp<RootStackParamList, 'EditBeer'>;

export default function EditBeerScreen() {
  const route = useRoute<EditBeerRouteProp>();
  const { beer } = route.params;

  const [name, setName] = useState(beer.name || '');
  const [producer, setProducer] = useState(beer.producer || '');
  const [type, setType] = useState(beer.type || '');
  const [year, setYear] = useState(beer.year || '');
  const [country, setCountry] = useState(beer.country || '');
  const [region, setRegion] = useState(beer.region || '');

  const beerTypes = ['Pilsen', 'IPA', 'Stout', 'Weiss', 'Lager', 'Ale'];

  const isFormValid = name && producer && type && year && country && region;

  const handleSave = () => {
    if (!isFormValid) {
      Alert.alert('Preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode fazer a lógica de salvamento (ex: chamada API, update local etc)
    Alert.alert('Cerveja editada com sucesso!');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.sectionTitle}>Editar Cerveja</Text>

      <TextInput
        placeholder="Nome da cerveja*"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Produtor*"
        style={styles.input}
        value={producer}
        onChangeText={setProducer}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
        >
          <Picker.Item label="Selecione um tipo" value="" />
          {beerTypes.map((b) => (
            <Picker.Item key={b} label={b} value={b} />
          ))}
        </Picker>
      </View>

      <TextInput
        placeholder="Ano de fabricação*"
        style={styles.input}
        keyboardType="numeric"
        value={year}
        onChangeText={setYear}
      />

      <TextInput
        placeholder="País*"
        style={styles.input}
        value={country}
        onChangeText={setCountry}
      />

      <TextInput
        placeholder="Região*"
        style={styles.input}
        value={region}
        onChangeText={setRegion}
      />

      <View style={styles.imagePicker}>
        <View style={styles.imageBox}>
          <Text style={{ fontSize: 24 }}>🖼️</Text>
        </View>
        <TouchableOpacity style={styles.chooseImageButton}>
          <Text style={styles.chooseImageText}>Escolher imagem</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleSave}
        disabled={!isFormValid}
      >
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 16,
    color: '#800020',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 16,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#800020',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 16,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  imageBox: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  chooseImageButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 6,
  },
  chooseImageText: {
    fontWeight: 'bold',
    color: '#444',
  },
});
