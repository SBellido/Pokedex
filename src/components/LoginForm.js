import React, { Component } from 'react'
import { TextInput, Button, Text, View } from 'react-native'

export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text>Iniciar sesión</Text>
        <TextInput placeholder='Email'/>
        <TextInput placeholder='Contraseña'/>
        <Button title='Ingresar' onPress={() => console.log("Enviado")} />
      </View>
    )
  }
}
