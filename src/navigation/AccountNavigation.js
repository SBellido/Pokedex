/*
  Este componente define la navegación para 
  la pantalla de la cuenta de usuario.
  Utiliza createStackNavigator de react-navigation 
  para crear una pila de navegación.

  Componentes:
    - Stack.Navigator: Componente que 
    representa la pila de navegación.
    - Stack.Screen: Componente que define 
    una pantalla en la pila de navegación.

  Uso:
    - Este componente se utiliza en el componente 
    principal de navegación de la aplicación para 
    definir la navegación a la pantalla de la cuenta de usuario.
*/

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/Account";

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  );
}
