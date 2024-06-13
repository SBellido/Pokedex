import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import PokemonList from "../components/PokemonList";

/*
  Este componente representa la pantalla de la Pokédex en la aplicación.
  Muestra una lista de Pokemons obtenidos de la API.

  Estado:
    - pokemons: Estado que almacena la lista de Pokemons.
    - nextUrl: Estado que almacena la URL de la siguiente 
    página de resultados de la API.

  Hooks:
    - useState: Utilizado para manejar el estado de la lista 
    de Pokemons y la URL de la siguiente página.
    - useEffect: Utilizado para ejecutar efectos secundarios 
    en componentes funcionales.

  Funciones:
    - loadPokemons: Función para cargar la lista de Pokemons desde la API.

  Uso:
    - Este componente se utiliza en la navegación de 
    la aplicación para representar la pantalla de la Pokédex.
*/


export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  useEffect(() => {
    /* función anónima autoejecutable, espera a
    cargar todos lo pokemon y despues se ejecuta */
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response.next);

      const pokemonsArray = [];
      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          imagen:
            pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      /* añade todo lo nuevo sumado a lo que ya existía */
      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsArray]);
      // setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
