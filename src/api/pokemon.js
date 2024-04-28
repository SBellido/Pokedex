import { API_HOST } from "../utils/constans";

/* 
construye la url
ejecuta la petición HTTP al servidor
formatea los datos obtenido en un JSON y lo retorna */
export async function getPokemnosApi() {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(url)
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}