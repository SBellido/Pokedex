import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

/**
 * Componente Type
 *
 * Este componente muestra los tipos de un Pokémon en forma de etiquetas (pills).
 * Cada etiqueta tiene un color de fondo que corresponde al tipo del Pokémon.
 *
 * Props:
 * - types: Array de objetos que contiene los tipos del Pokémon.
 *   Cada objeto debe tener la forma { type: { name: string } }.
 */

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(item.type.name),
          }}
        >
          <Text style={styles.type}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  type: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
  },
});
