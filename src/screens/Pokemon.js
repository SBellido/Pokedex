import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Favorite from "../components/Pokemon/Favorite";
import useAuth from "../hooks/useAuth";

/*
  Este componente representa la pantalla de detalles de un 
  Pokemon en la aplicación.
  Muestra información detallada sobre un Pokemon, como su nombre, 
  imagen, tipos y estadísticas.

  Props:
    - navigation: Objeto de navegación proporcionado por React Navigation.
    - route: Objeto de ruta proporcionado por React Navigation 
    que contiene los parámetros de la ruta.

  Estado:
    - pokemon: Estado que almacena los detalles del Pokemon.

  Hooks:
    - useState: Utilizado para manejar el estado 
    de los detalles del Pokemon.
    - useEffect: Utilizado para ejecutar efectos 
    secundarios en componentes funcionales.

  Funciones:
    - Navegación dinámica: Configura los elementos 
    de navegación dinámicamente basándose en el estado 
    de autenticación y los detalles del Pokemon.
    - Carga de detalles del Pokemon: Función para 
    cargar los detalles del Pokemon desde la API.

  Uso:
    - Este componente se utiliza en la navegación de 
    la aplicación para representar la pantalla de detalles de un Pokemon.
*/

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id} />,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
