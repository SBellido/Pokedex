import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { getPokemnosApi } from "../api/pokemon";

export default function PokedexScreen() {
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
    console.log(response);
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
