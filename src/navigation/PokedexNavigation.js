/*
  Este componente define la navegación 
  para la pantalla de la Pokédex y la pantalla de detalles de Pokemon.
  Utiliza createStackNavigator de @react-navigation/stack 
  para crear una pila de navegación.

  Componentes:
    - Stack.Navigator: Componente que representa la pila de navegación.
    - Stack.Screen: Componente que define una pantalla en la pila de navegación.

  Uso:
    - Este componente se utiliza en el componente principal 
    de navegación de la aplicación para definir la navegación 
    a las pantallas de la Pokédex y detalles de Pokemon.
*/
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";

const Stack = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={PokedexScreen}
        options={{ title: "", headerTransparent: true }}
      />
      <Stack.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
