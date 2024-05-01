import React from 'react';
import { Text, View } from 'react-native';

export default function Pokemon(props) {
  const { navigation, route } = props;
  console.log("route: ",route);
  console.log("props: ",props);
  return (
    <View>
      <Text> Estamos en un POKEMON </Text>
    </View>
  )
}
