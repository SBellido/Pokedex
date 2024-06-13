/*
  Este componente define la navegación mediante 
  un Stack Navigator nativo, que muestra las 
  pantallas una encima de la otra.
  Utiliza createNativeStackNavigator de 
  @react-navigation/native-stack para crear la navegación.

  Componentes:
    - Stack.Navigator: Componente que representa 
    la navegación del Stack Navigator.
    - Stack.Screen: Componente que define 
    una pantalla en la navegación.

  Uso:
    - Este componente se utiliza como la navegación 
    principal de la aplicación cuando se desea mostrar 
    las pantallas una encima de la otra.
*/

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
