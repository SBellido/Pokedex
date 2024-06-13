/*
  Este componente representa la sección de datos del usuario.
  Muestra información personal del usuario autenticado, como su nombre, username, email y la cantidad de pokemons favoritos.

  Props:
    - Ninguna.

  Estado:
    - total: Un estado que guarda el número total de pokemons favoritos del usuario.

  Hooks:
    - useFocusEffect: Utilizado para ejecutar una función cuando el componente obtiene el foco.
                      Se utiliza para actualizar el número total de pokemons favoritos del usuario.
                      Se utiliza el hook useCallback para evitar que la función de efecto se cree en cada renderizado.
    - useEffect: Utilizado para realizar una solicitud asincrónica para obtener los pokemons favoritos del usuario cuando el componente se monta.
                  Actualiza el estado total con el tamaño de la respuesta.
                  Maneja el caso de error estableciendo el total en 0.

  Componentes:
    - ItemMenu: Un componente funcional que muestra un título y un texto en una fila.

  Métodos:
    - Ninguno.

  Uso:
    - Este componente se utiliza en la pantalla de perfil del usuario.
*/

import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../api/favorite";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido, </Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu
          title="Nombre: "
          text={`${auth.firstName} ${auth.lastName}`}
        />
        <ItemMenu title="Username: " text={`${auth.username}`} />
        <ItemMenu title="Email: " text={`${auth.email}`} />
        <ItemMenu title="Favoritos: " text={`${total} pokemons`} />
      </View>

      <Button title="Cerrar sesión" onPress={logout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
});
