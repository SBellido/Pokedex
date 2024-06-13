import React from "react";
import { StyleSheet, View, SafeAreaView, Text, Image } from "react-native";
import { capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

/**
 * Componente Header
 *
 * Este componente muestra el encabezado de la pantalla de detalles de un Pokémon,
 * incluyendo su nombre, número de orden e imagen. El fondo del encabezado cambia
 * de color según el tipo del Pokémon.
 *
 * Props:
 * - name: Nombre del Pokémon.
 * - order: Número de orden del Pokémon.
 * - image: URL de la imagen del Pokémon.
 * - type: Tipo del Pokémon (utilizado para determinar el color de fondo).
 */

export default function Header(props) {
  const { name, order, image, type } = props;
  const color = getColorByPokemonType(type); // Obtiene el color según el tipo de Pokémon
  const bgStyles = [{ backgroundColor: color, ...styles.bg }]; // Estilos de fondo

  return (
    <>
      {/* Fondo de color según el tipo de Pokémon */}
      <View style={bgStyles} />

      {/* Contenido del encabezado */}
      <SafeAreaView style={styles.content}>
        {/* Nombre y número del Pokémon */}
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
        </View>
        {/* Imagen del Pokémon */}
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 27,
  },
  order: {
    color: "#fff",
    fontWeight: "bold",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
