import React from 'react'
import { Text, View } from 'react-native'

export default function Hello(props) {
  const { name } = props;

    return (
      <View>
        <Text> Hola { name } </Text>
      </View>
    )
}
