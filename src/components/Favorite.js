import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { addPokemonFavoritesApi } from "../api/favorite";

export default function Favorite(props) {
  const { id } = props;

  const addFavorite = async () => {
    await addPokemonFavoritesApi(id);
  };

  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
