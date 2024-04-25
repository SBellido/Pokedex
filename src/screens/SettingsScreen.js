import React from 'react'
import { Text, View, Button } from 'react-native'

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToPage = (pageName) => {
    navigation.navigate(pageName);
  }

  return (
    <View>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Text> eSTAMOS EN sETTINGDsCREEN </Text>
      <Button onPress={() => goToPage('Home')} title='Inicio'/>
    </View>
  )
}
