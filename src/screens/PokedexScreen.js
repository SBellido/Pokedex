import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { getPokemnosApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState();
console.log("pokemons: ", pokemons);
  useEffect(() => {
    /*función anónima autoejecutable, espera a
    cargar todos lo pokemon y despues se ejecuta*/ 
    (async () => {
      await loadPokemon();
    })();
  }, [])

const loadPokemon = async () => {
  try {
    const response = await getPokemnosApi();
    
    const pokemonsArray = [];
    for await (const pokemon of response.results) {
      const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);

      pokemonsArray.push({
        id: pokemonDetails.id,
        name: pokemonDetails.name,
        types: pokemonDetails.order,
        imagen: pokemonDetails.sprites.other['official-artwork'].front_default
      });
    }

    setPokemons([...pokemons, ...pokemonsArray]);

  } catch (error) {
    console.log(error);
  }
}

  return (
    <SafeAreaView>
      <Text> POKEDEX </Text>
    </SafeAreaView>
  )
}
