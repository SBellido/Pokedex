/*
  Este hook proporciona acceso al contexto de 
  autenticación en componentes funcionales.
  Permite acceder al estado de autenticación y a 
  las funciones de inicio y cierre de sesión.

  Hooks:
    - useContext: Utilizado para acceder al contexto 
    de autenticación proporcionado por AuthContext.

  Uso:
    - Este hook se utiliza en componentes funcionales 
    que necesitan acceder al contexto de autenticación 
    para obtener información de autenticación o realizar 
    acciones de inicio y cierre de sesión.
*/

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default () => useContext(AuthContext);
