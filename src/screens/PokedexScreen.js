import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

import PokemonList from '../components/PokemonList';

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
        type: pokemonDetails.types[0].type?.name || 'Unknown',
        order: pokemonDetails.order,
        imagen: pokemonDetails.sprites.other['official-artwork'].front_default
      });
    }

    /* añade todo lo nuevo sumado a lo que ya existía */
    setPokemons([...pokemons, ...pokemonsArray]);
  } catch (error) {
    console.log(error);
  }
}

  return (
    <SafeAreaView>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  )
}
