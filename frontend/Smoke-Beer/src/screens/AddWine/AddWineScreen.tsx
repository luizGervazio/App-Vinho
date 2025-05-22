import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type AddWineScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddWine'>;

export default function AddWineScreen() {
  const navigation = useNavigation<AddWineScreenNavigationProp>();
  const [nome, setNome] = useState('');
  const [safra, setSafra] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSalvar = () => {
    if (!nome || !safra || !tipo) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    Alert.alert('Sucesso', `🍷 Vinho "${nome}" salvo com sucesso!`);

    // Aqui você pode salvar no AsyncStorage ou enviar para backend futuramente

    // Limpa campos e volta para Home
    setNome('');
    setSafra('');
    setTipo('');
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Vinho</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do vinho"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Safra"
        value={safra}
        onChangeText={setSafra}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo (tinto, branco, rosé...)"
        value={tipo}
        onChangeText={setTipo}
      />
      <Button title="Salvar vinho" onPress={handleSalvar} />
    </View>
  );
}
