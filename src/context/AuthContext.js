/*
  Este componente proporciona un contexto de 
  autenticación para toda la aplicación.
  Almacena el estado de autenticación del usuario 
  y proporciona funciones para iniciar sesión y cerrar sesión.

  Props:
    - children: Componentes hijos que deben tener 
    acceso al contexto de autenticación.

  Estado:
    - auth: Estado que almacena la información 
    de autenticación del usuario.

  Hooks:
    - useState: Utilizado para manejar el estado 
    de autenticación del usuario.

  Componentes:
    - AuthContext.Provider: Proporciona el contexto de 
    autenticación a los componentes hijos.

  Métodos:
    - login: Función utilizada para iniciar sesión. 
    Actualiza el estado de autenticación con los datos del usuario.
    - logout: Función utilizada para cerrar sesión. 
    Restablece el estado de autenticación a undefined.

  Uso:
    - Este componente se utiliza como el componente padre de 
    la aplicación para proporcionar el contexto de autenticación 
    a todos los componentes hijos que lo necesiten.
*/

import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  login: () => {},
  logout: () => {},
});

export function AuthProvider(props) {
  const { children } = props;
  const [auth, setAuth] = useState(undefined);

  // Función para iniciar sesión
  const login = (userData) => {
    setAuth(userData);
  };

  // Función para cerrar sesión
  const logout = () => {
    setAuth(undefined);
  };

  /* Objeto de contexto que contiene el estado de autenticación 
  y las funciones de inicio y cierre de sesión.*/
  const valueContext = {
    auth,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
