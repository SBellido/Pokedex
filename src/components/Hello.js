import React from 'react'
import { Text, View } from 'react-native'

export default function Hello(props) {
  // const { name } = props;
   const { firstname, lastname } = props;

    return (
      <View>
        <Text> 
          Hola {firstname} {lastname}
        </Text>
      </View>
    );
}

Hello.defaultProps = {
  firstname: "Sebastián",
  lastname: "Bellido",
};
