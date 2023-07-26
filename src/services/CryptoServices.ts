/**
 * Servicio CryptoService
 * 
 * Este servicio proporciona funciones para interactuar con una API de criptomonedas a través de Axios.
 * Permite obtener datos de criptomonedas utilizando el método fetchCryptos.
 */
import axios from 'axios';
import { BASE_URL } from '../utils/Constants';

/**
   * Método para obtener datos de criptomonedas desde la API.
   * 
   * @param {string} endpoint - El punto final de la API para obtener datos específicos de criptomonedas.
   * @returns {Promise<CryptoCurrencyData[]>} - Una promesa que se resuelve con un array de objetos que contiene datos de criptomonedas.
   * @throws {Error} - Si ocurre un error al obtener los datos de la API, se lanzará un error con un mensaje descriptivo.
*/
class CryptoService {
  async fetchCryptos(endpoint: string): Promise<CryptoCurrencyData[]> {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`);
      return response.data.data;
    } catch (error) {
      console.log(`${BASE_URL}${endpoint}`);
      throw new Error('Error al obtener los datos de criptomonedas.');
    }
  }
}

export default CryptoService;
