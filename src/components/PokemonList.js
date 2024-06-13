/*
  Este componente representa una lista de Pokemons que se 
  muestra en la pantalla principal de la aplicación.
  Utiliza un FlatList para renderizar las tarjetas de Pokemon.

  Props:
    - pokemons: Un array de objetos que contiene la información 
    de los Pokemons a mostrar en la lista.
    - loadPokemons: Función que se activa cuando se llega al 
    final de la lista y se necesitan cargar más Pokemons.
    - isNext: Booleano que indica si hay más Pokemons para cargar.

  Estado:
    - Ninguno.

  Hooks:
    - Ninguno.

  Componentes:
    - PokemonCard: Componente utilizado para renderizar cada 
    tarjeta de Pokemon en la lista.

  Métodos:
    - loadMore: Función que se activa cuando se llega al final 
    de la lista y carga más Pokemons.

  Uso:
    - Este componente se utiliza en la pantalla principal de 
    la aplicación para mostrar una lista de Pokemons.
*/

import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
} from "react-native";
import PokemonCard from "./PokemonCard";

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  // Función para cargar más Pokemons cuando se llega al final de la lista.
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      // onEndReached={() => isNext !== null && loadMore()}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === "android" ? 90 : 60,
  },
});
