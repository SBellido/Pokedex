import { API_HOST } from "../utils/constans";

/* 
construye la url
ejecuta la petición HTTP al servidor
formatea los datos obtenido en un JSON y lo retorna */
export async function getPokemonsApi(endpointUrl) {
  console.log("endpointUrl: ",endpointUrl);
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
    const response = await fetch(endpointUrl || url)
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

/* Petición de detalles del Pokemon a la Api */
export async function getPokemonDetailsByUrlApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPokemonDetailsApi(id) {
  try {
    const url = `${API_HOST}/pokemon/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}