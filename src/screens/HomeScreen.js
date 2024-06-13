/*
  Este componente representa la pantalla de inicio en la aplicación.
  Muestra un texto simple indicando que es la pantalla de inicio 
  y un botón para ir a la pantalla de configuración.

  Props:
    - navigation: Objeto de navegación proporcionado por React Navigation.

  Componentes:
    - SafeAreaView: Componente para garantizar que su contenido 
    se ajuste dentro de áreas seguras en dispositivos con muescas o barras de estado.
    - Text: Componente para mostrar texto en la pantalla.
    - Button: Componente de botón para realizar acciones.

  Funciones:
    - goToSettings: Función para navegar a la pantalla de configuración.

  Uso:
    - Este componente se utiliza en la navegación de la 
    aplicación como la pantalla de inicio.
*/

import React from "react";
import { Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  // Función para navegar a la pantalla de configuración
  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text> HOME </Text>
      <Button onPress={goToSettings} title="Configuración" />
    </SafeAreaView>
  );
}
