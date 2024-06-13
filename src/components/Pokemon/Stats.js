import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { map, capitalize } from "lodash";

/**
 * Componente Stats
 *
 * Este componente muestra las estadísticas base de un Pokémon en una vista detallada.
 * Cada estadística tiene un nombre, un valor numérico y una barra que indica visualmente
 * el valor de la estadística.
 *
 * Props:
 * - stats: Array de objetos que contiene las estadísticas base del Pokémon.
 *   Cada objeto debe tener la forma { stat: { name: string }, base_stat: number }.
 */

export default function Stats(props) {
  const { stats } = props;

  /**
   * Función barStyles
   *
   * Esta función determina el estilo de la barra de progreso de una estadística
   * basándose en su valor numérico. Si el valor es mayor a 49, la barra será verde,
   * de lo contrario, será roja.
   *
   * @param {number} num - El valor numérico de la estadística.
   * @returns {object} - Un objeto de estilos para la barra de progreso.
   */
  const barStyles = (num) => {
    const color = num > 49 ? "#00ac17" : "#ff3e3e";
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}> Base Stats </Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
  },
  statName: {
    fontSize: 12,
    color: "#6b6b6b",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    backgroundColor: "#dedede",
    width: "88%",
    height: 5,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    // backgroundColor: "red",
    // width: "100%",
    height: 5,
    borderRadius: 20,
  },
});
