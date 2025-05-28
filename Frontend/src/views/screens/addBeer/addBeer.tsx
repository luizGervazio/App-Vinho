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
import { useNavigation } from '@react-navigation/native';

export default function AddBeerScreen() {
  const navigation = useNavigation();
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const [name, setName] = useState('');
  const [producer, setProducer] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');

  const wineTypes = ['Tinto', 'Branco', 'Rosé', 'Espumante', 'Sobremesa'];

  const isFormValid = name && producer && type && year;

  const handleNext = () => {
    if (!isFormValid) {
      Alert.alert('Preencha todos os campos obrigatórios.');
      return;
    }
    setStep(2);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Etapas */}
      <View style={styles.steps}>
        <View style={styles.stepConnector} />

        {/* Etapa 1 */}
        <View style={styles.step}>
          <View style={[
            styles.stepCircle,
            step === 1 ? styles.activeStepCircle : styles.inactiveStepCircle,
          ]}>
            <Text style={[
              styles.stepNumber,
              step === 1 ? styles.activeStepText : styles.inactiveStepText,
            ]}>1</Text>
          </View>
          <Text style={styles.stepLabel}>Básico</Text>
        </View>

        {/* Etapa 2 */}
        <View style={styles.step}>
          <View style={[
            styles.stepCircle,
            step === 2 ? styles.activeStepCircle : styles.inactiveStepCircle,
          ]}>
            <Text style={[
              styles.stepNumber,
              step === 2 ? styles.activeStepText : styles.inactiveStepText,
            ]}>2</Text>
          </View>
          <Text style={styles.stepLabel}>Origem</Text>
        </View>
      </View>

      {/* Etapa 1 */}
      {step === 1 && (
        <>
          <Text style={styles.sectionTitle}>Informações básicas</Text>

          <TextInput
            placeholder="Nome do vinho*"
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
              {wineTypes.map((w) => (
                <Picker.Item key={w} label={w} value={w} />
              ))}
            </Picker>
          </View>

          <TextInput
            placeholder="Ano/Safra*"
            style={styles.input}
            keyboardType="numeric"
            value={year}
            onChangeText={setYear}
          />

          <TouchableOpacity
            style={[styles.button, !isFormValid && styles.disabledButton]}
            onPress={handleNext}
            disabled={!isFormValid}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Etapa 2 */}
      {step === 2 && (
        <>
          <Text style={styles.sectionTitle}>Origem</Text>

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

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => setStep(1)}
            >
              <Text style={styles.outlineButtonText}>Voltar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, !country || !region ? styles.disabledButton : null]}
              onPress={() => Alert.alert('Salvo!')}
              disabled={!country || !region}
            >
              <Text style={styles.buttonText}>Salvar vinho</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#800020',
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
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
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  // Etapas (Stepper)
  steps: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 22,
    position: 'relative',
  },
  stepConnector: {
    position: 'absolute',
    top: 15, // alinhamento visual com o centro dos círculos
    left: 32,
    right: 32,
    height: 2,
    backgroundColor: '#ccc',
    zIndex: -1,
  },
  step: {
    alignItems: 'center',
  },
  stepCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepNumber: {
    fontWeight: 'bold',
  },
  activeStepCircle: {
    backgroundColor: '#800020',
  },
  inactiveStepCircle: {
    backgroundColor: '#E0E0E0',
  },
  activeStepText: {
    color: '#fff',
  },
  inactiveStepText: {
    color: '#444',
  },
  stepLabel: {
    fontSize: 12,
    color: '#444',
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
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  outlineButton: {
    borderWidth: 1,
    borderColor: '#800020',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 6,
    flex: 1,
    alignItems: 'center',
  },
  outlineButtonText: {
    color: '#800020',
    fontWeight: 'bold',
  },

});

