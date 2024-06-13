import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  Keyboard,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

/**
 * Componente LoginForm
 *
 * Este componente proporciona un formulario de inicio de sesión con validación de campo y manejo de errores.
 * Utiliza `useFormik` para gestionar el estado del formulario y la validación.
 */

export default function LoginForm() {
  // Estado local para gestionar mensajes de error
  const [error, setError] = useState("");
  // Hook personalizado para gestionar la autenticación
  const { login } = useAuth();

  // Configuración del formulario usando useFormik
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;

      // Validación de las credenciales de usuario
      if (username !== user.username || password !== user.password) {
        setError("El usuario o la contraseña no son correctos");
      } else {
        login(userDetails);
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}> Iniciar sesión </Text>
      <TextInput
        placeholder="Nombre de usuario"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      ></TextInput>
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      ></TextInput>
      <Button style={styles.btn} title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>
    </View>
  );
}

// Función que retorna los valores iniciales del formulario
function initialValues() {
  return {
    username: "",
    password: "",
  };
}

// Esquema de validación para el formulario usando Yup
function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  };
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#F00",
  },
  error: {
    textAlign: "center",
    color: "#f00",
    // marginBottom: 20,
  },
});
