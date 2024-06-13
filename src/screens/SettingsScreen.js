import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

/*
  Este componente representa la pantalla de 
  configuración en la aplicación.
  Muestra un texto simple indicando que es la pantalla 
  de configuración y un botón para regresar a la pantalla de inicio.

  Props:
    - navigation: Objeto de navegación 
    proporcionado por React Navigation.

  Funciones:
    - goToPage: Función para navegar 
    a una página específica.

  Uso:
    - Este componente se utiliza en la navegación 
    de la aplicación como la pantalla de configuración.
*/

export default function SettingsScreen(props) {
  const { navigation } = props;

  // Función para navegar a una página específica
  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Button onPress={() => goToPage("Home")} title="Inicio" />
    </SafeAreaView>
  );
}
