import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // ou Feather, MaterialIcons etc.
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Telas existentes no projeto
import HomeScreen from '../views/screens/home/home';
import AddBeerScreen from '../views/screens/addBeer/addBeer';
import BeerDetailScreen from '../views/screens/BeerDetails/beerDetails';

// import ExploreScreen from '../views/screens/explore/explore';
// import LearnScreen from '../views/screens/learn/learn';
// import WineListScreen from '../views/screens/wineList/wineList';

// Tipo do vinho (modelo)
import { Beer } from '../models/beer/Beer';

export type RootStackParamList = {
  HomeTabs: undefined;
  AddBeer: undefined;
  BeerDetails: { beer: Beer };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;

          if (route.name === 'Início') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Adega') {
            iconName = focused ? 'wine' : 'wine-outline';
          } else if (route.name === 'Explorar') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Aprenda') {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#800020', // vinho escuro
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} options={{headerTitle:'Minha Adega 🍷',tabBarLabel: 'Início',}}/>
      {/* <Tab.Screen name="Adega" component={WineListScreen} /> */}
      {/* <Tab.Screen name="Explorar" component={ExploreScreen} /> */}
      {/* <Tab.Screen name="Aprenda" component={LearnScreen} /> */}
    </Tab.Navigator>
  );
}


export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="AddBeer" options={{headerTitle:'Adicionar Vinho'}} component={AddBeerScreen} />
        <Stack.Screen name="BeerDetails" component={BeerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
