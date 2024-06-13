/*
  Este componente representa la pantalla para crear un desafío en la aplicación.
  Muestra un texto simple indicando que es la pantalla para crear un desafío.

  Componentes:
    - SafeAreaView: Componente para garantizar que su 
    contenido se ajuste dentro de áreas seguras en dispositivos 
    con muescas o barras de estado.
    - Text: Componente para mostrar texto en la pantalla.

  Uso:
    - Este componente se utiliza en la navegación de 
    la aplicación para representar la pantalla para crear un desafío.
*/

import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function ChallengeScreen() {
  return (
    <SafeAreaView>
      <Text> Pantalla para crear Desafío </Text>
    </SafeAreaView>
  );
}
