/*
  Función que devuelve el color 
  correspondiente a un tipo de Pokemon.

  - getColorByPokemonType: Función que recibe un tipo 
  de Pokemon como argumento y devuelve su color correspondiente.

  Uso:
    - Esta función se utiliza para obtener el color 
    de fondo de un tipo de Pokemon en diferentes partes 
    de la aplicación, como en las tarjetas de Pokemon o 
    en la pantalla de detalles del Pokemon.
*/

import { POKEMON_TYPE_COLORS } from "./constans";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;
