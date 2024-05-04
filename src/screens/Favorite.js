import React from "react";
import { SafeAreaView, Text, Button } from "react-native";
import { getPokemonFavoriteApi } from "../api/favorite";

export default function Favorite() {
  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Estamos en FAVORITOS</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
