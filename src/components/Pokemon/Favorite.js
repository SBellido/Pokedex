import React, { useState, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
  addPokemonFavoritesApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

/**
 * Componente Favorite
 *
 * Este componente representa un ícono de corazón que indica si un Pokémon
 * está marcado como favorito. Permite al usuario añadir o eliminar
 * un Pokémon de su lista de favoritos.
 *
 * Props:
 * - id: Identificador del Pokémon.
 */

export default function Favorite(props) {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const Icon = isFavorite ? FontAwesome : FontAwesome5;
  const [reloadCheck, setReloadCheck] = useState(false);
  console.log(isFavorite);

  useEffect(() => {
    /* Verifica si el Pokémon está en la lista de favoritos 
    al montar el componente o cuando cambia el id o reloadCheck */
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  /* Función para alternar el estado de recarga,
  obtiene el valor y le asigna el contrario */
  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  // Añade el Pokémon a la lista de favoritos
  const addFavorite = async () => {
    try {
      await addPokemonFavoritesApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  // Elimina el Pokémon de la lista de favoritos
  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  // Renderiza el ícono de corazón y gestiona el evento onPress
  return (
    <Icon
      name="heart"
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
