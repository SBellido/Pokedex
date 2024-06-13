/*
  Este componente representa la pantalla de instrucciones en la aplicación.
  Muestra un texto simple indicando que es la pantalla de instrucciones.

  Componentes:
    - SafeAreaView: Componente para garantizar que su contenido 
    se ajuste dentro de áreas seguras en dispositivos con muescas o barras de estado.
    - Text: Componente para mostrar texto en la pantalla.

  Uso:
    - Este componente se utiliza en la navegación de la 
    aplicación para representar la pantalla de instrucciones.
*/
import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function InstructionsScreen() {
  return (
    <SafeAreaView>
      <Text> Pantalla de Instrucciones </Text>
    </SafeAreaView>
  );
}
