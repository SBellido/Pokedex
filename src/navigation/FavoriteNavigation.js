/*
  Este componente define la navegación para 
  la pantalla de Favoritos y la pantalla de detalles de Pokemon.
  Utiliza createStackNavigator de @react-navigation/stack 
  para crear una pila de navegación.

  Componentes:
    - Stack.Navigator: Componente que representa la pila de navegación.
    - Stack.Screen: Componente que define una pantalla en la pila de navegación.

  Uso:
    - Este componente se utiliza en el componente principal 
    de navegación de la aplicación para definir la navegación 
    a las pantallas de Favoritos y detalles de Pokemon.
*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FavoriteScreen from "../screens/Favorite";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: "", headerTransparent: true }}
        // options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
