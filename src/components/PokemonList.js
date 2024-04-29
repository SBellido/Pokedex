import React from 'react'
import { Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'

export default function PokemonList(props) {
  const {pokemons } = props;

  console.log(props);
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) =>String(pokemon.id)}
      renderItem={({item}) => <Text>{item.name}</Text>}
      contentContainerStyle={styles.flatListContentContainer}
    />
  )
}

const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 15
  }
})