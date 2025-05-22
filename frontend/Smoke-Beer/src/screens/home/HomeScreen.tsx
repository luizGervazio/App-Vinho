import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍷 Minha Adega</Text>
      <Text style={styles.subtitle}>Bem-vindo ao seu app de vinhos!</Text>
      <Button
        title="Adicionar vinho"
        onPress={() => navigation.navigate('AddWine')}
      />
    </View>
  );
};

export default HomeScreen;
