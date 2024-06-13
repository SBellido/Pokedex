/*
  Este componente representa la pantalla de Favoritos en la aplicación.
  Muestra una lista de Pokemons favoritos del usuario autenticado.

  Estado:
    - pokemons: Estado que almacena la lista de Pokemons favoritos.

  Hooks:
    - useState: Utilizado para manejar el estado de la lista de Pokemons favoritos.
    - useCallback: Utilizado para memorizar una función callback.
    - useFocusEffect: Hook de @react-navigation/native utilizado 
    para ejecutar efectos cuando la pantalla obtiene el foco.

  Componentes:
    - NoLoggued: Componente que se muestra cuando el usuario no está autenticado.
    - PokemonList: Componente para mostrar una lista de Pokemons.

  Uso:
    - Este componente se utiliza en la navegación de la aplicación 
    para representar la pantalla de Favoritos.
*/

import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getPokemonsFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";
import useAuth from "../hooks/useAuth";
import NoLoggued from "../components/NoLoggued";
import PokemonList from "../components/PokemonList";

export default function Favorite() {
  const [pokemons, setPokemons] = useState([]);
  const { auth } = useAuth();

  // Efecto que se ejecuta cuando la pantalla obtiene el foco
  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type: pokemonDetails.types[0].type.name,
              order: pokemonDetails.order,
              imagen:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return !auth ? <NoLoggued /> : <PokemonList pokemons={pokemons} />;
}
