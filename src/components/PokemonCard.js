import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export default function PokemonCard(props) {
  const { pokemon } = props;
  const navigation = useNavigation();

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

  const goToPokemon = () => {
    navigation.navigate("Pokemon", { id: pokemon.id });
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, 0)}{" "}
            </Text>
            <Text style={styles.name}> {capitalize(pokemon.name)} </Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 5,
  },
  number: {
    position: "absolute",
    right: 2,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});

// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { capitalize } from "lodash";
// import { useNavigation } from "@react-navigation/native";
// import getColorByPokemonType from "../utils/getColorByPokemonType";
// import Favorite from "../components/Pokemon/Favorite";

// export default function PokemonCard(props) {
//   const { pokemon } = props;
//   const navigation = useNavigation();

//   const pokemonColor = getColorByPokemonType(pokemon.type);
//   const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

//   const goToPokemon = () => {
//     navigation.navigate("Pokemon", { id: pokemon.id });
//   };

//   return (
//     <TouchableWithoutFeedback onPress={goToPokemon}>
//       <View style={styles.card}>
//         <View style={styles.spacing}>
//           <View style={bgStyles}>
//             <Text style={styles.number}>
//               #{`${pokemon.order}`.padStart(3, 0)}{" "}
//             </Text>
//             <Text style={styles.name}> {capitalize(pokemon.name)} </Text>
//             <Image source={{ uri: pokemon.imagen }} style={styles.image} />
//             <Favorite id={pokemon.id} />{" "}
//             {/* Añadir componente de Favoritos aquí */}
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     flex: 1,
//     height: 130,
//   },
//   spacing: {
//     flex: 1,
//     padding: 5,
//   },
//   bgStyles: {
//     flex: 1,
//     borderRadius: 15,
//     padding: 5,
//   },
//   number: {
//     position: "absolute",
//     right: 2,
//     top: 10,
//     color: "#fff",
//     fontSize: 11,
//   },
//   name: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 15,
//   },
//   image: {
//     position: "absolute",
//     bottom: 2,
//     right: 2,
//     width: 90,
//     height: 90,
//   },
// });
