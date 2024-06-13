/*
  Este componente representa la pantalla de logros en la aplicación.
  Muestra un texto simple indicando que es la pantalla de logros.

  Componentes:
    - SafeAreaView: Componente para garantizar que su contenido 
    se ajuste dentro de áreas seguras en dispositivos 
    con muescas o barras de estado.
    - Text: Componente para mostrar texto en la pantalla.

  Uso:
    - Este componente se utiliza en la navegación de la 
    aplicación para representar la pantalla de logros.
*/

import React from "react";
import { Text, SafeAreaView } from "react-native";

export default function AchievementsScreen() {
  return (
    <SafeAreaView>
      <Text> Pantalla de logros </Text>
    </SafeAreaView>
  );
}
