import React from "react";
import { TextInput, Button, Text, SafeAreaView } from "react-native";

export default function LoginForm() {
  return (
    <SafeAreaView>
      <Text>Iniciar sesión</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Contraseña" />
      <Button title="Ingresar" onPress={() => console.log("Enviado")} />
    </SafeAreaView>
  );
}
