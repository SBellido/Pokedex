import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constans";

export async function getPokemonFavoriteApi() {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
    return JSON.parse(response || []);
  } catch (error) {
    throw error;
  }
}

export async function addPokemonFavoritesApi(id) {
  try {
    const favorites = await getPokemonFavoriteApi();
    favorites.push(id);
    await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
  } catch (error) {
    throw error;
  }
}

export async function isPokemonFavoriteApi(id) {
  try {
    const response = await getPokemonFavoriteApi();
    return includes(response, id);
  } catch (error) {}
}
