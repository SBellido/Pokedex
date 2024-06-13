/*
  Este componente define la navegación mediante 
  un Drawer Navigator, que muestra un menú lateral deslizable.
  Utiliza createDrawerNavigator de @react-navigation/drawer 
  para crear la navegación.

  Componentes:
    - Drawer.Navigator: Componente que representa 
    la navegación del Drawer Navigator.
    - Drawer.Screen: Componente que define una pantalla en la navegación.

  Uso:
    - Este componente se utiliza como la navegación principal 
    de la aplicación cuando se desea tener un menú lateral deslizable.
*/

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
