import React from 'react'
import { TextInput, Button, Text, View } from 'react-native'

export default function LoginForm() {
  return (
    <View>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder='Email'/>
      <TextInput placeholder='Contraseña'/>
      <Button title='Ingresar' onPress={() => console.log("Enviado")} />
    </View>
  );
}
