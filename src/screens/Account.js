/*
  Este componente representa la pantalla de la cuenta de usuario.
  Muestra el formulario de inicio de sesión si el usuario no está autenticado, 
  de lo contrario, muestra los datos del usuario.

  Componentes:
    - View: Componente contenedor para organizar otros componentes.
    - LoginForm: Componente para el formulario de inicio de sesión.
    - UserData: Componente para mostrar los datos del usuario autenticado.

  Hooks:
    - useAuth: Hook para acceder al estado de autenticación del usuario.

  Uso:
    - Este componente se utiliza en la navegación de la aplicación 
    para representar la pantalla de la cuenta de usuario.
*/

import React from "react";
import { View } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function Account() {
  const { auth } = useAuth();

  return <View>{auth ? <UserData /> : <LoginForm />}</View>;
}
