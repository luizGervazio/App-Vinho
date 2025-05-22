import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import AddWineScreen from '../screens/AddWine/AddWineScreen';
import WineDetailScreen from '../screens/WineDetail/WineDetailScreen';

export type RootStackParamList = {
  Home: undefined;
  AddWine: undefined;
  WineDetail: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Minha Adega' }} />
      <Stack.Screen name="AddWine" component={AddWineScreen} options={{ title: 'Adicionar Vinho' }} />
      <Stack.Screen name="WineDetail" component={WineDetailScreen} options={{ title: 'Detalhes do Vinho' }} />
    </Stack.Navigator>
  );
}
